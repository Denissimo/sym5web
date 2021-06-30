<?php

namespace App\Controller;

use App\Service\Client;
use App\Service\ClientAuth;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Finder\Exception\AccessDeniedException;
use Symfony\Component\HttpFoundation\Cookie;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Service\ContentLoader;
use stdClass;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Throwable;
use Exception;

class ContentController extends AbstractController
{
    public function buildContent(Request $request, ContentLoader $contentLoader, $route)
    {
        return $this->render('main.html.twig', [
            'id' => 155,
            'route' => $route,
            'use_arcgis' => false
        ]);
    }

    public function buildLogin(Request $request, ContentLoader $contentLoader)
    {
        return $this->render('login.html.twig', [
            'id' => 155,
            'route' => 'Login',
            'use_arcgis' => false
        ]);
    }

    public function buildSignUp(Request $request, ContentLoader $contentLoader)
    {
        return $this->render('signup.html.twig', [
            'id' => 155,
            'route' => 'SignUp',
            'use_arcgis' => false
        ]);
    }

    public function buildIndex(Request $request, ContentLoader $contentLoader)
    {
        return $this->render('index.html.twig', [
            'id' => 155,
            'route' => 'Index',
            'use_arcgis' => true
        ]);
    }

    public function buildUav(Request $request, ContentLoader $contentLoader)
    {
        return $this->render('uav.html.twig', [
            'id' => 155,
            'route' => 'UAV',
            'use_arcgis' => true
        ]);
    }

    public function buildProfile(Request $request, ContentLoader $contentLoader)
    {
        return $this->render('profile.html.twig', [
            'id' => 155,
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

    public function buildAirSituation(Request $request, ContentLoader $contentLoader, string $tokenCookieName)
    {
        $cookieChecker = $request->cookies->get($tokenCookieName);
        // var_dump ($cookieChecker);
        // die;

        if (!$cookieChecker) {
            return $this->redirectToRoute('login');
        }

        return $this->render('airsituation.html.twig', [
            'id' => 155,
            'route' => 'AirSituation',
            'use_arcgis' => true
        ]);
    }

    public function buildTracks(Request $request, ContentLoader $contentLoader)
    {
        return $this->render('tracks.html.twig', [
            'id' => 155,
            'route' => 'Tracks',
            'use_arcgis' => true
        ]);
    }

    public function buildFlights(Request $request, ContentLoader $contentLoader)
    {
        return $this->render('flights.html.twig', [
            'id' => 155,
            'route' => 'Flights',
            'use_arcgis' => true
        ]);
    }


    public function buildArchive(Request $request, ContentLoader $contentLoader)
    {
 
        return $this->render('archive.html.twig', [
            'id' => 155,
            'route' => 'Archive'
        ]);
    }
    public function buildTestUserData(Request $request, Client $client, string $tokenCookieName): Response
    {
        return $this->requestAuthorized($request, $client, $tokenCookieName, '/my/userdata');
    }

    private function requestAuthorized(
        Request $request,
        Client $client,
        string $tokenCookieName,
        $path,
        $json = null,
        $method = 'GET'
    ): Response
    {
        try {
            $token = $request->cookies->get($tokenCookieName);
            $res = $client->sendJson(
                $path,
                $json,
                $method,
                [
                    'Authorization' => sprintf(
                        'Bearer %s',
                        $token
                    )
                ]
            );

            return $this->render('base.html.twig', [
                'data' => json_encode($res->user),
                'message' => 'OK',
                'code' => Response::HTTP_OK
            ]);

        } catch (AccessDeniedException $e) {
//            return $this->redirectToRoute('login');

            return $this->buildError($e);
        } catch (BadRequestHttpException $e) {

            return $this->buildError($e);
        } catch (Exception $e) {

            return $this->buildError($e);
        }
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

    private function buildError(Throwable $e)
    {
        $errorMessage = $e->getMessage();
        $errorCode = $e->getCode();

//            return $this->redirectToRoute('login');
        return $this->render('base.html.twig', [
                'data' => '',
                'message' => $errorMessage,
                'code' => $errorCode
            ]
        );
    }
}