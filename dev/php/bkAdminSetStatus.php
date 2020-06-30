<?php 
    try {
        require_once("connect.php");
        $sql = "update `ADMIN` set admAuthority = :admAuthority where admId=:admId;";
        $orderSql = $pdo->prepare($sql);
        $orderSql->bindValue(":admId",$_GET["admId"] );
        $orderSql->bindValue(":admAuthority",$_GET["admAuthority"] );
        $orderSql->execute();
        echo '1';
    } catch (PDOException $e) {
        echo $e->getMessage();
    }
?>