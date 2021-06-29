<?php

namespace App\Service\Proxy;

//use \PDO;

class RateMeter
{
    /**
     * Holds cleanup threshold value
     *
     * @var string
     * @access public
     */

    const CLEAN_RATEMAP_AFTER = 10000;

    /**
     * Holds proxy log
     *
     * @var string
     * @access public
     */
    public $proxyLog;

    /**
     * Holds serverurl property
     *
     * @var string
     * @access public
     */
    public $serverUrl;

    /**
     * Ip property
     *
     * @var string
     * @access public
     */
    public $ip;

    /**
     * Time property
     *
     * @var string
     * @access public
     */

    public $time;

    /**
     * Stores microtime as property allowing for fractional seconds
     *
     * @var string
     * @access public
     */

    public $microtime;

    /**
     * Sqlite database name property
     *
     * @var string
     * @access public
     */
    public $dbname;

    /**
     * Sqlite connection property
     *
     * @var PDO
     * @access public
     */
    public $con;

    /**
     * Under meter cap property
     *
     * @var bool
     * @access public
     */
    public $underMeterCap;


    /**
     * Meter cap property
     *
     * @var int
     * @access public
     */

    public $countCap;

    /**
     * Meter rate property
     *
     * @var int
     * @access public
     */
    public $rate;

    /**
     * Holds the rate meter count value
     *
     * @var int
     * @access public
     */
    public $count = 0;

    /**
     * Holds rate meter period found in config
     *
     * @var int
     * @access public
     */

    public $ratelimitperiod;

    /**
     * Holds current resource being proxied
     *
     * @var string
     */

    public $resourceUrl;



    public function __construct ($url, $ratelimit, $ratelimitperiod, $log) {

        $this->proxyLog = $log;

        $this->resourceUrl = $url;

        $this->ratelimitperiod = $ratelimitperiod;

        $this->countCap = $ratelimit;

        $this->rate = $ratelimit / $ratelimitperiod / 60;

        $this->ip = $_SERVER['REMOTE_ADDR'];

        $this->dbname = 'proxy.sqlite'; // This string may need to come config

        $this->getRateMeterDatabase();

    }

    public function getConnection()
    {
        if(isset($this->con))
        {
            return $this->con;

        }else{

            $this->proxyLog->log('Cannot get a connection');

            header('Status: 200', true, 200);

            header('Content-Type: application/json');

            $serverError = array(
                "error" => array("code" => 500,
                    "details" => array("Cannot make a Sqlite database connection.  Check to see if it exists.  If it does, consider backing up and then deleting sqlite database."),
                    "message" => "Proxy failed could not connect to sqlite database."
                ));

            echo json_encode($serverError);

            exit();
        }
    }

    public function getRateMeterDatabase()
    {
        try {

            if(file_exists($this->dbname))
            {
                $db = new PDO("sqlite:" . $this->dbname);

                $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

                $this->con = $db;

                return;
            }

        }
        catch(ErrorException $e)
        {
            $this->proxyLog->log($e->getMessage());

            return null;
        }

        try {

            $db = new PDO("sqlite:" . $this->dbname);

            $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            chmod($this->dbname,0777);

            if(isset($db))
            {
                $db->beginTransaction();

                $this->createResourceIpTable($db);

                $this->createClicksTable($db);

                $this->insertClickRecord($db);

                $db->commit();

                $this->con = $db;

            }

            return;

        }
        catch(PDOException $e)
        {
            $this->proxyLog->log($e->getMessage());

            return null;
        }
    }

    public function insertClickRecord($db)
    {

        try {


            $sql = "INSERT INTO clicks (id, total) VALUES (:id,:total)";

            $q = $db->prepare($sql);

            $q->bindValue(':id', null);

            $q->bindValue(':total', 1);

            $q->execute() or die($this->getDatabaseErrorMessage());

        }
        catch(PDOException $e)
        {

            $this->proxyLog->log($e->getMessage());
        }

    }

    public function createClicksTable($db)
    {
        try {

            $db->exec("CREATE TABLE IF NOT EXISTS clicks (
                    id INTEGER PRIMARY KEY,
                    total INTEGER)");

            $this->proxyLog->log("clicks table created!");
        }
        catch(PDOException $e)
        {
            $this->proxyLog->log($e->getMessage());
        }

        try {

            $db->exec('CREATE INDEX total ON clicks (total)');

        }
        catch(PDOException $e)
        {
            $this->proxyLog->log($e->getMessage());
        }

    }

