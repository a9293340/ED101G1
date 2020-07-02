<?php

$lbMessage=[];
require_once("connect.php");
$sqlMessage= "SELECT mg.messContent as content,mg.messTime as mtime, m.memImage as img, m.memName as mname from `member` as m, `message` as mg  where mg.messBelong = m.memId and mg.messPostId = :mgPostId;";
$messageSql = $pdo->prepare($sqlMessage);
$messageSql -> bindValue(":mgPostId", $_POST["messPostId"]);
$messageSql -> execute();
$smessage = $messageSql->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($smessage);

?>