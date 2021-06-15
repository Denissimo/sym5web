<?php

namespace App\Service;

use Symfony\Contracts\HttpClient\HttpClientInterface;

class Client
{
    /**
     * @var HttpClientInterface
     */
    protected $client;

    /**
     * @var string
     */
    protected $url;

    /**
     * Client constructor.
     *
     * @param HttpClientInterface $client
     * @param string $apiUrl
     */
    public function __construct(HttpClientInterface $client, string $apiUrl)
    {
        $this->client = $client;
        $this->url = $apiUrl;
    }

    public function sendJson($path, $json = null, $method = 'GET',  $headers = [])
    {
        $fullPath = $this->url . $path;
        $options = [];
        
        if (count((array)$headers)) {
            $options['headers'] = $headers;
        }

        if (isset($json)) {
            $options['json'] = json_decode($json);
        }

        $response = $this->client->request(
            $method,
            $fullPath,
            $options
        );

        return json_decode($response->getContent());
    }
}