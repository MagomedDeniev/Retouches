<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="app_home")
     */
    public function index()
    {
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }

    /**
     * @Route("/login", name="app_login")
     * @param AuthenticationUtils $authenticationUtils
     * @param UserRepository $userRepo
     * @param UserPasswordEncoderInterface $encoder
     * @return Response
     */
    public function login(AuthenticationUtils $authenticationUtils, UserRepository $userRepo, UserPasswordEncoderInterface $encoder): Response
    {
        if (!$userRepo->findAll()) {
            $user = new User();
            $user->setUsername('demo');
            $user->setRoles(['ROLE_ADMIN']);
            $user->setPassword($encoder->encodePassword($user,'demo'));

            $em = $this->getDoctrine()->getManager();
            $em->persist($user);
            $em->flush();
        }

        if ($this->getUser()) {
            return $this->redirectToRoute('dash_home');
        }

        $error = $authenticationUtils->getLastAuthenticationError();
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('home/login.html.twig', ['last_username' => $lastUsername, 'error' => $error]);
    }

    /**
     * @Route("/logout", name="app_logout")
     */
    public function logout()
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }
}
