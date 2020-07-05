<?php

   
    $sqlsetbenton = "SELECT setName,setPrice,setImage,setInfo from `set_product`;"
    $setbentonsql = $pdo->prepare($sqlsetbenton);
    $setbentonsql -> execute();
    $setbenton = $setbentonsql->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($setbenton);

    // $leaderBoards=[$sbenton];



?>