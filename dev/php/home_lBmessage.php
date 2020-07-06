<?php
try{


$lbMessage=[];
require_once("connect.php");
$sqlMessage= "SELECT mg.messContent as content,mg.messTime as mtime, m.memImage as img, m.memName as mname,messPostId,messId from `member` as m, `message` as mg  where mg.messBelong = m.memId and mg.messPostId = :messPostId;";
$messageSql = $pdo->prepare($sqlMessage);
$messageSql -> bindValue(":messPostId", $_POST["messPostId"]);
$messageSql -> execute();
$smessage = $messageSql->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($smessage);
}
catch(PDOException $e){ 
    echo $e->getMessage();
}
?>