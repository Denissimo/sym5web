<?php

namespace App\Api\Content;

use DateTimeImmutable;
use DateTimeInterface;
use stdClass;

class BaseRequest
{
    /**
     * @param stdClass|null $date
     *
     * @return DateTimeImmutable|null
     */
    protected function createDate(?stdClass $date): ?DateTimeImmutable
    {
        if(!isset($date->date)) {
            return null;
        }

        $dateCut = substr($date->date, 0, 10);
        $dateTime = DateTimeImmutable::createFromFormat(
            'Y-m-d',
            $dateCut
        )->setTime(0,0,0);

        return $dateTime instanceof DateTimeInterface ? $dateTime : null;
    }
}