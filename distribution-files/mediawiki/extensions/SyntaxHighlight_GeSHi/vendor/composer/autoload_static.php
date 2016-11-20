<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit79cabe7390eb0390df57d2023c459af9
{
    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'Symfony\\Component\\Process\\' => 26,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Symfony\\Component\\Process\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/process',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit79cabe7390eb0390df57d2023c459af9::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit79cabe7390eb0390df57d2023c459af9::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
