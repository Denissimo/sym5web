<?php

namespace App\Service\Proxy;

class Proxy {

    /**
     * Holds proxy configuration parameters
     *
     * @var ProxyConfig
     */

    public $proxyConfig;

    /**
     * Holds the referer associated with client request
     *
     * @var string
     */

    public $referer;

    /**
     * Holds a collection of server urls listed in configuration (keys same as keys in config, but lowercase).
     *
     * @var array
     */

    public $serverUrls;

    /**
     * Log object used for writing messages
     *
     * @var ProxyLog
     */

    public $proxyLog;

    /**
     * Meter object used for rate metering
     *
     * @var RateMeter
     */

    public $meter;

    /**
     * Holds headers returned by the proxied resource
     *
     * @var array
     */

    public $headers = array();

    /**
     * cURL resource used to send HTTP requests
     *
     * @var resource
     */

    public $ch;

    /**
     * Holds the action associated with the request (post, get)
     *
     * @var string
     */

    public $proxyMethod;

    /**
     * Holds the URL being requested
     *
     * @var string
     */

    public $proxyUrl;

    /**
     * Holds the query string associated with the request
     *
     * @var string
     */

    public $queryString;

    /**
     * Holds the query string with Url and all the Data with key values
     *
     * @var string
     */

    public $proxyUrlWithData;

    /**
     * Holds the data to be sent with a post request
     *
     * @var array
     */

    public $proxyData;

    /**
     * Holds the resource being requested (keys are the same keys in the serverUrl config file, except lowercase)
     *
     * @var array
     */

    public $resource;

    /**
     * Number of allowed attempts to get a new token
     *
     * @var int
     */

    public $allowedAttempts = 3;

    /**
     * Attempt count when getting a new token
     *
     * @var int
     */

    public $attemptsCount = 0;

    /**
     * Property indicating if an attempt has been made to get the token from the application session.
     *
     * @var boolean
     */

    public $sessionAttempt = false;

    /**
     * Holds URL which is used in creating the session key
     *
     * @var string
     */

    public $sessionUrl;

    /**
     * Holds the host url we're redirecting to
     *
     * @var string
     */

    public $hostRedirect='';
    /**
     * Allowed application urls array is just an array of urls
     *
     * @var array
     */

    public $allowedReferers;

    /**
     * Holds the response
     *
     * @var resource
     */

    public $response;

    /**
     * Holds the response body following curl request
     *
     * @var String
     */

    public $proxyBody;

    /**
     * Holds a field to help debug booleans
     *
     * @var array
     */

    public $bool = array(true=>"True", false=>"False");

    /**
     * Holds staged file path.
     *
     * @var string
     */

    private  $unlinkPath;

    /**
     * Holds a cloned copy of the resource response
     *
     * @var string
     */

    public $responseClone;

    /**
     * Holds headers sent by the client
     *
     * @var array
     */

    public $clientRequestHeaders;

    /**
     * Holds content length of last request
     *
     * @var int
     */


    public $contentLength;



    public function __construct($configuration, $log) {


        $this->proxyLog = $log;

        $this->proxyConfig = $configuration->proxyConfig;

        $this->serverUrls = $configuration->serverUrls;

        $this->setupSession();

        $this->getIncomingHeaders();

        $this->setupClassProperties();

        $this->checkEmptyParameters();

        $this->checkForPing();

        if (isset($this->proxyConfig['mustmatch']) && $this->proxyConfig['mustmatch'] === true || $this->proxyConfig['mustmatch'] === "true") {

            if($this->isAllowedApplication() == false){

                $this->allowedApplicationError();

            }

            $this->verifyConfiguration();

            if(isset($this->hostRedirect)) {

                $this->proxyUrlWithData = $this->redirect($this->proxyUrlWithData, $this->sessionUrl, $this->hostRedirect);

                $this->proxyUrl = $this->redirect($this->proxyUrl, $this->sessionUrl, $this->hostRedirect);

            }

            if ($this->meter->underMeterCap()) {

                $this->runProxy();

            } else {

                $this->rateMeterExceededError();

            }

        } else if(isset($this->proxyConfig['mustmatch']) && $this->proxyConfig['mustmatch'] === false || $this->proxyConfig['mustmatch'] === "false") {

            $this->runProxy();

        }else{

            $this->configurationParameterError();

        }

    }

    public function redirect($sourceUrl, $sessionUrl, $targetUrl)
    {

        return $targetUrl . substr($sourceUrl, strlen($sessionUrl));

    }

