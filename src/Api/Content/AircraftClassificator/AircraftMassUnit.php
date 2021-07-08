<?php

namespace App\Api\Content\AircraftClassificator;

use stdClass as AircraftMass;
use DateTimeImmutable;

class AircraftMassUnit
{
    /**
     * @var int
     */
    public $id;

    /**
     * @var string
     */
    public $name;

    /**
     * @var float
     */
    public $massMin;

    /**
     * @var float
     */
    public $massMax;

    /**
     * @var DateTimeImmutable
     */
    public $createdAt;

    /**
     * @var DateTimeImmutable
     */
    public $updatedAt;

    /**
     * AircraftMassUnit constructor.
     *
     * @param AircraftMass? $aircraftMass
     */
    public function __construct(?AircraftMass $aircraftMass)
    {
        $this->id = $aircraftMass->id ?? null;
        $this->name = $aircraftMass->name ?? null;
        $this->massMin = $aircraftMass->massMin ?? null;
        $this->massMax = $aircraftMass->massMax ?? null;
        $this->createdAt = $aircraftMass->createdAt ?? null;
        $this->updatedAt = $aircraftMass->updatedAt ?? null;
    }
}