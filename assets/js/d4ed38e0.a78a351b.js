"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[1441],{4137:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),d=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),m=d(n),c=r,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||o;return n?a.createElement(k,l(l({ref:e},p),{},{components:n})):a.createElement(k,l({ref:e},p))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2043:function(t,e,n){n.d(e,{m:function(){return o}});var a=n(7294),r="leadText_16va",o=function(t){var e=t.content;return a.createElement(a.Fragment,null,a.createElement("p",{id:r},e))}},9339:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var a=n(2122),r=n(9756),o=(n(7294),n(4137)),l=n(2043),i=["components"],s={id:"sfmc-sql-conversion-functions",title:"SFMC SQL Conversion Functions",sidebar_label:"Conversion Functions",description:"Break from the limits of Data Extension data types. Use full power of SQL to control your values."},d=void 0,p={unversionedId:"sql/sfmc-sql-conversion-functions",id:"sql/sfmc-sql-conversion-functions",isDocsHomePage:!1,title:"SFMC SQL Conversion Functions",description:"Break from the limits of Data Extension data types. Use full power of SQL to control your values.",source:"@site/docs/sql/sfmc-sql-conversion-functions.mdx",sourceDirName:"sql",slug:"/sql/sfmc-sql-conversion-functions",permalink:"/docs/sql/sfmc-sql-conversion-functions",editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/docs/sql/sfmc-sql-conversion-functions.mdx",version:"current",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1627682541,formattedLastUpdatedAt:"7/31/2021",frontMatter:{id:"sfmc-sql-conversion-functions",title:"SFMC SQL Conversion Functions",sidebar_label:"Conversion Functions",description:"Break from the limits of Data Extension data types. Use full power of SQL to control your values."},sidebar:"snippets",previous:{title:"Numeric Functions",permalink:"/docs/sql/sfmc-sql-numeric-functions"},next:{title:"Aggregate Functions",permalink:"/docs/sql/sfmc-sql-aggregate-functions"}},u=[{value:"CAST &amp; CONVERT",id:"cast--convert",children:[{value:"CAST",id:"cast",children:[]},{value:"CONVERT",id:"convert",children:[]},{value:"Data Types",id:"data-types",children:[]},{value:"CONVERT Style Codes",id:"convert-style-codes",children:[]}]}],m={toc:u};function c(t){var e=t.components,n=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(l.m,{content:"Break from the limits of source data types. Use the full power of SQL to transform your values.",mdxType:"LeadText"}),(0,o.kt)("p",null,"Salesforce Marketing Cloud SQL implementation does not support user-defined functions. There are, however, multiple built-in functions that are useful on a day-to-day basis when working with queries."),(0,o.kt)("p",null,"Here, I will cover only selected conversion functions, that I find most useful for Marketing Automation purposes. They will help you change the value types to enable the use of type-based Salesforce Marketing Cloud User Interface elements and type-specific functions."),(0,o.kt)("h2",{id:"cast--convert"},"CAST & CONVERT"),(0,o.kt)("p",null,"In Salesforce Marketing Cloud, you can use two universal conversion functions - ",(0,o.kt)("inlineCode",{parentName:"p"},"CAST")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"CONVERT"),"."),(0,o.kt)("h3",{id:"cast"},"CAST"),(0,o.kt)("p",null,"The first one, ",(0,o.kt)("inlineCode",{parentName:"p"},"CAST"),", is straightforward and available in all SQL dialects:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{3} title="Find all subscribers that joined after the given date"',"{3}":!0,title:'"Find',all:!0,subscribers:!0,that:!0,joined:!0,after:!0,the:!0,given:!0,'date"':!0},"SELECT SubscriberKey\nFROM Ent._Subscribers\nWHERE DateJoined > CAST('2020-10-30' AS DATE)\n")),(0,o.kt)("p",null,"It takes a value and expected datatype with ",(0,o.kt)("inlineCode",{parentName:"p"},"AS")," operator in between."),(0,o.kt)("p",null,"However, in Salesforce Marketing Cloud, it is much better to use ",(0,o.kt)("inlineCode",{parentName:"p"},"CONVERT")," function instead. It covers all features of ",(0,o.kt)("inlineCode",{parentName:"p"},"CAST")," plus adds quite a lot more. It is also better supported by the ",(0,o.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-basics#query-studio"},"Query Studio")," (for example, you cannot use ",(0,o.kt)("inlineCode",{parentName:"p"},"CAST")," in a ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT")," part of the query there)."),(0,o.kt)("h3",{id:"convert"},"CONVERT"),(0,o.kt)("p",null,"The basic form of ",(0,o.kt)("inlineCode",{parentName:"p"},"CONVERT")," is nearly the same as the ",(0,o.kt)("inlineCode",{parentName:"p"},"CAST")," with reversed order of arguments:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{3} title="Find all subscribers that joined after the given date"',"{3}":!0,title:'"Find',all:!0,subscribers:!0,that:!0,joined:!0,after:!0,the:!0,given:!0,'date"':!0},"SELECT SubscriberKey\nFROM Ent._Subscribers\nWHERE DateJoined > CONVERT(DATE, '2020-10-30')\n")),(0,o.kt)("p",null,"With both functions you can stack functions within for more complex calculations:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{2} title="Calculate the end of the trial period and output date only"',"{2}":!0,title:'"Calculate',the:!0,end:!0,of:!0,trial:!0,period:!0,and:!0,output:!0,date:!0,'only"':!0},"SELECT CONVERT(DATE, DATEADD(MM, 1, GETUTCDATE())) AS TrialPeriodEndDate\n")),(0,o.kt)("p",null,"Up to this point, ",(0,o.kt)("inlineCode",{parentName:"p"},"CAST")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"CONVERT")," seem similar in the features."),(0,o.kt)("p",null,"However, only ",(0,o.kt)("inlineCode",{parentName:"p"},"CONVERT")," have an additional third optional argument - ",(0,o.kt)("a",{parentName:"p",href:"#convert-style-codes"},"style"),". Thanks to it, you can convert even from non-standard (for the server) formats that would result in an error:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:"{3} title=\"Converting dd/MM/yyyy format throws 'Could not convert date and/or time from string data type'\"","{3}":!0,title:'"Converting',"dd/MM/yyyy":!0,format:!0,throws:!0,"'Could":!0,not:!0,convert:!0,date:!0,"and/or":!0,time:!0,from:!0,string:!0,data:!0,"type'\"":!0},"SELECT SubscriberKey\nFROM _Subscribers\nWHERE DateJoined > CONVERT(DATE, '30/10/2019') /* Error */\n")),(0,o.kt)("p",null,"With ",(0,o.kt)("a",{parentName:"p",href:"#convert-style-codes"},"style codes"),", we can make it work with minimal change:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{3} title="Converting dd/MM/yyyy format with appropriate style code"',"{3}":!0,title:'"Converting',"dd/MM/yyyy":!0,format:!0,with:!0,appropriate:!0,style:!0,'code"':!0},"SELECT SubscriberKey\nFROM _Subscribers\nWHERE DateJoined > CONVERT(DATE, '30/10/2019', 103)\n")),(0,o.kt)("p",null,"It is not possible with ",(0,o.kt)("inlineCode",{parentName:"p"},"CAST"),"."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"You Should Know")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can also leverage ",(0,o.kt)("a",{parentName:"p",href:"#convert-style-codes"},"style codes")," to format your dates during conversion to string, without the need to use ",(0,o.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-date-functions#format-with-dates"},(0,o.kt)("inlineCode",{parentName:"a"},"FORMAT"))," function on top."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n      CONVERT(NVARCHAR, GETDATE(), 101) AS DateFormat1   /* Output: 10/30/2020 */\n    , CONVERT(NVARCHAR, GETDATE(), 102) AS DateFormat2   /* Output: 2020.10.30 */\n    , CONVERT(NVARCHAR, GETDATE(), 107) AS DateFormat3   /* Output: Oct 30, 2020 */\n")))),(0,o.kt)("h3",{id:"data-types"},"Data Types"),(0,o.kt)("p",null,"There are over 30 data types available for conversion, but there are only a few that are useful on a day-to-day basis in Salesforce Marketing Cloud:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"CHAR"),(0,o.kt)("td",{parentName:"tr",align:null},"Fixed-length string"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"NCHAR"),(0,o.kt)("td",{parentName:"tr",align:null},"Fixed-length string with Unicode support"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"VARCHAR"),(0,o.kt)("td",{parentName:"tr",align:null},"Variable-length string"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"NVARCHAR"),(0,o.kt)("td",{parentName:"tr",align:null},"Variable-length string with Unicode support"),(0,o.kt)("td",{parentName:"tr",align:null},"Best option for most SFMC string use cases")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"DECIMAL/NUMERIC"),(0,o.kt)("td",{parentName:"tr",align:null},"Decimal number with big precision"),(0,o.kt)("td",{parentName:"tr",align:null},"Best option if you need a decimal number")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"INT"),(0,o.kt)("td",{parentName:"tr",align:null},"Integer number"),(0,o.kt)("td",{parentName:"tr",align:null},"Best option if your number is not decimal")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"BIGINT"),(0,o.kt)("td",{parentName:"tr",align:null},"Big integer number"),(0,o.kt)("td",{parentName:"tr",align:null},"When your number is bigger than 2,147,483,647, you need BIGINT")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"DATETIME"),(0,o.kt)("td",{parentName:"tr",align:null},"Legacy date and time"),(0,o.kt)("td",{parentName:"tr",align:null},"More friendly default formatting")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"DATETIME2"),(0,o.kt)("td",{parentName:"tr",align:null},"Modern date and time"),(0,o.kt)("td",{parentName:"tr",align:null},"Best when you need both date and time")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"DATETIMEOFFSET"),(0,o.kt)("td",{parentName:"tr",align:null},"Date with offset"),(0,o.kt)("td",{parentName:"tr",align:null},"When you need timezone offset")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"DATE"),(0,o.kt)("td",{parentName:"tr",align:null},"Only date"),(0,o.kt)("td",{parentName:"tr",align:null},"Best when you need date only")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"TIME"),(0,o.kt)("td",{parentName:"tr",align:null},"Only time"),(0,o.kt)("td",{parentName:"tr",align:null},"Best when you need time only")))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"You Should Know")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"There are also two more data types: ",(0,o.kt)("inlineCode",{parentName:"p"},"FLOAT")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"REAL"),". Don't use them. Both are ",(0,o.kt)("strong",{parentName:"p"},"Approximate")," Numeric Data Types and can lead to unpredicted behaviour, especially when used for equality-based conditions in ",(0,o.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-where"},(0,o.kt)("inlineCode",{parentName:"a"},"WHERE")),". ",(0,o.kt)("inlineCode",{parentName:"p"},"DECIMAL"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"NUMERIC")," is the way to go."))),(0,o.kt)("p",null,"When converting values to the selected data type, you can have even more control by passing optional argument right after type to declare the length of the output."),(0,o.kt)("p",null,"It is instrumental with ",(0,o.kt)("inlineCode",{parentName:"p"},"DECIMAL")," as it allows you to provide expected precision (number of digits in a number) and scale (number of digits to the right of the decimal point in a number)."),(0,o.kt)("p",null,"For example, you may have a string field containing a product price - ",(0,o.kt)("inlineCode",{parentName:"p"},"'123.99'"),". If you convert it to ",(0,o.kt)("inlineCode",{parentName:"p"},"DECIMAL")," without any arguments, it will round to ",(0,o.kt)("inlineCode",{parentName:"p"},"124"),". However, you can provide precision and scale to keep the current format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n      CONVERT(DECIMAL, '123.99')      AS RoundedConversion /* Output: 124 */\n    , CONVERT(DECIMAL(5,2), '123.99') AS FullConversion    /* Output: 123.99 */\n")),(0,o.kt)("p",null,"Be sure to add correct precision. If it is smaller then the values in your source, it will lead to an error. It's better to have too big precision than too small."),(0,o.kt)("p",null,"As for scale - if your scale is smaller than in your source, the value is rounded."),(0,o.kt)("p",null,"You can also use the single argument with ",(0,o.kt)("inlineCode",{parentName:"p"},"DATETIME"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"DATETIME2"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"DATETIMEOFFSET")," (to control precision of the output) and string data types (",(0,o.kt)("inlineCode",{parentName:"p"},"CHAR"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"NCHAR"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"VARCHAR"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"NVARCHAR"),"). The latter won't directly limit the number of characters, but rather the number of bytes (which might be equal or not to the number of characters depending on what characters you are using)."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CHAR")," allows for 1-8000 bytes range, whereas ",(0,o.kt)("inlineCode",{parentName:"p"},"NCHAR")," due to Unicode support allows for only 1-4000. ",(0,o.kt)("inlineCode",{parentName:"p"},"VARCHAR")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"NVARCHAR")," support the same ranges respectively and have an additional possible option - ",(0,o.kt)("inlineCode",{parentName:"p"},"max")," that you can use if some values might exceed the range."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"You Should Know")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Always double-check the choice of data type you want to convert to, as it might have a massive impact into outcome."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Different outcomes depending on the output data type"',title:'"Different',outcomes:!0,depending:!0,on:!0,the:!0,output:!0,data:!0,'type"':!0},"SELECT\n      CAST(6.9 AS INT)      AS CastToInt        /* Output: 6 */\n    , CAST(6.9 AS DECIMAL)  AS CastToNumeric    /* Output: 7 */\n    , CONVERT(INT, 6.9)     AS ConvertToInt     /* Output: 6 */\n    , CONVERT(DECIMAL, 6.9) AS ConvertToNumeric /* Output: 7 */\n")),(0,o.kt)("p",{parentName:"div"},"It is happening because conversions from ",(0,o.kt)("inlineCode",{parentName:"p"},"DECIMAL")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"FLOAT")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"INT")," are truncated. The rest is rounded if no specific precision/scale argument is available."))),(0,o.kt)("h3",{id:"convert-style-codes"},"CONVERT Style Codes"),(0,o.kt)("p",null,"Just as with data types - there are many style codes available. Here I will cover just the most popular ones (if you don't understand some formats codes, check ",(0,o.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-date-functions#custom-date-formats"},"date formats guide"),"):"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Date format"),(0,o.kt)("th",{parentName:"tr",align:null},"Style code"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MMM dd yyyy hh:mmtt"),(0,o.kt)("td",{parentName:"tr",align:null},"100")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MM/dd/yyyy"),(0,o.kt)("td",{parentName:"tr",align:null},"101")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"yyyy.mm.dd"),(0,o.kt)("td",{parentName:"tr",align:null},"102")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"dd/mm/yyyy"),(0,o.kt)("td",{parentName:"tr",align:null},"103")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"dd.mm.yyyy"),(0,o.kt)("td",{parentName:"tr",align:null},"104")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"dd-mm-yyyy"),(0,o.kt)("td",{parentName:"tr",align:null},"105")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"dd MMM yyyy"),(0,o.kt)("td",{parentName:"tr",align:null},"106")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MMM dd, yyyy"),(0,o.kt)("td",{parentName:"tr",align:null},"107")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"HH:mm:ss"),(0,o.kt)("td",{parentName:"tr",align:null},"108")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MM-dd-yyyy"),(0,o.kt)("td",{parentName:"tr",align:null},"110")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"yyyy/MM/dd"),(0,o.kt)("td",{parentName:"tr",align:null},"111")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"yyyyMMdd"),(0,o.kt)("td",{parentName:"tr",align:null},"112")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"yyyy-MM-dd HH:mm:ss"),(0,o.kt)("td",{parentName:"tr",align:null},"120")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MM/dd/yy hh:mm:ss tt"),(0,o.kt)("td",{parentName:"tr",align:null},"22")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"yyyy-mm-dd"),(0,o.kt)("td",{parentName:"tr",align:null},"23")))),(0,o.kt)("p",null,"Use it by adding the style code as the third argument of the ",(0,o.kt)("a",{parentName:"p",href:"#convert"},(0,o.kt)("inlineCode",{parentName:"a"},"CONVERT"))," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n      CONVERT(NVARCHAR, GETDATE(), 101)              AS DateAsString\n    , CONVERT(DATETIME2, '2020-12-31 19:00:00', 120) AS StringAsDate\n")),(0,o.kt)("p",null,"You can find the full list of style codes on ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/sql/t-sql/functions/cast-and-convert-transact-sql?view=sql-server-ver15#date-and-time-styles"},"Microsoft .Net Doc Pages"),"."))}c.isMDXComponent=!0}}]);