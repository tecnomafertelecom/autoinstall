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
    date_format(calldate, '%d-%m-%Y %H:%i:%s') AS Data,
    src AS Origem,
    dst AS Campanha,
    queue_log.agent AS 'Agentes',
    SUBSTRING(SEC_TO_TIME(queue_log.data1), 1, 8) AS 'Tempo de Espera',
    SUBSTRING(SEC_TO_TIME(queue_log.data2), 1, 8) AS 'Tempo de Atendimento', 
    CASE 
    WHEN event = 'COMPLETEAGENT' THEN 'Enc. Oper'
    WHEN event = 'COMPLETECALLER' THEN 'Enc. User'
END AS 'Finalizados por'
FROM cdr
INNER JOIN queue_log ON callid = uniqueid
WHERE queue_log.agent != 'NONE'
AND event IN ('COMPLETEAGENT', 'COMPLETECALLER')
";

if(!empty($time1) && !empty($time2)){
  $query .= " and cast(calldate as datetime) between '" . $time1 . "' and '" . $time2 ."'";
}

if(!empty($queue)){
  $query .= " and dst=" . $queue ;
}

if (!empty($agent)) {
  $query .= " and queue_log.agent = '" . $agent . "'";
}

$result = $connection->query($query);

echo $result;