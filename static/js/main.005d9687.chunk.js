(this["webpackJsonpbirthday-reminder"]=this["webpackJsonpbirthday-reminder"]||[]).push([[0],{22:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),a=n.n(r),i=n(32),s=n.n(i),j=n(17),o=n.n(j),d=n(33),b=n(20),u=n(10),l=(n(22),n(8)),h=function(e){return Object(c.jsxs)(l.b,{to:{pathname:"/details/".concat(e.id),state:{characters:e.characters}},className:"character-card",children:[Object(c.jsx)("img",{src:e.image,alt:e.name}),Object(c.jsx)("p",{children:e.name})]})},O=function(e){var t=e.characters;return Object(c.jsx)("div",{className:"flex-div",children:Object(c.jsx)("div",{className:"display-card",children:t.map((function(e){return Object(c.jsx)(h,{id:e.id,name:e.name,image:e.image,characters:t},e.id)}))})})},m=n(2),p=n(34),x=n.n(p),f=n(11),v=function(e){var t=parseInt(e.id);return Object(c.jsx)(l.b,{to:{pathname:"/details/".concat(1===t?t:t-1),state:{characters:e.character}},className:"bottom-navigation",children:Object(c.jsx)("p",{children:"Previous"})})},g=function(e){var t=parseInt(e.id);return Object(c.jsx)(l.b,{to:{pathname:"/details/".concat(t+1),state:{characters:e.character}},className:"bottom-navigation",children:Object(c.jsx)("p",{children:"Next"})})},N=function(e){parseInt(e.id);return Object(c.jsx)(l.b,{to:"/",className:"bottom-navigation",children:Object(c.jsx)("p",{children:"Home"})})};function y(){var e=Object(u.a)(["\n    margin: 0;\n"]);return y=function(){return e},e}function k(){var e=Object(u.a)(["\n    align-self: center;\n    justify-self: center;\n    padding: 0 0.5em 0 0.5em;\n   \n"]);return k=function(){return e},e}function w(){var e=Object(u.a)(["\n  margin-top: 1em;\n  display: grid;\n"]);return w=function(){return e},e}var I=f.a.div(w()),E=f.a.div(k()),S=f.a.p(y()),J=function(e){var t=Object(m.g)().id,n=Object(m.f)();console.log(n);var r=n.state.characters,a=r.filter((function(e){return parseInt(t)===e.id?e:void 0}))[0];return Object(c.jsx)("div",{children:Object(c.jsx)(I,{children:Object(c.jsxs)(E,{children:[Object(c.jsx)("img",{src:a.image,alt:a.name}),Object(c.jsxs)(S,{children:["Name - ",a.name]}),Object(c.jsxs)(S,{children:["Gender - ",a.gender]}),Object(c.jsxs)(S,{children:["Location of Origin - ",a.origin.name]}),Object(c.jsxs)(S,{children:["Current Location - ",a.location.name]}),Object(c.jsxs)(S,{children:["No. of Episodes appeared in - ",function(e){return e.episode.length}(a)]}),Object(c.jsxs)("div",{className:"wrapper-bottom-nav",children:[Object(c.jsx)(v,{character:r,id:t}),Object(c.jsx)(N,{}),Object(c.jsx)(g,{character:r,id:t})]})]})})})};function L(){var e=Object(u.a)(["\n  margin-top: 1em;\n"]);return L=function(){return e},e}var B=f.a.div(L()),C=function(){var e=Object(r.useState)(""),t=Object(b.a)(e,2),n=(t[0],t[1],Object(r.useState)([])),a=Object(b.a)(n,2),i=a[0],s=a[1];console.log(i),Object(r.useEffect)((function(){j()}),[]);var j=function(){var e=Object(d.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://rickandmortyapi.com/api/character");case 2:t=e.sent,n=t.data.results,s(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsx)("div",{children:Object(c.jsx)(B,{children:Object(c.jsx)(l.a,{basename:"/rick-and-morty-api-app",children:Object(c.jsxs)(m.c,{children:[Object(c.jsx)(m.a,{path:"/details/:id",children:Object(c.jsx)(J,{})}),Object(c.jsx)(m.a,{path:"/",children:Object(c.jsx)(O,{characters:i})})]})})})})};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(C,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.005d9687.chunk.js.map