<?php 
    try{
        require_once("connect.php");
        $sql = "INSERT INTO `ADMIN` (admAccount,admPsw,admAuthority) VALUES (:admAccount,:admPsw,:admAuthority);";
        $member = $pdo->prepare($sql); 
        $member->bindValue(":admAccount", $_POST["admAccount"]);
        $member->bindValue(":admPsw", $_POST["admPsw"]);
        $member->bindValue(":admAuthority", $_POST["admAuthority"]);
        $member->execute();
    
        echo "<script>alert('新增成功');location.href='../backEndIndex.html';</script>";
    }catch(PDOException $e){
      echo $e->getMessage();
    }
?>