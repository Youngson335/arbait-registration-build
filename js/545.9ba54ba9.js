"use strict";(self["webpackChunkarbait_app"]=self["webpackChunkarbait_app"]||[]).push([[545],{265:function(e,t,n){n.r(t),n.d(t,{default:function(){return me}});var a=n(635),u=n(641),l=n(33),r=n.p+"img/registration-icon.c584c983.png",i=n(220),s=n(953),o=n(80),c=n(751),v={mounted:function(e,t){var n=!1;function a(t){if(t instanceof InputEvent||t instanceof FocusEvent||t instanceof KeyboardEvent){var n=e.selectionStart||0,a=e.value,l=e.value.replace(/\D/g,""),r="+7 (";l.length>1&&(r+=l.slice(1,4),l.length>4&&(r+=") "+l.slice(4,7),l.length>7&&(r+="-"+l.slice(7,9),l.length>9&&(r+="-"+l.slice(9,11))))),"blur"===t.type?l.length<11&&(e.value=""):e.value=r;var i=n;i=t instanceof InputEvent&&"deleteContentBackward"===t.inputType?Math.max(n,4):r.length,e.value!==a&&e.setSelectionRange(i,i),u(e)}}function u(e){var t=e.value.replace(/\D/g,""),n=11===t.length&&t.startsWith("7");n?e.classList.remove("invalid-input"):e.classList.add("invalid-input")}e.addEventListener("input",a),e.addEventListener("focus",(function(){n||(e.value="+7 (",n=!0),a(new Event("focus"))})),e.addEventListener("blur",a)}},p={mounted:function(e,t){var n=t.value||"focused";e.addEventListener("focus",(function(){e.classList.add(n)})),e.addEventListener("blur",(function(){e.classList.remove(n)}))},unmounted:function(e,t){var n=t.value||"focused";e.removeEventListener("focus",(function(){e.classList.add(n)})),e.removeEventListener("blur",(function(){e.classList.remove(n)}))}},d={mounted:function(e,t){e.addEventListener("input",(function(t){var n=t.target,a=n.value.replace(/\s+/g,"");a.length>16&&(a=a.slice(0,16)),a=a.replace(/(\d{4})/g,"$1 ").trim(),n.value=a,16===a.replace(/\s+/g,"").length?e.classList.remove("invalid-input"):e.classList.add("invalid-input")})),e.addEventListener("blur",(function(t){var n=t.target,a=n.value.replace(/\s+/g,"");16!==a.length?e.classList.add("invalid-input"):e.classList.remove("invalid-input")}))}},f=["placeholder"],m=["placeholder"],_={},h=(0,u.pM)((0,a.Cl)((0,a.Cl)({},_),{__name:"VueNumberInput",props:{value:{type:Object}},emits:["input"],setup:function(e,t){var n=t.emit,a=n,l=e,r=(0,s.KR)(""),i=11,o=(0,u.EW)((function(){if(l.value)return l.value.type})),_=(0,u.EW)((function(){if(l.value)return l.value.placeholder||"число"}));function h(e){var t="+7 (___) ___-__-__",n=t.replace(/\D/g,""),a=e.replace(/\D/g,""),u=0,l=t.replace(/[_\d]/g,(function(e){return u<a.length?a.charAt(u++)||n.charAt(u):e}));return u=l.indexOf("_"),-1!==u?(u<5&&(u=3),l.slice(0,u)):l}var b=function(){var e=r.value.replace(/\D/g,"").slice(0,i);a("input",e)};return(0,u.sV)((function(){if(l.value&&null!==l.value)if("phone"===l.value.type||"whts"===l.value.type){var e=h(String(l.value.value));r.value=e}else r.value=l.value.value})),(0,u.wB)((function(){return l.value}),(function(e){if(null!==e){var t=h(String(e));r.value=t}})),function(e,t){return"phone"===o.value||"whts"===o.value?(0,u.bo)(((0,u.uX)(),(0,u.CE)("input",{key:0,class:"input__phone",type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return r.value=e}),placeholder:_.value,onInput:b},null,40,f)),[[(0,s.R1)(v)],[(0,s.R1)(p)],[c.Jo,r.value]]):"card"===o.value?(0,u.bo)(((0,u.uX)(),(0,u.CE)("input",{key:1,class:"input__phone",type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.value=e}),placeholder:_.value,onInput:b},null,40,m)),[[(0,s.R1)(d)],[(0,s.R1)(p)],[c.Jo,r.value]]):(0,u.Q3)("",!0)}}})),b=n(262);const g=(0,b.A)(h,[["__scopeId","data-v-0ba1b169"]]);var y=g;const C={class:"vue-form"};function k(e,t,n,a,l,r){return(0,u.uX)(),(0,u.CE)("form",C,[(0,u.RG)(e.$slots,"default")])}var L={};const E=(0,b.A)(L,[["render",k]]);var w=E,x=["placeholder","disabled"],R={},V=(0,u.pM)((0,a.Cl)((0,a.Cl)({},R),{__name:"VueTextInput",props:{textParams:{type:Object,required:!0},propertyName:{type:String,required:!1},disabled:{type:Boolean,required:!1}},emits:["input"],setup:function(e,t){var n=t.emit,a=e,l=n,r=(0,u.EW)((function(){return a.textParams?a.textParams.placeholder:"Текст"})),i=(0,s.KR)(""),o=function(){l("input",{eventValue:i.value,eventType:a.textParams.type,eventName:a.propertyName,eventValid:i.value.length>0})};return a.textParams.value&&(i.value=a.textParams.value),function(e,t){return(0,u.bo)(((0,u.uX)(),(0,u.CE)("input",{class:"input__text",type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return i.value=e}),placeholder:r.value,onInput:o,onFocus:o,disabled:a.disabled},null,40,x)),[[c.Jo,i.value],[(0,s.R1)(p)]])}}}));const S=(0,b.A)(V,[["__scopeId","data-v-fd3acc76"]]);var I=S,F={},P=(0,u.pM)((0,a.Cl)((0,a.Cl)({},F),{__name:"VueDateInput",emits:["input"],setup:function(e,t){var n=t.emit,a=n,l=function(e){var t=e.target.value,n=t.split("-"),u=n[0],l=n[1],r=n[2],i="".concat(r,".").concat(l,".").concat(u);a("input",i)};return function(e,t){return(0,u.uX)(),(0,u.CE)("input",{class:"input__date",type:"date",onInput:t[0]||(t[0]=function(e){return l(e)})},null,32)}}}));const q=P;var K=q,X={key:0,class:"modal-overlay"},A={class:"modal-content"},M=(0,u.pM)({__name:"VueModal",props:{value:{}},setup:function(e,t){var n=t.expose,l=e,r=(0,i.rd)(),o=(0,s.KR)(!0),c=function(){o.value=!0},v=function(){o.value=!1};(0,u.wB)((function(){return l.value}),(function(e){l.value[0].isSwitch?(v(),p(!0)):p(!1)}),{deep:!0}),l.value[0].isSwitch&&v();var p=function(e){r.push({query:(0,a.Cl)((0,a.Cl)({},r.currentRoute.value.query),{root:e.toString()})})};return n({openModal:c,closeModal:v}),function(e,t){return o.value?((0,u.uX)(),(0,u.CE)("div",X,[(0,u.Lk)("div",A,[(0,u.RG)(e.$slots,"default")])])):(0,u.Q3)("",!0)}}});const N=(0,b.A)(M,[["__scopeId","data-v-337580ff"]]);var W=N,D={class:"switcher"},Q=["onClick"],B={},O=(0,u.pM)((0,a.Cl)((0,a.Cl)({},B),{__name:"VueSwitcher",props:{value:{}},emits:["updateValue"],setup:function(e,t){var n=t.emit,r=e,i=n,s=function(e){var t=r.value.map((function(t){return(0,a.Cl)((0,a.Cl)({},t),{isSwitch:t.id===e})}));i("updateValue",t)};return function(e,t){return(0,u.uX)(),(0,u.CE)("div",D,[((0,u.uX)(!0),(0,u.CE)(u.FK,null,(0,u.pI)(r.value,(function(e){return(0,u.uX)(),(0,u.CE)("label",{key:e.id,class:(0,l.C4)(["switcher__item",{selected:!0===e.isSwitch}]),onClick:function(t){return s(e.id)}},(0,l.v_)(e.value),11,Q)})),128))])}}}));const T=O;var j=T;const U={class:"widget"};function $(e,t){return(0,u.uX)(),(0,u.CE)("div",U,[(0,u.RG)(e.$slots,"default",{},void 0,!0)])}const z={},G=(0,b.A)(z,[["render",$],["__scopeId","data-v-2cc6f4eb"]]);var J=G,H=n(397),Y={class:"button__text"},Z=(0,u.pM)({__name:"VueButtonText",props:{title:String},setup:function(e){return function(t,n){return(0,u.uX)(),(0,u.CE)("button",Y,(0,l.v_)(e.title),1)}}});const ee=Z;var te=ee,ne={class:"registration-modal"},ae={key:0,class:"registration-page"},ue={class:"registration-page__title"},le={class:"form--number__input"},re={class:"form--number__input"},ie={class:"form--text__label"},se={class:"form--date__input"},oe={class:"form--text__input"},ce={class:"form--date__label-error",ref:"warningLabel"},ve={class:"registration-page__widget"},pe={class:"widget__offer"},de=(0,u.pM)({__name:"RegistrationPage",setup:function(e){var t={title:"Регистрация",tag:"h1",size:45,dimension:"px"},n={title:"Вы проживаете в городе Владивосток/Пригород?",tag:"h1",size:25,dimension:"px"},c={title:"Мы работам только во Владивостоке и в пригороде!",tag:"h1",size:20,dimension:"px"},v=(0,s.KR)([{id:1,value:"Да",isSwitch:!1},{id:2,value:"Нет",isSwitch:!1}]),p=(0,i.rd)(),d=(0,i.lq)(),f=function(e,t){var n;p.push({query:(0,a.Cl)((0,a.Cl)({},p.currentRoute.value.query),(n={},n[e]=t,n))})},m=(0,s.KR)(!1),_=function(e){m.value=e,p.push({query:(0,a.Cl)((0,a.Cl)({},p.currentRoute.value.query),{ch:m.value.toString()})})},h={userPhone:{value:null,isValid:(0,s.KR)(null),type:"phone",setQueryParams:f,placeholder:"+7 (###)-###-##-##"},userWhatsapp:{value:null,isValid:(0,s.KR)(null),type:"whts",setQueryParams:f,placeholder:"+7 (###)-###-##-##"},userName:{value:"",isValid:(0,s.KR)(null),type:"name",placeholder:"Имя"},userSerName:{value:"",isValid:(0,s.KR)(null),type:"sername",placeholder:"Фамилия"},userPatronymic:{value:"",isValid:(0,s.KR)(null),type:"patr",placeholder:"Отчество"},userDate:{value:"",isValid:(0,s.KR)(null),type:"date",placeholder:"Отчество"},userCounter:{value:"Владивосток, пригород"}},b=[h.userName,h.userSerName,h.userPatronymic],g=function(e){var t=["userName","userSerName","userPatronymic"];return t[e]},C=function(e,t,n){t.value=e,t.setQueryParams&&t.setQueryParams(n,t.value)},k=function(e){var t=e.eventValue,n=e.eventType,a=e.eventValid,u=e.eventName;h[u].value=t,h[u].isValid=a,f(n,t)},L=function(e,t){Object.keys(e).forEach((function(n){var a=Object.keys(t).find((function(e){return t[e].type===n}));a&&(t[a].value=e[n])}))},E=function(e){p.push({path:e,query:(0,a.Cl)((0,a.Cl)({},p.currentRoute.value.query),{reg:"true"})})};if(d.query){var x=d.query;"true"===x.root?v.value[0].isSwitch=!0:"false"===x.root&&(v.value[0].isSwitch=!1),L(x,h),d.query.ch&&("true"===d.query.ch?m.value=!0:"false"===d.query.ch&&(m.value=!1))}return function(e,a){return(0,u.uX)(),(0,u.CE)(u.FK,null,[(0,u.Lk)("div",ne,[(0,u.bF)(W,{value:v.value},{default:(0,u.k6)((function(){return[(0,u.bF)(o.A,{"title-params":n}),(0,u.bF)(j,{value:v.value,onUpdateValue:a[0]||(a[0]=function(e){return v.value=e})},null,8,["value"]),v.value[1].isSwitch?((0,u.uX)(),(0,u.Wv)(o.A,{key:0,"title-params":c})):(0,u.Q3)("",!0)]})),_:1},8,["value"])]),v.value[0].isSwitch?((0,u.uX)(),(0,u.CE)("div",ae,[(0,u.Lk)("div",ue,[(0,u.bF)(o.A,{"title-params":t}),a[7]||(a[7]=(0,u.Lk)("img",{class:"registration-page__title__image",src:r,alt:""},null,-1))]),(0,u.bF)(w,{class:"registration-page__form"},{default:(0,u.k6)((function(){return[(0,u.Lk)("div",le,[a[8]||(a[8]=(0,u.Lk)("label",{class:"form--number__label"},"Номер телефона",-1)),(0,u.bF)(y,{value:h.userPhone,"number-params":h.userPhone,onInput:a[1]||(a[1]=function(e){return C(e,h.userPhone,"phone")})},null,8,["value","number-params"])]),(0,u.Lk)("div",re,[a[9]||(a[9]=(0,u.Lk)("label",{class:"form--number__label"},"Номер whatsapp",-1)),(0,u.bF)(y,{value:h.userWhatsapp,onInput:a[2]||(a[2]=function(e){return C(e,h.userWhatsapp,"whts")}),"number-params":h.userWhatsapp},null,8,["value","number-params"])]),((0,u.uX)(),(0,u.CE)(u.FK,null,(0,u.pI)(b,(function(e,t){return(0,u.Lk)("div",{class:"form--text__input",key:t},[(0,u.Lk)("label",ie,(0,l.v_)(b[t].placeholder),1),(0,u.bF)(I,{onInput:a[3]||(a[3]=function(e){return k(e)}),"text-params":b[t],"property-name":g(t)},null,8,["text-params","property-name"])])})),64)),(0,u.Lk)("div",se,[a[10]||(a[10]=(0,u.Lk)("label",{class:"form--date__label"},"Дата рождения",-1)),(0,u.bF)(K,{onInput:a[4]||(a[4]=function(e){return h.userDate.value=e})})]),(0,u.Lk)("div",oe,[a[11]||(a[11]=(0,u.Lk)("label",{class:"form--counter__label"},"Город",-1)),(0,u.bF)(I,{class:"form--component__input","text-params":h.userCounter,disabled:!0},null,8,["text-params"]),(0,u.Lk)("label",ce,"На данный момент мы работаем только в этом регионе!",512)])]})),_:1}),(0,u.Lk)("div",ve,[(0,u.bF)(J,{class:"widget"},{default:(0,u.k6)((function(){return[(0,u.Lk)("div",pe,[(0,u.Lk)("p",null,[a[12]||(a[12]=(0,u.eW)("С ")),(0,u.Lk)("span",{onClick:a[5]||(a[5]=function(e){return E("offer")})},"офертой"),a[13]||(a[13]=(0,u.eW)(" ознакомлен"))]),(0,u.bF)(H.A,{value:m.value,onChange:a[6]||(a[6]=function(e){return _(e)})},null,8,["value"])]),(0,u.bF)(te,{title:"Отправить"})]})),_:1})])])):(0,u.Q3)("",!0)],64)}}});const fe=de;var me=fe}}]);
//# sourceMappingURL=545.9ba54ba9.js.map