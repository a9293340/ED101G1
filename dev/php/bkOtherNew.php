<?php 

    if(isset($_FILES["opImage"])){
        try {
            // 新增一筆資料放到資料庫
            require_once("connect.php");
            $sql1 = "INSERT INTO `OTHER_PRODUCT` (`opName`, `opPrice`,`opClass`, `opImage`, `opStatus`) VALUES (:opName,:opPrice,:opClass,'',:opStatus);";
            $products = $pdo->prepare($sql1);
            $products->bindValue(":opName", $_POST["opName"]);
            $products->bindValue(":opPrice", $_POST["opPrice"]);
            $products->bindValue(":opClass", $_POST["opClass"]);
            $products->bindValue(":opStatus", $_POST["opStatus"]);
            $products->execute();

            $fileFirstName = $pdo->lastInsertId();

            // 做判斷是否上傳成功
            switch($_FILES["opImage"]["error"]){
                case 0:
                    // 成功了就把圖片改名字並放到對的位置
                    $dir = "../images/bandon_include";
                    if(file_exists($dir) === false){
                        mkdir($dir);
                    }
                    $from = $_FILES["opImage"]["tmp_name"]; //暫存區的路徑
                    $to = "$dir/{$_FILES["opImage"]["name"]}";
                    $imgSOL = "./images/bandon_include/".$_FILES["opImage"]["name"];
            
                    if(copy($from, $to)){
                        // 成功上傳後再去資料庫把image的資料修正為對的資料
                        $sql2 = "update `OTHER_PRODUCT` set `opImage`=:opImage where `opId`=:opId";
                        $fixImage = $pdo->prepare($sql2);
                        $fixImage->bindValue(":opId",$fileFirstName);
                        $fixImage->bindValue(":opImage",$imgSOL);
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
                    echo "system upload error : ", $_FILES["opImage"]["error"], "<br>";
                break;
            }


            
        } catch (PDOException $e) {
            // echo "系統暫時無法提供服務, 請通知系統維護人員<br>";
            echo "錯誤行號 : ", $e->getLine(), "<br>";
            echo "錯誤原因 : ", $e->getMessage(), "<br>";	
        }
}
?>