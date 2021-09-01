<?php

namespace App\Command;

use App\Service\Client;
use App\Service\ClientAuth;
use Symfony\Component\Console\Command\Command;
use Throwable;

class BaseRequestCommand extends Command
{
    protected static $defaultName = 'base:command';

    /**
     * @var Client
     */
    protected $client;

    /**
     * @var ClientAuth
     */
    protected $clientAuth;

    protected function configure()
    {
        $this
            ->setName('base:command')
            ->setDescription('Its a Base Command.')
            ->setHelp('Just a test command');
    }

    /**
     * BaseRequestCommand constructor.
     *
     * @param Client $client
     */
    public function __construct(Client $client, ClientAuth $clientAuth)
    {
        parent::__construct(null);

        $this->client = $client;
        $this->clientAuth = $clientAuth;
    }

    protected function requestAuthorized(
        string $token,
        $path,
        $json = null,
        $method = 'GET'
    )
    {
        return $this->client->sendJson(
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
    }

    /**
     * @param $username
     * @param $password
     *
     * @return string
     *
     * @throws Throwable
     */
    protected function authorize(
        $username,
        $password
    ) :string
    {
        $result = $this->clientAuth->sendJson(
            '/api/login_check',
            json_encode(
                [
                    'username' => $username,
                    'password' => $password
                ]
            ),
            'POST'
        );

        return $result->token;
    }
}