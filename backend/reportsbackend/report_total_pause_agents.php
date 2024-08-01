<?php
require_once 'shared_config.php';
require 'database.php';

$time1 = $_POST['time1'];
$time2 = $_POST['time2'];
$agent = $_POST['agent'];

$connection = new Database('call_center');

$query = "
SELECT
agent.name as Agente,
sum(TIME_TO_SEC(audit.duration)) as total
FROM audit
inner join agent on audit.id_agent = agent.id and id_break is not null";

if(!empty($time1) && !empty($time2)){
  $query .= " and cast(audit.datetime_init as datetime) between '" . $time1 . "' and '" . $time2 ."'";
}

if(!empty($agent)){ 
  $query .= " and audit.id_agent in (". $agent .")";
}

$query .= " group by agent.name ";

$result = $connection->query($query);

echo $result;