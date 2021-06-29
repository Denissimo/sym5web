<?php

namespace App\Service\Proxy;

class XmlParser
{
    public $results = array();

    public $parser;

    public $xmlString;

    public $file;

    function XmlParser($f = "proxy.config")
    {
        if(trim($f) != "") { $this->loadFile($f);}
    }

    function loadFile($f)
    {
        $data = file($f);

        // Check that configuration file can be read, and that it's not empty
        if (!$data) {
            $message = "Proxy error: problem reading proxy configuration file.";
            // This is before we have the log location, so we cannot log to logfile

            header('Status: 402', true, 402);  // 402 Forbidden - The server understood the request, but is refusing to fulfill it. For example, if a directory or file is unreadable due to file permissions.

            header('Content-Type: application/json');

            $configError = array(
                "error" => array("code" => 402,
                    "details" => array("$message"),
                    "message" => "$message"
                ));

            die(json_encode($configError));
        }

        $xml = implode("\n", $data);

        return $this->parse($xml);
    }

    function parse($xml)
    {
        $this->parser = xml_parser_create();

        xml_set_object($this->parser, $this);

        xml_set_element_handler($this->parser, "tagStart", "tagEnd");

        $this->xmlString = xml_parse($this->parser,$xml);

        if(!$this->xmlString)
        {
            die(sprintf("Config XML error: %s at line %d",
                xml_error_string(xml_get_error_code($this->parser)),
                xml_get_current_line_number($this->parser))); //This is before we have the log location
        }

        xml_parser_free($this->parser);

        return $this->results;
    }

    // lowercase array keys and properties etc from the config file
    function tagStart($parser, $name, $attrs)
    {
        $attrs = array_change_key_case($attrs, CASE_LOWER);

        $tag = array(strtolower($name) => $attrs);

        array_push($this->results, $tag);
    }


    function tagEnd($parser, $name)
    {

        //http://www.php.net/manual/en/function.xml-parse.php

        $this->results[count($this->results)-2]['childrens'][] = $this->results[count($this->results)-1];

        if(count($this->results[count($this->results)-2]['childrens'] ) == 1)
        {
            $this->results[count($this->results)-2]['firstchild'] =& $this->results[count($this->results)-2]['childrens'][0];
        }

        array_pop($this->results);
    }

    function __destruct()
    {

    }

}