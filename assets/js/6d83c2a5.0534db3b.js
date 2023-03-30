"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[4134],{4137:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(a),p=r,h=c["".concat(s,".").concat(p)]||c[p]||m[p]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},425:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:a},t)}},3992:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),r=a(7294),o=a(6010),i=a(2957),l=a(6550),s=a(5238),d=a(3609),u=a(2560);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function E(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,d]=h({queryString:a,groupId:n}),[c,E]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),b=(()=>{const e=s??c;return p({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),E(e)}),[d,E,o]),tabValues:o}}var b=a(1048);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function N(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:d}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=d[a].value;n!==l&&(c(t),s(n))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},d.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:m},i,{className:(0,o.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function f(e){const t=E(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},r.createElement(N,(0,n.Z)({},e,t)),r.createElement(g,(0,n.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return r.createElement(f,(0,n.Z)({key:String(t)},e))}},1872:(e,t,a)=>{a.d(t,{m:()=>o});var n=a(7294);const r="leadText_qzwo",o=e=>{let{content:t}=e;return n.createElement(n.Fragment,null,n.createElement("p",{id:r},t))}},4183:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>E,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var n=a(7462),r=(a(7294),a(4137)),o=a(3992),i=a(425),l=a(1872);const s={id:"sfmc-sql-like",title:"SFMC SQL Like",sidebar_label:"Like",description:"Get a LIKE and build more flexible SQL queries.",image:"img/og/og-image-sql-like.png",tags:["Marketing Cloud","SQL"]},d=void 0,u={unversionedId:"sql/sfmc-sql-like",id:"sql/sfmc-sql-like",title:"SFMC SQL Like",description:"Get a LIKE and build more flexible SQL queries.",source:"@site/docs/sql/sfmc-sql-like.mdx",sourceDirName:"sql",slug:"/sql/sfmc-sql-like",permalink:"/docs/sql/sfmc-sql-like",draft:!1,editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/docs/sql/sfmc-sql-like.mdx",tags:[{label:"Marketing Cloud",permalink:"/docs/tags/marketing-cloud"},{label:"SQL",permalink:"/docs/tags/sql"}],version:"current",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1672788479,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{id:"sfmc-sql-like",title:"SFMC SQL Like",sidebar_label:"Like",description:"Get a LIKE and build more flexible SQL queries.",image:"img/og/og-image-sql-like.png",tags:["Marketing Cloud","SQL"]},sidebar:"docs",previous:{title:"Case",permalink:"/docs/sql/sfmc-sql-case"},next:{title:"String Functions",permalink:"/docs/sql/sfmc-sql-string-functions"}},c={},m=[{value:"LIKE with Wildcard",id:"like-with-wildcard",level:2},{value:"% Wildcard",id:"-wildcard",level:3},{value:"_ Wildcard",id:"_-wildcard",level:3},{value:"LIKE with Group",id:"like-with-group",level:2},{value:"[] Operator",id:"-operator",level:3},{value:"- Operator",id:"--operator",level:3},{value:"^ Operator",id:"-operator-1",level:3},{value:"NOT LIKE",id:"not-like",level:2}],p={toc:m},h="wrapper";function E(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.m,{content:"Get a LIKE and build more flexible SQL queries.",mdxType:"LeadText"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"LIKE")," operator allows you to leverage wildcards and groups to search for matching records based on value fragment. You may use it in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-case#like-in-case"},(0,r.kt)("inlineCode",{parentName:"a"},"SELECT CASE"))," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-where#like-operator"},(0,r.kt)("inlineCode",{parentName:"a"},"WHERE"))," statements."),(0,r.kt)("p",null,"In ",(0,r.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-case#like-in-case"},(0,r.kt)("inlineCode",{parentName:"a"},"SELECT")),", think about normalizing and categorizing data. In ",(0,r.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-where#like-operator"},(0,r.kt)("inlineCode",{parentName:"a"},"WHERE"))," - about filtering with just a part of the value (for example email domain in ",(0,r.kt)("inlineCode",{parentName:"p"},"EmailAddress")," field) or with a single element of multi picklist (for instance finding one value within the comma-separated list of all purchased products)."),(0,r.kt)("p",null,"There are two levels of ",(0,r.kt)("inlineCode",{parentName:"p"},"LIKE")," usage. First is focused on two essential character wildcards and is very straightforward \u2014 the second use full potential of group operator. Let's go through both with practical examples."),(0,r.kt)("h2",{id:"like-with-wildcard"},"LIKE with Wildcard"),(0,r.kt)("p",null,"Wildcards available in ",(0,r.kt)("inlineCode",{parentName:"p"},"LIKE"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Wildcard"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%")),(0,r.kt)("td",{parentName:"tr",align:null},"Zero, one or more characters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_")),(0,r.kt)("td",{parentName:"tr",align:null},"Exactly one character")))),(0,r.kt)("h3",{id:"-wildcard"},"% Wildcard"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"%")," symbol allows you to match zero, one or more characters within your ",(0,r.kt)("inlineCode",{parentName:"p"},"LIKE")," search."),(0,r.kt)("p",null,"For example, you can search for ",(0,r.kt)("inlineCode",{parentName:"p"},"%@mateuszdabrowski.pl")," domain in ",(0,r.kt)("inlineCode",{parentName:"p"},"EmailAddress")," to get all contacts with an email address ending with ",(0,r.kt)("inlineCode",{parentName:"p"},"@mateuszdabrowski.pl"),"."),(0,r.kt)("p",null,"You can change this filter to ",(0,r.kt)("inlineCode",{parentName:"p"},"%@mateuszdabrowski.%"),". With the second wildcard at the end, it will be looking for any email address that contains ",(0,r.kt)("inlineCode",{parentName:"p"},"@mateuszdabrowski.")," but may have more text on either side of it. It will capture all emails ending with ",(0,r.kt)("inlineCode",{parentName:"p"},"@mateuszdabrowski.pl")," domain just as the previous filter, but also match those with ",(0,r.kt)("inlineCode",{parentName:"p"},"@mateuszdabrowski.com"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"@mateuszdabrowski.sfmc.eu")," and other top-level domains."),(0,r.kt)(o.Z,{defaultValue:"where",values:[{label:"WHERE",value:"where"},{label:"SELECT",value:"select"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"where",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:"{4} title=\"All subscribers that have an email address ending with 'mateuszdabrowski.pl' domain\"","{4}":!0,title:'"All',subscribers:!0,that:!0,have:!0,an:!0,email:!0,address:!0,ending:!0,with:!0,"'mateuszdabrowski.pl'":!0,'domain"':!0},"SELECT\n      SubscriberKey\n    , EmailAddress\n  FROM _Subscribers\n WHERE EmailAddress LIKE '%@%mateuszdabrowski.pl'\n")),(0,r.kt)("p",null,"In the above example, I used two wildcards - one before and one just after ",(0,r.kt)("inlineCode",{parentName:"p"},"@")," symbol. It allows not only to catch contacts in ",(0,r.kt)("inlineCode",{parentName:"p"},"@mateuszdabrowski.pl")," domain, but also any subdomain, like ",(0,r.kt)("inlineCode",{parentName:"p"},"@dev.mateuszdabrowski.pl"),"."),(0,r.kt)("p",null,"In the marketing automation world, however, ",(0,r.kt)("inlineCode",{parentName:"p"},"LIKE")," operator is especially useful for selecting contacts based on the multi picklist columns. Consider ",(0,r.kt)("inlineCode",{parentName:"p"},"ActiveSubscriptions")," field that can have any combination of values ",(0,r.kt)("inlineCode",{parentName:"p"},"Phone"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"TV"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Internet"),"."),(0,r.kt)("p",null,"Suppose you would like to select all contacts with active phone subscription. In that case, you shouldn't use ",(0,r.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-where#equality"},"equality operator")," (",(0,r.kt)("inlineCode",{parentName:"p"},"WHERE ActiveSubscription = 'Phone'"),"), as it would return only contacts that have just this one subscription. Some of your customers might, however, have multiple (phone and tv or phone and internet plans). For SQL, a field containing ",(0,r.kt)("inlineCode",{parentName:"p"},"'Phone'")," is not equal with the one having a value of ",(0,r.kt)("inlineCode",{parentName:"p"},"'Phone', Internet'"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"LIKE")," operator is here to save the day."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{5} title="All subscribers that have at least Phone subscription"',"{5}":!0,title:'"All',subscribers:!0,that:!0,have:!0,at:!0,least:!0,Phone:!0,'subscription"':!0},"SELECT\n      SubscriberKey\n    , EmailAddress\nFROM MasterSubscriberDE\nWHERE ActiveSubscription LIKE '%Phone%'\n"))),(0,r.kt)(i.Z,{value:"select",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{4} title="Categorize your database into either Internal or External records based on email domain"',"{4}":!0,title:'"Categorize',your:!0,database:!0,into:!0,either:!0,Internal:!0,or:!0,External:!0,records:!0,based:!0,on:!0,email:!0,'domain"':!0},"SELECT\n      SubscriberKey\n    , CASE\n        WHEN EmailAddress LIKE '%@%mateuszdabrowski.pl' THEN 'Internal'\n        ELSE 'External'\n      END AS ContactType\nFROM _Subscribers\n")),(0,r.kt)("p",null,"In the above example, I used two wildcards - one before and one just after ",(0,r.kt)("inlineCode",{parentName:"p"},"@")," symbol. It allows not only to catch contacts in ",(0,r.kt)("inlineCode",{parentName:"p"},"@mateuszdabrowski.pl")," domain, but also any subdomain, like ",(0,r.kt)("inlineCode",{parentName:"p"},"@dev.mateuszdabrowski.pl"),"."))),(0,r.kt)("admonition",{title:"You Should Know",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Always be sure to check whether you apply the wildcards correctly. Popular error is to have either too narrow or too wide scope of your filter. A common issue is lack of ",(0,r.kt)("inlineCode",{parentName:"p"},"%")," operator in the end or beginning of the searched string. For your query, it means that the value should end there."),(0,r.kt)("p",{parentName:"admonition"},"For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"WHERE EmailAddress LIKE '@gmail.com'")," should provide you zero results, as it would be looking for precisely the ",(0,r.kt)("inlineCode",{parentName:"p"},"@gmail.com")," value in the ",(0,r.kt)("inlineCode",{parentName:"p"},"EmailAddress")," field - without any characters before the ",(0,r.kt)("inlineCode",{parentName:"p"},"@")," symbol.")),(0,r.kt)("h3",{id:"_-wildcard"},"_ Wildcard"),(0,r.kt)("p",null,"Another wildcard working with ",(0,r.kt)("inlineCode",{parentName:"p"},"LIKE")," is the underscore ",(0,r.kt)("inlineCode",{parentName:"p"},"_"),". It is much simpler as all it does it pretending to be any single character."),(0,r.kt)("p",null,"Let's consider a scenario, where you have a multi picklist field containing comma-separated product IDs. For example, a customer with three recommended products might have a value ",(0,r.kt)("inlineCode",{parentName:"p"},"1,14,27"),". The system codes single digit values to subscriptions, and two-digit codes to various product categories. Let's use it in the query."),(0,r.kt)(o.Z,{defaultValue:"where",values:[{label:"WHERE",value:"where"},{label:"SELECT",value:"select"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"where",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{6-10} title="All subscribers with at least one subscription product in their recommendations"',"{6-10}":!0,title:'"All',subscribers:!0,with:!0,at:!0,least:!0,one:!0,subscription:!0,product:!0,in:!0,their:!0,'recommendations"':!0},"SELECT\n      SubscriberKey\n    , EmailAddress\n    , RecommendedProducts\nFROM EcommerceUpsellDE\nWHERE\n    RecommendedProducts     LIKE '_'\n    OR RecommendedProducts  LIKE '_,%'\n    OR RecommendedProducts  LIKE '%,_,%'\n    OR RecommendedProducts  LIKE '%,_'\n")),(0,r.kt)("p",null,"In the query above, we are filtering our database with ",(0,r.kt)("inlineCode",{parentName:"p"},"RecommendedProducts")," field. To add a contact to our segment, in four steps, we check if at least one condition is true:")),(0,r.kt)(i.Z,{value:"select",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{5-8} title="Create boolean field from a multipicklist one to split database on recommendation type"',"{5-8}":!0,title:'"Create',boolean:!0,field:!0,from:!0,a:!0,multipicklist:!0,one:!0,to:!0,split:!0,database:!0,on:!0,recommendation:!0,'type"':!0},"SELECT\n      SubscriberKey\n    , EmailAddress\n    , CASE\n        WHEN RecommendedProducts LIKE '_'     THEN 'True'\n        WHEN RecommendedProducts LIKE '_,%'   THEN 'True'\n        WHEN RecommendedProducts LIKE '%,_,%' THEN 'True'\n        WHEN RecommendedProducts LIKE '_,%'   THEN 'True'\n        ELSE 'False'\n      END AS IsSubscriptionRecommended\nFROM EcommerceUpsellDE\n")),(0,r.kt)("p",null,"In the query above, we are creating new boolean field that will tell us whether the contact has at least one subscription product in their recommended lists. Great for personalized communication emphasizing this recommendation. We do this by assigning value ",(0,r.kt)("inlineCode",{parentName:"p"},"True")," if at least one of four steps evaluates to true:"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If the record has exactly one recommended product that has a single-digit code (subscription)"),(0,r.kt)("li",{parentName:"ol"},"If the record has multiple recommended products and the first one is a single-digit (subscription)"),(0,r.kt)("li",{parentName:"ol"},"If the record has multiple recommended products and one in the middle is a single-digit (subscription)"),(0,r.kt)("li",{parentName:"ol"},"If the record has multiple recommended products and the last one is a single-digit (subscription)")),(0,r.kt)("h2",{id:"like-with-group"},"LIKE with Group"),(0,r.kt)("p",null,"There is also a group operator ",(0,r.kt)("inlineCode",{parentName:"p"},"[]")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"LIKE")," statements. It allows you to create even more complex conditions:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Advanced Operator"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]")),(0,r.kt)("td",{parentName:"tr",align:null},"Any single character from the list specified inside")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-")),(0,r.kt)("td",{parentName:"tr",align:null},"Range operator for ",(0,r.kt)("inlineCode",{parentName:"td"},"[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"^")),(0,r.kt)("td",{parentName:"tr",align:null},"Exclusion operator for ",(0,r.kt)("inlineCode",{parentName:"td"},"[]"))))),(0,r.kt)("h3",{id:"-operator"},"[] Operator"),(0,r.kt)("p",null,"The group operator ",(0,r.kt)("inlineCode",{parentName:"p"},"[]")," allows you to provide a list of characters that you want to find a match."),(0,r.kt)("p",null,"Consider the previous example with a field containing multiple IDs of your subscription and standard products. The field stores subscriptions in the form of single-digit product IDs. First four IDs are related to Premium subscriptions. IDs from 5 to 9 are Standard subscriptions."),(0,r.kt)(o.Z,{defaultValue:"where",values:[{label:"WHERE",value:"where"},{label:"SELECT",value:"select"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"where",mdxType:"TabItem"},(0,r.kt)("p",null,"If we would like to output only the Premium subscriptions, we would have to create a separate filter for each ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",16:!0,className:"language-sql",metastring:'{6-15} title="This approach would require 16 lines to cover the use case"',"{6-15}":!0,title:'"This',approach:!0,would:!0,require:!0,lines:!0,to:!0,cover:!0,the:!0,use:!0,'case"':!0},"SELECT\n      SubscriberKey\n    , EmailAddress\n    , RecommendedProducts\nFROM EcommerceUpsellDE\nWHERE\n    RecommendedProducts     LIKE '1'\n    OR RecommendedProducts  LIKE '1,%'\n    OR RecommendedProducts  LIKE '%,1,%'\n    OR RecommendedProducts  LIKE '%,1'\n    OR RecommendedProducts  LIKE '2'\n    OR RecommendedProducts  LIKE '2,%'\n    OR RecommendedProducts  LIKE '%,2,%'\n    OR RecommendedProducts  LIKE '%,2'\n    ...\n")),(0,r.kt)("p",null,"With a group, we can optimize it \u2014 a lot."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",4:!0,className:"language-sql",metastring:'{6-10} title="Same outcome with just 4 lines"',"{6-10}":!0,title:'"Same',outcome:!0,with:!0,just:!0,'lines"':!0},"SELECT\n      SubscriberKey\n    , EmailAddress\n    , RecommendedProducts\nFROM EcommerceUpsellDE\nWHERE\n    RecommendedProducts     LIKE '[1234]'\n    OR RecommendedProducts  LIKE '[1234],%'\n    OR RecommendedProducts  LIKE '%,[1234],%'\n    OR RecommendedProducts  LIKE '%,[1234]'\n"))),(0,r.kt)(i.Z,{value:"select",mdxType:"TabItem"},(0,r.kt)("p",null,"If we would like to categorize them using Wildcards, we would have to create a separate WHEN for each ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",36:!0,className:"language-sql",metastring:'{5-14} title="This approach would require 36 WHEN/THEN lines to cover the use case"',"{5-14}":!0,title:'"This',approach:!0,would:!0,require:!0,"WHEN/THEN":!0,lines:!0,to:!0,cover:!0,the:!0,use:!0,'case"':!0},"SELECT\n      SubscriberKey\n    , EmailAddress\n    , CASE\n        WHEN RecommendedProducts LIKE '1'     THEN 'Premium'\n        WHEN RecommendedProducts LIKE '1,%'   THEN 'Premium'\n        WHEN RecommendedProducts LIKE '%,1,%' THEN 'Premium'\n        WHEN RecommendedProducts LIKE '1,%'   THEN 'Premium'\n        WHEN RecommendedProducts LIKE '2'     THEN 'Premium'\n        WHEN RecommendedProducts LIKE '2,%'   THEN 'Premium'\n        ...\n        WHEN RecommendedProducts LIKE '5'     THEN 'Standard'\n        WHEN RecommendedProducts LIKE '5,%'   THEN 'Standard'\n        ...\n        ELSE 'No Subscription'\n      END AS RecommendedSubscriptionType\nFROM EcommerceUpsellDE\n")),(0,r.kt)("p",null,"With a group, we can optimize it  \u2014 a lot."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",8:!0,className:"language-sql",metastring:'{5-12} title="Same outcome with just 8 WHEN/THEN lines"',"{5-12}":!0,title:'"Same',outcome:!0,with:!0,just:!0,"WHEN/THEN":!0,'lines"':!0},"SELECT\n      SubscriberKey\n    , EmailAddress\n    , CASE\n        WHEN RecommendedProducts LIKE '[1234]'      THEN 'Premium'\n        WHEN RecommendedProducts LIKE '[1234],%'    THEN 'Premium'\n        WHEN RecommendedProducts LIKE '%,[1234],%'  THEN 'Premium'\n        WHEN RecommendedProducts LIKE '[1234],%'    THEN 'Premium'\n        WHEN RecommendedProducts LIKE '[56789]'     THEN 'Standard'\n        WHEN RecommendedProducts LIKE '[56789],%'   THEN 'Standard'\n        WHEN RecommendedProducts LIKE '%,[56789],%' THEN 'Standard'\n        WHEN RecommendedProducts LIKE '[56789],%'   THEN 'Standard'\n        ELSE 'No Subscription'\n      END AS RecommendedSubscriptionType\nFROM EcommerceUpsellDE\n")))),(0,r.kt)("p",null,"Thanks to the group operator, instead of covering every single case, we can provide all values within the ",(0,r.kt)("inlineCode",{parentName:"p"},"[]"),". Short, clean and readable. And it can get even better."),(0,r.kt)("admonition",{title:"You Should Know",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Group wildcard (",(0,r.kt)("inlineCode",{parentName:"p"},"[]"),") is also useful as a way to escape character in the ",(0,r.kt)("inlineCode",{parentName:"p"},"LIKE")," statement. For example, you might want to look for all values, including a per cent sign (",(0,r.kt)("inlineCode",{parentName:"p"},"%"),")."),(0,r.kt)("p",{parentName:"admonition"},"Writing ",(0,r.kt)("inlineCode",{parentName:"p"},"LIKE '10%'")," is not a good idea, as it would return you all values starting with ",(0,r.kt)("inlineCode",{parentName:"p"},"10")," - as the per cent sign is a wildcard meaning zero, one or more characters. You can, however, obtain what you want by writing:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",1:!0,className:"language-sql",metastring:'{4-5} title="If the client has a discount between 1 and 9%, let\'s bump it up to either 5% or 10%. If he or she has a higher one - leave it as it is. If no discount is available, make it 2%"',"{4-5}":!0,title:'"If',the:!0,client:!0,has:!0,a:!0,discount:!0,between:!0,and:!0,"9%,":!0,"let's":!0,bump:!0,it:!0,up:!0,to:!0,either:!0,"5%":!0,or:!0,"10%.":!0,If:!0,he:!0,she:!0,higher:!0,one:!0,"-":!0,leave:!0,as:!0,"is.":!0,no:!0,is:!0,"available,":!0,make:!0,'2%"':!0},"SELECT\n      ContactKey\n    , CASE\n        WHEN Discount LIKE '[56789][%]' THEN '10%'\n        WHEN Discount LIKE '[01234][%]' THEN '5%'\n        WHEN Discount IS NOT NULL       THEN Discount\n        ELSE '2%'\n      END AS NewDiscount\n")),(0,r.kt)("p",{parentName:"admonition"},"By wrapping the ",(0,r.kt)("inlineCode",{parentName:"p"},"%")," with the grouping sign ",(0,r.kt)("inlineCode",{parentName:"p"},"[]"),", we are telling SQL to look for exactly the per cent sign. Thanks to it ",(0,r.kt)("inlineCode",{parentName:"p"},"'[1234][%]'")," search will look for ",(0,r.kt)("inlineCode",{parentName:"p"},"1%"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"2%"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"3%")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"4%")," values only."),(0,r.kt)("p",{parentName:"admonition"},"Same works with ",(0,r.kt)("inlineCode",{parentName:"p"},"_")," wildcard.")),(0,r.kt)("h3",{id:"--operator"},"- Operator"),(0,r.kt)("p",null,"We can simplify more with the use of range operator ",(0,r.kt)("inlineCode",{parentName:"p"},"-"),". Instead of writing each possible character within our group ",(0,r.kt)("inlineCode",{parentName:"p"},"[]")," (it gets awful when we are looking for any letter - lower or uppercase), we can ask for a range:"),(0,r.kt)(o.Z,{defaultValue:"where",values:[{label:"WHERE",value:"where"},{label:"SELECT",value:"select"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"where",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{6-10} title="Now with range operator"',"{6-10}":!0,title:'"Now',with:!0,range:!0,'operator"':!0},"SELECT\n      SubscriberKey\n    , EmailAddress\n    , RecommendedProducts\nFROM EcommerceUpsellDE\nWHERE\n    RecommendedProducts     LIKE '[1-4]'\n    OR RecommendedProducts  LIKE '[1-4],%'\n    OR RecommendedProducts  LIKE '%,[1-4],%'\n    OR RecommendedProducts  LIKE '%,[1-4]'\n"))),(0,r.kt)(i.Z,{value:"select",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{5-12} title="Now with range operator"',"{5-12}":!0,title:'"Now',with:!0,range:!0,'operator"':!0},"SELECT\n      SubscriberKey\n    , EmailAddress\n    , CASE\n        WHEN RecommendedProducts LIKE '[1-4]'     THEN 'Premium'\n        WHEN RecommendedProducts LIKE '[1-4],%'   THEN 'Premium'\n        WHEN RecommendedProducts LIKE '%,[1-4],%' THEN 'Premium'\n        WHEN RecommendedProducts LIKE '[1-4],%'   THEN 'Premium'\n        WHEN RecommendedProducts LIKE '[5-9]'     THEN 'Standard'\n        WHEN RecommendedProducts LIKE '[5-9],%'   THEN 'Standard'\n        WHEN RecommendedProducts LIKE '%,[5-9],%' THEN 'Standard'\n        WHEN RecommendedProducts LIKE '[5-9],%'   THEN 'Standard'\n        ELSE 'No Subscription'\n      END AS RecommendedSubscriptionType\nFROM EcommerceUpsellDE\n")))),(0,r.kt)("p",null,"As you can see, all we need to do, it to put range operator ",(0,r.kt)("inlineCode",{parentName:"p"},"-")," between the first and last value that we want to catch. For alphabetical searches where we want both lowercase and uppercase letters, you will need to write it like this: ",(0,r.kt)("inlineCode",{parentName:"p"},"LIKE '[a-zA-Z]'"),"."),(0,r.kt)("p",null,"If you want to search for a hyphen '-' within a grouping operator that uses a range, add it in the very beginning. ",(0,r.kt)("inlineCode",{parentName:"p"},"LIKE '[-0-9]")," will look for either ",(0,r.kt)("inlineCode",{parentName:"p"},"-")," or any digit."),(0,r.kt)("admonition",{title:"You Should Know",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can mix and match groups, ranges and wildcards."),(0,r.kt)("p",{parentName:"admonition"},"It is an excellent tool to create essential categorization solutions for uncontrolled data. For example, to clean up free text job title coming from web forms."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Simplified Job Title categorization"',title:'"Simplified',Job:!0,Title:!0,'categorization"':!0},"SELECT\n      SubscriberKey\n    , CASE\n        WHEN FreeTextJobTitle LIKE '[Cc]_[Oo]'       THEN 'C-Suite'\n        WHEN FreeTextJobTitle LIKE '%[Mm]anager%'    THEN 'Management'\n        WHEN FreeTextJobTitle LIKE '%[Ss]pecialist%' THEN 'Specialists'\n      END AS CorporateJobTitleGroup\nFROM _Subscriber\n"))),(0,r.kt)("h3",{id:"-operator-1"},"^ Operator"),(0,r.kt)("p",null,"There is one more operator that is sometimes useful - the exclusion operator ",(0,r.kt)("inlineCode",{parentName:"p"},"^"),". Add it to the beginning of your group, and SQL will not look for any of the grouped characters. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"LIKE '[^0-9]'")," will look for any character that is not a digit."),(0,r.kt)("p",null,"This operator is especially useful for the use in ",(0,r.kt)("inlineCode",{parentName:"p"},"WHERE")," statement. Best example? SQL for finding contacts with Subscriber Key not being correct Salesforce ID:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{4} title="Find all records in All Subscribers with Subscriber Key other than Salesforce ID"',"{4}":!0,title:'"Find',all:!0,records:!0,in:!0,All:!0,Subscribers:!0,with:!0,Subscriber:!0,Key:!0,other:!0,than:!0,Salesforce:!0,'ID"':!0},"SELECT SubscriberKey\nFROM _Subscribers\nWHERE\n    SubscriberKey LIKE '%[^a-zA-Z0-9]%'\n    AND LEN(SubscriberKey) != 18\n")),(0,r.kt)("p",null,"This short and straightforward query will look into each SubscriberKey and check whether in there is any character other the letter or digit (case-insensitive) or whether the length is not equal to 18. All such records have incorrect value and are eligible for cleanup or investigation. Perfect for Automation with deletion SSJS script or Verification Activity to alert administrator about issues."),(0,r.kt)("h2",{id:"not-like"},"NOT LIKE"),(0,r.kt)("p",null,"Finally, just as with other statements, you can add ",(0,r.kt)("inlineCode",{parentName:"p"},"NOT")," statement before ",(0,r.kt)("inlineCode",{parentName:"p"},"LIKE")," to search for not matching records:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'{4} title="Same query as at the beginning of our CASE journey, but flipped"',"{4}":!0,title:'"Same',query:!0,as:!0,at:!0,the:!0,beginning:!0,of:!0,our:!0,CASE:!0,"journey,":!0,but:!0,'flipped"':!0},"SELECT\n      ContactKey\n    , CASE\n        WHEN EmailAddress NOT LIKE '%@mateuszdabrowski.pl' THEN 'External'\n        ELSE 'Internal'\n      END AS ContactType\n")))}E.isMDXComponent=!0}}]);