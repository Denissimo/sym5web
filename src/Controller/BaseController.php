<?php

namespace App\Controller;

use App\Api\Content\User\User;
use App\Service\Client;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Finder\Exception\AccessDeniedException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
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
     * BaseController constructor.
     *
     * @param Client $client
     */
    public function __construct(Client $client, RequestStack $requestStack)
    {
        $this->client = $client;
        $this->requestStack = $requestStack;
    }

    protected function loadUserData(Request $request, string $tokenCookieName, string $userdataSessionName)
    {
        try {
            $session = $this->requestStack->getSession();
            $userData = $session->get($userdataSessionName);
            if ($userData) {
                $this->user = new User($userData->user);

                return $this;
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
        } catch (AccessDeniedException $e) {

            return false;
        } catch (BadRequestHttpException $e) {

            return false;
        } catch (Throwable $e) {

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
//            return $this->redirectToRoute('login');

            return $this->buildError($e);
        } catch (BadRequestHttpException $e) {

            return $this->buildError($e);
        } catch (Throwable $e) {

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

            return $this->buildError($e);
        } catch (BadRequestHttpException $e) {

            return $this->buildError($e);
        } catch (Throwable $e) {

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
}