    public function setupSession()
    {
        if (!isset($_SESSION)) {

            session_start();

        }

    }

    public function getIncomingHeaders()
    {
        $headers = null;

        if (!function_exists('getallheaders'))
        {
            $headers = array();

            foreach ($_SERVER as $key => $value)
            {

                if (substr($key,0,5)=="HTTP_") {

                    $key = str_replace(" ","-",ucwords(strtolower(str_replace("_"," ",substr($key,5)))));

                    $headers[$key] = $value;

                }
            }

        }else{

            $headers = getallheaders();

        }

        $this->clientRequestHeaders = $headers;

    }

    public function makeDirectory($dir, $mode = 0777) //Not implemented.
    {
        if (is_dir($dir) || @mkdir($dir,$mode)) return true;

        if (!$this->makeDirectory(dirname($dir),$mode)) return false;

        return @mkdir($dir,$mode);

    }

    public function verifyConfiguration()
    {
        if (!isset($this->resource['ratelimit']) || !isset($this->resource['ratelimitperiod'])) {

            $this->resource['ratelimit'] = null;

            $this->resource['ratelimitperiod'] = null;
        }

        if ($this->canProcessRequest()) {

            $this->meter = new RateMeter($this->resource['url'], $this->resource['ratelimit'], $this->resource['ratelimitperiod'], $this->proxyLog); //need to pass meter interval and meter cap

        } else {

            $this->canProcessRequestError();

        }
    }

    public function configurationParameterError()
    {

        $this->proxyLog->log("Malformed 'mustMatch' property in configuration file");

        header('Status: 412', true, 412);

        header('Content-Type: application/json');

        $configError = array(
            "error" => array("code" => 412,
                "details" => array("Detected malformed 'mustMatch' property in the configuration file. The server does not meet one of the preconditions that the requester put on the request."),
                "message" => "Proxy failed due to configuration error."
            ));

        echo json_encode($configError);

        exit();
    }

    public function rateMeterExceededError()
    {

        $this->proxyLog->log("Rate meter exceeded by " . $_SERVER['REMOTE_ADDR']);

        header('Status: 402', true, 402);

        header('Content-Type: application/json');

        $exceededError = array(
            "error" => array("code" => 402,
                "details" => array("This is a metered resource, number of requests have exceeded the rate limit interval."),
                "message" => "Unable to proxy request for requested resource."
            ));

        echo json_encode($exceededError);

        exit();
    }

    public function canProcessRequestError()
    {

        $this->proxyLog->log("Proxy could not resolve requested url - " . $this->proxyUrl . ".  Possible solution would be to update 'mustMatch', 'matchAll' or 'url' property in the configuration file.");

        header('Status: 403', true, 403);

        header('Content-Type: application/json');

        $configError = array(
            "error" => array("code" => 403,
                "details" => array("Proxy has not been set up for this URL. Make sure there is a serverUrl in the configuration file that matches: " . $this->proxyUrl),
                "message" => "Proxy has not been set up for this URL."
            ));

        echo json_encode($configError);

        exit();
    }

    public function allowedApplicationError()
    {

        header('Status: 403', true, 403);

        header('Content-Type: application/json');

        $allowedApplicationError = array(
            "error" => array("code" => 403,
                "details" => array("This is a protected resource.  Application access is restricted."),
                "message" => "Application access is restricted.  Unable to proxy request."
            ));

        echo json_encode($allowedApplicationError);

        exit();
    }

    public function checkEmptyParameters()
    {
        if(empty($this->proxyUrl)) {  // nothing to proxy
            $this->emptyParametersError();
        }
    }

    public function checkForPing()
    {
        if($this->proxyUrl == "ping") {
            $this->proxyLog->log("Pinged");

            header('Status: 200', true, 200);
            header('Content-Type: application/json');

            $curl_version = curl_version();
            $pngMsg = array(
                "Proxy Version"      => $GLOBALS['version'],
                // "PHP Version"        => phpversion(),
                // "Curl Version"       => $curl_version[version],
                "Configuration File" => "OK", // or it would have failed in XmlParser()
                "Log File"           => "OK"  // or it would have failed in configurationParameterError()
            );

            echo json_encode($pngMsg);
            exit();
        }
    }

    public function emptyParametersError()
    {
        $message = "This proxy does not support empty parameters.";
        $this->proxyLog->log("$message");

        header('Status: 400', true, 400);

        header('Content-Type: application/json');

        $configError = array(
            "error" => array("code" => 400,
                "details" => array("$message"),
                "message" => "$message"
            ));

        echo json_encode($configError);

        exit();
    }

