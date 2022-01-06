"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[6576],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(n),m=s,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,o=new Array(i);o[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:s,o[1]=r;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1872:function(e,t,n){n.d(t,{m:function(){return i}});var a=n(7294),s="leadText_N0cq",i=function(e){var t=e.content;return a.createElement(a.Fragment,null,a.createElement("p",{id:s},t))}},4770:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var a=n(7462),s=n(3366),i=(n(7294),n(4137)),o=n(1872),r=["components"],l={id:"docs-and-snippets",title:"Docs & Snippets",slug:"/",description:"SSJS + JS + AMPScript + SQL + SFMC Config documentation and code snippets that I find useful for developing Salesforce Marketing Cloud.",image:"img/og/og-image-docs-and-snippets.png"},c=void 0,p={unversionedId:"docs-and-snippets",id:"docs-and-snippets",title:"Docs & Snippets",description:"SSJS + JS + AMPScript + SQL + SFMC Config documentation and code snippets that I find useful for developing Salesforce Marketing Cloud.",source:"@site/docs/docs-and-snippets.mdx",sourceDirName:".",slug:"/",permalink:"/docs/",editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/docs/docs-and-snippets.mdx",tags:[],version:"current",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1641510195,formattedLastUpdatedAt:"1/7/2022",frontMatter:{id:"docs-and-snippets",title:"Docs & Snippets",slug:"/",description:"SSJS + JS + AMPScript + SQL + SFMC Config documentation and code snippets that I find useful for developing Salesforce Marketing Cloud.",image:"img/og/og-image-docs-and-snippets.png"},sidebar:"snippets",next:{title:"Zen of SFMC",permalink:"/docs/zen-of-sfmc"}},u=[{value:"Zen of SFMC",id:"zen-of-sfmc",children:[],level:2},{value:"Server-Side JavaScript",id:"server-side-javascript",children:[{value:"SSJS Documentation",id:"ssjs-documentation",children:[],level:3},{value:"SSJS Snippets",id:"ssjs-snippets",children:[],level:3}],level:2},{value:"JavaScript",id:"javascript",children:[{value:"JS Documentation",id:"js-documentation",children:[],level:3}],level:2},{value:"AMPScript",id:"ampscript",children:[{value:"AMPScript Documentation",id:"ampscript-documentation",children:[],level:3},{value:"AMPScript Snippets",id:"ampscript-snippets",children:[],level:3}],level:2},{value:"SFMC SQL",id:"sfmc-sql",children:[{value:"SQL Documentation",id:"sql-documentation",children:[],level:3},{value:"SQL Snippets",id:"sql-snippets",children:[],level:3}],level:2},{value:"SFMC Config",id:"sfmc-config",children:[],level:2},{value:"SFMC Use Cases",id:"sfmc-use-cases",children:[],level:2},{value:"Changes",id:"changes",children:[],level:2}],d={toc:u};function m(e){var t=e.components,n=(0,s.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.m,{content:"SSJS + JS + AMPScript + SQL + SFMC Config documentation and code snippets that I find useful for developing Salesforce Marketing Cloud.",mdxType:"LeadText"}),(0,i.kt)("h2",{id:"zen-of-sfmc"},"Zen of SFMC"),(0,i.kt)("p",null,"Salesforce Marketing Cloud is a complex and flexible tool. This combination is a dream-come-true set for enterprise Marketing Automation tools, but on the other hand, it enables mistakes and messy solutions. Find the right path to success through a best-practice fuelled checklist full of tool-based explanations and examples."),(0,i.kt)("a",{class:"button button--outline button--lg button--primary col col--6 col--offset-3",href:"https://mateuszdabrowski.pl/docs/zen-of-sfmc"},"Read about Zen of SFMC"),(0,i.kt)("h2",{id:"server-side-javascript"},"Server-Side JavaScript"),(0,i.kt)("p",null,"SSJS is an XX-century version of JavaScript paired with proprietary libraries created by Salesforce. It is one of the programmatic tools useful to leverage Marketing Cloud to its fullest potential. I am creating this documentation to make my (and hopefully also yours) work easier."),(0,i.kt)("h3",{id:"ssjs-documentation"},"SSJS Documentation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ssjs/ssjs-if-and-switch"},"If & Switch")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ssjs/ssjs-loops"},"Loops")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ssjs/debugging-ssjs"},"Debugging")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ssjs/ssjs-style-guide"},"Style Guide")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ssjs/ssjs-vs-ampscript-performance"},"Performance"))),(0,i.kt)("h3",{id:"ssjs-snippets"},"SSJS Snippets"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ssjs/ssjs-snippet-ampscript-in-ssjs"},"AMPScript in SSJS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ssjs/ssjs-snippet-mobileconnect-phone-change"},"MobileConnect Phone Change")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ssjs/ssjs-snippet-ssjs-script-template"},"SSJS Script Template"))),(0,i.kt)("a",{class:"button button--outline button--lg button--primary col col--6 col--offset-3",href:"https://mateuszdabrowski.pl/docs/ssjs/ssjs-if-and-switch"},"Read about SSJS"),(0,i.kt)("h2",{id:"javascript"},"JavaScript"),(0,i.kt)("p",null,"In this part, I am gathering selected elements of modern vanilla JavaScript that I find helpful for marketing technologists. Expect guides on asynchronous calls to API and backend resources, form-focused DOM manipulation and playing with data objects."),(0,i.kt)("h3",{id:"js-documentation"},"JS Documentation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/js/js-if-and-switch"},"If & Switch")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/js/js-loops"},"Loops"))),(0,i.kt)("a",{class:"button button--outline button--lg button--primary col col--6 col--offset-3",href:"https://mateuszdabrowski.pl/docs/js/js-if-and-switch"},"Read about JavaScript"),(0,i.kt)("h2",{id:"ampscript"},"AMPScript"),(0,i.kt)("p",null,"AMPScript is a proprietary scripting language in Salesforce Marketing Cloud along with ",(0,i.kt)("a",{parentName:"p",href:"#Server-Side-JavaScript"},"SSJS"),". Out of the two, it is simpler and more performant, but too limited for complex solutions. Good starting point for marketers without development experience. Best option for scripting in messaging."),(0,i.kt)("h3",{id:"ampscript-documentation"},"AMPScript Documentation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ampscript/ampscript-style-guide"},"Style Guide")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ssjs/ssjs-vs-ampscript-performance"},"Performance"))),(0,i.kt)("h3",{id:"ampscript-snippets"},"AMPScript Snippets"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ssjs/ssjs-snippet-ampscript-in-ssjs"},"AMPScript in SSJS"))),(0,i.kt)("a",{class:"button button--outline button--lg button--primary col col--6 col--offset-3",href:"https://mateuszdabrowski.pl/docs/ampscript/ampscript-style-guide"},"Read about AMPScript"),(0,i.kt)("h2",{id:"sfmc-sql"},"SFMC SQL"),(0,i.kt)("p",null,"To fully leverage the Salesforce Marketing Cloud Data Extensions and Automation Studio, SQL is a must-have. Here I gathered both the language basics and some of the most valuable snippets to copy and paste shamelessly."),(0,i.kt)("h3",{id:"sql-documentation"},"SQL Documentation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-basics"},"SQL Basics")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-select"},"Select")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-from"},"From")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-join"},"Join")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-where"},"Where")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-case"},"Case")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-like"},"Like")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-string-functions"},"String Functions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-date-functions"},"Date Functions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-numeric-functions"},"Numeric Functions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-conversion-functions"},"Conversion Functions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-aggregate-functions"},"Aggregate Functions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-style-guide"},"Style Guide"))),(0,i.kt)("h3",{id:"sql-snippets"},"SQL Snippets"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-snippet-debugging-email-sends"},"Debugging Email Sends")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-snippet-debugging-value-length"},"Debugging Value Length")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-snippet-enhanced-send-log"},"Enhanced Send Log"))),(0,i.kt)("a",{class:"button button--outline button--lg button--primary col col--6 col--offset-3",href:"https://mateuszdabrowski.pl/docs/sql/sfmc-sql-basics"},"Read about SFMC SQL"),(0,i.kt)("h2",{id:"sfmc-config"},"SFMC Config"),(0,i.kt)("p",null,"Many things in Salesforce Marketing Cloud aren't coding but have a massive impact on the code. Permissions. System Data Views. Configuration options. Here I focus on the most important ones that are crucial for Marketing Cloud developers."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/config/sfmc-config-permissions"},"Permissions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/config/sfmc-config-system-data-views"},"System Data Views")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/config/sfmc-config-features-on-demand"},"Features On Demand")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/config/sfmc-config-behavioral-triggers"},"Behavioral Triggers"))),(0,i.kt)("a",{class:"button button--outline button--lg button--primary col col--6 col--offset-3",href:"https://mateuszdabrowski.pl/docs/config/sfmc-config-system-data-views"},"Read about SFMC Config"),(0,i.kt)("h2",{id:"sfmc-use-cases"},"SFMC Use Cases"),(0,i.kt)("p",null,"Knowing how to code is one thing. Knowing what to code is another. In Use Cases, I focus not on specific features of the Marketing Cloud configuration or its programming languages but rather on using them to drive business value. Take a look and pick what you need."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/usecase/tailor-with-data"},"Tailor with Data")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/usecase/engage-with-countdown"},"Engage with Countdown")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/usecase/sfmc-cloud-page-apps"},"Solve with Cloud Page Apps")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/usecase/sfmc-contact-deletion"},"Contact Deletion Process"))),(0,i.kt)("a",{class:"button button--outline button--lg button--primary col col--6 col--offset-3",href:"https://mateuszdabrowski.pl/docs/usecase/sfmc-cloud-apps"},"Read about SFMC Config"),(0,i.kt)("h2",{id:"changes"},"Changes"),(0,i.kt)("p",null,"I'm updating the docs ongoingly, so expect changes. You can track those by watching and starring the website's ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl"},"Github Repository"),"."))}m.isMDXComponent=!0}}]);