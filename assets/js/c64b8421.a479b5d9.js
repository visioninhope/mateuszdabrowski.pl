"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[7921],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>E});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,E=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(E,i(i({ref:t},p),{},{components:n})):a.createElement(E,i({ref:t},p))}));function E(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1872:(e,t,n)=>{n.d(t,{m:()=>o});var a=n(7294);const r="leadText_qzwo",o=e=>{let{content:t}=e;return a.createElement(a.Fragment,null,a.createElement("p",{id:r},t))}},4079:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(4137)),o=n(1872);const i={id:"sfmc-sql-case",title:"SFMC SQL Case",sidebar_label:"Case",description:"Empower your Marketing Cloud queries with conditional SQL CASE logic.",image:"img/og/og-image-sql-case.png",tags:["Marketing Cloud","SQL"]},l=void 0,s={unversionedId:"sql/sfmc-sql-case",id:"sql/sfmc-sql-case",title:"SFMC SQL Case",description:"Empower your Marketing Cloud queries with conditional SQL CASE logic.",source:"@site/docs/sql/sfmc-sql-case.mdx",sourceDirName:"sql",slug:"/sql/sfmc-sql-case",permalink:"/docs/sql/sfmc-sql-case",draft:!1,editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/docs/sql/sfmc-sql-case.mdx",tags:[{label:"Marketing Cloud",permalink:"/docs/tags/marketing-cloud"},{label:"SQL",permalink:"/docs/tags/sql"}],version:"current",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1672581436,formattedLastUpdatedAt:"Jan 1, 2023",frontMatter:{id:"sfmc-sql-case",title:"SFMC SQL Case",sidebar_label:"Case",description:"Empower your Marketing Cloud queries with conditional SQL CASE logic.",image:"img/og/og-image-sql-case.png",tags:["Marketing Cloud","SQL"]},sidebar:"docs",previous:{title:"Where",permalink:"/docs/sql/sfmc-sql-where"},next:{title:"Like",permalink:"/docs/sql/sfmc-sql-like"}},c={},p=[{value:"Conditional values with CASE",id:"conditional-values-with-case",level:2},{value:"Search version of CASE",id:"search-version-of-case",level:3},{value:"LIKE in CASE",id:"like-in-case",level:3},{value:"IIF Shorthand",id:"iif-shorthand",level:3},{value:"CASE in WHERE",id:"case-in-where",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.m,{content:"Empower your Marketing Cloud queries with conditional SQL CASE logic.",mdxType:"LeadText"}),(0,r.kt)("h2",{id:"conditional-values-with-case"},"Conditional values with CASE"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CASE")," statement evaluates a list of conditions and returns one of the multiple possible result expressions. For Marketing Cloud purposes, it is especially useful when you want to select a column and modify the values within it. Perfect for translating numeric codes to descriptive ones for personalisation purposes. Excellent for standardising data (change those ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"on")," values of opt-in to a single format)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:"{8-14}","{8-14}":!0},"SELECT\n      ContactKey\n    , EmailAddress\n    , [External Contact Id] AS ExternalContactId\n    , Gender__c             AS Gender\n    , 'Lead'                AS RecordType\n    , GETUTCDATE()          AS ImportDate\n    , CASE MemberType__c\n        WHEN 1 THEN 'Bronze'\n        WHEN 2 THEN 'Silver'\n        WHEN 3 THEN 'Gold'\n        WHEN 4 THEN 'Platinum'\n        ELSE 'Unregistered'\n      END                   AS MemberType\n")),(0,r.kt)("p",null,"You can have as many ",(0,r.kt)("inlineCode",{parentName:"p"},"WHEN"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"THEN")," conditions as you want. Also, the ",(0,r.kt)("inlineCode",{parentName:"p"},"ELSE")," statement is optional but a good idea to catch unexpected values."),(0,r.kt)("p",null,"Feel free also to leverage ",(0,r.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-select#aliasing-with-as"},"aliases")," to manipulate the column name at the same time:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:"{14}","{14}":!0},"SELECT\n      ContactKey\n    , EmailAddress\n    , [External Contact Id] AS ExternalContactId\n    , Gender__c             AS Gender\n    , 'Lead'                AS RecordType\n    , GETUTCDATE()          AS ImportDate\n    , CASE MemberType__c\n        WHEN 1 THEN 'Bronze'\n        WHEN 2 THEN 'Silver'\n        WHEN 3 THEN 'Gold'\n        WHEN 4 THEN 'Platinum'\n        ELSE 'Unregistered'\n      END                   AS MemberType\n")),(0,r.kt)("h3",{id:"search-version-of-case"},"Search version of CASE"),(0,r.kt)("p",null,"The above examples are already helpful in segmentation, but there is also one more way to write and use a ",(0,r.kt)("inlineCode",{parentName:"p"},"CASE")," statement that gives even more power. The search ",(0,r.kt)("inlineCode",{parentName:"p"},"CASE"),"."),(0,r.kt)("p",null,"The difference is that you are not passing the column name on which you will be building conditions. Instead, you create a boolean expression from scratch for each scenario."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{8-14} title="The same query as the previous one, but written with Search Case"',"{8-14}":!0,title:'"The',same:!0,query:!0,as:!0,the:!0,previous:!0,"one,":!0,but:!0,written:!0,with:!0,Search:!0,'Case"':!0},"SELECT\n      ContactKey\n    , EmailAddress\n    , [External Contact Id] AS ExternalContactId\n    , Gender__c             AS Gender\n    , 'Lead'                AS RecordType\n    , GETUTCDATE()          AS ImportDate\n    , CASE\n        WHEN MemberType__c = 1 THEN 'Bronze'\n        WHEN MemberType__c = 2 THEN 'Silver'\n        WHEN MemberType__c = 3 THEN 'Gold'\n        WHEN MemberType__c = 4 THEN 'Platinum'\n        ELSE 'Unregistered'\n      END                   AS MemberType\n")),(0,r.kt)("p",null,"The example above doesn't show why it is worth using the search ",(0,r.kt)("inlineCode",{parentName:"p"},"CASE"),". It is a bit longer than the standard approach! But there is a reason to use this form of ",(0,r.kt)("inlineCode",{parentName:"p"},"CASE")," statement that is visible once you want to create more elaborate conditions that are possible only with this version:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{3-7} title="Let\'s calculate what channel we should use in our campaign for a given user"',"{3-7}":!0,title:"\"Let's",calculate:!0,what:!0,channel:!0,we:!0,should:!0,use:!0,in:!0,our:!0,campaign:!0,for:!0,a:!0,given:!0,'user"':!0},"SELECT\n      ContactKey\n    , CASE\n        WHEN IsAppInstalled = 1                             THEN 'Push'\n        WHEN EmailOptIn = 1 AND EmailAddress IS NOT NULL    THEN 'Email'\n        WHEN PhoneOptIn = 1 AND Mobile IS NOT NULL          THEN 'Phone'\n      END AS PreferredChannel\n")),(0,r.kt)("admonition",{title:"You Should Know",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"CASE")," statement returns ",(0,r.kt)("inlineCode",{parentName:"p"},"THEN")," value of the first condition that evaluated to ",(0,r.kt)("inlineCode",{parentName:"p"},"TRUE"),". In the above example, if the ",(0,r.kt)("inlineCode",{parentName:"p"},"IsAppInstalled = 1")," is true, other conditions are not considered. Even if for selected contact all of them will be true, it will still have the value ",(0,r.kt)("inlineCode",{parentName:"p"},"Push")," in PreferredChannel. It is perfect, as it allows us to prioritise cheaper channels."),(0,r.kt)("p",{parentName:"admonition"},"Always consider the order of the conditions in your ",(0,r.kt)("inlineCode",{parentName:"p"},"CASE")," statement. It both might lead to errors if you don't expect the behaviour mentioned above and make your life much easier if you know it works that way.")),(0,r.kt)("p",null,"As you can see, thanks to search ",(0,r.kt)("inlineCode",{parentName:"p"},"CASE")," statements, we can check conditions on multiple different columns and connect them with ",(0,r.kt)("inlineCode",{parentName:"p"},"AND"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"OR")," statements for better control. You can use this version of the ",(0,r.kt)("inlineCode",{parentName:"p"},"CASE")," statement for all your needs (even those covered by the basic one) to not worry about two ways of formatting."),(0,r.kt)("admonition",{title:"You Should Know",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"CASE")," statements inside a ",(0,r.kt)("inlineCode",{parentName:"p"},"CASE")," statement to have an even more dynamic query."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{3-16} title="Let\'s add another dimension of membership level to differentiate available channels"',"{3-16}":!0,title:"\"Let's",add:!0,another:!0,dimension:!0,of:!0,membership:!0,level:!0,to:!0,differentiate:!0,available:!0,'channels"':!0},"SELECT\n      ContactKey\n    , CASE\n        WHEN MemberType = 'Platinum'                        THEN 'Key Account Manager'\n        WHEN MemberType = 'Gold' OR MemberType = 'Silver'   THEN\n            CASE\n                WHEN IsAppInstalled = 1                             THEN 'Push'\n                WHEN EmailOptIn = 1 AND EmailAddress IS NOT NULL    THEN 'Email'\n                WHEN PhoneOptIn = 1 AND Mobile IS NOT NULL          THEN 'Phone'\n            END\n        WHEN MemberType = 'Bronze'                          THEN\n            CASE\n                WHEN IsAppInstalled = 1                             THEN 'Push'\n                WHEN EmailOptIn = 1 AND EmailAddress IS NOT NULL    THEN 'Email'\n            END\n      END AS PreferredChannel\n"))),(0,r.kt)("h3",{id:"like-in-case"},"LIKE in CASE"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-like"},(0,r.kt)("inlineCode",{parentName:"a"},"LIKE"))," is not only valuable for the ",(0,r.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-where#like-operator"},(0,r.kt)("inlineCode",{parentName:"a"},"WHERE")," Statement"),". It is also an incredible tool empowering the ",(0,r.kt)("inlineCode",{parentName:"p"},"CASE")," statement. It allows you to build flexible conditions on free text values:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{4} title="Great way to split your database between Internal and External users for different communication"',"{4}":!0,title:'"Great',way:!0,to:!0,split:!0,your:!0,database:!0,between:!0,Internal:!0,and:!0,External:!0,users:!0,for:!0,different:!0,'communication"':!0},"SELECT\n      ContactKey\n    , CASE\n        WHEN EmailAddress LIKE '%@mateuszdabrowski.%' THEN 'Internal'\n        ELSE 'External'\n      END AS ContactType\n")),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," statement, the ",(0,r.kt)("inlineCode",{parentName:"p"},"LIKE")," operator is handy for fixing data coming from the free text fields. To learn more about the possibilities, check out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-like"},(0,r.kt)("inlineCode",{parentName:"a"},"LIKE")," guide"),"."),(0,r.kt)("h3",{id:"iif-shorthand"},"IIF Shorthand"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"CASE")," statement is a fantastic tool but can be overkill for simple conditions. The ",(0,r.kt)("inlineCode",{parentName:"p"},"IIF")," comes to the rescue."),(0,r.kt)("p",null,"It takes three arguments:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Condition"),(0,r.kt)("li",{parentName:"ol"},"The value returned if the condition evaluates to true"),(0,r.kt)("li",{parentName:"ol"},"The value returned if the condition evaluates to false")),(0,r.kt)("p",null,"With it, instead of multiline ",(0,r.kt)("inlineCode",{parentName:"p"},"CASE"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:"{3-6}","{3-6}":!0},"SELECT\n      _Subscriber.SubscriberKey\n    , CASE\n        WHEN _Subscriber.Status = 'active' THEN 'TRUE'\n        ELSE 'FALSE'\n      END AS Sendable\n")),(0,r.kt)("p",null,"You can have the same outcome in a single, more readable ",(0,r.kt)("inlineCode",{parentName:"p"},"IIF")," line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:"{3}","{3}":!0},"SELECT\n      _Subscriber,SubscriberKey,\n    , IIF(_Subscriber.Status = 'active', 'TRUE', 'FALSE') AS Sendable\n")),(0,r.kt)("p",null,"Whenever you have a single condition - go with ",(0,r.kt)("inlineCode",{parentName:"p"},"IIF"),"."),(0,r.kt)("admonition",{title:"You Should Know",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can take both ",(0,r.kt)("inlineCode",{parentName:"p"},"CASE")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"IIF")," to the next level with dynamic values. Don't limit yourself to a string, integer or boolean - pass a column name."),(0,r.kt)("p",{parentName:"admonition"},"Use case? Think of a Master Data Extension that stores a massive amount of contact information, including preferred channel (Email or Mobile). With dynamic values and ",(0,r.kt)("inlineCode",{parentName:"p"},"IIF")," in just a few lines, we can create an optimised Data Extension with crucial information:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:"{4}","{4}":!0},"SELECT\n      SubscriberKey\n    , PreferredChannel\n    , IIF(PreferredChannel = 'Email', EmailAddress, MobileNumber) AS PointOfContact\n")),(0,r.kt)("p",{parentName:"admonition"},"Now, even with just three columns in your Entry Point, you can create a Journey that adapts the channel to customer preferences.")),(0,r.kt)("h2",{id:"case-in-where"},"CASE in WHERE"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"CASE")," statement is not only useful in a ",(0,r.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-select"},(0,r.kt)("inlineCode",{parentName:"a"},"SELECT"))," part of the query. You can use it also within the ",(0,r.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-where#case-operator"},(0,r.kt)("inlineCode",{parentName:"a"},"WHERE")," to apply conditional filtering"),"."))}m.isMDXComponent=!0}}]);