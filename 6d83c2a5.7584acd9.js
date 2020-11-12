(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{100:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)(void 0);t.a=r},101:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(99),o=a(98),c=a(49),l=a.n(c);const s=37,d=39;t.a=function(e){const{block:t,children:a,defaultValue:c,values:b,groupId:m,className:u}=e,{tabGroupChoices:p,setTabGroupChoices:h}=Object(i.a)(),[O,E]=Object(n.useState)(c),[j,N]=Object(n.useState)(!1);if(null!=m){const e=p[m];null!=e&&e!==O&&b.some((t=>t.value===e))&&E(e)}const w=e=>{E(e),null!=m&&h(m,e)},f=[],g=e=>{e.metaKey||e.altKey||e.ctrlKey||N(!0)},v=()=>{N(!1)};return Object(n.useEffect)((()=>(window.addEventListener("keydown",g),window.addEventListener("mousedown",v),()=>{window.removeEventListener("keydown",g),window.removeEventListener("mousedown",v)})),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},u)},b.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===e,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===e}),style:j?{}:{outline:"none"},key:e,ref:e=>f.push(e),onKeyDown:e=>{((e,t,a)=>{switch(a.keyCode){case d:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(f,e.target,e),g(e)},onFocus:()=>w(e),onClick:()=>{w(e),N(!1)},onPointerDown:()=>N(!1)},t)))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((e=>e.props.value===O))[0]))}},102:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}},76:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return d})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return u}));var n=a(2),r=a(6),i=(a(0),a(96)),o=a(101),c=a(102),l=a(97),s={id:"sfmc-sql-like",title:"SFMC SQL Like",sidebar_label:"Like",description:"Get a LIKE and build more flexible SQL queries"},d={unversionedId:"sql/sfmc-sql-like",id:"sql/sfmc-sql-like",isDocsHomePage:!1,title:"SFMC SQL Like",description:"Get a LIKE and build more flexible SQL queries",source:"@site/docs/sql/sfmc-sql-like.mdx",slug:"/sql/sfmc-sql-like",permalink:"/docs/sql/sfmc-sql-like",editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/docs/sql/sfmc-sql-like.mdx",version:"current",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1602416821,sidebar_label:"Like",sidebar:"snippets",previous:{title:"SFMC SQL Where",permalink:"/docs/sql/sfmc-sql-where"},next:{title:"SFMC SQL Date Functions",permalink:"/docs/sql/sfmc-sql-date-functions"}},b=[{value:"LIKE with Wildcard",id:"like-with-wildcard",children:[{value:"% Wildcard",id:"-wildcard",children:[]},{value:"_ Wildcard",id:"_-wildcard",children:[]}]},{value:"LIKE with Group",id:"like-with-group",children:[{value:"[] Operator",id:"-operator",children:[]},{value:"- Operator",id:"--operator",children:[]},{value:"^ Operator",id:"-operator-1",children:[]}]},{value:"NOT LIKE",id:"not-like",children:[]}],m={rightToc:b};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(l.a,{content:"Get a LIKE and build more flexible SQL queries",mdxType:"LeadText"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"LIKE")," operator allows you to leverage wildcards and groups to search for matching records based on value fragment. You may use it in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"sfmc-sql-select#like-in-case"}),Object(i.b)("inlineCode",{parentName:"a"},"SELECT CASE"))," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"sfmc-sql-where"}),Object(i.b)("inlineCode",{parentName:"a"},"WHERE"))," statements."),Object(i.b)("p",null,"In ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"sfmc-sql-select#like-in-case"}),Object(i.b)("inlineCode",{parentName:"a"},"SELECT")),", think about normalizing and categorizing data. In ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"sfmc-sql-where"}),Object(i.b)("inlineCode",{parentName:"a"},"WHERE"))," - about filtering with just a part of the value (for example email domain in ",Object(i.b)("inlineCode",{parentName:"p"},"EmailAddress")," field) or with a single element of multi picklist (for instance finding one value within the comma-separated list of all purchased products)."),Object(i.b)("p",null,"There are two levels of ",Object(i.b)("inlineCode",{parentName:"p"},"LIKE")," usage. First is focused on two essential character wildcards and is very straightforward \u2014 the second use full potential of group operator. Let's go through both with practical examples."),Object(i.b)("h2",{id:"like-with-wildcard"},"LIKE with Wildcard"),Object(i.b)("p",null,"Wildcards available in ",Object(i.b)("inlineCode",{parentName:"p"},"LIKE"),":"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Wildcard"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"%")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Zero, one or more characters")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"_")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Exactly one character")))),Object(i.b)("h3",{id:"-wildcard"},"% Wildcard"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"%")," symbol allows you to match zero, one or more characters within your ",Object(i.b)("inlineCode",{parentName:"p"},"LIKE")," search."),Object(i.b)("p",null,"For example, you can search for ",Object(i.b)("inlineCode",{parentName:"p"},"%@mateuszdabrowski.pl")," domain in ",Object(i.b)("inlineCode",{parentName:"p"},"EmailAddress")," to get all contacts with an email address ending with ",Object(i.b)("inlineCode",{parentName:"p"},"@mateuszdabrowski.pl"),"."),Object(i.b)("p",null,"You can change this filter to ",Object(i.b)("inlineCode",{parentName:"p"},"%@mateuszdabrowski.%"),". With the second wildcard at the end, it will be looking for any email address that contains ",Object(i.b)("inlineCode",{parentName:"p"},"@mateuszdabrowski.")," but may have more text on either side of it. It will capture all emails ending with ",Object(i.b)("inlineCode",{parentName:"p"},"@mateuszdabrowski.pl")," domain just as the previous filter, but also match those with ",Object(i.b)("inlineCode",{parentName:"p"},"@mateuszdabrowski.com"),", ",Object(i.b)("inlineCode",{parentName:"p"},"@mateuszdabrowski.sfmc.eu")," and other top-level domains."),Object(i.b)(o.a,{defaultValue:"where",values:[{label:"WHERE",value:"where"},{label:"SELECT",value:"select"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"where",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:"{5} title=\"All subscribers that have an email address ending with 'mateuszdabrowski.pl' domain\"","{5}":!0,title:'"All',subscribers:!0,that:!0,have:!0,an:!0,email:!0,address:!0,ending:!0,with:!0,"'mateuszdabrowski.pl'":!0,'domain"':!0}),"SELECT\n    SubscriberKey,\n    EmailAddress\nFROM _Subscribers\nWHERE EmailAddress LIKE '%@%mateuszdabrowski.pl'\n")),Object(i.b)("p",null,"In the above example, I used two wildcards - one before and one just after ",Object(i.b)("inlineCode",{parentName:"p"},"@")," symbol. It allows not only to catch contacts in ",Object(i.b)("inlineCode",{parentName:"p"},"@mateuszdabrowski.pl")," domain, but also any subdomain, like ",Object(i.b)("inlineCode",{parentName:"p"},"@dev.mateuszdabrowski.pl"),"."),Object(i.b)("p",null,"In the marketing automation world, however, ",Object(i.b)("inlineCode",{parentName:"p"},"LIKE")," operator is especially useful for selecting contacts based on the multi picklist columns. Consider ",Object(i.b)("inlineCode",{parentName:"p"},"ActiveSubscriptions")," field that can have any combination of values ",Object(i.b)("inlineCode",{parentName:"p"},"Phone"),", ",Object(i.b)("inlineCode",{parentName:"p"},"TV"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Internet"),"."),Object(i.b)("p",null,"Suppose you would like to select all contacts with active phone subscription. In that case, you shouldn't use ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"sfmc-sql-where#equality"}),"equality operator")," (",Object(i.b)("inlineCode",{parentName:"p"},"WHERE ActiveSubscription = 'Phone'"),"), as it would return only contacts that have just this one subscription. Some of your customers might, however, have multiple (phone and tv or phone and internet plans). For SQL, a field containing ",Object(i.b)("inlineCode",{parentName:"p"},"'Phone'")," is not equal with the one having a value of ",Object(i.b)("inlineCode",{parentName:"p"},"'Phone', Internet'"),". ",Object(i.b)("inlineCode",{parentName:"p"},"LIKE")," operator is here to save the day."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'{5} title="All subscribers that have at least Phone subscription"',"{5}":!0,title:'"All',subscribers:!0,that:!0,have:!0,at:!0,least:!0,Phone:!0,'subscription"':!0}),"SELECT\n    SubscriberKey,\n    EmailAddress\nFROM MasterSubscriberDE\nWHERE ActiveSubscription LIKE '%Phone%'\n"))),Object(i.b)(c.a,{value:"select",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'{4} title="Categorize your database into either Internal or External records based on email domain"',"{4}":!0,title:'"Categorize',your:!0,database:!0,into:!0,either:!0,Internal:!0,or:!0,External:!0,records:!0,based:!0,on:!0,email:!0,'domain"':!0}),"SELECT\n    SubscriberKey,\n    CASE\n        WHEN EmailAddress LIKE '%@%mateuszdabrowski.pl' THEN 'Internal'\n        ELSE 'External'\n    END AS ContactType\nFROM _Subscribers\n")),Object(i.b)("p",null,"In the above example, I used two wildcards - one before and one just after ",Object(i.b)("inlineCode",{parentName:"p"},"@")," symbol. It allows not only to catch contacts in ",Object(i.b)("inlineCode",{parentName:"p"},"@mateuszdabrowski.pl")," domain, but also any subdomain, like ",Object(i.b)("inlineCode",{parentName:"p"},"@dev.mateuszdabrowski.pl"),"."))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"You Should Know")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Always be sure to check whether you apply the wildcards correctly. Popular error is to have either too narrow or too wide scope of your filter. A common issue is lack of ",Object(i.b)("inlineCode",{parentName:"p"},"%")," operator in the end or beginning of the searched string. For your query, it means that the value should end there."),Object(i.b)("p",{parentName:"div"},"For example, ",Object(i.b)("inlineCode",{parentName:"p"},"WHERE EmailAddress LIKE '@gmail.com'")," should provide you zero results, as it would be looking for precisely the ",Object(i.b)("inlineCode",{parentName:"p"},"@gmail.com")," value in the ",Object(i.b)("inlineCode",{parentName:"p"},"EmailAddress")," field - without any characters before the ",Object(i.b)("inlineCode",{parentName:"p"},"@")," symbol."))),Object(i.b)("h3",{id:"_-wildcard"},"_ Wildcard"),Object(i.b)("p",null,"Another wildcard working with ",Object(i.b)("inlineCode",{parentName:"p"},"LIKE")," is the underscore ",Object(i.b)("inlineCode",{parentName:"p"},"_"),". It is much simpler as all it does it pretending to be any single character."),Object(i.b)("p",null,"Let's consider a scenario, where you have a multi picklist field containing comma-separated product IDs. For example, a customer with three recommended products might have a value ",Object(i.b)("inlineCode",{parentName:"p"},"1,14,27"),". The system codes single digit values to subscriptions, and two-digit codes to various product categories. Let's use it in the query."),Object(i.b)(o.a,{defaultValue:"where",values:[{label:"WHERE",value:"where"},{label:"SELECT",value:"select"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"where",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'{6-9} title="All subscribers with at least one subscription product in their recommendations"',"{6-9}":!0,title:'"All',subscribers:!0,with:!0,at:!0,least:!0,one:!0,subscription:!0,product:!0,in:!0,their:!0,'recommendations"':!0}),"SELECT\n    SubscriberKey,\n    EmailAddress,\n    RecommendedProducts\nFROM EcommerceUpsellDE\nWHERE RecommendedProducts LIKE '_'\n    OR RecommendedProducts LIKE '_,%'\n    OR RecommendedProducts LIKE '%,_,%'\n    OR RecommendedProducts LIKE '%,_'\n")),Object(i.b)("p",null,"In the query above, we are filtering our database with ",Object(i.b)("inlineCode",{parentName:"p"},"RecommendedProducts")," field. To add a contact to our segment, in four steps, we check if at least one condition is true:")),Object(i.b)(c.a,{value:"select",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'{5-8} title="Create boolean field from a multipicklist one to split database on recommendation type"',"{5-8}":!0,title:'"Create',boolean:!0,field:!0,from:!0,a:!0,multipicklist:!0,one:!0,to:!0,split:!0,database:!0,on:!0,recommendation:!0,'type"':!0}),"SELECT\n    SubscriberKey,\n    EmailAddress,\n    CASE\n        WHEN RecommendedProducts LIKE '_' THEN 'True'\n        WHEN RecommendedProducts LIKE '_,%' THEN 'True'\n        WHEN RecommendedProducts LIKE '%,_,%' THEN 'True'\n        WHEN RecommendedProducts LIKE '_,%' THEN 'True'\n        ELSE 'False'\n    END AS IsSubscriptionRecommended\nFROM EcommerceUpsellDE\n")),Object(i.b)("p",null,"In the query above, we are creating new boolean field that will tell us whether the contact has at least one subscription product in their recommended lists. Great for personalized communication emphasizing this recommendation. We do this by assigning value ",Object(i.b)("inlineCode",{parentName:"p"},"True")," if at least one of four steps evaluates to true:"))),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"If the record has exactly one recommended product that has a single-digit code (subscription)"),Object(i.b)("li",{parentName:"ol"},"If the record has multiple recommended products and the first one is a single-digit (subscription)"),Object(i.b)("li",{parentName:"ol"},"If the record has multiple recommended products and one in the middle is a single-digit (subscription)"),Object(i.b)("li",{parentName:"ol"},"If the record has multiple recommended products and the last one is a single-digit (subscription)")),Object(i.b)("h2",{id:"like-with-group"},"LIKE with Group"),Object(i.b)("p",null,"There is also a group operator ",Object(i.b)("inlineCode",{parentName:"p"},"[]")," for ",Object(i.b)("inlineCode",{parentName:"p"},"LIKE")," statements. It allows you to create even more complex conditions:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Advanced Operator"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"[]")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Any single character from the list specified inside")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"-")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Range operator for ",Object(i.b)("inlineCode",{parentName:"td"},"[]"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"^")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Exclusion operator for ",Object(i.b)("inlineCode",{parentName:"td"},"[]"))))),Object(i.b)("h3",{id:"-operator"},"[] Operator"),Object(i.b)("p",null,"The group operator ",Object(i.b)("inlineCode",{parentName:"p"},"[]")," allows you to provide a list of characters that you want to find a match."),Object(i.b)("p",null,"Consider the previous example with a field containing multiple IDs of your subscription and standard products. The field stores subscriptions in the form of single-digit product IDs. First four IDs are related to Premium subscriptions. IDs from 5 to 9 are Standard subscriptions."),Object(i.b)(o.a,{defaultValue:"where",values:[{label:"WHERE",value:"where"},{label:"SELECT",value:"select"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"where",mdxType:"TabItem"},Object(i.b)("p",null,"If we would like to output only the Premium subscriptions, we would have to create a separate filter for each ID."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{16:!0,className:"language-sql",metastring:'{6-14} title="This approach would require 16 lines to cover the use case"',"{6-14}":!0,title:'"This',approach:!0,would:!0,require:!0,lines:!0,to:!0,cover:!0,the:!0,use:!0,'case"':!0}),"SELECT\n    SubscriberKey,\n    EmailAddress,\n    RecommendedProducts\nFROM EcommerceUpsellDE\nWHERE RecommendedProducts LIKE '1'\n    OR RecommendedProducts LIKE '1,%'\n    OR RecommendedProducts LIKE '%,1,%'\n    OR RecommendedProducts LIKE '%,1'\n    OR RecommendedProducts LIKE '2'\n    OR RecommendedProducts LIKE '2,%'\n    OR RecommendedProducts LIKE '%,2,%'\n    OR RecommendedProducts LIKE '%,2'\n    ...\n")),Object(i.b)("p",null,"With a group, we can optimize it \u2014 a lot."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{4:!0,className:"language-sql",metastring:'{6-9} title="Same outcome with just 4 lines"',"{6-9}":!0,title:'"Same',outcome:!0,with:!0,just:!0,'lines"':!0}),"SELECT\n    SubscriberKey,\n    EmailAddress,\n    RecommendedProducts\nFROM EcommerceUpsellDE\nWHERE RecommendedProducts LIKE '[1234]'\n    OR RecommendedProducts LIKE '[1234],%'\n    OR RecommendedProducts LIKE '%,[1234],%'\n    OR RecommendedProducts LIKE '%,[1234]'\n"))),Object(i.b)(c.a,{value:"select",mdxType:"TabItem"},Object(i.b)("p",null,"If we would like to categorize them using Wildcards, we would have to create a separate WHEN for each ID."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{36:!0,className:"language-sql",metastring:'{5-14} title="This approach would require 36 WHEN/THEN lines to cover the use case"',"{5-14}":!0,title:'"This',approach:!0,would:!0,require:!0,"WHEN/THEN":!0,lines:!0,to:!0,cover:!0,the:!0,use:!0,'case"':!0}),"SELECT\n    SubscriberKey,\n    EmailAddress,\n    CASE\n        WHEN RecommendedProducts LIKE '1' THEN 'Premium'\n        WHEN RecommendedProducts LIKE '1,%' THEN 'Premium'\n        WHEN RecommendedProducts LIKE '%,1,%' THEN 'Premium'\n        WHEN RecommendedProducts LIKE '1,%' THEN 'Premium'\n        WHEN RecommendedProducts LIKE '2' THEN 'Premium'\n        WHEN RecommendedProducts LIKE '2,%' THEN 'Premium'\n        ...\n        WHEN RecommendedProducts LIKE '5' THEN 'Standard'\n        WHEN RecommendedProducts LIKE '5,%' THEN 'Standard'\n        ...\n        ELSE 'No Subscription'\n    END AS RecommendedSubscriptionType\nFROM EcommerceUpsellDE\n")),Object(i.b)("p",null,"With a group, we can optimize it  \u2014 a lot."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{8:!0,className:"language-sql",metastring:'{5-12} title="Same outcome with just 8 WHEN/THEN lines"',"{5-12}":!0,title:'"Same',outcome:!0,with:!0,just:!0,"WHEN/THEN":!0,'lines"':!0}),"SELECT\n    SubscriberKey,\n    EmailAddress,\n    CASE\n        WHEN RecommendedProducts LIKE '[1234]' THEN 'Premium'\n        WHEN RecommendedProducts LIKE '[1234],%' THEN 'Premium'\n        WHEN RecommendedProducts LIKE '%,[1234],%' THEN 'Premium'\n        WHEN RecommendedProducts LIKE '[1234],%' THEN 'Premium'\n        WHEN RecommendedProducts LIKE '[56789]' THEN 'Standard'\n        WHEN RecommendedProducts LIKE '[56789],%' THEN 'Standard'\n        WHEN RecommendedProducts LIKE '%,[56789],%' THEN 'Standard'\n        WHEN RecommendedProducts LIKE '[56789],%' THEN 'Standard'\n        ELSE 'No Subscription'\n    END AS RecommendedSubscriptionType\nFROM EcommerceUpsellDE\n")))),Object(i.b)("p",null,"Thanks to the group operator, instead of covering every single case, we can provide all values within the ",Object(i.b)("inlineCode",{parentName:"p"},"[]"),". Short, clean and readable. And it can get even better."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"You Should Know")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Group wildcard (",Object(i.b)("inlineCode",{parentName:"p"},"[]"),") is also useful as a way to escape character in the ",Object(i.b)("inlineCode",{parentName:"p"},"LIKE")," statement. For example, you might want to look for all values, including a per cent sign (",Object(i.b)("inlineCode",{parentName:"p"},"%"),")."),Object(i.b)("p",{parentName:"div"},"Writing ",Object(i.b)("inlineCode",{parentName:"p"},"LIKE '10%'")," is not a good idea, as it would return you all values starting with ",Object(i.b)("inlineCode",{parentName:"p"},"10")," - as the per cent sign is a wildcard meaning zero, one or more characters. You can, however, obtain what you want by writing:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{1:!0,className:"language-sql",metastring:'{4-5} title="If the client has a discount between 1 and 9%, let\'s bump it up to either 5% or 10%. If he or she has a higher one - leave it as it is. If no discount is available, make it 2%"',"{4-5}":!0,title:'"If',the:!0,client:!0,has:!0,a:!0,discount:!0,between:!0,and:!0,"9%,":!0,"let's":!0,bump:!0,it:!0,up:!0,to:!0,either:!0,"5%":!0,or:!0,"10%.":!0,If:!0,he:!0,she:!0,higher:!0,one:!0,"-":!0,leave:!0,as:!0,"is.":!0,no:!0,is:!0,"available,":!0,make:!0,'2%"':!0}),"SELECT\n    ContactKey,\n    CASE\n        WHEN Discount LIKE '[56789][%]' THEN '10%'\n        WHEN Discount LIKE '[01234][%]' THEN '5%'\n        WHEN Discount IS NOT NULL THEN Discount\n        ELSE '2%'\n    END AS NewDiscount\n")),Object(i.b)("p",{parentName:"div"},"By wrapping the ",Object(i.b)("inlineCode",{parentName:"p"},"%")," with the grouping sign ",Object(i.b)("inlineCode",{parentName:"p"},"[]"),", we are telling SQL to look for exactly the per cent sign. Thanks to it ",Object(i.b)("inlineCode",{parentName:"p"},"'[1234][%]'")," search will look for ",Object(i.b)("inlineCode",{parentName:"p"},"1%"),", ",Object(i.b)("inlineCode",{parentName:"p"},"2%"),", ",Object(i.b)("inlineCode",{parentName:"p"},"3%")," or ",Object(i.b)("inlineCode",{parentName:"p"},"4%")," values only."),Object(i.b)("p",{parentName:"div"},"Same works with ",Object(i.b)("inlineCode",{parentName:"p"},"_")," wildcard."))),Object(i.b)("h3",{id:"--operator"},"- Operator"),Object(i.b)("p",null,"We can simplify more with the use of range operator ",Object(i.b)("inlineCode",{parentName:"p"},"-"),". Instead of writing each possible character within our group ",Object(i.b)("inlineCode",{parentName:"p"},"[]")," (it gets awful when we are looking for any letter - lower or uppercase), we can ask for a range:"),Object(i.b)(o.a,{defaultValue:"where",values:[{label:"WHERE",value:"where"},{label:"SELECT",value:"select"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"where",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'{6-9} title="Now with range operator"',"{6-9}":!0,title:'"Now',with:!0,range:!0,'operator"':!0}),"SELECT\n    SubscriberKey,\n    EmailAddress,\n    RecommendedProducts\nFROM EcommerceUpsellDE\nWHERE RecommendedProducts LIKE '[1-4]'\n    OR RecommendedProducts LIKE '[1-4],%'\n    OR RecommendedProducts LIKE '%,[1-4],%'\n    OR RecommendedProducts LIKE '%,[1-4]'\n"))),Object(i.b)(c.a,{value:"select",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'{5-12} title="Now with range operator"',"{5-12}":!0,title:'"Now',with:!0,range:!0,'operator"':!0}),"SELECT\n    SubscriberKey,\n    EmailAddress,\n    CASE\n        WHEN RecommendedProducts LIKE '[1-4]' THEN 'Premium'\n        WHEN RecommendedProducts LIKE '[1-4],%' THEN 'Premium'\n        WHEN RecommendedProducts LIKE '%,[1-4],%' THEN 'Premium'\n        WHEN RecommendedProducts LIKE '[1-4],%' THEN 'Premium'\n        WHEN RecommendedProducts LIKE '[5-9]' THEN 'Standard'\n        WHEN RecommendedProducts LIKE '[5-9],%' THEN 'Standard'\n        WHEN RecommendedProducts LIKE '%,[5-9],%' THEN 'Standard'\n        WHEN RecommendedProducts LIKE '[5-9],%' THEN 'Standard'\n        ELSE 'No Subscription'\n    END AS RecommendedSubscriptionType\nFROM EcommerceUpsellDE\n")))),Object(i.b)("p",null,"As you can see, all we need to do, it to put range operator ",Object(i.b)("inlineCode",{parentName:"p"},"-")," between the first and last value that we want to catch. For alphabetical searches where we want both lowercase and uppercase letters, you will need to write it like this: ",Object(i.b)("inlineCode",{parentName:"p"},"LIKE '[a-zA-Z]'"),"."),Object(i.b)("p",null,"If you want to search for a hyphen '-' within a grouping operator that uses a range, add it in the very beginning. ",Object(i.b)("inlineCode",{parentName:"p"},"LIKE '[-0-9]")," will look for either ",Object(i.b)("inlineCode",{parentName:"p"},"-")," or any digit."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"You Should Know")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"You can mix and match groups, ranges and wildcards."),Object(i.b)("p",{parentName:"div"},"It is an excellent tool to create essential categorization solutions for uncontrolled data. For example, to clean up free text job title coming from web forms."),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'title="Simplified Job Title categorization"',title:'"Simplified',Job:!0,Title:!0,'categorization"':!0}),"SELECT\n    SubscriberKey\n    CASE\n        WHEN FreeTextJobTitle LIKE '[Cc]_[Oo]' THEN 'C-Suite'\n        WHEN FreeTextJobTitle LIKE '%[Mm]anager%' THEN 'Management'\n        WHEN FreeTextJobTitle LIKE '%[Ss]pecialist%' THEN 'Specialists'\n    END AS CorporateJobTitleGroup\nFROM _Subscriber\n")))),Object(i.b)("h3",{id:"-operator-1"},"^ Operator"),Object(i.b)("p",null,"There is one more operator that is sometimes useful - the exclusion operator ",Object(i.b)("inlineCode",{parentName:"p"},"^"),". Add it to the beginning of your group, and SQL will not look for any of the grouped characters. For example, ",Object(i.b)("inlineCode",{parentName:"p"},"LIKE '[^0-9]'")," will look for any character that is not a digit."),Object(i.b)("p",null,"This operator is especially useful for the use in ",Object(i.b)("inlineCode",{parentName:"p"},"WHERE")," statement. Best example? SQL for finding contacts with Subscriber Key not being correct Salesforce ID:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'{4} title="Find all records in All Subscribers with Subscriber Key other than Salesforce ID"',"{4}":!0,title:'"Find',all:!0,records:!0,in:!0,All:!0,Subscribers:!0,with:!0,Subscriber:!0,Key:!0,other:!0,than:!0,Salesforce:!0,'ID"':!0}),"SELECT\n    SubscriberKey\nFROM _Subscribers\nWHERE SubscriberKey LIKE '%[^a-zA-Z0-9]%'\n    AND LEN(SubscriberKey) <> 18\n")),Object(i.b)("p",null,"This short and straightforward query will look into each SubscriberKey and check whether in there is any character other the letter or digit (case-insensitive) or whether the length is not equal to 18. All such records have incorrect value and are eligible for cleanup or investigation. Perfect for Automation with deletion SSJS script or Verification Activity to alert administrator about issues."),Object(i.b)("h2",{id:"not-like"},"NOT LIKE"),Object(i.b)("p",null,"Finally, just as with other statements, you can add ",Object(i.b)("inlineCode",{parentName:"p"},"NOT")," statement before ",Object(i.b)("inlineCode",{parentName:"p"},"LIKE")," to search for not matching records:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'{4} title="Same query as at the beginning of our CASE journey, but flipped"',"{4}":!0,title:'"Same',query:!0,as:!0,at:!0,the:!0,beginning:!0,of:!0,our:!0,CASE:!0,"journey,":!0,but:!0,'flipped"':!0}),"SELECT\n    ContactKey,\n    CASE\n        WHEN EmailAddress NOT LIKE '%@mateuszdabrowski.pl' THEN 'External'\n        ELSE 'Internal'\n    END AS ContactType\n")))}u.isMDXComponent=!0},96:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return p}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=d(a),u=n,p=b["".concat(o,".").concat(u)]||b[u]||m[u]||i;return a?r.a.createElement(p,c(c({ref:t},s),{},{components:a})):r.a.createElement(p,c({ref:t},s))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},97:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),r=a.n(n),i=a(48),o=a.n(i);const c=({content:e})=>r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{id:o.a.leadText},e))},98:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},99:function(e,t,a){"use strict";var n=a(0),r=a(100);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}}}]);