(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e35fead"],{"35f4":function(e,a,t){},"8a58":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("b-card",[t("h1",[e._v("Alerta de Pausas")]),e._v(" "),t("b-icon",{attrs:{icon:"exclamation-triangle-fill",variant:"warning"}}),e._v(" "),t("Page",{staticClass:"flex-container"},[t("b-form",{staticClass:"flex-container"},e._l(e.dataBreaks,(function(a,r){return t("b-form-row",{key:r},[t("b-form-group",{staticClass:"col-md-auto flex-container",attrs:{label:""+a.reason}},[t("b-form-timepicker",{attrs:{size:"md"},model:{value:a.time,callback:function(t){e.$set(a,"time",t)},expression:"breakItem.time"}})],1)],1)})),1),e._v(" "),t("div",{staticClass:"center-button"},[t("b-button",{on:{click:e.saveAllBreaks}},[e._v("Salvar")])],1)],1),e._v(" "),t("b-modal",{ref:"successModalBreaks",attrs:{title:"Sucesso ao salvar","hide-footer":""}},[t("p",[e._v("Os dados foram salvos com sucesso!")])])],1),e._v(" "),t("b-card",[t("h1",[e._v("Termômetro")]),e._v(" "),t("Page",{staticClass:"flex-container"},[t("b-form",{staticClass:"flex-container"},e._l(e.dataVelocity,(function(a,r){return t("b-form-row",{key:r},[t("b-form-group",{staticClass:"col-md-auto flex-container",attrs:{label:""+a.title}},[t("b-form-input",{attrs:{type:"number",size:"md",min:"0",max:"100"},model:{value:a.value,callback:function(t){e.$set(a,"value",t)},expression:"Item.value"}})],1)],1)})),1),e._v(" "),t("div",{staticClass:"center-button"},[t("b-button",{on:{click:e.saveAllVelocity}},[e._v("Salvar")])],1)],1),e._v(" "),t("b-modal",{ref:"successModalVelocity",attrs:{title:"Sucesso ao salvar","hide-footer":""}},[t("p",[e._v("Os dados foram salvos com sucesso!")])])],1),e._v(" "),t("b-card",[t("h1",[e._v("Tempo de espera (s)")]),e._v(" "),t("Page",{staticClass:"flex-container"},[t("b-form",{staticClass:"flex-container"},e._l(e.dataCallDuration,(function(a,r){return t("b-form-row",{key:r},[t("b-form-group",{staticClass:"col-md-auto flex-container",attrs:{label:""+a.limitForType}},[t("b-form-input",{attrs:{type:"number",size:"md"},model:{value:a.limit,callback:function(t){e.$set(a,"limit",t)},expression:"item.limit"}})],1)],1)})),1),e._v(" "),t("div",{staticClass:"center-button"},[t("b-button",{on:{click:e.saveCallDuration}},[e._v("Salvar")])],1)],1),e._v(" "),t("b-modal",{ref:"successModalCallDuration",attrs:{title:"Sucesso ao salvar","hide-footer":""}},[t("p",[e._v("Os dados foram salvos com sucesso!")])])],1)],1)},c=[],n=t("3835"),s=t("b85c"),o=t("c7eb"),l=t("5530"),i=t("1da1"),u=(t("99af"),t("4de4"),t("7db0"),t("d81d"),t("fb6a"),t("a9e3"),t("d3b7"),t("ac1f"),t("466d"),t("4d90"),t("5319"),t("9973")),d=t("bc3a"),v=t.n(d),p=t("6c23"),f={name:"break-alert",components:{Page:u["a"]},metaInfo:{title:"Configuração"},data:function(){return{dataBreaks:[],dataVelocity:[],dataVelocityOld:[],dataCallDuration:[]}},mounted:function(){this.$store.commit("setTitle","Configuração"),this.loadBreaks(),this.loadVelocity(),this.loadDataVelocityOld(),this.loadCallDuration()},methods:{loadCallDuration:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function a(){var t,r,c;return Object(o["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t=t.replace(/^http(s)?:\/\//,"wss://"),r=t.match(/:\d+$/),r?t=t.replace(/:\d+$/,":3333"):t+=":3333",a.next=6,v.a.get("".concat(t,"/call-duration-config"));case 6:c=a.sent,e.dataCallDuration=c.data.map((function(e){return Object(l["a"])(Object(l["a"])({},e),{},{limitForType:e.limitForType.replace("tempoEspera","")})})),a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](0),console.error("Erro ao carregar dados:",a.t0);case 13:case"end":return a.stop()}}),a,null,[[0,10]])})))()},saveCallDuration:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function a(){var t,r,c,n,l,i,u,d,f;return Object(o["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:a.prev=0,t=t.replace(/^http(s)?:\/\//,"wss://"),r=t.match(/:\d+$/),r?t=t.replace(/:\d+$/,":3333"):t+=":3333",c=Object(s["a"])(e.dataCallDuration),a.prev=5,c.s();case 7:if((n=c.n()).done){a.next=15;break}return l=n.value,i=l.id,u=l.limitForType,d=l.limit,f="tempoEspera".concat(u),a.next=13,v.a.put("".concat(t,"/call-duration-config/").concat(i),{limit:Number(d),limitForType:f});case 13:a.next=7;break;case 15:a.next=20;break;case 17:a.prev=17,a.t0=a["catch"](5),c.e(a.t0);case 20:return a.prev=20,c.f(),a.finish(20);case 23:p["a"].emit("callDuration","send call duration"),e.$refs.successModalCallDuration.show(),a.next=30;break;case 27:a.prev=27,a.t1=a["catch"](0),console.error("Erro ao salvar dados:",a.t1);case 30:case"end":return a.stop()}}),a,null,[[0,27],[5,17,20,23]])})))()},loadVelocity:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function a(){var t,r,c;return Object(o["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t=t.replace(/^http(s)?:\/\//,"wss://"),r=t.match(/:\d+$/),r?t=t.replace(/:\d+$/,":3333"):t+=":3333",console.log(t),a.next=7,v.a.get("".concat(t,"/dashboard-velocity"));case 7:c=a.sent,e.dataVelocity=c.data,a.next=14;break;case 11:a.prev=11,a.t0=a["catch"](0),console.error("Erro ao carregar dados:",a.t0);case 14:case"end":return a.stop()}}),a,null,[[0,11]])})))()},saveAllVelocity:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function a(){var t,r,c,n,l,i,u,d,p;return Object(o["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:a.prev=0,t=t.replace(/^http(s)?:\/\//,"wss://"),r=t.match(/:\d+$/),r?t=t.replace(/:\d+$/,":3333"):t+=":3333",c=Object(s["a"])(e.dataVelocity),a.prev=5,c.s();case 7:if((n=c.n()).done){a.next=16;break}if(l=n.value,i=l.id,u=l.title,d=l.value,p=e.getOldValue(i),p===d){a.next=14;break}return a.next=14,v.a.put("".concat(t,"/dashboard-velocity/").concat(i),{value:Number(d),title:u});case 14:a.next=7;break;case 16:a.next=21;break;case 18:a.prev=18,a.t0=a["catch"](5),c.e(a.t0);case 21:return a.prev=21,c.f(),a.finish(21);case 24:e.$refs.successModalVelocity.show(),a.next=30;break;case 27:a.prev=27,a.t1=a["catch"](0),console.error("Erro ao salvar dados:",a.t1);case 30:case"end":return a.stop()}}),a,null,[[0,27],[5,18,21,24]])})))()},loadDataVelocityOld:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function a(){var t,r,c;return Object(o["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t=t.replace(/^http(s)?:\/\//,"wss://"),r=t.match(/:\d+$/),r?t=t.replace(/:\d+$/,":3333"):t+=":3333",a.next=6,v.a.get("".concat(t,"/dashboard-velocity"));case 6:c=a.sent,e.dataVelocityOld=c.data,a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](0),console.error("Erro ao carregar dados antigos:",a.t0);case 13:case"end":return a.stop()}}),a,null,[[0,10]])})))()},getOldValue:function(e){var a=this.dataVelocityOld.find((function(a){return a.id===e}));return a?a.value:null},loadBreaks:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function a(){var t,r,c,n,s;return Object(o["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t=t.replace(/^http(s)?:\/\//,"wss://"),r=t.match(/:\d+$/),r?t=t.replace(/:\d+$/,":3333"):t+=":3333",a.next=6,v.a.get("".concat(t,"/breaks"));case 6:c=a.sent,n=c.data.filter((function(e){return"Hold"!==e.reason})),s=n.map((function(e){var a=e.time||0;"string"===typeof a&&8===a.length&&(a=a.slice(0,-2));var t=Math.floor(a/3600),r=a%3600,c=Math.floor(r/60),n="".concat(String(t).padStart(2,"0"),":").concat(String(c).padStart(2,"0"));return Object(l["a"])(Object(l["a"])({},e),{},{time:n,editedTime:n})})),e.dataBreaks=s,a.next=15;break;case 12:a.prev=12,a.t0=a["catch"](0),console.error("Erro ao carregar dados:",a.t0);case 15:case"end":return a.stop()}}),a,null,[[0,12]])})))()},saveAllBreaks:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function a(){var t,r,c,n,l,i,u,d,p;return Object(o["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:a.prev=0,t=t.replace(/^http(s)?:\/\//,"wss://"),r=t.match(/:\d+$/),r?t=t.replace(/:\d+$/,":3333"):t+=":3333",c=Object(s["a"])(e.dataBreaks),a.prev=5,c.s();case 7:if((n=c.n()).done){a.next=15;break}return l=n.value,i=l.id,u=l.time,d=l.reason,p=e.timeToSeconds(u),a.next=13,v.a.put("".concat(t,"/breaks/").concat(i),{reason:d,time:p});case 13:a.next=7;break;case 15:a.next=20;break;case 17:a.prev=17,a.t0=a["catch"](5),c.e(a.t0);case 20:return a.prev=20,c.f(),a.finish(20);case 23:e.$refs.successModalBreaks.show(),a.next=29;break;case 26:a.prev=26,a.t1=a["catch"](0),console.error("Erro ao salvar dados:",a.t1);case 29:case"end":return a.stop()}}),a,null,[[0,26],[5,17,20,23]])})))()},timeToSeconds:function(e){var a=e.split(":").map(Number),t=Object(n["a"])(a,2),r=t[0],c=t[1],s=3600*r+60*c;return s}}},b=f,m=(t("df86"),t("2877")),h=Object(m["a"])(b,r,c,!1,null,"4dc33d37",null);a["default"]=h.exports},df86:function(e,a,t){"use strict";t("35f4")}}]);
//# sourceMappingURL=chunk-6e35fead.d1c5ea27.js.map