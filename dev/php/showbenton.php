<?php
try{

$bentonWall=[];
$member = [];
$total = [];

session_start();
require_once("connect.php");
$sql ="SELECT POST.postId,POST.postSoId,POST.postTitle as title,POST.postLike as liketimes,SINGLE_ORDER.soImg as bentonImg 
        from POST join SINGLE_ORDER 
        on POST.postSoId = SINGLE_ORDER.soId;";
$bentonWallSQL = $pdo->prepare($sql); 
$bentonWallSQL->execute();
$bentonWall = $bentonWallSQL->fetchAll(PDO::FETCH_ASSOC);


if (isset($_SESSION['memId']) ) {
        $sql ="SELECT memLastVoteTime
        from MEMBER
        WHERE memId = :memId;";
        $memberSQL = $pdo->prepare($sql); 
        $memberSQL->bindValue(":memId", $_SESSION["memId"]);
        $memberSQL->execute();
        $member = $memberSQL->fetchAll(PDO::FETCH_ASSOC);
}
else 
{
      $member = [];  
}

$total = [$bentonWall, $member];

echo json_encode($total);


}catch(PDOException $e){
    echo $e->getMessage();
}
?>