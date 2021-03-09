(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{119:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),s=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=s.a.createContext({}),b=function(e){var t=s.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=b(e.components);return s.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},d=s.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,m=u["".concat(c,".").concat(d)]||u[d]||p[d]||i;return n?s.a.createElement(m,r(r({ref:t},l),{},{components:n})):s.a.createElement(m,r({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=d;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r.mdxType="string"==typeof e?e:a,c[1]=r;for(var l=2;l<i;l++)c[l]=n[l];return s.a.createElement.apply(null,c)}return s.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},120:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),s=n(57),i=n.n(s);const c=({content:e})=>a.createElement(a.Fragment,null,a.createElement("p",{id:i.a.leadText},e))},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),s=n(8),i=(n(0),n(119)),c=n(120),r={id:"docs-and-snippets",title:"Docs & Snippets",slug:"/",description:"SSJS + JS + SQL + SFMC Config documentation and code snippets that I find useful for developing Marketing Automation"},o={unversionedId:"docs-and-snippets",id:"docs-and-snippets",isDocsHomePage:!1,title:"Docs & Snippets",description:"SSJS + JS + SQL + SFMC Config documentation and code snippets that I find useful for developing Marketing Automation",source:"@site/docs/docs-and-snippets.mdx",slug:"/",permalink:"/docs/",editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/docs/docs-and-snippets.mdx",version:"current",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1614551409,formattedLastUpdatedAt:"2/28/2021",sidebar:"snippets",next:{title:"SSJS If & Switch",permalink:"/docs/ssjs/ssjs-if-and-switch"}},l=[{value:"Server-Side JavaScript",id:"server-side-javascript",children:[{value:"SSJS Documentation",id:"ssjs-documentation",children:[]},{value:"SSJS Use Cases",id:"ssjs-use-cases",children:[]},{value:"SSJS Snippets",id:"ssjs-snippets",children:[]}]},{value:"JavaScript",id:"javascript",children:[{value:"JS Documentation",id:"js-documentation",children:[]},{value:"JS Use Cases",id:"js-use-cases",children:[]}]},{value:"SFMC SQL",id:"sfmc-sql",children:[{value:"SQL Documentation",id:"sql-documentation",children:[]},{value:"SQL Snippets",id:"sql-snippets",children:[]}]},{value:"SFMC Config",id:"sfmc-config",children:[]},{value:"Changes",id:"changes",children:[]}],b={toc:l};function u(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(c.a,{content:"SSJS + JS + SQL + SFMC Config documentation and code snippets that I find useful for developing Marketing Automation.",mdxType:"LeadText"}),Object(i.b)("h2",{id:"server-side-javascript"},"Server-Side JavaScript"),Object(i.b)("p",null,"SSJS is an XX-century-version of JavaScript paired with proprietary libraries created by Salesforce. It is one of the programmatic tools useful to leverage Marketing Cloud to its fullest potential. I am creating this documentation to make my (and hopefully also yours) work easier."),Object(i.b)("h3",{id:"ssjs-documentation"},"SSJS Documentation"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/ssjs/ssjs-if-and-switch"},"If & Switch")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/ssjs/ssjs-loops"},"Loops")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/ssjs/debugging-ssjs"},"Debugging")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/ssjs/ssjs-vs-ampscript-performance"},"Performance"))),Object(i.b)("h3",{id:"ssjs-use-cases"},"SSJS Use Cases"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/usecase/engage-with-countdown"},"Engage with Countdown")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/usecase/tailor-with-data"},"Tailor with Data"))),Object(i.b)("h3",{id:"ssjs-snippets"},"SSJS Snippets"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/ssjs/ssjs-snippet-ampscript-in-ssjs"},"AMPScript in SSJS")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/ssjs/ssjs-snippet-mobileconnect-phone-change"},"MobileConnect Phone Change"))),Object(i.b)("a",{class:"button button--outline button--lg button--primary col col--6 col--offset-3",href:"https://mateuszdabrowski.pl/docs/ssjs/ssjs-if-and-switch"},"Read about SSJS"),Object(i.b)("h2",{id:"javascript"},"JavaScript"),Object(i.b)("p",null,"In this part, I am gathering selected elements of modern vanilla JavaScript that I find useful for marketing technologists. Expect guides on asynchronous calls to API and backend resources, form-focused DOM manipulation and playing with data objects."),Object(i.b)("h3",{id:"js-documentation"},"JS Documentation"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/js/js-if-and-switch"},"If & Switch")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/js/js-loops"},"Loops"))),Object(i.b)("h3",{id:"js-use-cases"},"JS Use Cases"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/usecase/engage-with-countdown"},"Engage with Countdown")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/usecase/tailor-with-data"},"Tailor with Data"))),Object(i.b)("a",{class:"button button--outline button--lg button--primary col col--6 col--offset-3",href:"https://mateuszdabrowski.pl/docs/js/js-if-and-switch"},"Read about JavaScript"),Object(i.b)("h2",{id:"sfmc-sql"},"SFMC SQL"),Object(i.b)("p",null,"To fully leverage the Salesforce Marketing Cloud Data Extensions and Automation Studio, SQL is a must-have. Here I gathered both the language basics and some of the most useful snippets to copy and paste shamelessly."),Object(i.b)("h3",{id:"sql-documentation"},"SQL Documentation"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-basics"},"SQL Basics")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-select"},"Select")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-from"},"From")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-join"},"Join")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-where"},"Where")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-like"},"Like")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-string-functions"},"String Functions")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-date-functions"},"Date Functions")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-numeric-functions"},"Numeric Functions")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-conversion-functions"},"Conversion Functions"))),Object(i.b)("h3",{id:"sql-snippets"},"SQL Snippets"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-snippet-debugging-email-sends"},"Debugging Email Sends")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-snippet-debugging-value-length"},"Debugging Value Length"))),Object(i.b)("a",{class:"button button--outline button--lg button--primary col col--6 col--offset-3",href:"https://mateuszdabrowski.pl/docs/sql/sfmc-sql-basics"},"Read about SQL"),Object(i.b)("h2",{id:"sfmc-config"},"SFMC Config"),Object(i.b)("p",null,"There are many things in Salesforce Marketing Cloud that aren't code but have a massive impact on the code. Permissions. System Data Views. Configuration options. Here I focus on the most important ones that are crucial for Marketing Cloud developers."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/config/sfmc-config-permissions"},"Permissions")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/config/sfmc-config-system-data-views"},"System Data Views")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/config/sfmc-config-features-on-demand"},"Features On Demand")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/config/sfmc-config-behavioral-triggers"},"Behavioral Triggers"))),Object(i.b)("a",{class:"button button--outline button--lg button--primary col col--6 col--offset-3",href:"https://mateuszdabrowski.pl/docs/config/sfmc-config-system-data-views"},"Read about SFMC Config"),Object(i.b)("h2",{id:"changes"},"Changes"),Object(i.b)("p",null,"I'm updating the docs ongoingly, so expect changes. You can track those by watching and starring the website's ",Object(i.b)("a",{parentName:"p",href:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl"},"Github Repository"),". Additional languages might come (I'm thinking about you, GTL)."))}u.isMDXComponent=!0}}]);