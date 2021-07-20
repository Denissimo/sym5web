<?php


namespace App\Api\Content\Aircraft;

use stdClass;

class AircraftList
{
    public const CONTROL_PROGRAMM = 1; //'Программная'
    public const CONTROL_RADIO = 2; //'Радиокомандная';
    public const CONTROL_HYBRID = 3; //'Гибридная';

    public const CHANNEL_RADIO = 1; //'Радиоканал';
    public const CHANNEL_CELLULAR = 2; //'Сотовая связь';
    public const CHANNEL_RELAY = 3; //'Радиорелейная связь';
    public const CHANNEL_SATELLITE = 4; //'Спутник';

    /**
     * @var AircraftUnit[]
     */
    private $aircrafts;

    /**
     * @var int
     */
    private $pagesQty;

    /**
     * @var int
     */
    private $currentPage;

    /**
     * AircraftList constructor.
     * @param stdClass $myAircrafts
     */
    public function __construct($myAircrafts)
    {
        foreach ($myAircrafts->aircrafts as $aircraft) {
            $this->aircrafts[$aircraft->id] = new AircraftUnit($aircraft);
        }

        $this->currentPage = $myAircrafts->currentPage;
        $this->pagesQty = $myAircrafts->pagesQty;
    }

    /**
     * @return AircraftUnit[]
     */
    public function getAircrafts(): array
    {
        return $this->aircrafts;
    }

    /**
     * @return int
     */
    public function getPagesQty(): int
    {
        return $this->pagesQty;
    }

    /**
     * @return int
     */
    public function getCurrentPage(): int
    {
        return $this->currentPage;
    }

    public static function loadControlSystem() :array
    {
        return [
            self::CONTROL_PROGRAMM => 'Программная',
            self::CONTROL_RADIO => 'Радио',
            self::CONTROL_HYBRID => 'Гибридная'
        ];
    }

    public static function loadChannels() :array
    {
        return [
            self::CHANNEL_RADIO => 'Радио',
            self::CHANNEL_CELLULAR => 'Сотовая связь',
            self::CHANNEL_RELAY => 'Релейная связь',
            self::CHANNEL_SATELLITE => 'Спутник',
        ];
    }
}