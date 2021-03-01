(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{117:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),s=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=s.a.createContext({}),b=function(e){var t=s.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=b(e.components);return s.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},d=s.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=b(a),d=n,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||c;return a?s.a.createElement(m,r(r({ref:t},l),{},{components:a})):s.a.createElement(m,r({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=d;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r.mdxType="string"==typeof e?e:n,i[1]=r;for(var l=2;l<c;l++)i[l]=a[l];return s.a.createElement.apply(null,i)}return s.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},118:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),s=a(56),c=a.n(s);const i=({content:e})=>n.createElement(n.Fragment,null,n.createElement("p",{id:c.a.leadText},e))},84:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(3),s=a(7),c=(a(0),a(117)),i=a(118),r={id:"docs-and-snippets",title:"Docs & Snippets",slug:"/",description:"SSJS + JS + SQL + SFMC Config documentation and code snippets that I find useful for developing Marketing Automation"},o={unversionedId:"docs-and-snippets",id:"docs-and-snippets",isDocsHomePage:!1,title:"Docs & Snippets",description:"SSJS + JS + SQL + SFMC Config documentation and code snippets that I find useful for developing Marketing Automation",source:"@site/docs/docs-and-snippets.mdx",slug:"/",permalink:"/docs/",editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/docs/docs-and-snippets.mdx",version:"current",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1614551409,sidebar:"snippets",next:{title:"SSJS If & Switch",permalink:"/docs/ssjs/ssjs-if-and-switch"}},l=[{value:"Server-Side JavaScript",id:"server-side-javascript",children:[{value:"SSJS Documentation",id:"ssjs-documentation",children:[]},{value:"SSJS Use Cases",id:"ssjs-use-cases",children:[]},{value:"SSJS Snippets",id:"ssjs-snippets",children:[]}]},{value:"JavaScript",id:"javascript",children:[{value:"JS Documentation",id:"js-documentation",children:[]},{value:"JS Use Cases",id:"js-use-cases",children:[]}]},{value:"SFMC SQL",id:"sfmc-sql",children:[{value:"SQL Documentation",id:"sql-documentation",children:[]},{value:"SQL Snippets",id:"sql-snippets",children:[]}]},{value:"SFMC Config",id:"sfmc-config",children:[]},{value:"Changes",id:"changes",children:[]}],b={toc:l};function u(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)(i.a,{content:"SSJS + JS + SQL + SFMC Config documentation and code snippets that I find useful for developing Marketing Automation.",mdxType:"LeadText"}),Object(c.b)("h2",{id:"server-side-javascript"},"Server-Side JavaScript"),Object(c.b)("p",null,"SSJS is an XX-century-version of JavaScript paired with proprietary libraries created by Salesforce. It is one of the programmatic tools useful to leverage Marketing Cloud to its fullest potential. I am creating this documentation to make my (and hopefully also yours) work easier."),Object(c.b)("h3",{id:"ssjs-documentation"},"SSJS Documentation"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/ssjs/ssjs-if-and-switch"}),"If & Switch")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/ssjs/ssjs-loops"}),"Loops")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/ssjs/debugging-ssjs"}),"Debugging")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/ssjs/ssjs-vs-ampscript-performance"}),"Performance"))),Object(c.b)("h3",{id:"ssjs-use-cases"},"SSJS Use Cases"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/usecase/engage-with-countdown"}),"Engage with Countdown")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/usecase/tailor-with-data"}),"Tailor with Data"))),Object(c.b)("h3",{id:"ssjs-snippets"},"SSJS Snippets"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/ssjs/ssjs-snippet-ampscript-in-ssjs"}),"AMPScript in SSJS")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/ssjs/ssjs-snippet-mobileconnect-phone-change"}),"MobileConnect Phone Change"))),Object(c.b)("a",{class:"button button--outline button--lg button--primary col col--6 col--offset-3",href:"https://mateuszdabrowski.pl/docs/ssjs/ssjs-if-and-switch"},"Read about SSJS"),Object(c.b)("h2",{id:"javascript"},"JavaScript"),Object(c.b)("p",null,"In this part, I am gathering selected elements of modern vanilla JavaScript that I find useful for marketing technologists. Expect guides on asynchronous calls to API and backend resources, form-focused DOM manipulation and playing with data objects."),Object(c.b)("h3",{id:"js-documentation"},"JS Documentation"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/js/js-if-and-switch"}),"If & Switch")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/js/js-loops"}),"Loops"))),Object(c.b)("h3",{id:"js-use-cases"},"JS Use Cases"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/usecase/engage-with-countdown"}),"Engage with Countdown")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/usecase/tailor-with-data"}),"Tailor with Data"))),Object(c.b)("a",{class:"button button--outline button--lg button--primary col col--6 col--offset-3",href:"https://mateuszdabrowski.pl/docs/js/js-if-and-switch"},"Read about JavaScript"),Object(c.b)("h2",{id:"sfmc-sql"},"SFMC SQL"),Object(c.b)("p",null,"To fully leverage the Salesforce Marketing Cloud Data Extensions and Automation Studio, SQL is a must-have. Here I gathered both the language basics and some of the most useful snippets to copy and paste shamelessly."),Object(c.b)("h3",{id:"sql-documentation"},"SQL Documentation"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/sql/sfmc-sql-basics"}),"SQL Basics")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/sql/sfmc-sql-select"}),"Select")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/sql/sfmc-sql-from"}),"From")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/sql/sfmc-sql-join"}),"Join")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/sql/sfmc-sql-where"}),"Where")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/sql/sfmc-sql-like"}),"Like")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/sql/sfmc-sql-string-functions"}),"String Functions")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/sql/sfmc-sql-date-functions"}),"Date Functions")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/sql/sfmc-sql-numeric-functions"}),"Numeric Functions")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/sql/sfmc-sql-conversion-functions"}),"Conversion Functions"))),Object(c.b)("h3",{id:"sql-snippets"},"SQL Snippets"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/sql/sfmc-sql-snippet-debugging-email-sends"}),"Debugging Email Sends")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/sql/sfmc-sql-snippet-debugging-value-length"}),"Debugging Value Length"))),Object(c.b)("a",{class:"button button--outline button--lg button--primary col col--6 col--offset-3",href:"https://mateuszdabrowski.pl/docs/sql/sfmc-sql-basics"},"Read about SQL"),Object(c.b)("h2",{id:"sfmc-config"},"SFMC Config"),Object(c.b)("p",null,"There are many things in Salesforce Marketing Cloud that aren't code but have a massive impact on the code. Permissions. System Data Views. Configuration options. Here I focus on the most important ones that are crucial for Marketing Cloud developers."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/config/sfmc-config-permissions"}),"Permissions")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/config/sfmc-config-system-data-views"}),"System Data Views")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/config/sfmc-config-features-on-demand"}),"Features On Demand")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/config/sfmc-config-behavioral-triggers"}),"Behavioral Triggers"))),Object(c.b)("a",{class:"button button--outline button--lg button--primary col col--6 col--offset-3",href:"https://mateuszdabrowski.pl/docs/config/sfmc-config-system-data-views"},"Read about SFMC Config"),Object(c.b)("h2",{id:"changes"},"Changes"),Object(c.b)("p",null,"I'm updating the docs ongoingly, so expect changes. You can track those by watching and starring the website's ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl"}),"Github Repository"),". Additional languages might come (I'm thinking about you, GTL)."))}u.isMDXComponent=!0}}]);