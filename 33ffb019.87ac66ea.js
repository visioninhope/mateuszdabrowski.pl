(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{112:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,b=p["".concat(i,".").concat(f)]||p[f]||d[f]||r;return n?a.a.createElement(b,s(s({ref:t},u),{},{components:n})):a.a.createElement(b,s({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},113:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n(0),a=n(56),r=n.n(a);const i=({content:e})=>o.createElement(o.Fragment,null,o.createElement("p",{id:r.a.leadText},e))},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(7),r=(n(0),n(112)),i=n(113),s={id:"docs-and-snippets",title:"Docs & Snippets",slug:"/",description:"SSJS + JS + SQL + SFMC Config documentation and code snippets that I find useful for developing Marketing Automation"},c={unversionedId:"docs-and-snippets",id:"docs-and-snippets",isDocsHomePage:!1,title:"Docs & Snippets",description:"SSJS + JS + SQL + SFMC Config documentation and code snippets that I find useful for developing Marketing Automation",source:"@site/docs/docs-and-snippets.mdx",slug:"/",permalink:"/docs/",editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/docs/docs-and-snippets.mdx",version:"current",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1598903402,sidebar:"snippets",next:{title:"SSJS If & Switch",permalink:"/docs/ssjs/ssjs-if-and-switch"}},u=[{value:"Server-Side JavaScript",id:"server-side-javascript",children:[]},{value:"JavaScript",id:"javascript",children:[]},{value:"SFMC SQL",id:"sfmc-sql",children:[]},{value:"SFMC Config",id:"sfmc-config",children:[]},{value:"Changes",id:"changes",children:[]}],l={toc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(i.a,{content:"SSJS + JS + SQL + SFMC Config documentation and code snippets that I find useful for developing Marketing Automation.",mdxType:"LeadText"}),Object(r.b)("h2",{id:"server-side-javascript"},"Server-Side JavaScript"),Object(r.b)("p",null,"SSJS is an XX-century-version of JavaScript paired with proprietary libraries created by Salesforce. It is one of the programmatic tools useful to leverage Marketing Cloud to its fullest potential. I am creating this documentation to make my (and hopefully also yours) work easier."),Object(r.b)("a",{class:"button button--outline button--lg button--primary col col--6 col--offset-3",href:"./ssjs/ssjs-if-and-switch"},"Read about SSJS"),Object(r.b)("h2",{id:"javascript"},"JavaScript"),Object(r.b)("p",null,"In this part, I am gathering selected elements of modern vanilla JavaScript that I find useful for marketing technologists. Expect guides on asynchronous calls to API and backend resources, form-focused DOM manipulation and playing with data objects."),Object(r.b)("a",{class:"button button--outline button--lg button--primary col col--6 col--offset-3",href:"./js/js-if-and-switch"},"Read about JavaScript"),Object(r.b)("h2",{id:"sfmc-sql"},"SFMC SQL"),Object(r.b)("p",null,"To fully leverage the Salesforce Marketing Cloud Data Extensions and Automation Studio, SQL is a must-have. Here I gathered both the language basics and some of the most useful snippets to copy and paste shamelessly."),Object(r.b)("a",{class:"button button--outline button--lg button--primary col col--6 col--offset-3",href:"./sql/sfmc-sql-basics"},"Read about SQL"),Object(r.b)("h2",{id:"sfmc-config"},"SFMC Config"),Object(r.b)("p",null,"There are many things in Salesforce Marketing Cloud that aren't code but have a massive impact on the code. Permissions. System Data Views. Configuration options. Here I focus on the most important ones that are crucial for Marketing Cloud developers."),Object(r.b)("a",{class:"button button--outline button--lg button--primary col col--6 col--offset-3",href:"./config/sfmc-config-system-data-views"},"Read about SFMC Config"),Object(r.b)("h2",{id:"changes"},"Changes"),Object(r.b)("p",null,"I'm updating the docs ongoingly, so expect changes. You can track those by watching and starring the website's ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl"}),"Github Repository"),". Additional languages might come (I'm thinking about you, GTL)."))}p.isMDXComponent=!0}}]);