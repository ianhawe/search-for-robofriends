(this.webpackJsonprobofriend=this.webpackJsonprobofriend||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t(1),i=t.n(r),c=t(7),s=t.n(c),o=(t(13),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,i=n.getLCP,c=n.getTTFB;t(e),a(e),r(e),i(e),c(e)}))}),l=t(2),h=t(3),u=t(5),d=t(4),m=function(e){var n=e.name,t=e.email,r=e.id;return Object(a.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 ",children:[Object(a.jsx)("img",{className:"",src:"https://robohash.org/".concat(r,"?200x200"),alt:"robot"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:n}),Object(a.jsx)("p",{children:t})]})]})},b=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],j=function(e){var n=e.robots;return n.map((function(e,t){return Object(a.jsx)(m,{id:n[t].id,name:n[t].name,email:n[t].email})}))},f=function(e){e.searchField;var n=e.searchChange;return Object(a.jsx)("div",{className:"pa2 tc",children:Object(a.jsx)("input",{className:" tc  pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search for Robots",onChange:n})})},O=function(e){return Object(a.jsx)("div",{style:{overflowY:"scroll",height:"80vh"},children:e.children})},g=(t(14),function(e){Object(u.a)(t,e);var n=Object(d.a)(t);function t(){var e;return Object(l.a)(this,t),(e=n.call(this)).state={hasError:!1},e}return Object(h.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(a.jsx)("h1",{children:"Oops, that's not good! You should avert your eyes!"}):this.props.children}}]),t}(r.Component)),p=function(e){Object(u.a)(t,e);var n=Object(d.a)(t);function t(){var e;return Object(l.a)(this,t),(e=n.call(this)).onSearchChange=function(n){e.setState({searchfield:n.target.value})},e.state={duck:b,searchfield:""},e}return Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e.setState({duck:n})}))}},{key:"render",value:function(){var e=this.state,n=e.duck,t=e.searchfield,r=n.filter((function(e){return e.name.toLocaleLowerCase().includes(t.toLocaleLowerCase())}));return n.length?Object(a.jsxs)("div",{className:"tc",children:[Object(a.jsx)("h1",{className:"f2",children:" ROBOT FRIENDS"}),Object(a.jsx)(f,{searchChange:this.onSearchChange}),Object(a.jsx)(O,{children:Object(a.jsx)(g,{children:Object(a.jsx)(j,{robots:r})})})]}):Object(a.jsx)("h1",{children:"Loading"})}}]),t}(r.Component);t(15);s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root")),o()}},[[16,1,2]]]);
//# sourceMappingURL=main.27abad17.chunk.js.map