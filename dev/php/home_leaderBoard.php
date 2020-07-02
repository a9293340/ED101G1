<?php

    $leaderBoards=[];
    require_once("connect.php");
    $sqlsbenton = "SELECT s.soImg as img,m.memName as memname,m.memImage ,p.postDate as postdate,p.postId as bentonname,p.postTitle as title,p.postContent as content,p.postLike as `like` from `post` as p,`member` as m,`single_order` as s where p.postBelong = m.memId and s.soId = p.postSoId order by postLike desc limit 3;";
    $sbentonSql = $pdo->prepare($sqlsbenton);
    $sbentonSql -> execute();
    $ssbenton = $sbentonSql->fetchAll(PDO::FETCH_ASSOC);

    // $leaderBoards=[$sbenton];
    echo json_encode($ssbenton);
?>