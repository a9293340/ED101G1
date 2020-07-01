<?php
try{

session_start();
require_once("connect.php");

if ($_POST["plus"] == "+") {
    $sql ="UPDATE POST
    SET postLike = postLike + 1
    WHERE postId = :postId;";
}
else 
{
    $sql ="UPDATE POST
    SET postLike = postLike - 1
    WHERE postId = :postId;";
} 

$liketimesSQL = $pdo->prepare($sql);
$liketimesSQL->bindValue(":postId", $_POST["postId"]);
$liketimesSQL->execute();

$now = date("Y-m-d H:i:s" , mktime(date('H')+8, date('i'), date('s'), date('m'), date('d'), date('Y'))) ;
if($_POST["plus"] =="+"){
    $sql="UPDATE MEMBER
    SET memLastVoteTime = :now
    WHERE memId = :memId;";

$liketimesSQL = $pdo->prepare($sql);
$liketimesSQL->bindValue(":memId", $_SESSION["memId"]);
$liketimesSQL->bindValue(":now", $now);
$liketimesSQL->execute();
}


$sql ="SELECT postLike, :now as memLastVoteTime
       FROM POST
       WHERE postId = :postId;";

$liketimesSQL = $pdo->prepare($sql);
$liketimesSQL->bindValue(":postId", $_POST["postId"]);
$liketimesSQL->bindValue(":now", $now);
$liketimesSQL->execute();

$liketimes =  $liketimesSQL->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($liketimes);

}catch(PDOException $e){ 
    echo $e->getMessage();
}
?>