(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return b}));var a=n(3),i=n(8),o=(n(0),n(122)),r=n(124),s=n(123),l={id:"sfmc-sql-select",title:"SFMC SQL Select",sidebar_label:"Select",description:"Selected information on the SELECT statement in SFMC SQL"},c={unversionedId:"sql/sfmc-sql-select",id:"sql/sfmc-sql-select",isDocsHomePage:!1,title:"SFMC SQL Select",description:"Selected information on the SELECT statement in SFMC SQL",source:"@site/docs/sql/sfmc-sql-select.mdx",slug:"/sql/sfmc-sql-select",permalink:"/docs/sql/sfmc-sql-select",editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/docs/sql/sfmc-sql-select.mdx",version:"current",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1616624113,formattedLastUpdatedAt:"3/24/2021",sidebar_label:"Select",sidebar:"snippets",previous:{title:"SFMC SQL Basics",permalink:"/docs/sql/sfmc-sql-basics"},next:{title:"SFMC SQL From",permalink:"/docs/sql/sfmc-sql-from"}},d=[{value:"Aliasing with AS",id:"aliasing-with-as",children:[{value:"Custom values",id:"custom-values",children:[]}]},{value:"Conditional values with CASE",id:"conditional-values-with-case",children:[{value:"Search version of CASE",id:"search-version-of-case",children:[]},{value:"LIKE in CASE",id:"like-in-case",children:[]}]},{value:"Table Prefixes",id:"table-prefixes",children:[]},{value:"Flow control",id:"flow-control",children:[]},{value:"Variables &amp; Functions",id:"variables--functions",children:[]}],m={toc:d};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(s.a,{content:"Selected information on the SELECT statement in SFMC SQL",mdxType:"LeadText"}),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Table of Contents")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)(r.a,{toc:d,mdxType:"TOCInline"}))),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"SELECT")," statement opens each query. It both defines the columns of data extensions and system data views that will be needed, as well as allows you to create entirely new data points."),Object(o.b)("p",null,"The simplest version of this statement is ",Object(o.b)("inlineCode",{parentName:"p"},"SELECT *"),", which targets all available columns from the source. I do not recommend this approach, as it is terrible for both readability and performance of your query. As Salesforce Marketing Cloud caches the source Data Extension column names when you save SQL Query Activity, you won't have added value of flexible selection. You will still have to edit and save the activity. Also, ",Object(o.b)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-basics#query-studio"},"Query Studio")," does not support this shortcut. Don't use ",Object(o.b)("inlineCode",{parentName:"p"},"*"),"."),Object(o.b)("p",null,"The prefered method is targeting columns explicitly by their names:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql",metastring:'title="Select ContactKey and EmailAddress columns"',title:'"Select',ContactKey:!0,and:!0,EmailAddress:!0,'columns"':!0},"SELECT\n      ContactKey\n    , EmailAddres\n")),Object(o.b)("p",null,"If a column name contains a space, you need to capture it with squared brackets:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql",metastring:'{4} title="Let\'s add another column with whitespace in its name"',"{4}":!0,title:"\"Let's",add:!0,another:!0,column:!0,with:!0,whitespace:!0,in:!0,its:!0,'name"':!0},"SELECT\n      ContactKey\n    , EmailAddres\n    , [External Contact Id]\n")),Object(o.b)("p",null,"There are also some exceptional cases related to selected ",Object(o.b)("a",{parentName:"p",href:"/docs/config/sfmc-config-system-data-views"},"System Data Views")," in Salesforce Marketing Cloud, where you need to use an underscore prefix before a name (for example when taking Subscriber ID from Enterprise Attributes):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql",metastring:'title="There are some special column names with an underscore prefix"',title:'"There',are:!0,some:!0,special:!0,column:!0,names:!0,with:!0,an:!0,underscore:!0,'prefix"':!0},"SELECT _SubscriberId\n")),Object(o.b)("h2",{id:"aliasing-with-as"},"Aliasing with AS"),Object(o.b)("p",null,"You can also utilize ",Object(o.b)("inlineCode",{parentName:"p"},"SELECT")," as a tool to rename the source columns to match your needs in an outcome data extension. It is especially useful when you are pulling the data from Synchronized Data Extension with names coming from Salesforce custom fields."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql",metastring:'{4-5} title="Improve readability and consistency with aliasing"',"{4-5}":!0,title:'"Improve',readability:!0,and:!0,consistency:!0,with:!0,'aliasing"':!0},"SELECT\n      ContactKey\n    , EmailAddress\n    , [External Contact Id] AS ExternalContactId\n    , Gender__c             AS Gender\n")),Object(o.b)("h3",{id:"custom-values"},"Custom values"),Object(o.b)("p",null,"Use aliases also for passing new values directly from your query. Need to add a custom string to outcome data extension? Or maybe synchronization timestamp for debugging purposes? You can leverage SQL for it."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql",metastring:"{6-7} title=\"Add custom column aliased 'ImportDate' with a value equal to the UTC of the script execution for each record\"","{6-7}":!0,title:'"Add',custom:!0,column:!0,aliased:!0,"'ImportDate'":!0,with:!0,a:!0,value:!0,equal:!0,to:!0,the:!0,UTC:!0,of:!0,script:!0,execution:!0,for:!0,each:!0,'record"':!0},"SELECT\n      ContactKey\n    , EmailAddress\n    , [External Contact Id] AS ExternalContactId\n    , Gender__c             AS Gender\n    , 'Lead'                AS RecordType\n    , GETUTCDATE()          AS ImportDate\n")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"You Should Know")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"You can even go further by creating new values by leveraging existing data! For example, if you have a first name and last name, you can use SQL to create a FullName column from scratch:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",{parentName:"pre",className:"language-sql",metastring:'{4} title="Let\'s create a concatenated column for easier personalization"',"{4}":!0,title:"\"Let's",create:!0,a:!0,concatenated:!0,column:!0,for:!0,easier:!0,'personalization"':!0},"SELECT\n      SubscriberKey\n    , EmailAddress\n    , FirstName + ' ' + LastName AS FullName\n")),Object(o.b)("p",{parentName:"div"},"It becomes mighty with the ",Object(o.b)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-string-functions"},"SQL String functions"),"."))),Object(o.b)("h2",{id:"conditional-values-with-case"},"Conditional values with CASE"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"CASE")," statement evaluates a list of conditions and returns one of the multiple possible result expressions. For Marketing Cloud purposes, it is especially useful when you not only want to select a column but also modify the values within it. Perfect for translating numeric codes to descriptive ones for personalization purposes. Excellent for standardizing data (change those ",Object(o.b)("inlineCode",{parentName:"p"},"1"),", ",Object(o.b)("inlineCode",{parentName:"p"},"true")," and ",Object(o.b)("inlineCode",{parentName:"p"},"on")," values of opt-in to a single format)."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql",metastring:"{8-14}","{8-14}":!0},"SELECT\n      ContactKey\n    , EmailAddress\n    , [External Contact Id] AS ExternalContactId\n    , Gender__c             AS Gender\n    , 'Lead'                AS RecordType\n    , GETUTCDATE()          AS ImportDate\n    , CASE MemberType__c\n        WHEN 1 THEN 'Bronze'\n        WHEN 2 THEN 'Silver'\n        WHEN 3 THEN 'Gold'\n        WHEN 4 THEN 'Platinum'\n        ELSE 'Unregistered'\n      END\n")),Object(o.b)("p",null,"You can have as many ",Object(o.b)("inlineCode",{parentName:"p"},"WHEN"),"/",Object(o.b)("inlineCode",{parentName:"p"},"THEN")," conditions as you want. Also, the ",Object(o.b)("inlineCode",{parentName:"p"},"ELSE")," statement is optional, but a good idea to catch unexpected values."),Object(o.b)("p",null,"Feel free also to leverage ",Object(o.b)("a",{parentName:"p",href:"#aliasing-with-as"},"aliases")," to manipulate the column name at the same time:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql",metastring:"{14}","{14}":!0},"SELECT\n      ContactKey\n    , EmailAddress\n    , [External Contact Id] AS ExternalContactId\n    , Gender__c             AS Gender\n    , 'Lead'                AS RecordType\n    , GETUTCDATE()          AS ImportDate\n    , CASE MemberType__c\n        WHEN 1 THEN 'Bronze'\n        WHEN 2 THEN 'Silver'\n        WHEN 3 THEN 'Gold'\n        WHEN 4 THEN 'Platinum'\n        ELSE 'Unregistered'\n      END                   AS MemberType\n")),Object(o.b)("h3",{id:"search-version-of-case"},"Search version of CASE"),Object(o.b)("p",null,"Above examples are already useful in segmentation, but there is also one more way to write and use ",Object(o.b)("inlineCode",{parentName:"p"},"CASE")," statement that gives even more power. The search ",Object(o.b)("inlineCode",{parentName:"p"},"CASE"),"."),Object(o.b)("p",null,"The difference is that you are not passing the column name on which you will be building conditions. Instead, you create a boolean expression from scratch for each scenario."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql",metastring:'{8-14} title="The same query as the previous one, but written with Search Case"',"{8-14}":!0,title:'"The',same:!0,query:!0,as:!0,the:!0,previous:!0,"one,":!0,but:!0,written:!0,with:!0,Search:!0,'Case"':!0},"SELECT\n      ContactKey\n    , EmailAddress\n    , [External Contact Id] AS ExternalContactId\n    , Gender__c             AS Gender\n    , 'Lead'                AS RecordType\n    , GETUTCDATE()          AS ImportDate\n    , CASE\n        WHEN MemberType__c = 1 THEN 'Bronze'\n        WHEN MemberType__c = 2 THEN 'Silver'\n        WHEN MemberType__c = 3 THEN 'Gold'\n        WHEN MemberType__c = 4 THEN 'Platinum'\n        ELSE 'Unregistered'\n      END                   AS MemberType\n")),Object(o.b)("p",null,"The example above doesn't show why it is worth to use the search ",Object(o.b)("inlineCode",{parentName:"p"},"CASE"),". It is a bit longer than the standard approach! But there is a reason to use this form of ",Object(o.b)("inlineCode",{parentName:"p"},"CASE")," statement that is visible once you want to create more elaborate conditions that are possible only with this version:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql",metastring:'{3-7} title="Let\'s calculate what channel we should use in our campaign for a given user"',"{3-7}":!0,title:"\"Let's",calculate:!0,what:!0,channel:!0,we:!0,should:!0,use:!0,in:!0,our:!0,campaign:!0,for:!0,a:!0,given:!0,'user"':!0},"SELECT\n      ContactKey\n    , CASE\n        WHEN IsAppInstalled = 1 THEN 'Push'\n        WHEN EmailOptIn = 1 AND EmailAddress IS NOT NULL THEN 'Email'\n        WHEN PhoneOptIn = 1 AND Mobile IS NOT NULL THEN 'Phone'\n      END AS PreferredChannel\n")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"You Should Know")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},Object(o.b)("inlineCode",{parentName:"p"},"CASE")," statement returns ",Object(o.b)("inlineCode",{parentName:"p"},"THEN")," value of the first condition that evaluated to ",Object(o.b)("inlineCode",{parentName:"p"},"TRUE"),". It means that in the above example if the ",Object(o.b)("inlineCode",{parentName:"p"},"IsAppInstalled = 1")," is true, other conditions are not considered. Even if for selected contact all of them will be true, it will still have the value ",Object(o.b)("inlineCode",{parentName:"p"},"Push")," in PreferredChannel. It is perfect, as it allows us to prioritize cheaper channels."),Object(o.b)("p",{parentName:"div"},"Always consider the order of the conditions in your ",Object(o.b)("inlineCode",{parentName:"p"},"CASE")," statement. It both might lead to errors if you don't expect behaviour mentioned above, as well as make your life much easier if you know it works that way."))),Object(o.b)("p",null,"As you can see, thanks to search ",Object(o.b)("inlineCode",{parentName:"p"},"CASE")," statement we were able to check conditions on multiple different columns and connect them with ",Object(o.b)("inlineCode",{parentName:"p"},"AND"),"/",Object(o.b)("inlineCode",{parentName:"p"},"OR")," statements for better control. You can use this version of the ",Object(o.b)("inlineCode",{parentName:"p"},"CASE")," statement for all your needs (even those covered by the basic one) to worry not about two ways of formatting."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"You Should Know")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"You can use ",Object(o.b)("inlineCode",{parentName:"p"},"CASE")," statements inside a ",Object(o.b)("inlineCode",{parentName:"p"},"CASE")," statement to have an even more dynamic query."),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",{parentName:"pre",className:"language-sql",metastring:'{3-16} title="Let\'s add another dimension of membership level to differentiate available channels"',"{3-16}":!0,title:"\"Let's",add:!0,another:!0,dimension:!0,of:!0,membership:!0,level:!0,to:!0,differentiate:!0,available:!0,'channels"':!0},"SELECT\n      ContactKey\n    , CASE\n        WHEN MemberType = 'Platinum' THEN 'Key Account Manager'\n        WHEN MemberType = 'Gold' OR MemberType = 'Silver' THEN\n            CASE\n                WHEN IsAppInstalled = 1 THEN 'Push'\n                WHEN EmailOptIn = 1 AND EmailAddress IS NOT NULL THEN 'Email'\n                WHEN PhoneOptIn = 1 AND Mobile IS NOT NULL THEN 'Phone'\n            END\n        WHEN MemberType = 'Bronze' THEN\n            CASE\n                WHEN IsAppInstalled = 1 THEN 'Push'\n                WHEN EmailOptIn = 1 AND EmailAddress IS NOT NULL THEN 'Email'\n            END\n      END AS PreferredChannel\n")))),Object(o.b)("h3",{id:"like-in-case"},"LIKE in CASE"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"LIKE")," is not only useful in the ",Object(o.b)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-where#like-operator"},Object(o.b)("inlineCode",{parentName:"a"},"WHERE")," Statement"),". It is also an awesome tool empowering ",Object(o.b)("inlineCode",{parentName:"p"},"CASE")," statement. It allows you to build flexible conditions on free text values:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql",metastring:'{4} title="Great way to split your database between Internal and External users for different communication"',"{4}":!0,title:'"Great',way:!0,to:!0,split:!0,your:!0,database:!0,between:!0,Internal:!0,and:!0,External:!0,users:!0,for:!0,different:!0,'communication"':!0},"SELECT\n      ContactKey\n    , CASE\n        WHEN EmailAddress LIKE '%@mateuszdabrowski.%' THEN 'Internal'\n        ELSE 'External'\n      END AS ContactType\n")),Object(o.b)("p",null,"In the ",Object(o.b)("inlineCode",{parentName:"p"},"SELECT")," statement, the ",Object(o.b)("inlineCode",{parentName:"p"},"LIKE")," operator is especially useful for fixing data coming from the free text fields. To learn more about the possibilities, check out the ",Object(o.b)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-like"},Object(o.b)("inlineCode",{parentName:"a"},"LIKE")," guide"),"."),Object(o.b)("h2",{id:"table-prefixes"},"Table Prefixes"),Object(o.b)("p",null,"Additional elements that you will be using in many of your queries are table prefixes for selecting columns from multiple joined Data Extensions."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql"},"SELECT\n      _Subscriber.SubscriberKey\n    , _EnterpriseAttribute.LastName\n")),Object(o.b)("p",null,"I'm covering this topic in-depth in ",Object(o.b)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-join#table-name-prefix"},Object(o.b)("inlineCode",{parentName:"a"},"JOIN")," statement documentation"),"."),Object(o.b)("h2",{id:"flow-control"},"Flow control"),Object(o.b)("p",null,"Despite official ",Object(o.b)("a",{parentName:"p",href:"https://help.salesforce.com/articleView?id=mc_as_sql_reference.htm&type=5"},"SFMC SQL documentation")," states that it supports the ",Object(o.b)("inlineCode",{parentName:"p"},"IF")," constructs, I was not able to make it work."),Object(o.b)("h2",{id:"variables--functions"},"Variables & Functions"),Object(o.b)("p",null,"Unfortunately, SFMC SQL does not support variables."),Object(o.b)("p",null,"Fortunately, it does support (selected) functions. Learn more about them in SFMC SQL Functions documentation pages related to ",Object(o.b)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-string-functions"},"Strings"),", ",Object(o.b)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-date-functions"},"Dates"),", ",Object(o.b)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-numeric-functions"},"Numbers"),"."))}b.isMDXComponent=!0},121:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},122:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),d=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=d(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(n),p=a,u=m["".concat(r,".").concat(p)]||m[p]||b[p]||o;return n?i.a.createElement(u,s(s({ref:t},c),{},{components:n})):i.a.createElement(u,s({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},123:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),i=n(57),o=n.n(i);const r=({content:e})=>a.createElement(a.Fragment,null,a.createElement("p",{id:o.a.leadText},e))},124:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(121),r=n(58),s=n.n(r);function l({toc:e,isChild:t}){return e.length?i.a.createElement("ul",{className:t?"":"table-of-contents"},e.map((e=>i.a.createElement("li",{key:e.id},i.a.createElement("a",{href:`#${e.id}`,dangerouslySetInnerHTML:{__html:e.value}}),i.a.createElement(l,{isChild:!0,toc:e.children}))))):null}t.a=function({toc:e}){return i.a.createElement("div",{className:Object(o.a)(s.a.tableOfContentsInline)},i.a.createElement(l,{toc:e}))}}}]);