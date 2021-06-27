(self.webpackChunkmd=self.webpackChunkmd||[]).push([[542],{4137:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),p=r,f=m["".concat(l,".").concat(p)]||m[p]||d[p]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8921:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(7294),r=n(6010),i="tableOfContentsInline_3fWc";function o(e){var t=e.toc,n=e.isChild;return t.length?a.createElement("ul",{className:n?"":"table-of-contents"},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(o,{isChild:!0,toc:e.children}))}))):null}var s=function(e){var t=e.toc;return a.createElement("div",{className:(0,r.Z)(i)},a.createElement(o,{toc:t}))}},2043:function(e,t,n){"use strict";n.d(t,{m:function(){return i}});var a=n(7294),r="leadText_16va",i=function(e){var t=e.content;return a.createElement(a.Fragment,null,a.createElement("p",{id:r},t))}},6498:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return m},default:function(){return f}});var a=n(2122),r=n(9756),i=(n(7294),n(4137)),o=n(8921),s=n(2043),l=["components"],c={id:"sfmc-sql-basics",title:"SFMC SQL Basics",sidebar_label:"SQL Basics",description:"SELECT your best contacts FROM Salesforce Marketing Cloud WHERE Data Filter is not enough"},u=void 0,d={unversionedId:"sql/sfmc-sql-basics",id:"sql/sfmc-sql-basics",isDocsHomePage:!1,title:"SFMC SQL Basics",description:"SELECT your best contacts FROM Salesforce Marketing Cloud WHERE Data Filter is not enough",source:"@site/docs/sql/sfmc-sql-basics.mdx",sourceDirName:"sql",slug:"/sql/sfmc-sql-basics",permalink:"/docs/sql/sfmc-sql-basics",editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/docs/sql/sfmc-sql-basics.mdx",version:"current",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1615417469,formattedLastUpdatedAt:"3/11/2021",frontMatter:{id:"sfmc-sql-basics",title:"SFMC SQL Basics",sidebar_label:"SQL Basics",description:"SELECT your best contacts FROM Salesforce Marketing Cloud WHERE Data Filter is not enough"},sidebar:"snippets",previous:{title:"AMPScript in SSJS",permalink:"/docs/ssjs/ssjs-snippet-ampscript-in-ssjs"},next:{title:"Select",permalink:"/docs/sql/sfmc-sql-select"}},m=[{value:"SQL in Salesforce Marketing Cloud",id:"sql-in-salesforce-marketing-cloud",children:[]},{value:"Fundamentals of SQL queries",id:"fundamentals-of-sql-queries",children:[]},{value:"Query Studio",id:"query-studio",children:[]}],p={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(s.m,{content:"SELECT your best contacts FROM Salesforce Marketing Cloud WHERE Data Filter is not enough.",mdxType:"LeadText"}),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Table of Contents")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)(o.Z,{toc:m,mdxType:"TOCInline"}))),(0,i.kt)("h2",{id:"sql-in-salesforce-marketing-cloud"},"SQL in Salesforce Marketing Cloud"),(0,i.kt)("p",null,"SQL (Structured Query Language) is one of the best ways to work with relational databases. And Marketing Cloud's Data Extensions, with the help of Data Designer, offers precisely that. A relational database. Same for system Data Views containing tracking data. Because of this, SQL is used in SFMC whenever powerful segmentation is needed (mostly using Automation Studio)."),(0,i.kt)("p",null,"The main difference from standard SQL (SFMC uses more or less SQL Server 2016) is that SFMC supports only ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," statement. Neither ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"UPDATE")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE")," are officially supported. It is because the queries are executed as a part of the backend query and are limited to provide non-breakable functionality."),(0,i.kt)("p",null,"Another limiting characteristic of SFMC SQL is visible in the data accessible by queries. Only data stored in data extensions or system data views is available. Moreover, you can save the results only to the data extensions. The reason is other data structures of SFMC are not relational databases."),(0,i.kt)("p",null,"Finally, the significant limitation that you might hit as your Marketing Cloud grows is the AutoKill. It will automatically stop your query if execution time exceeds the 30 minutes limit. Think about the query with the future in mind. It is especially important for queries that are supposed to be backbones of your data management flow in Marketing Cloud. Even if it works great now, consider how it will behave once you have more data in the system. One of the great ways to not trigger AutoKill is to implement retention periods for the Data Extensions used in the query to limit input data."),(0,i.kt)("h2",{id:"fundamentals-of-sql-queries"},"Fundamentals of SQL queries"),(0,i.kt)("p",null,"SQL is straightforward to read but requires a bit of understanding to write. However, with only the ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," being available, it is effortless to grasp."),(0,i.kt)("p",null,"There are four most important elements that you will be using in nearly every query in SFMC:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-select"},(0,i.kt)("inlineCode",{parentName:"a"},"SELECT")),": tell the query what data you want to leverage"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-from"},(0,i.kt)("inlineCode",{parentName:"a"},"FROM")),": tell the query where the data is in Marketing Cloud (name of Data Extension or System Data View)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-join"},(0,i.kt)("inlineCode",{parentName:"a"},"JOIN")),": tell the query how you want to merge data from multiple sources"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-where"},(0,i.kt)("inlineCode",{parentName:"a"},"WHERE")),": tell the query which part of the above data is interesting to you")),(0,i.kt)("p",null,"However, there is much to learn to unlock the full power of SQL in SFMC. Check out deep-dive docs on other SQL Statements (",(0,i.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-like"},(0,i.kt)("inlineCode",{parentName:"a"},"LIKE")),"), ",(0,i.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-string-functions"},"String"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-date-functions"},"Date"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-numeric-functions"},"Number"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-conversion-functions"},"Conversion")," Functions and ",(0,i.kt)("a",{parentName:"p",href:"/docs/config/sfmc-config-system-data-views"},"SFMC System Data Views"),"."),(0,i.kt)("h2",{id:"query-studio"},"Query Studio"),(0,i.kt)("p",null,"Working with queries in the out-of-the-box version of Salesforce Marketing Cloud is quite hard. Whenever you want to check the output of your query, you must run the SQL Query in Automation Studio and check the output Data Extension. There is, however, a better way."),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3A00000FP3yFUAT"},"Query Studio")," by Salesforce. It is a Marketing Cloud App available in ",(0,i.kt)("a",{parentName:"p",href:"https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3A00000FP3yFUAT"},"AppExchange")," that is must-have for anyone interested in working with SQL in SFMC. Think about SQL Server Studio or, if this is not telling you much, a one-stop-shop for writing, validating, checking and saving your queries. Check it. You will never look back. Learn more on ",(0,i.kt)("a",{parentName:"p",href:"https://sfmarketing.cloud/2019/08/05/query-studio-for-marketing-cloud/"},"sfmarketing.cloud"),"."))}f.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);