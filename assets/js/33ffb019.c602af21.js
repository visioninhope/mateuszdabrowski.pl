"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[6576],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=c(a),d=i,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||s;return a?n.createElement(f,o(o({ref:t},p),{},{components:a})):n.createElement(f,o({ref:t},p))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,o=new Array(s);o[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[u]="string"==typeof e?e:i,o[1]=r;for(var c=2;c<s;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7271:(e,t,a)=>{a.d(t,{V:()=>s,z:()=>i});var n=a(7294);const i=e=>{let{link:t,text:a,newTab:i=!1}=e;return n.createElement(n.Fragment,null,n.createElement("a",{class:"button button--outline button--lg button--primary col col--6 col--offset-3",href:t,target:i?"_blank":"_self"},a))},s=e=>{let{linkLeft:t,textLeft:a,newTabLeft:i=!1,linkRight:s,textRight:o,newTabRight:r=!1}=e;return n.createElement(n.Fragment,null,n.createElement("div",{class:"col col--12"},n.createElement("a",{class:"button button--outline button--lg button--primary col col--5 col--offset-0",href:t,target:i?"_blank":"_self"},a),n.createElement("a",{class:"button button--outline button--lg button--primary col col--5 col--offset-2",href:s,target:r?"_blank":"_self"},o)))}},1872:(e,t,a)=>{a.d(t,{m:()=>s});var n=a(7294);const i="leadText_qzwo",s=e=>{let{content:t}=e;return n.createElement(n.Fragment,null,n.createElement("p",{id:i},t))}},4770:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var n=a(7462),i=(a(7294),a(4137)),s=a(1872),o=a(7271);const r={id:"docs-and-snippets",title:"Docs & Snippets",displayed_sidebar:"docs",slug:"/",description:"SSJS + JS + AMPScript + SQL + SFMC Config documentation and code snippets that I find useful for developing Salesforce Marketing Cloud.",image:"img/og/og-image-docs-and-snippets.png"},l=void 0,c={unversionedId:"docs-and-snippets",id:"docs-and-snippets",title:"Docs & Snippets",description:"SSJS + JS + AMPScript + SQL + SFMC Config documentation and code snippets that I find useful for developing Salesforce Marketing Cloud.",source:"@site/docs/docs-and-snippets.mdx",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/docs/docs-and-snippets.mdx",tags:[],version:"current",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1697287433,formattedLastUpdatedAt:"Oct 14, 2023",frontMatter:{id:"docs-and-snippets",title:"Docs & Snippets",displayed_sidebar:"docs",slug:"/",description:"SSJS + JS + AMPScript + SQL + SFMC Config documentation and code snippets that I find useful for developing Salesforce Marketing Cloud.",image:"img/og/og-image-docs-and-snippets.png"},sidebar:"docs"},p={},u=[{value:"Zen of SFMC",id:"zen-of-sfmc",level:2},{value:"Server-Side JavaScript",id:"server-side-javascript",level:2},{value:"SSJS Documentation",id:"ssjs-documentation",level:3},{value:"SSJS Snippets",id:"ssjs-snippets",level:3},{value:"JavaScript",id:"javascript",level:2},{value:"JS Documentation",id:"js-documentation",level:3},{value:"JS Snippets",id:"js-snippets",level:3},{value:"AMPScript",id:"ampscript",level:2},{value:"AMPScript Documentation",id:"ampscript-documentation",level:3},{value:"AMPScript Snippets",id:"ampscript-snippets",level:3},{value:"SFMC SQL",id:"sfmc-sql",level:2},{value:"SQL Documentation",id:"sql-documentation",level:3},{value:"SQL Snippets",id:"sql-snippets",level:3},{value:"SFMC Config",id:"sfmc-config",level:2},{value:"Marketing Cloud Personalization",id:"marketing-cloud-personalization",level:2},{value:"MC Personalization Documentation",id:"mc-personalization-documentation",level:3},{value:"MC Personalization Snippets",id:"mc-personalization-snippets",level:3},{value:"Changes",id:"changes",level:2}],m={toc:u},d="wrapper";function f(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(s.m,{content:"SSJS + JS + AMPScript + SQL + SFMC & MCP Config documentation and code snippets that I find useful for developing Salesforce Marketing Cloud.",mdxType:"LeadText"}),(0,i.kt)("h2",{id:"zen-of-sfmc"},"Zen of SFMC"),(0,i.kt)("p",null,"Salesforce Marketing Cloud is a complex and flexible tool. This combination is a dream-come-true set for enterprise Marketing Automation tools, but on the other hand, it enables mistakes and messy solutions. Find the right path to success through a best-practice fuelled checklist full of tool-based explanations and examples."),(0,i.kt)(o.z,{link:"./zen-of-sfmc/",text:"Read about Zen of SFMC",mdxType:"Button"}),(0,i.kt)("h2",{id:"server-side-javascript"},"Server-Side JavaScript"),(0,i.kt)("p",null,"SSJS is an XX-century version of JavaScript paired with proprietary libraries created by Salesforce. It is one of the programmatic tools useful to leverage Marketing Cloud to its fullest potential. I am creating this documentation to make my (and hopefully also yours) work easier."),(0,i.kt)("h3",{id:"ssjs-documentation"},"SSJS Documentation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ssjs/ssjs-if-and-switch"},"If & Switch")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ssjs/ssjs-loops"},"Loops")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ssjs/debugging-ssjs"},"Debugging")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ssjs/ssjs-style-guide"},"Style Guide")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ssjs/ssjs-vs-ampscript-performance"},"Performance"))),(0,i.kt)("h3",{id:"ssjs-snippets"},"SSJS Snippets"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ssjs/snippets/ampscript-in-ssjs"},"AMPScript in SSJS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ssjs/snippets/ssjs-mobileconnect-phone-change"},"MobileConnect Phone Change")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ssjs/snippets/ssjs-script-template"},"SSJS Script Template")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ssjs/snippets/sfmc-cloud-page-apps"},"Solve with Cloud Page Apps"))),(0,i.kt)(o.z,{link:"./category/ssjs/",text:"Read about SSJS",mdxType:"Button"}),(0,i.kt)("h2",{id:"javascript"},"JavaScript"),(0,i.kt)("p",null,"In this part, I am gathering selected elements of modern vanilla JavaScript that I find helpful for marketing technologists. Expect guides on asynchronous calls to API and backend resources, form-focused DOM manipulation and playing with data objects."),(0,i.kt)("h3",{id:"js-documentation"},"JS Documentation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/js/js-if-and-switch"},"If & Switch")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/js/js-loops"},"Loops")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/js/js-dom"},"Document Object Model (DOM)"))),(0,i.kt)("h3",{id:"js-snippets"},"JS Snippets"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/js/snippets/tailor-with-data"},"Tailor with Data")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/js/snippets/engage-with-countdown"},"Engage with Countdown")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/js/snippets/export-import-document-sfmc-roles"},"Export, Import & Document Roles in Salesforce Marketing Cloud"))),(0,i.kt)(o.z,{link:"./category/javascript/",text:"Read about JavaScript",mdxType:"Button"}),(0,i.kt)("h2",{id:"ampscript"},"AMPScript"),(0,i.kt)("p",null,"AMPScript is a proprietary scripting language in Salesforce Marketing Cloud along with ",(0,i.kt)("a",{parentName:"p",href:"#Server-Side-JavaScript"},"SSJS"),". Out of the two, it is simpler and more performant, but too limited for complex solutions. Good starting point for marketers without development experience. Best option for scripting in messaging."),(0,i.kt)("h3",{id:"ampscript-documentation"},"AMPScript Documentation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ampscript/ampscript-style-guide"},"Style Guide")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ssjs/ssjs-vs-ampscript-performance"},"Performance"))),(0,i.kt)("h3",{id:"ampscript-snippets"},"AMPScript Snippets"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ssjs/snippets/ampscript-in-ssjs"},"AMPScript in SSJS"))),(0,i.kt)(o.z,{link:"./category/ampscript/",text:"Read about AMPScript",mdxType:"Button"}),(0,i.kt)("h2",{id:"sfmc-sql"},"SFMC SQL"),(0,i.kt)("p",null,"To fully leverage the Salesforce Marketing Cloud Data Extensions and Automation Studio, SQL is a must-have. Here I gathered both the language basics and some of the most valuable snippets to copy and paste shamelessly."),(0,i.kt)("h3",{id:"sql-documentation"},"SQL Documentation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-basics"},"SQL Basics")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-select"},"Select")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-from"},"From")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-join"},"Join")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-where"},"Where")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-case"},"Case")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-like"},"Like")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-string-functions"},"String Functions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-date-functions"},"Date Functions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-numeric-functions"},"Numeric Functions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-conversion-functions"},"Conversion Functions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-aggregate-functions"},"Aggregate Functions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-null-functions"},"NULL Functions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-style-guide"},"Style Guide"))),(0,i.kt)("h3",{id:"sql-snippets"},"SQL Snippets"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/sql/snippets/sfmc-sql-debugging-email-sends"},"Debugging Email Sends")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/sql/snippets/sfmc-sql-debugging-value-length"},"Debugging Value Length"))),(0,i.kt)(o.z,{link:"./category/sfmc-sql/",text:"Read about SFMC SQL",mdxType:"Button"}),(0,i.kt)("h2",{id:"sfmc-config"},"SFMC Config"),(0,i.kt)("p",null,"Many things in Salesforce Marketing Cloud aren't coding but have a massive impact on the code. Permissions. System Data Views. Configuration options. Here I focus on the most important ones that are crucial for Marketing Cloud developers."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/config/sfmc-system-data-views"},"System Data Views")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/config/sfmc-contact-deletion"},"Contact Deletion Process")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/config/sfmc-mcc-integration-patterns"},"MCC Integration Patterns")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/config/sfmc-enhanced-send-log"},"Enhanced Send Log")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/config/sfmc-behavioral-triggers"},"Behavioral Triggers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/config/sfmc-code-resource"},"Power of Code Resources")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/config/sfmc-appexchange-solutions"},"AppExchange Solutions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/config/sfmc-features-on-demand"},"Features On Demand"))),(0,i.kt)(o.z,{link:"./category/sfmc-config/",text:"Read about SFMC Config",mdxType:"Button"}),(0,i.kt)("h2",{id:"marketing-cloud-personalization"},"Marketing Cloud Personalization"),(0,i.kt)("p",null,"Salesforce Marketing Cloud Personalization (Interaction Studio) is a cross-channel real-time hyper-personalisation engine in Salesforce Marketing Cloud. Behind that cool-looking description is a powerful tool that lets your company adapt every point of contact to each person. Neat!"),(0,i.kt)("h3",{id:"mc-personalization-documentation"},"MC Personalization Documentation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/interaction-studio/mcp-catalog-architecture"},"Catalog Objects Architeture")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/interaction-studio/mcp-open-time-email"},"Open Time Email Template")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/interaction-studio/mcp-serverside-code-basics"},"Serverside Code Basics")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/interaction-studio/mcp-serverside-code-properties"},"Serverside Code Properties"))),(0,i.kt)("h3",{id:"mc-personalization-snippets"},"MC Personalization Snippets"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/interaction-studio/snippets/mcp-catalog-etl-metadata-viewer"},"Catalog ETL Metadata Viewer"))),(0,i.kt)(o.z,{link:"./category/mc-personalization/",text:"Read about MC Personalization",mdxType:"Button"}),(0,i.kt)("h2",{id:"changes"},"Changes"),(0,i.kt)("p",null,"I'm updating the docs ongoingly, so expect changes. You can track those by watching and starring the website's ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl"},"Github Repository"),"."))}f.isMDXComponent=!0}}]);