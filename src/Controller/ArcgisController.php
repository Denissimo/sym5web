<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use App\Service\Client;

class ArcgisController extends AbstractController
{
    public const DEFAULT_ROUTE = 'AirSituation';

    public function buildProxy(Request $request)
    {
            return $this->redirectToRoute('login');
    }


    public function buildAirSituation(Request $request, string $tokenCookieName)
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

    public function buildTracks(Request $request, string $tokenCookieName)
    {
        $cookieChecker = $request->cookies->get($tokenCookieName);
        // var_dump ($cookieChecker);
        // die;

        if (!$cookieChecker) {
            return $this->redirectToRoute('login');
        }

        return $this->render('tracks.html.twig', [
            'id' => 155,
            'route' => 'Tracks',
            'use_arcgis' => true
        ]);
    }

    public function buildFlights(Request $request)
    {
        return $this->render('flights.html.twig', [
            'id' => 155,
            'route' => 'Flights',
            'use_arcgis' => true
        ]);
    }


    public function buildArchive(Request $request)
    {

        return $this->render('archive.html.twig', [
            'id' => 155,
            'route' => 'Archive'
        ]);
    }

    public function buildCommonJs(Request $request, Client $client, string $tokenCookieName)
    {
        $route = $request->query->get('route') ?? self::DEFAULT_ROUTE;
        $token = $request->cookies->get($tokenCookieName);
        $userData = $client->sendJson(
            '/my/userdata',
            null,
            'GET',
            ['Authorization' => sprintf('Bearer %s', $token)]
        );

        return $this->render('js/script.html.twig', [
            'user' => $userData->user,
            'route' => $route,
            'use_arcgis' => false
        ]);
    }
}