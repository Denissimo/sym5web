<?php

namespace App\Service\Proxy;


class ProxyConfig {

    public $proxyConfig;

    public $serverUrls;

    public function __construct()
    {

    }

    public function useXML()
    {

        $xmlParser = new XmlParser();

        $proxyconfig = $xmlParser->results[0]['proxyconfig'];

        $proxyconfig = $this->lowercaseArrayKeys($proxyconfig, CASE_LOWER);

        $proxyConfig = $this->setProxyConfig($proxyconfig);

        $serverUrls = $xmlParser->results[0]['childrens'][0]['childrens'];

        $serverUrls = $this->lowercaseArrayKeys($serverUrls, CASE_LOWER);

        $normalizeServerUrls = $this->normalizeServerUrls($serverUrls);

        $this->setServerUrls($normalizeServerUrls);

        $allowedReferers = explode(",", $this->proxyConfig['allowedreferers']); //Change XML allowedreferers from string to array

        $this->proxyConfig['allowedreferers'] = $allowedReferers; //Add above array to the proxyconfig property

        $xmlParser = null;

    }

    function lowercaseArrayKeys($array, $case)
    {
        $array = array_change_key_case($array, $case);

        foreach ($array as $key => $value) {

            if ( is_array($value) ) {

                $array[$key] = $this->lowercaseArrayKeys($value, $case);

            }
        }

        return $array;
    }


    public function normalizeServerUrls($serverUrls) {

        $formatedData = array();

        foreach ($serverUrls as $key => $item) {

            if(is_array($item)) {

                foreach ($item as $k => $v) {

                    if(is_array($v)) {

                        $normal = array("serverurl" => array(0=>$v));

                        $formatedData[] = $normal;

                    }

                }
            }
        }

        return $formatedData;
    }


    public function useJSON()
    {
        try {

            $c = file_get_contents("proxy.config");

            $configJson = json_decode($c, true);

            $config = $this->lowercaseArrayKeys($configJson, CASE_LOWER);

            $this->setProxyConfig($config['proxyconfig'][0]);

            $this->setServerUrls($config['serverurls']);

        }catch (Exception $e) {

            $this->proxyLog->log($e->getMessage());

        }

    }

    public function __set($property, $value)
    {
        $method = 'set' . $value;

        if (!method_exists($this, $method))
        {

            throw new Exception('Error in proxy configuration file.');
        }

        $this->$method($value);
    }

    public function __get($property)
    {
        $method = 'get' . $property;

        if (!method_exists($this, $method))
        {
            throw new Exception('Error in proxy configuration file.');
        }

        return $this->$method();
    }

    public function setOptions(array $options)
    {
        $methods = get_class_methods($this);

        foreach ($options as $key => $value) {

            $method = 'set' . ucfirst($key);

            if (in_array($method, $methods))
            {
                $this->$method($value);
            }
        }

        return $this;
    }

    public function getServerUrls()
    {

        return $this->serverUrls;

    }

    public function setServerUrls($item)
    {

        $this->serverUrls = $item;

        return $this;

    }

    public function getProxyConfig()
    {

        return $this->proxyConfig;

    }

    public function setProxyConfig($item)
    {

        $this->proxyConfig = $item;

        return $this;
    }

    function __destruct()
    {

    }

}