(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20eb47"],{b102:function(e,a,t){"use strict";t.r(a);var o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("Page",[t("b-form",[t("b-form-row",[t("b-form-group",{staticClass:"col-md-auto",attrs:{label:"Data Início"}},[t("date-picker",{staticClass:"mt-1",attrs:{format:"DD-MM-YYYY HH:mm:ss",type:"datetime"},model:{value:e.time1,callback:function(a){e.time1=a},expression:"time1"}})],1),e._v(" "),t("b-form-group",{staticClass:"col-md-auto",attrs:{label:"Data Final"}},[t("date-picker",{staticClass:"mt-1",attrs:{format:"DD-MM-YYYY HH:mm:ss",type:"datetime"},model:{value:e.time2,callback:function(a){e.time2=a},expression:"time2"}})],1),e._v(" "),t("b-form-group",{staticClass:"col-md-auto",attrs:{label:"Campanhas"}},[t("b-select",{attrs:{plain:"",options:e.queues,size:"md"},model:{value:e.selectedQueue,callback:function(a){e.selectedQueue=a},expression:"selectedQueue"}},[t("b-select-option",{attrs:{value:""}},[e._v("Todas as Campanhas")])],1)],1)],1),e._v(" "),t("b-form-row",[t("ladda-btn",{staticClass:"btn btn-success",attrs:{loading:e.loading,"data-style":"expand-left"},nativeOn:{click:function(a){return e.getAbandoned.apply(null,arguments)}}},[e._v("Visualizar")])],1)],1)],1),e._v(" "),t("Page",{attrs:{hidden:0==e.table.length}},[t("Table",{attrs:{tableData:e.table,filename:e.fileName,header:e.header,legend:e.legend}})],1)],1)},n=[],s=(t("99af"),t("14d9"),t("d3b7"),t("3ca3"),t("ddb0"),t("9861"),t("88a7"),t("271a"),t("5494"),t("9973")),d=t("ec45"),i=(t("29ac"),t("c1df")),l=t.n(i),c=t("41dc"),r=t("0748"),m=t("bc3a"),u=t.n(m),h={name:"home",components:{Page:s["a"],DatePicker:d["default"],LaddaBtn:c["a"],Table:r["a"]},metaInfo:{title:"Relatório de Chamadas Abandonadas"},data:function(){return{loading:!1,phoneMask0:["(",/[1-9]/,/\d/,")"," ",/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/],phoneMask1:["(",/[1-9]/,/\d/,")"," ",/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/],phoneMask2:["(",/[1-9]/,/\d/,")"," ",/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/],phone:"",time1:l()().hour(0).minute(0).second(0).toDate(),time2:l()().hour(23).minute(59).second(59).toDate(),noanswered:!1,busy:!1,tel:"",table:[],header:[],legend:[],fileName:"",queues:[],selectedQueue:""}},mounted:function(){this.$store.commit("setTitle","Relatório de Chamadas Abandonadas"),this.loadQueues()},methods:{loadQueues:function(){var e=this;u.a.post("".concat(location.origin,"/reportsbackend/queues.php")).then((function(a){e.queues=a.data})).catch((function(e){return console.log(e)}))},getAbandoned:function(){var e=this;this.loading=!0;var a=new URLSearchParams;a.append("time1",l()(this.time1).format("YYYY-MM-DD HH:mm:ss")),a.append("time2",l()(this.time2).format("YYYY-MM-DD HH:mm:ss")),a.append("selectedQueue",this.selectedQueue),u.a.post("".concat(location.origin,"/reportsbackend/report_abandoned.php"),a).then((function(a){0===a.data.length&&e.$bvToast.toast("Nenhum registro encontrado",{title:"Tecnomafer Report",autoHideDelay:5e3,appendToast:!0,toastClass:"bs4-toast bg-danger"}),e.table=a.data,e.updateHeader()})).catch((function(e){return console.log(e)})).finally((function(a){e.loading=!1}))},updateHeader:function(){this.header=[],this.header.push("<h4>Relatório de Chamadas Abandonadas</h4>"),this.header.push("Período ".concat(l()(this.time1).format("DD/MM/YYYY")," à ").concat(l()(this.time2).format("DD/MM/YYYY")," / Hora à ").concat(l()(this.time1).format("HH:mm:ss")," até ").concat(l()(this.time2).format("HH:mm:ss"))),this.header.push(" "),this.legend=["<h5>Legenda:</h5>","<b>Data da Chamada</b> - Data da chamada;","<b>TE</b> - Tempo de esperado do cliente;","<b>Número</b> - Número do cliente;","<b>Emitido em:</b> ".concat(l()().format("DD/MM/YYYY HH:mm:ss"))],this.fileName="Rel_geral_chamadas_abandonadas ".concat(l()().format("DD_MM_YYYY_HH_mm_ss"))}}},p=h,b=t("2877"),f=Object(b["a"])(p,o,n,!1,null,null,null);a["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d20eb47.04a209a8.js.map