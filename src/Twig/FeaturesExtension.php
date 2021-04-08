<?php


namespace App\Twig;


use Twig\Environment;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class FeaturesExtension extends AbstractExtension
{
    public function getFunctions()
    {
        return [
            new TwigFunction('crudAction', [$this, 'crudAction'], ['is_safe' => ['html'], 'needs_environment' => true]),
            new TwigFunction('orderStatusBadge', [$this, 'orderStatusBadge'], ['is_safe' => ['html'], 'needs_environment' => true]),
            new TwigFunction('orderStatus', [$this, 'orderStatus'], ['is_safe' => ['html'], 'needs_environment' => true]),
            new TwigFunction('orderCards', [$this, 'orderCards'], ['is_safe' => ['html'], 'needs_environment' => true])
        ];
    }

    public function crudAction(Environment $twig, $entity, $name)
    {
        return $twig->render('dashboard/layouts/actions.html.twig', [
            'entity' => $entity,
            'name' => $name
        ]);
    }

    public function orderStatusBadge(Environment $twig, $status)
    {
        if ($status === null) {
            $message = 'en cours';
            $color = 'warning';
        } elseif ($status === false) {
            $message = 'prêt';
            $color = 'info';
        } else {
            $message = 'livré';
            $color = 'success';
        }

        return '<span class="badge badge-pill badge-' . $color . '">' . $message . '</span>';
    }

    public function orderStatus(Environment $twig, $status)
    {
        if ($status === null) {
            $message = 'en cours';
        } elseif ($status === false) {
            $message = 'prêt';
        } else {
            $message = 'livré';
        }

        return $message;
    }

    public function orderCards(Environment $twig, $orders, $status = 'in_progress')
    {
        return $twig->render('dashboard/layouts/order_cards.html.twig', [
            'orders' => $orders,
            'status' => $status
        ]);
    }
}
