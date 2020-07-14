<?php
	$dsn = "mysql:host=localhost;port=8889;dbname=ED101G1;charset=utf8";
	$user = "root";
<<<<<<< HEAD
	$password = "root";
=======
	$password = "0422";
>>>>>>> show
	$options = array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION);
	$pdo = new PDO( $dsn, $user, $password, $options); 
?>