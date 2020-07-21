<?php
<<<<<<< HEAD
    $dsn = "mysql:host=localhost;port=3306;dbname=ED101G1;charset=utf8";
	$user = "root";
	$password = "0422";

=======
<<<<<<< HEAD

	$dsn = "mysql:host=localhost;port=3306;dbname=ED101G1;charset=utf8";
	$user = "root";
	$password = "may1234567";

=======
	$dsn = "mysql:host=localhost;port=8889;dbname=ED101G1;charset=utf8";
	$user = "root";
	$password = "root";
>>>>>>> tina
>>>>>>> 2740cfb16eabeafc4eec8ac7114374f3ee3bef83
	$options = array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION);
	$pdo = new PDO( $dsn, $user, $password, $options); 
?>