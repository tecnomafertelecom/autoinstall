<?php
require_once 'shared_config.php';
require 'database.php';

$time1 = $_POST['time1'];
$time2 = $_POST['time2'];
$selectedQueue = $_POST['selectedQueue'];

$connection = new Database('asteriskcdrdb');

$query = "
select DISTINCT date_format(a.time, '%d/%m/%Y %H:%i:%s') as 'Data da Chamada', 
SUBSTRING(SEC_TO_TIME(a.data3),1 ,8) as 'TE',
q.data2 as 'Número'
from queue_log a
inner join queue_log q on a.callid = q.callid and q.event like '%QUEUE%'
where a.event like '%ABANDON%' ";

if(!empty($time1) && !empty($time2)){
    $query .= " and cast(a.time as datetime) between '" . $time1 . "' and '" . $time2 . "'";
}

if (!empty($selectedQueue)) {
    $query .= " and (a.queuename = '" . $selectedQueue . "' OR q.queuename = '" . $selectedQueue . "')";
}

$query .= " order by a.time";

$result = $connection->query($query);

echo $result;