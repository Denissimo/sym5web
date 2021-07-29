<?php

namespace App\Api\Content\Document;

use DateTimeImmutable;
use stdClass;
use Exception;

class UploadDocument
{
    /**
     * @var int
     */
    public $id;

    /**
     * @var UploadDocumentData
     */
    public $uploadDocument;

    /**
     * @var DateTimeImmutable
     */
    public $createdAt;

    /**
     * @var DateTimeImmutable
     */
    public $updatedAt;

    /**
     * @var UploadDocumentType
     */
    public $documentType;

    /**
     * @var string
     */
    public $user;

    /**
     * @var string
     */
    public $path;

    /**
     * @var string
     */
    public $userDocument;

    /**
     * UploadDocument constructor.
     * @param stdClass $uploadDocument
     * @throws Exception
     */
    public function __construct(stdClass $uploadDocument)
    {
        $this->id= $uploadDocument->id;
        $this->uploadDocument= new UploadDocumentData($uploadDocument->uploadDocument);
        $this->createdAt= new DateTimeImmutable($uploadDocument->createdAt->date);
        $this->updatedAt=  new DateTimeImmutable($uploadDocument->updatedAt->date);
        $this->documentType= new UploadDocumentType($uploadDocument->documentType);
        $this->user= $uploadDocument->user;
        $this->userDocument= $uploadDocument->userDocument->id ?? null;
        $this->path = sprintf(
            '%s%s%s',
            $this->createdAt->format('Y/m/d'),
            '/',
            $this->uploadDocument->documentName
        );
    }
}