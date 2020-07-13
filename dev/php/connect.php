<?php
	$dsn = "mysql:host=localhost;port=3306;dbname=ED101G1;charset=utf8";
	$user = "root";
	$password = "orange8477";
	$options = array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION);
	$pdo = new PDO( $dsn, $user, $password, $options); 
?>