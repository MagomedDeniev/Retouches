<?php

namespace App\Controller\Dashboard;

use App\Entity\Repair;
use App\Form\RepairType;
use App\Repository\RepairRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/dash/repair", name="dash_")
 */
class RepairController extends AbstractController
{
    /**
     * @Route("/", name="repair_index", methods={"GET"})
     * @param RepairRepository $repairRepository
     * @return Response
     */
    public function index(RepairRepository $repairRepository): Response
    {
        return $this->render('dashboard/repair/index.html.twig', [
            'repairs' => $repairRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="repair_new", methods={"GET","POST"})
     * @param Request $request
     * @return Response
     */
    public function new(Request $request): Response
    {
        $repair = new Repair();
        $form = $this->createForm(RepairType::class, $repair);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($repair);
            $entityManager->flush();

            return $this->redirectToRoute('dash_repair_index');
        }

        return $this->render('dashboard/repair/new.html.twig', [
            'repair' => $repair,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/edit", name="repair_edit", methods={"GET","POST"})
     * @param Request $request
     * @param Repair $repair
     * @return Response
     */
    public function edit(Request $request, Repair $repair): Response
    {
        $form = $this->createForm(RepairType::class, $repair);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('dash_repair_index');
        }

        return $this->render('dashboard/repair/edit.html.twig', [
            'repair' => $repair,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="repair_delete", methods={"DELETE"})
     * @IsGranted("ROLE_ADMIN")
     * @param Request $request
     * @param Repair $repair
     * @return Response
     */
    public function delete(Request $request, Repair $repair): Response
    {
        if ($this->isCsrfTokenValid('delete'.$repair->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($repair);
            $entityManager->flush();
        }

        return $this->redirectToRoute('dash_repair_index');
    }
}
