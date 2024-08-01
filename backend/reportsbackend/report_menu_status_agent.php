<?php
require_once 'shared_config.php';
require 'database.php';

$time1 = $_POST['time1'];
$time2 = $_POST['time2'];
$queue = $_POST['queue'];
$agent = $_POST['agent'];

$connection = new Database('asteriskcdrdb');

$query = "
SELECT
    queue_log.agent AS 'Agente',
    COUNT(*) AS 'Chamadas',
    SEC_TO_TIME(SUM(queue_log.data1)) AS 'Tempo Espera Na Fila',
    SEC_TO_TIME(SUM(queue_log.data2)) AS 'Conversacao',
    SEC_TO_TIME(ROUND(SUM(queue_log.data2) / COUNT(*))) AS 'Tempo Médio de Conversação',
    SUM(CASE WHEN event = 'COMPLETEAGENT' THEN 1 ELSE 0 END) AS 'Chamadas_COMPLETEAGENT',
    SUM(CASE WHEN event = 'COMPLETECALLER' THEN 1 ELSE 0 END) AS 'Chamadas_COMPLETECALLER'
FROM cdr
INNER JOIN queue_log ON callid = uniqueid
WHERE event IN ('COMPLETEAGENT', 'COMPLETECALLER')
";

if (!empty($time1) && !empty($time2)) {
    $query .= " AND calldate BETWEEN '" . $time1 . "' AND '" . $time2 . "'";
}

if (!empty($queue)) {
    $query .= " AND queue_log.queuename = '" . $queue . "'";
}

if (!empty($agent)) {
    $query .= " AND queue_log.agent = '" . $agent . "'";
}

$query .= " GROUP BY queue_log.agent";

$result = $connection->query($query);

echo $result;
?>