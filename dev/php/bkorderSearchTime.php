<?php 

    try {
        require_once("connect.php");
        $sql = "select finishTime, orderTotalPrice from `ORDER` where finishTime >= :bTime AND finishTime <= :aTime order by finishTime";
        $orderSql = $pdo->prepare($sql);
        $orderSql->bindValue(":bTime",$_GET["bTime"] );
        $orderSql->bindValue(":aTime",$_GET["aTime"] );
        $orderSql->execute();
    
        $order = $orderSql->fetchAll(PDO::FETCH_ASSOC);
    
        echo json_encode($order);
    } catch (PDOException $e) {
        echo $e->getMessage();
    }
?>