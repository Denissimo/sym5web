<?php

namespace App\Service;

use Symfony\Contracts\HttpClient\HttpClientInterface;

class ContentLoader
{
    /**
     * @var HttpClientInterface
     */
    private $client;

    /**
     * @var string
     */
    private $apiUrl;

    /**
     * ContentLoader constructor.
     *
     * @param HttpClientInterface $client
     */
    public function __construct(HttpClientInterface $client, string $apiUrl)
    {
        $this->client = $client;
        $this->apiUrl = $apiUrl;
    }

    public function getCarousel(string $path)
    {
        $data = $this->client->request(
            'GET',
            $this->apiUrl . $path
        );

        $content = $data->getContent();

        return json_decode($content);
    }
}