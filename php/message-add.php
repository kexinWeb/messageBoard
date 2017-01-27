<?php



require_once('./connect.php');


if($_SERVER["REQUEST_METHOD"] == "POST"){
	addMessage();
}

function addMessage(){
	$content = $_POST["messageContent"];
	$name = $_POST["name"];
	if(!isset($name)||empty($name)||!isset($content)||empty($content)){
		echo "信息录入不全";

	}else{


		$query = "insert into messageboard(name, content) values('" . $name . "','" . $content . "')";
		echo $query;
		if(mysql_query($query)){
			echo "插入成功";
		}else{
			echo "charushibai";
			echo mysql_error();
		};
	}
}


?>