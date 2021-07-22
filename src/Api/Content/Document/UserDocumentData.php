<?php

namespace App\Api\Content\Document;

use stdClass;
use DateTimeImmutable;

class UserDocumentData
{
    /**
     * @var string
     */
    public $user;

    /**
     * @var string
     */
    public $name;

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
     * @var ?string
     */
    public $issuedBy;

    /**
     * @var UploadDocument[]
     */
    public $uploadDocuments;

    /**
     * @var bool
     */
    public $isActive;

    /**
     * @var string|null
     */
    public $pilot;

    /**
     * @var DateTimeImmutable|null
     */
    public $expiration;

    /**
     * UserDocumentData constructor.
     *
     * @param stdClass $userDocument
     */
    public function __construct(stdClass $userDocument)
    {
        $uploadDocuments = $userDocument->uploadDocuments;
        $this->user = $userDocument->user;
        $this->name = $userDocument->name;
        $this->series = $userDocument->series;
        $this->number = $userDocument->number;
        $this->issued = $userDocument->issued;
        $this->issuedBy = $userDocument->issuedBy;
        $this->uploadDocuments = $this->listUploadDocuments($uploadDocuments);
        $this->isActive = $userDocument->IsActive;
        $this->pilot = $userDocument->Pilot() instanceof Pilot ?
            $userDocument->Pilot()->Id() : null;
        $this->expiration = $userDocument->Expiration;
    }

    /**
     * @param array|null $uploadDocuments
     *
     * @return UploadDocument[]|array
     */
    private function listUploadDocuments(?array $uploadDocuments)
    {
        $documentList = [];
        if ($uploadDocuments === null) {
            return $documentList;
        }
        /** @var UploadDocument $document */
        foreach ($uploadDocuments as $document) {
            $documentList[] = new UploadDocument($document);
        }

        return $documentList;
    }
}