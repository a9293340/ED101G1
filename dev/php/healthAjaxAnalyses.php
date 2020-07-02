<?php 
    try{
        $total = json_decode($_POST["total"]);
        $healHealth = $total->healHealth;
        $healthColdHot = $total->healthColdHot;
        $healStomach = $total->healStomach;
        $healthClass = $total->healthClass;
        $healNewWeight = $total->healNewWeight;
        $healNewheight = $total->healNewheight;
        $healLastTime = $total->healLastTime;
        session_start();
        require_once("connect.php");
        $sql = "INSERT INTO `HEALTH_ANALYSES` (healClass,healColdHot,healHealth,healStomach,healMember,healLastTime,healNewWeight,healNewheight) VALUES (:healClass,:healColdHot,:healHealth,:healStomach,:healMember,:healLastTime,:healNewWeight,:healNewheight);";
        $member = $pdo->prepare($sql); 
        $member->bindValue(":healClass", $healthClass);
        $member->bindValue(":healColdHot", $healthColdHot);
        $member->bindValue(":healHealth", $healHealth);
        $member->bindValue(":healStomach", $healStomach);
        $member->bindValue(":healLastTime", $healLastTime);
        $member->bindValue(":healNewWeight", $healNewWeight);
        $member->bindValue(":healNewheight", $healNewheight);
        $member->bindValue(":healMember", $_SESSION["memId"]);
        $member->execute();
    
        echo 'good';
    }catch(PDOException $e){
        echo $e->getMessage();
    }
?>