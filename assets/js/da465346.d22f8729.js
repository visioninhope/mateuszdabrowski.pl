"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[5361],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(n),m=i,p=h["".concat(s,".").concat(m)]||h[m]||d[m]||o;return n?a.createElement(p,r(r({ref:t},u),{},{components:n})):a.createElement(p,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2043:function(e,t,n){n.d(t,{m:function(){return o}});var a=n(7294),i="leadText_16va",o=function(e){var t=e.content;return a.createElement(a.Fragment,null,a.createElement("p",{id:i},t))}},2112:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var a=n(7462),i=n(3366),o=(n(7294),n(4137)),r=n(2043),l=["components"],s={id:"sfmc-sql-snippet-debugging-value-length",title:"SFMC SQL Debugging Value Length",sidebar_label:"Debugging Value Length",description:"Your Automations crash due to longer than expected values coming from the external source? Make your life easier with SQL.",image:"img/og-image-sql.png"},c=void 0,u={unversionedId:"sql/sfmc-sql-snippet-debugging-value-length",id:"sql/sfmc-sql-snippet-debugging-value-length",isDocsHomePage:!1,title:"SFMC SQL Debugging Value Length",description:"Your Automations crash due to longer than expected values coming from the external source? Make your life easier with SQL.",source:"@site/docs/sql/sfmc-sql-snippet-debugging-value-length.mdx",sourceDirName:"sql",slug:"/sql/sfmc-sql-snippet-debugging-value-length",permalink:"/docs/sql/sfmc-sql-snippet-debugging-value-length",editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/docs/sql/sfmc-sql-snippet-debugging-value-length.mdx",tags:[],version:"current",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1629140087,formattedLastUpdatedAt:"8/16/2021",frontMatter:{id:"sfmc-sql-snippet-debugging-value-length",title:"SFMC SQL Debugging Value Length",sidebar_label:"Debugging Value Length",description:"Your Automations crash due to longer than expected values coming from the external source? Make your life easier with SQL.",image:"img/og-image-sql.png"},sidebar:"snippets",previous:{title:"Debugging Email Sends",permalink:"/docs/sql/sfmc-sql-snippet-debugging-email-sends"},next:{title:"Enhanced Send Log",permalink:"/docs/sql/sfmc-sql-snippet-enhanced-send-log"}},d=[{value:"Problem with recommended Data Extension total field length",id:"problem-with-recommended-data-extension-total-field-length",children:[]},{value:"Short Term Solution",id:"short-term-solution",children:[{value:"Discovery with MAX LEN",id:"discovery-with-max-len",children:[]},{value:"Debugging with MAX LEN",id:"debugging-with-max-len",children:[]}]},{value:"Basic Long Term Solution",id:"basic-long-term-solution",children:[]},{value:"Options",id:"options",children:[{value:"Show fields with too long value",id:"show-fields-with-too-long-value",children:[]},{value:"Extended length information",id:"extended-length-information",children:[]}]},{value:"Fully-fledged Long Term Solution",id:"fully-fledged-long-term-solution",children:[]}],h={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.m,{content:"Your Automations crash due to longer than expected values coming from the external source? Make your life easier with SQL.",mdxType:"LeadText"}),(0,o.kt)("h2",{id:"problem-with-recommended-data-extension-total-field-length"},"Problem with recommended Data Extension total field length"),(0,o.kt)("p",null,"Working with Marketing Cloud (or any other Marketing Automation Platform) is always the dance between optimisation and flexibility. It is easily visible when working with SFMC Data Extensions."),(0,o.kt)("p",null,"On the one hand, limiting the maximum field length is a must-have best practice. Salesforce recommends keeping the total sum of all fields length under 4000 characters. For many use cases, a tiny number. But if you want to have lean Data Extensions to query them quickly, it is the way. And in the Marketing Cloud, nearly everything is a query - even if you don't write a line of SQL."),(0,o.kt)("p",null,"On the other hand, it might be tough to limit your Data Extension so much in real-life scenarios. Especially when you are bringing data from other systems. Example? Salesforce CRM integration through Marketing Cloud Connect. The picklist fields from CRM come to Synchronized Data Extensions as 255 character text fields - even if they have only one-digit values associated with it. Select a few such picklists to be available in Marketing Cloud, and you hit the Data Extension character length limit recommended by Salesforce."),(0,o.kt)("p",null,"What to do with that?"),(0,o.kt)("p",null,"Limit the maximum length of those picklists in the Marketing Cloud Data Extension you use for campaigns. You are sure that your Gender field will always have one character value (",(0,o.kt)("inlineCode",{parentName:"p"},"F"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"M"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"O"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"U"),")? Make the maximum length equal to 1. It is an excellent way to trim unneeded length, but sometimes, you might be surprised, especially with less obvious picklists, like a job title. Similar issues might also come from standard text fields."),(0,o.kt)("p",null,"Once you build your standard Data Extension with those optimisations in mind, it is time to pull the data from Synchronized Data Extensions."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"You Should Know")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"I'm mentioning the Marketing Cloud Connect Synchronized Data Extensions, but you can also leverage it for FTP-based data uploads. The solution will require additional intermediate Data Extension with generous field lengths in place of Marketing Cloud Connect Synchronized Data Extension. Rest will be the same."))),(0,o.kt)("p",null,"All good, until one of the values, exceed the maximum length you set for its field. The Automation crashes with a cryptic error that tells you nothing and can push you for a long crusade to find the culprit. What now?"),(0,o.kt)("h2",{id:"short-term-solution"},"Short Term Solution"),(0,o.kt)("p",null,"You can make quick manual check with a simple SQL query. Open your ",(0,o.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-basics#query-studio"},"Query Studio")," and copy-paste the below code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Sample maximum length checking query on Contact object Synchronized Data Extension"',title:'"Sample',maximum:!0,length:!0,checking:!0,query:!0,on:!0,Contact:!0,object:!0,Synchronized:!0,Data:!0,'Extension"':!0},"SELECT\n      MAX(LEN(c.Id))          AS SubscriberKey\n    , MAX(LEN(c.FirstName))   AS FirstName\n    , MAX(LEN(c.LastName))    AS LastName\n    , MAX(LEN(c.Email))       AS EmailAddress\n    , MAX(LEN(c.JobTitle__c)) AS CurrentRole\n    , MAX(LEN(c.Industry__c)) AS Industry\nFROM Contact_Salesforce AS c\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"You Should Know")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you are running those queries from the child Business Unit, add ",(0,o.kt)("inlineCode",{parentName:"p"},"Ent.")," prefix to Synchronized Data Extension names, as those are stored on the parent level."))),(0,o.kt)("p",null,"This query will output one row of data with the current maximum length of the values that you have in your Synchronized Data Extension for the selected fields. It uses ",(0,o.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-numeric-functions#min-and-max"},(0,o.kt)("inlineCode",{parentName:"a"},"MAX"))," function on the ",(0,o.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-string-functions#len"},(0,o.kt)("inlineCode",{parentName:"a"},"LEN"))," outcome to find the single maximum length available across all records. It has two great uses:"),(0,o.kt)("h3",{id:"discovery-with-max-len"},"Discovery with MAX LEN"),(0,o.kt)("p",null,"You can use it even before configuring the Data Extension and Profile Attributes to analyse your real-life data."),(0,o.kt)("p",null,"For example, if out of your whole database, the longest First Name is 33 characters, you will probably be just fine with a maximum length of 40 on this field. If a picklist field returns you 5 with this query - you won't need the default 255 characters."),(0,o.kt)("p",null,"Of course, as mentioned above, the values might get longer in the future. But as Marketing Cloud allows you to change maximum field length up but not down, it might be a good idea to try as low as reasonable and leave space for growth."),(0,o.kt)("h3",{id:"debugging-with-max-len"},"Debugging with MAX LEN"),(0,o.kt)("p",null,"The second use of the above snippet is quick debugging when an error occurs. Execute it in ",(0,o.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-basics#query-studio"},"Query Studio")," and compare against the column lengths you set up in your Data Extension. If you see in Query Studio any value longer than the maximum you set up in Data Extension - you found a culprit."),(0,o.kt)("p",null,"Now you can look in the data source and check whether this longer-than-expected value is correct. If yes, it is time to update your maximum length in the Data Extension and Profile Attribute configuration."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"You Should Know")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In most cases, the field length of 255 should be more than enough. But if you need it, Marketing Cloud allows you to go up to 4000 characters per field."),(0,o.kt)("p",{parentName:"div"},"4000 characters length is an instant way of getting over the recommended limit, but it might be useful for logging Data Extensions that you won't query in the future. For example, if you want to save ",(0,o.kt)("a",{parentName:"p",href:"/docs/config/sfmc-config-system-data-views#_bounce"},(0,o.kt)("inlineCode",{parentName:"a"},"_Bounce")," Data View")," to standard Data Extension, ",(0,o.kt)("inlineCode",{parentName:"p"},"SMTPBounceReason")," might use such a long field."),(0,o.kt)("p",{parentName:"div"},"If you need more, there is a trick reported by ",(0,o.kt)("a",{parentName:"p",href:"https://salesforce.stackexchange.com/questions/154402/data-extension-maximum-characters-of-text-field/154403"},"Markus Slabina"),". Use Email Studio to add a new field and make the length empty. Save. It will create a ",(0,o.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-conversion-functions#data-types"},(0,o.kt)("inlineCode",{parentName:"a"},"nvarchar(max)"))," field that allows absurdly long data to be stored."),(0,o.kt)("p",{parentName:"div"},"Remember that:"),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},"It works only in Email Studio - Contact Builder won't work"),(0,o.kt)("li",{parentName:"ol"},"It is a workaround and might disappear at any moment"),(0,o.kt)("li",{parentName:"ol"},"You shouldn't use it unless there is no other option")))),(0,o.kt)("h2",{id:"basic-long-term-solution"},"Basic Long Term Solution"),(0,o.kt)("p",null,"The snippet above is nice but suitable only for short term manual checks. And you don't want to perform manual checks for the long term. If you wonder whether there is a way to automate it nicely, you are here for a treat."),(0,o.kt)("p",null,"Yes, you can automate such validation by using two additional Activities."),(0,o.kt)("p",null,"Go to the Automation that takes care of moving the data from Synchronized Data Extension do Standard Data Extension and Profile Attributes. Before the Activities that are transfering the data, add a SQL Query Activity. In it, paste the below code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Basic field length checking query"',title:'"Basic',field:!0,length:!0,checking:!0,'query"':!0},"SELECT\n      c.Id               AS ContactID\n    , LEN(c.Id)          AS SubscriberKey\n    , LEN(c.FirstName)   AS FirstName\n    , LEN(c.LastName)    AS LastName\n    , LEN(c.Email)       AS EmailAddress\n    , LEN(c.JobTitle__c) AS JobTitle\n    , LEN(c.Industry__c) AS Industry\nFROM Contact_Salesforce AS c\nWHERE\n    18 - LEN(c.Id) < 0\n    OR 40 - LEN(c.FirstName) < 0\n    OR 80 - LEN(c.LastName) < 0\n    OR 254 - LEN(c.Email) < 0\n    OR 80 - LEN(c.JobTitle__c) < 0\n    OR 40 - LEN(c.Industry__c) < 0\n")),(0,o.kt)("p",null,"Of course, you will want to adapt it to your needs. Change the fields along with their names and lengths. Select the right Synchronized Data Extension. How? Let's dive in what this code does so that you can make it your own."),(0,o.kt)("p",null,"The first field we ",(0,o.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-select"},(0,o.kt)("inlineCode",{parentName:"a"},"SELECT"))," is the Unique Identifier (Contact ID / Subscriber Key or other based on the specific object you are validating). It is useful to quickly know which record(s) should you checked when some values lengths exceed the expectations."),(0,o.kt)("p",null,"After that, you can see the standard ",(0,o.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-from"},(0,o.kt)("inlineCode",{parentName:"a"},"FROM"))," statement. You can, of course, ",(0,o.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-join"},(0,o.kt)("inlineCode",{parentName:"a"},"JOIN"))," additional data sources."),(0,o.kt)("p",null,"Finally, there is a ",(0,o.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-where"},(0,o.kt)("inlineCode",{parentName:"a"},"WHERE"))," statement. In it, we are checking whether at least one field on each record has a value longer than expected. To adapt it - change the number on the left to the length of the field you set up in the target Data Extension / Profile Attribute."),(0,o.kt)("p",null,"This SQL Query Activity should output the rows to a technical Value Length Data Extension with all the same columns as the target Data Extension / Profile Attributes list. However, it can have much shorter max lengths for the columns, as all fields but the Unique Identifier one will output only the field's length (up to 4 digits). Configure the SQL Activity to Overwrite the technical Data Extension and always have the latest state data."),(0,o.kt)("p",null,"Right after this SQL Query Activity add Verification Activity and configure it to check the technical Data Extension mentioned above. If there is any row in it - it should stop the whole Automation and send an alert email to the Marketing Cloud administrator."),(0,o.kt)("p",null,"To sum up, sample Automation could look like this:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"SQL Query Activity with the Debugging Value Length query"),(0,o.kt)("li",{parentName:"ol"},"Verification Activity that checks Value Length Data Extension"),(0,o.kt)("li",{parentName:"ol"},"SQL Query Activity that moves data from Synchronized Data Extension to target Data Extension"),(0,o.kt)("li",{parentName:"ol"},"Export Activity"),(0,o.kt)("li",{parentName:"ol"},"Transfer Activity"),(0,o.kt)("li",{parentName:"ol"},"Import Activity")),(0,o.kt)("p",null,"The last three Activities above are the classic ETL group for updating the All Subscribers and Profile Attributes."),(0,o.kt)("p",null,"Such setup won't silently crash your Automation whenever there is a single value longer than expected. It will stop the Automation before the crash, inform the administrator that there is an issue and provide Unique Identifiers of records leading to that error for an easy check. Neat, right? Well, it can be even better."),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,"The basic version above is already lovely, but we can make a few improvements to make the administrator's life even easier."),(0,o.kt)("h3",{id:"show-fields-with-too-long-value"},"Show fields with too long value"),(0,o.kt)("p",null,"Previously shown query will show the problematic record, but it will display all field lengths for it. The administrator will still have to compare the lengths to find which one is the issue's source."),(0,o.kt)("p",null,"However, we already are coding the expected field length in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-from"},(0,o.kt)("inlineCode",{parentName:"a"},"FROM"))," part of the query. Why not use it to make life easier?"),(0,o.kt)("p",null,"Let's change the ",(0,o.kt)("inlineCode",{parentName:"p"},"LEN(c.Id) AS [Subscriber Key],")," in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-select"},(0,o.kt)("inlineCode",{parentName:"a"},"SELECT"))," statement part to something a bit more interesting:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Use CASE to display only the problematic fields"',title:'"Use',CASE:!0,to:!0,display:!0,only:!0,the:!0,problematic:!0,'fields"':!0},"CASE\n    WHEN 18 - LEN(c.Id) < 0\n    THEN LEN(c.Id)\nEND AS SubscriberKey\n")),(0,o.kt)("p",null,"As you can see, we changed a simple line to a more complex ",(0,o.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-select#conditional-values-with-case"},(0,o.kt)("inlineCode",{parentName:"a"},"CASE"))," statement. There is a good reason for it. Thanks to it, the query will evaluate each field against the expected length and in the Value Length Data Extension display information only for the problematic values."),(0,o.kt)("p",null,"The administrator will no longer have to compare each field with configured maximum - he will see it directly in the Data Extension, which saves time and limits the errors."),(0,o.kt)("h3",{id:"extended-length-information"},"Extended length information"),(0,o.kt)("p",null,"We can go even further with this approach and add a bit more data to the output for those problematic fields by making few calculations in ",(0,o.kt)("inlineCode",{parentName:"p"},"THEN")," part of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-select#conditional-values-with-case"},(0,o.kt)("inlineCode",{parentName:"a"},"CASE"))," statement."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{3} title="Let the code do the work"',"{3}":!0,title:'"Let',the:!0,code:!0,do:!0,'work"':!0},"CASE\n    WHEN 18 - LEN(c.Id) < 0\n    THEN CONCAT(LEN(c.Id), '(', LEN(c.Id) - 18, ' over limit)')\nEND AS SubscriberKey\n")),(0,o.kt)("p",null,"Here, apart from the problematic field's length, we are also showing how much it exceeds the current configuration."),(0,o.kt)("p",null,"For example, if we expect the First Name to be under 40 characters and one record comes with 46 characters, the previous solution would output ",(0,o.kt)("inlineCode",{parentName:"p"},"46"),". This extended one will be a bit more verbose by showing ",(0,o.kt)("inlineCode",{parentName:"p"},"46 (6 over limit)"),"."),(0,o.kt)("p",null,"Remember that if you implement this option, it will impact the output length in your technical Data Extension. 4 characters will be no longer enough. 22, however, will work like a charm."),(0,o.kt)("h2",{id:"fully-fledged-long-term-solution"},"Fully-fledged Long Term Solution"),(0,o.kt)("p",null,"After applying both of the above options to the ",(0,o.kt)("a",{parentName:"p",href:"#basic-long-term-solution"},"Basic SQL Snippet"),", it looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n      c.Id AS ContactID\n    , CASE\n        WHEN 18 - LEN(c.Id) < 0\n        THEN CONCAT(LEN(c.Id), '(', LEN(c.Id) - 18, ' over limit)')\n      END AS SubscriberKey\n    , CASE\n        WHEN 40 - LEN(c.FirstName) < 0\n        THEN CONCAT(LEN(c.FirstName), '(', LEN(c.FirstName) - 40, ' over limit)')\n      END AS FirstName\n    , CASE\n        WHEN 80 - LEN(c.LastName) < 0\n        THEN CONCAT(LEN(c.LastName), '(', LEN(c.LastName) - 80, ' over limit)')\n      END AS LastName\n    , CASE\n        WHEN 254 - LEN(c.Email) < 0\n        THEN CONCAT(LEN(c.Email), '(', LEN(c.Email) - 254, ' over limit)')\n      END AS EmailAddress\n    , CASE\n        WHEN 80 - LEN(c.JobTitle__c) < 0\n        THEN CONCAT(LEN(c.JobTitle__c), '(', LEN(c.JobTitle__c) - 80, ' over limit)')\n      END AS JobTitle\n    , CASE\n        WHEN 40 - LEN(c.Industry__c) < 0\n        THEN CONCAT(LEN(c.Industry__c), '(', LEN(c.Industry__c) - 40, ' over limit)')\n      END AS Industry\nFROM Contact_Salesforce AS c\nWHERE\n    18 - LEN(c.Id) < 0\n    OR 40 - LEN(c.FirstName) < 0\n    OR 80 - LEN(c.LastName) < 0\n    OR 254 - LEN(c.Email) < 0\n    OR 80 - LEN(c.JobTitle__c) < 0\n    OR 40 - LEN(c.Industry__c) < 0\n")))}m.isMDXComponent=!0}}]);