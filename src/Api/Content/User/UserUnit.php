<?php

namespace App\Api\Content\User;

use DateTime;
use App\Api\Content\BaseRequest;
use stdClass;

class UserUnit extends BaseRequest
{
    /**
     * @var string
     */
    public $email;

    /**
     * @var string
     */
    public $phone;

    /**
     * @var string
     */
    public $firstname;

    /**
     * @var string
     */
    public $middlename;

    /**
     * @var string
     */
    public $lastname;

    /**
     * @var DateTime
     */
    public $dateOfBirth;

    /**
     * @var DateTime
     */
    public $lastLogin;

    /**
     * @var boolean
     */
    public $enabled;

    /**
     * @var string[]|array
     */
    public $roles;


    /**
     * UserUnit constructor.
     *
     * @param array $user
     */
    public function __construct(stdClass $user)
    {
        $this->email = $user->email ?? null;
        $this->phone = $user->phone ?? null;
        $this->firstname = $user->firstname ?? null;
        $this->middlename = $user->middlename ?? null;
        $this->lastname = $user->lastname ?? null;
        $this->dateOfBirth = $this->createDate($user->dateOfBirth);
        $this->lastLogin = $this->createDate($user->lastLogin);
        $this->enabled = $user->enabled ?? null;
        $this->roles = $user->roles ?? [];
    }
}