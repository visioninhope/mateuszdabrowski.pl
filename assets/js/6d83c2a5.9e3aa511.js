(self.webpackChunkmd=self.webpackChunkmd||[]).push([[673],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),p=r,h=u["".concat(s,".").concat(p)]||u[p]||m[p]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8921:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var a=n(7294),r=n(6010),i="tableOfContentsInline_3fWc";function o(e){var t=e.toc,n=e.isChild;return t.length?a.createElement("ul",{className:n?"":"table-of-contents"},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(o,{isChild:!0,toc:e.children}))}))):null}var l=function(e){var t=e.toc;return a.createElement("div",{className:(0,r.Z)(i)},a.createElement(o,{toc:t}))}},8448:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},2168:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(7294),r=n(50),i=n(6010),o="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,d=39;var c=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,m=e.values,u=e.groupId,p=e.className,h=(0,r.Z)(),E=h.tabGroupChoices,k=h.setTabGroupChoices,N=(0,a.useState)(c),b=N[0],f=N[1],g=a.Children.toArray(e.children),w=[];if(null!=u){var v=E[u];null!=v&&v!==b&&m.some((function(e){return e.value===v}))&&f(v)}var y=function(e){var t=e.currentTarget,n=w.indexOf(t),a=m[n].value;f(a),null!=u&&(k(u,a),setTimeout((function(){var e,n,a,r,i,o,s,d;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,s=o.innerHeight,d=o.innerWidth,n>=0&&i<=d&&r<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case d:var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case s:var r=w.indexOf(e.target)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},p)},m.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":b===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:C,onFocus:y,onClick:y},n)}))),t?(0,a.cloneElement)(g.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},2713:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},50:function(e,t,n){"use strict";var a=n(7294),r=n(2713);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},2043:function(e,t,n){"use strict";n.d(t,{m:function(){return i}});var a=n(7294),r="leadText_16va",i=function(e){var t=e.content;return a.createElement(a.Fragment,null,a.createElement("p",{id:r},t))}},2409:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return m},toc:function(){return u},default:function(){return h}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=n(2168),l=n(8448),s=n(8921),d=n(2043),c={id:"sfmc-sql-like",title:"SFMC SQL Like",sidebar_label:"Like",description:"Get a LIKE and build more flexible SQL queries"},m={unversionedId:"sql/sfmc-sql-like",id:"sql/sfmc-sql-like",isDocsHomePage:!1,title:"SFMC SQL Like",description:"Get a LIKE and build more flexible SQL queries",source:"@site/docs/sql/sfmc-sql-like.mdx",sourceDirName:"sql",slug:"/sql/sfmc-sql-like",permalink:"/docs/sql/sfmc-sql-like",editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/docs/sql/sfmc-sql-like.mdx",version:"current",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1616624113,formattedLastUpdatedAt:"3/24/2021",sidebar_label:"Like",frontMatter:{id:"sfmc-sql-like",title:"SFMC SQL Like",sidebar_label:"Like",description:"Get a LIKE and build more flexible SQL queries"},sidebar:"snippets",previous:{title:"SFMC SQL Where",permalink:"/docs/sql/sfmc-sql-where"},next:{title:"SFMC SQL String Functions",permalink:"/docs/sql/sfmc-sql-string-functions"}},u=[{value:"LIKE with Wildcard",id:"like-with-wildcard",children:[{value:"% Wildcard",id:"-wildcard",children:[]},{value:"_ Wildcard",id:"_-wildcard",children:[]}]},{value:"LIKE with Group",id:"like-with-group",children:[{value:"[] Operator",id:"-operator",children:[]},{value:"- Operator",id:"--operator",children:[]},{value:"^ Operator",id:"-operator-1",children:[]}]},{value:"NOT LIKE",id:"not-like",children:[]}],p={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(d.m,{content:"Get a LIKE and build more flexible SQL queries",mdxType:"LeadText"}),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Table of Contents")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)(s.Z,{toc:u,mdxType:"TOCInline"}))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"LIKE")," operator allows you to leverage wildcards and groups to search for matching records based on value fragment. You may use it in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-select#like-in-case"},(0,i.kt)("inlineCode",{parentName:"a"},"SELECT CASE"))," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-where"},(0,i.kt)("inlineCode",{parentName:"a"},"WHERE"))," statements."),(0,i.kt)("p",null,"In ",(0,i.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-select#like-in-case"},(0,i.kt)("inlineCode",{parentName:"a"},"SELECT")),", think about normalizing and categorizing data. In ",(0,i.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-where"},(0,i.kt)("inlineCode",{parentName:"a"},"WHERE"))," - about filtering with just a part of the value (for example email domain in ",(0,i.kt)("inlineCode",{parentName:"p"},"EmailAddress")," field) or with a single element of multi picklist (for instance finding one value within the comma-separated list of all purchased products)."),(0,i.kt)("p",null,"There are two levels of ",(0,i.kt)("inlineCode",{parentName:"p"},"LIKE")," usage. First is focused on two essential character wildcards and is very straightforward \u2014 the second use full potential of group operator. Let's go through both with practical examples."),(0,i.kt)("h2",{id:"like-with-wildcard"},"LIKE with Wildcard"),(0,i.kt)("p",null,"Wildcards available in ",(0,i.kt)("inlineCode",{parentName:"p"},"LIKE"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Wildcard"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"%")),(0,i.kt)("td",{parentName:"tr",align:null},"Zero, one or more characters")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"_")),(0,i.kt)("td",{parentName:"tr",align:null},"Exactly one character")))),(0,i.kt)("h3",{id:"-wildcard"},"% Wildcard"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"%")," symbol allows you to match zero, one or more characters within your ",(0,i.kt)("inlineCode",{parentName:"p"},"LIKE")," search."),(0,i.kt)("p",null,"For example, you can search for ",(0,i.kt)("inlineCode",{parentName:"p"},"%@mateuszdabrowski.pl")," domain in ",(0,i.kt)("inlineCode",{parentName:"p"},"EmailAddress")," to get all contacts with an email address ending with ",(0,i.kt)("inlineCode",{parentName:"p"},"@mateuszdabrowski.pl"),"."),(0,i.kt)("p",null,"You can change this filter to ",(0,i.kt)("inlineCode",{parentName:"p"},"%@mateuszdabrowski.%"),". With the second wildcard at the end, it will be looking for any email address that contains ",(0,i.kt)("inlineCode",{parentName:"p"},"@mateuszdabrowski.")," but may have more text on either side of it. It will capture all emails ending with ",(0,i.kt)("inlineCode",{parentName:"p"},"@mateuszdabrowski.pl")," domain just as the previous filter, but also match those with ",(0,i.kt)("inlineCode",{parentName:"p"},"@mateuszdabrowski.com"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"@mateuszdabrowski.sfmc.eu")," and other top-level domains."),(0,i.kt)(o.Z,{defaultValue:"where",values:[{label:"WHERE",value:"where"},{label:"SELECT",value:"select"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"where",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:"{4} title=\"All subscribers that have an email address ending with 'mateuszdabrowski.pl' domain\"","{4}":!0,title:'"All',subscribers:!0,that:!0,have:!0,an:!0,email:!0,address:!0,ending:!0,with:!0,"'mateuszdabrowski.pl'":!0,'domain"':!0},"SELECT\n      SubscriberKey\n    , EmailAddress\n  FROM _Subscribers\n WHERE EmailAddress LIKE '%@%mateuszdabrowski.pl'\n")),(0,i.kt)("p",null,"In the above example, I used two wildcards - one before and one just after ",(0,i.kt)("inlineCode",{parentName:"p"},"@")," symbol. It allows not only to catch contacts in ",(0,i.kt)("inlineCode",{parentName:"p"},"@mateuszdabrowski.pl")," domain, but also any subdomain, like ",(0,i.kt)("inlineCode",{parentName:"p"},"@dev.mateuszdabrowski.pl"),"."),(0,i.kt)("p",null,"In the marketing automation world, however, ",(0,i.kt)("inlineCode",{parentName:"p"},"LIKE")," operator is especially useful for selecting contacts based on the multi picklist columns. Consider ",(0,i.kt)("inlineCode",{parentName:"p"},"ActiveSubscriptions")," field that can have any combination of values ",(0,i.kt)("inlineCode",{parentName:"p"},"Phone"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"TV"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Internet"),"."),(0,i.kt)("p",null,"Suppose you would like to select all contacts with active phone subscription. In that case, you shouldn't use ",(0,i.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-where#equality"},"equality operator")," (",(0,i.kt)("inlineCode",{parentName:"p"},"WHERE ActiveSubscription = 'Phone'"),"), as it would return only contacts that have just this one subscription. Some of your customers might, however, have multiple (phone and tv or phone and internet plans). For SQL, a field containing ",(0,i.kt)("inlineCode",{parentName:"p"},"'Phone'")," is not equal with the one having a value of ",(0,i.kt)("inlineCode",{parentName:"p"},"'Phone', Internet'"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"LIKE")," operator is here to save the day."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{5} title="All subscribers that have at least Phone subscription"',"{5}":!0,title:'"All',subscribers:!0,that:!0,have:!0,at:!0,least:!0,Phone:!0,'subscription"':!0},"SELECT\n      SubscriberKey\n    , EmailAddress\nFROM MasterSubscriberDE\nWHERE ActiveSubscription LIKE '%Phone%'\n"))),(0,i.kt)(l.Z,{value:"select",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{4} title="Categorize your database into either Internal or External records based on email domain"',"{4}":!0,title:'"Categorize',your:!0,database:!0,into:!0,either:!0,Internal:!0,or:!0,External:!0,records:!0,based:!0,on:!0,email:!0,'domain"':!0},"SELECT\n      SubscriberKey\n    , CASE\n        WHEN EmailAddress LIKE '%@%mateuszdabrowski.pl' THEN 'Internal'\n        ELSE 'External'\n      END AS ContactType\nFROM _Subscribers\n")),(0,i.kt)("p",null,"In the above example, I used two wildcards - one before and one just after ",(0,i.kt)("inlineCode",{parentName:"p"},"@")," symbol. It allows not only to catch contacts in ",(0,i.kt)("inlineCode",{parentName:"p"},"@mateuszdabrowski.pl")," domain, but also any subdomain, like ",(0,i.kt)("inlineCode",{parentName:"p"},"@dev.mateuszdabrowski.pl"),"."))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"You Should Know")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Always be sure to check whether you apply the wildcards correctly. Popular error is to have either too narrow or too wide scope of your filter. A common issue is lack of ",(0,i.kt)("inlineCode",{parentName:"p"},"%")," operator in the end or beginning of the searched string. For your query, it means that the value should end there."),(0,i.kt)("p",{parentName:"div"},"For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"WHERE EmailAddress LIKE '@gmail.com'")," should provide you zero results, as it would be looking for precisely the ",(0,i.kt)("inlineCode",{parentName:"p"},"@gmail.com")," value in the ",(0,i.kt)("inlineCode",{parentName:"p"},"EmailAddress")," field - without any characters before the ",(0,i.kt)("inlineCode",{parentName:"p"},"@")," symbol."))),(0,i.kt)("h3",{id:"_-wildcard"},"_ Wildcard"),(0,i.kt)("p",null,"Another wildcard working with ",(0,i.kt)("inlineCode",{parentName:"p"},"LIKE")," is the underscore ",(0,i.kt)("inlineCode",{parentName:"p"},"_"),". It is much simpler as all it does it pretending to be any single character."),(0,i.kt)("p",null,"Let's consider a scenario, where you have a multi picklist field containing comma-separated product IDs. For example, a customer with three recommended products might have a value ",(0,i.kt)("inlineCode",{parentName:"p"},"1,14,27"),". The system codes single digit values to subscriptions, and two-digit codes to various product categories. Let's use it in the query."),(0,i.kt)(o.Z,{defaultValue:"where",values:[{label:"WHERE",value:"where"},{label:"SELECT",value:"select"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"where",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{6-10} title="All subscribers with at least one subscription product in their recommendations"',"{6-10}":!0,title:'"All',subscribers:!0,with:!0,at:!0,least:!0,one:!0,subscription:!0,product:!0,in:!0,their:!0,'recommendations"':!0},"SELECT\n      SubscriberKey\n    , EmailAddress\n    , RecommendedProducts\nFROM EcommerceUpsellDE\nWHERE\n    RecommendedProducts  LIKE '_'\n    OR RecommendedProducts LIKE '_,%'\n    OR RecommendedProducts LIKE '%,_,%'\n    OR RecommendedProducts LIKE '%,_'\n")),(0,i.kt)("p",null,"In the query above, we are filtering our database with ",(0,i.kt)("inlineCode",{parentName:"p"},"RecommendedProducts")," field. To add a contact to our segment, in four steps, we check if at least one condition is true:")),(0,i.kt)(l.Z,{value:"select",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{5-8} title="Create boolean field from a multipicklist one to split database on recommendation type"',"{5-8}":!0,title:'"Create',boolean:!0,field:!0,from:!0,a:!0,multipicklist:!0,one:!0,to:!0,split:!0,database:!0,on:!0,recommendation:!0,'type"':!0},"SELECT\n      SubscriberKey\n    , EmailAddress\n    , CASE\n        WHEN RecommendedProducts LIKE '_'     THEN 'True'\n        WHEN RecommendedProducts LIKE '_,%'   THEN 'True'\n        WHEN RecommendedProducts LIKE '%,_,%' THEN 'True'\n        WHEN RecommendedProducts LIKE '_,%'   THEN 'True'\n        ELSE 'False'\n      END AS IsSubscriptionRecommended\nFROM EcommerceUpsellDE\n")),(0,i.kt)("p",null,"In the query above, we are creating new boolean field that will tell us whether the contact has at least one subscription product in their recommended lists. Great for personalized communication emphasizing this recommendation. We do this by assigning value ",(0,i.kt)("inlineCode",{parentName:"p"},"True")," if at least one of four steps evaluates to true:"))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"If the record has exactly one recommended product that has a single-digit code (subscription)"),(0,i.kt)("li",{parentName:"ol"},"If the record has multiple recommended products and the first one is a single-digit (subscription)"),(0,i.kt)("li",{parentName:"ol"},"If the record has multiple recommended products and one in the middle is a single-digit (subscription)"),(0,i.kt)("li",{parentName:"ol"},"If the record has multiple recommended products and the last one is a single-digit (subscription)")),(0,i.kt)("h2",{id:"like-with-group"},"LIKE with Group"),(0,i.kt)("p",null,"There is also a group operator ",(0,i.kt)("inlineCode",{parentName:"p"},"[]")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"LIKE")," statements. It allows you to create even more complex conditions:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Advanced Operator"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"[]")),(0,i.kt)("td",{parentName:"tr",align:null},"Any single character from the list specified inside")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-")),(0,i.kt)("td",{parentName:"tr",align:null},"Range operator for ",(0,i.kt)("inlineCode",{parentName:"td"},"[]"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"^")),(0,i.kt)("td",{parentName:"tr",align:null},"Exclusion operator for ",(0,i.kt)("inlineCode",{parentName:"td"},"[]"))))),(0,i.kt)("h3",{id:"-operator"},"[] Operator"),(0,i.kt)("p",null,"The group operator ",(0,i.kt)("inlineCode",{parentName:"p"},"[]")," allows you to provide a list of characters that you want to find a match."),(0,i.kt)("p",null,"Consider the previous example with a field containing multiple IDs of your subscription and standard products. The field stores subscriptions in the form of single-digit product IDs. First four IDs are related to Premium subscriptions. IDs from 5 to 9 are Standard subscriptions."),(0,i.kt)(o.Z,{defaultValue:"where",values:[{label:"WHERE",value:"where"},{label:"SELECT",value:"select"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"where",mdxType:"TabItem"},(0,i.kt)("p",null,"If we would like to output only the Premium subscriptions, we would have to create a separate filter for each ID."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",16:!0,className:"language-sql",metastring:'{6-15} title="This approach would require 16 lines to cover the use case"',"{6-15}":!0,title:'"This',approach:!0,would:!0,require:!0,lines:!0,to:!0,cover:!0,the:!0,use:!0,'case"':!0},"SELECT\n      SubscriberKey\n    , EmailAddress\n    , RecommendedProducts\nFROM EcommerceUpsellDE\nWHERE\n    RecommendedProducts  LIKE '1'\n    OR RecommendedProducts LIKE '1,%'\n    OR RecommendedProducts LIKE '%,1,%'\n    OR RecommendedProducts LIKE '%,1'\n    OR RecommendedProducts LIKE '2'\n    OR RecommendedProducts LIKE '2,%'\n    OR RecommendedProducts LIKE '%,2,%'\n    OR RecommendedProducts LIKE '%,2'\n    ...\n")),(0,i.kt)("p",null,"With a group, we can optimize it \u2014 a lot."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",4:!0,className:"language-sql",metastring:'{6-10} title="Same outcome with just 4 lines"',"{6-10}":!0,title:'"Same',outcome:!0,with:!0,just:!0,'lines"':!0},"SELECT\n      SubscriberKey\n    , EmailAddress\n    , RecommendedProducts\nFROM EcommerceUpsellDE\nWHERE\n    RecommendedProducts  LIKE '[1234]'\n    OR RecommendedProducts LIKE '[1234],%'\n    OR RecommendedProducts LIKE '%,[1234],%'\n    OR RecommendedProducts LIKE '%,[1234]'\n"))),(0,i.kt)(l.Z,{value:"select",mdxType:"TabItem"},(0,i.kt)("p",null,"If we would like to categorize them using Wildcards, we would have to create a separate WHEN for each ID."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",36:!0,className:"language-sql",metastring:'{5-14} title="This approach would require 36 WHEN/THEN lines to cover the use case"',"{5-14}":!0,title:'"This',approach:!0,would:!0,require:!0,"WHEN/THEN":!0,lines:!0,to:!0,cover:!0,the:!0,use:!0,'case"':!0},"SELECT\n      SubscriberKey\n    , EmailAddress\n    , CASE\n        WHEN RecommendedProducts LIKE '1'     THEN 'Premium'\n        WHEN RecommendedProducts LIKE '1,%'   THEN 'Premium'\n        WHEN RecommendedProducts LIKE '%,1,%' THEN 'Premium'\n        WHEN RecommendedProducts LIKE '1,%'   THEN 'Premium'\n        WHEN RecommendedProducts LIKE '2'     THEN 'Premium'\n        WHEN RecommendedProducts LIKE '2,%'   THEN 'Premium'\n        ...\n        WHEN RecommendedProducts LIKE '5'     THEN 'Standard'\n        WHEN RecommendedProducts LIKE '5,%'   THEN 'Standard'\n        ...\n        ELSE 'No Subscription'\n      END AS RecommendedSubscriptionType\nFROM EcommerceUpsellDE\n")),(0,i.kt)("p",null,"With a group, we can optimize it  \u2014 a lot."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",8:!0,className:"language-sql",metastring:'{5-12} title="Same outcome with just 8 WHEN/THEN lines"',"{5-12}":!0,title:'"Same',outcome:!0,with:!0,just:!0,"WHEN/THEN":!0,'lines"':!0},"SELECT\n      SubscriberKey\n    , EmailAddress\n    , CASE\n        WHEN RecommendedProducts LIKE '[1234]'      THEN 'Premium'\n        WHEN RecommendedProducts LIKE '[1234],%'    THEN 'Premium'\n        WHEN RecommendedProducts LIKE '%,[1234],%'  THEN 'Premium'\n        WHEN RecommendedProducts LIKE '[1234],%'    THEN 'Premium'\n        WHEN RecommendedProducts LIKE '[56789]'     THEN 'Standard'\n        WHEN RecommendedProducts LIKE '[56789],%'   THEN 'Standard'\n        WHEN RecommendedProducts LIKE '%,[56789],%' THEN 'Standard'\n        WHEN RecommendedProducts LIKE '[56789],%'   THEN 'Standard'\n        ELSE 'No Subscription'\n      END AS RecommendedSubscriptionType\nFROM EcommerceUpsellDE\n")))),(0,i.kt)("p",null,"Thanks to the group operator, instead of covering every single case, we can provide all values within the ",(0,i.kt)("inlineCode",{parentName:"p"},"[]"),". Short, clean and readable. And it can get even better."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"You Should Know")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Group wildcard (",(0,i.kt)("inlineCode",{parentName:"p"},"[]"),") is also useful as a way to escape character in the ",(0,i.kt)("inlineCode",{parentName:"p"},"LIKE")," statement. For example, you might want to look for all values, including a per cent sign (",(0,i.kt)("inlineCode",{parentName:"p"},"%"),")."),(0,i.kt)("p",{parentName:"div"},"Writing ",(0,i.kt)("inlineCode",{parentName:"p"},"LIKE '10%'")," is not a good idea, as it would return you all values starting with ",(0,i.kt)("inlineCode",{parentName:"p"},"10")," - as the per cent sign is a wildcard meaning zero, one or more characters. You can, however, obtain what you want by writing:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",1:!0,className:"language-sql",metastring:'{4-5} title="If the client has a discount between 1 and 9%, let\'s bump it up to either 5% or 10%. If he or she has a higher one - leave it as it is. If no discount is available, make it 2%"',"{4-5}":!0,title:'"If',the:!0,client:!0,has:!0,a:!0,discount:!0,between:!0,and:!0,"9%,":!0,"let's":!0,bump:!0,it:!0,up:!0,to:!0,either:!0,"5%":!0,or:!0,"10%.":!0,If:!0,he:!0,she:!0,higher:!0,one:!0,"-":!0,leave:!0,as:!0,"is.":!0,no:!0,is:!0,"available,":!0,make:!0,'2%"':!0},"SELECT\n      ContactKey\n    , CASE\n        WHEN Discount LIKE '[56789][%]' THEN '10%'\n        WHEN Discount LIKE '[01234][%]' THEN '5%'\n        WHEN Discount IS NOT NULL       THEN Discount\n        ELSE '2%'\n      END AS NewDiscount\n")),(0,i.kt)("p",{parentName:"div"},"By wrapping the ",(0,i.kt)("inlineCode",{parentName:"p"},"%")," with the grouping sign ",(0,i.kt)("inlineCode",{parentName:"p"},"[]"),", we are telling SQL to look for exactly the per cent sign. Thanks to it ",(0,i.kt)("inlineCode",{parentName:"p"},"'[1234][%]'")," search will look for ",(0,i.kt)("inlineCode",{parentName:"p"},"1%"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"2%"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"3%")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"4%")," values only."),(0,i.kt)("p",{parentName:"div"},"Same works with ",(0,i.kt)("inlineCode",{parentName:"p"},"_")," wildcard."))),(0,i.kt)("h3",{id:"--operator"},"- Operator"),(0,i.kt)("p",null,"We can simplify more with the use of range operator ",(0,i.kt)("inlineCode",{parentName:"p"},"-"),". Instead of writing each possible character within our group ",(0,i.kt)("inlineCode",{parentName:"p"},"[]")," (it gets awful when we are looking for any letter - lower or uppercase), we can ask for a range:"),(0,i.kt)(o.Z,{defaultValue:"where",values:[{label:"WHERE",value:"where"},{label:"SELECT",value:"select"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"where",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{6-10} title="Now with range operator"',"{6-10}":!0,title:'"Now',with:!0,range:!0,'operator"':!0},"SELECT\n      SubscriberKey\n    , EmailAddress\n    , RecommendedProducts\nFROM EcommerceUpsellDE\nWHERE\n    RecommendedProducts  LIKE '[1-4]'\n    OR RecommendedProducts LIKE '[1-4],%'\n    OR RecommendedProducts LIKE '%,[1-4],%'\n    OR RecommendedProducts LIKE '%,[1-4]'\n"))),(0,i.kt)(l.Z,{value:"select",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{5-12} title="Now with range operator"',"{5-12}":!0,title:'"Now',with:!0,range:!0,'operator"':!0},"SELECT\n      SubscriberKey\n    , EmailAddress\n    , CASE\n        WHEN RecommendedProducts LIKE '[1-4]'     THEN 'Premium'\n        WHEN RecommendedProducts LIKE '[1-4],%'   THEN 'Premium'\n        WHEN RecommendedProducts LIKE '%,[1-4],%' THEN 'Premium'\n        WHEN RecommendedProducts LIKE '[1-4],%'   THEN 'Premium'\n        WHEN RecommendedProducts LIKE '[5-9]'     THEN 'Standard'\n        WHEN RecommendedProducts LIKE '[5-9],%'   THEN 'Standard'\n        WHEN RecommendedProducts LIKE '%,[5-9],%' THEN 'Standard'\n        WHEN RecommendedProducts LIKE '[5-9],%'   THEN 'Standard'\n        ELSE 'No Subscription'\n      END AS RecommendedSubscriptionType\nFROM EcommerceUpsellDE\n")))),(0,i.kt)("p",null,"As you can see, all we need to do, it to put range operator ",(0,i.kt)("inlineCode",{parentName:"p"},"-")," between the first and last value that we want to catch. For alphabetical searches where we want both lowercase and uppercase letters, you will need to write it like this: ",(0,i.kt)("inlineCode",{parentName:"p"},"LIKE '[a-zA-Z]'"),"."),(0,i.kt)("p",null,"If you want to search for a hyphen '-' within a grouping operator that uses a range, add it in the very beginning. ",(0,i.kt)("inlineCode",{parentName:"p"},"LIKE '[-0-9]")," will look for either ",(0,i.kt)("inlineCode",{parentName:"p"},"-")," or any digit."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"You Should Know")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can mix and match groups, ranges and wildcards."),(0,i.kt)("p",{parentName:"div"},"It is an excellent tool to create essential categorization solutions for uncontrolled data. For example, to clean up free text job title coming from web forms."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Simplified Job Title categorization"',title:'"Simplified',Job:!0,Title:!0,'categorization"':!0},"SELECT\n      SubscriberKey\n    , CASE\n        WHEN FreeTextJobTitle LIKE '[Cc]_[Oo]'       THEN 'C-Suite'\n        WHEN FreeTextJobTitle LIKE '%[Mm]anager%'    THEN 'Management'\n        WHEN FreeTextJobTitle LIKE '%[Ss]pecialist%' THEN 'Specialists'\n      END AS CorporateJobTitleGroup\nFROM _Subscriber\n")))),(0,i.kt)("h3",{id:"-operator-1"},"^ Operator"),(0,i.kt)("p",null,"There is one more operator that is sometimes useful - the exclusion operator ",(0,i.kt)("inlineCode",{parentName:"p"},"^"),". Add it to the beginning of your group, and SQL will not look for any of the grouped characters. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"LIKE '[^0-9]'")," will look for any character that is not a digit."),(0,i.kt)("p",null,"This operator is especially useful for the use in ",(0,i.kt)("inlineCode",{parentName:"p"},"WHERE")," statement. Best example? SQL for finding contacts with Subscriber Key not being correct Salesforce ID:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{4} title="Find all records in All Subscribers with Subscriber Key other than Salesforce ID"',"{4}":!0,title:'"Find',all:!0,records:!0,in:!0,All:!0,Subscribers:!0,with:!0,Subscriber:!0,Key:!0,other:!0,than:!0,Salesforce:!0,'ID"':!0},"SELECT SubscriberKey\nFROM _Subscribers\nWHERE\n    SubscriberKey LIKE '%[^a-zA-Z0-9]%'\n    AND LEN(SubscriberKey) != 18\n")),(0,i.kt)("p",null,"This short and straightforward query will look into each SubscriberKey and check whether in there is any character other the letter or digit (case-insensitive) or whether the length is not equal to 18. All such records have incorrect value and are eligible for cleanup or investigation. Perfect for Automation with deletion SSJS script or Verification Activity to alert administrator about issues."),(0,i.kt)("h2",{id:"not-like"},"NOT LIKE"),(0,i.kt)("p",null,"Finally, just as with other statements, you can add ",(0,i.kt)("inlineCode",{parentName:"p"},"NOT")," statement before ",(0,i.kt)("inlineCode",{parentName:"p"},"LIKE")," to search for not matching records:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{4} title="Same query as at the beginning of our CASE journey, but flipped"',"{4}":!0,title:'"Same',query:!0,as:!0,at:!0,the:!0,beginning:!0,of:!0,our:!0,CASE:!0,"journey,":!0,but:!0,'flipped"':!0},"SELECT\n      ContactKey\n    , CASE\n        WHEN EmailAddress NOT LIKE '%@mateuszdabrowski.pl' THEN 'External'\n        ELSE 'Internal'\n      END AS ContactType\n")))}h.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);