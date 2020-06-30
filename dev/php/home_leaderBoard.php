<?php

    $leaderBoards=[];
    require_once("connect.php");
    $sqlsbenton = "SELECT s.soImg as img,m.memName as memname ,p.postDate as postdate,p.postId as bentonname,p.postTitle as title,p.postContent as content,p.postLike as `like` from `post` as p,`member` as m,`single_order` as s where p.postSoId = m.memId and s.soId = p.postId;";
    $sbentonSql = $pdo->prepare($sqlsbenton);
    $sbentonSql -> execute();
    $sbenton = $sbentonSql->fetchAll(PDO::FETCH_ASSOC);

    // $leaderBoards=[$sbenton];
    echo json_encode($sbenton);
?>