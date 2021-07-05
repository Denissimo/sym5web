<?php

namespace App\Api\Content\AircraftClassificator;

use stdClass as AircraftCategory;
use DateTimeImmutable;

class AircraftCategoryUnit
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
     * @var DateTimeImmutable
     */
    public $createdAt;

    /**
     * @var DateTimeImmutable
     */
    public $updatedAt;

    /**
     * AircraftCategoryUnit constructor.
     *
     * @param AircraftCategory|null $aircraftCategory
     */
    public function __construct(?AircraftCategory $aircraftCategory)
    {
        $this->id = $aircraftCategory->id ?? null;
        $this->name = $aircraftCategory->name ?? null;
        $this->createdAt = $aircraftCategory->createdAt ?? null;
        $this->updatedAt = $aircraftCategory->updatedAt ?? null;
    }
}