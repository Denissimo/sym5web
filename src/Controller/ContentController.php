<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use App\Service\ContentLoader;
use stdClass;

class ContentController extends AbstractController
{
    public function buildContent(Request $request, ContentLoader $contentLoader, $route)
    {
        return $this->render('main.html.twig', [
            'id' => 155,
            'route' => $route,
        ]);
    }

    public function buildLogin(Request $request, ContentLoader $contentLoader)
    {
        return $this->render('login.html.twig', [
            'id' => 155,
            'route' => 'Login',
        ]);
    }

    public function buildIndex(Request $request, ContentLoader $contentLoader)
    {
        return $this->render('index.html.twig', [
            'id' => 155,
            'route' => 'Index',
        ]);
    }

    public function buildUav(Request $request, ContentLoader $contentLoader)
    {
        return $this->render('uav.html.twig', [
            'id' => 155,
            'route' => 'UAV',
        ]);
    }

    public function buildProfile(Request $request, ContentLoader $contentLoader)
    {
        return $this->render('profile.html.twig', [
            'id' => 155,
            'route' => 'Profile',
        ]);
    }

 
    public function buildTest(Request $request)
    {
        return $this->render('base.html.twig');
    }

    public function buildContent2(Request $request, ContentLoader $contentLoader, $route)
    {
        /** @var stdClass $carouselData */
        $carouselData = $contentLoader->getCarousel('/content/load/carousel');

//        $carousel = new CarouselUnitList($carouselData->carouselUnits);

        return $this->render('main.html.twig', [
            'id' => 155,
            'number' => $route,
//            'carouselUnits' => $carousel->getCarouselUnits()
        ]);
    }
}