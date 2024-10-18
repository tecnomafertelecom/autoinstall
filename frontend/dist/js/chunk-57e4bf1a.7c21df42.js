(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57e4bf1a"],{"3b98":function(e,a,t){"use strict";t("f7b5")},"8a58":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("b-card",[t("h1",[e._v("Alerta de Pausas")]),e._v(" "),t("b-icon",{attrs:{icon:"exclamation-triangle-fill",variant:"warning"}}),e._v(" "),t("Page",{staticClass:"flex-container"},[t("b-form",{staticClass:"flex-container"},e._l(e.dataBreaks,(function(a,r){return t("b-form-row",{key:r},[t("b-form-group",{staticClass:"col-md-auto flex-container",attrs:{label:""+a.reason}},[t("b-form-timepicker",{attrs:{size:"md"},model:{value:a.time,callback:function(t){e.$set(a,"time",t)},expression:"breakItem.time"}})],1)],1)})),1),e._v(" "),t("div",{staticClass:"center-button"},[t("b-button",{on:{click:e.saveAllBreaks}},[e._v("Salvar")])],1)],1),e._v(" "),t("b-modal",{ref:"successModalBreaks",attrs:{title:"Sucesso ao salvar","hide-footer":""}},[t("p",[e._v("Os dados foram salvos com sucesso!")])])],1),e._v(" "),t("b-card",[t("h1",[e._v("Termômetro")]),e._v(" "),t("Page",{staticClass:"flex-container"},[t("b-form",{staticClass:"flex-container"},e._l(e.dataVelocity,(function(a,r){return t("b-form-row",{key:r},[t("b-form-group",{staticClass:"col-md-auto flex-container",attrs:{label:""+a.title}},[t("b-form-input",{attrs:{type:"number",size:"md",min:"0",max:"100"},model:{value:a.value,callback:function(t){e.$set(a,"value",t)},expression:"Item.value"}})],1)],1)})),1),e._v(" "),t("div",{staticClass:"center-button"},[t("b-button",{on:{click:e.saveAllVelocity}},[e._v("Salvar")])],1)],1),e._v(" "),t("b-modal",{ref:"successModalVelocity",attrs:{title:"Sucesso ao salvar","hide-footer":""}},[t("p",[e._v("Os dados foram salvos com sucesso!")])])],1),e._v(" "),t("b-card",[t("h1",[e._v("Tempo de espera (s)")]),e._v(" "),t("Page",{staticClass:"flex-container"},[t("b-form",{staticClass:"flex-container"},e._l(e.dataCallDuration,(function(a,r){return t("b-form-row",{key:r},[t("b-form-group",{staticClass:"col-md-auto flex-container",attrs:{label:""+a.limitForType}},[t("b-form-input",{attrs:{type:"number",size:"md"},model:{value:a.limit,callback:function(t){e.$set(a,"limit",t)},expression:"item.limit"}})],1)],1)})),1),e._v(" "),t("div",{staticClass:"center-button"},[t("b-button",{on:{click:e.saveCallDuration}},[e._v("Salvar")])],1)],1),e._v(" "),t("b-modal",{ref:"successModalCallDuration",attrs:{title:"Sucesso ao salvar","hide-footer":""}},[t("p",[e._v("Os dados foram salvos com sucesso!")])])],1)],1)},c=[],n=t("3835"),o=t("b85c"),s=t("c7eb"),i=t("5530"),l=t("1da1"),u=(t("99af"),t("4de4"),t("7db0"),t("d81d"),t("fb6a"),t("a9e3"),t("d3b7"),t("ac1f"),t("4d90"),t("5319"),t("9973")),d=t("bc3a"),v=t.n(d),b=t("6c23"),f={name:"break-alert",components:{Page:u["a"]},metaInfo:{title:"Configuração"},data:function(){return{dataBreaks:[],dataVelocity:[],dataVelocityOld:[],dataCallDuration:[]}},mounted:function(){this.$store.commit("setTitle","Configuração"),this.loadBreaks(),this.loadVelocity(),this.loadDataVelocityOld(),this.loadCallDuration()},methods:{loadCallDuration:function(){var e=this;return Object(l["a"])(Object(s["a"])().mark((function a(){var t,r;return Object(s["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t=location.origin.replace(/:\d+$/,":3333"),a.next=4,v.a.get("".concat(t,"/call-duration-config"));case 4:r=a.sent,e.dataCallDuration=r.data.map((function(e){return Object(i["a"])(Object(i["a"])({},e),{},{limitForType:e.limitForType.replace("tempoEspera","")})})),a.next=11;break;case 8:a.prev=8,a.t0=a["catch"](0),console.error("Erro ao carregar dados:",a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})))()},saveCallDuration:function(){var e=this;return Object(l["a"])(Object(s["a"])().mark((function a(){var t,r,c,n,i,l,u,d;return Object(s["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:a.prev=0,t=location.origin.replace(/:\d+$/,":3333"),r=Object(o["a"])(e.dataCallDuration),a.prev=3,r.s();case 5:if((c=r.n()).done){a.next=13;break}return n=c.value,i=n.id,l=n.limitForType,u=n.limit,d="tempoEspera".concat(l),a.next=11,v.a.put("".concat(t,"/call-duration-config/").concat(i),{limit:Number(u),limitForType:d});case 11:a.next=5;break;case 13:a.next=18;break;case 15:a.prev=15,a.t0=a["catch"](3),r.e(a.t0);case 18:return a.prev=18,r.f(),a.finish(18);case 21:b["a"].emit("callDuration","send call duration"),e.$refs.successModalCallDuration.show(),a.next=28;break;case 25:a.prev=25,a.t1=a["catch"](0),console.error("Erro ao salvar dados:",a.t1);case 28:case"end":return a.stop()}}),a,null,[[0,25],[3,15,18,21]])})))()},loadVelocity:function(){var e=this;return Object(l["a"])(Object(s["a"])().mark((function a(){var t,r;return Object(s["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t=location.origin.replace(/:\d+$/,":3333"),console.log(t),a.next=5,v.a.get("".concat(t,"/dashboard-velocity"));case 5:r=a.sent,e.dataVelocity=r.data,a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](0),console.error("Erro ao carregar dados:",a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})))()},saveAllVelocity:function(){var e=this;return Object(l["a"])(Object(s["a"])().mark((function a(){var t,r,c,n,i,l,u,d;return Object(s["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:a.prev=0,t=location.origin.replace(/:\d+$/,":3333"),r=Object(o["a"])(e.dataVelocity),a.prev=3,r.s();case 5:if((c=r.n()).done){a.next=14;break}if(n=c.value,i=n.id,l=n.title,u=n.value,d=e.getOldValue(i),d===u){a.next=12;break}return a.next=12,v.a.put("".concat(t,"/dashboard-velocity/").concat(i),{value:Number(u),title:l});case 12:a.next=5;break;case 14:a.next=19;break;case 16:a.prev=16,a.t0=a["catch"](3),r.e(a.t0);case 19:return a.prev=19,r.f(),a.finish(19);case 22:e.$refs.successModalVelocity.show(),a.next=28;break;case 25:a.prev=25,a.t1=a["catch"](0),console.error("Erro ao salvar dados:",a.t1);case 28:case"end":return a.stop()}}),a,null,[[0,25],[3,16,19,22]])})))()},loadDataVelocityOld:function(){var e=this;return Object(l["a"])(Object(s["a"])().mark((function a(){var t,r;return Object(s["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t=location.origin.replace(/:\d+$/,":3333"),a.next=4,v.a.get("".concat(t,"/dashboard-velocity"));case 4:r=a.sent,e.dataVelocityOld=r.data,a.next=11;break;case 8:a.prev=8,a.t0=a["catch"](0),console.error("Erro ao carregar dados antigos:",a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})))()},getOldValue:function(e){var a=this.dataVelocityOld.find((function(a){return a.id===e}));return a?a.value:null},loadBreaks:function(){var e=this;return Object(l["a"])(Object(s["a"])().mark((function a(){var t,r,c,n;return Object(s["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t=location.origin.replace(/:\d+$/,":3333"),a.next=4,v.a.get("".concat(t,"/breaks"));case 4:r=a.sent,c=r.data.filter((function(e){return"Hold"!==e.reason})),n=c.map((function(e){var a=e.time||0;"string"===typeof a&&8===a.length&&(a=a.slice(0,-2));var t=Math.floor(a/3600),r=a%3600,c=Math.floor(r/60),n="".concat(String(t).padStart(2,"0"),":").concat(String(c).padStart(2,"0"));return Object(i["a"])(Object(i["a"])({},e),{},{time:n,editedTime:n})})),e.dataBreaks=n,a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](0),console.error("Erro ao carregar dados:",a.t0);case 13:case"end":return a.stop()}}),a,null,[[0,10]])})))()},saveAllBreaks:function(){var e=this;return Object(l["a"])(Object(s["a"])().mark((function a(){var t,r,c,n,i,l,u,d;return Object(s["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:a.prev=0,t=location.origin.replace(/:\d+$/,":3333"),r=Object(o["a"])(e.dataBreaks),a.prev=3,r.s();case 5:if((c=r.n()).done){a.next=13;break}return n=c.value,i=n.id,l=n.time,u=n.reason,d=e.timeToSeconds(l),a.next=11,v.a.put("".concat(t,"/breaks/").concat(i),{reason:u,time:d});case 11:a.next=5;break;case 13:a.next=18;break;case 15:a.prev=15,a.t0=a["catch"](3),r.e(a.t0);case 18:return a.prev=18,r.f(),a.finish(18);case 21:e.$refs.successModalBreaks.show(),a.next=27;break;case 24:a.prev=24,a.t1=a["catch"](0),console.error("Erro ao salvar dados:",a.t1);case 27:case"end":return a.stop()}}),a,null,[[0,24],[3,15,18,21]])})))()},timeToSeconds:function(e){var a=e.split(":").map(Number),t=Object(n["a"])(a,2),r=t[0],c=t[1],o=3600*r+60*c;return o}}},p=f,m=(t("3b98"),t("2877")),h=Object(m["a"])(p,r,c,!1,null,"4e1d5c82",null);a["default"]=h.exports},f7b5:function(e,a,t){}}]);
//# sourceMappingURL=chunk-57e4bf1a.7c21df42.js.map