<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class AdresseProxyController extends AbstractController
{
    #[Route('/api/adresse', name: 'api_adresse')]
    public function adresse(Request $request)
    {
        $q = $request->query->get('q');
        if (!$q) {
            return new JsonResponse(['error' => 'missing query q'], 400);
        }

        $url = "https://api-adresse.data.gouv.fr/search/?q=" . urlencode($q) . "&limit=5";

        $data = file_get_contents($url);

        return new JsonResponse(json_decode($data, true));
    }
}
