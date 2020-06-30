<?php 

    try {
        require_once("connect.php");
        $sql = "select * from `OTHER_PRODUCT`";
        $orderSql = $pdo->prepare($sql);
        $orderSql->execute();
    
        $order = $orderSql->fetchAll(PDO::FETCH_ASSOC);
    
        echo json_encode($order);
    } catch (PDOException $e) {
        echo $e->getMessage();
    }
?>