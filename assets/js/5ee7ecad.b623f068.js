"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[840],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1872:(e,t,n)=>{n.d(t,{m:()=>r});var a=n(7294);const i="leadText_qzwo",r=e=>{let{content:t}=e;return a.createElement(a.Fragment,null,a.createElement("p",{id:i},t))}},5657:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(7462),i=(n(7294),n(4137)),r=n(1872);const o={id:"sfmc-sql-string-functions",title:"SFMC SQL String Functions",sidebar_label:"String Functions",description:"Take control over strings with built-in SQL functions. Let the query do the job.",image:"img/og/og-image-sql-string-functions.png",tags:["Marketing Cloud","SQL"]},l=void 0,s={unversionedId:"sql/sfmc-sql-string-functions",id:"sql/sfmc-sql-string-functions",title:"SFMC SQL String Functions",description:"Take control over strings with built-in SQL functions. Let the query do the job.",source:"@site/docs/sql/sfmc-sql-string-functions.mdx",sourceDirName:"sql",slug:"/sql/sfmc-sql-string-functions",permalink:"/docs/sql/sfmc-sql-string-functions",draft:!1,editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/docs/sql/sfmc-sql-string-functions.mdx",tags:[{label:"Marketing Cloud",permalink:"/docs/tags/marketing-cloud"},{label:"SQL",permalink:"/docs/tags/sql"}],version:"current",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1657131299,formattedLastUpdatedAt:"Jul 6, 2022",frontMatter:{id:"sfmc-sql-string-functions",title:"SFMC SQL String Functions",sidebar_label:"String Functions",description:"Take control over strings with built-in SQL functions. Let the query do the job.",image:"img/og/og-image-sql-string-functions.png",tags:["Marketing Cloud","SQL"]},sidebar:"docs",previous:{title:"Like",permalink:"/docs/sql/sfmc-sql-like"},next:{title:"Date Functions",permalink:"/docs/sql/sfmc-sql-date-functions"}},u={},d=[{value:"LEFT &amp; RIGHT",id:"left--right",level:2},{value:"LEN",id:"len",level:2},{value:"CHARINDEX",id:"charindex",level:2},{value:"PATINDEX",id:"patindex",level:2},{value:"CONCAT",id:"concat",level:2},{value:"LTRIM and RTRIM",id:"ltrim-and-rtrim",level:2},{value:"NEWID",id:"newid",level:2},{value:"LOWER, UPPER and Title Case",id:"lower-upper-and-title-case",level:2},{value:"FORMAT with Strings",id:"format-with-strings",level:2}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r.m,{content:"Take control over strings with built-in SQL functions. Let the query do the job.",mdxType:"LeadText"}),(0,i.kt)("p",null,"Salesforce Marketing Cloud SQL implementation does not support user-defined functions. There are, however, multiple built-in functions that are useful on a day-to-day basis when working with queries."),(0,i.kt)("p",null,"Here, I will cover only selected string functions that I find most useful for Marketing Automation purposes. They will help you change the values, split and concatenate them, or find elements within."),(0,i.kt)("admonition",{title:"You Should Know",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"All string functions in SQL use a 1-based index instead of 0-based indexing known from, for example, JavaScript. The first character starts at index 1. It is crucial to provide the correct value to the arguments and correctly interpret the results.")),(0,i.kt)("h2",{id:"left--right"},"LEFT & RIGHT"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"LEFT")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"RIGHT")," functions allow you to cut down the string to just part of it."),(0,i.kt)("p",null,"Both require source value and the number of characters to return."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="LEFT and RIGHT can work both on strings as well as on other data types"',title:'"LEFT',and:!0,RIGHT:!0,can:!0,work:!0,both:!0,on:!0,strings:!0,as:!0,well:!0,other:!0,data:!0,'types"':!0},"SELECT\n      LEFT(FirstName, 1)    AS FirstNameInitialLetter\n    , RIGHT(FirstName, 1)   AS FirstNameEndingLetter\n    , LEFT(s.DateJoined, 3) AS MonthJoined\n")),(0,i.kt)("p",null,"Both those functions can be beneficial to clean and streamline your data by themselves, but their real power becomes evident when you mix them with ",(0,i.kt)("a",{parentName:"p",href:"#charindex"},(0,i.kt)("inlineCode",{parentName:"a"},"CHARINDEX"))," for content-aware cuts."),(0,i.kt)("h2",{id:"len"},"LEN"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"LEN")," function returns a count of characters in the value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{3} title="If you use Salesforce Contact ID as Subscriber Key, use LEN to find invalid records quickly"',"{3}":!0,title:'"If',you:!0,use:!0,Salesforce:!0,Contact:!0,ID:!0,as:!0,Subscriber:!0,"Key,":!0,LEN:!0,to:!0,find:!0,invalid:!0,records:!0,'quickly"':!0},"SELECT SubscriberKey\nFROM _Subscribers\nWHERE LEN(SubscriberKey) != 18\n")),(0,i.kt)("p",null,"It is less useful for segmentation but awesome for various administrative purposes. Apart from the example above, I highly recommend checking how this function combines with ",(0,i.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-numeric-functions#min--max"},(0,i.kt)("inlineCode",{parentName:"a"},"MAX")," function"),"."),(0,i.kt)("h2",{id:"charindex"},"CHARINDEX"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"CHARINDEX")," function lets you find if and where one string is in another. You pass the value you want to find, the value in which you wish to search and, optionally, the index from which you want to start the search."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:"title=\"Search for 'Manager' in the JobTitle column starting with the first index\"",title:'"Search',for:!0,"'Manager'":!0,in:!0,the:!0,JobTitle:!0,column:!0,starting:!0,with:!0,first:!0,'index"':!0},'CHARINDEX("Manager", JobTitle, 1)\n')),(0,i.kt)("p",null,"I used the optional starting index in the example above, but you will not be using it in most cases. The ",(0,i.kt)("inlineCode",{parentName:"p"},"CHARINDEX")," defaults to starting from the beginning so that we can write the above line shorter as ",(0,i.kt)("inlineCode",{parentName:"p"},'CHARINDEX("Manager", JobTitle)'),"."),(0,i.kt)("p",null,"The function returns one of the three possible values:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"NULL - if either value to find or searched value is NULL"),(0,i.kt)("li",{parentName:"ol"},"0 - if the value to find is not within the searched value"),(0,i.kt)("li",{parentName:"ol"},"any other digit - the index where the value to find starts within the searched value - if there are multiple occurrences, the result will show the starting index of just the first one.")),(0,i.kt)("p",null,"By default, ",(0,i.kt)("inlineCode",{parentName:"p"},"CHARINDEX")," in SFMC is case-insensitive in its searches. You can, however, enforce case sensitivity by adding ",(0,i.kt)("inlineCode",{parentName:"p"},"COLLATE"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Case sensitive CHARINDEX search - note lack of a comma between the value and COLLATE"',title:'"Case',sensitive:!0,CHARINDEX:!0,search:!0,"-":!0,note:!0,lack:!0,of:!0,a:!0,comma:!0,between:!0,the:!0,value:!0,and:!0,'COLLATE"':!0},'CHARINDEX("Manager", JobTitle COLLATE Latin1_General_CS_AS)\n')),(0,i.kt)("admonition",{title:"You Should Know",type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"CHARINDEX")," is especially useful when combined with ",(0,i.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-case#conditional-values-with-case"},(0,i.kt)("inlineCode",{parentName:"a"},"CASE"))," and ",(0,i.kt)("a",{parentName:"p",href:"#left--right"},(0,i.kt)("inlineCode",{parentName:"a"},"LEFT")),"/",(0,i.kt)("a",{parentName:"p",href:"#left--right"},(0,i.kt)("inlineCode",{parentName:"a"},"RIGHT"))," functions, as it allows for smart string operations:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{3} title="Dynamically pull part of the Institution Name value"',"{3}":!0,title:'"Dynamically',pull:!0,part:!0,of:!0,the:!0,Institution:!0,Name:!0,'value"':!0},"SELECT\n      CASE\n        WHEN CHARINDEX(' ', InstitutionName) > 0 THEN LEFT(InstitutionName, CHARINDEX(' ', InstitutionName) - 1)\n        ELSE InstitutionName\n      END AS InstitutionType\nFROM Accounts\n")),(0,i.kt)("p",{parentName:"admonition"},"The above query checks whether there is a space within the ",(0,i.kt)("inlineCode",{parentName:"p"},"InstitutionName")," value and if yes - it captures only the first word. Think about all the educational institution names with ",(0,i.kt)("inlineCode",{parentName:"p"},"University of..."),", ",(0,i.kt)("inlineCode",{parentName:"p"},"School of...")," - by taking only the first part, we can create a new simplified data point categorising records by type.")),(0,i.kt)("h2",{id:"patindex"},"PATINDEX"),(0,i.kt)("p",null,"While ",(0,i.kt)("a",{parentName:"p",href:"#charindex"},(0,i.kt)("inlineCode",{parentName:"a"},"CHARINDEX"))," is great for searching the position of a specific string in a value, ",(0,i.kt)("inlineCode",{parentName:"p"},"PATINDEX")," gives you even more power by supporting the wildcard patterns used with ",(0,i.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-like"},(0,i.kt)("inlineCode",{parentName:"a"},"LIKE"))," operator:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Wildcards & Operators"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"%")),(0,i.kt)("td",{parentName:"tr",align:null},"Zero, one or more characters")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_")),(0,i.kt)("td",{parentName:"tr",align:null},"Exactly one character")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"[]")),(0,i.kt)("td",{parentName:"tr",align:null},"Any single character from the list specified inside")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-")),(0,i.kt)("td",{parentName:"tr",align:null},"Range operator for ",(0,i.kt)("inlineCode",{parentName:"td"},"[]"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"^")),(0,i.kt)("td",{parentName:"tr",align:null},"Exclusion operator for ",(0,i.kt)("inlineCode",{parentName:"td"},"[]"))))),(0,i.kt)("p",null,"To learn more about specific wildcards and advanced operators, check out the ",(0,i.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-like"},(0,i.kt)("inlineCode",{parentName:"a"},"LIKE")," guide"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Broad C-Suite hunt with PATINDEX"',title:'"Broad',"C-Suite":!0,hunt:!0,with:!0,'PATINDEX"':!0},"PATINDEX('%C_O%', JobTitle)\n")),(0,i.kt)("p",null,"While wildcards give ",(0,i.kt)("inlineCode",{parentName:"p"},"PATINDEX")," an edge over ",(0,i.kt)("a",{parentName:"p",href:"#charindex"},(0,i.kt)("inlineCode",{parentName:"a"},"CHARINDEX")),", it misses one feature of the latter - an optional argument for starting the search from a specific string. Either can be better depending on the use case at hand."),(0,i.kt)("h2",{id:"concat"},"CONCAT"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"CONCAT")," function allows you to join two or more strings together."),(0,i.kt)("p",null,"You can use it on both existing values pulled from source data extension, as well as on custom strings and digits added directly in the query. In most cases, you will mix both."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{4} title="Perfect for preparing your data for personalization"',"{4}":!0,title:'"Perfect',for:!0,preparing:!0,your:!0,data:!0,'personalization"':!0},"SELECT\n      SubscriberKey\n    , EmailAddress\n    , CONCAT(FirstName, ' ', LastName) AS FullName\n")),(0,i.kt)("p",null,"You can concatenate any number of strings by just adding them comma-separated."),(0,i.kt)("admonition",{title:"You Should Know",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"In many cases, you might see concatenation done with the plus sign notation."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{4} title="Same as above, but with the plus notation"',"{4}":!0,title:'"Same',as:!0,"above,":!0,but:!0,with:!0,the:!0,plus:!0,'notation"':!0},"SELECT\n      SubscriberKey\n    , EmailAddress\n    , FirstName + ' ' + LastName AS FullName\n")),(0,i.kt)("p",{parentName:"admonition"},"It might seem cleaner, but there are two downsides to this method:"),(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},"With the plus notation, if at least one provided value is ",(0,i.kt)("inlineCode",{parentName:"li"},"NULL"),", the outcome becomes ",(0,i.kt)("inlineCode",{parentName:"li"},"NULL"),". ",(0,i.kt)("inlineCode",{parentName:"li"},"CONCAT")," function treats such values as empty strings."),(0,i.kt)("li",{parentName:"ol"},"If you want to join a string with a date type value, you need to use ",(0,i.kt)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-conversion-functions#cast--convert"},(0,i.kt)("inlineCode",{parentName:"a"},"CONVERT")),", but ",(0,i.kt)("inlineCode",{parentName:"li"},"CONCAT")," will do the implicit conversion for you."))),(0,i.kt)("h2",{id:"ltrim-and-rtrim"},"LTRIM and RTRIM"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"LTRIM")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"RTRIM")," functions allow you to quickly clean your data by deleting unneeded spaces from the beginning or the end of the provided string."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Noone likes useless whitespace in their database"',title:'"Noone',likes:!0,useless:!0,whitespace:!0,in:!0,their:!0,'database"':!0},"SELECT\n      LTRIM('   data from webform ')        AS CleanLeftSide    /* Output: 'data from webform ' */\n    , RTRIM('   data from webform ')        AS CleanRightSide   /* Output: '   data from webform' */\n    , LTRIM(RTRIM('   data from webform ')) AS CleanBothSides   /* Output: 'data from webform' */\n")),(0,i.kt)("h2",{id:"newid"},"NEWID"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"NEWID")," function creates a pseudorandom identifier in the form of a 36-character string GUID (RFC4122 compliant)."),(0,i.kt)("p",null,"The output structure is the same as for the SSJS ",(0,i.kt)("inlineCode",{parentName:"p"},"Platform.Function.GUID()")," or AMPScript ",(0,i.kt)("inlineCode",{parentName:"p"},"GUID()")," functions - five alphanumerical strings joined by hyphens."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{1} title="Returns GUID in the form of XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"',"{1}":!0,title:'"Returns',GUID:!0,in:!0,the:!0,form:!0,of:!0,'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"':!0},"SELECT NEWID() AS UniqueID\n")),(0,i.kt)("h2",{id:"lower-upper-and-title-case"},"LOWER, UPPER and Title Case"),(0,i.kt)("p",null,"When working with SQL, you will frequently encounter dirty data that needs some cleaning before being leveraged for personalisation in marketing sends. One of the frequent issues is inconsistent letter cases, especially on self-filled data points like first and last names coming from lead forms."),(0,i.kt)("p",null,"Thankfully, SQL can clean up such data with built-in ",(0,i.kt)("inlineCode",{parentName:"p"},"LOWER")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"UPPER"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:"{3-4}","{3-4}":!0},"SELECT\n      'DIRTY Data' AS SampleData\n    , LOWER('DIRTY Data') AS Lowercase /* Output: 'dirty data' */\n    , UPPER('DIRTY Data') AS Uppercase /* Output: 'DIRTY DATA' */\n")),(0,i.kt)("p",null,"However, there is no out-of-the-box function for Proper Case - a popular requirement, especially around names and titles. The basic solution for single-word strings is straightforward:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:"{3}","{3}":!0},"SELECT\n      FirstName /* Output: 'MATEUSZ' */\n    , UPPER(LEFT(FirstName, 1)) + LOWER(RIGHT(FirstName, LEN(FirstName) - 1)) AS Propercase /* Output: 'Mateusz' */\n")),(0,i.kt)("p",null,"However, it will not work with complex (like names with a hyphen in the middle) or multi-word values. The standard SQL solution - User Defined Function - doesn't work in a limited Salesforce Marketing Cloud SQL environment. The alternative - using ",(0,i.kt)("a",{parentName:"p",href:"#charindex"},(0,i.kt)("inlineCode",{parentName:"a"},"CHARINDEX")),"/",(0,i.kt)("a",{parentName:"p",href:"#patindex"},(0,i.kt)("inlineCode",{parentName:"a"},"PATINDEX"))," to find each word - gets awful as soon as you hit three words and more."),(0,i.kt)("p",null,"Recommended approach? Either clean the data before ingestion to SFMC or do it directly in the email with the built-in AMPScript ",(0,i.kt)("inlineCode",{parentName:"p"},"ProperCase")," function."),(0,i.kt)("h2",{id:"format-with-strings"},"FORMAT with Strings"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"FORMAT")," function lets you quickly change the data into a different format. In Salesforce Marketing Cloud, it is especially useful, as you cannot create your functions. ",(0,i.kt)("inlineCode",{parentName:"p"},"FORMAT")," might save you massive headaches."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"FORMAT")," works only with datetime and numeric values. Why I'm writing about it here then? Because you can use ",(0,i.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-conversion-functions#cast--convert"},(0,i.kt)("inlineCode",{parentName:"a"},"CONVERT"))," function to change some of your strings into compliant data types. Consider changing string dates into datetime or phone numbers into integers to format them easily. Check out ",(0,i.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-date-functions#format-with-dates"},(0,i.kt)("inlineCode",{parentName:"a"},"FORMAT")," with Dates")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-numeric-functions#format-with-numbers"},(0,i.kt)("inlineCode",{parentName:"a"},"FORMAT")," with Numbers")," for more information. The outcome of formatting both number and date types with this function is a string."))}p.isMDXComponent=!0}}]);