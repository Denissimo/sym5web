<?php

namespace App\Controller;

use App\Service\Client;
use App\Service\ClientAuth;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Cookie;
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


    public function buildTest(Client $client)
    {
        $res = $client->sendJson(
            '/classifiers/aircraft_category/'
        );

        $name = $res->category[0]->name; //Категория А (открытая)

        return $this->render('base.html.twig', ['userdata' => $name]);
    }


    public function buildTestUserData(Request $request,Client $client, string $tokenCookieName)
    {
        $token = $request->cookies->get($tokenCookieName);
        $res = $client->sendJson(
            '/my/userdata',
            null,
            'GET',
            [
                'Authorization' => sprintf(
                    'Bearer %s',
                    $token
                )
            ]
        );


        return $this->render('base.html.twig', ['userdata' => json_encode($res->user)]);
    }

    public function testAuth(Request $request, ClientAuth $client, string $tokenCookieName)
    {
        $result = $client->sendJson(
            '/api/login_check',
            json_encode(
                [
                    'username' => 'denis',
                    'password' => '12345'
                ]
            ),
            'POST'
        );

        $response = $this->render(
            'token.html.twig',
            [
                'token' => $result->token
            ]
        );

        $response->headers->setCookie(
            new Cookie(
                $tokenCookieName,
                $result->token,
                time() + 3600 * 24 * 7
            )
        );

        return $response;
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