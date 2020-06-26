<?php 

    try {
        require_once("connect.php");
        $sql = "update `MEMBER` set memStatus = 0 where memId=:memId";
        $orderSql = $pdo->prepare($sql);
        $orderSql->bindValue(":memId",$_GET["memId"] );
        $orderSql->execute();
        echo '1';
    } catch (PDOException $e) {
        echo $e->getMessage();
    }
?>