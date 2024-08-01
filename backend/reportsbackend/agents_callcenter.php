<?php
require_once 'shared_config.php';
require 'database.php';

$connection = new Database('call_center');

$result = $connection->query("
select 
id,
name
from agent 
order by id");

echo $result;