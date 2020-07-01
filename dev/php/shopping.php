<?php
$orderSin=[];
$orderSet=[];
$orderOth=[];
$totalOrder = json_decode($_POST["totalOrder"]);
(array)$orderSin = $totalOrder[0];
(array)$orderSet = $totalOrder[1];
(array)$orderOth = $totalOrder[2];
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
    if(is_array($orderSin)){
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
    $Sinorder = "INSERT INTO `single_order` (`soPrice`,`soAmount`,`soBelongOrder`,`soRice`,`mainFood`,`sideDishes1`,`sideDishes2`,`sideDishes3`,`soImg`)  VALUES ('$soPrice','1','$lastId','$riceId','$meatId','$singleId1','$singleId2','$singleId3','https://fakeimg.pl/100/')";
    $order1=$pdo->prepare($Sinorder);
    $order1->execute();

}
}

if(is_array($orderSet)){
for($j=0;$j<count($orderSet); $j++){
foreach($orderSet[$j] as $key => $value){
    if($key == "setdoId"){
        $setdoId = $value;
    }
    if($key == "setdoPrice"){
        $setdoPrice = $value;
    }
    if($key == "setdoMany"){
        $setdoMany = $value;
    }
 }
 $Setorder = "INSERT INTO `set_order` (`setoName`,`setoPrice`,`setoAmount`,`setoBelongOrder`) VALUES ('$setdoId','$setdoPrice','$setdoMany','$lastId')";
 $order2=$pdo->prepare($Setorder);
 $order2->execute();
}
}

if(is_array($orderOth)){
for($z=0;$z<count($orderOth); $z++){
    foreach($orderOth[$z] as $key => $value){
        if($key == "otherId"){
            $otherId = $value;
        }
        if($key == "otherPrice"){
            $otherPrice = $value;
        }
        if($key == "otherMany"){
            $otherMany = $value;
        }
    }

    $Otherorder = "INSERT INTO `other_order` (`ooName`,`ooPrice`,`ooAmount`,`ooBelongOrder`) VALUES ('$otherId','$otherPrice','$otherMany','$lastId')";
    $order3=$pdo->prepare($Otherorder);
    $order3->execute();

}
}
    // echo  json_encode($lastId);
}catch(PDOException $e){
    echo $e->getMessage();
  }

?>