(this["webpackJsonpnews-app"]=this["webpackJsonpnews-app"]||[]).push([[0],{18:function(e,t,n){e.exports=n.p+"static/media/a2.2a93b0ac.png"},41:function(e,t,n){e.exports=n(91)},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){e.exports=n.p+"static/media/bang.e6ba88f5.jpeg"},82:function(e,t,n){e.exports=n.p+"static/media/del.51af6882.jpg"},83:function(e,t,n){e.exports=n.p+"static/media/mum.74b6fbe7.jpg"},84:function(e,t,n){e.exports=n.p+"static/media/hyd.0719352b.jpg"},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(33),l=n.n(c),o=n(7),i=(n(46),n(2)),s=n(3),u=n(5),m=n(4),d=(n(47),n(12)),p=(n(48),n(49),n(50),function(e){return r.a.createElement("li",{className:"Items"},e.children)}),f=function(){return r.a.createElement("ul",{className:"NavItems"},r.a.createElement(p,null,r.a.createElement(o.c,{to:"/startup",exact:!0},"Start-up News")),r.a.createElement(p,null,r.a.createElement(o.c,{to:"/cowork"},"Co-working News")),r.a.createElement(p,null,r.a.createElement(o.c,{to:"/about"},"About Us")))},h=(n(56),function(e){return r.a.createElement("div",{className:"drawerToggle",onClick:e.clicked},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}),E=function(e){return r.a.createElement("header",{className:"Navbar"},r.a.createElement(h,{clicked:e.drawerToggleClick}),r.a.createElement(o.c,{to:"/",exact:!0},"Co-Working Universe"),r.a.createElement("nav",{className:"desktopOnly"},r.a.createElement(f,null)))},v=(n(57),function(){return r.a.createElement("div",{className:"startup"},r.a.createElement("h1",null,"Start-up News"),r.a.createElement("p",null,"Read Startup and funding related news."))}),g=(n(58),function(){return r.a.createElement("div",{className:"cowork"},r.a.createElement("h1",null,"Co-Working News"),r.a.createElement("p",null,"Here get the information of Coworking Spaces."))}),b=(n(59),function(){return r.a.createElement("div",{className:"about"},r.a.createElement("h1",null,"About Us"),r.a.createElement("p",null,"We provide platform for \u201cCo-Working Space\u201d Company to promote their brand and write blog related to their business. We also provide contact details of people looking for co-working space. We also give platform for small brand to compete with big brands. "))}),w=(n(60),n(11)),k=n.n(w),y=function(e){return r.a.createElement("h4",null,e.title)},j=(n(77),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={posts:[]},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;k.a.get("/posts").then((function(t){var n=t.data;e.setState({posts:n})}))}},{key:"render",value:function(){var e=this,t=this.state.posts.slice(0,5).map((function(t){return r.a.createElement(o.b,{to:"/"+t.id,key:t.id},r.a.createElement(y,{title:t.title,clicked:function(){return e.postClickHandler(t.id)}}))}));return r.a.createElement("div",{className:"Sidebar"},r.a.createElement("h3",null,"Recent News"),t)}}]),n}(a.Component)),N=(n(78),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Content"},r.a.createElement("div",{className:"cardContent"},this.props.children),r.a.createElement("div",{className:"sidebarContent"},r.a.createElement(j,null)))}}]),n}(a.Component)),O=(n(79),function(e){return r.a.createElement("div",{className:"cityBox"},r.a.createElement("img",{src:e.image,alt:"Cities"}),r.a.createElement("h4",null,e.city))}),C=(n(80),[{name:"Bengaluru",image:n(81)},{name:"Delhi/NCR",image:n(82)},{name:"Mumbai",image:n(83)},{name:"Hyderabad",image:n(84)}]),x=function(e){var t=C.map((function(e,t){return r.a.createElement(O,{key:t,city:e.name,image:e.image})}));return r.a.createElement("div",{className:"location"},r.a.createElement("h2",null,"Our Locations"),r.a.createElement("div",{className:"city"},t))},S=n(40),D=(n(85),n(86),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Cards",onClick:this.props.clicked},r.a.createElement("img",{src:this.props.image,alt:"A1"}),r.a.createElement("h1",null,this.props.title))}}]),n}(a.Component)),P=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={posts:[]},e.postClickHandler=function(t){e.setState({selectedPostId:t})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props),k.a.get("/posts").then((function(t){var a=t.data.slice(0,10).map((function(e){return Object(S.a)({},e,{image:n(18)})}));e.setState({posts:a})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state.posts.map((function(t){return r.a.createElement(o.b,{to:"/"+t.id,key:t.id},r.a.createElement(D,Object.assign({title:t.title,desc:t.body,image:t.image},e.props,{clicked:function(){return e.postClickHandler(t.id)}})))}));return r.a.createElement("div",{className:"Posts"},r.a.createElement("h2",null,"Funding News"),t)}}]),a}(a.Component),A=function(){return r.a.createElement("div",{className:"home"},r.a.createElement(x,null),r.a.createElement(N,null,r.a.createElement(P,null)))},W=n(21),H=(n(87),n(18)),U=n.n(H),M=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={loadedPost:null},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props),this.props.match.params.id&&(!this.state.loadedPost||this.state.loadedPost&&this.state.loadedPost.id!==this.props.id)&&k.a.get("/posts/"+this.props.match.params.id).then((function(t){e.setState({loadedPost:t.data})}))}},{key:"render",value:function(){var e=r.a.createElement("p",null,"Select Post");return this.props.id&&(e=r.a.createElement("p",null,"Loading....")),this.state.loadedPost&&(e=r.a.createElement("div",{className:"articles"},r.a.createElement("h1",null,this.state.loadedPost.title),r.a.createElement("img",{src:U.a,alt:"A1"}),r.a.createElement("div",{className:"AuthDate"},r.a.createElement("p",null,r.a.createElement(W.b,null),"  Palermo"),r.a.createElement("p",null,r.a.createElement(W.a,null),"  Date")),r.a.createElement("p",null,this.state.loadedPost.body))),r.a.createElement("div",{className:"articlePage"},r.a.createElement(N,null,e))}}]),n}(a.Component),T=n(35);function B(){var e=Object(T.a)(["\n    position: fixed;\n    width: 280px;\n    max-width: 70%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    z-index: 200;\n    background-color: black;\n    padding: 32px 16px;\n    box-sizing: border-box;\n    transition: transform 0.3s ease-out;\n    transform: ",";\n\n    h2 {\n        padding: 0 2px 10px 2px;\n        border-bottom: 4px solid white;\n        font-size: 21px;\n        color: white;\n    }\n\n    @media (min-width: 500px) {\n        display: none;\n    }\n    \n"]);return B=function(){return e},e}var I=n(36).a.div(B(),(function(e){return e.show?"translateX(0)":"translateX(-100%)"})),L=(n(88),function(e){return e.show?r.a.createElement("div",{className:"backdrop",onClick:e.clicked}):null}),R=function(e){return r.a.createElement("div",null,r.a.createElement(L,{show:e.open,clicked:e.close}),r.a.createElement(I,{show:e.open},r.a.createElement("h2",null,"Co-Working Universe"),r.a.createElement("nav",null,r.a.createElement(f,null))))},z=(n(89),function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"Copyright 2020 - Co-Working Universe"))}),J=(n(90),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showSideDrawer:!1},e.sideDrawerHandler=function(){e.setState({showSideDrawer:!1})},e.sideDrawerToggleHandler=function(){e.setState((function(t){return{showSideDrawer:!e.state.showSideDrawer}}))},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Layout"},r.a.createElement(E,{drawerToggleClick:this.sideDrawerToggleHandler}),r.a.createElement(R,{open:this.state.showSideDrawer,close:this.sideDrawerHandler}),r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/startup",exact:!0,component:v}),r.a.createElement(d.a,{path:"/cowork",exact:!0,component:g}),r.a.createElement(d.a,{path:"/about",exact:!0,component:b}),r.a.createElement(d.a,{path:"/:id",exact:!0,component:M}),r.a.createElement(d.a,{path:"/",exact:!0,component:A}),r.a.createElement(A,null)),r.a.createElement(z,null))}}]),n}(a.Component)),X=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(J,null))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));k.a.defaults.baseURL="https://jsonplaceholder.typicode.com";var F=r.a.createElement(o.a,null,r.a.createElement(X,null));l.a.render(r.a.createElement(r.a.StrictMode,null,F),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.a7f4ff5d.chunk.js.map