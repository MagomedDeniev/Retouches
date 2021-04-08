<?php

namespace App\Service;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Twig\Environment;

class Pagination
{
    private $entityClass;
    private $limit = 10;
    private $currentPage = 1;
    private $manager;
    private $twig;
    private $route;
    private $sort = ['id' => 'ASC'];
    private $criteria = [];
    private $template = 'layouts/pagination.html.twig';
    public $slug;

    public function __construct(EntityManagerInterface $manager, Environment $twig, RequestStack $request)
    {
        $this->manager  = $manager;
        $this->twig     = $twig;
        $this->route    = $request->getCurrentRequest()->attributes->get('_route');
    }

    public function display()
    {
        $this->twig->display($this->getTemplate(), [
            'page'  => $this->currentPage,
            'pages' => $this->getPages(),
            'route' => $this->route,
            'sort' => $this->sort,
            'slug' => $this->slug
        ]);
    }

    public function getData()
    {
        // 1) Calculer l'offset
        $offset = $this->currentPage * $this->limit - $this->limit;

        // 2) Demander au repository de trouver les elements
        $repo = $this->manager->getRepository($this->entityClass);
        $data = $repo->findBy($this->criteria,$this->sort,$this->limit, $offset);

        // 3) Renvoyer les elements en question
        return $data;
    }

    public function setSort($sort)
    {
        $this->sort = $sort;

        return $this;
    }

    public function setCriteria($criteria)
    {
        $this->criteria = $criteria;
    }

    public function setRoute($route)
    {
        $this->route = $route;

        return $this;
    }

    public function getRoute()
    {
        return $this->route;
    }

    public function getPages()
    {
        // 1) Connaitre le total des enregistrements de la table
        $repo = $this->manager->getRepository($this->entityClass);
        $total = count($repo->findBy($this->criteria));

        // 2) Faire la division l'arrondi et le renvoyer
        $pages = ceil($total / $this->limit);

        return $pages;
    }

    public function setPage($page)
    {
        $this->currentPage = $page;

        return $this;
    }

    public function getPage()
    {
        return $this->currentPage;
    }

    public function setLimit($limit)
    {
        $this->limit = $limit;

        return $this;
    }

    public function getLimit()
    {
        return $this->limit;
    }

    public function setEntityClass($entityClass)
    {
        $this->entityClass = $entityClass;

        return $this;
    }

    public function getEntityClass()
    {
        return $this->entityClass;
    }

    public function getTemplate()
    {
        return $this->template;
    }

    public function setTemplate($template)
    {
        $this->template = $template;

        return $this;
    }

    public function getSlug()
    {
        return $this->slug;
    }

    public function setSlug($slug)
    {
        $this->slug = $slug;

        return $this;
    }
}
