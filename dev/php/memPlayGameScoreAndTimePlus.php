<?php 

    session_start();
    require_once("connect.php");
    $sql2 = "update `member` set memPlayTime=:memPlayTime,memScore=:memScore where memId=:memId";
    $fixImage = $pdo->prepare($sql2);
    $fixImage->bindValue(":memId",$_SESSION["memId"] );
    $fixImage->bindValue(":memPlayTime",$_GET["memPlayTime"] );
    $fixImage->bindValue(":memScore",$_GET["memScore"] );
    $fixImage->execute();
?>