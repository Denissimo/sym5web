<?php

namespace App\Controller;

use App\Api\Content\Aircraft\AircraftList;
use App\Api\Content\User\User;
use App\Service\Client;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class ArcgisController extends BaseController
{
    public const DEFAULT_ROUTE = 'AirSituation';

    public function buildProxy(Request $request)
    {
        return $this->redirectToRoute('login');
    }


    public function buildAirSituation(Request $request, string $tokenCookieName, string $userdataSessionName)
    {
        $time = $this->logInfo('buildAirSituation Start: %d', [
            'source' => 'front'
        ]);

        $this->loadUserData($request, $tokenCookieName, $userdataSessionName);
        if ($this->responseCode != Response::HTTP_OK) {
            $this->logInfo('buildAirSituation Redirect to Login: %d', [
                'source' => 'front'
            ], $time);

            return $this->redirectToRoute('login');
        }

        $this->logInfo('buildAirSituation Finish: %d', [
            'source' => 'front'
        ], $time);

        return $this->render('airsituation.html.twig', [
            'user' => $this->user,
            'route' => 'AirSituation',
            'use_arcgis' => true
        ]);
    }

    public function buildTracks(Request $request, Client $client, string $tokenCookieName, string $userdataSessionName)
    {
        $this->loadUserData($request, $tokenCookieName, $userdataSessionName);
        if ($this->responseCode != Response::HTTP_OK) {
            return $this->redirectToRoute('login');
        }

        if ($this->user->hasRole(User::ROLE_OPERATOR)) {
            return $this->redirectToRoute('index');
        }

        $myAircraftList = $this->requestAuthorized(
            $request,
            $client,
            $tokenCookieName,
            '/my/list/aircrafts'
        );

        $aircraftList = new AircraftList($myAircraftList);

        return $this->render('tracks.html.twig', [
            'user' => $this->user,
            'route' => 'Tracks',
            'aircraftList' => $aircraftList->getAircrafts(),
            'use_arcgis' => true
        ]);
    }

    public function buildFlights(Request $request, Client $client, string $tokenCookieName, string $userdataSessionName)
    {
        $time = $this->logInfo('buildFlights Start: %d', [
            'source' => 'front'
        ]);

        $this->loadUserData($request, $tokenCookieName, $userdataSessionName);
        if ($this->responseCode != Response::HTTP_OK) {
            return $this->redirectToRoute('login');
        }

        $myAircraftList = $this->requestAuthorized(
            $request,
            $client,
            $tokenCookieName,
            '/my/list/aircrafts'
        );
        
        if ($this->responseCode != Response::HTTP_OK) {
            return $this->redirectToRoute('login');
        }

        $aircraftList = new AircraftList($myAircraftList);

        $this->logInfo('buildFlights Finish: %d', [
            'source' => 'front'
        ], $time);

        return $this->render('flights.html.twig', [
            'user' => $this->user,
            'route' => 'Flights',
            'aircraftList' => $aircraftList->getAircrafts(),
            'use_arcgis' => true
        ]);
    }


    public function buildArchive(Request $request, string $tokenCookieName, string $userdataSessionName)
    {
        $this->loadUserData($request, $tokenCookieName, $userdataSessionName);
        if ($this->responseCode != Response::HTTP_OK) {
            return $this->redirectToRoute('login');
        }

        return $this->render('archive.html.twig', [
            'user' => $this->user,
            'route' => 'Archive',
            'use_arcgis' => true
        ]);
    }

    public function buildCommonJs(
        Request $request,
        string $tokenCookieName,
        string $apiUrl,
        string $userdataSessionName
    )
    {
        $time = $this->logInfo('buildCommonJs Start: %d', [
            'source' => 'front'
        ]);

        $route = $request->query->get('route') ?? self::DEFAULT_ROUTE;
        $this->loadUserData($request, $tokenCookieName, $userdataSessionName);
        if ($this->responseCode != Response::HTTP_OK) {
            return $this->redirectToRoute('login');
        }

        $this->logInfo('buildCommonJs Finish: %d', [
            'source' => 'front'
        ], $time);

        $response = $this->render('js/script.html.twig', [
            'user' => $this->user,
            'route' => $route,
            'api_url' => $apiUrl,
            'token_cookie_name' => $tokenCookieName,
            'use_arcgis' => false
        ]);

        $response->headers->set('Content-Type', 'text/plain');

        return $response;
    }
}