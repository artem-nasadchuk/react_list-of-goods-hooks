(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,c=n(7),o=n.n(c),i=n(6),r=n(8),a=n(1),l=(n(13),n(14),n(4)),u=n.n(l),b=n(18),j=n(0),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var d=function(){var t=Object(a.useState)(!1),e=Object(i.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)(s.NONE),l=Object(i.a)(o,2),d=l[0],N=l[1],O=function(t,e){var n=e.sortType,c=e.isReversed,o=Object(r.a)(t);return o.sort((function(t,e){switch(n){case s.ALPHABET:return t.localeCompare(e);case s.LENGTH:return t.length-e.length;default:return 0}})),c&&o.reverse(),o}(h,{isReversed:n,sortType:d}),p=n||d!==s.NONE;return Object(j.jsxs)("div",{className:"section content",children:[Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("button",{type:"button",className:u()("button","is-info",{"is-light":d!==s.ALPHABET}),onClick:function(){N(s.ALPHABET)},children:"Sort alphabetically"}),Object(j.jsx)("button",{type:"button",className:u()("button","is-success",{"is-light":d!==s.LENGTH}),onClick:function(){N(s.LENGTH)},children:"Sort by length"}),Object(j.jsx)("button",{type:"button",className:u()("button","is-warning",{"is-light":!n}),onClick:function(){c(!n)},children:"Reverse"}),p&&Object(j.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){N(s.NONE),c(!1)},children:"Reset"})]}),Object(j.jsx)("ul",{children:Object(j.jsx)("ul",{children:O.map((function(t){return Object(j.jsx)("li",{"data-cy":"Good",children:t},Object(b.a)())}))})})]})};o.a.render(Object(j.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.11af1fb3.chunk.js.map