<?php

namespace App\Controller;

use App\Api\Content\User\User;
use App\Service\Client;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Finder\Exception\AccessDeniedException;
use Psr\Log\LoggerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Throwable;

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
     * @var int
     */
    protected $responseCode = Response::HTTP_OK;

    /**
     * @var LoggerInterface
     */
    protected $logger;

    /**
     * BaseController constructor.
     * @param Client $client
     * @param RequestStack $requestStack
     * @param LoggerInterface $logger
     */
    public function __construct(
        Client $client,
        RequestStack $requestStack,
        LoggerInterface $logger
    )
    {
        $this->client = $client;
        $this->requestStack = $requestStack;
        $this->logger = $logger;
    }

    protected function loadUserData(Request $request, string $tokenCookieName, string $userdataSessionName)
    {
        try {
            $session = $this->requestStack->getSession();
            $userData = $session->get($userdataSessionName);
            $token = $request->cookies->get($tokenCookieName);

            if ($userData && $token) {
                $this->user = new User($userData->user);

                return $this;
            }

            if ($token) {
                $userData = $this->client->sendJson(
                    '/my/userdata',
                    null,
                    'GET',
                    ['Authorization' => sprintf('Bearer %s', $token)]
                );
            } else {
                $this->responseCode = Response::HTTP_UNAUTHORIZED;
            }
            $session->set($userdataSessionName, $userData);
            $this->user = new User($userData->user);
        } catch (AccessDeniedException $e) {
            $this->responseCode = $e->getCode();

            return false;
        } catch (BadRequestHttpException $e) {
            $this->responseCode = $e->getCode();

            return false;
        } catch (Throwable $e) {
            $this->responseCode = $e->getCode();

            return false;
        }

        return true;
    }

    protected function dropSessionUserData(string $userdataSessionName)
    {
        $session = $this->requestStack->getSession();
        $session->remove($userdataSessionName);

        return $this;
    }

    protected function requestAuthorized(
        Request $request,
        Client $client,
        string $tokenCookieName,
        $path,
        $json = null,
        $method = 'GET'
    )
    {
        try {
            $token = $request->cookies->get($tokenCookieName);
            return $client->sendJson(
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
        } catch (AccessDeniedException $e) {
            $this->responseCode = $e->getCode();

            return $this->buildError($e);
        } catch (BadRequestHttpException $e) {
            $this->responseCode = $e->getCode();

            return $this->buildError($e);
        } catch (Throwable $e) {
            $this->responseCode = $e->getCode();

            return $this->buildError($e);
        }
    }

    protected function requestUnauthorized(
        Client $client,
        $path,
        $json = null,
        $method = 'GET'
    )
    {
        try {
            return $client->sendJson(
                $path,
                $json,
                $method
            );
        } catch (AccessDeniedException $e) {
            $this->responseCode = $e->getCode();

            return $this->buildError($e);
        } catch (BadRequestHttpException $e) {
            $this->responseCode = $e->getCode();

            return $this->buildError($e);
        } catch (Throwable $e) {
            $this->responseCode = $e->getCode();

            return $this->buildError($e);
        }
    }

    protected function buildError(Throwable $e)
    {
        $errorMessage = $e->getMessage();
        $errorCode = $e->getCode();

//            return $this->redirectToRoute('login');
        return $this->render('base.html.twig', [
                'data' => '',
                'message' => $errorMessage,
                'code' => $errorCode
            ]
        );
    }

    /**
     * @param string $message
     * @param array $data
     * @param int $time
     *
     * @return int
     */
    protected function logInfo(string $message, array $data = [], int $time = 0)
    {
        $currentTime = time();
        $delay = $time != 0 ? $currentTime - $time : $time;
        $this->logger->info(sprintf($message, $delay ), $data);

        return $currentTime;
    }
}