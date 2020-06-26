<?php 
    $totalProduct=[];
    require_once("connect.php");
    $sqlsingle = "SELECT * FROM `single_product`";
    $singleSql = $pdo->prepare($sqlsingle); 
    $singleSql->execute();
    $single = $singleSql->fetchAll(PDO::FETCH_ASSOC);

    $sqlsetdo = "SELECT * FROM `set_product`";
    $setdoSql = $pdo->prepare($sqlsetdo); 
    $setdoSql->execute();
    $setdo = $setdoSql->fetchAll(PDO::FETCH_ASSOC);

    $sqlother = "SELECT * FROM `other_product`";
    $otherSql = $pdo->prepare($sqlother); 
    $otherSql->execute();
    $other = $otherSql->fetchAll(PDO::FETCH_ASSOC);



    $totalProduct=[$single,$setdo,$other];

    echo json_encode($totalProduct);

?>