<?php
<<<<<<< HEAD
    $dsn = "mysql:host=localhost;port=3306;dbname=ED101G1;charset=utf8";
	$user = "root";
	$password = "ed101g1";
=======

	$dsn = "mysql:host=localhost;port=3306;dbname=ED101G1;charset=utf8";
	$user = "root";
	$password = "may1234567";
>>>>>>> a2b4863db796a727229b811ed372f48ea2631794
	$options = array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION);
	$pdo = new PDO( $dsn, $user, $password, $options); 
