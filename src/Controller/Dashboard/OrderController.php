<?php

namespace App\Controller\Dashboard;

use App\Entity\Order;
use App\Entity\User;
use App\Form\OrderType;
use App\Service\Notifier;
use App\Service\Pagination;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/dash/order", name="dash_")
 */
class OrderController extends AbstractController
{
    /**
     * @Route("/{page<\d+>?1}", name="order_index", methods={"GET"})
     * @param int $page
     * @param Pagination $pagination
     * @return Response
     */
    public function index(int $page, Pagination $pagination): Response
    {
        $pagination->setEntityClass(Order::class)
            ->setLimit(10)
            ->setPage($page)
            ->setSort(['orderedAt' => 'DESC']);

        return $this->render('dashboard/order/index.html.twig', [
            'orders' => $pagination->getData(),
            'pagination' => $pagination
        ]);
    }

    /**
     * @Route("/new", name="order_new", methods={"GET","POST"})
     * @param Request $request
     * @param Notifier $notifier
     * @return Response
     */
    public function new(Request $request, Notifier $notifier): Response
    {
        $order = new Order();
        $form = $this->createForm(OrderType::class, $order)
            ->add('sms', CheckboxType::class, [
                'label' => 'Envoyer un SMS',
                'attr' => ['checked' => false],
                'mapped' => false,
                'required' => false,
                'label_attr' => ['class' => 'switch-custom'],
            ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $user = $this->getDoctrine()->getRepository(User::class)->find($this->getUser());
            $order->setToCompleteAt($form->get('toCompleteAt')->getData()->modify('12 hour'));
            $order->setAcceptedBy($user);
            $numero = str_replace(' ','',$form->get('number')->getData());
            if (substr($numero,'0','1') == '0') {
                $numero = substr_replace($numero,'+33', '0', '1');
            }
            $order->setNumber($numero);

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($order);
            $entityManager->flush();

            // Envoi de SMS
//            if ($form->get('sms')->getData() == true) {
//                $notifier->ordered($order);
//            }

            $this->addFlash('success', 'Vous avez ajouté la commande №' . $order->getId());

            return $this->redirectToRoute('dash_order_show', [
                'id' => $order->getId()
            ]);
        }

        return $this->render('dashboard/order/new.html.twig', [
            'order' => $order,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/show", name="order_show", methods={"GET"})
     * @param Order $order
     * @return Response
     */
    public function show(Order $order): Response
    {
        return $this->render('dashboard/order/show.html.twig', [
            'order' => $order,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="order_edit", methods={"GET","POST"})
     * @param Request $request
     * @param Order $order
     * @return Response
     */
    public function edit(Request $request, Order $order): Response
    {
        if ($order->getAcceptedBy() && $order->getAcceptedBy()->getUsername() == $this->getUser()->getUsername() || $this->isGranted('ROLE_OWNER')) {
            $form = $this->createForm(OrderType::class, $order)
                ->add('canceled', CheckboxType::class, [
                'label' => 'La commande est annulée',
                'required' => false,
                'label_attr' => ['class' => 'switch-custom']
                ]);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $order->setToCompleteAt($form->get('toCompleteAt')->getData()->modify('12 hour'));

                $this->getDoctrine()->getManager()->flush();

                return $this->redirectToRoute('dash_home');
            }

            return $this->render('dashboard/order/edit.html.twig', [
                'order' => $order,
                'form' => $form->createView(),
            ]);
        } else {
            $this->addFlash('danger', 'Vous ne pouvez pas modifier la commande des autres');
            return $this->redirectToRoute('dash_order_index');
        }
    }

    /**
     * @Route("/{id}/cancel", name="order_cancel", methods={"GET"})
     * @param Order $order
     * @return Response
     */
    public function cancel(Order $order): Response
    {
        $order->setCanceled(true);
        $this->getDoctrine()->getManager()->flush();
        $this->addFlash('success alert-add-order', 'La commande №' . $order->getId() . ' a été annulé.');
        return $this->redirectToRoute('dash_home');
    }

    /**
     * @Route("/{id}/uncancel", name="order_uncancel", methods={"GET"})
     * @param Order $order
     * @return Response
     */
    public function uncancel(Order $order): Response
    {
        $order->setCanceled(false);
        $this->getDoctrine()->getManager()->flush();
        $this->addFlash('success alert-add-order', 'La commande №' . $order->getId() . ' n\'est plus annulé.');
        return $this->redirectToRoute('dash_home');
    }

    /**
     * @Route("/{id}", name="order_delete", methods={"DELETE"})
     * @IsGranted("ROLE_ADMIN")
     * @param Request $request
     * @param Order $order
     * @return Response
     */
    public function delete(Request $request, Order $order): Response
    {
        if ($this->isCsrfTokenValid('delete'.$order->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($order);
            $entityManager->flush();
        }

        return $this->redirectToRoute('dash_order_index');
    }
}
