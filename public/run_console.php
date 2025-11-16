<?php

// Sécurité min
if (!isset($_GET['key']) || $_GET['key'] !== 'REGEN') {
    http_response_code(403);
    exit('NO');
}

echo "<pre>";

// Revenir à la racine du projet Symfony
$root = realpath(__DIR__ . '/..');
chdir($root);

echo "Working in: " . getcwd() . "\n";

echo "Rebuilding cache...\n";

// Nettoyer le cache
passthru('php bin/console cache:clear --env=prod --no-warmup 2>&1');

// Recréer le cache
passthru('php bin/console cache:warmup --env=prod 2>&1');

echo "DONE\n";
