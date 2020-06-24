
<?php
session_start();
if(isset($_FILES["memImage"])){
	switch($_FILES["memImage"]["error"]){
		case 0:
			$dir = "../images/memberImg";
			if(file_exists($dir) === false){
				mkdir($dir);
			}
			$from = $_FILES["memImage"]["tmp_name"]; //暫存區的路徑
			$to = "$dir/{$_FILES["memImage"]["name"]}";

			$imgSQL = "./images/memberImg/".$_FILES["memImage"]["name"];
	
			if(copy($from, $to)){
				require_once("connect.php");
				$sql2 = "update `member` set memImage=:image where memId=:memId";
				$fixImage = $pdo->prepare($sql2);
				$fixImage->bindValue(":memId",$_SESSION["memId"] );
				$fixImage->bindValue(":image", $imgSQL);
				$fixImage->execute();
				echo "<script>alert('更新成功');location.href='../member.html';</script>";
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
			echo "<script>alert('檔案未選');location.href='../member.html';</script>";
			break;
		default:
			echo "system upload error : ", $_FILES["upFile"]["error"], "<br>";
		break;
	}
}else{
	echo "system upload error : ","<br>";
}
