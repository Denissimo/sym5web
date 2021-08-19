<?php

namespace App\Api\Content\AircraftClassificator;

use stdClass;

class AircraftEngineTypeUnit
{
    /**
     * @var int
     */
    public $id;

    /**
     * @var int
     */
    public $complectId;

    /**
     * @var string
     */
    public $name;

    /**
     * @var string
     */
    public $shortName;
    /**
     * @var int
     */
    public $number;

    /**
     * AircraftEngine constructor.
     *
     * @param stdClass $engine
     */
    public function __construct(stdClass $engine)
    {
        $this->id = $engine->id;
        $this->name = $engine->name;
        $this->shortName = $engine->shortName;
        $this->number = $engine->number;
        $this->complectId = $engine->complectId;
    }
}
