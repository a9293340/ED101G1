<?php
try{

session_start();
require_once("connect.php");
$sql ="INSERT INTO `ed101g1`.`MESSAGE` (`messBelong`, `messContent` , `messStatus`, `messTime`, `messPostId`) 
       VALUES ( :memId, :talkmessage,'1', now(), :messPostId);";

$bentonWallSQL = $pdo->prepare($sql);
$bentonWallSQL->bindValue(":memId", $_SESSION["memId"]);
$bentonWallSQL->bindValue(":talkmessage", $_POST["talkmessage"]);
$bentonWallSQL->bindValue(":messPostId", $_POST["messPostId"]);
$bentonWallSQL->execute();



$sql ="SELECT memName,memImage,messContent as talkmessage,messTime as `dateTime`,messPostId
        from MESSAGE join MEMBER
        on MEMBER.memId = MESSAGE.messBelong
        where messPostId = :messPostId;";
$bentonContentSQL = $pdo->prepare($sql);
$bentonContentSQL ->bindValue(":messPostId", $_POST["messPostId"]);
$bentonContentSQL ->execute();
$bentonContent = $bentonContentSQL ->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($bentonContent);

}catch(PDOException $e){ 
    echo $e->getMessage();
}
?>