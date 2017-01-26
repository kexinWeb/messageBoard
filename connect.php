<?php

// header("Content-type:text/html;charset=utf-8");
require_once('connet.php');

//连接数据库
mysql_connect(HOST, UERNAME, PASSWORD);

//选择数据库
mysql_select_db('newyear');

//设置字符集
mysql_query("set names utf8");

?>