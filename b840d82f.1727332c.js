(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{100:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),i=(a(0),a(112)),o=a(113),s={id:"sfmc-sql-basics",title:"SFMC SQL Basics",sidebar_label:"SQL Basics",description:"SELECT your best contacts FROM Salesforce Marketing Cloud WHERE Data Filter is not enough"},c={unversionedId:"sql/sfmc-sql-basics",id:"sql/sfmc-sql-basics",isDocsHomePage:!1,title:"SFMC SQL Basics",description:"SELECT your best contacts FROM Salesforce Marketing Cloud WHERE Data Filter is not enough",source:"@site/docs/sql/sfmc-sql-basics.mdx",slug:"/sql/sfmc-sql-basics",permalink:"/docs/sql/sfmc-sql-basics",editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/docs/sql/sfmc-sql-basics.mdx",version:"current",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1606072531,sidebar_label:"SQL Basics",sidebar:"snippets",previous:{title:"JS Loops",permalink:"/docs/js/js-loops"},next:{title:"SFMC SQL Select",permalink:"/docs/sql/sfmc-sql-select"}},l=[{value:"SQL in Salesforce Marketing Cloud",id:"sql-in-salesforce-marketing-cloud",children:[]},{value:"Fundamentals of SQL queries",id:"fundamentals-of-sql-queries",children:[]},{value:"Query Studio",id:"query-studio",children:[]}],u={toc:l};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(o.a,{content:"SELECT your best contacts FROM Salesforce Marketing Cloud WHERE Data Filter is not enough.",mdxType:"LeadText"}),Object(i.b)("h2",{id:"sql-in-salesforce-marketing-cloud"},"SQL in Salesforce Marketing Cloud"),Object(i.b)("p",null,"SQL (Structured Query Language) is one of the best ways to work with relational databases. And Marketing Cloud's Data Extensions, with the help of Data Designer, offers precisely that. A relational database. Same for system Data Views containing tracking data. Because of this, SQL is used in SFMC whenever powerful segmentation is needed (mostly using Automation Studio)."),Object(i.b)("p",null,"The main difference from standard SQL (SFMC uses more or less SQL Server 2016) is that SFMC supports only ",Object(i.b)("inlineCode",{parentName:"p"},"SELECT")," statement. Neither ",Object(i.b)("inlineCode",{parentName:"p"},"INSERT"),", ",Object(i.b)("inlineCode",{parentName:"p"},"UPDATE")," or ",Object(i.b)("inlineCode",{parentName:"p"},"DELETE")," are officially supported. It is because the queries are executed as a part of the backend query and are limited to provide non-breakable functionality."),Object(i.b)("p",null,"Another limiting characteristic of SFMC SQL is visible in the data accessible by queries. Only data stored in data extensions or system data views is available. Moreover, you can save the results only to the data extensions. The reason is other data structures of SFMC are not relational databases."),Object(i.b)("p",null,"Finally, the significant limitation that you might hit as your Marketing Cloud grows is the AutoKill. It will automatically stop your query if execution time exceeds the 30 minutes limit. Think about the query with the future in mind. It is especially important for queries that are supposed to be backbones of your data management flow in Marketing Cloud. Even if it works great now, consider how it will behave once you have more data in the system. One of the great ways to not trigger AutoKill is to implement retention periods for the Data Extensions used in the query to limit input data."),Object(i.b)("h2",{id:"fundamentals-of-sql-queries"},"Fundamentals of SQL queries"),Object(i.b)("p",null,"SQL is straightforward to read but requires a bit of understanding to write. However, with only the ",Object(i.b)("inlineCode",{parentName:"p"},"SELECT")," being available, it is effortless to grasp."),Object(i.b)("p",null,"There are four most important elements that you will be using in nearly every query in SFMC:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/sql/sfmc-sql-select"}),Object(i.b)("inlineCode",{parentName:"a"},"SELECT")),": tell the query what data you want to leverage"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/sql/sfmc-sql-from"}),Object(i.b)("inlineCode",{parentName:"a"},"FROM")),": tell the query where the data is in Marketing Cloud (name of Data Extension or System Data View)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/sql/sfmc-sql-join"}),Object(i.b)("inlineCode",{parentName:"a"},"JOIN")),": tell the query how you want to merge data from multiple sources"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/sql/sfmc-sql-where"}),Object(i.b)("inlineCode",{parentName:"a"},"WHERE")),": tell the query which part of the above data is interesting to you")),Object(i.b)("p",null,"However, there is much to learn to unlock the full power of SQL in SFMC. Check out deep-dive docs on other SQL Statements (",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/sql/sfmc-sql-like"}),Object(i.b)("inlineCode",{parentName:"a"},"LIKE")),"), ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/sql/sfmc-sql-string-functions"}),"String"),", ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/sql/sfmc-sql-date-functions"}),"Date"),", ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/sql/sfmc-sql-numeric-functions"}),"Number"),", ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/sql/sfmc-sql-conversion-functions"}),"Conversion")," Functions and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/config/sfmc-config-system-data-views"}),"SFMC System Data Views"),"."),Object(i.b)("h2",{id:"query-studio"},"Query Studio"),Object(i.b)("p",null,"Working with queries in the out-of-the-box version of Salesforce Marketing Cloud is quite hard. Whenever you want to check the output of your query, you must run the SQL Query in Automation Studio and check the output Data Extension. There is, however, a better way."),Object(i.b)("p",null,"A ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3A00000FP3yFUAT"}),"Query Studio")," by Salesforce. It is a Marketing Cloud App available in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3A00000FP3yFUAT"}),"AppExchange")," that is must-have for anyone interested in working with SQL in SFMC. Think about SQL Server Studio or, if this is not telling you much, a one-stop-shop for writing, validating, checking and saving your queries. Check it. You will never look back. Learn more on ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://sfmarketing.cloud/2019/08/05/query-studio-for-marketing-cloud/"}),"sfmarketing.cloud"),"."))}b.isMDXComponent=!0},112:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return f}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},b=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(a),p=n,f=b["".concat(o,".").concat(p)]||b[p]||d[p]||i;return a?r.a.createElement(f,s(s({ref:t},l),{},{components:a})):r.a.createElement(f,s({ref:t},l))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},113:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),r=a(56),i=a.n(r);const o=({content:e})=>n.createElement(n.Fragment,null,n.createElement("p",{id:i.a.leadText},e))}}]);