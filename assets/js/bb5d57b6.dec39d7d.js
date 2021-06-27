(self.webpackChunkmd=self.webpackChunkmd||[]).push([[773],{4137:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,h=d["".concat(l,".").concat(p)]||d[p]||m[p]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8921:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(7294),r=n(6010),o="tableOfContentsInline_3fWc";function i(e){var t=e.toc,n=e.isChild;return t.length?a.createElement("ul",{className:n?"":"table-of-contents"},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(i,{isChild:!0,toc:e.children}))}))):null}var s=function(e){var t=e.toc;return a.createElement("div",{className:(0,r.Z)(o)},a.createElement(i,{toc:t}))}},2043:function(e,t,n){"use strict";n.d(t,{m:function(){return o}});var a=n(7294),r="leadText_16va",o=function(e){var t=e.content;return a.createElement(a.Fragment,null,a.createElement("p",{id:r},t))}},8331:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return d},default:function(){return h}});var a=n(2122),r=n(9756),o=(n(7294),n(4137)),i=n(8921),s=n(2043),l=["components"],u={id:"sfmc-sql-numeric-functions",title:"SFMC SQL Numeric Functions",sidebar_label:"Numeric Functions",description:"Take control over numbers with built-in SQL functions. Let the query do the job."},c=void 0,m={unversionedId:"sql/sfmc-sql-numeric-functions",id:"sql/sfmc-sql-numeric-functions",isDocsHomePage:!1,title:"SFMC SQL Numeric Functions",description:"Take control over numbers with built-in SQL functions. Let the query do the job.",source:"@site/docs/sql/sfmc-sql-numeric-functions.mdx",sourceDirName:"sql",slug:"/sql/sfmc-sql-numeric-functions",permalink:"/docs/sql/sfmc-sql-numeric-functions",editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/docs/sql/sfmc-sql-numeric-functions.mdx",version:"current",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1616624113,formattedLastUpdatedAt:"3/24/2021",frontMatter:{id:"sfmc-sql-numeric-functions",title:"SFMC SQL Numeric Functions",sidebar_label:"Numeric Functions",description:"Take control over numbers with built-in SQL functions. Let the query do the job."},sidebar:"snippets",previous:{title:"Date Functions",permalink:"/docs/sql/sfmc-sql-date-functions"},next:{title:"Conversion Functions",permalink:"/docs/sql/sfmc-sql-conversion-functions"}},d=[{value:"COUNT",id:"count",children:[]},{value:"MIN and MAX",id:"min-and-max",children:[]},{value:"FORMAT with Numbers",id:"format-with-numbers",children:[{value:"Standard number formats",id:"standard-number-formats",children:[]},{value:"Custom number formats",id:"custom-number-formats",children:[]}]}],p={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(s.m,{content:"Take control over numbers with built-in SQL functions. Let the query do the job.",mdxType:"LeadText"}),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Table of Contents")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)(i.Z,{toc:d,mdxType:"TOCInline"}))),(0,o.kt)("p",null,"Salesforce Marketing Cloud SQL implementation does not support user-defined functions. There are, however, multiple built-in functions that are useful on a day-to-day basis when working with queries."),(0,o.kt)("p",null,"Here, I will cover only selected numeric functions, that I find most useful for Marketing Automation purposes. They will help you do the necessary calculations or format the numbers to match your needs."),(0,o.kt)("h2",{id:"count"},"COUNT"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"COUNT")," function allows you to count the number of rows that matches a query. It is excellent for both ",(0,o.kt)("em",{parentName:"p"},"ad hoc")," data exploration as well as creating administrative queries that help maintain your instance."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{1} title="Count all rows in the _Subscribers Data View"',"{1}":!0,title:'"Count',all:!0,rows:!0,in:!0,the:!0,_Subscribers:!0,Data:!0,'View"':!0},"SELECT COUNT(*)\nFROM _Subscribers\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"You Should Know")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you are counting huge dataset (more than 2,147,483,647 records) use ",(0,o.kt)("inlineCode",{parentName:"p"},"COUNT_BIG")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"COUNT"),"."))),(0,o.kt)("p",null,"Nice, but it does not give us any information that we couldn't find more comfortable in the User Interface. So where is the value?"),(0,o.kt)("p",null,"For example, in seeing whether you have potential duplicate contacts. Instead of looking for all rows with ",(0,o.kt)("inlineCode",{parentName:"p"},"COUNT(*)"),", we will change the function parameter to the specific column to count only its values."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{3,6} title="This query will show you which Email Addresses exists on more than one contact"',"{3,6}":!0,title:'"This',query:!0,will:!0,show:!0,you:!0,which:!0,Email:!0,Addresses:!0,exists:!0,on:!0,more:!0,than:!0,one:!0,'contact"':!0},"SELECT\n      s.EmailAddress\n    , COUNT(s.EmailAddress) AS EmailCount\nFROM _Subscribers AS s\nGROUP BY s.EmailAddress\nHAVING COUNT(s.EmailAddress) > 1\n")),(0,o.kt)("p",null,"With ",(0,o.kt)("inlineCode",{parentName:"p"},"GROUP BY")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"HAVING")," we simplify the output to show only the duplicate values with corresponding counts."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"You Should Know")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can take it to the next level with the subquery approach:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{11-12} title="Returns Subscriber Key, Email Address and Duplicate Count of your database"',"{11-12}":!0,title:'"Returns',Subscriber:!0,"Key,":!0,Email:!0,Address:!0,and:!0,Duplicate:!0,Count:!0,of:!0,your:!0,'database"':!0},"SELECT\n      s.SubscriberKey\n    , s.EmailAddress\n    , counted.EmailCount\nFROM _Subscribers AS s\n    INNER JOIN (\n        SELECT\n              s.EmailAddress        AS EmailAddress\n            , COUNT(s.EmailAddress) AS EmailCount\n        FROM _Subscribers AS s\n        GROUP BY s.EmailAddress\n        HAVING COUNT(s.EmailAddress) > 1\n    ) AS counted\n        ON counted.EmailAddress = s.EmailAddress\n")),(0,o.kt)("p",{parentName:"div"},"This extended query will not only tell you that there are potential duplicates. It will also give you Subscriber Keys of duplicate contacts so that you can investigate the reason and clean up records after fixing the underlying issue."),(0,o.kt)("p",{parentName:"div"},"Pack it into Automation with Verification Activity on top and keep your database clean with ease."))),(0,o.kt)("h2",{id:"min-and-max"},"MIN and MAX"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"MIN")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"MAX")," functions allow you to find the minimum and maximum values of column(s) in the selected data extension."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{1} title="What is your highest subscriber bounce count?"',"{1}":!0,title:'"What',is:!0,your:!0,highest:!0,subscriber:!0,bounce:!0,'count?"':!0},"SELECT MAX(s.BounceCount) AS HighestBounceCount\nFROM _Subscribers AS s\n")),(0,o.kt)("p",null,"Will you use it frequently? Probably not. Is it useless? Oh no."),(0,o.kt)("p",null,"Let's say you have a data extension storing information about a competition - including the number of points that participants gathered. Now it is time to send congratulations to the winner. ",(0,o.kt)("inlineCode",{parentName:"p"},"MAX")," function will make it easy."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{7-8} title="Get a Subscriber Key and Points of all the customers that have the biggest amount of points"',"{7-8}":!0,title:'"Get',a:!0,Subscriber:!0,Key:!0,and:!0,Points:!0,of:!0,all:!0,the:!0,customers:!0,that:!0,have:!0,biggest:!0,amount:!0,'points"':!0},"SELECT\n      comp.SubscriberKey\n    , comp.CompetitionPoints\nFROM CompetitionDataExtension AS comp\nWHERE\n    comp.CompetitionPoints = (\n        SELECT MAX(comp2.CompetitionPoints)\n        FROM CompetitionDataExtension AS comp2\n    )\n")),(0,o.kt)("p",null,"However, my favourite use case for ",(0,o.kt)("inlineCode",{parentName:"p"},"MAX")," is debugging Data Extensions and its values. Especially useful when you are working with data imports from external systems \u2014 for example, pulling data from Sales Cloud via Marketing Cloud Connect."),(0,o.kt)("p",null,"You might frequently encounter a situation where your automations responsible for moving data from Synchronized Data Extensions to standard Data Extensions crashes with cryptic information about truncated data. In most cases, the reason is a value exceeding the maximum length you set for the column in your local Data Extension."),(0,o.kt)("p",null,"How to find the culprit? With ",(0,o.kt)("inlineCode",{parentName:"p"},"MAX")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-string-functions#len"},(0,o.kt)("inlineCode",{parentName:"a"},"LEN"))," functions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",19:!0,className:"language-sql",metastring:'{2-3} title="For Datetime values, it will output 19 characters"',"{2-3}":!0,title:'"For',Datetime:!0,"values,":!0,it:!0,will:!0,output:!0,'characters"':!0},"SELECT\n      MAX(LEN(c.Id))    AS SubscriberKey\n    , MAX(LEN(c.Email)) AS EmailAddress\n    /* Rest of the Contact fields you synchronized from Contact object */\nFROM Contact_Salesforce AS c\n")),(0,o.kt)("p",null,"This query can be used ",(0,o.kt)("em",{parentName:"p"},"ad hoc")," in ",(0,o.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-basics#query-studio"},"Query Studio")," to quickly show your current maximum lengths of the values coming from Sales Cloud. Compare them to the length of your fields in destination data extension to see which column is crashing your automation."),(0,o.kt)("p",null,"You can also extend it with ",(0,o.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-where"},(0,o.kt)("inlineCode",{parentName:"a"},"WHERE"))," containing current lengths of fields in that data extension and make it part of your automation. It will find the records that are too long for the data extension, log it into data extension and allow you to leverage Verification Activity to alert you about the issue. Nice and clean."),(0,o.kt)("h2",{id:"format-with-numbers"},"FORMAT with Numbers"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"FORMAT")," works only with datetime and numeric values, outputs a string and requires:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Value to be formatted (can be a column, string or function)"),(0,o.kt)("li",{parentName:"ol"},"Format specifier to be applied"),(0,o.kt)("li",{parentName:"ol"},"Optionally - ISO culture code")),(0,o.kt)("p",null,"It is a perfect tool to manipulate any numbers (or numeric strings with the help of ",(0,o.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-conversion-functions"},"conversion"),") available in your Data Extensions."),(0,o.kt)("h3",{id:"standard-number-formats"},"Standard number formats"),(0,o.kt)("p",null,"Standard formats use one required and one optional element."),(0,o.kt)("p",null,"The required one is the format specifier - tells what the outcome should be. The optional is precision - allows you to change the value on the go (for example, round it to two decimal places). If you do not use precision, the value will stay with its current precision."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Precision might lead to rounding. Note also the US thousands separator"',title:'"Precision',might:!0,lead:!0,to:!0,"rounding.":!0,Note:!0,also:!0,the:!0,US:!0,thousands:!0,'separator"':!0},"SELECT\n      FORMAT(1234.56, 'N')  AS WithoutCustomPrecision     /* Output: 1,234.56 */\n    , FORMAT(1234.56, 'N1') AS RoundedWithCustomPrecision /* Output: 1,234.6 */\n")),(0,o.kt)("p",null,"There are nine standard formats available, but only a few are useful on a day-to-day basis in Salesforce Marketing Cloud:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Format specifier"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Example (for US culture)"),(0,o.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"'C'/'c'"),(0,o.kt)("td",{parentName:"tr",align:null},"Currency"),(0,o.kt)("td",{parentName:"tr",align:null},"$1,234.56"),(0,o.kt)("td",{parentName:"tr",align:null},"You can pass a culture code as a third argument to format the value straight to needed currency (including currency symbol and appropriate separators)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"'D'/'d'"),(0,o.kt)("td",{parentName:"tr",align:null},"Decimal"),(0,o.kt)("td",{parentName:"tr",align:null},"1235"),(0,o.kt)("td",{parentName:"tr",align:null},"Support integers only. Precision enforces a minimum number of digits (great for adding leading zeroes)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"'N'/'n'"),(0,o.kt)("td",{parentName:"tr",align:null},"Number"),(0,o.kt)("td",{parentName:"tr",align:null},"1,234.56"),(0,o.kt)("td",{parentName:"tr",align:null},"Precision enforces a number of decimal places. You can pass a culture code as a third argument to format the value to country-specific notation")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"'P'/'p'"),(0,o.kt)("td",{parentName:"tr",align:null},"Percent"),(0,o.kt)("td",{parentName:"tr",align:null},"12.34 %"),(0,o.kt)("td",{parentName:"tr",align:null},"Precision enforces a number of decimal places. You can pass a culture code as a third argument to format the value to country-specific notation")))),(0,o.kt)("p",null,"Just as highlighted in the table header - the examples are for the SFMC default US culture formating."),(0,o.kt)("p",null,"You can find the full list of standard date format specifiers on ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-numeric-format-strings"},"Microsoft .Net Doc Pages"),"."),(0,o.kt)("h3",{id:"custom-number-formats"},"Custom number formats"),(0,o.kt)("p",null,"Of course, the formats shown above are not the limit of what you can do. Whenever you want something different, you can create a custom format by just providing a pattern:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Format specifier"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"'0'"),(0,o.kt)("td",{parentName:"tr",align:null},"Zero placeholder"),(0,o.kt)("td",{parentName:"tr",align:null},"Replaces the zero with the digit if available; otherwise, zero appears in the result string.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"'#''"),(0,o.kt)("td",{parentName:"tr",align:null},"Number placeholder"),(0,o.kt)("td",{parentName:"tr",align:null},"Replaces the zero with the digit if available; otherwise, no number appears in the result string. It also ignores not significant zeroes (like leading ones)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"'.'"),(0,o.kt)("td",{parentName:"tr",align:null},"Leading point"),(0,o.kt)("td",{parentName:"tr",align:null},"Informs the format function about desired decimal separator place")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"'%'"),(0,o.kt)("td",{parentName:"tr",align:null},"Percentage placeholder"),(0,o.kt)("td",{parentName:"tr",align:null},"Multiplies the number by 100 and inserts per cent sign in the selected place")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"'\\'"),(0,o.kt)("td",{parentName:"tr",align:null},"Escape character"),(0,o.kt)("td",{parentName:"tr",align:null},"Allows you to escape any format specifier symbol if you want it literally in the outcome")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"'string'/\"string\""),(0,o.kt)("td",{parentName:"tr",align:null},"String literal"),(0,o.kt)("td",{parentName:"tr",align:null},"Passes the string straight to the outcome")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"';'"),(0,o.kt)("td",{parentName:"tr",align:null},"Section separator"),(0,o.kt)("td",{parentName:"tr",align:null},"Allows you to pass different custom formats for positive, zero and negative values")))),(0,o.kt)("p",null,"Again, the examples are for the default US culture formatting and might look different for different cultures (for example, hour separator might be changed automatically to ",(0,o.kt)("inlineCode",{parentName:"p"},".")," for Italy)."),(0,o.kt)("p",null,"You can find the full list of standard date format specifiers on ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-numeric-format-strings"},"Microsoft .Net Doc Pages"),"."),(0,o.kt)("p",null,"The custom number formats can do wonders for your personalization needs. Example? Sure!"),(0,o.kt)("p",null,"Let's say you want your customers to validate their phone numbers before you leverage the SMS channel. You have them in Mobile Connect compliant format (only numbers, no spaces, country code included). ",(0,o.kt)("inlineCode",{parentName:"p"},"48520935815")," is not a very user-friendly format to validate. Let's fix it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",520:!0,935:!0,className:"language-sql",metastring:"{3} title=\"From '48520935815' to '(48) 520 935 815' in one line\"","{3}":!0,title:'"From',"'48520935815'":!0,to:!0,"'(48)":!0,"815'":!0,in:!0,one:!0,'line"':!0},"SELECT\n      s.SubscriberKey\n    , FORMAT(CONVERT(BIGINT, ea.MobileNumber), '(###) ### ### ###') AS FormattedPhone /* Output: (48) 520 935 815 */\nFROM _Subscribers AS s\n    INNER JOIN EnterpriseAttribute AS ea\n        ON ea._SubscriberID = s.SubscriberID\n")),(0,o.kt)("p",null,"As you can see we had to use ",(0,o.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-conversion-functions#case--convert"},(0,o.kt)("inlineCode",{parentName:"a"},"CONVERT"))," function with BIGINT parameter, as the MobileNumber is a Text field. Thanks to conversion, we can use numeric functions to format it easily. It could get even better with ",(0,o.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-like"},(0,o.kt)("inlineCode",{parentName:"a"},"LIKE")," in ",(0,o.kt)("inlineCode",{parentName:"a"},"CASE"))," used to create different formats depending on the country code."),(0,o.kt)("p",null,"Another use case? Let's assume we have a VIPDiscount field. It contains a number between 0.00 and 0.99 that tells what discount is appropriate for the selected user based on their VIP status. You store it in decimal numeric because it is a much more accessible format for SSJS or AMPScript to calculate the final price of items promoted in communication."),(0,o.kt)("p",null,"However, showing the customer that he has ",(0,o.kt)("inlineCode",{parentName:"p"},"0.33")," discount is not a good idea. ",(0,o.kt)("inlineCode",{parentName:"p"},"FORMAT")," can help us once more:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Depending on your needs you may use Standard format or a Custom one"',title:'"Depending',on:!0,your:!0,needs:!0,you:!0,may:!0,use:!0,Standard:!0,format:!0,or:!0,a:!0,Custom:!0,'one"':!0},"SELECT\n      FORMAT(VIPDiscount, 'P')       AS StandardFormattedVIPDiscount /* Output: 33.00 % */\n    , FORMAT(VIPDiscount, '-00.##%') AS CustomFormattedVIPDiscount   /* Output: -33% */\n")))}h.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);