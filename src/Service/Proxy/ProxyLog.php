<?php

namespace App\Service\Proxy;

class ProxyLog {

    public $timeFormat = 'm-d-y H:i:s';

    public $seperator = ' | ';

    public $eol = "\r\n";

    public $indent = " ";

    public $proxyConfig;


    public function __construct($configuration = null) {

        if(isset($configuration)){

            $this->proxyConfig = $configuration->proxyConfig;

            $this->addLogLevel();

            if($this->proxyConfig['loglevel'] != 3){

                $this->attemptWriteToLog();
            }

        }else{

            throw new Exception ('Problem creating log.');
        }

    }

    private function addLogLevel()
    {

        if(empty($this->proxyConfig['logfile'])) {

            $this->proxyConfig['logfile'] = null;

            $this->proxyConfig['loglevel'] = 3; //Turns off logging
        }

        if(!empty($this->proxyConfig['logfile']) && empty($this->proxyConfig['loglevel'])) {

            $this->proxyConfig['loglevel'] = 0; //Turns on logging

        }

    }


    public function write($m)
    {

        if (isset($this->proxyConfig['logfile'])) {

            try {

                $fh = null;

                $fh = fopen($this->proxyConfig['logfile'], (file_exists($this->proxyConfig['logfile'])) ? 'a' : 'w');

                if (is_writable($this->proxyConfig['logfile'])) {

                    fwrite($fh, $this->eol);

                    fwrite($fh, $this->getTime());

                    //fwrite($fh, $this->seperator);

                    //fwrite($fh, $_SERVER['HTTP_REFERER']);

                    fwrite($fh, $this->seperator);

                    fwrite($fh, $m);

                }else{

                    header('Status: 200', true, 200);

                    header('Content-Type: application/json');

                    $configError = array(
                        "error" => array("code" => 412,
                            "details" => array("Detected malformed 'logFile' in the configuration file.  Make sure this app has write permissions to log file specified in the configuration file.  The server does not meet one of the preconditions that the requester put on the request."),
                            "message" => "Proxy failed due to configuration error."
                        ));

                    echo json_encode($configError);

                    exit();

                }

                fclose($fh);

            } catch (Exception $e) {

                $this->log($e->getMessage());

            }
        } else {

            header('Status: 200', true, 200);

            header('Content-Type: application/json');

            $configError = array(
                "error" => array("code" => 412,
                    "details" => array("Detected malformed 'logFile' in the configuration file.  Make sure this app has write permissions to log file specified in the configuration file.  The server does not meet one of the preconditions that the requester put on the request."),
                    "message" => "Proxy failed due to configuration error."
                ));

            echo json_encode($configError);

            exit();

        }
    }

    public function attemptWriteToLog()
    {

        if ($this->proxyConfig['loglevel'] == 0 || $this->proxyConfig['loglevel'] == 2) {

            if (isset($this->proxyConfig['logfile'])) {

                try {

                    $fh = null;

                    $fh = fopen($this->proxyConfig['logfile'], (file_exists($this->proxyConfig['logfile'])) ? 'a' : 'w');

                    if (is_writable($this->proxyConfig['logfile'])) {

                        fwrite($fh, $this->eol);

                        fwrite($fh, ' ');

                    }else{

                        header('Status: 200', true, 200);

                        header('Content-Type: application/json');

                        $configError = array(
                            "error" => array("code" => 412,
                                "details" => array("Detected malformed 'logFile' in the configuration file.  Make sure this app has write permissions to log file specified in the configuration file.  The server does not meet one of the preconditions that the requester put on the request."),
                                "message" => "Proxy failed due to configuration error."
                            ));

                        echo json_encode($configError);

                        exit();

                    }

                    fclose($fh);

                } catch (Exception $e) {

                    header('Status: 200', true, 200);

                    header('Content-Type: application/json');

                    $configError = array(
                        "error" => array("code" => 412,
                            "details" => array("Could not write to log file.  Make sure this app has write permissions to log file specified in the configuration file.  The server does not meet one of the preconditions that the requester put on the request."),
                            "message" => "Proxy failed due to configuration error."
                        ));

                    echo json_encode($configError);

                    exit();

                }
            } else {

                header('Status: 200', true, 200);

                header('Content-Type: application/json');

                $configError = array(
                    "error" => array("code" => 412,
                        "details" => array("Detected malformed 'logFile' in the configuration file.  Make sure this app has write permissions to log file specified in the configuration file.  The server does not meet one of the preconditions that the requester put on the request."),
                        "message" => "Proxy failed due to configuration error."
                    ));

                echo json_encode($configError);

                exit();

            }

        }

    }

    public function log($message)
    {
        global $proxyDataValid;

        $message = $proxyDataValid->replaceCRLF($message, "__");

        if ($this->proxyConfig['loglevel'] == 0) {

            $this->write($message); //Writes messages and errors to logs

        } elseif ($this->proxyConfig['loglevel'] == 1) {

            echo $message; //Show proxy errors and messages in browser console (should only be used when looking for errors)

        } elseif ($this->proxyConfig['loglevel'] == 2) {

            $this->write($message);  //Writes messages and errors to logs

            echo $message; //Show proxy errors and messages in browser console (should only be used when looking for errors)

        } elseif ($this->proxyConfig['loglevel'] == 3) {

            return; //No logging
        }

    }

    public function getTime() {

        return date($this->timeFormat);
    }

    function __destruct()
    {

    }

}