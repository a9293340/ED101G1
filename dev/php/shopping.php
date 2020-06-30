<?php

$totalOrder = json_decode($_POST["totalOrder"]);
$orderSin = $totalOrder[0];
$orderSet = $totalOrder[1];
$orderOth = $totalOrder[2];
$memId = $totalOrder[3];
$orderAdr = $totalOrder[4];
$orderLorderListTextPost = $totalOrder[5];
$orderCla = $totalOrder[6];
$OrTotalPrice = $totalOrder[7];
$orderTime = $totalOrder[8];
// echo json_encode($OrTotalPrice);
// $singleId=[];

foreach($orderSin[0] as $key => $value){
    if( $key == "riceId"){
        $riceId = $value;
    }
    if($key == 'meatId'){
        $meatId =  $value;
    }
    if($key == 'singleId1'){
        $singleId1 = $value;
    }
    if($key == 'singleId2'){
        $singleId2 = $value;
    }
    if($key == 'singleId3'){
        $singleId3 = $value;
        // echo json_encode( $singleId3);
    }
}

    require_once("connect.php");
    $sqlorder = "INSERT INTO `order` (`orderId`, `orderer`, `orderTotalPrice`, `orderTime`, `orderClass`, `deliveryAddr`, `mealTime`, `finishTime`, `arrivalTime`, `orderStatus`,`orderRemark`) VALUES ('',:memId,:OrTotalPrice,:orderTime ,:orderCla,:orderAdr,'','','0',:orderLorderListTextPost);";
    $order=$pdo->prepare($sqlorder);
    $order->bindValue(":memId", $memId);
    $order->bindValue(":OrTotalPrice", $OrTotalPrice);
    $order->bindValue(":orderTime", $orderTime);
    $order->bindValue(":orderCla", $orderCla);
    $order->bindValue(":orderAdr", $orderAdr);
    $order->bindValue(":orderLorderListTextPost", $orderLorderListTextPost);
    $order->execute();

?>