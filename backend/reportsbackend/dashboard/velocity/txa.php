<?php
require_once '../../shared_config.php';
require '../../database.php';

$connection = new Database('asterisk');

$result = $connection->query("
select SUM(case when event = 'ABANDON' then 1 else 0 end) AS abandono,
SUM(case when event = 'CONNECT' then 1 else 0 end) as entrada,
ROUND(SUM(case when event = 'ABANDON' then 1 else 0 end) / SUM(case when event = 'CONNECT' then 1 else 0 end) * 100) AS TXA,
null AS nada,
'2.5' as metrica
from
asteriskcdrdb.queue_log
WHERE DATE_FORMAT(time, '%d/%m/%Y ') = DATE_FORMAT(now(), '%d/%m/%Y')");

echo $result;