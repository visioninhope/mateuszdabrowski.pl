(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{105:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=o.a.createContext({}),b=function(e){var t=o.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=b(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=b(a),p=n,d=m["".concat(r,".").concat(p)]||m[p]||u[p]||i;return a?o.a.createElement(d,l(l({ref:t},c),{},{components:a})):o.a.createElement(d,l({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var c=2;c<i;c++)r[c]=a[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},106:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(0),o=a.n(n),i=a(53),r=a.n(i);const l=({content:e})=>o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{id:r.a.leadText},e))},82:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return m}));var n=a(3),o=a(8),i=(a(0),a(105)),r=a(106),l={id:"sfmc-sql-join",title:"SFMC SQL Join",sidebar_label:"Join",description:"Data Extensions. System Data Views. With the JOIN statement, use one query to rule them all."},s={unversionedId:"sql/sfmc-sql-join",id:"sql/sfmc-sql-join",isDocsHomePage:!1,title:"SFMC SQL Join",description:"Data Extensions. System Data Views. With the JOIN statement, use one query to rule them all.",source:"@site/docs/sql/sfmc-sql-join.mdx",slug:"/sql/sfmc-sql-join",permalink:"/docs/sql/sfmc-sql-join",editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/docs/sql/sfmc-sql-join.mdx",version:"current",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1601495737,sidebar_label:"Join",sidebar:"snippets",previous:{title:"SFMC SQL From",permalink:"/docs/sql/sfmc-sql-from"},next:{title:"SFMC SQL Where",permalink:"/docs/sql/sfmc-sql-where"}},c=[{value:"JOIN Types",id:"join-types",children:[{value:"Inner Join",id:"inner-join",children:[]},{value:"Left and Right Joins",id:"left-and-right-joins",children:[]},{value:"Full Join",id:"full-join",children:[]},{value:"Self-join",id:"self-join",children:[]}]},{value:"Joining ON",id:"joining-on",children:[]},{value:"Table Name Prefix",id:"table-name-prefix",children:[]},{value:"Multiple Joins",id:"multiple-joins",children:[{value:"Multiple Inner Joins",id:"multiple-inner-joins",children:[]},{value:"Multiple Left Joins",id:"multiple-left-joins",children:[]},{value:"Multiple Various Joins",id:"multiple-various-joins",children:[]}]}],b={rightToc:c};function m(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(r.a,{content:"Data Extensions. System Data Views. With the JOIN statement, use one query to rule them all.",mdxType:"LeadText"}),Object(i.b)("p",null,"There will be some cases where all you need is to pull (and maybe transform) data ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/sql/sfmc-sql-from"}),Object(i.b)("inlineCode",{parentName:"a"},"FROM"))," a single Data Extension. But the real magic of SQL is visible when you need to combine information from multiple data points. Here comes the ",Object(i.b)("inlineCode",{parentName:"p"},"JOIN")," statement."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'{6} title="Check who opened the email and when by querying the _Open System Data View"',"{6}":!0,title:'"Check',who:!0,opened:!0,the:!0,email:!0,and:!0,when:!0,by:!0,querying:!0,_Open:!0,System:!0,Data:!0,'View"':!0}),"SELECT\n    de.SubscriberKey,\n    de.EmailAddress,\n    o.EventDate as OpenDate\nFROM [Welcome-Campaign-Segment] de\nJOIN _Open o ON de.SubscriberKey = o.SubscriberKey\n")),Object(i.b)("p",null,"There are three things to unpack."),Object(i.b)("h2",{id:"join-types"},"JOIN Types"),Object(i.b)("p",null,"In the example above, you can see ",Object(i.b)("inlineCode",{parentName:"p"},"JOIN")," word. There are many ",Object(i.b)("inlineCode",{parentName:"p"},"JOIN")," statement types available in SQL. The appropriate joining will allow you to segment your records precisely the way you want and without the need for extensive ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/sql/sfmc-sql-where"}),Object(i.b)("inlineCode",{parentName:"a"},"WHERE"))," clauses. Understanding differences between various types and using the correct one for the task at hand will make your code shorter, easier to read and optimized. Let's check what is in the quiver:"),Object(i.b)("h3",{id:"inner-join"},"Inner Join"),Object(i.b)("p",null,"The most straightforward join is ",Object(i.b)("inlineCode",{parentName:"p"},"INNER JOIN"),". It takes records from the first table (",Object(i.b)("inlineCode",{parentName:"p"},"Welcome-Campaign-Segment")," Data Extension in the above example) and second table (",Object(i.b)("inlineCode",{parentName:"p"},"_Open")," System Data View in this case) to output records available in both of them (based on selected relation)."),Object(i.b)("p",null,"In our query, it will be contacts that are in the Data Extension and in the same time have some email opens in ",Object(i.b)("inlineCode",{parentName:"p"},"_Open")," System Data View. It will ignore all contacts that are not visible in the ",Object(i.b)("inlineCode",{parentName:"p"},"_Open")," System Data View, and all the email opens that are not related to contacts in the ",Object(i.b)("inlineCode",{parentName:"p"},"Welcome-Campaign-Segment")," Data Extension."),Object(i.b)("p",null,"Of course, this query in its current state is not perfect and could output wrong results (like tracked opens for the contacts from our Data Extension, but coming from the entirely different campaign) as it doesn't limit the scope to just one campaign or Job."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:"{6}","{6}":!0}),"SELECT\n    de.SubscriberKey,\n    de.EmailAddress,\n    o.EventDate as OpenDate\nFROM [Welcome-Campaign-Segment] de\nINNER JOIN _Open o ON de.SubscriberKey = o.SubscriberKey\n")),Object(i.b)("p",null,"When using ",Object(i.b)("inlineCode",{parentName:"p"},"INNER JOIN"),", you can write just the word ",Object(i.b)("inlineCode",{parentName:"p"},"JOIN"),", as in the first example, to have the same result. However, it is best practice to state this type explicitly by writing the full name. It makes it easier to differentiate from the following types of ",Object(i.b)("inlineCode",{parentName:"p"},"JOIN"),"."),Object(i.b)("h3",{id:"left-and-right-joins"},"Left and Right Joins"),Object(i.b)("p",null,"Next types of joins are ",Object(i.b)("inlineCode",{parentName:"p"},"LEFT JOIN")," (also known as ",Object(i.b)("inlineCode",{parentName:"p"},"LEFT OUTER JOIN"),") and ",Object(i.b)("inlineCode",{parentName:"p"},"RIGHT JOIN")," (also known as ",Object(i.b)("inlineCode",{parentName:"p"},"RIGHT OUTER JOIN"),"). Instead of limiting the output to only those records that are available in both tables, they are taking full data from one table and append the additional information from the second one (if it is available)."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"LEFT JOIN")," will take complete data of the first table (in our example, Data Extension selected by ",Object(i.b)("inlineCode",{parentName:"p"},"FROM"),") and extend it with information from the second one (",Object(i.b)("inlineCode",{parentName:"p"},"_Open")," System Data View joined with ",Object(i.b)("inlineCode",{parentName:"p"},"LEFT JOIN"),")."),Object(i.b)("p",null,"You can go the other way around with ",Object(i.b)("inlineCode",{parentName:"p"},"RIGHT JOIN")," (in our example it would output everything in ",Object(i.b)("inlineCode",{parentName:"p"},"_Open")," System Data View and append to it the data from the Data Extension - not that useful)."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'{6} title="The same query, but this time joined with LEFT JOIN"',"{6}":!0,title:'"The',same:!0,"query,":!0,but:!0,this:!0,time:!0,joined:!0,with:!0,LEFT:!0,'JOIN"':!0}),"SELECT\n    de.SubscriberKey,\n    de.EmailAddress,\n    o.EventDate as OpenDate\nFROM [Welcome-Campaign-Segment] de\nLEFT JOIN _Open o ON de.SubscriberKey = o.SubscriberKey\n")),Object(i.b)("p",null,"As you can see, the only thing we changed in the above query is the type of ",Object(i.b)("inlineCode",{parentName:"p"},"JOIN"),". This simple change will alter our outcomes to show a full list of all Subscriber Keys and Email Addresses from ",Object(i.b)("inlineCode",{parentName:"p"},"Welcome-Campaign-Segment")," Data Extension with the date of email open for those contacts who engaged with the communication. Unengaged ones would have ",Object(i.b)("inlineCode",{parentName:"p"},"null")," values in the ",Object(i.b)("inlineCode",{parentName:"p"},"OpenDate")," column. Again, it is not a proper way of building such a report. There will be the ready-to-use snippet in the bottom."),Object(i.b)("p",null,"Due to the similarity of ",Object(i.b)("inlineCode",{parentName:"p"},"LEFT JOIN")," and ",Object(i.b)("inlineCode",{parentName:"p"},"RIGHT JOIN"),", I highly recommend to choose one type and use it consistently to lower the risk of an error."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"You Should Know")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If you would want to see all contacts from our Data Extension that did not open the email, you could use ",Object(i.b)("inlineCode",{parentName:"p"},"LEFT JOIN")," with exclusion:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'{7} title="Example of exclusion applied to LEFT JOIN"',"{7}":!0,title:'"Example',of:!0,exclusion:!0,applied:!0,to:!0,LEFT:!0,'JOIN"':!0}),"SELECT\n    de.SubscriberKey,\n    de.EmailAddress,\n    o.EventDate as OpenDate\nFROM [Welcome-Campaign-Segment] de\nLEFT JOIN _Open o ON de.SubscriberKey = o.SubscriberKey\nWHERE o.SubscriberKey IS NULL\n")),Object(i.b)("p",{parentName:"div"},"Find more about it in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/sql/sfmc-sql-where"}),"WHERE statement guide"),"."))),Object(i.b)("h3",{id:"full-join"},"Full Join"),Object(i.b)("p",null,"The last classic SQL ",Object(i.b)("inlineCode",{parentName:"p"},"JOIN")," is the ",Object(i.b)("inlineCode",{parentName:"p"},"FULL JOIN")," (also known as ",Object(i.b)("inlineCode",{parentName:"p"},"FULL OUTER JOIN"),") that allows you to get data from both sources."),Object(i.b)("p",null,"In our example, it would mean all contacts from ",Object(i.b)("inlineCode",{parentName:"p"},"Welcome-Campaign-Segment")," Data Extension and all records from ",Object(i.b)("inlineCode",{parentName:"p"},"_Open")," System Data View, with ",Object(i.b)("inlineCode",{parentName:"p"},"null")," values in the columns without a match. Contacts that did not open and tracked opens nor related to contacts available in the Data Extension we selected."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'{6} title="Not a best use case for the FULL JOIN"',"{6}":!0,title:'"Not',a:!0,best:!0,use:!0,case:!0,for:!0,the:!0,FULL:!0,'JOIN"':!0}),"SELECT\n    de.SubscriberKey,\n    de.EmailAddress,\n    o.EventDate as OpenDate\nFROM [Welcome-Campaign-Segment] de\nFULL JOIN _Open o ON de.SubscriberKey = o.SubscriberKey\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"FULL JOIN")," is an awesome tool when you, for example, want to create a master segment from multiple smaller ones. Another use case - checking multiple tracking data points with a clear view which are missing (for example, which users have a tracked email click without open and vice versa)."),Object(i.b)("h3",{id:"self-join"},"Self-join"),Object(i.b)("p",null,"Then there is Self-join. It is not a separate type of ",Object(i.b)("inlineCode",{parentName:"p"},"JOIN")," statement, but rather a specific use case for the above types. It joins the table to itself. Useful when you have columns in your data extension that point to other columns in the same extension."),Object(i.b)("p",null,"A use case I can think of in the world of Salesforce Marketing Cloud could be, for example, a Data Extension that stores product categories and subcategories."),Object(i.b)("p",null,"Input Data Extension:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"CategoryName"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"CategoryID"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"ParentCategoryID"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Wristwatches"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Diver Watches"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Pilot Watches"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1")))),Object(i.b)("p",null,"In such a scenario, you can use Self-join to build a more readable table that might be useful for personalization:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'{5} title="Self-join using INNER JOIN will output only categories that have a parent category"',"{5}":!0,title:'"Self-join',using:!0,INNER:!0,JOIN:!0,will:!0,output:!0,only:!0,categories:!0,that:!0,have:!0,a:!0,parent:!0,'category"':!0}),"SELECT\n    c.CategoryName AS Category,\n    p.CategoryName AS ParentCategory\nFROM [Wristwatches-DE] c\nINNER JOIN [Wristwatches-DE] p ON p.ParentCategoryID = c.CategoryID\n")),Object(i.b)("p",null,"Output Data Extension:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Category"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"ParentCategory"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Diver Watches"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Wristwatches")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Pilot Watches"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Wristwatches")))),Object(i.b)("p",null,"Another use case? You might have a product table for your e-commerce wherein one column store recommended products that are often purchased together. To personalize an email with such offers, self-join on that column would be perfect."),Object(i.b)("p",null,"You won't be using Self-join a lot, but it might be a colossal timesaver when needed."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"You Should Know")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Self-join might be the perfect tool when you are working with data coming from Salesforce through Marketing Cloud Connect to Synchronized Data Extensions."),Object(i.b)("p",{parentName:"div"},"Very often, you might encounter Accounts that are related to another Account. This hierarchical structure uses the ParentId field. With self-join, you can flatten this relationship for use in personalization and journeys."),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'{8-10} title="Flattening three levels of Salesforce Account hierarchy"',"{8-10}":!0,title:'"Flattening',three:!0,levels:!0,of:!0,Salesforce:!0,Account:!0,'hierarchy"':!0}),"SELECT\n    a1.Id AS Level1AccountId,\n    a1.Name AS Level1AccountName,\n    a2.Id AS Level2AccountId,\n    a2.Name AS Level2AccountName,\n    a3.Id AS Level3AccountId,\n    a3.Name AS Level3AccountName\nFROM Account_Salesforce a1\nLEFT JOIN Account_Salesforce a2 ON a2.Id = a1.ParentId\nLEFT JOIN Account_Salesforce a3 ON a3.Id = a2.ParentId\n")))),Object(i.b)("h2",{id:"joining-on"},"Joining ON"),Object(i.b)("p",null,"I was writing a lot about the various ",Object(i.b)("inlineCode",{parentName:"p"},"JOIN")," statements, but there is also the ",Object(i.b)("inlineCode",{parentName:"p"},"ON")," element. We use it to define the relationship between the joined data sources. It tells the query which value should it should consider to decide whether the record is available in both columns."),Object(i.b)("p",null,"In our example, we used ",Object(i.b)("inlineCode",{parentName:"p"},"ON de.SubscriberKey = o.SubscriberKey")," that takes the SubscriberKey from the Data Extension and the System Data View and matches the rows based on it. You can use any other but always think about edge cases. Is the email address always unique? It is a very similar experience to what you do in the Salesforce Marketing Cloud Data Designer."),Object(i.b)("p",null,"This column does not have to be the Primary Key of the Data Extension or System Data View. You can select any as long as its values have a match in the second source."),Object(i.b)("p",null,"You can also add a bit of logic to it, by leveraging ",Object(i.b)("inlineCode",{parentName:"p"},"AND"),"/",Object(i.b)("inlineCode",{parentName:"p"},"OR")," statements. It is especially useful when either:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"You are not sure in which column you will have a match. For example, you have separate columns for 15 characters Salesforce ID and 18 characters one and want to match on either one."),Object(i.b)("li",{parentName:"ol"},"You want to match on multiple criteria. For example, not only the ",Object(i.b)("inlineCode",{parentName:"li"},"EmailAddress")," field but also ",Object(i.b)("inlineCode",{parentName:"li"},"LastName")," to cover shared email address."),Object(i.b)("li",{parentName:"ol"},"You want to join more than two data sources together using convoluted logic. You will find an example soon at the bottom of the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#multiple-various-joins.mdx"}),"Multiple Various Joins")," section.")),Object(i.b)("h2",{id:"table-name-prefix"},"Table Name Prefix"),Object(i.b)("p",null,"When you are joining multiple data sources that have columns of the same name, you will have to tell the SQL from which source you select each column. You can do it by using the table name prefix before the column name:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'title="Example of SQL with full table name prefixes"',title:'"Example',of:!0,SQL:!0,with:!0,full:!0,table:!0,name:!0,'prefixes"':!0}),"SELECT\n    _Sent.SubscriberKey,\n    _Job.EmailName\nFROM _Sent\nLEFT JOIN _Job ON _Sent.JobID = _Job.JobID\n")),Object(i.b)("p",null,"However, you probably saw in the previous examples that there is another way. You don't have to write the full name of the data source every time. You can leverage labels just as with columns to make it shorter:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'title="Example of SQL with labelled table name prefixes"',title:'"Example',of:!0,SQL:!0,with:!0,labelled:!0,table:!0,name:!0,'prefixes"':!0}),"SELECT\n    de.SubscriberKey,\n    de.EmailAddress,\n    o.EventDate as OpenDate\nFROM [Welcome-Campaign-Segment] de\nINNER JOIN _Open o ON de.SubscriberKey = o.SubscriberKey\n")),Object(i.b)("p",null,"All you need to do is to write your label after a data source name. Now you can leverage the shortened name to prefix the selected columns. It's especially useful when pulling data from Data Extensions."),Object(i.b)("p",null,"Using table name prefixes is not always required (for example when the two sources you ",Object(i.b)("inlineCode",{parentName:"p"},"JOIN")," don't have any columns of the same name). You might see some examples without it. However, it is best practice to leverage this feature for consistency, readability and error-deferring purposes."),Object(i.b)("h2",{id:"multiple-joins"},"Multiple Joins"),Object(i.b)("p",null,"Joining two tables is just the beginning. Working with multiple columns can be much more mind-boggling, and in some cases taking a paper and pencil to draw some ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Venn_diagram"}),"Venn Diagrams")," can make a huge difference. Let's check some of the most popular use cases."),Object(i.b)("h3",{id:"multiple-inner-joins"},"Multiple Inner Joins"),Object(i.b)("p",null,"In many cases, you will want to get a segment of people that fulfil multiple requirements simultaneously. For example, contacts that were part of three different ToFu campaigns related to a particular product. Such data might make for a great audience for your next campaign further down in the marketing funnel. For such a scenario, you will use multiple ",Object(i.b)("inlineCode",{parentName:"p"},"INNER JOIN")," statements chained in one query:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'{6-8} title="Contacts used for three different ToFu campaigns that are ready for a MoFu campaign"',"{6-8}":!0,title:'"Contacts',used:!0,for:!0,three:!0,different:!0,ToFu:!0,campaigns:!0,that:!0,are:!0,ready:!0,a:!0,MoFu:!0,'campaign"':!0}),"SELECT\n    de1.SubscriberKey,\n    de1.EmailAddress,\n    de2.PhoneNumber,\n    de3.EbookName\nFROM [Welcome-Campaign-Segment] de1\nINNER JOIN [Newsletter-Promo-Campaign-Segment] de2 ON de1.SubscriberKey = de2.SubscriberKey\nINNER JOIN [Ebook-Download-Campaign-Segment] de3 ON de1.SubscriberKey = de3.SubscriberKey\n")),Object(i.b)("p",null,"This SQL will give you only those contacts that were in all three Data Extensions."),Object(i.b)("h3",{id:"multiple-left-joins"},"Multiple Left Joins"),Object(i.b)("p",null,"Another huge group of cases you might encounter are queries with multiple ",Object(i.b)("inlineCode",{parentName:"p"},"LEFT JOIN")," statements. They are great when you want to extend the data for your main data source with multiple other data points without losing records that do not have a match. Awesome for building a segment for a campaign from Data Extensions with extensive personalization:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'{7-9} title="To the list of contacts add the product details we want to use in the email content along with special offer description"',"{7-9}":!0,title:'"To',the:!0,list:!0,of:!0,contacts:!0,add:!0,product:!0,details:!0,we:!0,want:!0,to:!0,use:!0,in:!0,email:!0,content:!0,along:!0,with:!0,special:!0,offer:!0,'description"':!0}),"SELECT\n    de.SubscriberKey,\n    de.EmailAddress,\n    prod.ProductName\n    prod.ProductPrice\n    promo.Offer\nFROM [Up-Sell-Campaign-Segment] de\nLEFT JOIN [Product-Details-List] prod ON de.OfferedProduct = prod.ProductId\nLEFT JOIN [Custom-Offer-List] promo ON de.OfferedPromotion = promo.PromotionId\n")),Object(i.b)("p",null,"Notice that in this case, we joined additional Data Extensions on different columns. What is more, we don't need to ",Object(i.b)("inlineCode",{parentName:"p"},"SELECT")," those columns to be able to filter on them. Thanks to using ",Object(i.b)("inlineCode",{parentName:"p"},"LEFT JOIN")," instead of ",Object(i.b)("inlineCode",{parentName:"p"},"INNER JOIN")," this query will return to us also contacts that do not have any custom offer applied (we can hide appropriate content block with personalization for them)."),Object(i.b)("h3",{id:"multiple-various-joins"},"Multiple Various Joins"),Object(i.b)("p",null,"You are not limited to just one type of join when creating your query. You can mix and match different types of joins to extract precisely the data you need. However, the more complexity you add (either by the number of sources or by the number of various joins), the more recommended drawing the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Venn_diagram"}),"Venn Diagrams")," will be."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'{7-9} title="Same query as above, but this time with a mix of INNER JOIN and LEFT JOIN"',"{7-9}":!0,title:'"Same',query:!0,as:!0,"above,":!0,but:!0,this:!0,time:!0,with:!0,a:!0,mix:!0,of:!0,INNER:!0,JOIN:!0,and:!0,LEFT:!0,'JOIN"':!0}),"SELECT\n    de.SubscriberKey,\n    de.EmailAddress,\n    prod.ProductName\n    prod.ProductPrice\n    promo.Offer\nFROM [Up-Sell-Campaign-Segment] de\nINNER JOIN [Product-Details-List] prod ON de.OfferedProduct = prod.ProductId\nLEFT JOIN [Custom-Offer-List] promo ON de.OfferedPromotion = promo.PromotionId\n")),Object(i.b)("p",null,"In the example above, we took the same query as for the Multiple Left Joins, but we changed first ",Object(i.b)("inlineCode",{parentName:"p"},"JOIN")," type to ",Object(i.b)("inlineCode",{parentName:"p"},"INNER"),". What is the impact? This time, we will get only those contacts from ",Object(i.b)("inlineCode",{parentName:"p"},"Up-Sell-Campaign-Segment")," that have a matching product in ",Object(i.b)("inlineCode",{parentName:"p"},"Product-Details-List")," and only then we would extend them with optional information about the custom offer."),Object(i.b)("p",null,"This approach might be better for our needs, as we would be sure that all contacts have available data for Product Name and Product Price. A great way to make our content better and more comfortable to create."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"You Should Know")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"How complex a ",Object(i.b)("inlineCode",{parentName:"p"},"JOIN")," can get? Very. You will encounter such monstrosities especially in the world of reporting queries that requires information from multiple System Data Views:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'title="Reporting query for each sent email within the last month"',title:'"Reporting',query:!0,for:!0,each:!0,sent:!0,email:!0,within:!0,the:!0,last:!0,'month"':!0}),"SELECT\n    s.SubscriberKey,\n    j.EmailName,\n    j.DeliveredTime AS DeliveryDate,\n    s.EventDate AS SentDate,\n    o.EventDate AS OpenDate,\n    c.EventDate AS ClickDate,\n    b.EventDate AS BounceDate,\n    b.BounceCategory,\n    u.EventDate AS UnsubscribeDate\nFROM _Sent s\nLEFT JOIN _Job j ON s.JobID = j.JobID\nLEFT JOIN _Open o ON s.JobID = o.JobID\n    AND s.ListID = o.ListID\n    AND s.BatchID = o.BatchID\n    AND s.SubscriberID = o.SubscriberID\n    AND o.IsUnique = 1\nLEFT JOIN _Click c ON s.JobID = c.JobID\n    AND s.ListID = c.ListID\n    AND s.BatchID = c.BatchID\n    AND s.SubscriberID = c.SubscriberID\n    AND c.IsUnique = 1\nLEFT JOIN _Bounce b ON s.JobID = b.JobID\n    AND s.ListID = b.ListID\n    AND s.BatchID = b.BatchID\n    AND s.SubscriberID = b.SubscriberID\n    AND b.IsUnique = 1\nLEFT JOIN _Unsubscribe u ON s.JobID = u.JobID\n    AND s.ListID = u.ListID\n    AND s.BatchID = u.BatchID\n    AND s.SubscriberID = u.SubscriberID\n    AND u.IsUnique = 1\nWHERE CONVERT(DATE, s.EventDate) >= DATEADD(MONTH, -1, CONVERT(DATE, GETUTCDATE()))\n")),Object(i.b)("p",{parentName:"div"},"Here you can see ready-to-use reporting query for all email sends from the last month from the current Business Unit."),Object(i.b)("p",{parentName:"div"},"We are matching the System Data Views by multiple criteria to be sure that the data is for each particular send (that's the issue we were highlighting in query examples in the top of this page). We also limit the ",Object(i.b)("inlineCode",{parentName:"p"},"JOIN ON")," selection to only the Unique behavioural events - so the dates are showing the first engagement with our content, even if there were multiple ones."))),Object(i.b)("p",null,"One thing to remember - the more complex query you create, the more error-prone it is and the closer you are to the 30 minutes AutoKill limit for the query execution. Always minimize your query to only the data you truly need."))}m.isMDXComponent=!0}}]);