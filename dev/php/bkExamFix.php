<?php 
    try {
        // 新增一筆資料放到資料庫
        require_once("connect.php");
        $sql1 = "update `EXAM` set examTitle=:examTitle, option1=:option1,option2=:option2,option3=:option3, examClass=:examClass,optionNum1=:optionNum1,optionNum2=:optionNum2,optionNum3=:optionNum3 where examId=:examId";
        $products = $pdo->prepare($sql1);
        $products->bindValue(":examTitle", $_POST["examTitle"]);
        $products->bindValue(":option1", $_POST["option1"]);
        $products->bindValue(":option2", $_POST["option2"]);
        $products->bindValue(":option3", $_POST["option3"]);
        $products->bindValue(":examClass", $_POST["examClass"]);
        $products->bindValue(":optionNum1", $_POST["optionNum1"]);
        $products->bindValue(":optionNum2", $_POST["optionNum2"]);
        $products->bindValue(":optionNum3", $_POST["optionNum3"]);
        $products->bindValue(":examId", $_POST["examId"]);
        $products->execute();
        echo "<script>alert('修改成功');location.href='../backEndIndex.html'</script>";
    } catch (PDOException $e) {
        // echo "系統暫時無法提供服務, 請通知系統維護人員<br>";
        echo "錯誤行號 : ", $e->getLine(), "<br>";
        echo "錯誤原因 : ", $e->getMessage(), "<br>";	
    }
?>