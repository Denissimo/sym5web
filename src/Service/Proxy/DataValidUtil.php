<?php

namespace App\Service\Proxy;

class DataValidUtil
{
    public function replaceCRLF($lineString, $replaceString)
    {
        $filteredString = str_replace("\n", $replaceString, $lineString);

        $filteredString = str_replace("\r", $replaceString, $filteredString);

        return $filteredString;
    }
}