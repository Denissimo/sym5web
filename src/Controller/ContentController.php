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
        /** @var stdClass $carouselData */
//        $carouselData = $contentLoader->getCarousel('/content/load/carousel');

//        $carousel = new CarouselUnitList($carouselData->carouselUnits);

        return $this->render('main.html.twig', [
            'id' => 155,
            'route' => $route,
//            'carouselUnits' => $carousel->getCarouselUnits()
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