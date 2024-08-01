<?php
require_once '../../shared_config.php';
require '../../database.php';

$connection = new Database('asterisk');

$result = $connection->query("
select SUM( case when ABS(ROUND(TIME_TO_SEC(timediff(enter_queue.time, conectados.time)))) <= 20 then 1 else 0 end ) AS atendidas_menor_20,
SUM( case when ABS(ROUND(TIME_TO_SEC(timediff(enter_queue.time, conectados.time)))) > 20 then 1 else 0 end ) AS atendidas_mais_20,
count(conectados.event) as atendidas,
ROUND( SUM( case when ABS(ROUND(TIME_TO_SEC(timediff(enter_queue.time, conectados.time)))) <= 20 then 1 else 0 end ) / count(conectados.event) * 100 ) as GNS,
'90' as METRICA 
from asteriskcdrdb.queue_log conectados
inner join asteriskcdrdb.queue_log enter_queue on conectados.callid = enter_queue.callid
where DATE_FORMAT(enter_queue.time, '%d/%m/%Y ') = DATE_FORMAT(now(), '%d/%m/%Y')
and conectados.event = 'CONNECT'
and enter_queue.event = 'ENTERQUEUE'");

echo $result;