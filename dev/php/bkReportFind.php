<?php 

    try {
        require_once("connect.php");
        $sql = "select re.reportId ,re.reportReason,me.messContent,mem.memName,mem.memId,mem.memReportCount from `REPORT` as `re` join `MESSAGE` as `me` on re.reportMessId = me.messId join `MEMBER` as `mem` on me.messBelong = mem.memId;";
        $orderSql = $pdo->prepare($sql);
        $orderSql->execute();
    
        $order = $orderSql->fetchAll(PDO::FETCH_ASSOC);
    
        echo json_encode($order);
    } catch (PDOException $e) {
        echo $e->getMessage();
    }
?>