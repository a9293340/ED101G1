<?php

$totalOrder = json_decode($_POST["totalOrder"]);
$orderSin = $totalOrder[0];
$orderSet = $totalOrder[1];
$orderOth = $totalOrder[2];
for( $i=0; $i<3; $i++){ 
echo ($totalOrder[$i]);
}

require_once("connect.php");
$sqlSin = "SELECT * FROM `single_product`";

?>