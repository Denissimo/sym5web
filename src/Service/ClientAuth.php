<?php

namespace App\Service;

use Symfony\Contracts\HttpClient\HttpClientInterface;

class ClientAuth extends Client
{
    /**
     * Client constructor.
     *
     * @param HttpClientInterface $client
     * @param string $authUrl
     */
    public function __construct(HttpClientInterface $client, string $authUrl)
    {
        parent::__construct($client, $authUrl);
        $this->client = $client;
        $this->url = $authUrl;
    }

    public function auth($path, $method = 'GET', $json = null,  $headers = [])
    {
        $fullPath = $this->url . $path;

        $jsonDecode = isset($json) ? json_decode($json) : [];
        $options = [
            'headers' => $headers,
            'json' => $jsonDecode
        ];
        $response = $this->client->request(
            $method,
            $fullPath,
            $options
        );

        return json_decode($response->getContent());
    }
}