<?php

$totalOrder = json_decode($_POST["totalOrder"]);
$orderSin = $totalOrder[0];
$orderSet = $totalOrder[1];
$orderOth = $totalOrder[2];
$memId = (int)$totalOrder[3];
$orderAdr = $totalOrder[4];
$orderLorderListTextPost = $totalOrder[5];
$orderCla = (int)$totalOrder[6];
$OrTotalPrice = (int)$totalOrder[7];
$orderTime = $totalOrder[8];
$orderStatus = (int)0;
$mealTime = $totalOrder[8];
echo json_encode((int)$OrTotalPrice);

try{
    require_once("connect.php");
    $sqlorder = "INSERT INTO `ORDER` (`orderer`, `orderTotalPrice`, `orderTime`, `orderClass`, `deliveryAddr`, `mealTime`,`orderStatus`,`orderRemark`) VALUES ('$memId','$OrTotalPrice','$orderTime','$orderCla','$orderAdr','$mealTime','$orderStatus','$orderLorderListTextPost');";
    $order=$pdo->prepare($sqlorder);
    $order->execute();

    $lastId = $pdo->lastInsertId();

    for($i=0;$i<count($orderSin); $i++){
foreach($orderSin[$i] as $key => $value){
    if($key == "soPrice"){
        $soPrice = $value;
    }
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
    }
}
    $Sinorder = "INSERT INTO `single_order` (`soPrice`,`soAmount`,`soBelongOrd`,`soRice`,`mainFood`,`sideDishes1`,`sideDishes2`,`sideDishes3`,`soImg`)  VALUES ('$soPrice','1','$lastId','$riceId','$meatId','$singleId1','$singleId2','$singleId3','https://fakeimg.pl/100/')";
    $order1=$pdo->prepare($Sinorder);
    $order1->execute();

}
    // echo  json_encode($lastId);
}catch(PDOException $e){
    echo $e->getMessage();
  }

?>