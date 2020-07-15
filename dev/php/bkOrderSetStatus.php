<?php 
    try {
        require_once("connect.php");
        if($_GET['orderStatus'] == 2){
            $sql = "update `ORDER` set orderStatus = :orderStatus, mealTime=:mealTime  where orderId=:orderId";
            $orderSql = $pdo->prepare($sql);
            $orderSql->bindValue(":orderId",$_GET["orderId"] );
            $orderSql->bindValue(":orderStatus",$_GET["orderStatus"] );
            $orderSql->bindValue(":mealTime",$_GET["time"] );
        }else if($_GET['orderStatus'] == 3){
            $sql = "update `ORDER` set orderStatus = :orderStatus, arrivalTime=:arrivalTime  where orderId=:orderId";
            $orderSql = $pdo->prepare($sql);
            $orderSql->bindValue(":orderId",$_GET["orderId"] );
            $orderSql->bindValue(":orderStatus",$_GET["orderStatus"] );
            $orderSql->bindValue(":arrivalTime",$_GET["time"] );
        }else if($_GET['orderStatus'] == 4){
            $sql = "update `ORDER` set orderStatus = :orderStatus, finishTime=:finishTime  where orderId=:orderId";
            $orderSql = $pdo->prepare($sql);
            $orderSql->bindValue(":orderId",$_GET["orderId"] );
            $orderSql->bindValue(":orderStatus",$_GET["orderStatus"] );
            $orderSql->bindValue(":finishTime",$_GET["time"] );
        }else{
            $sql = "update `ORDER` set orderStatus = :orderStatus  where orderId=:orderId";
            $orderSql = $pdo->prepare($sql);
            $orderSql->bindValue(":orderId",$_GET["orderId"] );
            $orderSql->bindValue(":orderStatus",$_GET["orderStatus"] );
        }
        $orderSql->execute();
        echo '1';
    } catch (PDOException $e) {
        echo $e->getMessage();
    }
?>