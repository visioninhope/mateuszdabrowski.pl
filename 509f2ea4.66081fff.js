(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{71:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),i=(a(0),a(91)),o=a(92),l={id:"sfmc-sql-where",title:"SFMC SQL Where",sidebar_label:"Where",description:"Use WHERE to make your query lean and to the point. Less is more."},s={unversionedId:"sql/sfmc-sql-where",id:"sql/sfmc-sql-where",isDocsHomePage:!1,title:"SFMC SQL Where",description:"Use WHERE to make your query lean and to the point. Less is more.",source:"@site/docs/sql/sfmc-sql-where.mdx",slug:"/sql/sfmc-sql-where",permalink:"/docs/sql/sfmc-sql-where",editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/docs/sql/sfmc-sql-where.mdx",version:"current",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1600638421,sidebar_label:"Where",sidebar:"snippets",previous:{title:"SFMC SQL Join",permalink:"/docs/sql/sfmc-sql-join"}},b=[{value:"Basic operators",id:"basic-operators",children:[{value:"Equality operators",id:"equality-operators",children:[]},{value:"Comparison operators",id:"comparison-operators",children:[]}]},{value:"LIKE operator",id:"like-operator",children:[]},{value:"Logical operators",id:"logical-operators",children:[{value:"BETWEEN shorthand",id:"between-shorthand",children:[]},{value:"IN shorthand",id:"in-shorthand",children:[]}]},{value:"NOT operator",id:"not-operator",children:[]},{value:"CASE in WHERE",id:"case-in-where",children:[]}],c={rightToc:b};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(o.a,{content:"Use WHERE to make your query lean and to the point. Less is more.",mdxType:"LeadText"}),Object(i.b)("p",null,"With just ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"sfmc-sql-select"}),Object(i.b)("inlineCode",{parentName:"a"},"SELECT"))," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"sfmc-sql-from"}),Object(i.b)("inlineCode",{parentName:"a"},"FROM"))," statements, you can already start building your queries. With the addition of ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"sfmc-sql-join"}),Object(i.b)("inlineCode",{parentName:"a"},"JOIN")),", you can do much more than in the Salesforce Marketing Cloud UI. ",Object(i.b)("inlineCode",{parentName:"p"},"WHERE")," grants you even more power by allowing you to filter the outcomes of your queries."),Object(i.b)("p",null,"The concept behind it is straightforward. It takes all the results you obtained with the query above the ",Object(i.b)("inlineCode",{parentName:"p"},"WHERE"),", and for each, it applies one or more conditions. If they evaluate to ",Object(i.b)("inlineCode",{parentName:"p"},"TRUE")," - this particular result will be available in the output Data Extension. If evaluation ends with ",Object(i.b)("inlineCode",{parentName:"p"},"FALSE"),", it will be filtered out."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:"{5} title=\"All subscribers with domain equal to 'mateuszdabrowski.pl'\"","{5}":!0,title:'"All',subscribers:!0,with:!0,domain:!0,equal:!0,to:!0,"'mateuszdabrowski.pl'\"":!0}),"SELECT\n    SubscriberKey,\n    EmailAddress\nFROM _Subscribers\nWHERE Domain = 'mateuszdabrowski.pl'\n")),Object(i.b)("h2",{id:"basic-operators"},"Basic operators"),Object(i.b)("p",null,"In many scenarios, you will be using the basic operators in your ",Object(i.b)("inlineCode",{parentName:"p"},"WHERE")," clauses. In the example above, you already saw the equality operator (",Object(i.b)("inlineCode",{parentName:"p"},"="),"). There are a few more available."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Operator"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"=")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Equal to")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"<>")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Not equal to")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},">")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Greater than")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"<")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Less than")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},">=")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Greater or equal to")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"<=")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Less or equal to")))),Object(i.b)("h3",{id:"equality-operators"},"Equality operators"),Object(i.b)("p",null,"Equality operators (",Object(i.b)("inlineCode",{parentName:"p"},"="),", ",Object(i.b)("inlineCode",{parentName:"p"},"<>"),") are great when you have a controlled value. Think booleans (for example Opt-in information) and picklists (for example Status field on ",Object(i.b)("inlineCode",{parentName:"p"},"_Subscribers")," System Data View that is limited to four values)."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'{5} title="All subscribers that do not have the unsubscribed status"',"{5}":!0,title:'"All',subscribers:!0,that:!0,do:!0,not:!0,have:!0,the:!0,unsubscribed:!0,'status"':!0}),"SELECT\n    SubscriberKey,\n    EmailAddress\nFROM _Subscribers\nWHERE Status <> 'unsubscribed'\n")),Object(i.b)("h3",{id:"comparison-operators"},"Comparison operators"),Object(i.b)("p",null,"Comparison operators (",Object(i.b)("inlineCode",{parentName:"p"},"<"),", ",Object(i.b)("inlineCode",{parentName:"p"},">"),", ",Object(i.b)("inlineCode",{parentName:"p"},">="),", ",Object(i.b)("inlineCode",{parentName:"p"},"<="),") are perfect when you are operating on numbers (for example selecting contacts with low Customer Lifetime Value) or dates."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'{5} title="All subscribers that joined within the last month"',"{5}":!0,title:'"All',subscribers:!0,that:!0,joined:!0,within:!0,the:!0,last:!0,'month"':!0}),"SELECT\n    SubscriberKey,\n    EmailAddress\nFROM _Subscribers\nWHERE CONVERT(DATE, DateJoined) >= DATEADD(MONTH, -1, CONVERT(DATE, GETUTCDATE()))\n")),Object(i.b)("p",null,"With dates, you will frequently want to use a bit more complex structure for the comparison to work correctly. In this case, we are converting the ",Object(i.b)("inlineCode",{parentName:"p"},"DateJoined")," value to simple date (day, month, year without the time). We are also getting a current date in UTC format and convert it to a simple date too. Next, we subtract one month and compare it to the ",Object(i.b)("inlineCode",{parentName:"p"},"DateJoined")," transformed value. I cover more such examples in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"sfmc-sql-functions"}),"SFMC SQL Functions"),"."),Object(i.b)("h2",{id:"like-operator"},"LIKE operator"),Object(i.b)("p",null,"Another handy operator is ",Object(i.b)("inlineCode",{parentName:"p"},"LIKE"),". It allows you to leverage wildcards to search for matching records based on value fragment. Think about filtering with just a part of a text (for example email domain in ",Object(i.b)("inlineCode",{parentName:"p"},"EmailAddress")," field) or with a single element within multi picklist (for instance finding one value within the comma-separated list of all purchased products)."),Object(i.b)("p",null,"To use ",Object(i.b)("inlineCode",{parentName:"p"},"LIKE")," operator, you need to leverage at least one of the two available wildcards:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Wildcard"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"%")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Zero, one or more characters")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"_")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Exactly one character")))),Object(i.b)("p",null,"For example, you can search for ",Object(i.b)("inlineCode",{parentName:"p"},"%@mateuszdabrowski.pl")," in ",Object(i.b)("inlineCode",{parentName:"p"},"EmailAddress")," to get all contacts with an email address ending with ",Object(i.b)("inlineCode",{parentName:"p"},"@mateuszdabrowski.pl"),". However, you can change this filter to ",Object(i.b)("inlineCode",{parentName:"p"},"%@mateuszdabrowski%"),". With the second wildcard at the end, it will be looking for any email address that contains ",Object(i.b)("inlineCode",{parentName:"p"},"@mateuszdabrowski")," but may have more text on either side of it. It will capture ",Object(i.b)("inlineCode",{parentName:"p"},"@mateuszdabrowski.pl")," domain just as the previous filter, but also return ",Object(i.b)("inlineCode",{parentName:"p"},"@mateuszdabrowski.com"),", ",Object(i.b)("inlineCode",{parentName:"p"},"@mateuszdabrowski.sfmc.eu")," and other such domains."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'{5} title="All subscribers that have an email address ending with @mateuszdabrowski followed by a two-character top-level domain"',"{5}":!0,title:'"All',subscribers:!0,that:!0,have:!0,an:!0,email:!0,address:!0,ending:!0,with:!0,"@mateuszdabrowski":!0,followed:!0,by:!0,a:!0,"two-character":!0,"top-level":!0,'domain"':!0}),"SELECT\n    SubscriberKey,\n    EmailAddress\nFROM _Subscribers\nWHERE EmailAddress LIKE '%@mateuszdabrowski.__'\n")),Object(i.b)("p",null,"In the marketing automation world, however, ",Object(i.b)("inlineCode",{parentName:"p"},"LIKE")," operator is especially useful for selecting contacts based on the multi picklist columns. Consider ",Object(i.b)("inlineCode",{parentName:"p"},"ActiveSubscriptions")," field that can have any combination of values ",Object(i.b)("inlineCode",{parentName:"p"},"Phone"),", ",Object(i.b)("inlineCode",{parentName:"p"},"TV"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Internet"),"."),Object(i.b)("p",null,"Suppose you would like to select all contacts with active phone subscription. In that case, you shouldn't use ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#equality"}),"equality operator")," (",Object(i.b)("inlineCode",{parentName:"p"},"WHERE ActiveSubscription = 'Phone'"),"), as it would return only contacts that have just this one subscription. Some of your customers might, however, have multiple (phone and tv or phone and internet plans). For SQL, a field containing ",Object(i.b)("inlineCode",{parentName:"p"},"'Phone'")," is not equal with the one having a value of ",Object(i.b)("inlineCode",{parentName:"p"},"'Phone', Internet'"),". ",Object(i.b)("inlineCode",{parentName:"p"},"LIKE")," operator is here to save the day."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'{5} title="All subscribers that have at least Phone subscription"',"{5}":!0,title:'"All',subscribers:!0,that:!0,have:!0,at:!0,least:!0,Phone:!0,'subscription"':!0}),"SELECT\n    SubscriberKey,\n    EmailAddress\nFROM MasterSubscriberDE\nWHERE ActiveSubscription LIKE '%Phone%'\n")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"You Should Know")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Always be sure to check whether you apply the wildcards correctly. Popular error is to have either too narrow or too wide scope of your filter. A common issue is lack of ",Object(i.b)("inlineCode",{parentName:"p"},"%")," operator in the end or beginning of the searched string. For your query, it means that the value should end there."),Object(i.b)("p",{parentName:"div"},"For example ",Object(i.b)("inlineCode",{parentName:"p"},"WHERE EmailAddress LIKE '%@gmail'")," should provide you zero results, as it would be looking for any address ending with ",Object(i.b)("inlineCode",{parentName:"p"},"@gmail")," - without any top-level domain like ",Object(i.b)("inlineCode",{parentName:"p"},".com"),"."))),Object(i.b)("h2",{id:"logical-operators"},"Logical operators"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"WHERE")," statement supports standard logical operators - ",Object(i.b)("inlineCode",{parentName:"p"},"AND")," & ",Object(i.b)("inlineCode",{parentName:"p"},"OR"),"."),Object(i.b)("p",null,"They allow you to create more fine-tuned filters evaluating either multiple values or a single value from various points of view. You can use as many ",Object(i.b)("inlineCode",{parentName:"p"},"AND"),"s and ",Object(i.b)("inlineCode",{parentName:"p"},"OR"),"s as you want, but keep in mind the AutoKill 30 minute limit for query execution."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'{5-7} title="All subscribers that have at least Phone subscription AND are in its twelfth month"',"{5-7}":!0,title:'"All',subscribers:!0,that:!0,have:!0,at:!0,least:!0,Phone:!0,subscription:!0,AND:!0,are:!0,in:!0,its:!0,twelfth:!0,'month"':!0}),"SELECT\n    SubscriberKey,\n    EmailAddress\nFROM MasterSubscriberDE\nWHERE ActiveSubscription LIKE '%Phone%'\n    AND CONVERT(DATE, SubscriptionStart) >= DATEADD(MONTH, -12, CONVERT(DATE, GETUTCDATE()))\n    AND CONVERT(DATE, SubscriptionStart) < DATEADD(MONTH, -11, CONVERT(DATE, GETUTCDATE()))\n")),Object(i.b)("p",null,"The standard order of execution is evaluating the pairs joined by ",Object(i.b)("inlineCode",{parentName:"p"},"AND")," first and then considering the ones with ",Object(i.b)("inlineCode",{parentName:"p"},"OR"),". But you can use parentheses ",Object(i.b)("inlineCode",{parentName:"p"},"()")," to enforce your order:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'{5} title="All subscribers that have at least either Phone OR Internet subscription AND are in its twelfth month"',"{5}":!0,title:'"All',subscribers:!0,that:!0,have:!0,at:!0,least:!0,either:!0,Phone:!0,OR:!0,Internet:!0,subscription:!0,AND:!0,are:!0,in:!0,its:!0,twelfth:!0,'month"':!0}),"SELECT\n    SubscriberKey,\n    EmailAddress\nFROM MasterSubscriberDE\nWHERE (ActiveSubscription LIKE '%Phone%' OR ActiveSubscription LIKE '%Internet%')\n    AND CONVERT(DATE, SubscriptionStart) >= DATEADD(MONTH, -12, CONVERT(DATE, GETUTCDATE()))\n    AND CONVERT(DATE, SubscriptionStart) < DATEADD(MONTH, -11, CONVERT(DATE, GETUTCDATE()))\n")),Object(i.b)("p",null,"There are many use cases for using ",Object(i.b)("inlineCode",{parentName:"p"},"AND")," or ",Object(i.b)("inlineCode",{parentName:"p"},"OR"),". The most popular ones are filtering by range (numerical or date-based) and capturing records fulfilling at least one of multiple criteria. For both, there is an optional shorthand."),Object(i.b)("h3",{id:"between-shorthand"},"BETWEEN shorthand"),Object(i.b)("p",null,"Whenever you want to work on ranges, instead of binding ",Object(i.b)("inlineCode",{parentName:"p"},">=")," & ",Object(i.b)("inlineCode",{parentName:"p"},"<=")," scopes (closed range) with ",Object(i.b)("inlineCode",{parentName:"p"},"AND"),", you can leverage ",Object(i.b)("inlineCode",{parentName:"p"},"BETWEEN")," statement."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:"{6-8}","{6-8}":!0}),"SELECT\n    SubscriberKey,\n    EmailAddress\nFROM MasterSubscriberDE\nWHERE (ActiveSubscription LIKE '%Phone%' OR ActiveSubscription LIKE '%Internet%')\n    AND CONVERT(DATE, SubscriptionStart)\n        BETWEEN DATEADD(MONTH, -12, CONVERT(DATE, GETUTCDATE()))\n        AND DATEADD(MONTH, -11, CONVERT(DATE, GETUTCDATE()))\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"BETWEEN")," is replacing only a range greater or equal to the first value and smaller or equal to the second value. Additionally, it behaves weird when working with dates or datetime values."),Object(i.b)("p",null,"For example: ",Object(i.b)("inlineCode",{parentName:"p"},'WHERE Date BETWEEN "01/01/2020" AND "31/01/2020"')," will work as if you wrote ",Object(i.b)("inlineCode",{parentName:"p"},'WHERE Date >= "01/01/2020 00:00:00" AND Date <= "31/01/2020 00:00:00"'),". It would result in a lack of data for the last day of the range. In most cases you would rather want ",Object(i.b)("inlineCode",{parentName:"p"},'WHERE Date >= "01/01/2020 00:00:00" AND Date <= "31/01/2020 23:59:59"'),"."),Object(i.b)("p",null,"Due to the above, I recommended to not use ",Object(i.b)("inlineCode",{parentName:"p"},"BETWEEN")," statement, unless you are sure the range is correct."),Object(i.b)("h3",{id:"in-shorthand"},"IN shorthand"),Object(i.b)("p",null,"There is another shorthand available - the ",Object(i.b)("inlineCode",{parentName:"p"},"IN")," statement. And it is much more interesting than the ",Object(i.b)("inlineCode",{parentName:"p"},"BETWEEN"),"."),Object(i.b)("p",null,"It allows you to simplify ",Object(i.b)("inlineCode",{parentName:"p"},"WHERE")," statement with multiple ",Object(i.b)("inlineCode",{parentName:"p"},"OR")," operators (like ",Object(i.b)("inlineCode",{parentName:"p"},"WHERE Status = 'held' OR Status = 'unsubscribed' OR Status = 'bounced'"),") by using a list of searched values:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'{5} title="All subscribers with the unsubscribed, bounced or temporarily held status"',"{5}":!0,title:'"All',subscribers:!0,with:!0,the:!0,"unsubscribed,":!0,bounced:!0,or:!0,temporarily:!0,held:!0,'status"':!0}),"SELECT\n    SubscriberKey,\n    EmailAddress\nFROM _Subscribers\nWHERE Status IN ('held', 'unsubscribed', 'bounced')\n")),Object(i.b)("p",null,"As you can see above, the syntax is much shorter and more readable."),Object(i.b)("p",null,"But the beauty of ",Object(i.b)("inlineCode",{parentName:"p"},"IN")," statement doesn't end there. It additionally optimizes the search speed by sorting the data and performing the binary search. Thanks to it, using ",Object(i.b)("inlineCode",{parentName:"p"},"IN")," instead of multiple ",Object(i.b)("inlineCode",{parentName:"p"},"OR"),"s can lead to significant performance improvements."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"You Should Know")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Unfortunately, you cannot use ",Object(i.b)("inlineCode",{parentName:"p"},"IN")," statement together with ",Object(i.b)("inlineCode",{parentName:"p"},"LIKE")," statement. For such use case, you need to use one or more ",Object(i.b)("inlineCode",{parentName:"p"},"OR")," operators."))),Object(i.b)("h2",{id:"not-operator"},"NOT operator"),Object(i.b)("p",null,"Sometimes you want to rather exclude some records instead of searching for them. In many cases, it can be done by just adjusting the operators (for example ",Object(i.b)("inlineCode",{parentName:"p"},"<>")," instead of ",Object(i.b)("inlineCode",{parentName:"p"},"="),"). There are, however, some situations where the ",Object(i.b)("inlineCode",{parentName:"p"},"NOT")," operator is the best tool for the job."),Object(i.b)("p",null,"It is especially apparent when working with ",Object(i.b)("inlineCode",{parentName:"p"},"LIKE"),", ",Object(i.b)("inlineCode",{parentName:"p"},"BETWEEN"),", ",Object(i.b)("inlineCode",{parentName:"p"},"IN")," and ",Object(i.b)("inlineCode",{parentName:"p"},"EXISTS")," operators."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'{5} title="All subscribers NOT with unsubscribed, bounced or temporarily held status"',"{5}":!0,title:'"All',subscribers:!0,NOT:!0,with:!0,"unsubscribed,":!0,bounced:!0,or:!0,temporarily:!0,held:!0,'status"':!0}),"SELECT\n    SubscriberKey,\n    EmailAddress\nFROM _Subscribers\nWHERE Status NOT IN ('held', 'unsubscribed', 'bounced')\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'{5} title="All subscribers that have email address NOT ending with @mateuszdabrowski.pl"',"{5}":!0,title:'"All',subscribers:!0,that:!0,have:!0,email:!0,address:!0,NOT:!0,ending:!0,with:!0,'@mateuszdabrowski.pl"':!0}),"SELECT\n    SubscriberKey,\n    EmailAddress\nFROM _Subscribers\nWHERE EmailAddress NOT LIKE '%@mateuszdabrowski.pl'\n")),Object(i.b)("h2",{id:"case-in-where"},"CASE in WHERE"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"CASE")," statement is not only useful in a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"sfmc-sql-select#conditions"}),Object(i.b)("inlineCode",{parentName:"a"},"SELECT"))," part of the query. You can use it also within the ",Object(i.b)("inlineCode",{parentName:"p"},"WHERE"),". There are two approaches to do this."),Object(i.b)("p",null,"The first compare ",Object(i.b)("inlineCode",{parentName:"p"},"1")," to the outcome of the ",Object(i.b)("inlineCode",{parentName:"p"},"CASE")," statement that evaluates each of its conditions to either ",Object(i.b)("inlineCode",{parentName:"p"},"1")," or ",Object(i.b)("inlineCode",{parentName:"p"},"0"),". If the comparison evaluates to ",Object(i.b)("inlineCode",{parentName:"p"},"WHERE 1 = 1")," it will resolve to ",Object(i.b)("inlineCode",{parentName:"p"},"TRUE")," and therefore return the result."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'{5-10} title="All subscribers NOT with unsubscribed, bounced or temporarily held status"',"{5-10}":!0,title:'"All',subscribers:!0,NOT:!0,with:!0,"unsubscribed,":!0,bounced:!0,or:!0,temporarily:!0,held:!0,'status"':!0}),"SELECT\n    SubscriberKey,\n    EmailAddress\nFROM _Subscribers\nWHERE 1 = CASE Status\n    WHEN 'active' THEN 1\n    WHEN 'held' THEN 0\n    WHEN 'unsubscribed' THEN 0\n    WHEN 'bounced' THEN 0\n    END\n")),Object(i.b)("p",null,"It works, but in most cases, you can write it better with other means mentioned above. This query was previously written with single-line ",Object(i.b)("inlineCode",{parentName:"p"},"WHERE")," utilizing ",Object(i.b)("inlineCode",{parentName:"p"},"NOT IN")," statement."),Object(i.b)("p",null,"The second approach compares a value to the ",Object(i.b)("inlineCode",{parentName:"p"},"CASE")," statement and is much more useful:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'{5-8} title="All subscribers that have EmailAddress different from the Preferred Email"',"{5-8}":!0,title:'"All',subscribers:!0,that:!0,have:!0,EmailAddress:!0,different:!0,from:!0,the:!0,Preferred:!0,'Email"':!0}),"SELECT\n    SubscriberKey,\n    EmailAddress\nFROM MasterSubscriberDE\nWHERE EmailAddress <> CASE\n    WHEN PreferredEmail = 'Personal Email' THEN PersonalEmail\n    WHEN PreferredEmail = 'Work Email' THEN WorkEmail\n    END\n")),Object(i.b)("p",null,"It still can be written using multiple ",Object(i.b)("inlineCode",{parentName:"p"},"AND")," & ",Object(i.b)("inlineCode",{parentName:"p"},"OR")," statements, but thanks to the ",Object(i.b)("inlineCode",{parentName:"p"},"CASE")," statement, it is shorter and more readable."))}p.isMDXComponent=!0},91:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),c=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),p=c(a),u=n,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||i;return a?r.a.createElement(m,l(l({ref:t},b),{},{components:a})):r.a.createElement(m,l({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var b=2;b<i;b++)o[b]=a[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},92:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(0),r=a.n(n),i=a(48),o=a.n(i);const l=({content:e})=>r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{id:o.a.leadText},e))}}]);