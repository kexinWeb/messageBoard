<?php

require_once('./config.php');

//连接数据库
mysql_connect(HOST, USERNAME, PASSWORD);

//选择数据库
mysql_select_db('newyear');

//设置字符集
mysql_query("set names utf8");

?>