    public function createResourceIpTable($db)
    {
        try {

            $db->exec("CREATE TABLE IF NOT EXISTS ips (
                    id INTEGER PRIMARY KEY,
                    url VARCHAR(255),
                    ip VARCHAR(50),
                    count INTEGER,
                    rate INTEGER,
                    time INTEGER)");

            $this->proxyLog->log("ips table created!");

        }
        catch(PDOException $e)
        {
            $this->proxyLog->log($e->getMessage());
        }

        try {

            $db->exec('CREATE INDEX url ON ips (url)');

            $db->exec('CREATE INDEX ip ON ips (ip)');

            $db->exec('CREATE INDEX count ON ips (count)');

            $db->exec('CREATE INDEX rate ON ips (rate)');

            $db->exec('CREATE INDEX time ON ips (time)');

        }
        catch(PDOException $e)
        {
            $this->proxyLog->log($e->getMessage());
        }

    }

    public function getClickCount()
    {
        $db = $this->getConnection();

        try {

            $sth = $db->prepare("SELECT total FROM clicks WHERE id = :id");

            $sth->execute(array(':id' => 1)) or die($this->getDatabaseErrorMessage());

            $r = $sth->fetchAll();

            return $r[0]['total'];

        }
        catch(PDOException $e)
        {
            $this->proxyLog->log($e->getMessage());
        }
    }

    public function selectLastRequest()
    {

        $db = $this->getConnection();

        try {

            $sth = $db->prepare("SELECT time, id, count, rate FROM ips WHERE url = :url AND ip = :ip");

            $sth->execute(array(':url' => $this->resourceUrl, ':ip' => $this->ip)) or die($this->getDatabaseErrorMessage());

            $r = $sth->fetchAll();

            return $r[0];

        }
        catch(PDOException $e)
        {
            $this->proxyLog->log($e->getMessage());
        }
    }

    public function updateResourceIp($id)
    {
        $db = $this->getConnection();

        try {

            $sth = $db->prepare("UPDATE ips SET id=:id, url=:url, ip=:ip, count=:count, rate=:rate, time=:time WHERE id = :id");

            $sth->bindValue(':id', $id);

            $sth->bindValue(':url', $this->resourceUrl);

            $sth->bindValue(':ip', $this->ip);

            $sth->bindValue(':count', $this->count);

            $sth->bindValue(':rate', $this->rate);

            $sth->bindValue(':time', $this->microtime);

            $sth->execute() or die($this->getDatabaseErrorMessage());
        }
        catch(PDOException $e)
        {
            $this->proxyLog->log($e->getMessage());
        }

    }

    public function updateClicks($id, $total)
    {

        $db = $this->getConnection();

        try {

            $sth = $db->prepare("UPDATE clicks SET total=:total WHERE id = :id");

            $sth->bindValue(':id', $id);

            $sth->bindValue(':total', $total);

            $sth->execute() or die($this->getDatabaseErrorMessage());
        }
        catch(PDOException $e)
        {

            $this->proxyLog->log($e->getMessage());
        }

    }

    public function insertResourceIp()
    {
        $db = $this->getConnection();

        try {

            $sql = "INSERT INTO ips (id, url, ip, count, rate, time) VALUES (:id,:url,:ip,:count,:rate,:time)";

            $q = $db->prepare($sql);

            $q->bindValue(':id', null);

            $q->bindValue(':url', $this->resourceUrl);

            $q->bindValue(':ip', $this->ip);

            $q->bindValue(':count', $this->count);

            $q->bindValue(':rate', $this->rate);

            $q->bindValue(':time', $this->microtime);

            $q->execute() or die($this->getDatabaseErrorMessage());

        }
        catch(PDOException $e)
        {
            $this->proxyLog->log($e->getMessage());
        }

    }

    public function canBeCleaned($count, $lastTime, $rate)
    {
        $tsTotalSeconds = $this->getTimeDifferenceInSeconds($lastTime);

        return $count - $tsTotalSeconds * $rate <= 0;
    }

    public function fetchAllIps() {

        $this->microtime = microtime(true);

        $db = $this->getConnection();

        try {

            $sth = $db->prepare("SELECT * FROM ips;");

            $sth->execute() or die($this->getDatabaseErrorMessage());

            $r = $sth->fetchAll();

            return $r;

        }
        catch(PDOException $e)
        {
            $this->proxyLog->log($e->getMessage());
        }
    }


