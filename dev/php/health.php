<?php
    try{
        $box = [];

        session_start();
        require_once("connect.php");
        if(isset($_SESSION["memId"])){
            $sql = "SELECT * FROM `MEMBER` WHERE memId = :memId;";
            $orderSql = $pdo->prepare($sql); 
            $orderSql->bindValue(":memId", $_SESSION["memId"]);
            $orderSql->execute();
            $member = $orderSql->fetchAll(PDO::FETCH_ASSOC);
        }
        // echo json_encode($order);

        $sql = "SELECT * FROM `EXAM`";
        $orderSql = $pdo->prepare($sql);
        $orderSql->execute();
        $exam = $orderSql->fetchAll(PDO::FETCH_ASSOC);

        $sql = "SELECT * FROM `SINGLE_PRODUCT`";
        $orderSql = $pdo->prepare($sql);
        $orderSql->execute();
        $single = $orderSql->fetchAll(PDO::FETCH_ASSOC);


        if(isset($_SESSION["memId"])){
            $box = [$member,$exam,$single];
        }else{
            $box = [$exam,$single];
        }

        echo json_encode($box);
        
    }catch(PDOException $e){
        echo $e->getMessage();
    }
?>