    public function setProxyHeaders()
    {

        $header_size = curl_getinfo($this->ch, CURLINFO_HEADER_SIZE); //cURL will go null after this

        $header_content = trim(substr($this->response,0, $header_size));

        $header_array = $this->parse_resource_headers($header_content);

        foreach ($header_array as $key => $value) {

            if(is_string($key) && (strtolower($key) != "accept-ranges")){

                $header = sprintf("%s: %s", $key, $value);

                $this->headers[] = $header;

                // $key === 0 means this is HTTP status code, which doesn't have a key
            } elseif($key === 0)
            {
                $this->headers[] = $value;
            }

        }

    }

    public function setResponseBody()
    {

        $this->proxyBody = substr($this->responseClone, $this->contentLength);

    }

    public function parse_resource_headers($raw_headers) //Takes the cURL response header (from the resource) and parses it into array
    {
        $headers = array();  //Thanks to this http://stackoverflow.com/questions/6368574/how-to-get-the-functionality-of-http-parse-headers-without-pecl

        $key = '';

        foreach(explode("\n", $raw_headers) as $i => $h) {

            //PHP and cURL will return all headers, need to filter out the redirect headers. http://php.net/manual/en/function.curl-setopt.php#103232
            if ($h == "\r"){

                $headers = array();

                continue;
            }

            $h = explode(':', $h, 2);

            if (isset($h[1])) {

                if (!isset($headers[$h[0]]))

                    $headers[$h[0]] = trim($h[1]);

                elseif (is_array($headers[$h[0]])) {

                    $headers[$h[0]] = array_merge($headers[$h[0]], array(trim($h[1])));

                } else {

                    $headers[$h[0]] = array_merge(array($headers[$h[0]]), array(trim($h[1])));
                }

                $key = $h[0];

            } else {

                if (substr($h[0], 0, 1) == "\t"){

                    $headers[$key] .= "\r\n\t".trim($h[0]);

                } elseif (!$key){

                    $headers[0] = trim($h[0]);

                }
            }
        }

        return $headers;
    }

    public function getResponse()
    {
        // Remove built in PHP headers (except for session cookie)
        // headers_list() - Returns a list of response headers sent (or ready to send)
        foreach(headers_list() as $key => $value)
        {
            $pos = strripos($value, ":");

            $header_type = substr($value,0,$pos);

            if ($this->contains($value, "Cookie")) { //Don't remove the PHP session cookie
                continue;
            }

            header_remove($header_type);
        }

        foreach ($this->headers as $key => $value) {
            // TODO: Proxies should not return hop-by-hop header fields #362

            // Reset the content-type for OGC WMS - issue #367
            // Note: this might not be what everyone expects, but it helps some users
            // TODO: make this configurable
            if ($this->contains($value, "Content-Type: application/vnd.ogc.wms_xml")) {
                $this->proxyLog->log("Adjusting Content-Type for WMS OGC: " . $value);
                $value = "Content-Type: text/xml";
            }

            // Remove scenario causing provisional header error message - see issue #75
            if ($this->contains($value, "Transfer-Encoding: chunked")) {
                continue;
            }

            header($value, false);
        }

        header("Content-length: " . strlen($this->proxyBody)); //Issue 190 with truncated response, not sure how to gzip the data (or keep gzip via CURLOPT_ENCODING) without extension.

        echo $this->proxyBody;

        $this->proxyLog->log("Proxy complete");

        $this->proxyConfig = null;

        $this->meter = null;

        $this->proxyLog = null;

        exit();
    }

    public function setupClassProperties()
    {
        $this->decodeCharacterEncoding(); // Sanitize url being proxied and removing encodings if present

        try {

            if (!empty($_POST) && empty($_FILES)) { // Is it a POST without files?

                $this->proxyLog->log('POST detected');

                $this->proxyUrl = $_SERVER['QUERY_STRING'];

                $this->proxyData = $_POST;

                $this->proxyMethod = "POST";

            } else if (!empty($_POST) && !empty($_FILES)) { // Is it a POST with files?

                $this->proxyLog->log('FILES detected');

                $this->proxyUrl = $_SERVER['QUERY_STRING'];

                $this->proxyData = $_POST;

                $this->proxyMethod = "FILES";

            } else if (empty($_POST) && empty($_FILES)) { // It must be a GET!

                $this->proxyLog->log('GET detected');

                $p = preg_split("/\?/", $_SERVER['QUERY_STRING']); // Finds question marks in query string

                $this->proxyUrl = $p[0];

                $this->proxyUrlWithData = $_SERVER['QUERY_STRING'];

                $this->proxyMethod = "GET";
            }

        } catch (Exception $e) {


            $this->proxyLog->log("Proxy could not detect request method action type (POST, GET, FILES).");
        }

    }

