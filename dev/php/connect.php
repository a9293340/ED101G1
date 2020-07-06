<?php
	$dsn = "mysql:host=localhost;port=8888;dbname=ED101G1;charset=utf8";
	$user = "root";
<<<<<<< HEAD
<<<<<<< HEAD
	$password = "qazwsx123";
=======
	$password = "may1234567";
>>>>>>> 187ffa65b8a2dda89bb77063b3b39261f1abef87
=======
	$password = "root";
>>>>>>> tina
	$options = array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION);
	$pdo = new PDO( $dsn, $user, $password, $options); 
?>