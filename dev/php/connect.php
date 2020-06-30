<?php
	$dsn = "mysql:host=localhost;port=8889;dbname=ED101G1;charset=utf8";
	$user = "root";
<<<<<<< HEAD
	$password = "may1234567";
=======
	$password = "root";
>>>>>>> cbc08766efca051770f41088d2fa323f7f58032f
	$options = array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION);
	$pdo = new PDO( $dsn, $user, $password, $options); 
?>