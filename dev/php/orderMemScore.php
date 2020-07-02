<?php
    $MemmId = $_POST["MemmId"];
    require_once("connect.php");
    $memSql = "select `memScore` from `member` where `memId` = $MemmId";
    $memberScore = $pdo->prepare($memSql);
    $memberScore->execute();
    
    
    $Score = $memberScore->fetch(PDO::FETCH_ASSOC);
    echo json_encode($Score);

?>