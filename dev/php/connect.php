<?php
	$dsn = "mysql:host=localhost;port=3306;dbname=ED101G1;charset=utf8";
	$user = "root";
<<<<<<< HEAD
	$password = "qazwsx123";
=======
	$password = "may1234567";
>>>>>>> 187ffa65b8a2dda89bb77063b3b39261f1abef87
	$options = array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION);
	$pdo = new PDO( $dsn, $user, $password, $options); 
?>