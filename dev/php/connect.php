<?php
	$dsn = "mysql:host=localhost;port=3306;dbname=ED101G1;charset=utf8";
	$user = "root";
<<<<<<< HEAD

	$password = "may1234567";


=======
	$password = "root";
	$dsn = "mysql:host=localhost;port=8889;dbname=ED101G1;charset=utf8";
>>>>>>> 7e03eabd3ac0cc3946552af4d350d3777f162302
	$options = array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION);
	$pdo = new PDO( $dsn, $user, $password, $options); 
?>