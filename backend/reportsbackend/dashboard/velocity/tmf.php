<?php
require_once '../../shared_config.php';
require '../../database.php';

$connection = new Database('asterisk');

$result = $connection->query(
  "select
  count(*) as total_chamadas,
  ROUND(ABS(SUM(TIME_TO_SEC(TIMEDIFF(enter_queue.time, outros_eventos.time))))/60) as tempo_total,
  ROUND(ABS(SUM(TIME_TO_SEC(TIMEDIFF(enter_queue.time, outros_eventos.time))))/count(*)/60) as media_minutos,
  TRUNCATE(ABS(SUM(TIME_TO_SEC(TIMEDIFF(enter_queue.time, outros_eventos.time))))/count(*), 2) as media_segundos,
  '20' as metrica_tmf
FROM
  asteriskcdrdb.queue_log enter_queue
inner join asteriskcdrdb.queue_log outros_eventos on
  enter_queue.callid = outros_eventos.callid
WHERE
  enter_queue.event = 'ENTERQUEUE'
  and outros_eventos.event in ('CONNECT', 'ABANDON')
  and DATE_FORMAT(enter_queue.time, '%d/%m/%Y ') = DATE_FORMAT(now(), '%d/%m/%Y')");

echo $result;