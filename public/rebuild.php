<?php
// Forcer Symfony à reconstruire le cache prod via PHP, qui a les bons droits
putenv('APP_ENV=prod');
putenv('APP_DEBUG=0');
require __DIR__.'/vendor/autoload.php';

use Symfony\Component\HttpKernel\KernelInterface;

$kernel = new App\Kernel('prod', false);
$kernel->boot();

// Déclenche la reconstruction
$cacheDir = __DIR__.'/var/cache/prod';
if (!is_dir($cacheDir)) {
    mkdir($cacheDir, 0775, true);
}

echo "Cache folder recreated.";
