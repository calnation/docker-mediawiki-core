<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInite339915cc80908d2826c4a54eb640733
{
    public static $files = array (
        '54e8153addf3583acb81ffc5ae64997d' => __DIR__ . '/../..' . '/ImageMap.php',
    );

    public static $prefixLengthsPsr4 = array (
        'C' => 
        array (
            'Composer\\Installers\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Composer\\Installers\\' => 
        array (
            0 => __DIR__ . '/..' . '/composer/installers/src/Composer/Installers',
        ),
    );

    public static $classMap = array (
        'ImageMap' => __DIR__ . '/../..' . '/ImageMap_body.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInite339915cc80908d2826c4a54eb640733::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInite339915cc80908d2826c4a54eb640733::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInite339915cc80908d2826c4a54eb640733::$classMap;

        }, null, ClassLoader::class);
    }
}
