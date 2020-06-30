<?php

$totalOrder = json_decode($_POST["totalOrder"]);
$orderSin = $totalOrder[0];
$orderSet = $totalOrder[1];
$orderOth = $totalOrder[2];
$memId = $totalOrder[3];
$orderAdr = $totalOrder[4];
$orderLorderListTextPost = $totalOrder[5];



// for( $i=0; $i<6; $i++){ 

// echo($orderSin[0]['riceId']);

// echo ($orderSin);
// foreach($orderSin[0] as $obj ){
//     echo $obj-> riceId;
//     }
// }
var_dump($orderSin);
// require_once("connect.php");
// $sqlSin = "SELECT * FROM `single_product`";

?>