<?php
require_once 'shared_config.php';
require 'database.php';

$time1 = $_POST['time1'];
$time2 = $_POST['time2'];
$agent = $_POST['agent'];

$connection = new Database('asteriskcdrdb');

$query = "SELECT 
    DATE_FORMAT(time, '%d-%m-%Y %h:%i:%s') AS 'Data', 
    agent AS 'Agentes', 
    CASE 
        WHEN event = 'ADDMEMBER' THEN 'LOGIN'
        WHEN event = 'REMOVEMEMBER' THEN 'LOGOUT'
        WHEN event = 'PAUSE' THEN 'PAUSA'
    END AS 'Eventos',
    data1 AS 'Pausas',
    '' AS 'Tempo',
    '' AS 'Fim Pausa'
FROM queue_log 
WHERE event IN ('ADDMEMBER', 'REMOVEMEMBER', 'PAUSE')";

if (!empty($time1) && !empty($time2)) {
    $query .= " AND CAST(time AS DATETIME) BETWEEN '" . $time1 . "' AND '" . $time2 . "'";
}

if (!empty($agent)) {
    $query .= " AND agent = '" . $agent . "'";
}

$query .= " ORDER BY time";

$result = $connection->query($query);