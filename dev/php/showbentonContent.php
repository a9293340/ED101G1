<?php
try{

session_start();
require_once("connect.php");

$sql ="SELECT POST.postId,POST.postSoId,POST.postTitle as title,POST.postContent as content,POST.postDate as postDateTime,
       SINGLE_ORDER.soImg as bentonImg ,`MEMBER`.memName,`MEMBER`.memImage
       from POST 
       join SINGLE_ORDER
       on POST.postSoId = SINGLE_ORDER.soId
       left join `MEMBER` on POST.postBelong = `MEMBER`.memId
       where postId = :postId;";
$bentonContentSQL = $pdo->prepare($sql); 
$bentonContentSQL->bindValue(":postId", $_POST["postId"]);
$bentonContentSQL->execute();
$bentonContent = $bentonContentSQL->fetchAll(PDO::FETCH_ASSOC);


echo json_encode($bentonContent);


}catch(PDOException $e){
    echo $e->getMessage();
}
?>