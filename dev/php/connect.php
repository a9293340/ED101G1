<?php
	$dsn = "mysql:host=localhost;port=3306;dbname=ED101G1;charset=utf8";
	$user = "root";
<<<<<<< HEAD
	$password = "0422";
=======
	$password = "root";
>>>>>>> 7e03eabd3ac0cc3946552af4d350d3777f162302
>>>>>>> e171de22f12ca08783ee08200ae5daad89460f45
	$options = array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION);
	$pdo = new PDO( $dsn, $user, $password, $options); 
?>