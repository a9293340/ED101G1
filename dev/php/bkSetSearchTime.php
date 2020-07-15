<?php 

    try {
        $nameBox = [];
        require_once("connect.php");
        $sql = "select setName from SET_PRODUCT";
        $orderSql = $pdo->prepare($sql);
        $orderSql->execute();
    
        $order = $orderSql->fetchAll(PDO::FETCH_ASSOC);
        foreach ($order as $key => $value) {
            array_push($nameBox,$value['setName']);
        }

        $sql = 'SELECT sp.setName,s.setoName ,s.setoAmount FROM `SET_ORDER` AS s JOIN `ORDER` AS o ON s.setoBelongOrder = o.orderId JOIN `SET_PRODUCT` AS sp ON sp.setId = s.setoName WHERE o.finishTime >= :bTime AND o.finishTime <= :aTime order by o.finishTime';
        $orderSql1 = $pdo->prepare($sql);
        $orderSql1->bindValue(":bTime",$_GET["bTime"] );
        $orderSql1->bindValue(":aTime",$_GET["aTime"] );
        $orderSql1->execute();
        $order1 = $orderSql1->fetchAll(PDO::FETCH_ASSOC);

        $total = [$nameBox,$order1];
        echo json_encode($total);
    } catch (PDOException $e) {
        echo $e->getMessage();
    }
?>