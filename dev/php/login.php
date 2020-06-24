<?php 
    session_start();
    try{
        require_once("connect.php");
        $sql = "select * from `MEMBER` where memEmail=:memEmail and memPsw=:memPsw";
        $member = $pdo->prepare($sql); 
        $member->bindValue(":memEmail", $_REQUEST["memEmail"]);
        $member->bindValue(":memPsw", $_REQUEST["memPsw"]);
        $member->execute();
    
        if( $member->rowCount()==0){ //查無此人
            echo "{}";
        }else{ //登入成功
        //自資料庫中取回資料
            $memRow = $member->fetch(PDO::FETCH_ASSOC);

            //將登入者的資訊寫入SESSION
            $_SESSION["memId"] = $memRow["memId"];

        //送出登入者的姓名資料
        // echo $memRow["memName"];

            $memberInfo = array("memId"=>$memRow["memId"],"memEmail"=>$memRow["memEmail"], "memName"=>$memRow["memName"]);


            echo json_encode($memberInfo);
        }
    }catch(PDOException $e){
        echo $e->getMessage();
    }
?>