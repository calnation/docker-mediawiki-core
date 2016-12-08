<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit2a6ed393fd6ce45140ed07512371bf07
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
            $loader->prefixLengthsPsr4 = ComposerStaticInit2a6ed393fd6ce45140ed07512371bf07::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit2a6ed393fd6ce45140ed07512371bf07::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}