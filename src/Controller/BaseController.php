<?php

namespace App\Controller;

use App\Api\Content\User\User;
use App\Service\Client;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Exception;

class BaseController extends AbstractController
{
    /**
     * @var RequestStack
     */
    private $requestStack;
    /**
     * @var User
     */
    protected $user;

    /**
     * @var Client
     */
    protected $client;

    /**
     * BaseController constructor.
     *
     * @param Client $client
     */
    public function __construct(Client $client, RequestStack $requestStack)
    {
        $this->client = $client;
        $this->requestStack = $requestStack;
    }

    /**
     * @param Request $request
     * @param string $tokenCookieName
     *
     * @return $this
     *
     * @throws Exception
     */
    protected function loadUserData(Request $request, string $tokenCookieName, string $userdataSessionName)
    {
        $session = $this->requestStack->getSession();
        $userData = $session->get($userdataSessionName);
        if ($userData) {
            $this->user = new User($userData->user);

            return  $this;
        }
        $token = $request->cookies->get($tokenCookieName);

        $userData = $this->client->sendJson(
            '/my/userdata',
            null,
            'GET',
            ['Authorization' => sprintf('Bearer %s', $token)]
        );

        $session->set($userdataSessionName, $userData);
        $this->user = new User($userData->user);

        return $this;
    }
}