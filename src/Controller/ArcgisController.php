<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;

class ArcgisController extends AbstractController
{
    public function buildProxy(Request $request)
    {
            return $this->redirectToRoute('login');
    }
}