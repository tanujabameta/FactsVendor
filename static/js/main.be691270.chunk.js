(this.webpackJsonpabc=this.webpackJsonpabc||[]).push([[0],{125:function(t,e,a){"use strict";a.r(e);var n=a(3),c=a.n(n),o=a(20),r=a.n(o),s=(a(61),a(49)),l=a(50),i=a(55),u=a(54),m=(a(62),function(){return c.a.createElement("div",{className:"heading"},c.a.createElement("h2",null,"Facts Finder"))}),h=function(t){return c.a.createElement("button",{className:"btn-generic",onClick:t.getRandomFact},t.value)},f=function(t){return c.a.createElement("button",{className:"customDOB",onClick:t.onClick},t.value)},d=a(51),g=a.n(d),D=function(t){return c.a.createElement("div",{className:"userinput"},c.a.createElement(g.a,{customInput:c.a.createElement(f,null),selected:t.startDate,onChange:t.getDate}))},E=function(t){return c.a.createElement("div",{className:"fact"},c.a.createElement("p",null," ",t.factResult))},p=a(29),v=a.n(p),F=(a(124),function(t){Object(i.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={startDate:Date.parse(v()()),Fact:"Fact is loading...."},t.fetchFact=function(e){console.log(e),fetch("http://numberapi.com/"+e,{crossDomain:!0}).then((function(t){return t.text()})).then((function(e){return t.setState({Fact:e})})).catch((function(t){return console.log(t)}))},t.getDate=function(e){console.log(t.state.startDate),t.setState({startDate:e},(function(){t.fetchFact(v()(t.state.startDate).format("MM/DD"))}))},t.getRandomFact=function(){t.fetchFact("random/date")},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){console.log("cdm",this.state),this.fetchFact(v()(this.state.startDate).format("MM/DD"))}},{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(m,null),c.a.createElement("div",{className:"buttons"},c.a.createElement(h,{getRandomFact:this.getRandomFact,value:"getRandomFact"})),c.a.createElement("h3",null,"Or"),c.a.createElement("h4",null,"Please Enter your Date of Birth(Year not needed)"),c.a.createElement(D,{getDate:this.getDate,startDate:this.state.startDate}),c.a.createElement(E,{factResult:this.state.Fact}))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},56:function(t,e,a){t.exports=a(125)},61:function(t,e,a){},62:function(t,e,a){}},[[56,1,2]]]);
//# sourceMappingURL=main.be691270.chunk.js.map