<?php

    $leaderBoards=[];
    require_once("connect.php");
    $sqlsbenton = "SELECT s.soImg as img,m.memName as memname,m.memImage as mimg,p.postDate as postdate,p.postId as bentonname,p.postTitle as title,p.postContent as content,p.postLike as `like` from `post` as p,`message` as mg,`member` as m,`single_order` as s where p.postBelong = m.memId and s.soId = p.postSoId and mg.messBelong = m.memId order by postLike desc limit 3";
    $sbentonSql = $pdo->prepare($sqlsbenton);
    $sbentonSql -> execute();
    $ssbenton = $sbentonSql->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($ssbenton);
    // $leaderBoards=[$sbenton];



?>