    public function decodeCharacterEncoding()
    {
        $hasHttpEncoding = $this->startsWith($_SERVER['QUERY_STRING'], 'http%3a%2f%2f');

        $hasHttpsEncoding = $this->startsWith($_SERVER['QUERY_STRING'], 'https%3a%2f%2f');

        if($hasHttpEncoding || $hasHttpsEncoding){

            $_SERVER['QUERY_STRING'] = urldecode($_SERVER['QUERY_STRING']); //Remove encoding from GET requests

            foreach($_POST as $k => $v) {

                $_POST[$k] = urldecode($v);  //Remove encoding for each POST value

            }

        }
    }

    public function formatWithPrefix($url)
    {
        if(substr($url, 0, 4) != "http"){

            if(substr($this->proxyUrl, 0, 5) == "https") {

                $url = "https://" . $url;

            }else{

                $url = "http://" . $url;
            }

        }

        return $url;
    }

    public function removeTrailingSlash($url)
    {
        if (substr($url, -1) == '/')
        {
            $url = rtrim($url, "/");
        }

        return $url;

    }

    public function resolveDoubleSlashCondition($url)
    {
        if (substr($url, 0, strlen("//")) == "//") {

            $url = substr($url, strlen("//"));
        }

        return $url;

    }

    public function sanitizeUrl($url)
    {
        $url = $this->resolveDoubleSlashCondition($url);

        $url = $this->formatWithPrefix($url);

        $url = $this->removeTrailingSlash($url);

        return $url;

    }

    public function canProcessRequest()
    {
        $canProcess = false;

        if ($this->proxyConfig['mustmatch'] == false || $this->proxyConfig['mustmatch'] === "false" || $this->proxyConfig['mustmatch'] == true || $this->proxyConfig['mustmatch'] == "true") {

            //check with listed serverurl regardless if mustMatch is true or false
            foreach ($this->serverUrls as $key => $value) {
                $serverUrl = $value['serverurl'][0];
                $serverUrl['url'] = $this->sanitizeUrl($serverUrl['url']); //Do all the URL cleanups and checks at once
                $serverUrl['matchall'] = strtolower((string) $serverUrl['matchall']);

                if ( $serverUrl['matchall'] === "true") {

                    $urlStartsWith = $this->startsWith($this->proxyUrl, $serverUrl['url']);

                    if ($urlStartsWith){

                        $this->resource = $serverUrl;

                        $this->sessionUrl = $serverUrl['url'];

                        $this->hostRedirect = $serverUrl['hostredirect'];

                        $canProcess = true;

                    }

                } else {

                    $isEqual = $this->equals($this->proxyUrl, $serverUrl['url']);

                    if($isEqual){

                        $this->resource = $serverUrl;

                        $this->sessionUrl = $serverUrl['url'];

                        $this->hostRedirect = $serverUrl['hostredirect'];

                        $canProcess = true;

                    }
                }
            }

            if ($this->proxyConfig['mustmatch'] == false || $this->proxyConfig['mustmatch'] == "false") $canProcess = true; //if not found and mustMatch is false, then canProcess is true

        } else {

            $this->proxyLog->log("Proxy has failed. Review configuration file for errors.");

            $canProcess = false;
        }

        return $canProcess;
    }


    public function getRequestConfig()
    {

        return $this->requestConfig;

    }

    public function useSessionToken()
    {

        $sessionKey = 'token_for_' . $this->sessionUrl;

        $sessionKey = sprintf("'%s'", $sessionKey);

        if(isset($_SESSION[$sessionKey])) //Try to get token from session
        {

            $token = $_SESSION[$sessionKey];

            $this->appendToken($token);

            $this->sessionAttempt = true;

            $this->proxyLog->log("Using session token");

            return true;

        }

        return false;
    }

    public function hasTokeninRequest()
    {
        if(strpos($this->proxyUrlWithData, "?token=") || strpos($this->proxyUrlWithData, "&token=") || strpos($this->proxyData, "?token=") || strpos($this->proxyData,"&token=" ))
        {
            return true;
        }
        return false;
    }

