<?php

namespace App\Api\Content\Aircraft;

class AircraftClassifierData
{
    /**
     * @var array
     */
    private $category;

    /**
     * @var array
     */
    private $engine;

    /**
     * @var array
     */
    private $mass;

    /**
     * @var array
     */
    private $statuses;

    /**
     * AircraftClassifierData constructor.
     *
     * @param array $category
     * @param array $engine
     * @param array $mass
     * @param array $statuses
     */
    public function __construct(array $category, array $engine, array $mass, array $statuses)
    {
        $this->category = $category;
        $this->engine = $engine;
        $this->mass = $mass;
        $this->statuses = $statuses;
    }

    /**
     * @return array
     */
    public function getCategory(): array
    {
        return $this->category;
    }

    /**
     * @return array
     */
    public function getEngine(): array
    {
        return $this->engine;
    }

    /**
     * @return array
     */
    public function getMass(): array
    {
        return $this->mass;
    }

    /**
     * @return array
     */
    public function getStatuses(): array
    {
        return $this->statuses;
    }
}