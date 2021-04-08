<?php

namespace App\Controller\Dashboard;

use App\Entity\Order;
use App\Repository\OrderRepository;
use DateTime;
use DateTimeZone;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class HomeController
 * @package App\Controller\Dashboard
 * @Route("/dash", name="dash_")
 */
class HomeController extends AbstractController
{
    /**
     * @Route("/", name="home")
     * @param OrderRepository $orderRepo
     * @return Response
     * @throws Exception
     */
    public function index(OrderRepository $orderRepo): Response
    {
        return $this->render('dashboard/home/index.html.twig', [
            'lates' => $orderRepo->findByDate('lates'),
            'today' => $orderRepo->findByDate('today'),
            'tomorrow' => $orderRepo->findByDate('tomorrow'),
            'rest' => $orderRepo->findByDate(),
            'ready' => $orderRepo->findBy(['status' => 0, 'canceled' => 0], ['toCompleteAt' => 'ASC']),
            'canceled' => $orderRepo->findBy(['canceled' => 1])
        ]);
    }

    /**
     * @Route("/ready/{id}", name="ready")
     * @param Order $order
     * @return Response
     */
    public function ready(Order $order): Response
    {
        $order->setStatus(0);
        $this->getDoctrine()->getManager()->flush();
        $this->addFlash('success alert-add-order', 'La commande №' . $order->getId() . ' a été déplacée dans la section des commandes prêtes.');
        return $this->redirectToRoute('dash_home');
    }

    /**
     * @Route("/inprogress/{id}", name="inprogress")
     * @param Order $order
     * @return Response
     */
    public function inProgress(Order $order): Response
    {
        $order->setStatus(null);
        $this->getDoctrine()->getManager()->flush();
        $this->addFlash('success alert-add-order', 'La commande №' . $order->getId() . ' a été déplacée dans la section des commandes en cours.');
        return $this->redirectToRoute('dash_home');
    }

    /**
     * @Route("/delivered/{id}", name="delivered")
     * @param Order $order
     * @return Response
     * @throws Exception
     */
    public function delivered(Order $order): Response
    {
        $order->setStatus(1);
        $order->setIssuedAt(new DateTime('now', new DateTimeZone('Europe/Paris')));
        $this->getDoctrine()->getManager()->flush();
        $this->addFlash('success alert-add-order', 'La commande №' . $order->getId() . ' a été déplacée dans la section des commandes livrées.');

        return $this->redirectToRoute('dash_home');
    }
}
