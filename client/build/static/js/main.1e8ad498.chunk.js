(this["webpackJsonpbook-forum"]=this["webpackJsonpbook-forum"]||[]).push([[0],{106:function(e,t,a){e.exports=a.p+"static/media/fantasy-book.8ad143f9.jpg"},117:function(e,t,a){e.exports=a(146)},137:function(e,t,a){e.exports=a.p+"static/media/background.747543f7.jpg"},146:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(34),c=a.n(o),l=(a(81),a(28)),i=a(14),s=a(40),m=new(a(116).a)({request:function(e){var t=localStorage.getItem("id_token");e.setContext({headers:{authorization:t?"Bearer ".concat(t):""}})},uri:"/graphql"}),u=a(64),d=a(66),p=Object(d.b)({name:"thread",initialState:{genre:"",threadText:""},reducers:{UPDATE_GENRE:function(e,t){e.genre=t.payload},UPDATE_THREADTEXT:function(e,t){e.threadText=t.payload}}}),g=p.actions,E=g.UPDATE_GENRE,b=g.UPDATE_THREADTEXT,f={thread:p.reducer},h=Object(d.a)({reducer:f}),v=a(105),k=a.n(v),w=a(106),x=a.n(w),y=(a(137),r.a.forwardRef((function(e,t){return r.a.createElement("div",{className:"Page",ref:t,"data-density":"hard"},r.a.createElement("div",{className:"hard"},r.a.createElement("h2",null,e.children)))}))),j=r.a.forwardRef((function(e,t){return r.a.createElement("div",{className:"Page",ref:t,"data-density":"hard"},r.a.createElement("div",{className:"pageCover"},r.a.createElement("h2",null,e.children)))})),O=r.a.forwardRef((function(e,t){return r.a.createElement("div",{className:"Page",ref:t},r.a.createElement("h2",{className:"pageHeader"},"Page Header"),r.a.createElement("div",{className:"pageImage"},r.a.createElement("img",{src:x.a,alt:"fantasy-category"})),r.a.createElement("div",{className:"pageText"},e.children),r.a.createElement("div",{className:"pageFooter"},"Page number: ",e.number))})),N="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";var S=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"bookContainer"},r.a.createElement(k.a,{width:500,height:600},r.a.createElement(y,null),r.a.createElement(j,null,"BOOK TITLE"),r.a.createElement(O,{number:"1"},N),r.a.createElement(O,{number:"2"},N),r.a.createElement(O,{number:"3"},N),r.a.createElement(O,{number:"4"},N),r.a.createElement(O,{number:"5"},N),r.a.createElement(j,null),r.a.createElement(y,null," "))))},T=function(){return r.a.createElement("main",null,r.a.createElement("div",{class:"container-fluid"},r.a.createElement("div",{class:"col"},r.a.createElement(l.Link,{to:"/threads/fantasy"},r.a.createElement("img",{src:"images/fantasy-book.jpg"}))),r.a.createElement("div",{class:"col"},r.a.createElement(l.Link,{to:"/threads/adventure"},r.a.createElement("img",{src:"images/adventure.jpg"}))),r.a.createElement("div",{class:"col"},r.a.createElement(l.Link,{to:"/threads/romance"},r.a.createElement("img",{src:"images/heart-book.jpg"}))),r.a.createElement("div",{class:"col"},r.a.createElement(l.Link,{to:"/threads/mystery"},r.a.createElement("img",{src:"images/mystery-book.png"})))))},I=function(){return r.a.createElement("div",null,"Oops, we couldn't find that page.")},$=a(43),C=a.n($),_=a(63),L=a(39),P=a(36),D=a(30),B=a(44),A=a(20),U=a.n(A);function F(){var e=Object(B.a)(["\n\tmutation addFriend($friendId: ID!) {\n\t\taddFriend(friendId: $friendId) {\n\t\t\t_id\n            username\n            friends {\n                _id\n                username\n            }\n\t\t}\n\t}\n"]);return F=function(){return e},e}function R(){var e=Object(B.a)(["\n\tmutation addPost($threadId: ID!, $postBody: String!) {\n\t\taddPost(threadId: $threadId, postBody: $postBody) {\n            _id\n\t\t\tthreadText\n\t\t\tgenre\n\t\t\tcreatedAt\n\t\t\tusername\n\t\t\tposts {\n                _id\n\t\t\t\tpostBody\n\t\t\t\tusername\n\t\t\t\tcreatedAt\n\t\t\t}\n\t\t}\n\t}\n"]);return R=function(){return e},e}function q(){var e=Object(B.a)(["\n\tmutation addThread($threadText: String!, $genre: String!) {\n\t\taddThread(threadText: $threadText, genre: $genre) {\n            _id\n\t\t\tthreadText\n\t\t\tgenre\n\t\t\tcreatedAt\n\t\t\tusername\n\t\t}\n\t}\n"]);return q=function(){return e},e}function H(){var e=Object(B.a)(["\n\tmutation addUser($username: String!, $email: String!, $password: String!) {\n\t\taddUser(username: $username, email: $email, password: $password) {\n\t\t\ttoken\n\t\t\tuser {\n\t\t\t\t_id\n\t\t\t}\n\t\t}\n\t}\n"]);return H=function(){return e},e}function M(){var e=Object(B.a)(["\n\tmutation login($username: String!, $password: String!) {\n\t\tlogin(username: $username, password: $password) {\n\t\t\ttoken\n\t\t\tuser {\n\t\t\t\t_id\n\t\t\t}\n\t\t}\n\t}\n"]);return M=function(){return e},e}var z=U()(M()),Y=U()(H()),G=(U()(q()),U()(R()),U()(F()),a(107)),J=a(108),W=a(78),X=new(function(){function e(){Object(G.a)(this,e)}return Object(J.a)(e,[{key:"getProfile",value:function(){return Object(W.a)(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return Object(W.a)(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),K=function(){var e=Object(n.useState)({username:"",password:""}),t=Object(D.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(""),l=Object(D.a)(c,2),i=l[0],m=l[1],u=Object(s.useMutation)(z),d=Object(D.a)(u,2),p=d[0],g=d[1].error,E=function(e){var t=e.target,n=t.name,r=t.value;o(Object(P.a)(Object(P.a)({},a),{},Object(L.a)({},n,r)))},b=function(){var e=Object(_.a)(C.a.mark((function e(t){var n,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(a.username&&a.password.length>=5)){e.next=16;break}return e.prev=2,e.next=5,p({variables:Object(P.a)({},a)});case 5:n=e.sent,r=n.data,X.login(r.login.token),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0);case 13:o({username:"",password:""}),e.next=17;break;case 16:a.username?m("Password must be at least 5 characters"):m("Username is required");case 17:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:b},r.a.createElement("input",{className:"form-input",placeholder:"Your username",name:"username",type:"username",id:"username",value:a.username,onChange:E}),r.a.createElement("input",{className:"form-input",placeholder:"******",name:"password",type:"password",id:"password",value:a.password,onChange:E}),r.a.createElement("button",{className:"btn d-block w-100",type:"submit"},"Submit")),i&&r.a.createElement("div",null,i),g&&r.a.createElement("div",null,"Incorrect Credentials"))},Q=function(){var e=Object(n.useState)({username:"",email:"",password:""}),t=Object(D.a)(e,2),a=t[0],o=t[1],c=Object(s.useMutation)(Y),l=Object(D.a)(c,2),i=l[0],m=l[1].error,u=function(e){var t=e.target,n=t.name,r=t.value;o(Object(P.a)(Object(P.a)({},a),{},Object(L.a)({},n,r)))},d=function(){var e=Object(_.a)(C.a.mark((function e(t){var n,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,i({variables:Object(P.a)({},a)});case 4:n=e.sent,r=n.data,X.login(r.addUser.token),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("main",{className:"flex-row justify-center mb-4"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("div",{className:"card"},r.a.createElement("h4",{className:"card-header"},"Sign Up"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:d},r.a.createElement("input",{className:"form-input",placeholder:"Your username",name:"username",type:"username",id:"username",value:a.username,onChange:u}),r.a.createElement("input",{className:"form-input",placeholder:"Your email",name:"email",type:"email",id:"email",value:a.email,onChange:u}),r.a.createElement("input",{className:"form-input",placeholder:"******",name:"password",type:"password",id:"password",value:a.password,onChange:u}),r.a.createElement("button",{className:"btn d-block w-100",type:"submit"},"Submit")),m&&r.a.createElement("div",null,"Sign up failed")))))},V=a(45),Z=a(151),ee=a(152),te=a(150),ae=a(115),ne=function(){var e=Object(u.b)(),t=Object(n.useState)("Fantasy"),a=Object(D.a)(t,2),o=a[0],c=a[1],i=Object(n.useState)(""),s=Object(D.a)(i,2),m=s[0],d=s[1];return r.a.createElement(Z.a,{bg:"dark",expand:"lg",variant:"dark"},r.a.createElement(Z.a.Brand,null,r.a.createElement(l.Link,{to:"/",className:"text-light",role:"button"},"Book Forum")),r.a.createElement(ee.a,{className:"flex-row mr-auto"},X.loggedIn()?r.a.createElement(r.a.Fragment,null,r.a.createElement(V.LinkContainer,{to:"/#",onClick:X.logout},r.a.createElement(ee.a.Item,{className:"text-light mx-2",role:"button"},"Logout")),r.a.createElement(V.LinkContainer,{to:"/dashboard"},r.a.createElement(ee.a.Item,{className:"text-light mx-2",role:"button"},"DashBoard"))):r.a.createElement(r.a.Fragment,null,r.a.createElement(V.LinkContainer,{to:"/login"},r.a.createElement(ee.a.Item,{className:"text-light mx-2",role:"button"},"Login")),r.a.createElement(V.LinkContainer,{to:"/signup"},r.a.createElement(ee.a.Item,{className:"text-light mx-2",role:"button"},"Signup")))),r.a.createElement(Z.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(Z.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(te.a,{inline:!0,className:"ml-auto"},r.a.createElement(ae.a,{size:"sm",type:"text",placeholder:"Search",className:"ml-auto my-2",onChange:function(e){d(e.target.value)}}),r.a.createElement(ae.a,{as:"select",size:"sm",className:"ml-2 my-2",onChange:function(e){c(e.target.value)}},r.a.createElement("option",null,"Fantasy"),r.a.createElement("option",null,"Adventure"),r.a.createElement("option",null,"Romance"),r.a.createElement("option",null,"Mystery")),r.a.createElement(V.LinkContainer,{to:"/threads",onClick:function(){e(E(o)),e(b(m))}},r.a.createElement(ee.a.Item,{className:"py-1 px-2 ml-sm-2 text-light border border-success border-radius rounded",role:"button"},"Search")))))};var re=function(){return r.a.createElement(s.ApolloProvider,{client:m},r.a.createElement(u.a,{store:h},r.a.createElement(l.BrowserRouter,null,r.a.createElement(ne,null),r.a.createElement(i.g,null,r.a.createElement(i.d,{exact:!0,path:"/",component:T}),r.a.createElement(i.d,{exact:!0,path:"/login",component:K}),r.a.createElement(i.d,{exact:!0,path:"/signup",component:Q}),r.a.createElement(i.d,{exact:!0,path:"/threads/:genre",component:S}),r.a.createElement(i.d,{component:I})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(145);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},81:function(e,t,a){}},[[117,1,2]]]);
//# sourceMappingURL=main.1e8ad498.chunk.js.map