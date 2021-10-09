<?php

namespace App\Api\Content\AircraftClassificator;

use stdClass;

class AircraftRegistrationUnit
{
    public $id;

    public $user;

    public $status;

    public $type;

    public $aircraftRegistration;

    public $createdAt;

    public $updatedAt;

    /**
     * AircraftRegistrationUnit constructor.
     *
     * @param stdClass $registration
     */
    public function __construct(stdClass $registration)
    {
        $this->id = $registration->id;
        $this->user = $registration->user;
        $this->status = $registration->status;
        $this->type = $registration->type;
        $this->aircraftRegistration = $registration->aircraftRegistration;
        $this->createdAt = $registration->createdAt;
        $this->updatedAt = $registration->updatedAt;
    }


}
