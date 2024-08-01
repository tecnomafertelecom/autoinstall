<?php
require_once 'shared_config.php';
require 'database.php';

$time1 = $_POST['time1'];
$time2 = $_POST['time2'];

$connection = new Database('asteriskcdrdb');

$query = "
select
callid,
agent,
event,
queuename
from queue_log
 where (callid, time) IN
 (
   select callid, MAX(time)
     from queue_log
    group by callid
 )";

if(!empty($time1) && !empty($time2)){
  $query .= " and cast(time as datetime) between '" . $time1 . "' and '" . $time2 ."'";
}

$result = $connection->query($query);

echo $result;