<?php 

    try {
        require_once("connect.php");
        $sql = "select od.deliveryAddr,od.orderClass,od.orderId,od.orderRemark,od.orderStatus,od.orderTotalPrice,me.memName as `memName` from `ORDER` as od join `MEMBER` as me on od.orderer = me.memId;";
        $orderSql = $pdo->prepare($sql);
        $orderSql->execute();
    
        $order = $orderSql->fetchAll(PDO::FETCH_ASSOC);
    
        echo json_encode($order);
    } catch (PDOException $e) {
        echo $e->getMessage();
    }
?>