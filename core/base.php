<?
include('config.php');
//Подключение к базе данных  
$dbcnx = @mysql_connect($dblocation,$dbuser,$dbpasswd);
mysql_select_db($dbname, $dbcnx);
?>