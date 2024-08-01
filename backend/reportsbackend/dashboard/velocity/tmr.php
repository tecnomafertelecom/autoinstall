<?php
require_once '../../shared_config.php';
require '../../database.php';

$connection = new Database('asterisk');

$result = $connection->query("
select
count(*) as total_atendidos,
ROUND((ABS(SUM(TIME_TO_SEC(TIMEDIFF(enter_queue.time, complete.time))))/60)) AS tempo_total_minutos,
ROUND((ABS(SUM(TIME_TO_SEC(TIMEDIFF(enter_queue.time, complete.time))))/ count(*))/60) as media_minutos,
ROUND(ABS(SUM(TIME_TO_SEC(TIMEDIFF(enter_queue.time, complete.time))))/ count(*)) as media_segundos,
60*6 as metrica_tmr FROM asteriskcdrdb.queue_log enter_queue
inner join asteriskcdrdb.queue_log complete on enter_queue.callid = complete.callid
where
complete.event in ('COMPLETEAGENT', 'COMPLETECALLER')
and enter_queue.event = 'ENTERQUEUE'
and DATE_FORMAT(enter_queue.time, '%d/%m/%Y ') = DATE_FORMAT(now(), '%d/%m/%Y')");

echo $result;