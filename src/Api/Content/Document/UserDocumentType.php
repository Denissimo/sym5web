<?php

namespace App\Api\Content\Document;

use stdClass;

class UserDocumentType
{
    /**
     * @var int
     */
    public $id;

    /**
     * @var string
     */
    public $shortName;

    /**
     * @var string
     */
    public $name;

    /**
     * @var string
     */
    public $code;

    /**
     * UploadDocumentType constructor.
     *
     * @param stdClass $userDocumentType
     */
    public function __construct(stdClass $userDocumentType)
    {
        $this->id = $userDocumentType->id;
        $this->shortName = $userDocumentType->shortName;
        $this->name = $userDocumentType->name;
        $this->code = $userDocumentType->code;
    }
}