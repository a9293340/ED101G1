<?php
	$dsn = "mysql:host=localhost;port=3306;dbname=ED101G1;charset=utf8";
	$user = "root";
<<<<<<< HEAD
	$password = "0422";
=======
	$password = "may1234567";
>>>>>>> ba09213c951fefe0a7003871f411fe9c23f1807a
	$options = array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION);
	$pdo = new PDO( $dsn, $user, $password, $options); 
?>