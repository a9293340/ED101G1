<?php
<<<<<<< HEAD
	$dsn = "mysql:host=localhost;port=8889;dbname=ED101G1;charset=utf8";
	$user = "root";
	$password = "root";
=======
	$dsn = "mysql:host=localhost;port=3306;dbname=ED101G1;charset=utf8";
	$user = "root";
	$password = "0422";
>>>>>>> show
	$options = array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION);
	$pdo = new PDO( $dsn, $user, $password, $options); 
?>