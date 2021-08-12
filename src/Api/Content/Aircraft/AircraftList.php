<?php


namespace App\Api\Content\Aircraft;

use stdClass;

class AircraftList
{


    /**
     * @var AircraftUnitNamed[]
     */
    private $aircrafts = [];

    /**
     * AircraftData constructor.
     * @param stdClass $myAircrafts
     */
    public function __construct($myAircrafts)
    {
        foreach ($myAircrafts->aircrafts as $aircraft) {
            $this->aircrafts[$aircraft->id] = new AircraftUnitNamed($aircraft);
        }
    }

    /**
     * @return AircraftUnit[]
     */
    public function getAircrafts(): array
    {
        return $this->aircrafts;
    }
}