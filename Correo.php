<?php
session_cache_limiter( 'nocache' );
header( 'Expires: ' . gmdate( 'r', 0 ) );
header( 'Content-type: application/json' );

    $datos = $_POST;
    $para           = 'arigatodesign.cl@gmail.com';
    $asunto         = strip_tags($_POST['nombre'].' ha enviado una consulta a Arigato Design.');
    $email          = strip_tags($_POST['correo']);
    $telefono       = strip_tags($_POST['telefono']);
    $nombre         = strip_tags($_POST['nombre']);
    $mensaje        = nl2br( htmlspecialchars($_POST['mensaje'], ENT_QUOTES) );

    if(empty($datos['nombre']))
    {
        $result = array( 'Success' => false, 'empty'=>'nombre', 'mensaje'=>'<u>Nombre</u> es un campo obligatorio.' );
        echo json_encode($result );
        die;
    }

    if(empty($datos['correo']))
    {
        $result = array( 'Success' => false, 'empty'=>'nombre', 'mensaje'=>'<u>Correo</u> es un campo obligatorio.' );
        echo json_encode($result );
        die;
    }

    if(empty($datos['telefono']))
    {
        $result = array( 'Success' => false, 'empty'=>'nombre', 'mensaje'=>'<u>Telefono</u> es un campo obligatorio.' );
        echo json_encode($result );
        die;
    }

    if(empty($datos['mensaje']))
    {
        $result = array( 'Success' => false, 'empty'=>'nombre', 'mensaje'=>'<u>Consulta</u> es un campo obligatorio.' );
        echo json_encode($result );
        die;
    }

    $mensajeHtml = '';
    $mensajeHtml .= '<!DOCTYPE html>';
    $mensajeHtml .= '<html>';
    $mensajeHtml .='    <head>';
    $mensajeHtml .='    <style>';
    $mensajeHtml .='        table {';
    $mensajeHtml .='            font-family: arial, sans-serif;';
    $mensajeHtml .='            border-collapse: collapse;';
    $mensajeHtml .='            width: 100%;';
    $mensajeHtml .='        }';
    $mensajeHtml .='        td, th {';
    $mensajeHtml .='            border: 1px solid #dddddd;';
    $mensajeHtml .='            text-align: left;';
    $mensajeHtml .='            padding: 8px;';
    $mensajeHtml .='        }';
    $mensajeHtml .='        tr:nth-child(even) {';
    $mensajeHtml .='            background-color: #dddddd;';
    $mensajeHtml .='        }';
    $mensajeHtml .='    </style>';
    $mensajeHtml .='    </head>';
    $mensajeHtml .='    <body>';
    $mensajeHtml .='    <h2><u>'.$nombre.'</u> ha ingresado la siguiente consulta:</h2>';
    $mensajeHtml .='    <table>';
    $mensajeHtml .='        <tr>';
    $mensajeHtml .='            <th>Nombre Cliente</th>';
    $mensajeHtml .='            <th>Correo</th>';
    $mensajeHtml .='            <th>Telefono</th>';
    $mensajeHtml .='            <th>Consulta</th>';
    $mensajeHtml .='        </tr>';
    $mensajeHtml .='        <tr>';
    $mensajeHtml .='            <td>'.$nombre.'</td>';
    $mensajeHtml .='            <td>'.$email.'</td>';
    $mensajeHtml .='            <td>'.$telefono.'</td>';
    $mensajeHtml .='            <td>'.$mensaje.'</td>';
    $mensajeHtml .='        </tr>';
    $mensajeHtml .='    </table>';
    $mensajeHtml .='    </body>';
    $mensajeHtml .='</html>';


    $headers  = "From: " . $nombre . ' <' . $email . '>' . "\r\n";
    $headers .= "Reply-To: ". $email . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    if ( mail( $para, $asunto, $mensajeHtml, $headers, null ) )
    {
        echo json_encode(array('Success' =>  true, 'data'  => $datos));
    }
    else
    {
        echo json_encode(array('Success' =>  false, 'mensaje'=>' El mensaje no se ha podido enviar, intentalo más tarde.'));
    }
?>