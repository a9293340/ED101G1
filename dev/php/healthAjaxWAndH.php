<?php 

    session_start();
    require_once("connect.php");
    $sql2 = "update `member` set memWeight=:memWeight,memHeight=:memHeight where memId=:memId";
    $fixImage = $pdo->prepare($sql2);
    $fixImage->bindValue(":memId",$_SESSION["memId"] );
    $fixImage->bindValue(":memWeight",$_GET["memWeight"] );
    $fixImage->bindValue(":memHeight",$_GET["memHeight"] );
    $fixImage->execute();
?>