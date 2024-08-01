<?php
require_once '../shared_config.php';
require '../database.php';

$connection = new Database('asteriskcdrdb');

$result = $connection->query("
select
(select SEC_TO_TIME(round(sum(data2) / count(data2),0))   from queue_log where event like '%COMPLETE%'
and DATE_FORMAT(time, '%d/%m/%Y') = DATE_FORMAT(now(), '%d/%m/%Y')) as complete,
(select SEC_TO_TIME(round(sum(q.data3) / count(q.data3),0))  from queue_log e 
inner join queue_log q on q.event like '%QUEUE%' and e.callid = q.callid
where e.event  like '%COMPLETE%' and DATE_FORMAT(e.time, '%d/%m/%Y') = DATE_FORMAT(now(), '%d/%m/%Y')) as queue_complete,
(select SEC_TO_TIME(round(sum(data3) / count(data3),0))   from queue_log where event like '%ABANDON%'
and DATE_FORMAT(time, '%d/%m/%Y') = DATE_FORMAT(now(), '%d/%m/%Y')) as abandon,
(select SEC_TO_TIME(round(sum(data3) / count(data3),0)) from queue_log where event like '%QUEUE%'
and DATE_FORMAT(time, '%d/%m/%Y') = DATE_FORMAT(now(), '%d/%m/%Y')) as queue
");

echo $result;