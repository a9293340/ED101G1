<?php
try{

session_start();
require_once("connect.php");

$sql ="SELECT soid, A.spName as rice,SINGLE_ORDER.soRice as riceId , B.spName as meat,SINGLE_ORDER.mainFood as meatId ,C.spName as single1,SINGLE_ORDER.sideDishes1 as singleId1 ,
D.spName as single2,SINGLE_ORDER.sideDishes2 as singleId2, E.spName as single3,SINGLE_ORDER.sideDishes3 as singleId3 , soPrice,soImg
from SINGLE_ORDER 
join SINGLE_PRODUCT as A
on SINGLE_ORDER.soRice = A.spId
join SINGLE_PRODUCT as B
on SINGLE_ORDER.mainFood = B.spId
join SINGLE_PRODUCT as C
on SINGLE_ORDER.sideDishes1 = C.spId
join SINGLE_PRODUCT as D
on SINGLE_ORDER.sideDishes2 = D.spId
join SINGLE_PRODUCT as E
on SINGLE_ORDER.sideDishes3 = E.spId
    where soid =:soId;";
$bentonBuyMoreSQL = $pdo->prepare($sql); 
$bentonBuyMoreSQL->bindValue(":soId", $_GET["soId"]);
$bentonBuyMoreSQL->execute();
$bentonBuyMore = $bentonBuyMoreSQL->fetchAll(PDO::FETCH_ASSOC);


echo json_encode($bentonBuyMore);


}catch(PDOException $e){
    echo $e->getMessage();
}
?>