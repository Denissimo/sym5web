<?php

namespace App\Controller;

use App\Api\Content\Aircraft\AircraftData;
use App\Service\Client;
use App\Service\ClientAuth;
use Symfony\Component\HttpFoundation\Cookie;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Service\ContentLoader;
use stdClass;

class ContentController extends BaseController
{
    public function buildContent(Request $request, ContentLoader $contentLoader, $route)
    {
        return $this->render('main.html.twig', [
            'id' => 155,
            'route' => $route,
            'use_arcgis' => false
        ]);
    }

    public function buildLogin(Request $request, string $userdataSessionName)
    {
        $time = $this->logInfo('buildLogin Start: %d', [
            'source' => 'front'
        ]);

        $this->dropSessionUserData($userdataSessionName);

        $this->logInfo('buildLogin Finish: %d', [
            'source' => 'front'
        ], $time);

        return $this->render('login.html.twig', [
            'id' => 155,
            'route' => 'Login',
            'use_arcgis' => false
        ]);
    }

    public function buildSignUp(Request $request, ContentLoader $contentLoader)
    {
        $this->logInfo('buildSignUp: %d', [
            'source' => 'front'
        ]);

        return $this->render('signup.html.twig', [
            'id' => 155,
            'route' => 'SignUp',
            'use_arcgis' => false
        ]);
    }

    public function buildIndex(Request $request, string $tokenCookieName, string $userdataSessionName)
    {
        $time = $this->logInfo('buildIndex Start: %d', [
            'source' => 'front'
        ]);

        $this->loadUserData($request, $tokenCookieName, $userdataSessionName);
        if ($this->responseCode != Response::HTTP_OK) {
            return $this->redirectToRoute('login');
        }

        $this->logInfo('buildIndex Finish: %d', [
            'source' => 'front'
        ], $time);

        return $this->render('index.html.twig', [
            'user' => $this->user,
            'route' => 'Index',
            'use_arcgis' => true
        ]);
    }
    public function buildRegApplyAdd(
        Request $request,
        Client $client,
        string $tokenCookieName,
        string $userdataSessionName,
        string $aircraftId
    )
    {
        $this->loadUserData($request, $tokenCookieName, $userdataSessionName);
        if ($this->responseCode != Response::HTTP_OK) {
            return $this->redirectToRoute('login');
        }


        $registrationTypes = $this->requestUnauthorized(
            $client,
            '/aircraft_registration_types/'
        );

        return $this->render('reg_apply_add.html.twig', [
            'user' => $this->user,
            'aircraftId' => $aircraftId,
            'registrationTypes' => $registrationTypes->registrationTypes,
            'route' => 'UAV',
            'use_arcgis' => false
        ]);
    }

    public function buildUav(Request $request, Client $client, string $tokenCookieName, string $userdataSessionName)
    {
        return $this->buildUavPaginated($request, $client, $tokenCookieName, $userdataSessionName, 1);
    }

    public function buildUavPaginated(
        Request $request,
        Client $client,
        string $tokenCookieName,
        string $userdataSessionName,
        int $page
    )
    {
        $time = $this->logInfo('buildUavPaginated Start: %d', [
            'source' => 'front'
        ]);
        $this->loadUserData($request, $tokenCookieName, $userdataSessionName);
        if ($this->responseCode != Response::HTTP_OK) {
            return $this->redirectToRoute('login');
        }

        $aircraftClassifiers = $this->requestUnauthorized(
            $client,
            '/classifiers/aircraft/'
        );

        $myAircrafts = $this->requestAuthorized(
            $request,
            $client,
            $tokenCookieName,
            sprintf('/my/data/aircrafts/%d', $page)
        );

        $aircraftList = new AircraftData($myAircrafts);

        $this->logInfo('buildUavPaginated Finish: %d', [
            'source' => 'front'
        ],
            $time);

        return $this->render('uav.html.twig', [
            'user' => $this->user,
            'category' => $aircraftClassifiers->category,
            'engine' => $aircraftClassifiers->engine,
            'mass' => $aircraftClassifiers->mass,
            'statuses' => $aircraftClassifiers->statuses,
            'aircrafts' => $aircraftList,
            'route' => 'UAV',
            'use_arcgis' => false
        ]);
    }

    public function buildProfile(Request $request, string $tokenCookieName, string $userdataSessionName)
    {
        $time = $this->logInfo('buildProfile Start: %d', [
            'source' => 'front'
        ]);

        $this->loadUserData($request, $tokenCookieName, $userdataSessionName);
        if ($this->responseCode != Response::HTTP_OK) {
            return $this->redirectToRoute('login');
        }

        $this->logInfo('buildProfile Finish: %d', [
            'source' => 'front'
        ], $time);

        return $this->render('profile.html.twig', [
            'user' => $this->user,
            'route' => 'Profile',
            'use_arcgis' => false
        ]);
    }

    public function buildTest(Client $client)
    {
        $res = $client->sendJson(
            '/classifiers/aircraft_category/'
        );

        $name = $res->category[0]->name; //Категория А (открытая)

        return $this->render('base.html.twig', [
            'message' => '',
            'code' => '',
            'data' => $name,
            'use_arcgis' => false
        ]);
    }

    public function buildTestUserData(Request $request, Client $client, string $tokenCookieName): Response
    {
        return $this->requestAuthorized($request, $client, $tokenCookieName, '/my/userdata');
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
                'token' => $result->token,
                'use_arcgis' => false
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
            'use_arcgis' => false
//            'carouselUnits' => $carousel->getCarouselUnits()
        ]);
    }

    public function buildFormJs(
        Request $request,
        string $tokenCookieName,
        string $apiUrl,
        string $authUrl
    )
    {
        $time = $this->logInfo('buildFormJs Start: %d', [
            'source' => 'front'
        ]);

        $route = $request->query->get('route') ?? ArcgisController::DEFAULT_ROUTE;

        $response = $this->render('js/form.html.twig', [
            'route' => $route,
            'api_url' => $apiUrl,
            'auth_url' => $authUrl,
            'token_cookie_name' => $tokenCookieName,
            'use_arcgis' => false
        ]);

        $response->headers->set('Content-Type', 'text/plain');

        $this->logInfo('buildFormJs Finish: %d', [
            'source' => 'front'
        ], $time);

        return $response;
    }

    public function buildRegApplyJs(
        Request $request,
        string $tokenCookieName,
        string $apiUrl,
        string $authUrl
    )
    {
        $response = $this->render('js/reg_apply.html.twig', [
            'api_url' => $apiUrl,
            'auth_url' => $authUrl,
            'token_cookie_name' => $tokenCookieName,
            'use_arcgis' => false
        ]);

        $response->headers->set('Content-Type', 'text/plain');

        return $response;
    }
}