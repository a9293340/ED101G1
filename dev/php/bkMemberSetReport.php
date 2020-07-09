<?php 

    try {
        require_once("connect.php");
        $sql = "update `MEMBER` set memReportCount = 1 where memId=:memId";
        $orderSql = $pdo->prepare($sql);
        $orderSql->bindValue(":memId",$_GET["memId"] );
        $orderSql->execute();
        echo '1';
    } catch (PDOException $e) {
        echo $e->getMessage();
    }
?>