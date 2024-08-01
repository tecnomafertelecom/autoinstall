<?php
require_once '../shared_config.php';
require '../database.php';

$connection = new Database('asteriskcdrdb');

$result = $connection->query("
select 
EXTRACT(SECOND from  time) as 'time'
from queue_log where event like '%QUEUE%' 
and time > DATE_SUB(cast(now() as datetime), INTERVAL 60 SECOND)
group by time
order by time
");

echo $result;