<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInita2d0ff3fce705c9f0cbd6c66c52f9977
{
    public static $files = array (
        'e40631d46120a9c38ea139981f8dab26' => __DIR__ . '/..' . '/ircmaxell/password-compat/lib/password.php',
        '17fd9fef37c97cfdc0c7794299a8423d' => __DIR__ . '/..' . '/vrana/notorm/NotORM.php',
        '7fdad27ad584a05fb8da81178cdd742b' => __DIR__ . '/..' . '/arcanedev/qr-code/src/helpers.php',
    );

    public static $prefixLengthsPsr4 = array (
        'p' => 
        array (
            'proj4php\\' => 9,
        ),
        'S' => 
        array (
            'Slim\\Middleware\\' => 16,
        ),
        'F' => 
        array (
            'Firebase\\JWT\\' => 13,
        ),
        'C' => 
        array (
            'CorsSlim\\' => 9,
        ),
        'A' => 
        array (
            'Arcanedev\\QrCode\\' => 17,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'proj4php\\' => 
        array (
            0 => __DIR__ . '/..' . '/proj4php/proj4php/src',
        ),
        'Slim\\Middleware\\' => 
        array (
            0 => __DIR__ . '/..' . '/tuupola/slim-basic-auth/src',
            1 => __DIR__ . '/..' . '/tuupola/slim-jwt-auth/src',
        ),
        'Firebase\\JWT\\' => 
        array (
            0 => __DIR__ . '/..' . '/firebase/php-jwt/src',
        ),
        'CorsSlim\\' => 
        array (
            0 => __DIR__ . '/..' . '/palanik/corsslim',
        ),
        'Arcanedev\\QrCode\\' => 
        array (
            0 => __DIR__ . '/..' . '/arcanedev/qr-code/src',
        ),
    );

    public static $prefixesPsr0 = array (
        'S' => 
        array (
            'Slim' => 
            array (
                0 => __DIR__ . '/..' . '/slim/slim',
            ),
        ),
        'P' => 
        array (
            'Psr\\Log\\' => 
            array (
                0 => __DIR__ . '/..' . '/psr/log',
            ),
            'PHPQRCode' => 
            array (
                0 => __DIR__ . '/..' . '/aferrandini/phpqrcode/lib',
            ),
        ),
        'G' => 
        array (
            'GeoJson\\' => 
            array (
                0 => __DIR__ . '/..' . '/jmikola/geojson/src',
            ),
        ),
        'D' => 
        array (
            'Detection' => 
            array (
                0 => __DIR__ . '/..' . '/mobiledetect/mobiledetectlib/namespaced',
            ),
        ),
    );

    public static $classMap = array (
        'Datamatrix' => __DIR__ . '/..' . '/tecnickcom/tcpdf/include/barcodes/datamatrix.php',
        'JsonSerializable' => __DIR__ . '/..' . '/jmikola/geojson/stubs/JsonSerializable.php',
        'Mobile_Detect' => __DIR__ . '/..' . '/mobiledetect/mobiledetectlib/Mobile_Detect.php',
        'PDF417' => __DIR__ . '/..' . '/tecnickcom/tcpdf/include/barcodes/pdf417.php',
        'QRcode' => __DIR__ . '/..' . '/tecnickcom/tcpdf/include/barcodes/qrcode.php',
        'TCPDF' => __DIR__ . '/..' . '/tecnickcom/tcpdf/tcpdf.php',
        'TCPDF2DBarcode' => __DIR__ . '/..' . '/tecnickcom/tcpdf/tcpdf_barcodes_2d.php',
        'TCPDFBarcode' => __DIR__ . '/..' . '/tecnickcom/tcpdf/tcpdf_barcodes_1d.php',
        'TCPDF_COLORS' => __DIR__ . '/..' . '/tecnickcom/tcpdf/include/tcpdf_colors.php',
        'TCPDF_FILTERS' => __DIR__ . '/..' . '/tecnickcom/tcpdf/include/tcpdf_filters.php',
        'TCPDF_FONTS' => __DIR__ . '/..' . '/tecnickcom/tcpdf/include/tcpdf_fonts.php',
        'TCPDF_FONT_DATA' => __DIR__ . '/..' . '/tecnickcom/tcpdf/include/tcpdf_font_data.php',
        'TCPDF_IMAGES' => __DIR__ . '/..' . '/tecnickcom/tcpdf/include/tcpdf_images.php',
        'TCPDF_IMPORT' => __DIR__ . '/..' . '/tecnickcom/tcpdf/tcpdf_import.php',
        'TCPDF_PARSER' => __DIR__ . '/..' . '/tecnickcom/tcpdf/tcpdf_parser.php',
        'TCPDF_STATIC' => __DIR__ . '/..' . '/tecnickcom/tcpdf/include/tcpdf_static.php',
        'XMLSchema' => __DIR__ . '/..' . '/fergusean/nusoap/lib/class.xmlschema.php',
        'nusoap_base' => __DIR__ . '/..' . '/fergusean/nusoap/lib/class.nusoap_base.php',
        'nusoap_client' => __DIR__ . '/..' . '/fergusean/nusoap/lib/class.soapclient.php',
        'nusoap_client_mime' => __DIR__ . '/..' . '/fergusean/nusoap/lib/nusoapmime.php',
        'nusoap_fault' => __DIR__ . '/..' . '/fergusean/nusoap/lib/class.soap_fault.php',
        'nusoap_parser' => __DIR__ . '/..' . '/fergusean/nusoap/lib/class.soap_parser.php',
        'nusoap_server' => __DIR__ . '/..' . '/fergusean/nusoap/lib/class.soap_server.php',
        'nusoap_server_mime' => __DIR__ . '/..' . '/fergusean/nusoap/lib/nusoapmime.php',
        'nusoap_wsdlcache' => __DIR__ . '/..' . '/fergusean/nusoap/lib/class.wsdlcache.php',
        'nusoap_xmlschema' => __DIR__ . '/..' . '/fergusean/nusoap/lib/class.xmlschema.php',
        'nusoapservermime' => __DIR__ . '/..' . '/fergusean/nusoap/lib/nusoapmime.php',
        'soap_fault' => __DIR__ . '/..' . '/fergusean/nusoap/lib/class.soap_fault.php',
        'soap_parser' => __DIR__ . '/..' . '/fergusean/nusoap/lib/class.soap_parser.php',
        'soap_server' => __DIR__ . '/..' . '/fergusean/nusoap/lib/class.soap_server.php',
        'soap_transport_http' => __DIR__ . '/..' . '/fergusean/nusoap/lib/class.soap_transport_http.php',
        'soapclient' => __DIR__ . '/..' . '/fergusean/nusoap/lib/class.soapclient.php',
        'soapclientmime' => __DIR__ . '/..' . '/fergusean/nusoap/lib/nusoapmime.php',
        'soapval' => __DIR__ . '/..' . '/fergusean/nusoap/lib/class.soap_val.php',
        'wsdl' => __DIR__ . '/..' . '/fergusean/nusoap/lib/class.wsdl.php',
        'wsdlcache' => __DIR__ . '/..' . '/fergusean/nusoap/lib/class.wsdlcache.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInita2d0ff3fce705c9f0cbd6c66c52f9977::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInita2d0ff3fce705c9f0cbd6c66c52f9977::$prefixDirsPsr4;
            $loader->prefixesPsr0 = ComposerStaticInita2d0ff3fce705c9f0cbd6c66c52f9977::$prefixesPsr0;
            $loader->classMap = ComposerStaticInita2d0ff3fce705c9f0cbd6c66c52f9977::$classMap;

        }, null, ClassLoader::class);
    }
}