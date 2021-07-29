<?php

namespace App\Api\Content\User;

use App\Api\Content\BaseRequest;
use DateTimeImmutable;
use stdClass;

class User extends BaseRequest
{
    public const ROLE_USER = 'ROLE_USER';
    public const ROLE_ADMIN = 'ROLE_ADMIN';
    public const ROLE_OPERATOR = 'ROLE_OPERATOR';

    public const ROLE_INDIVIDUAL = 'ROLE_INDIVIDUAL';
    public const ROLE_ENTREPRENEUR_HEAD = 'ROLE_ENTREPRENEUR_HEAD';
    public const ROLE_ENTREPRENEUR_REPRESENTATIVE = 'ROLE_ENTREPRENEUR_REPRESENTATIVE';
    public const ROLE_LEGAL_ENTITY_REPRESENTATIVE = 'ROLE_LEGAL_ENTITY_REPRESENTATIVE';
    public const ROLE_LEGAL_ENTITY_HEAD = 'ROLE_LEGAL_ENTITY_HEAD';
    public const ROLE_OWNER = 'ROLE_OWNER';
    public const ROLE_EXPLUATANT = 'ROLE_EXPLUATANT';
    public const ROLE_PILOT = 'ROLE_PILOT';
    public const ROLE_ATM = 'ROLE_ATM'; //ОРВД
    public const ROLE_HELIPORT = 'ROLE_HELIPORT'; //Представитель вертодрома
    public const ROLE_MUNICIPAL = 'ROLE_MUNICIPAL';

    public static $rolesList = [
        self::ROLE_USER => self::ROLE_USER,
        self::ROLE_ADMIN => self::ROLE_ADMIN,
        self::ROLE_OPERATOR => self::ROLE_OPERATOR,
        self::ROLE_INDIVIDUAL => self::ROLE_INDIVIDUAL,
        self::ROLE_ENTREPRENEUR_HEAD => self::ROLE_ENTREPRENEUR_HEAD,
        self::ROLE_ENTREPRENEUR_REPRESENTATIVE => self::ROLE_ENTREPRENEUR_REPRESENTATIVE,
        self::ROLE_LEGAL_ENTITY_REPRESENTATIVE => self::ROLE_LEGAL_ENTITY_REPRESENTATIVE,
        self::ROLE_LEGAL_ENTITY_HEAD => self::ROLE_LEGAL_ENTITY_HEAD,
        self::ROLE_OWNER => self::ROLE_OWNER,
        self::ROLE_EXPLUATANT => self::ROLE_EXPLUATANT,
        self::ROLE_PILOT => self::ROLE_PILOT,
        self::ROLE_ATM => self::ROLE_ATM, //ОРВД
        self::ROLE_HELIPORT => self::ROLE_HELIPORT, //Представитель вертодрома
        self::ROLE_MUNICIPAL => self::ROLE_MUNICIPAL
    ];

    /**
     * @var int
     */
    public $id;

    /**
     * @var UserUnit
     */
    public $user;

    /**
     * @var DateTimeImmutable
     */
    public $createdAt;

    /**
     * @var DateTimeImmutable
     */
    public $updatedAt;

    /**
     * User constructor.
     *
     * @param stdClass $user
     */
    public function __construct(stdClass $user)
    {
        $this->id = $user->id;
        $this->user = new UserUnit($user->user);
        $this->createdAt = $this->createDate($user->createdAt ?? []);
        $this->updatedAt = $this->createDate($user->updatedAt ?? []);
    }


    /**
     * @param array $roles
     * @param string $checkRole
     *
     * @return bool
     */
    public function hasRole(string $checkRole)
    {
        if (!in_array($checkRole, self::$rolesList)) {
            return false;
        }

        return in_array($checkRole, $this->user->roles);
    }
}