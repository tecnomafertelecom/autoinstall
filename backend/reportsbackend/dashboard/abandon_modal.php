<?php
require_once '../shared_config.php';
require '../database.php';

$connection = new Database('asteriskcdrdb');

$result = $connection->query("
select 
date_format(a.time, '%d/%m/%Y %h:%i:%s') as 'Data', 
q.data2 as 'Telefone',
SEC_TO_TIME(a.data3) as 'Tempo de Espera'
from queue_log a
inner join queue_log q on a.callid = q.callid and q.event like '%QUEUE%'
where a.event like '%ABANDON%'
and DATE_FORMAT(a.time, '%d/%m/%Y') = DATE_FORMAT(now(), '%d/%m/%Y')
");

echo $result;