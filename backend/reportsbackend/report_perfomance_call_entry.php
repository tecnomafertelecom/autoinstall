<?php
require_once 'shared_config.php';
require 'database.php';

$time1 = $_POST['time1'];
$time2 = $_POST['time2'];
$agent = $_POST['agent'];

$connection = new Database('call_center');

$query = "
select 
agent.name as Agente,
uniqueid as id,
duration as Duration,
duration_wait as DurationWait,
status as status
from call_entry
inner join agent on agent.id = call_entry.id_agent ";

if(!empty($time1) && !empty($time2)){
  $query .= " and cast(datetime_init as datetime) between '" . $time1 . "' and '" . $time2 ."'";
}

if(!empty($agent)){ 
  $query .= " and id_agent in (". $agent .")";
}

$query .= " order by datetime_init";

$result = $connection->query($query);

echo $result;


