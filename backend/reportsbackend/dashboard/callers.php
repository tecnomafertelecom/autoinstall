<?php
require_once '../shared_config.php';
require '../database.php';

$connection = new Database('asteriskcdrdb');

$result = $connection->query("
select
sum(case when ql.event = 'CONNECT' then 1 else 0 end) as connect,
sum(case when ql.event = 'ABANDON' then 1 else 0 end) as abandon,
sum(case when ql.event = 'COMPLETEAGENT' then 1 else 0 end) as done,
sum(case when ql.event = 'COMPLETECALLER' then 1 else 0 end) as desists
from queue_log ql where DATE_FORMAT(ql.time, '%d/%m/%Y ') = DATE_FORMAT(now(), '%d/%m/%Y')");

echo $result;