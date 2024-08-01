<?php
require_once 'shared_config.php';
require 'database.php';

$time1 = $_POST['time1'];
$time2 = $_POST['time2'];
$agent = $_POST['agent'];
$breaks = $_POST['breaks'];

$connection = new Database('call_center');

$query = "
SELECT
agent.name as Agente,
agent.id as AgenteId,
DATE_FORMAT(audit.datetime_init,'%d/%m/%Y') as Data,
min(audit.datetime_init) as Primeiro,
max(audit.datetime_end) as Ultimo,
SUM(TIME_TO_SEC(audit.duration)) as Duracao,
break.description as Pausa
FROM audit
inner join agent on audit.id_agent = agent.id and id_break is not null
inner join break on break.id = audit.id_break ";

if(!empty($time1) && !empty($time2)){
  $query .= " and cast(audit.datetime_init as datetime) between '" . $time1 . "' and '" . $time2 ."'";
}

if(!empty($agent)){
  $query .= " and audit.id_agent IN(". $agent .")";
}

if(!empty($breaks)){
  $query .= " and break.id IN(". $breaks .")";
}


$query .= " group by  DATE_FORMAT(audit.datetime_init,'%d/%m/%Y '), agent.name, break.description  
UNION
SELECT
agent.name as Agente,
agent.id as AgenteId,
DATE_FORMAT(audit.datetime_init,'%d/%m/%Y') as Data,
min(audit.datetime_init) as Primeiro,
max(audit.datetime_end) as Ultimo,
TIME_TO_SEC(TIMEDIFF(max(audit.datetime_end), min(audit.datetime_init))) as Duracao,
'Login' as Pausa
FROM audit
inner join agent on audit.id_agent = agent.id ";

if(!empty($time1) && !empty($time2)){
  $query .= " and cast(audit.datetime_init as datetime) between '" . $time1 . "' and '" . $time2 ."'";
}

if(!empty($agent)){
  $query .= " and audit.id_agent IN (". $agent .")";
}

$query .= " group by DATE_FORMAT(audit.datetime_init,'%d/%m/%Y '), agent.name
order by 2, 3, field(7, 'Login')";

$result = $connection->query($query);

echo $result;

