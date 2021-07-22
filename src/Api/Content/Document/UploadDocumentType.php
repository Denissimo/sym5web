<?php

namespace App\Api\Content\Document;

use stdClass;

class UploadDocumentType
{
    public const IMAGE = 'image';
    public const DOCUMENT = 'document';

    public static $documentTypeList = [
        self::IMAGE => 'Изображение (jpg, gif, png и т.п.)',
        self::DOCUMENT => 'Документ (pdf, docx и проч.)'
    ];

    /**
     * @var int
     */
    public $id;

    /**
     * @var string
     */
    public $fileType;

    /**
     * @var string
     */
    public $name;

    /**
     * @var bool
     */
    public $active;

    /**
     * UploadDocumentType constructor.
     *
     * @param stdClass $uploadDocumentType
     */
    public function __construct(stdClass $uploadDocumentType)
    {
        $this->id = $uploadDocumentType->id;
        $this->fileType = $uploadDocumentType->fileType;
        $this->name = $uploadDocumentType->name;
        $this->active = $uploadDocumentType->active;
    }
}