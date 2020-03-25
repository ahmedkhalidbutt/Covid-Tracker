(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{18:function(e,t,a){},25:function(e,t,a){e.exports=a(47)},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),o=(a(30),a(31),a(11)),i=a(5),s=(a(32),a(7)),u=a(8),m=a(9),d=a(10),h=a(21);a(33),a(34);function v(e){e=e.toString();for(var t=/(-?\d+)(\d{3})/;t.test(e);)e=e.replace(t,"$1,$2");return e}var E=function(e){var t=e.title,a=e.amount;return r.a.createElement("div",{className:"card"},r.a.createElement("h3",{className:"title"},t),r.a.createElement("div",{className:"bar"},r.a.createElement("div",{className:"emptybar"}),r.a.createElement("div",{className:"filledbar"})),r.a.createElement("div",{className:"circle"},r.a.createElement("img",{src:"https://i.ibb.co/yRj69ZR/virus.png",alt:"virus",border:"0",width:"40px",height:"40px"}),r.a.createElement("h3",null,v(a))))},p=a(15),f=a(22),g=a.n(f);function b(){var e=Object(h.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: silver;\n"]);return b=function(){return e},e}var y=Object(p.css)(b()),N=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={data:"",loading:!0},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://coronavirus-19-api.herokuapp.com/all").then((function(e){return e.json()})).then((function(t){return e.setState({data:t,loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.data;return e.loading?r.a.createElement("div",{className:"overall-container"},r.a.createElement(g.a,{css:y,size:50,color:"#123abc",loading:this.state.loading})):r.a.createElement("div",{className:"overall-container"},r.a.createElement(E,{title:"Total Cases",amount:v(t.cases)}),r.a.createElement(E,{title:"Deaths",amount:v(t.deaths)}),r.a.createElement(E,{title:"Recovered",amount:v(t.recovered)}))}}]),a}(r.a.Component),j=(a(39),function(e){var t=e.title,a=e.total,n=e.active,c=e.death,l=e.number,o=parseInt(l);return o+=1,r.a.createElement("div",{className:"stats-card"},r.a.createElement("h3",null,t," #",o),r.a.createElement("p",null,"Total: ",v(a)),r.a.createElement("p",null,"Active: ",v(n)),r.a.createElement("p",null,"Deaths: ",v(c)))}),k=(a(40),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={data:"",isLoading:!0},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://coronavirus-19-api.herokuapp.com/countries").then((function(e){return e.json()})).then((function(t){return e.setState({data:t,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.data.slice(0,3);return t?null:r.a.createElement("div",{className:"stats-container"},a.map((function(e,t){return r.a.createElement(j,{key:t,title:e.country,total:e.cases,active:e.active,death:e.deaths,number:t})})))}}]),a}(r.a.Component));var C=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(N,null),r.a.createElement(k,null))},O=(a(18),function(e){var t=e.position,a=e.country,n=e.total,c=e.today,l=e.active,o=e.deaths,i=e.deathstoday,s=e.recovered,u=e.critical;return r.a.createElement("li",null,r.a.createElement("div",{className:"list-item"},r.a.createElement("h3",null,a,"   #",parseInt(t)+1),r.a.createElement("p",null,r.a.createElement("strong",null,"Cases ")," ",v(n)," | ",r.a.createElement("strong",null,"Today ")," ",v(c)," | ",r.a.createElement("strong",null,"Active")," ",v(l)),r.a.createElement("p",null,r.a.createElement("strong",null,"Deaths")," ",v(o)," | ",r.a.createElement("strong",null,"Today")," ",i),r.a.createElement("p",null,r.a.createElement("strong",null,"Recovered ")," ",v(s)," |",r.a.createElement("strong",null,"Critical"),"  ",v(u))))}),S=(a(41),function(e){return r.a.createElement("input",{className:"search-box",type:"search",placeholder:"Search Country",onChange:e.onSearchChange})}),w=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={data:"",isLoading:!0,searchField:""},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://coronavirus-19-api.herokuapp.com/countries").then((function(e){return e.json()})).then((function(t){return e.setState({data:t,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.isLoading,n=e.searchField;if(a)return null;var c=t.filter((function(e){return e.country.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"searchBox"},r.a.createElement(S,{onSearchChange:this.onSearchChange})),r.a.createElement("ul",{className:"list-container"},c.map((function(e,t){return r.a.createElement(O,{key:t,position:t,country:e.country,total:e.cases,today:e.todayCases,active:e.active,deaths:e.deaths,deathstoday:e.todayDeaths,critical:e.critical,recovered:e.recovered})}))))}}]),a}(r.a.Component),D=function(){return r.a.createElement("div",null,r.a.createElement(w,null))};var x=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"header"},r.a.createElement("span",null,r.a.createElement("h2",null,"COVID-19 DASHBOARD"))),r.a.createElement("div",{className:"main"},r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",null,r.a.createElement(o.b,{to:"/",className:"nav-link active"}," Home ")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/countries",className:"nav-link"},"Countries"))))),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:C}),r.a.createElement(i.a,{exact:!0,path:"/countries",component:D}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,null,r.a.createElement(x,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.0ee14f86.chunk.js.map