<?php
require_once 'shared_config.php';
require 'database.php';

$time1 = $_POST['time1'];
$time2 = $_POST['time2'];
$queue = $_POST['queue'];
$agent = $_POST['agent'];

$connection = new Database('asteriskcdrdb');

$query = "
SELECT DISTINCT
    DATE_FORMAT(calldate, '%d-%m-%Y') AS Data,
    queue_log.event AS event,
    dst AS fila,
    src AS Origem,
    queue_log.agent AS Operador,
    DATE_FORMAT(calldate, '%H:%i:%s') AS Recebido,
    queue_log.data1 AS 'Tempo Espera na fila (s)',
    CASE
        WHEN event IN ('COMPLETEAGENT', 'COMPLETECALLER', 'CONNECT', 'ABANDON') THEN queue_log.data3
    ELSE '00:00:00'
    END AS 'Tempo de espera no operador (s)',   
    CASE 
        WHEN event IN ('COMPLETEAGENT', 'COMPLETECALLER', 'CONNECT') THEN SEC_TO_TIME(TIME_TO_SEC(calldate) + queue_log.data1 + queue_log.data3)
        ELSE '00:00:00'
    END AS 'Recebido pelo operador',
    CASE 
        WHEN event IN ('COMPLETEAGENT', 'COMPLETECALLER') THEN SEC_TO_TIME(queue_log.data2)
        ELSE '00:00:00'  
    END AS 'Conversacao',
    CASE 
        WHEN event IN ('COMPLETEAGENT', 'COMPLETECALLER') THEN SEC_TO_TIME(TIME_TO_SEC(calldate) + queue_log.data1 + queue_log.data3 + queue_log.data2)
        ELSE '00:00:00'
    END AS 'Chamada encerrada',
    CASE 
        WHEN event = 'COMPLETEAGENT' THEN 'COMPLETADO PELO AGENTE'
        WHEN event = 'COMPLETECALLER' THEN 'LIGAÇÃO COMPLETADA'
        WHEN event = 'ABANDON' THEN 'NAO RESPONDEU'
    END AS 'Motivo da conclusão',
    DATE_FORMAT(calldate, '%H') AS Intervalo
FROM cdr
INNER JOIN queue_log ON callid = uniqueid
WHERE event IN ('COMPLETEAGENT', 'COMPLETECALLER', 'ABANDON', 'CONNECT')";



if (!empty($time1) && !empty($time2)) {
    $query .= " AND calldate BETWEEN '" . $time1 . "' AND '" . $time2 . "'";
}

if (!empty($queue)) {
    $query .= " AND queue_log.queuename = '" . $queue . "'";
}

if (!empty($agent)) {
    $query .= " AND queue_log.agent = '" . $agent . "'";
}

// $query .= " ORDER BY cdr.uniqueid, queue_log.time";

$result = $connection->query($query);

echo $result;
?>