(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{119:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=b(n),m=i,p=u["".concat(o,".").concat(m)]||u[m]||d[m]||r;return n?a.a.createElement(p,s(s({ref:t},c),{},{components:n})):a.a.createElement(p,s({ref:t},c))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},120:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n(0),a=n(57),r=n.n(a);const o=({content:e})=>i.createElement(i.Fragment,null,i.createElement("p",{id:r.a.leadText},e))},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var i=n(3),a=n(8),r=(n(0),n(119)),o=n(120),s={id:"sfmc-sql-snippet-debugging-email-sends",title:"SFMC SQL Debugging Email Sends",sidebar_label:"Debugging Email Sends",description:"Make finding problems with email delivery in Salesforce Marketing Cloud great again. SQL with Query Studio to the rescue."},l={unversionedId:"sql/sfmc-sql-snippet-debugging-email-sends",id:"sql/sfmc-sql-snippet-debugging-email-sends",isDocsHomePage:!1,title:"SFMC SQL Debugging Email Sends",description:"Make finding problems with email delivery in Salesforce Marketing Cloud great again. SQL with Query Studio to the rescue.",source:"@site/docs/sql/sfmc-sql-snippet-debugging-email-sends.mdx",slug:"/sql/sfmc-sql-snippet-debugging-email-sends",permalink:"/docs/sql/sfmc-sql-snippet-debugging-email-sends",editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/docs/sql/sfmc-sql-snippet-debugging-email-sends.mdx",version:"current",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1610487454,formattedLastUpdatedAt:"1/12/2021",sidebar_label:"Debugging Email Sends",sidebar:"snippets",previous:{title:"SFMC SQL Conversion Functions",permalink:"/docs/sql/sfmc-sql-conversion-functions"},next:{title:"SFMC SQL Debugging Value Length",permalink:"/docs/sql/sfmc-sql-snippet-debugging-value-length"}},c=[{value:"Problem with straightforward Email Send analysis",id:"problem-with-straightforward-email-send-analysis",children:[]},{value:"Solution",id:"solution",children:[]},{value:"Options",id:"options",children:[{value:"Change timeframe",id:"change-timeframe",children:[]},{value:"Limit to single subscriber",id:"limit-to-single-subscriber",children:[]},{value:"Limit to single domain",id:"limit-to-single-domain",children:[]},{value:"Limit to single email",id:"limit-to-single-email",children:[]},{value:"Limit to single journey",id:"limit-to-single-journey",children:[]},{value:"Limit to single engagement type",id:"limit-to-single-engagement-type",children:[]}]}],b={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(o.a,{content:"Make finding problems with email delivery in Salesforce Marketing Cloud great again. SQL with the Query Studio to the rescue.",mdxType:"LeadText"}),Object(r.b)("h2",{id:"problem-with-straightforward-email-send-analysis"},"Problem with straightforward Email Send analysis"),Object(r.b)("p",null,"Deliverability issues, unfortunately, are a standard both during the Salesforce Marketing Cloud implementation phase, as well as after the go-live."),Object(r.b)("p",null,"The test you sent to yourself during the Marketing Cloud implementation that never arrived at the inbox. The subscriber that asks where is his newsletter with the promo code."),Object(r.b)("p",null,"You can try to debug it with Journey Builder data or Reports, but in most cases, those solutions provide either not enough or way too much for the specific check you need to make."),Object(r.b)("h2",{id:"solution"},"Solution"),Object(r.b)("p",null,"My favourite way to debug email sends is by using a SQL Query. Open your ",Object(r.b)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-basics#query-studio"},"Query Studio")," and copy-paste the below code:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    s.SubscriberKey,\n    sub.EmailAddress,\n    sub.Status,\n    j.JourneyName,\n    j.VersionNumber AS JourneyVersion,\n    job.EmailName,\n    s.EventDate AS SentDate,\n    job.DeliveredTime AS DeliveryDate,\n    o.EventDate AS OpenDate,\n    c.EventDate AS ClickDate,\n    b.EventDate AS BounceDate,\n    b.BounceCategory,\n    b.BounceSubcategory,\n    b.SMTPBounceReason AS BounceReason,\n    u.EventDate AS UnsubscribeDate\nFROM _Sent s\nLEFT JOIN _Job job ON s.JobID = job.JobID\nLEFT JOIN _Open o ON s.JobID = o.JobID\n    AND s.ListID = o.ListID\n    AND s.BatchID = o.BatchID\n    AND s.SubscriberID = o.SubscriberID\n    AND o.IsUnique = 1\nLEFT JOIN _Click c ON s.JobID = c.JobID\n    AND s.ListID = c.ListID\n    AND s.BatchID = c.BatchID\n    AND s.SubscriberID = c.SubscriberID\n    AND c.IsUnique = 1\nLEFT JOIN _Bounce b ON s.JobID = b.JobID\n    AND s.ListID = b.ListID\n    AND s.BatchID = b.BatchID\n    AND s.SubscriberID = b.SubscriberID\n    AND b.IsUnique = 1\nLEFT JOIN _Unsubscribe u ON s.JobID = u.JobID\n    AND s.ListID = u.ListID\n    AND s.BatchID = u.BatchID\n    AND s.SubscriberID = u.SubscriberID\n    AND u.IsUnique = 1\nLEFT JOIN _JourneyActivity ja ON s.TriggererSendDefinitionObjectID = ja.JourneyActivityObjectID\nLEFT JOIN _Journey j ON ja.VersionID = j.VersionID\nLEFT JOIN _Subscribers sub ON s.SubscriberKey = sub.SubscriberKey\nWHERE CONVERT(DATE, s.EventDate) >= DATEADD(DAY, -1, CONVERT(DATE, GETDATE()))\n")),Object(r.b)("p",null,"Within a few seconds you will see information about sends from the last day. With all the details that might be useful for debugging, like STMP Bounce Reason, Subscriber Status, Unsubscribe Date, etc."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"You Should Know")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"If you are running it from child Business Unit and do not see EmailAddress, BounceCount and Status, add ",Object(r.b)("inlineCode",{parentName:"p"},"ENT.")," prefix to ",Object(r.b)("inlineCode",{parentName:"p"},"_Subscribers")," Data View name in the last ",Object(r.b)("inlineCode",{parentName:"p"},"JOIN"),". It will pull the data from _Subscribers of parent Business Unit."))),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)("p",null,"You can even adapt the above query to better suit your needs."),Object(r.b)("h3",{id:"change-timeframe"},"Change timeframe"),Object(r.b)("p",null,"My default is checking the sends from last day. You can change it by modifying the ",Object(r.b)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-date-functions#dateadd"},Object(r.b)("inlineCode",{parentName:"a"},"DATEADD")," function"),"."),Object(r.b)("h3",{id:"limit-to-single-subscriber"},"Limit to single subscriber"),Object(r.b)("p",null,"If you are looking for a problem related to only one specific subscriber you can add ",Object(r.b)("inlineCode",{parentName:"p"},"s.SubscriberKey = 'SubscriberKeyOfThatContact'")," or ",Object(r.b)("inlineCode",{parentName:"p"},"sub.EmailAddress = 'specific@email.address'")," to the ",Object(r.b)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-where#logical-operators"},Object(r.b)("inlineCode",{parentName:"a"},"WHERE")," statement"),". Or replace the current one not to be limited by the timeframe."),Object(r.b)("h3",{id:"limit-to-single-domain"},"Limit to single domain"),Object(r.b)("p",null,"If you see problems with deliverability for a particular user, I highly recommend checking whether any other users from the same domain are also having such issues. Maybe it is related to corporate server policy? Add ",Object(r.b)("inlineCode",{parentName:"p"},"sub.Domain = 'Recipients.Domain'")," to the ",Object(r.b)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-where#logical-operators"},Object(r.b)("inlineCode",{parentName:"a"},"WHERE")," statement"),". Or replace the current one not to be limited by the timeframe."),Object(r.b)("h3",{id:"limit-to-single-email"},"Limit to single email"),Object(r.b)("p",null,"If the problem is related to just one particular Email asset, you can limit your outcomes by adding ",Object(r.b)("inlineCode",{parentName:"p"},"job.EmailName = 'ProblematicEmailName'")," to the ",Object(r.b)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-where#logical-operators"},Object(r.b)("inlineCode",{parentName:"a"},"WHERE")," statement"),". Or replace the current one not to be limited by the timeframe."),Object(r.b)("h3",{id:"limit-to-single-journey"},"Limit to single journey"),Object(r.b)("p",null,"If you want to focus on a single Journey, you can limit your outcomes by adding ",Object(r.b)("inlineCode",{parentName:"p"},"j.JourneyName = 'ProblematicJourneyName'")," to the ",Object(r.b)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-where#logical-operators"},Object(r.b)("inlineCode",{parentName:"a"},"WHERE")," statement"),". Or replace the current one not to be limited by the timeframe. You can also pinpoint it even further by filtering on ",Object(r.b)("inlineCode",{parentName:"p"},"j.JourneyVersion"),"."),Object(r.b)("h3",{id:"limit-to-single-engagement-type"},"Limit to single engagement type"),Object(r.b)("p",null,"If you are interested only in bounces and do not need any other sends, add ",Object(r.b)("inlineCode",{parentName:"p"},"b.IsUnique = 1")," to the ",Object(r.b)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-where#logical-operators"},Object(r.b)("inlineCode",{parentName:"a"},"WHERE")," statement"),"."),Object(r.b)("p",null,"You can use the same approach to output only opens or clicks by changing the prefix from ",Object(r.b)("inlineCode",{parentName:"p"},"b")," to the ",Object(r.b)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-join#table-name-prefix"},"alias")," representing the needed ",Object(r.b)("a",{parentName:"p",href:"/docs/config/sfmc-config-system-data-views"},"System Data View"),"."))}u.isMDXComponent=!0}}]);