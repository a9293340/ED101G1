<?php 

    if(isset($_FILES["spImage"])){
        try {
            // 新增一筆資料放到資料庫
            require_once("connect.php");
            $sql1 = "INSERT INTO `SINGLE_PRODUCT` (`spName`, `spPrice`, `spCalories`, `spColdHot`, `spHealth`, `spClass`, `spInfo`, `spImage`, `spMeat`, `spStatus`) VALUES (:spName,:spPrice,:spCalories,:spColdHot,:spHealth,:spClass,:spInfo,'',:spMeat,:spStatus);";
            $products = $pdo->prepare($sql1);
            $products->bindValue(":spName", $_POST["spName"]);
            $products->bindValue(":spPrice", $_POST["spPrice"]);
            $products->bindValue(":spCalories", $_POST["spCalories"]);
            $products->bindValue(":spColdHot", $_POST["spColdHot"]);
            $products->bindValue(":spHealth", $_POST["spHealth"]);
            $products->bindValue(":spClass", $_POST["spClass"]);
            $products->bindValue(":spInfo", $_POST["spInfo"]);
            $products->bindValue(":spMeat", $_POST["spMeat"]);
            $products->bindValue(":spStatus", $_POST["spStatus"]);
            $products->execute();

            // 找到最後一個psn數字當檔案名稱
            $fileFirstName = $pdo->lastInsertId();

            // 做判斷是否上傳成功
            switch($_FILES["spImage"]["error"]){
                case 0:
                    // 成功了就把圖片改名字並放到對的位置
                    $dir = "../images/bandon_include";
                    if(file_exists($dir) === false){
                        mkdir($dir);
                    }
                    $from = $_FILES["spImage"]["tmp_name"]; //暫存區的路徑
                    $to = "$dir/{$_FILES["spImage"]["name"]}";
                    $imgSOL = "./images/bandon_include/".$_FILES["spImage"]["name"];
            
                    if(copy($from, $to)){
                        // 成功上傳後再去資料庫把image的資料修正為對的資料
                        $sql2 = "update `SINGLE_PRODUCT` set spImage=:spImage where spId=:spId";
                        $fixImage = $pdo->prepare($sql2);
                        $fixImage->bindValue(":spId",$fileFirstName );
                        $fixImage->bindValue(":spImage",$imgSOL );
                        $fixImage->execute();
                        echo "<script>alert('新增成功');location.href='../backEndIndex.html'</script>";
                    

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
                    echo "檔案未選<br>";
                    break;
                default:
                    echo "system upload error : ", $_FILES["spImage"]["error"], "<br>";
                break;
            }


            
        } catch (PDOException $e) {
            // echo "系統暫時無法提供服務, 請通知系統維護人員<br>";
            echo "錯誤行號 : ", $e->getLine(), "<br>";
            echo "錯誤原因 : ", $e->getMessage(), "<br>";	
        }
}
?>