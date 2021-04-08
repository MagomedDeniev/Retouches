<?php


namespace App\Service;


use App\Entity\Order;
use Twilio\Rest\Client;

class Notifier
{
    private $twilio;
    private $message;
    private $sender = 'Retouches M';

    public function __construct(Client $twilio)
    {
        $this->twilio = $twilio;
    }

    public function notify($receiver)
    {
        return $this->twilio->messages->create($receiver,[
            'from' => $this->sender,
            'body' => $this->message
        ]);
    }

    public function ordered(Order $order)
    {
        return $this->twilio->messages->create($order->getNumber(),[
            'from' => $this->sender,
            'body' => 'Cher client, merci pour votre commande chez Malika!

Votre numéro de commande est ' . $order->getId() . '.

Prix: ' . $order->getPrice() . '€'
            ]);
    }
}
