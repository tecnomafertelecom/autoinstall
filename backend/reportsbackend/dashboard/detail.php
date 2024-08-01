<?php
require_once '../shared_config.php';
require '../database.php';

$connection = new Database('asterisk');

$result = $connection->query("select aaa.number as codigo,
users.extension ramal,
aaa.name as nome,
coalesce((select
         case when comeco.event = 'CONNECT' AND fim.event is null then CONCAT(3, '#', TIMESTAMPDIFF(SECOND, comeco.time, now()))
         else 0  end as em_chamada
     from
         asteriskcdrdb.queue_log comeco
     left join asteriskcdrdb.queue_log fim on
         comeco.callid = fim.callid
         and substr(fim.event, 1, 8) = 'COMPLETE'
         and comeco.event = 'CONNECT'
     where
         comeco.agent = aaa.name
         and DATE_FORMAT(comeco.time, '%d/%m/%Y ') = DATE_FORMAT(now(), '%d/%m/%Y')
         and comeco.event = 'CONNECT' 
         and comeco.callid = (
         select ql.callid from asteriskcdrdb.queue_log ql where ql.agent = aaa.name and callid not in ('NONE', 'MANAGER', '')
         and ql.event = 'CONNECT'
         and DATE_FORMAT(time, '%d/%m/%Y ') = DATE_FORMAT(now(), '%d/%m/%Y') order by ql.time desc limit 1
         )
         GROUP BY comeco.agent
         order by comeco.`time` desc
         ),0) as atendendo,	
         coalesce((select CONCAT(3, '#', TIMESTAMPDIFF(SECOND, comeco.time, now()))
     from
         asteriskcdrdb.queue_log comeco
      where
         comeco.agent = aaa.name
         and DATE_FORMAT(comeco.time, '%d/%m/%Y ') = DATE_FORMAT(now(), '%d/%m/%Y')
         and comeco.event = 'UNPAUSE' 
         order by comeco.`time` desc limit 1
         ),0) as online,	
         (
         select
             coalesce(concat(count(*), '#', TIMESTAMPDIFF(SECOND, a.datetime_init, now() )),0)
         from
             call_center.audit a
         inner join call_center.agent a2 on
             a.id_agent = a2.name
             or a.id_agent = a2.id
             and DATE_FORMAT(a.datetime_init, '%d/%m/%Y ') = DATE_FORMAT(now(), '%d/%m/%Y')
             and a.datetime_end is null
             and a.id_break is null
         where
             a2.name = aaa.name
             order by 1 desc limit 1 
             )  as logado,
         (
         select
              coalesce(concat(count(*), '#', TIMESTAMPDIFF(SECOND, a.datetime_init,now())),0)
         from
             call_center.audit a
         inner join call_center.agent a22 on
             a.id_agent = a22.name
             or a.id_agent = a22.id
             and DATE_FORMAT(a.datetime_init, '%d/%m/%Y ') = DATE_FORMAT(now(), '%d/%m/%Y')
             and a.datetime_end is null
             and a.id_break is not null
         where
             a22.name = aaa.name 
             order by 1 desc limit 1 
             ) as pausa,
         sum(case when ql_ext.event = 'CONNECT' then 1 else 0 end) as atendimentos
         ,coalesce((
                 select
                     ROUND((ABS(TIME_TO_SEC(timediff( SEC_TO_TIME(sum(TIME_TO_SEC(substr(asteriskcdrdb.queue_log.time, -15, 8)))), SEC_TO_TIME(sum(TIME_TO_SEC(substr(complete.time, -15, 8)))) ))) / count(asteriskcdrdb.queue_log.time))) as tma
                 from
                 asteriskcdrdb.queue_log
                 inner join asteriskcdrdb.queue_log complete on
                     complete.callid = asteriskcdrdb.queue_log.callid
                     and substr(complete.event, 1, 8) = 'COMPLETE'
                     and asteriskcdrdb.queue_log.event = 'CONNECT'
                 where
                 asteriskcdrdb.queue_log.agent = aaa.name
                     and DATE_FORMAT(asteriskcdrdb.queue_log.time, '%d/%m/%Y ') = DATE_FORMAT(now(), '%d/%m/%Y')
                 order by
                     1 desc), 0) as tma,
       coalesce(coalesce(fora.src,(select distinct  
 case when  fim.event is null then agent.data2 else '---' end as telefone
 from asteriskcdrdb.queue_log src 
 inner join asteriskcdrdb.queue_log agent on agent.callid = src.callid and agent.event = 'ENTERQUEUE' and src.event = 'CONNECT'
 left join asteriskcdrdb.queue_log fim on agent.callid = src.callid and agent.event = 'ENTERQUEUE' and substr(fim.event, 1, 8) is null
 where  DATE_FORMAT(src.time, '%d/%m/%Y ') = DATE_FORMAT(now(), '%d/%m/%Y')
 and src.agent = aaa.name
 order by src.time desc limit 1)), '---') as ultimo_telefone,
         resultado.datetime_init as ultimo_login,
         (select upper(brk.name) from 
 call_center.audit a
 left join call_center.break brk
 on brk.id = a.id_break
 where DATE_FORMAT(a.datetime_init, '%d/%m/%Y ') = DATE_FORMAT(now(), '%d/%m/%Y')
 and a.id_break is not null and a.id_agent = aaa.id
 order by a.datetime_init desc limit 1) as nome_pausa
         from
         call_center.agent aaa
         inner join asterisk.users users
                 on users.extension = aaa.number or users.extension = aaa.name
         inner join asteriskcdrdb.queue_log ql_ext on
             ql_ext.agent = aaa.name 
             and DATE_FORMAT(ql_ext.time, '%d/%m/%Y ') = DATE_FORMAT(now(), '%d/%m/%Y')
         left join asteriskcdrdb.cdr fora on 
             fora.uniqueid in (ql_ext.callid, ql_ext.data2)
         inner join (
                 select
                     distinct id_agent as id_agent,
                     max(datetime_init) as datetime_init,
                     id_break as id_break,
                     case
                         when datetime_end is null then null
                         else max(datetime_end)
                     end as datetime_end
                 from
                     call_center.audit
                 where
                 DATE_FORMAT(call_center.audit.datetime_init, '%d/%m/%Y ') = DATE_FORMAT(now(), '%d/%m/%Y')
                 group by
                     call_center.audit.id_agent
                 order by
                     datetime_init desc ) resultado on
                 resultado.id_agent = aaa.id
                 and DATE_FORMAT(resultado.datetime_init, '%d/%m/%Y ') = DATE_FORMAT(now(), '%d/%m/%Y')
         where aaa.id in (
         select filtro.id_agent from
             call_center.audit filtro where DATE_FORMAT(filtro.datetime_init, '%d/%m/%Y ') = DATE_FORMAT(now(), '%d/%m/%Y')
             group by filtro.id_agent
             )
     group by aaa.name
");

echo $result;