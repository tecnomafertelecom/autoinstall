<?php
require_once 'shared_config.php';
require 'database.php';

$connection = new Database('asterisk');

$result = $connection->query("
select
extension as value,
descr as text
from queues_config ");

echo $result;

