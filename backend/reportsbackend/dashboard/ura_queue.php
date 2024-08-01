<?php
require_once '../shared_config.php';
require '../database.php';

$connection = new Database('asteriskcdrdb');
$result = $connection->query("
select 
(select
count(*)
from cdr where
substring(dcontext, 1, 3) = 'ivr' 
and DATE_FORMAT(calldate, '%d/%m/%Y') 
and calldate > DATE_SUB(now(), INTERVAL '30' MINUTE)) as ura,
(select
count(*)
from cdr where
substring(dcontext, 1, 10) = 'ext-queues' 
and DATE_FORMAT(calldate, '%d/%m/%Y') 
and calldate > DATE_SUB(now(), INTERVAL '30' MINUTE))  as fila 
");

echo $result;