<?php

namespace App\Controller;

use App\Api\Content\User\User;
use App\Service\Client;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use stdClass;
use Exception;

class BaseController extends AbstractController
{
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
    public function __construct(Client $client)
    {
        $this->client = $client;
    }

    /**
     * @param Request $request
     * @param string $tokenCookieName
     *
     * @return $this
     *
     * @throws Exception
     */
    protected function loadUserData(Request $request, string $tokenCookieName)
    {
        $token = $request->cookies->get($tokenCookieName);

        $userData = $this->client->sendJson(
            '/my/userdata',
            null,
            'GET',
            ['Authorization' => sprintf('Bearer %s', $token)]
        );

        $this->user = new User($userData->user);

        return $this;
    }
}