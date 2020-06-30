<?php 
    session_start();
    try{
        require_once("connect.php");
        $sql = "select * from `ADMIN` where admAccount=:admAccount and admPsw=:admPsw";
        $member = $pdo->prepare($sql); 
        $member->bindValue(":admAccount", $_REQUEST["admAccount"]);
        $member->bindValue(":admPsw", $_REQUEST["admPsw"]);
        $member->execute();

    
        if( $member->rowCount()==0){ //查無此人
            echo "sad";
        }else{ //登入成功
            $memRow = $member->fetch(PDO::FETCH_ASSOC);

            echo json_encode($memRow);
        }
    }catch(PDOException $e){
        echo $e->getMessage();
    }
?>