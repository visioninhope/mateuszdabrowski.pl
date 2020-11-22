(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),b=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=b(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=b(n),m=a,p=u["".concat(o,".").concat(m)]||u[m]||d[m]||r;return n?i.a.createElement(p,s(s({ref:t},l),{},{components:n})):i.a.createElement(p,s({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},107:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),i=n(53),r=n.n(i);const o=({content:e})=>a.createElement(a.Fragment,null,a.createElement("p",{id:r.a.leadText},e))},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),i=n(8),r=(n(0),n(106)),o=n(107),s={id:"sfmc-sql-string-functions",title:"SFMC SQL String Functions",sidebar_label:"String Functions",description:"Take control over strings with built-in SQL functions. Let the query do the job."},c={unversionedId:"sql/sfmc-sql-string-functions",id:"sql/sfmc-sql-string-functions",isDocsHomePage:!1,title:"SFMC SQL String Functions",description:"Take control over strings with built-in SQL functions. Let the query do the job.",source:"@site/docs/sql/sfmc-sql-string-functions.mdx",slug:"/sql/sfmc-sql-string-functions",permalink:"/docs/sql/sfmc-sql-string-functions",editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/docs/sql/sfmc-sql-string-functions.mdx",version:"current",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1605862339,sidebar_label:"String Functions",sidebar:"snippets",previous:{title:"SFMC SQL Like",permalink:"/docs/sql/sfmc-sql-like"},next:{title:"SFMC SQL Date Functions",permalink:"/docs/sql/sfmc-sql-date-functions"}},l=[{value:"LEFT &amp; RIGHT",id:"left--right",children:[]},{value:"LEN",id:"len",children:[]},{value:"CHARINDEX",id:"charindex",children:[]},{value:"CONCAT",id:"concat",children:[]},{value:"TRIM",id:"trim",children:[]},{value:"FORMAT with Strings",id:"format-with-strings",children:[]}],b={rightToc:l};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(o.a,{content:"Take control over strings with built-in SQL functions. Let the query do the job.",mdxType:"LeadText"}),Object(r.b)("p",null,"Salesforce Marketing Cloud SQL implementation does not support user-defined functions. There are, however, multiple built-in functions that are useful on a day-to-day basis when working with queries."),Object(r.b)("p",null,"Here, I will cover only selected string functions, that I find most useful for Marketing Automation purposes. They will help you change the values, split and concatenate them, or find elements within."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"You Should Know")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"All string functions in SQL are using a 1-based index instead of 0-based indexing known from, for example, JavaScript. The first character starts at index 1. It is crucial for both providing the correct value to the parameters, as well as for correctly interpreting the results."))),Object(r.b)("h2",{id:"left--right"},"LEFT & RIGHT"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"LEFT")," and ",Object(r.b)("inlineCode",{parentName:"p"},"RIGHT")," functions allow you to cut down the string to just part of it."),Object(r.b)("p",null,"Both require two parameters - source value and the number of characters to return."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql",metastring:'{2} title="LEFT and RIGHT can work both on strings as well as on other data types"',"{2}":!0,title:'"LEFT',and:!0,RIGHT:!0,can:!0,work:!0,both:!0,on:!0,strings:!0,as:!0,well:!0,other:!0,data:!0,'types"':!0}),"SELECT\n    LEFT(FirstName, 1) AS FirstNameInitialLetter,\n    RIGHT(FirstName, 1) AS FirstNameEndingLetter,\n    LEFT(s.DateJoined, 3) AS MonthJoined\n")),Object(r.b)("p",null,"Both those functions can be beneficial to clean and streamline your data by themselves, but their real power becomes evident when you mix them with ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#charindex"}),Object(r.b)("inlineCode",{parentName:"a"},"CHARINDEX"))," for content-aware cuts."),Object(r.b)("h2",{id:"len"},"LEN"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"LEN")," function returns a count of characters in the value."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql",metastring:'{4} title="If you use Salesforce Contact ID as Subscriber Key, use LEN to find invalid records quickly"',"{4}":!0,title:'"If',you:!0,use:!0,Salesforce:!0,Contact:!0,ID:!0,as:!0,Subscriber:!0,"Key,":!0,LEN:!0,to:!0,find:!0,invalid:!0,records:!0,'quickly"':!0}),"SELECT\n    s.SubscriberKey\nFROM _Subscribers s\nWHERE LEN(s.SubscriberKey) <> 18\n")),Object(r.b)("p",null,"It is less useful for segmentation but awesome for various administrative purposes. Apart from the example above, I highly recommend checking how this function combines with ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/sql/sfmc-sql-numeric-functions#min--max"}),Object(r.b)("inlineCode",{parentName:"a"},"MAX")," function"),"."),Object(r.b)("h2",{id:"charindex"},"CHARINDEX"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"CHARINDEX")," function lets you find if and where one string is in another. You pass the value you want to find, the value in which you wish to search and, optionally, the index from which you want to start the search."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql",metastring:"title=\"Search for 'Manager' in the JobTitle column starting with the first index\"",title:'"Search',for:!0,"'Manager'":!0,in:!0,the:!0,JobTitle:!0,column:!0,starting:!0,with:!0,first:!0,'index"':!0}),'CHARINDEX("Manager", JobTitle, 1)\n')),Object(r.b)("p",null,"In the example above, I used the optional starting index, but in most cases, you will not be using it. The ",Object(r.b)("inlineCode",{parentName:"p"},"CHARINDEX")," defaults to starting from the beginning so we can write the above line shorter as ",Object(r.b)("inlineCode",{parentName:"p"},'CHARINDEX("Manager", JobTitle)'),"."),Object(r.b)("p",null,"The function returns one three possible values:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"NULL - if either value to find or searched value is NULL"),Object(r.b)("li",{parentName:"ol"},"0 - if the value to find is not within the searched value"),Object(r.b)("li",{parentName:"ol"},"any other digit - the index where the value to find starts within the searched value - if there are multiple occurrences, the result will show the starting index of just the first one.")),Object(r.b)("p",null,"By default, ",Object(r.b)("inlineCode",{parentName:"p"},"CHARINDEX")," in SFMC is case-insensitive in its searches. You can, however, enforce case-sensitivity by adding ",Object(r.b)("inlineCode",{parentName:"p"},"COLLATE"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql",metastring:'title="Case sensitive CHARINDEX search - note lack of a comma between the value and COLLATE"',title:'"Case',sensitive:!0,CHARINDEX:!0,search:!0,"-":!0,note:!0,lack:!0,of:!0,a:!0,comma:!0,between:!0,the:!0,value:!0,and:!0,'COLLATE"':!0}),'CHARINDEX("Manager", JobTitle COLLATE Latin1_General_CS_AS)\n')),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"You Should Know")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("inlineCode",{parentName:"p"},"CHARINDEX")," is especially useful when combined with ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/sql/sfmc-sql-select#conditional-values-with-case"}),Object(r.b)("inlineCode",{parentName:"a"},"CASE"))," and ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#left--right"}),Object(r.b)("inlineCode",{parentName:"a"},"LEFT")),"/",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#left--right"}),Object(r.b)("inlineCode",{parentName:"a"},"RIGHT"))," functions, as it allows for smart string operations:"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql",metastring:'{3} title="Dynamically pull part of the Institution Name value"',"{3}":!0,title:'"Dynamically',pull:!0,part:!0,of:!0,the:!0,Institution:!0,Name:!0,'value"':!0}),"SELECT\n    CASE\n        WHEN CHARINDEX(' ', InstitutionName) > 0 THEN LEFT(InstitutionName, CHARINDEX(' ', InstitutionName) - 1)\n        ELSE InstitutionName\n    END AS InstitutionType\nFROM Accounts\n")),Object(r.b)("p",{parentName:"div"},"The above query checks whether there is a space within ",Object(r.b)("inlineCode",{parentName:"p"},"InstitutionName")," value and if yes - it captures only the first word. Think about all the educational institution names with ",Object(r.b)("inlineCode",{parentName:"p"},"University of..."),", ",Object(r.b)("inlineCode",{parentName:"p"},"School of...")," - by taking only the first part, we can create new simplified data point categorizing records by type."))),Object(r.b)("h2",{id:"concat"},"CONCAT"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"CONCAT")," function allows you to join two or more strings together."),Object(r.b)("p",null,"You can use it on both existing values pulled from source data extension, as well as on custom strings and digits added directly in the query. In most cases, you will mix both."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql",metastring:'{4} title="Perfect for preparing your data for personalization"',"{4}":!0,title:'"Perfect',for:!0,preparing:!0,your:!0,data:!0,'personalization"':!0}),"SELECT\n    SubscriberKey,\n    EmailAddress,\n    CONCAT(FirstName, ' ', LastName) AS FullName\n")),Object(r.b)("p",null,"You can concatenate any number of strings by just adding them comma-separated."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"You Should Know")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"In many cases, you might see concatenation done with the plus sign notation."),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql",metastring:'{4} title="Same as above, but with the plus notation"',"{4}":!0,title:'"Same',as:!0,"above,":!0,but:!0,with:!0,the:!0,plus:!0,'notation"':!0}),"SELECT\n    SubscriberKey,\n    EmailAddress,\n    FirstName + ' ' + LastName AS FullName\n")),Object(r.b)("p",{parentName:"div"},"It might seem cleaner, but there are two downsides to this method:"),Object(r.b)("ol",{parentName:"div"},Object(r.b)("li",{parentName:"ol"},"With the plus notation, if at least one provided value is ",Object(r.b)("inlineCode",{parentName:"li"},"NULL"),", then the whole outcome becomes ",Object(r.b)("inlineCode",{parentName:"li"},"NULL"),". ",Object(r.b)("inlineCode",{parentName:"li"},"CONCAT")," function treats such values as empty strings."),Object(r.b)("li",{parentName:"ol"},"If you want to join a string with a date type value, you need to use ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/sql/sfmc-sql-conversion-functions#case--convert"}),Object(r.b)("inlineCode",{parentName:"a"},"CONVERT")),", but ",Object(r.b)("inlineCode",{parentName:"li"},"CONCAT")," will do the implicit conversion for you.")))),Object(r.b)("h2",{id:"trim"},"TRIM"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"TRIM")," function allows you to quickly clean your data by deleting unneeded characters from the beginning and the end of the provided string. By default it deletes whitespace."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql",metastring:'{2} title="Noone likes useless whitespace in their database"',"{2}":!0,title:'"Noone',likes:!0,useless:!0,whitespace:!0,in:!0,their:!0,'database"':!0}),"SELECT\n    TRIM('   data from webform ') AS CleanData   /* Output: 'data from webform' */\n")),Object(r.b)("p",null,"There are also two child functions - ",Object(r.b)("inlineCode",{parentName:"p"},"RTRIM")," and ",Object(r.b)("inlineCode",{parentName:"p"},"LTRIM")," that works the same but limit the cleaning to just one side of the value."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql",metastring:'{2-4} title="Noone likes useless whitespace in their database"',"{2-4}":!0,title:'"Noone',likes:!0,useless:!0,whitespace:!0,in:!0,their:!0,'database"':!0}),"SELECT\n    LTRIM('   data from webform ') AS CleanLeftSide      /* Output: 'data from webform ' */\n    RTRIM('   data from webform ') AS CleanRightSide     /* Output: '   data from webform' */\n    LTRIM(RTRIM('   data from webform ')) AS SameAsTRIM  /* Output: 'data from webform' */\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"You Should Know")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"You can also use ",Object(r.b)("inlineCode",{parentName:"p"},"TRIM")," to clean specified characters instead of (just) whitespace."),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql",metastring:"{2} title=\"No more '__-- Owner --__' in your values\"","{2}":!0,title:'"No',more:!0,"'__--":!0,Owner:!0,"--__'":!0,in:!0,your:!0,'values"':!0}),"SELECT\n    TRIM('_- ' FROM DirtyWebformData) AS CleanData\n")),Object(r.b)("p",{parentName:"div"},"In the above code, we firstly added a string ",Object(r.b)("inlineCode",{parentName:"p"},"'_- '")," containing all characters we want automatically deleted from the beginning and end. Then - after ",Object(r.b)("inlineCode",{parentName:"p"},"FROM")," joiner - the value, we want to clean."))),Object(r.b)("h2",{id:"format-with-strings"},"FORMAT with Strings"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"FORMAT")," function lets you quickly change the data into a different format. In Salesforce Marketing Cloud, it is especially useful, as you cannot create your functions. ",Object(r.b)("inlineCode",{parentName:"p"},"FORMAT")," might save you massive headaches."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"FORMAT")," works only with datetime and numeric values. Why I'm writing about it here then? Because you can use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/sql/sfmc-sql-conversion-functions#case--convert"}),Object(r.b)("inlineCode",{parentName:"a"},"CONVERT"))," function to change some of your strings into compliant data types. Consider changing string dates into datetime or phone numbers into integers to format them easily. Check out ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/sql/sfmc-sql-date-functions#format-with-dates"}),Object(r.b)("inlineCode",{parentName:"a"},"FORMAT")," with Dates")," and ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/sql/sfmc-sql-numeric-functions#format-with-numbers"}),Object(r.b)("inlineCode",{parentName:"a"},"FORMAT")," with Numbers")," for more information. The outcome of formatting both number and date types with this function is a string."))}u.isMDXComponent=!0}}]);