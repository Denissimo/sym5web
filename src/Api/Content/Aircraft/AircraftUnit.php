<?php

namespace App\Api\Content\Aircraft;

use App\Api\Content\AircraftClassificator\AircraftCategoryUnit;
use App\Api\Content\AircraftClassificator\AircraftEngineUnit;
use App\Api\Content\AircraftClassificator\AircraftMassUnit;
use DateTimeInterface;
use stdClass;

class AircraftUnit
{
    /**
     * @var string
     */
    public $id;

    /**
     * @var bool
     */
    public $isHandStart;

    /**
     * @var bool
     */
    public $isVerticalStart;

    /**
     * @var bool
     */
    public $isCatapultStart;

    /**
     * @var bool
     */
    public $isParachuteLanding;

    /**
     * @var int
     */
    public $landingSiteWidth;

    /**
     * @var int
     */
    public $landingSiteLength;

    /**
     * @var int
     */
    public $controlSystem;

    /**
     * @var array
     */
    public $channels;

    /**
     * @var string
     */
    public $responderType;

    /**
     * @var string
     */
    public $otherParams;

    // TODO uploadDocuments
    public $uploadDocuments;

    // TODO owner
    public $owner;

    /**
     * @var string
     */
    public $serialNumber;

    /**
     * @var string
     */
    public $registrationNumber;

    /**
     * @var ?DateTimeInterface
     */
    public $registrationDate;

    /**
     * @var ?DateTimeInterface
     */
    public $deregistrationDate;

    /**
     * @var string
     */
    public $deregistrationReason;

    /**
     * @var string
     */
    public $type;

    /**
     * @var ?int
     */
    public $numberOfEngines;

    /**
     * @var ?int
     */
    public $takeoffMass;

    /**
     * @var string
     */
    public $manufacturer;

    /**
     * @var string
     */
    public $insuranceCompany;

    /**
     * @var string
     */
    public $insurancePolicyNumber;

    /**
     * @var ?DateTimeInterface
     */
    public $insuranceStart;

    /**
     * @var ?DateTimeInterface
     */
    public $insuranceEnd;

    /**
     * @var string|null
     */
    public $airchannelId;

    /**
     * @var AircraftCategoryUnit
     */
    public $category;

    /**
     * @var AircraftEngineUnit
     */
    public $engine;

    /**
     * @var AircraftMassUnit
     */
    public $mass;

    /**
     * @var int|null
     */
    public $registrationStatus;

    /**
     * AircraftUnit constructor.
     *
     * @param array $aircraft
     */
    public function __construct(stdClass $aircraft)
    {
        $this->id = $aircraft->id;
        $this->channels = $aircraft->channels;
        $this->controlSystem = $aircraft->controlSystem;
        $this->isCatapultStart = $aircraft->isCatapultStart;
        $this->isHandStart = $aircraft->isHandStart;
        $this->isParachuteLanding = $aircraft->isParachuteLanding;
        $this->isVerticalStart = $aircraft->isVerticalStart;
        $this->landingSiteLength = $aircraft->landingSiteLength;
        $this->landingSiteWidth = $aircraft->landingSiteWidth;
        $this->responderType = $aircraft->responderType;
        $this->otherParams = $aircraft->otherParams;
        $this->createdAt = $aircraft->createdAt;
        $this->updatedAt = $aircraft->updatedAt;
        $this->serialNumber = $aircraft->serialNumber;
        $this->registrationNumber = $aircraft->registrationNumber;
        $this->registrationDate = $aircraft->registrationDate;
        $this->deregistrationDate = $aircraft->deregistrationDate;
        $this->deregistrationReason = $aircraft->deregistrationReason;
        $this->type = $aircraft->type;
        $this->numberOfEngines = $aircraft->numberOfEngines;
        $this->takeoffMass = $aircraft->takeoffMass;
        $this->manufacturer = $aircraft->manufacturer;
        $this->insuranceCompany = $aircraft->insuranceCompany;
        $this->insurancePolicyNumber = $aircraft->insurancePolicyNumber;
        $this->insuranceStart = $aircraft->insuranceStart;
        $this->insuranceEnd = $aircraft->insuranceEnd;
        $this->airchannelId = $aircraft->airchannelId ?? null;
        $this->category = new AircraftCategoryUnit($aircraft->category);
        $this->engine = new AircraftEngineUnit($aircraft->engine);
        $this->mass = new AircraftMassUnit($aircraft->mass);
        $this->registrationStatus = $aircraft->registrationStatus;
    }
}