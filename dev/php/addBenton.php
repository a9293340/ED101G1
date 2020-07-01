<?php
try{

session_start();
require_once("connect.php");
$sql ="INSERT INTO `ed101g1`.`post` (`postSoId`, `postTitle`, `postContent`, `postDate`, `postBelong`, `postLike`) 
        VALUES (:addBentonId,:titleText,:contentText, now(), :memId, '0');";

$bentonWallSQL = $pdo->prepare($sql);
$bentonWallSQL->bindValue(":memId", $_SESSION["memId"]);
$bentonWallSQL->bindValue(":titleText", $_POST["titleText"]);
$bentonWallSQL->bindValue(":contentText", $_POST["contentText"]);
$bentonWallSQL->bindValue(":addBentonId", $_POST["addBentonId"]);

$bentonWallSQL->execute();

echo "alert('新增成功!');location.reload();";

}catch(PDOException $e){ 
    echo $e->getMessage();
}
?>