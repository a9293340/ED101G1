<?php
try{

session_start();
require_once("connect.php");
    $sql= "SELECT setName as benton,setPrice as price,setImage as img,setInfo from `set_product`;";
    $setbentonsql = $pdo->prepare($sql);
    $setbentonsql -> execute();
    $setbenton = $setbentonsql->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($setbenton);
}
catch(PDOException $e){ 
    echo $e->getMessage();
}
    // $leaderBoards=[$sbenton];



?>