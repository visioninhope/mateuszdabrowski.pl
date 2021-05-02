(self.webpackChunkmd=self.webpackChunkmd||[]).push([[840],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),p=i,h=m["".concat(l,".").concat(p)]||m[p]||d[p]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8921:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(7294),i=n(6010),r="tableOfContentsInline_3fWc";function o(e){var t=e.toc,n=e.isChild;return t.length?a.createElement("ul",{className:n?"":"table-of-contents"},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(o,{isChild:!0,toc:e.children}))}))):null}var s=function(e){var t=e.toc;return a.createElement("div",{className:(0,i.Z)(r)},a.createElement(o,{toc:t}))}},2043:function(e,t,n){"use strict";n.d(t,{m:function(){return r}});var a=n(7294),i="leadText_16va",r=function(e){var t=e.content;return a.createElement(a.Fragment,null,a.createElement("p",{id:i},t))}},4546:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),o=n(8921),s=n(2043),l={id:"sfmc-sql-string-functions",title:"SFMC SQL String Functions",sidebar_label:"String Functions",description:"Take control over strings with built-in SQL functions. Let the query do the job."},c={unversionedId:"sql/sfmc-sql-string-functions",id:"sql/sfmc-sql-string-functions",isDocsHomePage:!1,title:"SFMC SQL String Functions",description:"Take control over strings with built-in SQL functions. Let the query do the job.",source:"@site/docs/sql/sfmc-sql-string-functions.mdx",sourceDirName:"sql",slug:"/sql/sfmc-sql-string-functions",permalink:"/docs/sql/sfmc-sql-string-functions",editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/docs/sql/sfmc-sql-string-functions.mdx",version:"current",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1616624113,formattedLastUpdatedAt:"3/24/2021",sidebar_label:"String Functions",frontMatter:{id:"sfmc-sql-string-functions",title:"SFMC SQL String Functions",sidebar_label:"String Functions",description:"Take control over strings with built-in SQL functions. Let the query do the job."},sidebar:"snippets",previous:{title:"SFMC SQL Like",permalink:"/docs/sql/sfmc-sql-like"},next:{title:"SFMC SQL Date Functions",permalink:"/docs/sql/sfmc-sql-date-functions"}},u=[{value:"LEFT &amp; RIGHT",id:"left--right",children:[]},{value:"LEN",id:"len",children:[]},{value:"CHARINDEX",id:"charindex",children:[]},{value:"CONCAT",id:"concat",children:[]},{value:"TRIM",id:"trim",children:[]},{value:"FORMAT with Strings",id:"format-with-strings",children:[]}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(s.m,{content:"Take control over strings with built-in SQL functions. Let the query do the job.",mdxType:"LeadText"}),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Table of Contents")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)(o.Z,{toc:u,mdxType:"TOCInline"}))),(0,r.kt)("p",null,"Salesforce Marketing Cloud SQL implementation does not support user-defined functions. There are, however, multiple built-in functions that are useful on a day-to-day basis when working with queries."),(0,r.kt)("p",null,"Here, I will cover only selected string functions, that I find most useful for Marketing Automation purposes. They will help you change the values, split and concatenate them, or find elements within."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"You Should Know")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"All string functions in SQL are using a 1-based index instead of 0-based indexing known from, for example, JavaScript. The first character starts at index 1. It is crucial for both providing the correct value to the parameters, as well as for correctly interpreting the results."))),(0,r.kt)("h2",{id:"left--right"},"LEFT & RIGHT"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"LEFT")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"RIGHT")," functions allow you to cut down the string to just part of it."),(0,r.kt)("p",null,"Both require two parameters - source value and the number of characters to return."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="LEFT and RIGHT can work both on strings as well as on other data types"',title:'"LEFT',and:!0,RIGHT:!0,can:!0,work:!0,both:!0,on:!0,strings:!0,as:!0,well:!0,other:!0,data:!0,'types"':!0},"SELECT\n      LEFT(FirstName, 1)    AS FirstNameInitialLetter\n    , RIGHT(FirstName, 1)   AS FirstNameEndingLetter\n    , LEFT(s.DateJoined, 3) AS MonthJoined\n")),(0,r.kt)("p",null,"Both those functions can be beneficial to clean and streamline your data by themselves, but their real power becomes evident when you mix them with ",(0,r.kt)("a",{parentName:"p",href:"#charindex"},(0,r.kt)("inlineCode",{parentName:"a"},"CHARINDEX"))," for content-aware cuts."),(0,r.kt)("h2",{id:"len"},"LEN"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"LEN")," function returns a count of characters in the value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{3} title="If you use Salesforce Contact ID as Subscriber Key, use LEN to find invalid records quickly"',"{3}":!0,title:'"If',you:!0,use:!0,Salesforce:!0,Contact:!0,ID:!0,as:!0,Subscriber:!0,"Key,":!0,LEN:!0,to:!0,find:!0,invalid:!0,records:!0,'quickly"':!0},"SELECT SubscriberKey\nFROM _Subscribers\nWHERE LEN(SubscriberKey) != 18\n")),(0,r.kt)("p",null,"It is less useful for segmentation but awesome for various administrative purposes. Apart from the example above, I highly recommend checking how this function combines with ",(0,r.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-numeric-functions#min--max"},(0,r.kt)("inlineCode",{parentName:"a"},"MAX")," function"),"."),(0,r.kt)("h2",{id:"charindex"},"CHARINDEX"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CHARINDEX")," function lets you find if and where one string is in another. You pass the value you want to find, the value in which you wish to search and, optionally, the index from which you want to start the search."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:"title=\"Search for 'Manager' in the JobTitle column starting with the first index\"",title:'"Search',for:!0,"'Manager'":!0,in:!0,the:!0,JobTitle:!0,column:!0,starting:!0,with:!0,first:!0,'index"':!0},'CHARINDEX("Manager", JobTitle, 1)\n')),(0,r.kt)("p",null,"In the example above, I used the optional starting index, but in most cases, you will not be using it. The ",(0,r.kt)("inlineCode",{parentName:"p"},"CHARINDEX")," defaults to starting from the beginning so we can write the above line shorter as ",(0,r.kt)("inlineCode",{parentName:"p"},'CHARINDEX("Manager", JobTitle)'),"."),(0,r.kt)("p",null,"The function returns one three possible values:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"NULL - if either value to find or searched value is NULL"),(0,r.kt)("li",{parentName:"ol"},"0 - if the value to find is not within the searched value"),(0,r.kt)("li",{parentName:"ol"},"any other digit - the index where the value to find starts within the searched value - if there are multiple occurrences, the result will show the starting index of just the first one.")),(0,r.kt)("p",null,"By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"CHARINDEX")," in SFMC is case-insensitive in its searches. You can, however, enforce case-sensitivity by adding ",(0,r.kt)("inlineCode",{parentName:"p"},"COLLATE"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Case sensitive CHARINDEX search - note lack of a comma between the value and COLLATE"',title:'"Case',sensitive:!0,CHARINDEX:!0,search:!0,"-":!0,note:!0,lack:!0,of:!0,a:!0,comma:!0,between:!0,the:!0,value:!0,and:!0,'COLLATE"':!0},'CHARINDEX("Manager", JobTitle COLLATE Latin1_General_CS_AS)\n')),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"You Should Know")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"CHARINDEX")," is especially useful when combined with ",(0,r.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-select#conditional-values-with-case"},(0,r.kt)("inlineCode",{parentName:"a"},"CASE"))," and ",(0,r.kt)("a",{parentName:"p",href:"#left--right"},(0,r.kt)("inlineCode",{parentName:"a"},"LEFT")),"/",(0,r.kt)("a",{parentName:"p",href:"#left--right"},(0,r.kt)("inlineCode",{parentName:"a"},"RIGHT"))," functions, as it allows for smart string operations:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{3} title="Dynamically pull part of the Institution Name value"',"{3}":!0,title:'"Dynamically',pull:!0,part:!0,of:!0,the:!0,Institution:!0,Name:!0,'value"':!0},"SELECT\n      CASE\n        WHEN CHARINDEX(' ', InstitutionName) > 0 THEN LEFT(InstitutionName, CHARINDEX(' ', InstitutionName) - 1)\n        ELSE InstitutionName\n      END AS InstitutionType\nFROM Accounts\n")),(0,r.kt)("p",{parentName:"div"},"The above query checks whether there is a space within ",(0,r.kt)("inlineCode",{parentName:"p"},"InstitutionName")," value and if yes - it captures only the first word. Think about all the educational institution names with ",(0,r.kt)("inlineCode",{parentName:"p"},"University of..."),", ",(0,r.kt)("inlineCode",{parentName:"p"},"School of...")," - by taking only the first part, we can create new simplified data point categorizing records by type."))),(0,r.kt)("h2",{id:"concat"},"CONCAT"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CONCAT")," function allows you to join two or more strings together."),(0,r.kt)("p",null,"You can use it on both existing values pulled from source data extension, as well as on custom strings and digits added directly in the query. In most cases, you will mix both."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{4} title="Perfect for preparing your data for personalization"',"{4}":!0,title:'"Perfect',for:!0,preparing:!0,your:!0,data:!0,'personalization"':!0},"SELECT\n      SubscriberKey\n    , EmailAddress\n    , CONCAT(FirstName, ' ', LastName) AS FullName\n")),(0,r.kt)("p",null,"You can concatenate any number of strings by just adding them comma-separated."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"You Should Know")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In many cases, you might see concatenation done with the plus sign notation."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{4} title="Same as above, but with the plus notation"',"{4}":!0,title:'"Same',as:!0,"above,":!0,but:!0,with:!0,the:!0,plus:!0,'notation"':!0},"SELECT\n      SubscriberKey\n    , EmailAddress\n    , FirstName + ' ' + LastName AS FullName\n")),(0,r.kt)("p",{parentName:"div"},"It might seem cleaner, but there are two downsides to this method:"),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},"With the plus notation, if at least one provided value is ",(0,r.kt)("inlineCode",{parentName:"li"},"NULL"),", then the whole outcome becomes ",(0,r.kt)("inlineCode",{parentName:"li"},"NULL"),". ",(0,r.kt)("inlineCode",{parentName:"li"},"CONCAT")," function treats such values as empty strings."),(0,r.kt)("li",{parentName:"ol"},"If you want to join a string with a date type value, you need to use ",(0,r.kt)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-conversion-functions#case--convert"},(0,r.kt)("inlineCode",{parentName:"a"},"CONVERT")),", but ",(0,r.kt)("inlineCode",{parentName:"li"},"CONCAT")," will do the implicit conversion for you.")))),(0,r.kt)("h2",{id:"trim"},"TRIM"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TRIM")," function allows you to quickly clean your data by deleting unneeded characters from the beginning and the end of the provided string. By default it deletes whitespace."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Noone likes useless whitespace in their database"',title:'"Noone',likes:!0,useless:!0,whitespace:!0,in:!0,their:!0,'database"':!0},"SELECT TRIM('   data from webform ') AS CleanData   /* Output: 'data from webform' */\n")),(0,r.kt)("p",null,"There are also two child functions - ",(0,r.kt)("inlineCode",{parentName:"p"},"RTRIM")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"LTRIM")," that works the same but limit the cleaning to just one side of the value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Noone likes useless whitespace in their database"',title:'"Noone',likes:!0,useless:!0,whitespace:!0,in:!0,their:!0,'database"':!0},"SELECT\n      LTRIM('   data from webform ')        AS CleanLeftSide      /* Output: 'data from webform ' */\n    , RTRIM('   data from webform ')        AS CleanRightSide     /* Output: '   data from webform' */\n    , LTRIM(RTRIM('   data from webform ')) AS SameAsTRIM  /* Output: 'data from webform' */\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"You Should Know")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"TRIM")," to clean specified characters instead of (just) whitespace."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:"title=\"No more '__-- Owner --__' in your values\"",title:'"No',more:!0,"'__--":!0,Owner:!0,"--__'":!0,in:!0,your:!0,'values"':!0},"SELECT TRIM('_- ' FROM DirtyWebformData) AS CleanData\n")),(0,r.kt)("p",{parentName:"div"},"In the above code, we firstly added a string ",(0,r.kt)("inlineCode",{parentName:"p"},"'_- '")," containing all characters we want automatically deleted from the beginning and end. Then - after ",(0,r.kt)("inlineCode",{parentName:"p"},"FROM")," joiner - the value, we want to clean."))),(0,r.kt)("h2",{id:"format-with-strings"},"FORMAT with Strings"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"FORMAT")," function lets you quickly change the data into a different format. In Salesforce Marketing Cloud, it is especially useful, as you cannot create your functions. ",(0,r.kt)("inlineCode",{parentName:"p"},"FORMAT")," might save you massive headaches."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"FORMAT")," works only with datetime and numeric values. Why I'm writing about it here then? Because you can use ",(0,r.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-conversion-functions#case--convert"},(0,r.kt)("inlineCode",{parentName:"a"},"CONVERT"))," function to change some of your strings into compliant data types. Consider changing string dates into datetime or phone numbers into integers to format them easily. Check out ",(0,r.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-date-functions#format-with-dates"},(0,r.kt)("inlineCode",{parentName:"a"},"FORMAT")," with Dates")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-numeric-functions#format-with-numbers"},(0,r.kt)("inlineCode",{parentName:"a"},"FORMAT")," with Numbers")," for more information. The outcome of formatting both number and date types with this function is a string."))}m.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);