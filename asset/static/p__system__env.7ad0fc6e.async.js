"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1180],{88484:function(z,T,e){e.d(T,{Z:function(){return h}});var g=e(87462),c=e(67294),R={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"upload",theme:"outlined"},D=R,M=e(84089),F=function(t,I){return c.createElement(M.Z,(0,g.Z)({},t,{ref:I,icon:D}))},P=c.forwardRef(F),h=P},52688:function(z,T,e){var g=e(1413),c=e(45987),R=e(67294),D=e(1961),M=e(85893),F=["fieldProps","unCheckedChildren","checkedChildren","proFieldProps"],P=R.forwardRef(function(h,m){var t=h.fieldProps,I=h.unCheckedChildren,S=h.checkedChildren,Z=h.proFieldProps,x=(0,c.Z)(h,F);return(0,M.jsx)(D.Z,(0,g.Z)({valueType:"switch",fieldProps:(0,g.Z)({unCheckedChildren:I,checkedChildren:S},t),ref:m,valuePropName:"checked",proFieldProps:Z,filedConfig:{valuePropName:"checked",ignoreWidth:!0,customLightMode:!0}},x))});T.Z=P},5966:function(z,T,e){var g=e(97685),c=e(1413),R=e(45987),D=e(21770),M=e(72723),F=e(55241),P=e(97435),h=e(67294),m=e(1961),t=e(85893),I=["fieldProps","proFieldProps"],S=["fieldProps","proFieldProps"],Z="text",x=function(n){var u=n.fieldProps,E=n.proFieldProps,f=(0,R.Z)(n,I);return(0,t.jsx)(m.Z,(0,c.Z)({valueType:Z,fieldProps:u,filedConfig:{valueType:Z},proFieldProps:E},f))},j=function(n){var u=(0,D.Z)(n.open||!1,{value:n.open,onChange:n.onOpenChange}),E=(0,g.Z)(u,2),f=E[0],K=E[1];return(0,t.jsx)(M.Z.Item,{shouldUpdate:!0,noStyle:!0,children:function(w){var U,r=w.getFieldValue(n.name||[]);return(0,t.jsx)(F.Z,(0,c.Z)((0,c.Z)({getPopupContainer:function(a){return a&&a.parentNode?a.parentNode:a},onOpenChange:function(a){return K(a)},content:(0,t.jsxs)("div",{style:{padding:"4px 0"},children:[(U=n.statusRender)===null||U===void 0?void 0:U.call(n,r),n.strengthText?(0,t.jsx)("div",{style:{marginTop:10},children:(0,t.jsx)("span",{children:n.strengthText})}):null]}),overlayStyle:{width:240},placement:"rightTop"},n.popoverProps),{},{open:f,children:n.children}))}})},b=function(n){var u=n.fieldProps,E=n.proFieldProps,f=(0,R.Z)(n,S),K=(0,h.useState)(!1),V=(0,g.Z)(K,2),w=V[0],U=V[1];return u!=null&&u.statusRender&&f.name?(0,t.jsx)(j,{name:f.name,statusRender:u==null?void 0:u.statusRender,popoverProps:u==null?void 0:u.popoverProps,strengthText:u==null?void 0:u.strengthText,open:w,onOpenChange:U,children:(0,t.jsx)("div",{children:(0,t.jsx)(m.Z,(0,c.Z)({valueType:"password",fieldProps:(0,c.Z)((0,c.Z)({},(0,P.Z)(u,["statusRender","popoverProps","strengthText"])),{},{onBlur:function(s){var a;u==null||(a=u.onBlur)===null||a===void 0||a.call(u,s),U(!1)},onClick:function(s){var a;u==null||(a=u.onClick)===null||a===void 0||a.call(u,s),U(!0)}}),proFieldProps:E,filedConfig:{valueType:Z}},f))})}):(0,t.jsx)(m.Z,(0,c.Z)({valueType:"password",fieldProps:u,proFieldProps:E,filedConfig:{valueType:Z}},f))},W=x;W.Password=b,W.displayName="ProFormComponent",T.Z=W},80821:function(z,T,e){e.d(T,{Z:function(){return m}});var g=e(5574),c=e.n(g),R=e(24963),D=e(86738),M=e(14726),F=e(83062),P=e(67294),h=e(85893);function m(t){var I=(0,P.useState)(!1),S=c()(I,2),Z=S[0],x=S[1],j=(0,P.useContext)(R.Z),b=j.lang,W=j.notice,A=j.message,n=function(){x(!0),t.action().then(function(E){if(x(!1),typeof t.onSuccess=="function"&&t.onSuccess(E),t.messageSuccess){var f="";typeof t.messageSuccess=="function"?f=t.messageSuccess(E):f=t.messageSuccess,f.indexOf(".")>-1&&(f=b(f)),t.asynced?A.info(f):A.success(f)}}).catch(function(E){x(!1),typeof t.onError=="function"&&t.onError(E)})};return t.confirm?(0,h.jsx)(D.Z,{style:{width:500},title:t.confirmTitle?t.confirmTitle:b("notification.title.tip"),description:t.confirm,onConfirm:n,okText:"Yes",cancelText:"No",children:(0,h.jsx)(M.ZP,{disabled:t.disabled,icon:t.icon,loading:Z,danger:t.danger,type:t.type,children:t.children})}):(0,h.jsx)(F.Z,{title:t.tips,children:(0,h.jsx)(M.ZP,{disabled:t.disabled,icon:t.icon,loading:Z,onClick:n,danger:t.danger,type:t.type,children:t.children})})}},89063:function(z,T,e){e.d(T,{Z:function(){return h}});var g=e(24963),c=e(88484),R=e(62370),D=e(31418),M=e(14726),F=e(67294),P=e(85893);function h(m){var t=(0,F.useContext)(g.Z),I=t.message,S=t.notice,Z=t.lang,x=(0,F.useRef)(null),j=D.Z.useApp(),b=function(){x.current&&(x.current.click(),x.current.onchange=function(A){if(!A||!A.target)return"";var n=new FileReader;n.onload=function(E){var f,K,V=(f=E.target)===null||f===void 0?void 0:f.result;if(m.onLoad)try{m.onLoad&&m.onLoad(V)}catch(w){S.error(w);return}typeof m.onImport=="function"&&(I.success("\u6210\u529F\u5BFC\u5165 ".concat(m.title)),m.onImport(V)),(K=x.current)!==null&&K!==void 0&&K.value&&(x.current.value="")};var u=A.target;if(u.files)try{n.readAsText(u.files[0])}catch(E){S.error("\u5BFC\u5165\u6587\u4EF6\u5FC5\u987B\u662F\u6587\u672C\u7C7B\u578B")}})};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(R.Z,{children:(0,P.jsx)(M.ZP,{icon:(0,P.jsx)(c.Z,{}),block:!0,onClick:b,children:m.title})}),(0,P.jsx)("input",{style:{display:"none"},type:"file",ref:x,name:"importFileInput"})]})}},24963:function(z,T,e){var g=e(67294),c=(0,g.createContext)({});T.Z=c},53893:function(z,T,e){e.r(T),e.d(T,{default:function(){return a}});var g=e(15009),c=e.n(g),R=e(99289),D=e.n(R),M=e(5574),F=e.n(M),P=e(80821),h=e(184),m=e(5966),t=e(52688),I=e(97462),S=e(62370),Z=e(14726),x=e(86250),j=e(67294),b=e(91845),W=e(87662),A=e(89063),n=e(85893),u=(0,j.forwardRef)(function(l,C){var H;(0,j.useImperativeHandle)(C,function(){return{edit:function(o){var d;(d=L.current)===null||d===void 0||d.setFieldsValue({name:o.name,title:o.title,address:o.address,enableTLS:o.enableTLS,tlsCa:o.tlsCa,tlsCert:o.tlsCert,tlsKey:o.tlsKey}),G(!0),p(o.name)}}});var J=(0,j.useState)(!1),_=F()(J,2),X=_[0],G=_[1],L=(0,j.useRef)(),Y=(0,j.useState)(""),B=F()(Y,2),$=B[0],p=B[1];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Z.ZP,{onClick:function(){var o;p(""),(o=L.current)===null||o===void 0||o.resetFields(),G(!0)},type:"primary",children:"\u6DFB\u52A0Docker\u73AF\u5883"}),(0,n.jsxs)(h.a,{drawerProps:{forceRender:!0},onOpenChange:function(o){G(o)},open:X,width:800,formRef:L,title:(H=L.current)!==null&&H!==void 0&&H.getFieldValue&&L.current.getFieldValue("name")=="local"?"\u914D\u7F6E\u9ED8\u8BA4Docker\u5BA2\u6237\u7AEF":"\u6DFB\u52A0Docker\u73AF\u5883",onFinish:function(){var v=D()(c()().mark(function o(d){var i,y;return c()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return i={name:d.name,title:d.title,address:d.address,tlsCa:d.tlsCa,tlsCert:d.tlsCert,tlsKey:d.tlsKey,enableTLS:d.enableTLS},N.next=3,(0,W.ad)(i);case 3:return y=N.sent,l.onFinish&&l.onFinish(),N.abrupt("return",!0);case 6:case"end":return N.stop()}},o)}));return function(o){return v.apply(this,arguments)}}(),children:[(0,n.jsx)(m.Z,{label:"\u540D\u79F0",name:"title",required:!0,rules:[{required:!0}],fieldProps:{onChange:function(o){var d="";if(o.target.value&&!$){var i,y=(0,b.N9)(o.target.value.trim(),{toneType:"none",type:"array"});d=y.join(""),(i=L.current)===null||i===void 0||i.setFieldValue("name",d)}}}}),(0,n.jsx)(m.Z,{label:"\u6807\u8BC6",name:"name",required:!0,disabled:$!="",rules:[{required:!0}],placeholder:"\u6807\u8BC6Docker\u73AF\u5883\uFF0C\u53EA\u5141\u8BB8\u4E3A\u82F1\u6587\u6216\u662F\u6570\u5B57"}),(0,n.jsx)(m.Z,{label:"Docker Api \u5730\u5740",name:"address",tooltip:"\u8FDE\u63A5\u8FDC\u7A0B Docker \u65F6\u8BF7\u5148\u5F00\u542F Api \u5730\u5740\u8BBF\u95EE\u3002",placeholder:"\u4F8B\u5982\uFF1Aunix:///var/run/docker.sock\u3001tcp://192.16.0.5:2375"}),(0,n.jsx)(t.Z,{label:"\u542F\u7528TLS",name:"enableTLS",tooltip:"\u751F\u6210\u6559\u7A0B\u89C1\uFF1Ahttps://donknap.github.io/dpanel-docs/#/zh-cn/manual/remote"}),(0,n.jsx)(I.Z,{name:["enableTLS"],children:function(o){var d=o.enableTLS;if(d)return(0,n.jsxs)(x.Z,{gap:20,justify:"start",children:[(0,n.jsx)(S.Z,{name:"tlsCa",children:(0,n.jsx)(A.Z,{title:"\u4E0A\u4F20CA\u8BC1\u4E66 ca.pem",onImport:function(y){var O;return(O=L.current)===null||O===void 0||O.setFieldValue("tlsCa",y),!0},onLoad:function(y){if(y.indexOf("CERTIFICATE")<0)throw new Error("\u5BFC\u5165ca.pem\u8BC1\u4E66\u9519\u8BEF");return!0}})}),(0,n.jsx)(S.Z,{name:"tlsCert",children:(0,n.jsx)(A.Z,{title:"\u4E0A\u4F20\u8BC1\u4E66\u6587\u4EF6 cert.pem",onImport:function(y){var O;return(O=L.current)===null||O===void 0||O.setFieldValue("tlsCert",y),!0},onLoad:function(y){if(y.indexOf("CERTIFICATE")<0)throw new Error("\u5BFC\u5165cert.pem\u8BC1\u4E66\u9519\u8BEF");return!0}})}),(0,n.jsx)(S.Z,{name:"tlsKey",children:(0,n.jsx)(A.Z,{title:"\u4E0A\u4F20\u5BC6\u94A5\u6587\u4EF6 key.pem",onImport:function(y){var O;return(O=L.current)===null||O===void 0||O.setFieldValue("tlsKey",y),!0},onLoad:function(y){if(y.indexOf("PRIVATE")<0)throw new Error("\u5BFC\u5165key.pem\u8BC1\u4E66\u9519\u8BEF");return!0}})})]})}})]})]})}),E=u,f=e(86548),K=e(90078),V=e(10641),w=e(54006),U=e(42075),r=e(96074),s=e(25593);function a(){var l=(0,j.useRef)(),C=(0,j.useRef)(),H=(0,w.useSearchParams)(),J=F()(H,2),_=J[0],X=J[1],G=(0,j.useState)(""),L=F()(G,2),Y=L[0],B=L[1];return(0,n.jsx)(K._z,{header:{extra:[(0,n.jsx)(E,{ref:C,onFinish:D()(c()().mark(function $(){var p,v,o;return c()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(!_.get("id")){i.next=6;break}return i.next=3,(0,W.vC)({name:(o=_.get("id"))!==null&&o!==void 0?o:"local"});case 3:return X(""),window.location.href="/dpanel/ui/home",i.abrupt("return");case 6:!((p=l.current)===null||p===void 0)&&p.reloadAndRest&&((v=l.current)===null||v===void 0||v.reloadAndRest());case 7:case"end":return i.stop()}},$)}))},"dockerEnvCreate")]},children:(0,n.jsx)(V.Z,{rowKey:"name",columns:[{title:"\u6807\u8BC6",dataIndex:"name"},{title:"\u540D\u79F0",dataIndex:"title"},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u64CD\u4F5C",width:100,search:!1,render:function(p,v,o,d,i){return(0,n.jsx)(U.Z,{split:(0,n.jsx)(r.Z,{type:"vertical"}),children:(0,n.jsx)(s.Z.Link,{onClick:function(){var O;v.name==Y?X("id="+Y):X(""),(O=C.current)===null||O===void 0||O.edit(v)},children:(0,n.jsx)(f.Z,{})},v.name)})}}],pagination:!1,request:D()(c()().mark(function $(){var p;return c()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,(0,W.Kg)();case 2:return p=o.sent,_.get("id")&&p.data.list.map(function(d){if(d.name==_.get("id")){var i;(i=C.current)===null||i===void 0||i.edit(d)}}),B(p.data.currentName),o.abrupt("return",{data:p.data.list,total:p.data.list.length});case 6:case"end":return o.stop()}},$)})),search:!1,rowSelection:{defaultSelectedRowKeys:[],alwaysShowAlert:!0,getCheckboxProps:function(p){return{disabled:p.default}}},actionRef:l,tableAlertOptionRender:function(p){var v=p.selectedRowKeys;return(0,n.jsx)(U.Z,{size:16,children:(0,n.jsx)(P.Z,{danger:!0,type:"primary",action:function(){return(0,W._g)({name:v})},onSuccess:function(){var d,i;return!((d=l.current)===null||d===void 0)&&d.reloadAndRest&&((i=l.current)===null||i===void 0||i.reloadAndRest()),!0},onError:function(){var d,i;return!((d=l.current)===null||d===void 0)&&d.reset&&((i=l.current)===null||i===void 0||i.reset()),!0},messageSuccess:"\u5220\u9664\u6210\u529F",children:"\u6279\u91CF\u5220\u9664"})})}})})}},86250:function(z,T,e){e.d(T,{Z:function(){return U}});var g=e(67294),c=e(93967),R=e.n(c),D=e(98423),M=e(98065),F=e(53124),P=e(83559),h=e(83262);const m=["wrap","nowrap","wrap-reverse"],t=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],I=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"],S=(r,s)=>{const a=s.wrap===!0?"wrap":s.wrap;return{[`${r}-wrap-${a}`]:a&&m.includes(a)}},Z=(r,s)=>{const a={};return I.forEach(l=>{a[`${r}-align-${l}`]=s.align===l}),a[`${r}-align-stretch`]=!s.align&&!!s.vertical,a},x=(r,s)=>{const a={};return t.forEach(l=>{a[`${r}-justify-${l}`]=s.justify===l}),a};function j(r,s){return R()(Object.assign(Object.assign(Object.assign({},S(r,s)),Z(r,s)),x(r,s)))}var b=j;const W=r=>{const{componentCls:s}=r;return{[s]:{display:"flex","&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"},"&:empty":{display:"none"}}}},A=r=>{const{componentCls:s}=r;return{[s]:{"&-gap-small":{gap:r.flexGapSM},"&-gap-middle":{gap:r.flexGap},"&-gap-large":{gap:r.flexGapLG}}}},n=r=>{const{componentCls:s}=r,a={};return m.forEach(l=>{a[`${s}-wrap-${l}`]={flexWrap:l}}),a},u=r=>{const{componentCls:s}=r,a={};return I.forEach(l=>{a[`${s}-align-${l}`]={alignItems:l}}),a},E=r=>{const{componentCls:s}=r,a={};return t.forEach(l=>{a[`${s}-justify-${l}`]={justifyContent:l}}),a},f=()=>({});var K=(0,P.I$)("Flex",r=>{const{paddingXS:s,padding:a,paddingLG:l}=r,C=(0,h.IX)(r,{flexGapSM:s,flexGap:a,flexGapLG:l});return[W(C),A(C),n(C),u(C),E(C)]},f,{resetStyle:!1}),V=function(r,s){var a={};for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&s.indexOf(l)<0&&(a[l]=r[l]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var C=0,l=Object.getOwnPropertySymbols(r);C<l.length;C++)s.indexOf(l[C])<0&&Object.prototype.propertyIsEnumerable.call(r,l[C])&&(a[l[C]]=r[l[C]]);return a},U=g.forwardRef((r,s)=>{const{prefixCls:a,rootClassName:l,className:C,style:H,flex:J,gap:_,children:X,vertical:G=!1,component:L="div"}=r,Y=V(r,["prefixCls","rootClassName","className","style","flex","gap","children","vertical","component"]),{flex:B,direction:$,getPrefixCls:p}=g.useContext(F.E_),v=p("flex",a),[o,d,i]=K(v),y=G!=null?G:B==null?void 0:B.vertical,O=R()(C,l,B==null?void 0:B.className,v,d,i,b(v,r),{[`${v}-rtl`]:$==="rtl",[`${v}-gap-${_}`]:(0,M.n)(_),[`${v}-vertical`]:y}),N=Object.assign(Object.assign({},B==null?void 0:B.style),H);return J&&(N.flex=J),_&&!(0,M.n)(_)&&(N.gap=_),o(g.createElement(L,Object.assign({ref:s,className:O,style:N},(0,D.Z)(Y,["justify","wrap","align"])),X))})}}]);
