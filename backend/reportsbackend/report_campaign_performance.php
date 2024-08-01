<?php
require_once 'shared_config.php';
require 'database.php';

$data1 = $_POST['data1'];
$data2 = $_POST['data2'];
$time1 = str_replace('-', ':', $_POST['time1']);
$time2 = str_replace('-', ':', $_POST['time2']);
$selectedQueue = $_POST['selectedQueue'];

$connection = new Database('asteriskcdrdb');

$query = "
select
date_format(time, '%d-%m-%Y %H:%i:%s') as 'Data',
event,
data1,
data2,
data3,
queuename
from queue_log ";

if (!empty($data1) && !empty($data2)) {
    $query .= " where cast(time as date) between '" . $data1 . "' and '" . $data2 . "'";
}

if (!empty($time1) && !empty($time2)) {
    $query .= " and date_format(time, '%H:%i:%s') between '" . $time1 . "' and '" . $time2 . "'";
}

if ($selectedQueue !== '') {
    $query .= " and queuename = '" . $selectedQueue . "'";
}

$result = $connection->query($query);

echo $result;