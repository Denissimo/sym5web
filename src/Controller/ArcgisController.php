<?php

namespace App\Controller;

use App\Service\Proxy\Proxy;
use App\Service\Proxy\XmlParser;
use App\Service\Proxy\ProxyConfig;
use App\Service\Proxy\ProxyLog;
use App\Service\Proxy\RateMeter;
use App\Service\Proxy\DataValidUtil;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Throwable;

class ArcgisController extends AbstractController
{
    public function buildProxy(Request $request)
    {
            return $this->redirectToRoute('login');
//        return $this->render('base.html.twig', [
//                'data' => '',
//                'message' => $errorMessage,
//                'code' => $errorCode
//            ]
//        );
    }
}