(this.webpackJsonpfire_coins=this.webpackJsonpfire_coins||[]).push([[0],{163:function(e,t,a){e.exports=a(271)},271:function(e,t,a){"use strict";a.r(t);a(164),a(190),a(192),a(193),a(195),a(196),a(197),a(198),a(199),a(200),a(201),a(202),a(204),a(205),a(206),a(207),a(208),a(209),a(210),a(211),a(212),a(213),a(215),a(216),a(217),a(218),a(219),a(220),a(221),a(222),a(223),a(224),a(225),a(226),a(227),a(228),a(229),a(230),a(231),a(232);var n=a(0),l=a.n(n),r=a(98),i=a.n(r),c=a(42),o=a(59),s=a(99),m=a(100),u=a(120),d=a(119),p=a(3),E=(a(251),a(37),a(60)),h=a.n(E),f=a(111),v=a(38),g=a.n(v),_=(a(269),a(112)),b=a.n(_),y=a(113),k=a.n(y),C=a(114),S=a.n(C),w=a(115),z=a.n(w),T=a(116),j=a.n(T),O=a(117),P=a.n(O),x=(a(270),a(61)),F=a.n(x),M=a(118),J=a.n(M),D=a(62),I=a.n(D),V=a(44),A=a.n(V),N=new f.VKMiniAppAPI,R="https://api-waste.hhos.ru/fire_coins.api/",q=new URLSearchParams(window.location.search.slice(1)),B=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).init=function(e){console.log(e);var t=n.state,a=t.source,r=t.activeTab,i=t.id;n.setState({popout:l.a.createElement(p.y,null)}),g.a.post(R,JSON.stringify({event:"init",obj:{source:a+"_"+r,pin:e,id:i},url:window.location.href})).then((function(e){console.log(e),"ok"===e.data.status&&n.setState({popout:null,activePanel:"main",user:e.data.data}),n.setState({popout:null,snackbar:l.a.createElement(p.A,{onClose:function(){return n.setState({snackbar:null})},duration:2e3,before:"ok"===e.data.status?l.a.createElement(b.a,{fill:"var(--accent)"}):l.a.createElement(k.a,{fill:"var(--dynamic_red)"})},e.data.description)})}))},n.get_transfers=function(){var e=n.state.user;g.a.post(R,JSON.stringify({event:"read_history",obj:{id:e.id,hash:e.hash}})),n.setState({activePanel:"transfers",user:Object(o.a)(Object(o.a)({},e),{},{new_transfers:0})}),g.a.post(R,JSON.stringify({event:"get_transfers",obj:{id:e.id,hash:e.hash}})).then((function(e){console.log(e.data),n.setState({transfers:e.data})}))},n.onChange=function(e){var t=e.currentTarget,a=t.name,l=t.value;n.setState(Object(c.a)({},a,l))},n.tie=function(){var e=n.state.user;g.a.post(R,JSON.stringify({event:"tie_VK",obj:{id:e.id,hash:e.hash}})).then((function(e){console.log(e)}))},n.state={activePanel:"safe_pin",activeTab:"log_in",activeTabTransfer:"id",activeModal:null,user:null,userInfo:null,source:"web",id:"",pin:"",popout:null,snackbar:null,transfers:null},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;N.initApp(),null!=q.get("vk_user_id")&&(this.setState({source:"vk"}),N.getUserInfo().then((function(t){e.setState({userInfo:t})})))}},{key:"parse",value:function(e){return(e/1e3).toString().replace(/(?=\B(?:\d{3})+(?!\d))/g," ").replace(".",",")}},{key:"render",value:function(){var e=this,t=this.state,a=t.activeTab,n=t.activeTabTransfer,r=t.transfers,i=t.user;return l.a.createElement(p.F,{activePanel:this.state.activePanel,popout:this.state.popout,modal:l.a.createElement(p.q,{activeModal:this.state.activeModal},l.a.createElement(p.o,{id:"transfer",dynamicContentHeight:!0,onClose:function(){return e.setState({activeModal:null})},header:l.a.createElement(p.p,null,"\u041f\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438")},l.a.createElement(p.C,null,l.a.createElement(p.D,{selected:"id"==n,onClick:function(){return e.setState({activeTabTransfer:"id"})}},"\u041f\u043e \u043d\u043e\u043c\u0435\u0440\u0443"),l.a.createElement(p.D,{selected:"qr"==n,onClick:function(){return e.setState({activeTabTransfer:"qr"})}},"\u041f\u043e QR")),"id"==n?l.a.createElement(p.h,null,l.a.createElement(p.i,{top:"\u041d\u043e\u043c\u0435\u0440 \u0441\u0447\u0435\u0442\u0430"},l.a.createElement(p.m,{name:"peer_id",onChange:this.onChange})),l.a.createElement(p.i,{top:"\u0421\u0443\u043c\u043c\u0430 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0430"},l.a.createElement(p.m,{name:"amount",onChange:this.onChange})),l.a.createElement(p.i,{top:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435, \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"},l.a.createElement(p.E,null)),l.a.createElement(p.c,{size:"xl",mode:"outline"},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")):l.a.createElement(p.h,null,"vk"!=this.state.source?l.a.createElement(p.j,{header:"\u041d\u0435\u0430\u043a\u0442\u0438\u0432\u043d\u043e",mode:"error"},"\u0414\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u044d\u0442\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438, \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u0432 VK mini apps"):null,l.a.createElement(p.i,{top:"\u0421\u0443\u043c\u043c\u0430 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0430"},l.a.createElement(p.m,{name:"amount",onChange:this.onChange})),l.a.createElement(p.i,{top:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435, \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"},l.a.createElement(p.E,null)),l.a.createElement(p.c,{size:"xl",mode:"outline",disabled:!0},"\u0421\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c"))))},l.a.createElement(p.r,{id:"main"},l.a.createElement(p.s,{left:l.a.createElement(p.u,{onClick:this.get_transfers,label:null==i||0==i.new_transfers?null:l.a.createElement(p.f,{size:"s",mode:"prominent"},i.new_transfers)},l.a.createElement(P.a,null))},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),null==i?l.a.createElement(p.v,null):l.a.createElement("div",null,l.a.createElement(p.k,{header:l.a.createElement(p.l,{mode:"secondary"},"\u0411\u0430\u043b\u0430\u043d\u0441")},l.a.createElement("div",{align:"center"},l.a.createElement("span",{style:{fontSize:30,fontWeight:"bold"}},this.parse(i.coins)),l.a.createElement("img",{src:A.a,style:{height:34,weight:34,position:"relative",top:3}})),l.a.createElement(p.e,{style:{marginTop:10}},l.a.createElement(p.d,{size:"s"},l.a.createElement(p.g,{align:"center"},l.a.createElement(z.a,{fill:"var(--accent)",onClick:function(){return e.setState({activeModal:"transfer"})}}))),l.a.createElement(p.d,{size:"s"},l.a.createElement(p.g,{align:"center"},l.a.createElement(S.a,{fill:"#F76F12"}))),l.a.createElement(p.d,{size:"s"},l.a.createElement(p.g,{align:"center"},l.a.createElement(j.a,{fill:"#F712C2"}))))),l.a.createElement(p.k,{header:l.a.createElement(p.l,{mode:"secondary"},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0435")},l.a.createElement(p.z,{indicator:i.id,description:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0439"},"\u041d\u043e\u043c\u0435\u0440 \u0441\u0447\u0435\u0442\u0430"),l.a.createElement(p.z,{indicator:1==i.is_orig?"\u0414\u0430":"\u041d\u0435\u0442"},"\u041a\u0430\u0440\u0442\u0430")),l.a.createElement(p.k,{header:l.a.createElement(p.l,{mode:"secondary"},"\u041f\u0440\u044f\u0437\u043a\u0430 \u0432\u043a")},null==i.vk_user_id?l.a.createElement(p.w,{action:l.a.createElement(p.c,{before:l.a.createElement(J.a,null),href:"https://oauth.vk.com/authorize?client_id=7473792&display=page&redirect_uri=http://localhost/tie.php&scope=&response_type=code&v=5.103",target:"_blank"},"\u041f\u0440\u044f\u0432\u044f\u0437\u0430\u0442\u044c")},"\u0421\u0447\u0435\u0442 \u043d\u0435 \u043f\u0440\u0438\u0432\u044f\u0437\u0430\u043d \u043a \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0443 \u0412\u041a"):l.a.createElement(p.z,{before:l.a.createElement(p.a,{src:i.data.photo_200})},i.data.first_name+" "+i.data.last_name))),this.state.snackbar),l.a.createElement(p.r,{id:"transfers"},l.a.createElement(p.s,{left:l.a.createElement(p.t,{onClick:function(){return e.setState({activePanel:"main"})}})},"\u0412\u0430\u0448\u0438 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438"),null==r?l.a.createElement(p.B,{size:"large",style:{color:"var(--accent)",marginTop:96}}):l.a.createElement("div",null,0==r.length?l.a.createElement(p.w,null,"\u0423 \u0432\u0430\u0441 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0439"):l.a.createElement(p.n,null,r.map((function(e,t){return l.a.createElement("div",null,i.id==e.from_id?l.a.createElement(p.x,{key:t,multiline:!0,bottom:1==e.is_vk?l.a.createElement(I.a,{fill:"var(--accent)"}):null,before:l.a.createElement(p.a,{size:72,src:null==e.data.photo_200?null:e.data.photo_200},null==e.data.photo_200?l.a.createElement(F.a,{fill:"var(--accent)"}):null),after:l.a.createElement("div",null,l.a.createElement("span",{style:{fontSize:15,fontWeight:"bold",color:"var(--dynamic_red)"}},"-"+e.amount/1e3),l.a.createElement("img",{src:A.a,style:{height:24,weight:24,position:"relative",top:5}})),caption:e.description},null==e.data.first_name?"\u041f\u0435\u0440\u0435\u0432\u043e\u0434 \u043d\u0430 \u0441\u0447\u0435\u0442 \u2116"+e.peer_id:"\u041f\u0435\u0440\u0435\u0432\u043e\u0434 "+e.data.first_name+" "+e.data.last_name):l.a.createElement(p.x,{key:t,multiline:!0,bottom:1==e.is_vk?l.a.createElement(I.a,{fill:"var(--accent)"}):null,before:l.a.createElement(p.a,{size:72,src:null==e.data.photo_200?null:e.data.photo_200},null==e.data.photo_200?l.a.createElement(F.a,{fill:"var(--accent)"}):null),after:l.a.createElement("div",null,l.a.createElement("span",{style:{fontSize:15,fontWeight:"bold",color:"var(--dynamic_green)"}},"+"+e.amount/1e3),l.a.createElement("img",{src:A.a,style:{height:24,weight:24,position:"relative",top:5}})),caption:e.description},null==e.data.first_name?"\u041f\u0435\u0440\u0435\u0432\u043e\u0434 \u043e\u0442 \u0441\u0447\u0435\u0442\u0430 \u2116"+e.peer_id:"\u041f\u0435\u0440\u0435\u0432\u043e\u0434 \u043e\u0442 "+e.data.first_name+" "+e.data.last_name))}))))),l.a.createElement(p.r,{id:"safe_pin",separator:!1},l.a.createElement(p.s,{separator:!1},"Fire coins"),"vk"==this.state.source?null:l.a.createElement(p.C,null,l.a.createElement(p.D,{selected:"log_in"===a,onClick:function(){return e.setState({activeTab:"log_in"})}},"\u0412\u0445\u043e\u0434"),l.a.createElement(p.D,{selected:"create"===a,onClick:function(){return e.setState({activeTab:"create"})}},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435")),"create"===a||"vk"==this.state.source?l.a.createElement(p.g,{align:"center"},l.a.createElement(p.h,null,l.a.createElement(p.i,{top:"pin \u043a\u043e\u0434"},l.a.createElement(h.a,{length:4,initialValue:"",secret:!0,type:"numeric",style:{padding:"10px"},inputStyle:{borderColor:"var(--accent)",borderRadius:10},inputFocusStyle:{borderColor:"var(--dynamic_green)"},onComplete:function(t,a){e.init(t)}})),l.a.createElement(p.b,{header:"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435",subheader:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 pin \u043a\u043e\u0434. \u041d\u0435 \u0437\u0430\u0431\u044b\u0432\u0430\u0439\u0442\u0435 \u0435\u0433\u043e"}))):l.a.createElement(p.g,{align:"center"},l.a.createElement(p.h,null,l.a.createElement(p.i,{top:"\u041d\u043e\u043c\u0435\u0440 \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0430"},l.a.createElement(p.m,{onChange:this.onChange,name:"id",autoComplete:"off"})),l.a.createElement(p.i,{top:"pin \u043a\u043e\u0434"},l.a.createElement(h.a,{length:4,initialValue:"",secret:!0,type:"numeric",style:{padding:"10px"},inputStyle:{borderColor:"var(--accent)",borderRadius:10},inputFocusStyle:{borderColor:"var(--dynamic_green)"},onComplete:function(t,a){e.init(t)}})))),l.a.createElement("div",null,this.state.snackbar)))}}]),a}(l.a.Component);i.a.render(l.a.createElement(B,null),document.getElementById("root")),Promise.all([a.e(3),a.e(4)]).then(a.bind(null,275)).then((function(e){e.default}))},44:function(e,t,a){e.exports=a.p+"static/media/fire_coin.aec37865.png"}},[[163,1,2]]]);
//# sourceMappingURL=main.dfb9a9a6.chunk.js.map