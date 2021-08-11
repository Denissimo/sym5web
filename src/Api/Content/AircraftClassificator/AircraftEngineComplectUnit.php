<?php

namespace App\Api\Content\AircraftClassificator;

use stdClass as AircraftEngineComplect;

class AircraftEngineComplectUnit
{
    /**
     * @var int
     */
    public $id;

    /**
     * @var AircraftEngineUnit
     */
    public $aircraftEngine;

    /**
     * @var int
     */
    public $number;

    /**
     * AircraftEngine constructor.
     *
     * @param AircraftEngineComplect $aircraftEngineComplect
     */
    public function __construct(AircraftEngineComplect $aircraftEngineComplect)
    {
        $this->id = $aircraftEngineComplect->id;
        $this->aircraftEngine = new AircraftEngineUnit($aircraftEngineComplect->aircraftEngine);
        $this->number = $aircraftEngineComplect->number;
    }
}
