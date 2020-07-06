<?php
	$dsn = "mysql:host=localhost;port=8888;dbname=ED101G1;charset=utf8";
	$user = "root";
	$password = "root";
<<<<<<< HEAD
=======
	$dsn = "mysql:host=localhost;port=8889;dbname=ED101G1;charset=utf8";
>>>>>>> dev
	$options = array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION);
	$pdo = new PDO( $dsn, $user, $password, $options); 
?>