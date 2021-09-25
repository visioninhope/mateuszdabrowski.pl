"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[7542],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2043:function(e,t,n){n.d(t,{m:function(){return i}});var a=n(7294),r="leadText_16va",i=function(e){var t=e.content;return a.createElement(a.Fragment,null,a.createElement("p",{id:r},t))}},6927:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(4137)),o=n(2043),s=["components"],l={id:"sfmc-sql-basics",title:"SFMC SQL Basics",sidebar_label:"SQL Basics",description:"SELECT your best contacts FROM Salesforce Marketing Cloud WHERE Data Filter is not enough.",image:"img/og/og-image-sql-basics.png",tags:["Marketing Cloud","SQL"]},u=void 0,c={unversionedId:"sql/sfmc-sql-basics",id:"sql/sfmc-sql-basics",isDocsHomePage:!1,title:"SFMC SQL Basics",description:"SELECT your best contacts FROM Salesforce Marketing Cloud WHERE Data Filter is not enough.",source:"@site/docs/sql/sfmc-sql-basics.mdx",sourceDirName:"sql",slug:"/sql/sfmc-sql-basics",permalink:"/docs/sql/sfmc-sql-basics",editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/docs/sql/sfmc-sql-basics.mdx",tags:[{label:"Marketing Cloud",permalink:"/docs/tags/marketing-cloud"},{label:"SQL",permalink:"/docs/tags/sql"}],version:"current",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1632606565,formattedLastUpdatedAt:"9/25/2021",frontMatter:{id:"sfmc-sql-basics",title:"SFMC SQL Basics",sidebar_label:"SQL Basics",description:"SELECT your best contacts FROM Salesforce Marketing Cloud WHERE Data Filter is not enough.",image:"img/og/og-image-sql-basics.png",tags:["Marketing Cloud","SQL"]},sidebar:"snippets",previous:{title:"AMPScript in SSJS",permalink:"/docs/ssjs/ssjs-snippet-ampscript-in-ssjs"},next:{title:"Select",permalink:"/docs/sql/sfmc-sql-select"}},d=[{value:"SQL in Salesforce Marketing Cloud",id:"sql-in-salesforce-marketing-cloud",children:[]},{value:"Fundamentals of SQL queries",id:"fundamentals-of-sql-queries",children:[]},{value:"Query Studio",id:"query-studio",children:[]}],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.m,{content:"SELECT your best contacts FROM Salesforce Marketing Cloud WHERE Data Filter is not enough.",mdxType:"LeadText"}),(0,i.kt)("h2",{id:"sql-in-salesforce-marketing-cloud"},"SQL in Salesforce Marketing Cloud"),(0,i.kt)("p",null,"SQL (Structured Query Language) is one of the best ways to work with relational databases. And Marketing Cloud's Data Extensions, with the help of Data Designer, offers precisely that. A relational database. Same for system Data Views containing tracking data. Because of this, SQL is used in SFMC whenever powerful segmentation is needed (mostly using Automation Studio)."),(0,i.kt)("p",null,"The main difference from standard SQL (SFMC uses more or less SQL Server 2016) is that SFMC supports only ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," statement. Neither ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"UPDATE")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE")," are officially supported. It is because the queries are executed as a part of the backend query and are limited to provide non-breakable functionality."),(0,i.kt)("p",null,"Another limiting characteristic of SFMC SQL is visible in the data accessible by queries. Only data stored in data extensions or system data views is available. Moreover, you can save the results only to the data extensions. The reason is other data structures of SFMC are not relational databases."),(0,i.kt)("p",null,"Finally, the significant limitation that you might hit as your Marketing Cloud grows is the AutoKill. It will automatically stop your query if execution time exceeds the 30 minutes limit. Think about the query with the future in mind. It is especially important for queries that are supposed to be backbones of your data management flow in Marketing Cloud. Even if it works great now, consider how it will behave once you have more data in the system. One of the great ways to not trigger AutoKill is to implement retention periods for the Data Extensions used in the query to limit input data."),(0,i.kt)("h2",{id:"fundamentals-of-sql-queries"},"Fundamentals of SQL queries"),(0,i.kt)("p",null,"SQL is straightforward to read but requires a bit of understanding to write. However, with only the ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," being available, it is effortless to grasp."),(0,i.kt)("p",null,"There are four most important elements that you will be using in nearly every query in SFMC:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-select"},(0,i.kt)("inlineCode",{parentName:"a"},"SELECT")),": tell the query what data you want to leverage"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-from"},(0,i.kt)("inlineCode",{parentName:"a"},"FROM")),": tell the query where the data is in Marketing Cloud (name of Data Extension or System Data View)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-join"},(0,i.kt)("inlineCode",{parentName:"a"},"JOIN")),": tell the query how you want to merge data from multiple sources"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-where"},(0,i.kt)("inlineCode",{parentName:"a"},"WHERE")),": tell the query which part of the above data is interesting to you")),(0,i.kt)("p",null,"However, there is much to learn to unlock the full power of SQL in SFMC. Check out deep-dive docs on other SQL Statements (",(0,i.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-like"},(0,i.kt)("inlineCode",{parentName:"a"},"LIKE")),"), ",(0,i.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-string-functions"},"String"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-date-functions"},"Date"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-numeric-functions"},"Numeric"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-conversion-functions"},"Conversion"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-aggregate-functions"},"Aggregate")," Functions and ",(0,i.kt)("a",{parentName:"p",href:"/docs/config/sfmc-config-system-data-views"},"SFMC System Data Views"),"."),(0,i.kt)("h2",{id:"query-studio"},"Query Studio"),(0,i.kt)("p",null,"Working with queries in the out-of-the-box version of Salesforce Marketing Cloud is quite hard. Whenever you want to check the output of your query, you must run the SQL Query in Automation Studio and check the output Data Extension. There is, however, a better way."),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3A00000FP3yFUAT"},"Query Studio")," by Salesforce. It is a Marketing Cloud App available in ",(0,i.kt)("a",{parentName:"p",href:"https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3A00000FP3yFUAT"},"AppExchange")," that is must-have for anyone interested in working with SQL in SFMC. Think about SQL Server Studio or, if this is not telling you much, a one-stop-shop for writing, validating, checking and saving your queries. Check it. You will never look back. Learn more on ",(0,i.kt)("a",{parentName:"p",href:"https://sfmarketing.cloud/2019/08/05/query-studio-for-marketing-cloud/"},"sfmarketing.cloud"),"."))}m.isMDXComponent=!0}}]);