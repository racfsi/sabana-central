<?php

/*
VARIABLES
$nombre=$_POST['nombre'];
$correo=$_POST['correo'];
$mensaje=$_POST['mensaje'];

*/
// Check for empty fields
if(empty($_POST['nombre'])  		||
   empty($_POST['apellido']) 		||
   empty($_POST['correo']) 		||
   empty($_POST['telefono']) 		||
   empty($_POST['seleccion']) 		||
   empty($_POST['mensaje']) 		||
   !filter_var($_POST['correo'],FILTER_VALIDATE_EMAIL))
   {
	echo 0;
   }
$name = strip_tags(htmlspecialchars($_POST['nombre']));
$last_name=strip_tags(htmlspecialchars($_POST['apellido']));
$email_address = strip_tags(htmlspecialchars($_POST['correo']));
$tel = strip_tags(htmlspecialchars($_POST['telefono']));
$select = strip_tags(htmlspecialchars($_POST['seleccion']));
$message = strip_tags(htmlspecialchars($_POST['mensaje']));
    
// Create the email and send the message
$to = 'gerencia@polarisconstructora.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Contacto pagina web:  $name";
$email_body = "Recibio un nuevo mensaje desde landing page Prodecol.\n\n"."Con los siguientes detalles:\n\nNombre: $name\n\nApellido: $last_name\n\nEmail: $email_address\n\nTelefono: $tel\n\nInteres: $select\n\nMensaje: $message";
$headers = "From: webmaster@beeagencia.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: webmaster@beeagencia.com";	
mail($to,$email_subject,$email_body,$headers);
echo 1;	
?>