    public function runProxy()
    {
        //If 1) token is NOT stored in the session and 2) token is NOT provided along the request, we need to request it up-front.
        if(!$this->useSessionToken() && !$this->hasTokeninRequest())
        {
            $token = $this->getNewTokenIfCredentialsAreSpecified();

            if(!empty($token) || isset($token))
            {
                $this->addTokenToSession($token);

                $this->appendToken($token);
            }
        }

        //send the first request
        if($this->proxyMethod == "FILES"){

            $this->proxyFiles();


        }else if($this->proxyMethod == "POST"){

            $this->proxyPost();

        }else if($this->proxyMethod == "GET"){

            $this->proxyGet();

        }

        //Check the response to see if any error occurs
        $isUnauthorized = $this->isUnauthorized();

        //If error occurs, try to request with a new token
        if($isUnauthorized === true) {

            if($this->attemptsCount < $this->allowedAttempts) {

                $this->attemptsCount++;

                $this->proxyLog->log("Retry attempt " . $this->attemptsCount . " of " . $this->allowedAttempts);

                $token = $this->getNewTokenIfCredentialsAreSpecified();

                if(!empty($token) || isset($token)) {

                    $this->addTokenToSession($token);

                    $this->appendToken($token);
                }

                if($this->attemptsCount == $this->allowedAttempts) {

                    $this->proxyLog->log("Removing session value");

                    $sessionKey = 'token_for_' . $this->sessionUrl;

                    $sessionKey = sprintf("'%s'", $sessionKey);

                    unset($_SESSION[$sessionKey]);  //Remove token from session
                }

                $this->runProxy();
            }

        } else {

            $this->proxyLog->log("Ok to proxy");
        }

        return true;
    }

    public function isUnauthorized()
    {

        $isUnauthorized = false;

        if (strpos($this->proxyBody,'"code":499') !== false || strpos($this->proxyBody,'"code": 499') !== false ) {

            $isUnauthorized = true;

        } elseif (strpos($this->proxyBody,'"code":498') !== false || strpos($this->proxyBody,'"code": 498') !== false) {

            $isUnauthorized = true;

        } elseif (strpos($this->proxyBody,'"code":403') !== false || strpos($this->proxyBody,'"code": 403') !== false) {

            $isUnauthorized = true;

        } else
        {
            $jsonData = json_decode($this->proxyBody);

            $errorCode = $jsonData->{'error'}->{'code'};

            if ($errorCode == 499 || $errorCode == 498 || $errorCode == 403)
            {
                $isUnauthorized = true;
            }
        }

        if($isUnauthorized){

            $this->proxyLog->log("Authorization failed : " . $this->proxyBody);

        }

        return $isUnauthorized;
    }

    private function appendToken($token)
    {
        if($this->proxyMethod == 'POST' || $this->proxyMethod == 'FILES')
        {

            if(array_key_exists("token", $this->proxyData))
            {
                $this->proxyData["token"] = $token;

            }else{

                $appendedToken = array_merge($this->proxyData, array("token" => $token));

                $this->proxyData = $appendedToken;

            }

        }else{

            $pos = strripos($this->proxyUrlWithData, "&token=");

            if($pos > 0)
            {

                $this->proxyUrlWithData = substr($this->proxyUrlWithData,0,$pos) . "&token=" . $token; //Remove old tokens.

            }else{

                //check if the original proxyUrlWithData is with query string or not
                if(!is_null(parse_url($this->proxyUrlWithData, PHP_URL_QUERY)))

                    $this->proxyUrlWithData = $this->proxyUrlWithData . "&token=" . $token;

                else

                    $this->proxyUrlWithData = $this->proxyUrlWithData . "?token=" . $token;
            }

        }
    }

    public function initCurl()
    {
        $headers = array('Expect:', 'Referer: ' . $this->referer);

        $this->ch = curl_init();

        curl_setopt($this->ch, CURLOPT_HTTPHEADER, $headers);

        curl_setopt($this->ch, CURLOPT_SSL_VERIFYPEER , false);

        curl_setopt($this->ch, CURLOPT_SSL_VERIFYHOST , false);

        curl_setopt($this->ch, CURLOPT_HEADER, true);

        curl_setopt($this->ch, CURLOPT_FOLLOWLOCATION, true);

    }

    public function curlError()
    {
        // see full of cURL error codes at http://curl.haxx.se/libcurl/c/libcurl-errors.html

        $message = "cURL error (" . curl_errno($this->ch) . "): "
            . curl_error($this->ch) . ".";

        $this->proxyLog->log($message);

        header('Status: 502', true, 502);  // 502 Bad Gateway -  The server, while acting as a gateway or proxy, received an invalid response from the upstream server it accessed in attempting to fulfill the request.

        header('Content-Type: application/json');

        $configError = array(
            "error" => array("code" => 502,
                "details" => array($message),
                "message" => "Proxy failed due to curl error."
            ));

        echo json_encode($configError);

        curl_close($this->ch);

        $this->ch = null;

        exit();
    }

