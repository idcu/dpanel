"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4819],{99861:function(K,b,e){var T=e(15009),n=e.n(T),D=e(64599),_=e.n(D),l=e(99289),M=e.n(l),E=e(5574),R=e.n(E),g=e(42119),j=e(67294),h=e(92754),v=e(3393),P=e(184),i=e(38345),O=e(85893),W=(0,j.forwardRef)(function(m,I){(0,j.useImperativeHandle)(I,function(){return{start:function(){return t(!0),F()},finish:function(){t(!1)}}});var f=(0,j.useState)(0),o=R()(f,2),p=o[0],u=o[1],r=(0,j.useRef)(),s=(0,j.useState)(!1),a=R()(s,2),w=a[0],t=a[1],F=function(){var B=M()(n()().mark(function L(){var S,y,C,H,Z,A,U;return n()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:y=0,C=_()(m.image),c.prev=2,C.s();case 4:if((H=C.n()).done){c.next=14;break}return A=H.value,u(y),(Z=r.current)===null||Z===void 0||Z.setStart(A),c.next=10,(0,v.Gb)({tag:A,type:"pull"});case 10:U=c.sent,y++;case 12:c.next=4;break;case 14:c.next=19;break;case 16:c.prev=16,c.t0=c.catch(2),C.e(c.t0);case 19:return c.prev=19,C.f(),c.finish(19);case 22:(S=r.current)===null||S===void 0||S.setFinish(),u(y);case 24:case"end":return c.stop()}},L,null,[[2,16,19,22]])}));return function(){return B.apply(this,arguments)}}();return(0,O.jsxs)(P.a,{trigger:m.trigger,width:800,open:w,submitter:!1,title:"\u4E00\u952E\u62C9\u53D6\u955C\u50CF",onOpenChange:function(){var B=M()(n()().mark(function L(S){return n()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:t(S),S&&m.trigger&&F();case 2:case"end":return C.stop()}},L)}));return function(L){return B.apply(this,arguments)}}(),drawerProps:{forceRender:!0},children:[(0,O.jsx)(i.Z,{children:(0,O.jsx)(g.Z,{current:p,items:m.image.map(function(B,L){return{title:B,key:L}})})}),(0,O.jsx)(i.Z,{children:(0,O.jsx)(h.Z,{ref:r})})]})});b.Z=W},44771:function(K,b,e){e.d(b,{Z:function(){return l}});var T=e(34041),n=e(25449),D=e(67294),_=e(85893);function l(M){return(0,_.jsx)(n.Z,{label:M.label,name:"restart",initialValue:M.defaultValue?M.defaultValue:"on-failure",children:(0,_.jsx)(T.Z,{options:[{value:"no",label:"\u4E0D\u91CD\u542F"},{value:"on-failure",label:"\u5931\u8D25\u540E\u91CD\u542F\uFF08\u9ED8\u8BA45\u6B21\uFF09"},{value:"unless-stopped",label:"\u672A\u624B\u52A8\u505C\u6B62\u5219\u91CD\u542F"},{value:"always",label:"\u4E00\u76F4\u91CD\u542F"}]})})}},4798:function(K,b,e){var T=e(15009),n=e.n(T),D=e(99289),_=e.n(D),l=e(5574),M=e.n(l),E=e(24963),R=e(14946),g=e(64789),j=e(38345),h=e(17186),v=e(24739),P=e(5966),i=e(62370),O=e(10641),W=e(31418),m=e(25593),I=e(85576),f=e(66309),o=e(42075),p=e(28036),u=e(67294),r=e(85893),s=(0,u.forwardRef)(function(a,w){var t=(0,u.useContext)(E.Z),F=t.notice,B=(0,u.useState)(!1),L=M()(B,2),S=L[0],y=L[1],C=(0,u.useRef)(),H=W.Z.useApp();(0,u.useImperativeHandle)(w,function(){return{}});var Z=function(U){var d,c,$=!1,k=(d=(c=C.current)===null||c===void 0?void 0:c.getList())!==null&&d!==void 0?d:[];if(k.map(function(N){N.name==U.name&&($=!0)}),!$){var G;(G=C.current)===null||G===void 0||G.add(U)}};return(0,r.jsxs)(j.Z,{title:"\u5173\u8054\u7F51\u7EDC",headerBordered:!0,children:[(0,r.jsx)(h.u,{name:"network",actionRef:C,creatorButtonProps:{creatorButtonText:"\u6DFB\u52A0\u7F51\u7EDC"},actionGuard:{beforeAddRow:function(U,d){return!a.siteName||a.siteName==""||typeof a.siteName=="undefined"?(F.error("\u8BF7\u8F93\u5165\u7AD9\u70B9\u6807\u8BC6"),!1):(y(!0),!1)}},copyIconProps:!1,min:0,itemRender:function(U,d){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(v.UW,{children:[(0,r.jsx)(P.Z,{label:"\u7F51\u7EDC\u540D\u79F0",name:"name",width:"md",disabled:!0,fieldProps:{value:d.record.name}}),(0,r.jsx)(i.Z,{label:"\u8BBF\u95EEHostname",name:"alise",children:d.record.alise!=""&&(0,r.jsx)(m.Z.Text,{code:!0,copyable:!0,children:d.record.alise})}),(0,r.jsx)(i.Z,{label:" ",children:U.action})]}),(0,r.jsx)(v.UW,{children:(0,r.jsx)(P.Z,{label:"\u6307\u5B9AIpV4",name:"ipV4",width:"md",fieldProps:{addonAfter:d.record.subnet}})})]})}}),(0,r.jsx)(I.Z,{title:"\u9009\u62E9\u7F51\u7EDC",width:1024,footer:!1,open:S,onCancel:function(){return y(!1)},children:(0,r.jsx)(O.Z,{rowKey:"Name",toolBarRender:!1,columns:[{title:"\u540D\u79F0",dataIndex:"Name",render:function(U,d,c,$,k){return d.Name=="none"||d.Name=="bridge"||d.Name=="host"?(0,r.jsxs)(r.Fragment,{children:[d.Name," ",(0,r.jsx)(f.Z,{color:"blue",children:"System"})]}):(0,r.jsx)(r.Fragment,{children:U})}},{title:"\u7C7B\u578B",ellipsis:!0,width:80,dataIndex:"Driver",search:!1},{title:"IPAM Driver",ellipsis:!0,width:120,search:!1,dataIndex:["IPAM","Driver"]},{title:"IPV4 IPAM Network",search:!1,dataIndex:["IPAM","Config",0,"Subnet"],render:function(U,d,c,$,k){return(0,r.jsxs)(o.Z,{children:[d.IPAM.Config&&d.IPAM.Config[0]&&"".concat(d.IPAM.Config[0].Subnet," - ").concat(d.IPAM.Config[0].Gateway),d.IPAM.Config&&d.IPAM.Config[1]&&"".concat(d.IPAM.Config[1].Subnet," - ").concat(d.IPAM.Config[1].Gateway)]})}},{title:"\u64CD\u4F5C",width:100,search:!1,render:function(U,d,c,$,k){return[(0,r.jsx)(p.ZP,{type:"link",onClick:function(){Z({name:d.Name,alise:[""],subnet:d.IPAM.Config[0].Subnet}),y(!1)},children:(0,r.jsx)(g.Z,{})},d.Id)]}}],request:function(){var A=_()(n()().mark(function U(d,c,$){var k;return n()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.next=2,(0,R.jR)({name:d.Name});case 2:return k=N.sent,N.abrupt("return",{data:k.data.list,success:!0,total:k.data.list.length});case 4:case"end":return N.stop()}},U)}));return function(U,d,c){return A.apply(this,arguments)}}(),pagination:{pageSize:10}})})]})});b.Z=s},92754:function(K,b,e){var T=e(5574),n=e.n(T),D=e(67294),_=e(63713),l=e(38703),M=e(85893),E=(0,D.forwardRef)(function(R,g){var j=(0,D.useState)(""),h=n()(j,2),v=h[0],P=h[1];(0,D.useImperativeHandle)(g,function(){return{setFinish:function(){I({finish:{downloading:100,extracting:100}})},setStart:function(o){o&&P(o),I({start:{downloading:0,extracting:0}})}}});var i=(0,_.useModel)("subscriber");i.addDataHandler("image:pull:"+v,function(f){I(f.data)});var O=(0,D.useState)(),W=n()(O,2),m=W[0],I=W[1];return(0,D.useEffect)(function(){I({start:{downloading:0,extracting:0}})},[]),(0,M.jsx)(M.Fragment,{children:m&&Object.keys(m).map(function(f){return(0,M.jsx)(l.Z,{percent:m[f].downloading,success:{percent:m[f].extracting}},f)})})});b.Z=E},78451:function(K,b,e){e.d(b,{Z:function(){return D}});var T=e(67294),n=e(85893);function D(_){return(0,n.jsx)("span",{style:{width:_.width?_.width:"auto",wordBreak:"break-word"},children:_.content})}},62597:function(K,b,e){e.d(b,{$G:function(){return M},Ct:function(){return W},Tb:function(){return j},XH:function(){return v},cl:function(){return R},iE:function(){return i},lK:function(){return o},xb:function(){return I},ze:function(){return u}});var T=e(15009),n=e.n(T),D=e(99289),_=e.n(D),l=e(63713);function M(s){return E.apply(this,arguments)}function E(){return E=_()(n()().mark(function s(a){return n()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,l.request)("/api/app/site/create-by-image",{method:"POST",data:a}));case 1:case"end":return t.stop()}},s)})),E.apply(this,arguments)}function R(s){return g.apply(this,arguments)}function g(){return g=_()(n()().mark(function s(a){return n()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,l.request)("/api/app/site/get-list",{method:"POST",data:a}));case 1:case"end":return t.stop()}},s)})),g.apply(this,arguments)}function j(s){return h.apply(this,arguments)}function h(){return h=_()(n()().mark(function s(a){return n()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a.download=!1,t.next=3,(0,l.request)("/api/app/log/run",{method:"POST",data:a});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}},s)})),h.apply(this,arguments)}function v(s){return P.apply(this,arguments)}function P(){return P=_()(n()().mark(function s(a){return n()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a.download=!0,t.next=3,(0,l.request)("/api/app/log/run",{method:"POST",data:a,responseType:"blob"});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}},s)})),P.apply(this,arguments)}function i(s){return O.apply(this,arguments)}function O(){return O=_()(n()().mark(function s(a){return n()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,l.request)("/api/app/site/get-detail",{data:a,method:"POST"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},s)})),O.apply(this,arguments)}function W(s){return m.apply(this,arguments)}function m(){return m=_()(n()().mark(function s(a){return n()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,l.request)("/api/app/container/delete",{method:"POST",data:a}));case 1:case"end":return t.stop()}},s)})),m.apply(this,arguments)}function I(s){return f.apply(this,arguments)}function f(){return f=_()(n()().mark(function s(a){return n()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,l.request)("/api/app/site/delete",{method:"POST",data:a}));case 1:case"end":return t.stop()}},s)})),f.apply(this,arguments)}function o(s){return p.apply(this,arguments)}function p(){return p=_()(n()().mark(function s(a){return n()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,l.request)("/api/app/site/update-title",{method:"POST",data:a});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},s)})),p.apply(this,arguments)}function u(s){return r.apply(this,arguments)}function r(){return r=_()(n()().mark(function s(a){return n()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,l.request)("/api/app/container/ignore",{method:"POST",data:a}));case 1:case"end":return t.stop()}},s)})),r.apply(this,arguments)}},2831:function(K,b,e){e.d(b,{Ll:function(){return R},aF:function(){return M},d6:function(){return j}});var T=e(15009),n=e.n(T),D=e(99289),_=e.n(D),l=e(63713);function M(){return E.apply(this,arguments)}function E(){return E=_()(n()().mark(function v(){return n()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,l.request)("/api/common/home/info",{method:"POST"});case 2:return i.abrupt("return",i.sent);case 3:case"end":return i.stop()}},v)})),E.apply(this,arguments)}function R(){return g.apply(this,arguments)}function g(){return g=_()(n()().mark(function v(){return n()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,l.request)("/api/common/home/usage",{method:"POST"});case 2:return i.abrupt("return",i.sent);case 3:case"end":return i.stop()}},v)})),g.apply(this,arguments)}function j(){return h.apply(this,arguments)}function h(){return h=_()(n()().mark(function v(){return n()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,l.request)("/api/common/home/upgrade-script",{method:"POST"});case 2:return i.abrupt("return",i.sent);case 3:case"end":return i.stop()}},v)})),h.apply(this,arguments)}},14946:function(K,b,e){e.d(b,{CI:function(){return j},HY:function(){return I},IS:function(){return M},XY:function(){return i},_3:function(){return o},_x:function(){return v},jR:function(){return R},t9:function(){return W}});var T=e(15009),n=e.n(T),D=e(99289),_=e.n(D),l=e(63713);function M(u){return E.apply(this,arguments)}function E(){return E=_()(n()().mark(function u(r){return n()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,l.request)("/api/app/network/get-detail",{method:"POST",data:r}));case 1:case"end":return a.stop()}},u)})),E.apply(this,arguments)}function R(u){return g.apply(this,arguments)}function g(){return g=_()(n()().mark(function u(r){return n()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,l.request)("/api/app/network/get-list",{method:"POST",data:r}));case 1:case"end":return a.stop()}},u)})),g.apply(this,arguments)}function j(){return h.apply(this,arguments)}function h(){return h=_()(n()().mark(function u(){return n()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,(0,l.request)("/api/app/network/prune",{method:"POST"});case 2:return s.abrupt("return",s.sent);case 3:case"end":return s.stop()}},u)})),h.apply(this,arguments)}function v(u){return P.apply(this,arguments)}function P(){return P=_()(n()().mark(function u(r){return n()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,l.request)("/api/app/network/delete",{method:"POST",data:r});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},u)})),P.apply(this,arguments)}function i(u){return O.apply(this,arguments)}function O(){return O=_()(n()().mark(function u(r){return n()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,l.request)("/api/app/network/create",{method:"POST",data:r});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},u)})),O.apply(this,arguments)}function W(u){return m.apply(this,arguments)}function m(){return m=_()(n()().mark(function u(r){return n()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,l.request)("/api/app/network/disconnect",{method:"POST",data:r});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},u)})),m.apply(this,arguments)}function I(u){return f.apply(this,arguments)}function f(){return f=_()(n()().mark(function u(r){return n()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,l.request)("/api/app/network/connect",{method:"POST",data:r});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},u)})),f.apply(this,arguments)}function o(u){return p.apply(this,arguments)}function p(){return p=_()(n()().mark(function u(r){return n()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,l.request)("/api/app/network/get-container-list",{method:"POST",data:r}));case 1:case"end":return a.stop()}},u)})),p.apply(this,arguments)}},3393:function(K,b,e){e.d(b,{Gb:function(){return R},Pn:function(){return v},Rb:function(){return i},YU:function(){return M},ZQ:function(){return I},_U:function(){return j},cd:function(){return W}});var T=e(15009),n=e.n(T),D=e(99289),_=e.n(D),l=e(63713);function M(o){return E.apply(this,arguments)}function E(){return E=_()(n()().mark(function o(p){return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,l.request)("/api/app/image/get-detail",{method:"POST",data:p}));case 1:case"end":return r.stop()}},o)})),E.apply(this,arguments)}function R(o){return g.apply(this,arguments)}function g(){return g=_()(n()().mark(function o(p){return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,l.request)("/api/app/image/tag-remote",{method:"POST",data:p}));case 1:case"end":return r.stop()}},o)})),g.apply(this,arguments)}function j(o){return h.apply(this,arguments)}function h(){return h=_()(n()().mark(function o(p){return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,l.request)("/api/app/image/tag-add",{method:"POST",data:p}));case 1:case"end":return r.stop()}},o)})),h.apply(this,arguments)}function v(o){return P.apply(this,arguments)}function P(){return P=_()(n()().mark(function o(p){return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,l.request)("/api/app/image/tag-delete",{method:"POST",data:p}));case 1:case"end":return r.stop()}},o)})),P.apply(this,arguments)}function i(o){return O.apply(this,arguments)}function O(){return O=_()(n()().mark(function o(p){return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,l.request)("/api/app/image/export",{method:"POST",data:p,responseType:"blob"}));case 1:case"end":return r.stop()}},o)})),O.apply(this,arguments)}function W(o){return m.apply(this,arguments)}function m(){return m=_()(n()().mark(function o(p){return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,l.request)("/api/pro/image/get-remote-tag",{method:"POST",data:p}));case 1:case"end":return r.stop()}},o)})),m.apply(this,arguments)}function I(o){return f.apply(this,arguments)}function f(){return f=_()(n()().mark(function o(p){return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,l.request)("/api/app/image/check-upgrade",{method:"POST",data:p}));case 1:case"end":return r.stop()}},o)})),f.apply(this,arguments)}}}]);
