<?php 

    if(isset($_FILES["setImage"])){
        try {
            // 新增一筆資料放到資料庫
            require_once("connect.php");
            if($_FILES["setImage"]["error"] != 4){
                $sql1 = "update `SET_PRODUCT` set setName=:setName, setPrice=:setPrice, setCalories=:setCalories, setColdHot=:setColdHot, setHealth=:setHealth, setClass=:setClass, setInfo=:setInfo, setImage='',setStatus=:setStatus where setId=:setId";
                $products = $pdo->prepare($sql1);
                $products->bindValue(":setName", $_POST["setName"]);
                $products->bindValue(":setPrice", $_POST["setPrice"]);
                $products->bindValue(":setCalories", $_POST["setCalories"]);
                $products->bindValue(":setColdHot", $_POST["setColdHot"]);
                $products->bindValue(":setHealth", $_POST["setHealth"]);
                $products->bindValue(":setClass", $_POST["setClass"]);
                $products->bindValue(":setInfo", $_POST["setInfo"]);
                $products->bindValue(":setStatus", $_POST["setStatus"]);
                $products->bindValue(":setId", $_POST["setId"]);
                $products->execute();
            }else{
                $sql1 = "update `SET_PRODUCT` set setName=:setName, setPrice=:setPrice, setCalories=:setCalories, setColdHot=:setColdHot, setHealth=:setHealth, setClass=:setClass, setInfo=:setInfo,setStatus=:setStatus where setId=:setId";
                $products = $pdo->prepare($sql1);
                $products->bindValue(":setName", $_POST["setName"]);
                $products->bindValue(":setPrice", $_POST["setPrice"]);
                $products->bindValue(":setCalories", $_POST["setCalories"]);
                $products->bindValue(":setColdHot", $_POST["setColdHot"]);
                $products->bindValue(":setHealth", $_POST["setHealth"]);
                $products->bindValue(":setClass", $_POST["setClass"]);
                $products->bindValue(":setInfo", $_POST["setInfo"]);
                $products->bindValue(":setStatus", $_POST["setStatus"]);
                $products->bindValue(":setId", $_POST["setId"]);
                $products->execute();
            }

            // 找到最後一個psn數字當檔案名稱
            // $fileFirstName = $pdo->lastInsertId();

            // 做判斷是否上傳成功
            switch($_FILES["setImage"]["error"]){
                case 0:
                    // 成功了就把圖片改名字並放到對的位置
                    $dir = "../images/bandon_include";
                    if(file_exists($dir) === false){
                        mkdir($dir);
                    }
                    $from = $_FILES["setImage"]["tmp_name"]; //暫存區的路徑
                    $to = "$dir/{$_FILES["setImage"]["name"]}";
                    $imgSOL = "./images/bandon_include/".$_FILES["setImage"]["name"];
            
                    if(copy($from, $to)){
                        // 成功上傳後再去資料庫把image的資料修正為對的資料
                        $sql2 = "update `SET_PRODUCT` set setImage=:setImage where setId=:setId";
                        $fixImage = $pdo->prepare($sql2);
                        $fixImage->bindValue(":setId",$_POST["setId"] );
                        $fixImage->bindValue(":setImage",$imgSOL );
                        $fixImage->execute();
                        echo "<script>alert('修改成功');location.href='../backEndIndex.html'</script>";
                    

                    }else{
                        echo "system error~<br>";
                    }	
                    break;
                case 1:
                    echo "上傳失敗, 上傳的檔案太大, 不得超過" , ini_get("upload_max_filesize"), "<br>";
                    break;
                case 2:
                    echo "上傳失敗, 上傳的檔案太大, 不得超過", $_POST["MAX_FILE_SIZE"], "<br>";
                    break;
                case 3:
                    echo "上傳失敗, 上傳的檔案不完整<br>";
                    break;
                case 4:
                    echo "<script>alert('修改成功');location.href='../backEndIndex.html'</script>";
                    break;
                default:
                    echo "system upload error : ", $_FILES["setImage"]["error"], "<br>";
                break;
            }


            
        } catch (PDOException $e) {
            // echo "系統暫時無法提供服務, 請通知系統維護人員<br>";
            echo "錯誤行號 : ", $e->getLine(), "<br>";
            echo "錯誤原因 : ", $e->getMessage(), "<br>";	
        }
}
?>