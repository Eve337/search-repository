(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{55:function(e,t,n){},56:function(e,t,n){},58:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),o=n(10),i=n.n(o),a=(n(55),n(56),n(34)),s=n.n(a),l=n(35),u=n(38),d=n(26),j=n(105),h=n(106),b=(n(58),n(98)),f=n(101),p=n(103),m=n(65),O=n(104),x=n(6),g=Object(b.a)({root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}});function v(e){var t=g();return Object(x.jsx)(f.a,{className:t.root,children:Object(x.jsxs)(p.a,{children:[Object(x.jsx)(m.a,{className:t.title,color:"textSecondary",gutterBottom:!0,children:e.index}),Object(x.jsx)(m.a,{variant:"h5",component:"h2",children:Object(x.jsx)(O.a,{href:e.url,children:e.name})}),Object(x.jsx)(m.a,{className:t.pos,color:"textSecondary",children:e.creator}),Object(x.jsx)(m.a,{variant:"body2",component:"p",children:e.description})]})})}var w=function(e){var t=e.repositories,n=t.length>0&&t.map((function(e,t){return Object(x.jsx)(v,{className:"card",name:e.name,index:e.number,url:e.html_url,creator:e.owner.login,description:e.description},e.id)}));return Object(x.jsx)("div",{className:"scroll",onScroll:function(t){return e.handleScroll(t)},children:Object(x.jsx)("ul",{className:"repoList",children:n})})},y=function(e){var t=Object(c.useRef)(!0),n=Object(c.useState)(""),r=Object(d.a)(n,2),o=r[0],i=r[1],a=Object(c.useState)([]),b=Object(d.a)(a,2),f=b[0],p=b[1],m=Object(c.useState)(1),O=Object(d.a)(m,2),g=O[0],v=O[1],y=Object(c.useState)(!0),S=Object(d.a)(y,2),k=S[0],N=S[1];document.addEventListener("scroll",(function(e){console.log(Math.ceil(document.body.offsetHeight-(window.scrollY+window.innerHeight))),Math.ceil(document.body.offsetHeight-(window.scrollY+window.innerHeight))<10&&k&&(N(!1),v((function(e){return e+1})),console.log("finally, only one load"))})),Object(c.useEffect)((function(){t.current?t.current=!1:(H(g),window.scrollTo(0,window.scrollY-100),console.log(k),N(!0))}),[g]);var H=function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!k){e.next=3;break}return e.next=3,fetch("https://api.github.com/search/repositories?q=".concat(o,"&sort=stars&per_page=15&page=").concat(t)).then((function(e){return e.json()})).then((function(e){console.log(e),p((function(t){return[].concat(Object(l.a)(t),Object(l.a)(e.items))}))})).catch((function(e){return alert("too much requests, fix it")}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"ass",children:[Object(x.jsxs)("form",{autoComplete:"off",children:[Object(x.jsx)(j.a,{id:"standard-basic",placeholder:"Write repo name",value:o,onChange:function(e){i(e.target.value)},required:!0}),Object(x.jsx)(h.a,{variant:"contained",color:"primary",onClick:function(){!function(e){if(e&&o.trim())return!0}(o)?i("Dont be a fool"):(p([]),H(g))},children:"Let's roll"})]}),Object(x.jsx)(w,{repositories:f,handleScroll:function(e){console.log("working 1");var t=e.currentTarget,n=t.scrollTop,c=t.clientHeight;t.scrollHeight-n===c&&(v((function(e){return e+1})),console.log("working 2"))}})]})};var S=function(){return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("h1",{children:"Search"}),Object(x.jsx)(y,{})]})};i.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(S,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.1715b8e3.chunk.js.map