    public function proxyGet($url) {

        $this->response = null;

        //If $url is not set, use the $this->proxyUrlWithData as the $url
        if(empty($url) || is_null($url))
        {
            $url = $this->proxyUrlWithData;
        }

        try {

            $this->initCurl();

            curl_setopt($this->ch, CURLOPT_HTTPGET, true);

            curl_setopt($this->ch, CURLOPT_RETURNTRANSFER, true);

            curl_setopt($this->ch, CURLOPT_URL, $url);

            $this->response = curl_exec($this->ch);

            $this->responseClone = $this->response;

            $this->contentLength = curl_getinfo($this->ch,CURLINFO_HEADER_SIZE);

            if(curl_errno($this->ch) > 0 || empty($this->response))
            {
                $this->curlError();

            }else{

                $this->setProxyHeaders();

                $this->setResponseBody();

            }

            curl_close($this->ch);

            $this->ch = null;


        } catch (Exception $e) {

            $this->proxyLog->log($e->getMessage());
        }

        return;
    }

    public function proxyPost($url, $params)
    {
        $this->response = null;

        $this->headers = null;

        $this->proxyBody = null;

        if(empty($url) || is_null($url) || empty($params) || $url === $params){ //If no $url or $params passed, default to class property values

            $url = $this->proxyUrl;

            $params = $this->proxyData;

        }

        try {

            $this->initCurl();

            curl_setopt($this->ch, CURLOPT_URL, $url);

            curl_setopt($this->ch, CURLOPT_RETURNTRANSFER, true);

            curl_setopt($this->ch, CURLOPT_POST, true);

            if(is_array($params)){ //If $params is array, convert it to a curl query string like 'image=png&f=json'
                curl_setopt($this->ch, CURLOPT_POSTFIELDS, http_build_query($params));
            } else {
                curl_setopt($this->ch, CURLOPT_POSTFIELDS, $params);
            }

            $this->response = curl_exec($this->ch);

            $this->responseClone = $this->response;

            $this->contentLength = curl_getinfo($this->ch,CURLINFO_HEADER_SIZE);

        } catch (Exception $e) {

            $this->proxyLog->log($e->getMessage());
        }

        if(curl_errno($this->ch) > 0 || empty($this->response))
        {
            $this->curlError();

        }else{

            $this->setProxyHeaders();

            $this->setResponseBody();
        }

        curl_close($this->ch);

        $this->ch = null;

        return;
    }

    public function proxyFiles()
    {
        try {

            if (count($this->proxyData))
            {
                $query_array = array();

                foreach ($this->proxyData as $pkey => $pvalue)
                {
                    $query_array[$pkey] = $pvalue;

                    foreach ($_FILES as $key => $file)
                    {
                        $parts = pathinfo($file["tmp_name"]);

                        $this->unlinkPath = $parts["dirname"] . DIRECTORY_SEPARATOR . $file["name"];

                        rename($file["tmp_name"], $this->unlinkPath);

                        $this->proxyData[$key] = "@" . $this->unlinkPath;

                        $query_array[$key] = "@" . $this->unlinkPath;

                    }

                }

            }

            $this->initCurl();

            curl_setopt($this->ch, CURLOPT_URL, $this->proxyUrl);

            curl_setopt($this->ch, CURLOPT_RETURNTRANSFER, true);

            curl_setopt($this->ch, CURLOPT_POST, true);

            curl_setopt($this->ch, CURLOPT_POSTFIELDS, $query_array);

            $this->response = curl_exec($this->ch);

            $this->responseClone = $this->response;

            $this->contentLength = curl_getinfo($this->ch,CURLINFO_HEADER_SIZE);

            if(curl_errno($this->ch) > 0 || empty($this->response))
            {
                $this->curlError();
            }else{

                $this->setProxyHeaders();

                $this->setResponseBody();

                if($this->isUnauthorized() == true) {

                    $this->proxyLog->log("Unlinking: " . $this->unlinkPath);

                    unlink($this->unlinkPath);

                }

            }

            curl_close($this->ch);

            $this->ch = null;

            return;

        } catch (Exception $e) {

            $this->proxyLog->log($e->getMessage());
        }

    }

    function startsWith($haystack, $needle)
    {

        return stripos($haystack, $needle) === 0;

    }

