    <?php

    try{
    session_start();
    require_once("connect.php");

    if(isset($_SESSION['memId'])){
      $sql= "SELECT SINGLE_ORDER.soImg as img, SINGLE_ORDER.soId as id, `ORDER`.orderer 
      from SINGLE_ORDER join `ORDER` on `ORDER`.orderId = SINGLE_ORDER.soBelongOrder 
      where orderer = :orderer;";
      $getBentonImgSQL = $pdo->prepare($sql);
      $getBentonImgSQL->bindValue(":orderer", $_SESSION["memId"]);
      $getBentonImgSQL->execute();
      $getBentonImg =  $getBentonImgSQL->fetchAll(PDO::FETCH_ASSOC);
    }
 else{
   $getBentonImg = [];
 }


    echo json_encode($getBentonImg);

    }catch(PDOException $e){ 
       echo $e->getmessage();
    }
    ?>