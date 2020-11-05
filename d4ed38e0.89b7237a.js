(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{90:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),c=(a(0),a(95)),l=a(96),o={id:"sfmc-sql-conversion-functions",title:"SFMC SQL Conversion Functions",sidebar_label:"Conversion Functions",description:"Break from the limits of Data Extension data types. Use full power of SQL to control your values."},b={unversionedId:"sql/sfmc-sql-conversion-functions",id:"sql/sfmc-sql-conversion-functions",isDocsHomePage:!1,title:"SFMC SQL Conversion Functions",description:"Break from the limits of Data Extension data types. Use full power of SQL to control your values.",source:"@site/docs/sql/sfmc-sql-conversion-functions.mdx",slug:"/sql/sfmc-sql-conversion-functions",permalink:"/docs/sql/sfmc-sql-conversion-functions",editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/docs/sql/sfmc-sql-conversion-functions.mdx",version:"current",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1604254677,sidebar_label:"Conversion Functions",sidebar:"snippets",previous:{title:"SFMC SQL Date Functions",permalink:"/docs/sql/sfmc-sql-date-functions"},next:{title:"SFMC Permissions",permalink:"/docs/config/sfmc-config-permissions"}},i=[{value:"CAST &amp; CONVERT",id:"cast--convert",children:[{value:"CAST",id:"cast",children:[]},{value:"CONVERT",id:"convert",children:[]},{value:"Data Types",id:"data-types",children:[]},{value:"CONVERT Style Codes",id:"convert-style-codes",children:[]}]}],s={rightToc:i};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)(l.a,{content:"Break from the limits of source data types. Use the full power of SQL to transform your values.",mdxType:"LeadText"}),Object(c.b)("p",null,"Salesforce Marketing Cloud SQL implementation does not support user-defined functions. There are, however, multiple built-in functions that are useful on a day-to-day basis when working with queries."),Object(c.b)("p",null,"Here, I will cover only selected conversion functions, that I find most useful for Marketing Automation purposes. They will help you change the value types to enable the use of type-based Salesforce Marketing Cloud User Interface elements and type-specific functions."),Object(c.b)("h2",{id:"cast--convert"},"CAST & CONVERT"),Object(c.b)("p",null,"In Salesforce Marketing Cloud, you can use two universal conversion functions - ",Object(c.b)("inlineCode",{parentName:"p"},"CAST")," and ",Object(c.b)("inlineCode",{parentName:"p"},"CONVERT"),"."),Object(c.b)("h3",{id:"cast"},"CAST"),Object(c.b)("p",null,"The first one, ",Object(c.b)("inlineCode",{parentName:"p"},"CAST"),", is straightforward and available in all SQL dialects:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'{4} title="Find all subscribers that joined after the given date"',"{4}":!0,title:'"Find',all:!0,subscribers:!0,that:!0,joined:!0,after:!0,the:!0,given:!0,'date"':!0}),"SELECT\n    SubscriberKey\nFROM ENT._Subscribers\nWHERE DateJoined > CAST('2020-10-30' AS DATE)\n")),Object(c.b)("p",null,"It takes a value and expected datatype with ",Object(c.b)("inlineCode",{parentName:"p"},"AS")," operator in between."),Object(c.b)("p",null,"However, in Salesforce Marketing Cloud, it is much better to use ",Object(c.b)("inlineCode",{parentName:"p"},"CONVERT")," function instead. It covers all features of ",Object(c.b)("inlineCode",{parentName:"p"},"CAST")," plus adds quite a lot more. It is also better supported by the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"sfmc-sql-basics#query-studio"}),"Query Studio")," (for example, you cannot use ",Object(c.b)("inlineCode",{parentName:"p"},"CAST")," in a ",Object(c.b)("inlineCode",{parentName:"p"},"SELECT")," part of the query there)."),Object(c.b)("h3",{id:"convert"},"CONVERT"),Object(c.b)("p",null,"The basic form of ",Object(c.b)("inlineCode",{parentName:"p"},"CONVERT")," is nearly the same as the ",Object(c.b)("inlineCode",{parentName:"p"},"CASE")," with reversed order of arguments:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'{4} title="Find all subscribers that joined after the given date"',"{4}":!0,title:'"Find',all:!0,subscribers:!0,that:!0,joined:!0,after:!0,the:!0,given:!0,'date"':!0}),"SELECT\n    SubscriberKey\nFROM ENT._Subscribers\nWHERE DateJoined > CONVERT(DATE, '2020-10-30')\n")),Object(c.b)("p",null,"With both functions you can stack functions within for more complex calculations:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'{2} title="Calculate the end of the trial period and output date only"',"{2}":!0,title:'"Calculate',the:!0,end:!0,of:!0,trial:!0,period:!0,and:!0,output:!0,date:!0,'only"':!0}),"SELECT\n    CONVERT(DATE, DATEADD(MM, 1, GETUTCDATE())) AS TrialPeriodEndDate\n")),Object(c.b)("p",null,"Up to this point, ",Object(c.b)("inlineCode",{parentName:"p"},"CAST")," and ",Object(c.b)("inlineCode",{parentName:"p"},"CONVERT")," seem similar in the features."),Object(c.b)("p",null,"However, only ",Object(c.b)("inlineCode",{parentName:"p"},"CONVERT")," have an additional third optional argument - style. Thanks to it, you can convert even from non-standard (for the server) formats that would result in an error:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:"{4} title=\"Converting dd/MM/yyyy format throws 'Could not convert date and/or time from string data type '\"","{4}":!0,title:'"Converting',"dd/MM/yyyy":!0,format:!0,throws:!0,"'Could":!0,not:!0,convert:!0,date:!0,"and/or":!0,time:!0,from:!0,string:!0,data:!0,type:!0,"'\"":!0}),"SELECT\n    SubscriberKey\nFROM _Subscribers\nWHERE DateJoined > CONVERT(DATE, '30/10/2019') /* Error */\n")),Object(c.b)("p",null,"With style codes, we can make it work with minimal change:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'{4} title="Converting dd/MM/yyyy format with appropriate style code"',"{4}":!0,title:'"Converting',"dd/MM/yyyy":!0,format:!0,with:!0,appropriate:!0,style:!0,'code"':!0}),"SELECT\n    SubscriberKey\nFROM _Subscribers\nWHERE DateJoined > CONVERT(DATE, '30/10/2019', 103)\n")),Object(c.b)("p",null,"It is not possible with ",Object(c.b)("inlineCode",{parentName:"p"},"CAST"),"."),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"You Should Know")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"You can also leverage style codes to format your dates during conversion to string, without the need to use ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"sfmc-sql-date-functions#format-with-dates"}),Object(c.b)("inlineCode",{parentName:"a"},"FORMAT"))," function on top."),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"SELECT\n    CONVERT(NVARCHAR, GETDATE(), 101) AS DateFormat1,   /* Output: 10/30/2020 */\n    CONVERT(NVARCHAR, GETDATE(), 102) AS DateFormat2,   /* Output: 2020.10.30 */\n    CONVERT(NVARCHAR, GETDATE(), 107) AS DateFormat3    /* Output: Oct 30, 2020 */\n")))),Object(c.b)("h3",{id:"data-types"},"Data Types"),Object(c.b)("p",null,"There are over 30 data types available for conversion, but there are only a few that are useful on a day-to-day basis in Salesforce Marketing Cloud:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Data Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Comment"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CHAR"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Fixed-length string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NCHAR"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Fixed-length string with Unicode support"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"VARCHAR"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Variable-length string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NVARCHAR"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Variable-length string with Unicode support"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Best option for most SFMC string use cases")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DECIMAL/NUMERIC"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Decimal number with big precision"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Best option if you need a decimal number")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"INT"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Integer number"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Best option if your number is not decimal")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DATETIME"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Legacy date and time"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"More friendly default formatting")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DATETIME2"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Modern date and time"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Best when you need both date and time")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DATE"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Only date"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Best when you need date only")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TIME"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Only time"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Best when you need time only")))),Object(c.b)("p",null,"When converting values to the selected data type, you can have even more control by passing optional argument right after type to declare the length of the output."),Object(c.b)("p",null,"It is especially useful with ",Object(c.b)("inlineCode",{parentName:"p"},"DECIMAL")," as it allows you to provide expected precision (number of digits in a number) and scale (number of digits to the right of the decimal point in a number)."),Object(c.b)("p",null,"For example, you may have a string field containing a product price - ",Object(c.b)("inlineCode",{parentName:"p"},"'123.99'"),". If you convert it to ",Object(c.b)("inlineCode",{parentName:"p"},"DECIMAL")," without any arguments, it will round to ",Object(c.b)("inlineCode",{parentName:"p"},"124"),". However, you can provide precision and scale to keep the current format:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:"{2-3}","{2-3}":!0}),"SELECT\n    CONVERT(DECIMAL, '123.99') AS RoundedConversion      /* Output: 124 */\n    CONVERT(DECIMAL(5,2), '123.99') AS FullConversion    /* Output: 123.99 */\n")),Object(c.b)("p",null,"Be sure to add correct precision. If it is smaller then the values in your source, it will lead to an error. It's better to have too big precision than too small."),Object(c.b)("p",null,"As for scale - if your scale is smaller than in your source, the value is rounded."),Object(c.b)("p",null,"You can also use a single argument with string data types. In this case, it won't directly limit the number of characters, but rather the number of bytes (which might be equal or not to the number of characters depending on what characters you are using)."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"CHAR")," allows for 1-8000 bytes range, whereas ",Object(c.b)("inlineCode",{parentName:"p"},"NCHAR")," due to Unicode support allows for only 1-4000. ",Object(c.b)("inlineCode",{parentName:"p"},"VARCHAR")," and ",Object(c.b)("inlineCode",{parentName:"p"},"NVARCHAR")," support the same ranges respectively but also have an additional possible option - ",Object(c.b)("inlineCode",{parentName:"p"},"max")," that you can use if some values might exceed the range."),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"You Should Know")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Always double-check the choice of data type you want to convert to, as it might have a massive impact into outcome."),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'title="Different outcomes depending on the output data type"',title:'"Different',outcomes:!0,depending:!0,on:!0,the:!0,output:!0,data:!0,'type"':!0}),"SELECT\n    CAST(6.9 AS INT) AS CastToInt,               /* Output: 6 */\n    CAST(6.9 AS DECIMAL) AS CastToNumeric,       /* Output: 7 */\n    CONVERT(INT, 6.9) AS ConvertToInt,           /* Output: 6 */\n    CONVERT(DECIMAL, 6.9) AS ConvertToNumeric    /* Output: 7 */\n")),Object(c.b)("p",{parentName:"div"},"It is happening because conversions from ",Object(c.b)("inlineCode",{parentName:"p"},"DECIMAL")," or ",Object(c.b)("inlineCode",{parentName:"p"},"FLOAT")," to ",Object(c.b)("inlineCode",{parentName:"p"},"INT")," are truncated. The rest is rounded if no specific precision/scale argument is available."))),Object(c.b)("h3",{id:"convert-style-codes"},"CONVERT Style Codes"),Object(c.b)("p",null,"Just as with data types - there are many style codes available. Here I will cover just the most popular ones (if you don't understand some formats codes, check ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"sfmc-sql-date-functions/#custom-date-formats"}),"date formats guide"),"):"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Date format"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Style code"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MMM dd yyyy hh:mmtt"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"100")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MM/dd/yyyy"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"101")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yyyy.mm.dd"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"102")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dd/mm/yyyy"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"103")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dd.mm.yyyy"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"104")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dd-mm-yyyy"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"105")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dd MMM yyyy"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"106")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MMM dd, yyyy"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"107")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"HH:mm:ss"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"108")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MM-dd-yyyy"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"110")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yyyy/MM/dd"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"111")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yyyyMMdd"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"112")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yyyy-MM-dd HH:mm:ss"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"120")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MM/dd/yy hh:mm:ss tt"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"22")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yyyy-mm-dd"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"23")))),Object(c.b)("p",null,"You can find the full list of style codes on ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/sql/t-sql/functions/cast-and-convert-transact-sql?view=sql-server-ver15#date-and-time-styles"}),"Microsoft .Net Doc Pages"),"."))}d.isMDXComponent=!0},95:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),s=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),d=s(a),u=n,m=d["".concat(l,".").concat(u)]||d[u]||p[u]||c;return a?r.a.createElement(m,o(o({ref:t},i),{},{components:a})):r.a.createElement(m,o({ref:t},i))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,l=new Array(c);l[0]=u;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var i=2;i<c;i++)l[i]=a[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},96:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),r=a.n(n),c=a(48),l=a.n(c);const o=({content:e})=>r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{id:l.a.leadText},e))}}]);