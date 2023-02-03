"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[6397],{4137:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>h});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(i),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return i?n.createElement(h,a(a({ref:t},u),{},{components:i})):n.createElement(h,a({ref:t},u))}));function h(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=i[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},199:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=i(7462),r=(i(7294),i(4137)),o=i(1872),a=i(7271);const l={id:"interaction-studio-ideas",title:"Interaction Studio Ideas",sidebar_label:"Interaction Studio",description:"Here you can find all my Interaction Studio (SFMC Personalisation) IdeaExchange contributions. Let's make the change!",image:"img/og/og-image-interaction-studio-ideas.png"},s=void 0,c={unversionedId:"ideas/interaction-studio-ideas",id:"ideas/interaction-studio-ideas",title:"Interaction Studio Ideas",description:"Here you can find all my Interaction Studio (SFMC Personalisation) IdeaExchange contributions. Let's make the change!",source:"@site/sites/ideas/interaction-studio-ideas.mdx",sourceDirName:"ideas",slug:"/ideas/interaction-studio-ideas",permalink:"/sites/ideas/interaction-studio-ideas",draft:!1,editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/sites/ideas/interaction-studio-ideas.mdx",tags:[],version:"current",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1671837748,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{id:"interaction-studio-ideas",title:"Interaction Studio Ideas",sidebar_label:"Interaction Studio",description:"Here you can find all my Interaction Studio (SFMC Personalisation) IdeaExchange contributions. Let's make the change!",image:"img/og/og-image-interaction-studio-ideas.png"},sidebar:"ideas",previous:{title:"Marketing Cloud",permalink:"/sites/ideas/marketing-cloud-ideas"}},u={},d=[{value:"Catalog",id:"catalog",level:2},{value:"Full Category hierarchy support for ETL",id:"full-category-hierarchy-support-for-etl",level:3},{value:"Einstein Recipes",id:"einstein-recipes",level:2},{value:"Multiple Dimensional Variations for Products in Einstein Recipes",id:"multiple-dimensional-variations-for-products-in-einstein-recipes",level:3},{value:"Department Variation for Products in Einstein Recipes",id:"department-variation-for-products-in-einstein-recipes",level:3},{value:"Price Reduction Ingredient in Einstein Recipes",id:"price-reduction-ingredient-in-einstein-recipes",level:3}],p={toc:d},m="wrapper";function h(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.m,{content:"Here you can find all my Interaction Studio (SFMC Personalisation) IdeaExchange contributions. Let's make the change!",mdxType:"LeadText"}),(0,r.kt)("h2",{id:"catalog"},"Catalog"),(0,r.kt)("h3",{id:"full-category-hierarchy-support-for-etl"},"Full Category hierarchy support for ETL"),(0,r.kt)("p",null,"IS can create a working hierarchy tree of categories with a clean subcategory drill-down view in catalog UI and automatic summing of the views and revenue from the lowest level category up in the hierarchy."),(0,r.kt)("p",null,"However, this is now possible only under multiple conditions: just one Category per product (for the attribution to work), a specific format of the category ID, and only through Sitemap."),(0,r.kt)("p",null,"Especially problematic is that last limitation because, in many cases, ETL is the better way to manage it - especially with the format required for that feature."),(0,r.kt)("p",null,"Category ETL already has a solution that provides the same level of detail to Interaction Studio using two out-of-the-box attributes: department and parentCategoryId."),(0,r.kt)("p",null,"Interaction Studio displays the hierarchy built with those fields on the specific Category page under the ID. Unfortunately, it is not replicating the drill-down hierarchy tree UI in the Category list view and does not pass the data from the bottom Category up the hierarchy."),(0,r.kt)("p",null,"It should change - there should be a feature parity between Sitemap and ETL for such an important feature. Especially considering that all information required for it is already available."),(0,r.kt)(a.z,{link:"https://ideas.salesforce.com/s/idea/a0B8W00000MMZ27UAH/full-category-hierarchy-support-for-etl-in-interaction-studio",text:"Vote on IdeaExchange",newTab:"true",mdxType:"Button"}),(0,r.kt)("h2",{id:"einstein-recipes"},"Einstein Recipes"),(0,r.kt)("h3",{id:"multiple-dimensional-variations-for-products-in-einstein-recipes"},"Multiple Dimensional Variations for Products in Einstein Recipes"),(0,r.kt)("p",null,"Einstein Recipes are a powerful and flexible tool for creating recommendations, but the fourth step - Variations - is not on par with the rest of the options."),(0,r.kt)("p",null,"You can configure only a single Dimensional Variation. While you can choose from multiple Item Types when configuring it, once you select one, that's the end of the story. You cannot limit recommended products to, for example, only 2 per category and 2 per brand."),(0,r.kt)("p",null,"It heavily limits control over product recommendations, especially for e-commerce with multiple catalog objects. Currently, there is no real workaround."),(0,r.kt)("p",null,"At the same time, it is possible to select multiple Boosters or Exclusions of the same type and configure them differently. It would be great to select multiple Dimensional Variations with different configurations."),(0,r.kt)(a.z,{link:"https://ideas.salesforce.com/s/idea/a0B8W00000LAxE9UAL/multiple-dimensional-variations-for-products-in-einstein-recipes",text:"Vote on IdeaExchange",newTab:"true",mdxType:"Button"}),(0,r.kt)("h3",{id:"department-variation-for-products-in-einstein-recipes"},"Department Variation for Products in Einstein Recipes"),(0,r.kt)("p",null,"Einstein Recipes lets you configure Dimensional Variations on the Category, but unfortunately, it works only on the primary category level. There is no option to select the Department (master category) level."),(0,r.kt)("p",null,"It is very limiting for e-commerce with broad category trees like:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"monitors (gaming, graphic, office, medical, etc.)"),(0,r.kt)("li",{parentName:"ul"},"computers (laptops, ultrabooks, convertibles, desktops, all-in-ones, etc.)"),(0,r.kt)("li",{parentName:"ul"},"paints (acrylic, enamel, emulsion, etc.).")),(0,r.kt)("p",null,"With such categories, recommendations with Category Variation configured can easily still be dominated by a similar product (like 12 monitor recommendations despite the Category Variation limit set to 3 due to similar primary categories)."),(0,r.kt)("p",null,"There are two possible solutions to this issue:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add Department as another option in the Item Type dropdown (as it is separate from Categories in Exclusions and Boosters) or"),(0,r.kt)("li",{parentName:"ol"},"When the Item Type Category is selected, add a checkbox on whether Variation should happen on the primary Category or Department level.")),(0,r.kt)("p",null,"Currently, the only workaround is to create a separate Catalog for Departments, but that defeats the purpose of Is Department checkbox on the default Category object."),(0,r.kt)(a.z,{link:"https://ideas.salesforce.com/s/idea/a0B8W00000LAwlkUAD/department-variation-for-products-in-einstein-recipes",text:"Vote on IdeaExchange",newTab:"true",mdxType:"Button"}),(0,r.kt)("h3",{id:"price-reduction-ingredient-in-einstein-recipes"},"Price Reduction Ingredient in Einstein Recipes"),(0,r.kt)("p",null,"Triggered Campaigns added a great option of targetting various events for Journey Builder sends. Among them, there are Catalog Triggers. Some of them, like Product Expiring Soon, are also available for Web with Einstein Recipes Ingredients."),(0,r.kt)("p",null,"However, currently, there is no Ingredient for a popular e-commerce use case - Price Reduction."),(0,r.kt)("p",null,"Interaction Studio has all the required information (the price and listPrice attributes used for the Triggered Campaign)."),(0,r.kt)("p",null,"There is a workaround to make it possible now - calculating whether product price has been reduced externally and passing this information to a Related Catalog Object. However, there are better solutions for something that Interaction Studio is already doing out-of-the-box for another channel."),(0,r.kt)("p",null,"There are two possible solutions to this:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Simple ingredient that returns all price-reduced items (similar to Trending)."),(0,r.kt)("li",{parentName:"ol"},"Configurable ingredient with an option to select minimum price reduction percent.")),(0,r.kt)("p",null,"The solution can further improve it by adding a Recipe Booster on the price reduction percent."),(0,r.kt)(a.z,{link:"https://ideas.salesforce.com/s/idea/a0B8W00000MMauyUAD/price-reduction-ingredient-in-einstein-recipes",text:"Vote on IdeaExchange",newTab:"true",mdxType:"Button"}))}h.isMDXComponent=!0},7271:(e,t,i)=>{i.d(t,{V:()=>o,z:()=>r});var n=i(7294);const r=e=>{let{link:t,text:i,newTab:r=!1}=e;return n.createElement(n.Fragment,null,n.createElement("a",{class:"button button--outline button--lg button--primary col col--6 col--offset-3",href:t,target:r?"_blank":"_self"},i))},o=e=>{let{linkLeft:t,textLeft:i,newTabLeft:r=!1,linkRight:o,textRight:a,newTabRight:l=!1}=e;return n.createElement(n.Fragment,null,n.createElement("div",{class:"col col--12"},n.createElement("a",{class:"button button--outline button--lg button--primary col col--5 col--offset-0",href:t,target:r?"_blank":"_self"},i),n.createElement("a",{class:"button button--outline button--lg button--primary col col--5 col--offset-2",href:o,target:l?"_blank":"_self"},a)))}},1872:(e,t,i)=>{i.d(t,{m:()=>o});var n=i(7294);const r="leadText_qzwo",o=e=>{let{content:t}=e;return n.createElement(n.Fragment,null,n.createElement("p",{id:r},t))}}}]);