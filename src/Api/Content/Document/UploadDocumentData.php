<?php

namespace App\Api\Content\Document;

use stdClass;

class UploadDocumentData
{
    /**
     * @var string|null
     */
    public $label;

    /**
     * @var string|null
     */
    public $documentName;

    /**
     * @var int|null
     */
    public $documentSize;

    /**
     * @var ?string
     */
    public $mimeType = null;

    /**
     * UploadDocumentData constructor.
     *
     * @param stdClass $uploadDocument
     */
    public function __construct(stdClass $uploadDocument)
    {
        $this->label = $uploadDocument->label;
        $this->documentName = $uploadDocument->documentName;
        $this->documentSize = $uploadDocument->documentSize;
        $this->mimeType = $uploadDocument->mimeType;
    }
}