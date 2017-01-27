<?php

require_once('./connect.php');

$query = mysql_query("select * from messageboard");
$rows = array();

while($r = mysql_fetch_assoc($query)){
	$rows[] = $r;
};

echo json_encode($rows);
?>