    function contains($haystack, $needle)
    {

        return stripos($haystack, $needle) !== false ? true : false;

    }

    function equals($string, $anotherstring)
    {

        return $string == $anotherstring;

    }


    public function isUserLogin()
    {

        if (isset($this->resource['username']) && isset($this->resource['password'])) {

            return true;
        }

        return false;
    }

    public function isAppLogin()
    {

        if (isset ( $this->resource['clientid']) && isset ($this->resource['clientsecret'])) {

            return true;

        }

        return false;
    }

    public function exchangePortalTokenForServerToken($portalToken) {

        $this->proxyLog->log("Exchanging portal token for server-specific token for " . $this->resource['url']);

        $pos = strripos($this->resource['oauth2endpoint'], "/oauth2");

        $exchangeUri = substr($this->resource['oauth2endpoint'],0,$pos) . "/generateToken";

        $this->proxyPost($exchangeUri, array(
            'token' => $portalToken,
            'serverURL' => $this->resource['url'],
            'f' => 'json'
        ));

        $tokenResponse = json_decode($this->proxyBody, true);

        $token = $tokenResponse['token'];

        return $token;


    }

    function getNewTokenIfCredentialsAreSpecified() {

        $this->sessionUrl = $this->resource['url']; //Store url in local variable because later we may tweak url

        $token = null;

        $isUserLogin = $this->isUserLogin();

        $isAppLogin = $this->isAppLogin();

        if ($isUserLogin || $isAppLogin) {

            if ($isAppLogin) {

                $token = $this->doAppLogin();

            } else if($isUserLogin) {

                $token = $this->doUserPasswordLogin();
            }

        }else{

            $this->proxyLog->log("Can not determine if OAuth or ArcGIS Server means of authentication.  Check config for errors.");
        }

        return $token;
    }


    public function addTokenToSession($token) {

        $sessionKey = 'token_for_' . $this->sessionUrl;

        $sessionKey = sprintf("'%s'", $sessionKey);

        try {

            $this->proxyLog->log('Adding token to session');

            $_SESSION[$sessionKey] = $token;

        }catch(Exception $e){

            $this->proxyLog->log("Error setting session: " . $e);
        }

    }


    public function doUserPasswordLogin() {

        $this->proxyLog->log("Resource using ArcGIS Server security");

        $tokenServiceUri = $this->getTokenEndpoint();

        $this->proxyPost($tokenServiceUri, array (
            'request' => 'getToken',
            'f' => 'json',
            'referer' => $this->referer,
            'expiration' => 60,
            'username' => $this->resource['username'],
            'password' => $this->resource['password']
        ));

        $tokenResponse = json_decode($this->proxyBody, true);

        $token = $tokenResponse['token'];

        return $token;
    }

    public function getTokenEndpoint()
    {
        if ($this->contains($this->proxyUrl, "/rest/") !== false){

            $position = stripos($this->proxyUrl, "/rest/");

            $infoUrl = substr($this->proxyUrl,0,$position) . "/rest/info";

        } else if ($this->contains($this->proxyUrl, "/sharing/") !== false){

            $position = stripos($this->proxyUrl, "/sharing/");

            $infoUrl = substr($this->proxyUrl,0,$position) . "/sharing/rest/info";

        }else{

            $infoUrl = $this->resource['url'] . "/arcgis/rest/info";
        }

        //Request /rest/info via GET request
        $this->proxyGet($infoUrl .= "?f=json");

        $infoResponse = json_decode($this->proxyBody, true);

        $tokenServiceUri = $infoResponse['authInfo']['tokenServicesUrl'];

        if(!empty($tokenServiceUri)) {

            $this->proxyLog->log("Got token endpoint");

        }else{

            //If no tokenServicesUrl, try to find owningSystemUrl as token endpoint
            if(!empty($infoResponse['owningSystemUrl']))
            {
                $tokenServiceUri = $infoResponse['owningSystemUrl'] . "/sharing/generateToken";

                $this->proxyLog->log("Federated service: got token endpoint from owningSystemUrl");
            }
            else
            {
                $this->proxyLog->log("Unable to get token endpoint");
            }

        }

        return $tokenServiceUri;
    }



