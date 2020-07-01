<?php
try{

session_start();
require_once("connect.php");

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