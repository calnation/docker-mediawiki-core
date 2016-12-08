<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitb246af2ee4877a444827a8f6516f022a
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
            $loader->prefixLengthsPsr4 = ComposerStaticInitb246af2ee4877a444827a8f6516f022a::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitb246af2ee4877a444827a8f6516f022a::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
