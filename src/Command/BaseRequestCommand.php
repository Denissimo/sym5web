<?php

namespace App\Command;

use App\Service\Client;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;

class BaseRequestCommand extends Command
{
    protected static $defaultName = 'base:command';

    protected $client;

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
    public function __construct(Client $client)
    {
        parent::__construct(null);

        $this->client = $client;
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
}