<?php 
    try {
        require_once("connect.php");
        $sql = "update `ORDER` set orderStatus = :orderStatus where orderId=:orderId";
        $orderSql = $pdo->prepare($sql);
        $orderSql->bindValue(":orderId",$_GET["orderId"] );
        $orderSql->bindValue(":orderStatus",$_GET["orderStatus"] );
        $orderSql->execute();
        echo '1';
    } catch (PDOException $e) {
        echo $e->getMessage();
    }
?>