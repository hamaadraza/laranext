<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

$app =  Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->api(prepend: [
            \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
        ]);

        $middleware->alias([
            'verified' => \App\Http\Middleware\EnsureEmailIsVerified::class,
        ]);

        //
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();

$rootPath = dirname(__DIR__, 3);
$app->useEnvironmentPath($rootPath);
$app->useDatabasePath($app->basePath('database'));
$app->useStoragePath($app->basePath('storage'));
$app->usePublicPath($app->basePath('public'));

$app->afterBootstrapping(\Illuminate\Foundation\Bootstrap\LoadEnvironmentVariables::class, function (Application $app) use ($rootPath) {
    if (file_exists($rootPath . '/.env')) {
        \Dotenv\Dotenv::create(
            \Illuminate\Support\Env::getRepository(),
            $rootPath,
            '.env'
        )->load();
    }
});

return $app;
