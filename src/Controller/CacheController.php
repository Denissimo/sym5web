<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use SymfonyBundles\RedisBundle\Redis\ClientInterface as Redis;
//use Predis\Client as Redis;

class CacheController extends AbstractController
{
    public function buildCacheLoadResponse(Request $request, Redis $redis, string $parameterName): Response
    {
        $response = new Response(json_encode([$parameterName => $redis->get($parameterName)]));
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }

    public function buildCachePutResponse(Request $request, Redis $redis)
    {
        $decodedRequest = json_decode($request->getContent(), true);
        $setParameters = [];
        foreach ($decodedRequest as $key => $val) {
            $setParameters[$key] = $val;
            $redis->set($key, $val);
        }
        $response = new Response(json_encode([$setParameters]));
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }
}