<?php
try{

session_start();
require_once("connect.php");
$sql = "INSERT INTO `report` (reportReason, reportMessId)
        VALUES (:reportReason,:messId);";

$bentonWallSQL = $pdo->prepare($sql);
$bentonWallSQL->bindValue(":reportReason", $_POST["reportReason"]);
$bentonWallSQL->bindValue(":messId", $_POST["messId"]);
$bentonWallSQL->execute();

echo json_encode($bentonWallSQL);
// echo "alert('謝謝你提出檢舉，我們日後將會進行審查檢舉的內容。')";

}catch(PDOException $e){ 
    echo $e->getMessage();
}
?>