    public function doAppLogin()
    {
        $this->resource['oauth2endpoint'] = isset($this->resource['oauth2endpoint']) ? $this->resource['oauth2endpoint'] : "https://arcgis.com/sharing/oauth2/";

        if (substr($this->resource['oauth2endpoint'], -1) != '/')
        {
            $this->resource['oauth2endpoint'] = $this->resource['oauth2endpoint'] . "/";
        }

        $this->proxyLog->log("Resource using OAuth");

        $this->proxyPost($this->resource['oauth2endpoint'] . "token", array(
            'client_id' => $this->resource['clientid'],
            'client_secret' => $this->resource['clientsecret'],
            'grant_type' => 'client_credentials',
            'f' => 'json'
        ));

        $tokenResponse = json_decode($this->proxyBody, true);

        $token = $tokenResponse['access_token'];

        if (!empty($token))
        {
            $token = $this->exchangePortalTokenForServerToken($token);
        }

        return $token;
    }

    public function checkWildcardSubDomain($allowedRefererDomain, $refererDomain)
    {
        $allowedRefererArray = explode(".", $allowedRefererDomain);

        $refererArray = explode(".", $refererDomain);

        if(count($allowedRefererArray) !== count($refererArray))
        {
            return false;
        }

        $index = count($allowedRefererArray) - 1;

        while($index >=0)
        {
            if($allowedRefererArray[$index] === $refererArray[$index])
            {
                $index = $index - 1;

            }else{

                if($allowedRefererArray[$index] === "*")
                {
                    $index = $index - 1;

                    continue;
                }
                return false;
            }
        }
        return true;
    }

    public function protocolMatch($allowedRefererProtocol, $refererProtocol)
    {
        return strcmp($allowedRefererProtocol, $refererProtocol) === 0;
    }

    public function domainMatch($allowedRefererDomain, $refererDomain)
    {
        if(strcmp($allowedRefererDomain, $refererDomain) === 0)
        {
            return true;
        }

        //try if the allowed referer contains wildcard for subdomain
        if(strpos($allowedRefererDomain, "*") !== false)
        {
            if($this->checkWildcardSubDomain($allowedRefererDomain, $refererDomain))
            {
                return true;
            }
        }
        return false;
    }

    public function pathMatch($allowedRefererPath, $refererPath)
    {
        if(strcmp($allowedRefererPath, $refererPath) === 0)
        {
            return true;
        }
        if($this->endsWith($allowedRefererPath, "*"))
        {
            $allowedRefererPathShort = rtrim($allowedRefererPath, "*");

            if($this->startsWith($refererPath, $allowedRefererPathShort))
            {
                return true;
            }
        }
        return false;
    }

    public function endsWith($haystack, $needle) {
        // search forward starting from end minus needle length characters
        return $needle === "" || (($temp = strlen($haystack) - strlen($needle)) >= 0 && strpos($haystack, $needle, $temp) !== FALSE);
    }

    public function checkAllowedReferer(){

        foreach($this->proxyConfig['allowedreferers'] as $allowedReferer)
        {
            //Trim the whitespaces
            $allowedReferer = trim($allowedReferer);

            $refererArray = parse_url($this->referer);

            $allowedRefererArray = null;

            //TODO: add implementation
            if($this->startsWith($allowedReferer, "https://") || $this->startsWith($allowedReferer, "http://"))
            {
                $allowedRefererArray = parse_url($allowedReferer);

            } else {

                $protocol = $refererArray['scheme'];

                if($this->startsWith($allowedReferer, "//"))
                {
                    $allowedRefererArray = parse_url($protocol . ":" . $allowedReferer);

                } else {

                    $allowedRefererArray = parse_url($protocol . "://" . $allowedReferer);
                }
            }
            if ($this->protocolMatch($allowedRefererArray['scheme'], $refererArray['scheme']) &&
                $this->domainMatch($allowedRefererArray['host'], $refererArray['host']) &&
                $this->pathMatch($allowedRefererArray['path'], $refererArray['path'])){

                return true; //return true if match
            }

        }
        return false;
    }


    public function isAllowedApplication()
    {

        //if allowedReferer = "" or "*" (if allowedReferer does not exist, it will be "")
        if(in_array("*",$this->proxyConfig['allowedreferers']) || in_array("",$this->proxyConfig['allowedreferers'])){

            $this->referer = $_SERVER['SERVER_NAME']; //This is to enable browser testing when * is used

            $isAllowedApplication = true;

            return $isAllowedApplication;

        }else{

            $this->referer = $_SERVER['HTTP_REFERER'];

        }

        $isAllowedApplication = false;

        if ($this->checkAllowedReferer()) {

            $isAllowedApplication = true;

        }else{

            $message = "Attempt made to use this proxy from " . $this->referer . " and " . $_SERVER['REMOTE_ADDR'];

            $this->proxyLog->log($message);
        }

        return $isAllowedApplication;

    }

    function __destruct()
    {

    }
}