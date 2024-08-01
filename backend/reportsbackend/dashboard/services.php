<?php
require_once '../shared_config.php';
require '../database.php';

$connection = new Database('asteriskcdrdb');

$result = $connection->query("
select 
(select
ROUND(sum(case when ql.event = 'ABANDON' then 1 else 0 end) / (sum(case when substr(ql.event, 1, 8) = 'COMPLETE' then 1 else 0 end) +
sum(case when ql.event = 'ABANDON' then 1 else 0 end)) * 100 )
from queue_log ql where DATE_FORMAT(ql.time, '%d/%m/%Y') = DATE_FORMAT(now(), '%d/%m/%Y'))  as abandono, 
(select
ROUND(sum(case when ql.event = 'ABANDON' then 1 else 0 end) / (sum(case when substr(ql.event, 1, 8) = 'COMPLETE' then 1 else 0 end) +
sum(case when ql.event = 'ABANDON' then 1 else 0 end)) * 100 ) 
from queue_log ql where DATE_FORMAT(ql.time, '%d/%m/%Y') = DATE_FORMAT(now(), '%d/%m/%Y') AND data3 <= 20) as abandono_20,
(select ROUND(sum(case when substr(ql.event, 1, 8) = 'COMPLETE' then 1 else 0 end)/(sum(case when substr(ql.event, 1, 8) = 'COMPLETE' then 1 else 0 end) +
sum(case when ql.event = 'ABANDON' then 1 else 0 end)) * 100)
from queue_log ql where DATE_FORMAT(ql.time, '%d/%m/%Y') = DATE_FORMAT(now(), '%d/%m/%Y')) as complete,
ROUND((select
(select sum(case when substr(ql.event, 1, 8) = 'COMPLETE' then 1 else 0 end) from queue_log ql where DATE_FORMAT(ql.time, '%d/%m/%Y') = DATE_FORMAT(now(), '%d/%m/%Y')) / 
((select sum(case when substr(ql.event, 1, 8) = 'COMPLETE' then 1 else 0 end) from queue_log ql where DATE_FORMAT(ql.time, '%d/%m/%Y') = DATE_FORMAT(now(), '%d/%m/%Y')) +
(select sum(case when event = 'ABANDON' then 1 else 0 end) from queue_log where DATE_FORMAT(time, '%d/%m/%Y') = DATE_FORMAT(now(), '%d/%m/%Y'))) * 100)) as complete_20
");

echo $result;