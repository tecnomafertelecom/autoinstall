<?php
require_once 'shared_config.php';
require 'database.php';

$connection = new Database('asteriskcdrdb');

$result = $connection->query("
select agent from queue_log 
where agent not in ('NONE')
GROUP BY agent
order by agent");

echo $result;