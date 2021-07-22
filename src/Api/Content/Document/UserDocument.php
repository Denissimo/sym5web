<?php

namespace App\Api\Content\Document;

use DateTimeImmutable;
use stdClass;
use Exception;

class UserDocument
{
    /**
     * @var string
     */
    public $id;

    /**
     * @var string
     */
    public $user;

    /**
     * @var string
     */
    public $name;

    /**
     * @var UserDocumentType
     */
    public $type;

    /**
     * @var ?string
     */
    public $series;

    /**
     * @var string
     */
    public $number;

    /**
     * @var DateTimeImmutable
     */
    public $issued;

    /**
     * @var string
     */
    public $issuedBy;

    /**
     * @var ?UploadDocument[]
     */
    public $uploadDocuments;

    /**
     * @var bool
     */
    public $isActive;

    /**
     * @var string
     */
    public $pilot;

    /**
     * @var DateTimeImmutable
     */
    public $expiration;

    /**
     * UserDocument constructor.
     *
     * @param stdClass $userDocument
     */
    public function __construct($userDocument)
    {
        $this->id = $userDocument->id;
        $this->type = $userDocument->type;
        $document = $userDocument->userDocument;
        $this->user = $document->user->id;
        $this->name = $document->name;

        $this->series = $document->series;
        $this->number = $document->number;
        $this->issued = $document->issued;
        $this->issuedBy = $document->issuedBy;
        $this->uploadDocuments = $this->listUploadDocuments($document);
        $this->isActive = $document->isActive;
        $this->pilot = $document->pilot;
        $this->expiration = $document->expiration;
    }

    /**
     * @param stdClass $userDocument
     *
     * @return array
     *
     * @throws Exception
     */
    private function listUploadDocuments(stdClass $userDocument)
    {
        if (!isset($userDocument->uploadDocuments)) {
            return [];
        }

        $uploadDocuments = [];
        foreach ($userDocument->uploadDocuments as $uploadDocument) {
            $uploadDocuments[]  = new UploadDocument($uploadDocument);
        }

        return $uploadDocuments;
    }
}