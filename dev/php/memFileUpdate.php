<?php 

    session_start();
    require_once("connect.php");
    $sql2 = "UPDATE `member` set memName=:memName,memHeight=:memHeight,memWeight=:memWeight,memPhone=:memPhone,memAddr=:memAddr where memId=:memId";
    $fixImage = $pdo->prepare($sql2);
    $fixImage->bindValue(":memId",$_SESSION["memId"] );
    $fixImage->bindValue(":memName",$_POST["memName"] );
    $fixImage->bindValue(":memHeight",$_POST["memHeight"] );
    $fixImage->bindValue(":memWeight",$_POST["memWeight"] );
    $fixImage->bindValue(":memPhone",$_POST["memPhone"] );
    $fixImage->bindValue(":memAddr",$_POST["memAddr"] );
    $fixImage->execute();
    echo "<script>alert('更新成功');location.href='../member.html';</script>";
?>