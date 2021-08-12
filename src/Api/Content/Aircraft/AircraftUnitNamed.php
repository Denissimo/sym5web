<?php

namespace App\Api\Content\Aircraft;

use App\Api\Content\AircraftClassificator\AircraftCategoryUnit;
use App\Api\Content\AircraftClassificator\AircraftEngineComplectUnit;
use App\Api\Content\AircraftClassificator\AircraftEngineUnit;
use App\Api\Content\AircraftClassificator\AircraftMassUnit;
use App\Api\Content\Document\UserDocument;
use DateTimeInterface;
use stdClass;

class AircraftUnitNamed
{
    /**
     * @var string
     */
    public $id;
    /**
     * @var string
     */
    public $serialNumber;

    /**
     * @var string
     */
    public $registrationNumber;

    /**
     * @var string
     */
    public $type;

    /**
     * AircraftUnit constructor.
     *
     * @param array $aircraft
     */
    public function __construct(stdClass $aircraft)
    {
        $this->id = $aircraft->id;
        $this->serialNumber = $aircraft->serialNumber;
        $this->registrationNumber = $aircraft->registrationNumber;
        $this->type = $aircraft->type;
    }
}