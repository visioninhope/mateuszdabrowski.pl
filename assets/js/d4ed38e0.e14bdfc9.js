(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(8),l=(n(0),n(119)),o=n(120),i={id:"sfmc-sql-conversion-functions",title:"SFMC SQL Conversion Functions",sidebar_label:"Conversion Functions",description:"Break from the limits of Data Extension data types. Use full power of SQL to control your values."},b={unversionedId:"sql/sfmc-sql-conversion-functions",id:"sql/sfmc-sql-conversion-functions",isDocsHomePage:!1,title:"SFMC SQL Conversion Functions",description:"Break from the limits of Data Extension data types. Use full power of SQL to control your values.",source:"@site/docs/sql/sfmc-sql-conversion-functions.mdx",slug:"/sql/sfmc-sql-conversion-functions",permalink:"/docs/sql/sfmc-sql-conversion-functions",editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/docs/sql/sfmc-sql-conversion-functions.mdx",version:"current",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1611415032,formattedLastUpdatedAt:"1/23/2021",sidebar_label:"Conversion Functions",sidebar:"snippets",previous:{title:"SFMC SQL Numeric Functions",permalink:"/docs/sql/sfmc-sql-numeric-functions"},next:{title:"SFMC SQL Debugging Email Sends",permalink:"/docs/sql/sfmc-sql-snippet-debugging-email-sends"}},c=[{value:"CAST &amp; CONVERT",id:"cast--convert",children:[{value:"CAST",id:"cast",children:[]},{value:"CONVERT",id:"convert",children:[]},{value:"Data Types",id:"data-types",children:[]},{value:"CONVERT Style Codes",id:"convert-style-codes",children:[]}]}],s={toc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)(o.a,{content:"Break from the limits of source data types. Use the full power of SQL to transform your values.",mdxType:"LeadText"}),Object(l.b)("p",null,"Salesforce Marketing Cloud SQL implementation does not support user-defined functions. There are, however, multiple built-in functions that are useful on a day-to-day basis when working with queries."),Object(l.b)("p",null,"Here, I will cover only selected conversion functions, that I find most useful for Marketing Automation purposes. They will help you change the value types to enable the use of type-based Salesforce Marketing Cloud User Interface elements and type-specific functions."),Object(l.b)("h2",{id:"cast--convert"},"CAST & CONVERT"),Object(l.b)("p",null,"In Salesforce Marketing Cloud, you can use two universal conversion functions - ",Object(l.b)("inlineCode",{parentName:"p"},"CAST")," and ",Object(l.b)("inlineCode",{parentName:"p"},"CONVERT"),"."),Object(l.b)("h3",{id:"cast"},"CAST"),Object(l.b)("p",null,"The first one, ",Object(l.b)("inlineCode",{parentName:"p"},"CAST"),", is straightforward and available in all SQL dialects:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sql",metastring:'{4} title="Find all subscribers that joined after the given date"',"{4}":!0,title:'"Find',all:!0,subscribers:!0,that:!0,joined:!0,after:!0,the:!0,given:!0,'date"':!0},"SELECT\n    SubscriberKey\nFROM ENT._Subscribers\nWHERE DateJoined > CAST('2020-10-30' AS DATE)\n")),Object(l.b)("p",null,"It takes a value and expected datatype with ",Object(l.b)("inlineCode",{parentName:"p"},"AS")," operator in between."),Object(l.b)("p",null,"However, in Salesforce Marketing Cloud, it is much better to use ",Object(l.b)("inlineCode",{parentName:"p"},"CONVERT")," function instead. It covers all features of ",Object(l.b)("inlineCode",{parentName:"p"},"CAST")," plus adds quite a lot more. It is also better supported by the ",Object(l.b)("a",{parentName:"p",href:"./sfmc-sql-basics#query-studio"},"Query Studio")," (for example, you cannot use ",Object(l.b)("inlineCode",{parentName:"p"},"CAST")," in a ",Object(l.b)("inlineCode",{parentName:"p"},"SELECT")," part of the query there)."),Object(l.b)("h3",{id:"convert"},"CONVERT"),Object(l.b)("p",null,"The basic form of ",Object(l.b)("inlineCode",{parentName:"p"},"CONVERT")," is nearly the same as the ",Object(l.b)("inlineCode",{parentName:"p"},"CASE")," with reversed order of arguments:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sql",metastring:'{4} title="Find all subscribers that joined after the given date"',"{4}":!0,title:'"Find',all:!0,subscribers:!0,that:!0,joined:!0,after:!0,the:!0,given:!0,'date"':!0},"SELECT\n    SubscriberKey\nFROM ENT._Subscribers\nWHERE DateJoined > CONVERT(DATE, '2020-10-30')\n")),Object(l.b)("p",null,"With both functions you can stack functions within for more complex calculations:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sql",metastring:'{2} title="Calculate the end of the trial period and output date only"',"{2}":!0,title:'"Calculate',the:!0,end:!0,of:!0,trial:!0,period:!0,and:!0,output:!0,date:!0,'only"':!0},"SELECT\n    CONVERT(DATE, DATEADD(MM, 1, GETUTCDATE())) AS TrialPeriodEndDate\n")),Object(l.b)("p",null,"Up to this point, ",Object(l.b)("inlineCode",{parentName:"p"},"CAST")," and ",Object(l.b)("inlineCode",{parentName:"p"},"CONVERT")," seem similar in the features."),Object(l.b)("p",null,"However, only ",Object(l.b)("inlineCode",{parentName:"p"},"CONVERT")," have an additional third optional argument - ",Object(l.b)("a",{parentName:"p",href:"#convert-style-codes"},"style"),". Thanks to it, you can convert even from non-standard (for the server) formats that would result in an error:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sql",metastring:"{4} title=\"Converting dd/MM/yyyy format throws 'Could not convert date and/or time from string data type'\"","{4}":!0,title:'"Converting',"dd/MM/yyyy":!0,format:!0,throws:!0,"'Could":!0,not:!0,convert:!0,date:!0,"and/or":!0,time:!0,from:!0,string:!0,data:!0,"type'\"":!0},"SELECT\n    SubscriberKey\nFROM _Subscribers\nWHERE DateJoined > CONVERT(DATE, '30/10/2019') /* Error */\n")),Object(l.b)("p",null,"With ",Object(l.b)("a",{parentName:"p",href:"#convert-style-codes"},"style codes"),", we can make it work with minimal change:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sql",metastring:'{4} title="Converting dd/MM/yyyy format with appropriate style code"',"{4}":!0,title:'"Converting',"dd/MM/yyyy":!0,format:!0,with:!0,appropriate:!0,style:!0,'code"':!0},"SELECT\n    SubscriberKey\nFROM _Subscribers\nWHERE DateJoined > CONVERT(DATE, '30/10/2019', 103)\n")),Object(l.b)("p",null,"It is not possible with ",Object(l.b)("inlineCode",{parentName:"p"},"CAST"),"."),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"You Should Know")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"You can also leverage ",Object(l.b)("a",{parentName:"p",href:"#convert-style-codes"},"style codes")," to format your dates during conversion to string, without the need to use ",Object(l.b)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-date-functions#format-with-dates"},Object(l.b)("inlineCode",{parentName:"a"},"FORMAT"))," function on top."),Object(l.b)("pre",{parentName:"div"},Object(l.b)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    CONVERT(NVARCHAR, GETDATE(), 101) AS DateFormat1,   /* Output: 10/30/2020 */\n    CONVERT(NVARCHAR, GETDATE(), 102) AS DateFormat2,   /* Output: 2020.10.30 */\n    CONVERT(NVARCHAR, GETDATE(), 107) AS DateFormat3    /* Output: Oct 30, 2020 */\n")))),Object(l.b)("h3",{id:"data-types"},"Data Types"),Object(l.b)("p",null,"There are over 30 data types available for conversion, but there are only a few that are useful on a day-to-day basis in Salesforce Marketing Cloud:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Data Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Comment"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"CHAR"),Object(l.b)("td",{parentName:"tr",align:null},"Fixed-length string"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"NCHAR"),Object(l.b)("td",{parentName:"tr",align:null},"Fixed-length string with Unicode support"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"VARCHAR"),Object(l.b)("td",{parentName:"tr",align:null},"Variable-length string"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"NVARCHAR"),Object(l.b)("td",{parentName:"tr",align:null},"Variable-length string with Unicode support"),Object(l.b)("td",{parentName:"tr",align:null},"Best option for most SFMC string use cases")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"DECIMAL/NUMERIC"),Object(l.b)("td",{parentName:"tr",align:null},"Decimal number with big precision"),Object(l.b)("td",{parentName:"tr",align:null},"Best option if you need a decimal number")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"INT"),Object(l.b)("td",{parentName:"tr",align:null},"Integer number"),Object(l.b)("td",{parentName:"tr",align:null},"Best option if your number is not decimal")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"BIGINT"),Object(l.b)("td",{parentName:"tr",align:null},"Big integer number"),Object(l.b)("td",{parentName:"tr",align:null},"When your number is bigger than 2,147,483,647, you need BIGINT")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"DATETIME"),Object(l.b)("td",{parentName:"tr",align:null},"Legacy date and time"),Object(l.b)("td",{parentName:"tr",align:null},"More friendly default formatting")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"DATETIME2"),Object(l.b)("td",{parentName:"tr",align:null},"Modern date and time"),Object(l.b)("td",{parentName:"tr",align:null},"Best when you need both date and time")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"DATETIMEOFFSET"),Object(l.b)("td",{parentName:"tr",align:null},"Date with offset"),Object(l.b)("td",{parentName:"tr",align:null},"When you need timezone offset")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"DATE"),Object(l.b)("td",{parentName:"tr",align:null},"Only date"),Object(l.b)("td",{parentName:"tr",align:null},"Best when you need date only")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"TIME"),Object(l.b)("td",{parentName:"tr",align:null},"Only time"),Object(l.b)("td",{parentName:"tr",align:null},"Best when you need time only")))),Object(l.b)("p",null,"When converting values to the selected data type, you can have even more control by passing optional argument right after type to declare the length of the output."),Object(l.b)("p",null,"It is instrumental with ",Object(l.b)("inlineCode",{parentName:"p"},"DECIMAL")," as it allows you to provide expected precision (number of digits in a number) and scale (number of digits to the right of the decimal point in a number)."),Object(l.b)("p",null,"For example, you may have a string field containing a product price - ",Object(l.b)("inlineCode",{parentName:"p"},"'123.99'"),". If you convert it to ",Object(l.b)("inlineCode",{parentName:"p"},"DECIMAL")," without any arguments, it will round to ",Object(l.b)("inlineCode",{parentName:"p"},"124"),". However, you can provide precision and scale to keep the current format:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sql",metastring:"{2-3}","{2-3}":!0},"SELECT\n    CONVERT(DECIMAL, '123.99') AS RoundedConversion      /* Output: 124 */\n    CONVERT(DECIMAL(5,2), '123.99') AS FullConversion    /* Output: 123.99 */\n")),Object(l.b)("p",null,"Be sure to add correct precision. If it is smaller then the values in your source, it will lead to an error. It's better to have too big precision than too small."),Object(l.b)("p",null,"As for scale - if your scale is smaller than in your source, the value is rounded."),Object(l.b)("p",null,"You can also use the single argument with ",Object(l.b)("inlineCode",{parentName:"p"},"DATETIME"),", ",Object(l.b)("inlineCode",{parentName:"p"},"DATETIME2"),", ",Object(l.b)("inlineCode",{parentName:"p"},"DATETIMEOFFSET")," (to control precision of the output) and string data types (",Object(l.b)("inlineCode",{parentName:"p"},"CHAR"),", ",Object(l.b)("inlineCode",{parentName:"p"},"NCHAR"),", ",Object(l.b)("inlineCode",{parentName:"p"},"VARCHAR"),", ",Object(l.b)("inlineCode",{parentName:"p"},"NVARCHAR"),"). The latter won't directly limit the number of characters, but rather the number of bytes (which might be equal or not to the number of characters depending on what characters you are using)."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"CHAR")," allows for 1-8000 bytes range, whereas ",Object(l.b)("inlineCode",{parentName:"p"},"NCHAR")," due to Unicode support allows for only 1-4000. ",Object(l.b)("inlineCode",{parentName:"p"},"VARCHAR")," and ",Object(l.b)("inlineCode",{parentName:"p"},"NVARCHAR")," support the same ranges respectively and have an additional possible option - ",Object(l.b)("inlineCode",{parentName:"p"},"max")," that you can use if some values might exceed the range."),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"You Should Know")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"Always double-check the choice of data type you want to convert to, as it might have a massive impact into outcome."),Object(l.b)("pre",{parentName:"div"},Object(l.b)("code",{parentName:"pre",className:"language-sql",metastring:'title="Different outcomes depending on the output data type"',title:'"Different',outcomes:!0,depending:!0,on:!0,the:!0,output:!0,data:!0,'type"':!0},"SELECT\n    CAST(6.9 AS INT) AS CastToInt,               /* Output: 6 */\n    CAST(6.9 AS DECIMAL) AS CastToNumeric,       /* Output: 7 */\n    CONVERT(INT, 6.9) AS ConvertToInt,           /* Output: 6 */\n    CONVERT(DECIMAL, 6.9) AS ConvertToNumeric    /* Output: 7 */\n")),Object(l.b)("p",{parentName:"div"},"It is happening because conversions from ",Object(l.b)("inlineCode",{parentName:"p"},"DECIMAL")," or ",Object(l.b)("inlineCode",{parentName:"p"},"FLOAT")," to ",Object(l.b)("inlineCode",{parentName:"p"},"INT")," are truncated. The rest is rounded if no specific precision/scale argument is available."))),Object(l.b)("h3",{id:"convert-style-codes"},"CONVERT Style Codes"),Object(l.b)("p",null,"Just as with data types - there are many style codes available. Here I will cover just the most popular ones (if you don't understand some formats codes, check ",Object(l.b)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-date-functions#custom-date-formats"},"date formats guide"),"):"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Date format"),Object(l.b)("th",{parentName:"tr",align:null},"Style code"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"MMM dd yyyy hh:mmtt"),Object(l.b)("td",{parentName:"tr",align:null},"100")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"MM/dd/yyyy"),Object(l.b)("td",{parentName:"tr",align:null},"101")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"yyyy.mm.dd"),Object(l.b)("td",{parentName:"tr",align:null},"102")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"dd/mm/yyyy"),Object(l.b)("td",{parentName:"tr",align:null},"103")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"dd.mm.yyyy"),Object(l.b)("td",{parentName:"tr",align:null},"104")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"dd-mm-yyyy"),Object(l.b)("td",{parentName:"tr",align:null},"105")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"dd MMM yyyy"),Object(l.b)("td",{parentName:"tr",align:null},"106")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"MMM dd, yyyy"),Object(l.b)("td",{parentName:"tr",align:null},"107")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"HH:mm:ss"),Object(l.b)("td",{parentName:"tr",align:null},"108")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"MM-dd-yyyy"),Object(l.b)("td",{parentName:"tr",align:null},"110")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"yyyy/MM/dd"),Object(l.b)("td",{parentName:"tr",align:null},"111")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"yyyyMMdd"),Object(l.b)("td",{parentName:"tr",align:null},"112")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"yyyy-MM-dd HH:mm:ss"),Object(l.b)("td",{parentName:"tr",align:null},"120")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"MM/dd/yy hh:mm:ss tt"),Object(l.b)("td",{parentName:"tr",align:null},"22")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"yyyy-mm-dd"),Object(l.b)("td",{parentName:"tr",align:null},"23")))),Object(l.b)("p",null,"Use it by adding the style code as the third argument of the ",Object(l.b)("a",{parentName:"p",href:"#convert"},Object(l.b)("inlineCode",{parentName:"a"},"CONVERT"))," function:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sql",metastring:"{2-3}","{2-3}":!0},"SELECT\n    CONVERT(NVARCHAR, GETDATE(), 101) AS DateAsString,\n    CONVERT(DATETIME2, '2020-12-31 19:00:00', 120) AS StringAsDate\n")),Object(l.b)("p",null,"You can find the full list of style codes on ",Object(l.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/sql/t-sql/functions/cast-and-convert-transact-sql?view=sql-server-ver15#date-and-time-styles"},"Microsoft .Net Doc Pages"),"."))}d.isMDXComponent=!0},119:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,m=d["".concat(o,".").concat(u)]||d[u]||p[u]||l;return n?r.a.createElement(m,i(i({ref:t},c),{},{components:n})):r.a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},120:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),r=n(57),l=n.n(r);const o=({content:e})=>a.createElement(a.Fragment,null,a.createElement("p",{id:l.a.leadText},e))}}]);