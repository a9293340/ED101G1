<?php 

    try {
        $nameBox = [];
        require_once("connect.php");
        $sql = "select spName,spClass from SINGLE_PRODUCT";
        $orderSql = $pdo->prepare($sql);
        $orderSql->execute();
    
        $order = $orderSql->fetchAll(PDO::FETCH_ASSOC);

        $sql = "SELECT sp1.spName as 'soRice', sp2.spName as 'mainfood', sp3.spName as 'sideDishes1', sp4.spName as 'sideDishes2', sp5.spName as 'sideDishes3',so.soPrice,so.soImg,so.soAmount,so.soBelongOrder,so.soRice as 'soRiceId',so.mainFood as 'mainfoodId',so.sideDishes1 as 'sideDishes1Id',so.sideDishes2 as 'sideDishes2Id',so.sideDishes3 as 'sideDishes3Id' FROM `SINGLE_ORDER` AS so JOIN `ORDER` AS o ON so.soBelongOrder = o.orderId JOIN `SINGLE_PRODUCT` AS sp1 ON so.soRice = sp1.spId JOIN `SINGLE_PRODUCT` AS sp2 ON so.mainFood = sp2.spId JOIN `SINGLE_PRODUCT` AS sp3 ON so.sideDishes1 = sp3.spId JOIN `SINGLE_PRODUCT` AS sp4 ON so.sideDishes2 = sp4.spId JOIN `SINGLE_PRODUCT` AS sp5 ON so.sideDishes3 = sp5.spId WHERE o.finishTime >= :bTime AND o.finishTime <= :aTime ORDER BY o.finishTime";
        $orderSql1 = $pdo->prepare($sql);
        $orderSql1->bindValue(":bTime",$_GET["bTime"] );
        $orderSql1->bindValue(":aTime",$_GET["aTime"] );
        $orderSql1->execute();
        $order1 = $orderSql1->fetchAll(PDO::FETCH_ASSOC);

        $total = [$order,$order1];
        echo json_encode($total);
    } catch (PDOException $e) {
        echo $e->getMessage();
    }
?>