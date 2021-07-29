<?php

namespace App\Controller;

use App\Api\Content\User\User;
use Symfony\Component\HttpFoundation\Request;

class ArcgisController extends BaseController
{
    public const DEFAULT_ROUTE = 'AirSituation';

    public function buildProxy(Request $request)
    {
        return $this->redirectToRoute('login');
    }


    public function buildAirSituation(Request $request, string $tokenCookieName, string $userdataSessionName)
    {
        $cookieChecker = $request->cookies->get($tokenCookieName);

        if (!$cookieChecker) {
            return $this->redirectToRoute('login');
        }
        $this->loadUserData($request, $tokenCookieName, $userdataSessionName);

        return $this->render('airsituation.html.twig', [
            'user' => $this->user,
            'route' => 'AirSituation',
            'use_arcgis' => true
        ]);
    }

    public function buildTracks(Request $request, string $tokenCookieName, string $userdataSessionName)
    {
        $cookieChecker = $request->cookies->get($tokenCookieName);

        if (!$cookieChecker) {
            return $this->redirectToRoute('login');
        }

        $this->loadUserData($request, $tokenCookieName, $userdataSessionName);

        if ($this->user->hasRole(User::ROLE_OPERATOR)) {
            return $this->redirectToRoute('index');
        }

        return $this->render('tracks.html.twig', [
            'user' => $this->user,
            'route' => 'Tracks',
            'use_arcgis' => true
        ]);
    }

    public function buildFlights(Request $request, string $tokenCookieName, string $userdataSessionName)
    {
        $this->loadUserData($request, $tokenCookieName, $userdataSessionName);

        return $this->render('flights.html.twig', [
            'user' => $this->user,
            'route' => 'Flights',
            'use_arcgis' => true
        ]);
    }


    public function buildArchive(Request $request, string $tokenCookieName, string $userdataSessionName)
    {
        $this->loadUserData($request, $tokenCookieName, $userdataSessionName);

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
        $route = $request->query->get('route') ?? self::DEFAULT_ROUTE;
        $this->loadUserData($request, $tokenCookieName, $userdataSessionName);

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