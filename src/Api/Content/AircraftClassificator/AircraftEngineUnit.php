<?php


namespace App\Api\Content\AircraftClassificator;

use stdClass as AircraftEngine;
use DateTimeImmutable;

class AircraftEngineUnit
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
     * @var string
     */
    public $shortName;

    /**
     * @var DateTimeImmutable
     */
    public $createdAt;

    /**
     * @var DateTimeImmutable
     */
    public $updatedAt;

    /**
     * AircraftEngineUnit constructor.
     *
     * @param AircraftEngine|null $aircraftEngine
     */
    public function __construct(?AircraftEngine $aircraftEngine)
    {
        $this->id = $aircraftEngine->id ?? null;
        $this->name = $aircraftEngine->name ?? null;
        $this->shortName = $aircraftEngine->shortName ?? null;
        $this->createdAt = $aircraftEngine->createdAt ?? null;
        $this->updatedAt = $aircraftEngine->updatedAt ?? null;
    }
}