    public function rateMeterCleanup()
    {
        $db = $this->getConnection();

        $r = $this->fetchAllIps();

        $deletes = array();

        foreach ($r as $item => $value)
        {

            if($this->canBeCleaned($value['count'], $value['time'], $value['rate'])){

                $this->proxyLog->log($value['id'] . "::id");

                $deletes[] = $value['id'];

            }else{

                $this->proxyLog->log('Nothing to clean.');

            }

        }

        $hasDeletes = (boolean)$deletes;

        if($hasDeletes){

            $placeholders = implode(',', array_fill(0, count($deletes), '?'));

            $stmt = $db->prepare('DELETE FROM ips WHERE id IN(' . $placeholders . ')'); //Using indexed based binding pattern

            foreach ($deletes as $k => $id){

                $stmt->bindValue(($k+1), $id);

            }

            try {

                $stmt->execute();

                $this->proxyLog->log('Cleanup occured.');

            } catch (Exception $e) {

                $this->proxyLog->log($e->getMessage());

            }

        }

    }


    public function checkRateMeter()
    {
        $this->microtime = microtime(true);

        $lastRequest = $this->selectLastRequest();

        $clickCount = $this->getClickCount();

        $clickCount = $clickCount + 1;

        $this->updateClicks(1, $clickCount); //Updating the click table so we know when to clean up (aka after 10,000 requests)

        if (isset($lastRequest) || count($lastRequest) > 0) {

            $count = $lastRequest['count'];

            $tsTotalSeconds = $this->getTimeDifferenceInSeconds($lastRequest['time']);

            // $this->debugMeterAlgorithm($count, $tsTotalSeconds, $this->rate);

            $count = max(0, $count - $tsTotalSeconds * $this->rate);

            if ($count <= $this->countCap) {

                $this->underMeterCap = true;

                $count = $count + 1;

                $this->count = $count;

                $this->updateResourceIp($lastRequest['id']);

                return true;

            }

        }else{

            $this->insertResourceIp(); //Add item to ips table.

            $this->underMeterCap = true;

            return;
        }

        $this->underMeterCap = false;

        if($clickCount >= RateMeter::CLEAN_RATEMAP_AFTER)
        {
            $this->proxyLog->log("Click count: " . $clickCount);

            $this->rateMeterCleanup();

            $this->updateClicks(1, 0); //Set click counter back to zero after cleanup.

        }

        return;

    }
    public function debugMeterAlgorithm($count, $tsTotalSeconds, $rate)
    {
        $debugCountValue = $count - $tsTotalSeconds * $rate;

        $this->proxyLog->log("Count is ( count - timespan x rate ) : " . $count . " - " . $tsTotalSeconds . " x " . $rate . " = " . $debugCountValue);

        $this->proxyLog->log("debugCountValue:::" . $debugCountValue);

    }


    public function getTimeDifferenceInSeconds($firstTime, $secondTime = null)
    {


        if(is_null($firstTime))
        {
            $this->proxyLog->log("No time value was returned from 'ips' table in Sqlite database!");

            header('Status: 200', true, 200);

            header('Content-Type: application/json');

            $serverError = array(
                "error" => array("code" => 500,
                    "details" => array("No time value was returned from 'ips' table in Sqlite database.  Consider backing up and then deleting sqlite database."),
                    "message" => "Proxy failed due to missing value in database."
                ));

            echo json_encode($serverError);

            exit();

        }

        if(is_null($secondTime))
        {
            $secondTime = microtime(true);
        }

        $time = array($firstTime, $secondTime);

        sort($time);

        $diff = $time[1] - $time[0];

        return $diff;

    }


    public function underMeterCap()
    {
        if(empty($this->countCap) || empty($this->ratelimitperiod)) {

            return true;

        }

        $this->checkRateMeter();

        if($this->underMeterCap)
        {
            return true;

        }else{

            return false;
        }
    }

    public function getDatabaseErrorMessage()
    {
        $this->proxyLog->log("A database error occured.");

        header('Status: 200', true, 200);

        header('Content-Type: application/json');

        $dbError = array(
            "error" => array("code" => 500,
                "details" => array("A database error occurred.  Consider backing up and then deleting sqlite database."),
                "message" => "Proxy failed due to database error."
            ));

        return json_encode($dbError);
    }

    function __destruct()
    {
        $this->con = null;

    }

}