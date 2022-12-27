"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[924],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1872:(e,t,n)=>{n.d(t,{m:()=>i});var a=n(7294);const r="leadText_qzwo",i=e=>{let{content:t}=e;return a.createElement(a.Fragment,null,a.createElement("p",{id:r},t))}},6718:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(4137)),i=n(1872);const o={id:"sfmc-sql-select",title:"SFMC SQL Select",sidebar_label:"Select",description:"Selected information on the SELECT statement in SFMC SQL.",image:"img/og/og-image-sql-select.png",tags:["Marketing Cloud","SQL"]},l=void 0,s={unversionedId:"sql/sfmc-sql-select",id:"sql/sfmc-sql-select",title:"SFMC SQL Select",description:"Selected information on the SELECT statement in SFMC SQL.",source:"@site/docs/sql/sfmc-sql-select.mdx",sourceDirName:"sql",slug:"/sql/sfmc-sql-select",permalink:"/docs/sql/sfmc-sql-select",draft:!1,editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/docs/sql/sfmc-sql-select.mdx",tags:[{label:"Marketing Cloud",permalink:"/docs/tags/marketing-cloud"},{label:"SQL",permalink:"/docs/tags/sql"}],version:"current",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1672049341,formattedLastUpdatedAt:"Dec 26, 2022",frontMatter:{id:"sfmc-sql-select",title:"SFMC SQL Select",sidebar_label:"Select",description:"Selected information on the SELECT statement in SFMC SQL.",image:"img/og/og-image-sql-select.png",tags:["Marketing Cloud","SQL"]},sidebar:"docs",previous:{title:"SQL Basics",permalink:"/docs/sql/sfmc-sql-basics"},next:{title:"From",permalink:"/docs/sql/sfmc-sql-from"}},u={},p=[{value:"Aliasing with AS",id:"aliasing-with-as",level:2},{value:"Custom values",id:"custom-values",level:3},{value:"TOP",id:"top",level:2},{value:"TOP PERCENT",id:"top-percent",level:3},{value:"TOP with ORDER BY",id:"top-with-order-by",level:3},{value:"TOP WITH TIES",id:"top-with-ties",level:3},{value:"DISTINCT",id:"distinct",level:2},{value:"DISTINCT with TOP",id:"distinct-with-top",level:3},{value:"Table Prefixes",id:"table-prefixes",level:2},{value:"Flow control",id:"flow-control",level:2},{value:"Variables &amp; Functions",id:"variables--functions",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.m,{content:"Selected information on the SELECT statement in SFMC SQL",mdxType:"LeadText"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," statement opens each query. It picks the columns from the source data extensions and system data views and allows you to create entirely new data points."),(0,r.kt)("p",null,"The simplest version of this statement is ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT *"),", which targets all available columns from the source. I do not recommend this approach, as it is terrible for your query's readability and performance. As Salesforce Marketing Cloud caches the source Data Extension column names when you save SQL Query Activity, you won't have added value of flexible selection. You will still have to edit and save the activity. Also, ",(0,r.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-basics#query-studio"},"Query Studio")," does not support this shortcut. Don't use ",(0,r.kt)("inlineCode",{parentName:"p"},"*"),"."),(0,r.kt)("p",null,"The prefered method is targeting columns explicitly by their names:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Select ContactKey and EmailAddress columns"',title:'"Select',ContactKey:!0,and:!0,EmailAddress:!0,'columns"':!0},"SELECT\n      ContactKey\n    , EmailAddres\n")),(0,r.kt)("p",null,"If a column name contains a space, hyphen or is a SQL's reserved keyword, you need to capture it with squared brackets:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{4} title="Let\'s add another column with whitespace in its name"',"{4}":!0,title:"\"Let's",add:!0,another:!0,column:!0,with:!0,whitespace:!0,in:!0,its:!0,'name"':!0},"SELECT\n      ContactKey\n    , EmailAddres\n    , [External Contact Id]\n")),(0,r.kt)("p",null,"There are also some exceptional cases related to selected ",(0,r.kt)("a",{parentName:"p",href:"/docs/config/sfmc-system-data-views"},"System Data Views")," in Salesforce Marketing Cloud, where you need to use an underscore prefix before a name (for example, when taking Subscriber ID from Enterprise Attributes):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="There are some special column names with an underscore prefix"',title:'"There',are:!0,some:!0,special:!0,column:!0,names:!0,with:!0,an:!0,underscore:!0,'prefix"':!0},"SELECT _SubscriberId\n")),(0,r.kt)("h2",{id:"aliasing-with-as"},"Aliasing with AS"),(0,r.kt)("p",null,"You can also utilise ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," as a tool to rename the source columns to match your needs in an outcome data extension. It is especially useful when pulling the data from Synchronized Data Extension with names coming from Salesforce custom fields."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{4-5} title="Improve readability and consistency with aliasing"',"{4-5}":!0,title:'"Improve',readability:!0,and:!0,consistency:!0,with:!0,'aliasing"':!0},"SELECT\n      ContactKey\n    , EmailAddress\n    , [External Contact Id] AS ExternalContactId\n    , Gender__c             AS Gender\n")),(0,r.kt)("h3",{id:"custom-values"},"Custom values"),(0,r.kt)("p",null,"Use aliases also for passing new values directly from your query. Need to add a custom string to outcome data extension? Or maybe synchronisation timestamp for debugging purposes? You can leverage SQL for it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:"{6-7} title=\"Add custom column aliased 'ImportDate' with a value equal to the UTC of the script execution for each record\"","{6-7}":!0,title:'"Add',custom:!0,column:!0,aliased:!0,"'ImportDate'":!0,with:!0,a:!0,value:!0,equal:!0,to:!0,the:!0,UTC:!0,of:!0,script:!0,execution:!0,for:!0,each:!0,'record"':!0},"SELECT\n      ContactKey\n    , EmailAddress\n    , [External Contact Id] AS ExternalContactId\n    , Gender__c             AS Gender\n    , 'Lead'                AS RecordType\n    , GETUTCDATE()          AS ImportDate\n")),(0,r.kt)("admonition",{title:"You Should Know",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can even go further by creating new values by leveraging existing data! For example, if you have a first name and last name, you can use SQL to create a FullName column from scratch:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{4} title="Let\'s create a concatenated column for easier personalisation"',"{4}":!0,title:"\"Let's",create:!0,a:!0,concatenated:!0,column:!0,for:!0,easier:!0,'personalisation"':!0},"SELECT\n      SubscriberKey\n    , EmailAddress\n    , FirstName + ' ' + LastName AS FullName\n")),(0,r.kt)("p",{parentName:"admonition"},"It becomes mighty with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-string-functions"},"SQL String functions"),".")),(0,r.kt)("h2",{id:"top"},"TOP"),(0,r.kt)("p",null,"You can add a ",(0,r.kt)("inlineCode",{parentName:"p"},"TOP")," clause to your ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," statement to limit the number of rows returned by your query."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",10:!0,className:"language-sql",metastring:'{1} title="Returns 10 rows"',"{1}":!0,title:'"Returns','rows"':!0},"SELECT TOP 10\n      SubscriberKey\n    , PreferredChannel\n    , IIF(PreferredChannel = 'Email', EmailAddress, MobileNumber) AS PointOfContact\n")),(0,r.kt)("h3",{id:"top-percent"},"TOP PERCENT"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"TOP")," clause is not limited to an integer; you can also ask for a specific per cent of rows with ",(0,r.kt)("inlineCode",{parentName:"p"},"PERCENT")," modifier:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:"{1}","{1}":!0},"SELECT TOP 10 PERCENT\n      SubscriberKey\n    , PreferredChannel\n    , IIF(PreferredChannel = 'Email', EmailAddress, MobileNumber) AS PointOfContact\n")),(0,r.kt)("p",null,"The number of rows will be rounded up to the nearest integer (so ",(0,r.kt)("inlineCode",{parentName:"p"},"TOP 50 PERCENT")," from Data Extension with 101 rows will return 51 rows)."),(0,r.kt)("admonition",{title:"You Should Know",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"PERCENT")," modifier doesn't work in Query Studio and will produce an error there. However, it works perfectly in Automation Studio Query Activity.")),(0,r.kt)("h3",{id:"top-with-order-by"},"TOP with ORDER BY"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"TOP")," clause best practice is to always use it with ",(0,r.kt)("inlineCode",{parentName:"p"},"ORDER BY"),". Only with sorted data, you will understand rows selection logic."),(0,r.kt)("p",null,"To sort outcomes of your query, add ",(0,r.kt)("inlineCode",{parentName:"p"},"ORDER BY")," at the end - along with column(s) that used for sorting."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{4} title="Top 10% with the lowest Quiz Score"',"{4}":!0,title:'"Top',"10%":!0,with:!0,the:!0,lowest:!0,Quiz:!0,'Score"':!0},"SELECT TOP 10 PERCENT\n      SubscriberKey\n    , QuizScore\nORDER BY QuizScore\n")),(0,r.kt)("p",null,"You can control the sort order by applying ",(0,r.kt)("inlineCode",{parentName:"p"},"ASC")," (default) and ",(0,r.kt)("inlineCode",{parentName:"p"},"DESC")," after the column."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{4} title="Top 10% with highest Quiz Score"',"{4}":!0,title:'"Top',"10%":!0,with:!0,highest:!0,Quiz:!0,'Score"':!0},"SELECT TOP 10 PERCENT\n      SubscriberKey\n    , QuizScore\nORDER BY QuizScore DESC\n")),(0,r.kt)("admonition",{title:"You Should Know",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"ORDER BY")," sorts Text fields alphabetically. It might surprise you if you store numbers in such field type, as it will order ",(0,r.kt)("inlineCode",{parentName:"p"},"10")," before ",(0,r.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,r.kt)("p",{parentName:"admonition"},"The best solution is to use the appropriate field type for numbers. However, if for whatever reason you cannot do it, leverage ",(0,r.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-conversion-functions#convert"},(0,r.kt)("inlineCode",{parentName:"a"},"CONVERT")),":"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{4} title="Top 10% with highest Quiz Score if QuizScore is a Text field"',"{4}":!0,title:'"Top',"10%":!0,with:!0,highest:!0,Quiz:!0,Score:!0,if:!0,QuizScore:!0,is:!0,a:!0,Text:!0,'field"':!0},"SELECT TOP 10 PERCENT\n      SubscriberKey\n    , QuizScore\nORDER BY CONVERT(INT, QuizScore) DESC\n")),(0,r.kt)("p",{parentName:"admonition"},"For example, it will be needed when you ",(0,r.kt)("inlineCode",{parentName:"p"},"ORDER BY")," ",(0,r.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-aggregate-functions#count"},(0,r.kt)("inlineCode",{parentName:"a"},"COUNT"))," within ",(0,r.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-aggregate-functions#group-by"},(0,r.kt)("inlineCode",{parentName:"a"},"GROUP BY")),"."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"ORDER BY")," will also sort dates in Marketing Cloud alphabetically using month(start with ",(0,r.kt)("inlineCode",{parentName:"p"},"Apr"),", follow up with ",(0,r.kt)("inlineCode",{parentName:"p"},"Aug")," and so on). You can fix it by using ",(0,r.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-conversion-functions#convert"},(0,r.kt)("inlineCode",{parentName:"a"},"CONVERT"))," to ",(0,r.kt)("inlineCode",{parentName:"p"},"DATE")," (if you to order only by date) or ",(0,r.kt)("inlineCode",{parentName:"p"},"DATETIME2")," (if time is important for ordering as well), just as in previous example.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ORDER BY")," can operate not only on the selected column. You already saw above that you can use expression (even ",(0,r.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-case#conditional-values-with-case"},(0,r.kt)("inlineCode",{parentName:"a"},"CASE")),"!) to calculate the sorting value, but it's much more flexible."),(0,r.kt)("p",null,"You can sort using a column not picked in ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{3} title="Top 10% with highest Quiz Score, without returning the score"',"{3}":!0,title:'"Top',"10%":!0,with:!0,highest:!0,Quiz:!0,"Score,":!0,without:!0,returning:!0,the:!0,'score"':!0},"SELECT TOP 10 PERCENT\n      SubscriberKey\nORDER BY QuizScore DESC\n")),(0,r.kt)("p",null,"You can sort using an ",(0,r.kt)("a",{parentName:"p",href:"#aliasing-with-as"},"alias")," defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," statement:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{3-4} title="Top 10% with highest Quiz Score, using an alias"',"{3-4}":!0,title:'"Top',"10%":!0,with:!0,highest:!0,Quiz:!0,"Score,":!0,using:!0,an:!0,'alias"':!0},"SELECT TOP 10 PERCENT\n      SubscriberKey\n    , QuizScore AS Points\nORDER BY Points DESC\n")),(0,r.kt)("p",null,"And you can even sort using multiple values - each can have different sorting order."),(0,r.kt)("p",null,"SQL will sort using the first provided column and then, while maintaining the order of the previous column, will sort again using the next value. Let's jump to an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{4} title="Top 10% with highest Quiz Score, first to solve"',"{4}":!0,title:'"Top',"10%":!0,with:!0,highest:!0,Quiz:!0,"Score,":!0,first:!0,to:!0,'solve"':!0},"SELECT TOP 10 PERCENT\n      SubscriberKey\n    , QuizScore\nORDER BY QuizScore DESC, QuizFilledDate ASC\n")),(0,r.kt)("p",null,"The query will first sort using QuizScore to find people with the most points. Next, it will apply the second sort on the date of quiz completion. As an outcome, we will have the highest scorers sorted from first to last within each high score."),(0,r.kt)("h3",{id:"top-with-ties"},"TOP WITH TIES"),(0,r.kt)("p",null,"Sometimes even such complex sorting might not be enough."),(0,r.kt)("p",null,"For example, let's capture three top scorers of our quiz:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Three top scorers"',title:'"Three',top:!0,'scorers"':!0},"SELECT TOP 3\n    SubscriberKey\n    , QuizScore\nORDER BY QuizScore DESC\n")),(0,r.kt)("p",null,"As an outcome, we got:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"SubscriberKey"),(0,r.kt)("th",{parentName:"tr",align:null},"QuizScore"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"XYZ"),(0,r.kt)("td",{parentName:"tr",align:null},"97")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ACE"),(0,r.kt)("td",{parentName:"tr",align:null},"97")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PIL"),(0,r.kt)("td",{parentName:"tr",align:null},"96")))),(0,r.kt)("p",null,"However, if we check our Data Extension, we could see more people with the same score:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"SubscriberKey"),(0,r.kt)("th",{parentName:"tr",align:null},"QuizScore"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"XYZ"),(0,r.kt)("td",{parentName:"tr",align:null},"97")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ACE"),(0,r.kt)("td",{parentName:"tr",align:null},"97")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PIL"),(0,r.kt)("td",{parentName:"tr",align:null},"96")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UDO"),(0,r.kt)("td",{parentName:"tr",align:null},"96")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SDJ"),(0,r.kt)("td",{parentName:"tr",align:null},"96")))),(0,r.kt)("p",null,"What can we do to capture everyone with a score good enough for the Top 3 status? ",(0,r.kt)("inlineCode",{parentName:"p"},"WITH TIES")," will help:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",5:!0,className:"language-sql",metastring:'title="Despite asking for TOP 3, it will return 5 rows due to ties"',title:'"Despite',asking:!0,for:!0,TOP:!0,"3,":!0,it:!0,will:!0,return:!0,rows:!0,due:!0,to:!0,'ties"':!0},"SELECT TOP 3 WITH TIES\n    SubscriberKey\n    , QuizScore\nORDER BY QuizScore DESC\n")),(0,r.kt)("p",null,"With those two words added after the ",(0,r.kt)("inlineCode",{parentName:"p"},"TOP")," clause, our query will return all rows that match the sorted value in the last row. It, however, means that the number of outcomes is not set in stone, so be sure to prepare your next steps for that uncertainty."),(0,r.kt)("admonition",{title:"You Should Know",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"WITH TIES")," modifier doesn't work in Query Studio and will produce an error there. However, it works perfectly in Automation Studio Query Activity.")),(0,r.kt)("h2",{id:"distinct"},"DISTINCT"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"DISTINCT")," clause is the most straightforward deduplication tool."),(0,r.kt)("p",null,"When added to the ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," statement, it will check all available values and leave unique ones."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{1} title="Unique domains in your database sorted alphabetically"',"{1}":!0,title:'"Unique',domains:!0,in:!0,your:!0,database:!0,sorted:!0,'alphabetically"':!0},"SELECT DISTINCT\n      Domain\nORDER BY Domain\n")),(0,r.kt)("p",null,"It's perfect for single-column deduplication. However, when you apply it to a select with multiple columns, it will leverage all of them for deduplication."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{1} title="One row for each SubscriberKey - Domain pair, sorted alphabetically by domain"',"{1}":!0,title:'"One',row:!0,for:!0,each:!0,SubscriberKey:!0,"-":!0,Domain:!0,"pair,":!0,sorted:!0,alphabetically:!0,by:!0,'domain"':!0},"SELECT DISTINCT\n      SubscriberKey\n    , Domain\nORDER BY Domain\n")),(0,r.kt)("p",null,"In the above case, you will get a separate row for each Subscriber Key - Domain pair. It means that you might receive multiple rows with the same Subscriber Key (but each with a different Domain). And you will undoubtedly see numerous rows with the same domain (but each with a different Subscriber key)."),(0,r.kt)("h3",{id:"distinct-with-top"},"DISTINCT with TOP"),(0,r.kt)("p",null,"You can use both ",(0,r.kt)("inlineCode",{parentName:"p"},"DISTINCT")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"TOP")," in the same query."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:"{1}","{1}":!0},"SELECT DISTINCT TOP 10 PERCENT\n      Domain\nORDER BY Domain\n")),(0,r.kt)("p",null,"SQL will first deduplicate the results using ",(0,r.kt)("inlineCode",{parentName:"p"},"DISTINCT")," and then limit output with ",(0,r.kt)("inlineCode",{parentName:"p"},"TOP"),"."),(0,r.kt)("admonition",{title:"You Should Know",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"There is an important exception from stadard rules if you are using ",(0,r.kt)("inlineCode",{parentName:"p"},"DISTINCT")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ORDER BY")," in the same query. You have to add all columns used for sorting to the ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT"),", which might have painful impact on your deduplication rules.")),(0,r.kt)("h2",{id:"table-prefixes"},"Table Prefixes"),(0,r.kt)("p",null,"Additional elements that you will be using in many of your queries are table prefixes for selecting columns from multiple joined Data Extensions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n      _Subscriber.SubscriberKey\n    , _EnterpriseAttribute.LastName\n")),(0,r.kt)("p",null,"I'm covering this topic in-depth in ",(0,r.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-join#table-name-prefix"},(0,r.kt)("inlineCode",{parentName:"a"},"JOIN")," statement documentation"),"."),(0,r.kt)("h2",{id:"flow-control"},"Flow control"),(0,r.kt)("p",null,"Despite official ",(0,r.kt)("a",{parentName:"p",href:"https://help.salesforce.com/articleView?id=mc_as_sql_reference.htm&type=5"},"SFMC SQL documentation")," stating that it supports the ",(0,r.kt)("inlineCode",{parentName:"p"},"IF")," constructs, I could not make it work."),(0,r.kt)("h2",{id:"variables--functions"},"Variables & Functions"),(0,r.kt)("p",null,"Unfortunately, SFMC SQL does not support variables."),(0,r.kt)("p",null,"Fortunately, it does support (selected) functions. Learn more about them in SFMC SQL Functions documentation pages related to ",(0,r.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-string-functions"},"Strings"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-date-functions"},"Dates"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-numeric-functions"},"Numbers"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-conversion-functions"},"Conversion"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-aggregate-functions"},"Aggregation"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-case"},(0,r.kt)("inlineCode",{parentName:"a"},"CASE"))," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-like"},(0,r.kt)("inlineCode",{parentName:"a"},"LIKE")),"."))}m.isMDXComponent=!0}}]);