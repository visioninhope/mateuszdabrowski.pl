"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[5751],{4137:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=d(a),m=i,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,l=new Array(o);l[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var d=2;d<o;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},425:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),i=a(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(o,l),hidden:a},t)}},4259:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7462),i=a(7294),o=a(6010),l=a(1048),r=a(3609),s=a(1943),d=a(2957);const u="tabList__CuJ",c="tabItem_LNqP";function p(e){var t,a;const{lazy:l,block:p,defaultValue:m,values:h,groupId:g,className:f}=e,y=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=h?h:y.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,r.l)(k,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const b=null===m?m:null!=(t=null!=m?m:null==(a=y.find((e=>e.props.default)))?void 0:a.props.value)?t:y[0].props.value;if(null!==b&&!k.some((e=>e.value===b)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+k.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:T}=(0,s.U)(),[N,x]=(0,i.useState)(b),C=[],{blockElementScrollPositionUntilNextRender:E}=(0,d.o5)();if(null!=g){const e=w[g];null!=e&&e!==N&&k.some((t=>t.value===e))&&x(e)}const I=e=>{const t=e.currentTarget,a=C.indexOf(t),n=k[a].value;n!==N&&(E(t),x(n),null!=g&&T(g,String(n)))},M=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=C.indexOf(e.currentTarget)+1;a=null!=(n=C[t])?n:C[0];break}case"ArrowLeft":{var i;const t=C.indexOf(e.currentTarget)-1;a=null!=(i=C[t])?i:C[C.length-1];break}}null==(t=a)||t.focus()};return i.createElement("div",{className:(0,o.Z)("tabs-container",u)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},f)},k.map((e=>{let{value:t,label:a,attributes:l}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>C.push(e),onKeyDown:M,onFocus:I,onClick:I},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":N===t})}),null!=a?a:t)}))),l?(0,i.cloneElement)(y.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,l.Z)();return i.createElement(p,(0,n.Z)({key:String(t)},e))}},1872:(e,t,a)=>{a.d(t,{m:()=>o});var n=a(7294);const i="leadText_qzwo",o=e=>{let{content:t}=e;return n.createElement(n.Fragment,null,n.createElement("p",{id:i},t))}},6452:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=a(7462),i=(a(7294),a(4137)),o=a(4259),l=a(425),r=a(1872);const s={id:"tailor-with-data",title:"Tailor the experience with data logic",sidebar_label:"Tailor with Data",description:"Everyone and his boss are talking about personalisation. Most stop at tailoring the content. Don't be that person. Utilise the power of simple data logic and control the user flows.",image:"img/og/og-image-tailor-with-data.png",tags:["Marketing Cloud","Eloqua","JavaScript","Personalisation","Cloud Page"]},d=void 0,u={unversionedId:"usecase/tailor-with-data",id:"usecase/tailor-with-data",title:"Tailor the experience with data logic",description:"Everyone and his boss are talking about personalisation. Most stop at tailoring the content. Don't be that person. Utilise the power of simple data logic and control the user flows.",source:"@site/docs/usecase/tailor-with-data.mdx",sourceDirName:"usecase",slug:"/usecase/tailor-with-data",permalink:"/docs/usecase/tailor-with-data",draft:!1,editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/docs/usecase/tailor-with-data.mdx",tags:[{label:"Marketing Cloud",permalink:"/docs/tags/marketing-cloud"},{label:"Eloqua",permalink:"/docs/tags/eloqua"},{label:"JavaScript",permalink:"/docs/tags/java-script"},{label:"Personalisation",permalink:"/docs/tags/personalisation"},{label:"Cloud Page",permalink:"/docs/tags/cloud-page"}],version:"current",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1648292590,formattedLastUpdatedAt:"Mar 26, 2022",frontMatter:{id:"tailor-with-data",title:"Tailor the experience with data logic",sidebar_label:"Tailor with Data",description:"Everyone and his boss are talking about personalisation. Most stop at tailoring the content. Don't be that person. Utilise the power of simple data logic and control the user flows.",image:"img/og/og-image-tailor-with-data.png",tags:["Marketing Cloud","Eloqua","JavaScript","Personalisation","Cloud Page"]},sidebar:"snippets",previous:{title:"SFMC Use Cases",permalink:"/docs/category/sfmc-use-cases"},next:{title:"Engage with Countdown",permalink:"/docs/usecase/engage-with-countdown"}},c={},p=[{value:"Outline",id:"outline",level:2},{value:"Leverage the data",id:"leverage-the-data",level:2},{value:"Change the structure of the landing page",id:"change-the-structure-of-the-landing-page",level:3},{value:"Create a genuinely dynamic form",id:"create-a-genuinely-dynamic-form",level:3},{value:"Enrich your data",id:"enrich-your-data",level:3},{value:"Script your solution",id:"script-your-solution",level:2},{value:"Hiding elements on the website",id:"hiding-elements-on-the-website",level:3},{value:"Changing elements on the website",id:"changing-elements-on-the-website",level:3},{value:"Create conditional logic",id:"create-conditional-logic",level:2},{value:"Possibilities are endless.",id:"possibilities-are-endless",level:3}],m={toc:p};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r.m,{content:"Everyone and his boss are talking about personalisation. Most stop at tailoring the content. Don't be that person. Utilise the power of simple data logic and control the user flows.",mdxType:"LeadText"}),(0,i.kt)("h2",{id:"outline"},"Outline"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#leverage-the-data"},"Review the use cases possible thanks to the tailored data logic")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#script-your-solution"},"Check easy to implement script examples")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#create-conditional-logic"},"Create personalisation fueled conditional user flows"))),(0,i.kt)("h2",{id:"leverage-the-data"},"Leverage the data"),(0,i.kt)("p",null,"Most Marketing Automation tools allow you to use the contact and account data for personalisation. Are you inserting a user-specific value from a data model to landing page or email? Creating custom content tailored to the user? Easy and simple. ",(0,i.kt)("a",{parentName:"p",href:"https://www.oracle.com/marketingcloud/products/marketing-automation/",title:"Oracle Eloqua Marketing Automation Platform"},"Eloqua"),"'s ",(0,i.kt)("a",{parentName:"p",href:"https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAA/Help/FieldMerges/FieldMerges.htm",title:"Field Merge Documentation"},"Field Merges")," or ",(0,i.kt)("a",{parentName:"p",href:"https://www.salesforce.com/eu/products/marketing-cloud/overview/",title:"Salesforce Marketing Cloud Platform"},"Marketing Cloud"),"'s personalisation strings. But you can do so much more!"),(0,i.kt)("h3",{id:"change-the-structure-of-the-landing-page"},"Change the structure of the landing page"),(0,i.kt)("p",null,"Part of your subscription centre should be visible only to your clients? Instead of creating and managing two separate pages, you can use personalisation to check whether the visitor has any license and unhide product-related data & subscription section."),(0,i.kt)("h3",{id:"create-a-genuinely-dynamic-form"},"Create a genuinely dynamic form"),(0,i.kt)("p",null,"Not keen on asking your customers, again and again, the same questions in your content form? Use personalisation to hide form fields that won't give you new knowledge. The shorter the form, the better."),(0,i.kt)("h3",{id:"enrich-your-data"},"Enrich your data"),(0,i.kt)("p",null,"You got multi picklist storing information on topics that are interesting to your customers? Want to use whitepaper download form to add such data point? Sure, all Marketing Automation Platforms have form processing that will be able to append such value. But unfortunately, in most, you won't be able to check whether it will result in a duplicate data point. You guessed it, personalisation with a simple script can fix it."),(0,i.kt)("h2",{id:"script-your-solution"},"Script your solution"),(0,i.kt)("p",null,"Time to create a script that will solve the problems mentioned above. Firstly, you will need to pull from your data model."),(0,i.kt)(o.Z,{groupId:"marketingAutomationPlatforms",defaultValue:"sfmc",values:[{label:"Salesforce Marketing Cloud",value:"sfmc"},{label:"Oracle Eloqua",value:"eloqua"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"sfmc",mdxType:"TabItem"},(0,i.kt)("p",null,"For Marketing Cloud, the easiest way is to use the personalisation string. The code is straightforward:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<ctrl:field name=ProfileAttributeName />\n")),(0,i.kt)("p",null,"The only thing you need is the name of the Profile Attribute or Data Extension field. It gets a bit more elaborate if you want to leverage other sources, but still viable. You can use the Lookup function for non-sendable Data Extensions. You can even dig into Salesforce Objects with a bit of AMPScript.")),(0,i.kt)(l.Z,{value:"eloqua",mdxType:"TabItem"},(0,i.kt)("p",null,"For Eloqua, the easiest way is to use the Field Merge. The code is straightforward:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<span class=eloquaemail>\u200bField_Merge_Name1\u200b</span>\n")),(0,i.kt)("p",null,"The only thing you need is the Field Merge name. Unfortunately, you can not add the asset name, as Eloqua is using in the code the automatically created HTML name."),(0,i.kt)("p",null,"In most cases it is very similar to the original Field Merge name, in some - like Field Merge created by copying another one - can be a surprise. To be sure you have the correct name I recommended creating an empty HTML landing page and drag and drop the Field Merge onto HTML editor. It will add whole needed code for you."))),(0,i.kt)("p",null,"To create a script that will allow for three use cases mentioned in the first part of the post, we need one more thing - an ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," attribute. Some elements will already have it (for example, in Eloqua each form field exists in separate div element: ",(0,i.kt)("inlineCode",{parentName:"p"},"<div id='formElement1' ...>"),"). For others, you will have to add it to the HTML manually."),(0,i.kt)("admonition",{title:"You Should Know",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You are not limited to the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," attribute. Leverage any attribute and capture it with ",(0,i.kt)("a",{parentName:"p",href:"/docs/js/js-dom"},"DOM selectors"),", like ",(0,i.kt)("inlineCode",{parentName:"p"},"document.querySelector()")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"document.querySelectorAll()"),". For example, capturing ",(0,i.kt)("inlineCode",{parentName:"p"},"class")," is great to change multiple related parts of the website at once.")),(0,i.kt)("p",null,"With personalisation code and value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," attribute at hand, we can start the (short) scripting."),(0,i.kt)("h3",{id:"hiding-elements-on-the-website"},"Hiding elements on the website"),(0,i.kt)(o.Z,{groupId:"marketingAutomationPlatforms",defaultValue:"sfmc",values:[{label:"Salesforce Marketing Cloud",value:"sfmc"},{label:"Oracle Eloqua",value:"eloqua"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"sfmc",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:"title=\"Hide element with id='idName' if viewers EmailOptedIn attribute has value 'True'\"",title:'"Hide',element:!0,with:!0,id:"'idName'",if:!0,viewers:!0,EmailOptedIn:!0,attribute:!0,has:!0,value:!0,"'True'\"":!0},"<script>\n    window.addEventListener('load', () => { // 1.\n        if ('<ctrl:field name=EmailOptedIn />' === 'True') { // 2.\n            document.querySelector('#idValue').display = 'none'; // 3.\n        };\n    };\n<\/script>\n"))),(0,i.kt)(l.Z,{value:"eloqua",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:"title=\"Hide element with id='idName' if viewers EmailOptedIn field has value 'True'\"",title:'"Hide',element:!0,with:!0,id:"'idName'",if:!0,viewers:!0,EmailOptedIn:!0,field:!0,has:!0,value:!0,"'True'\"":!0},"<script>\n    window.addEventListener('load', () => { // 1.\n        if ('<span class=eloquaemail>EmailOptedIn1</span>' === 'True') { //2.\n            document.querySelector('#idValue').display = 'none'; // 3.\n        };\n    };\n<\/script>\n")))),(0,i.kt)("p",null,"Above script has three important lines that deserve some explanation."),(0,i.kt)("p",null,"First one uses ",(0,i.kt)("a",{parentName:"p",href:"/docs/js/js-dom#addeventlistener"},"Event Listener")," to launch the logic only after the whole page loaded. It is essential, as it guarantees that the browser already rendered the website element you want to hide."),(0,i.kt)("p",null,"Next is the ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," statement. It evaluates the data model value received via personalisation (left side of ==) with another value we choose (right side of ==). In this case, it checks whether Email Opted In for a particular user is set to True (names and values may differ in your data model)."),(0,i.kt)("p",null,"The third line looks for an HTML element with id equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"'idValue'")," and hides it from the user."),(0,i.kt)("admonition",{title:"You Should Know",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You can adapt this script to do almost anything. Once you have your element selected with ",(0,i.kt)("inlineCode",{parentName:"p"},"querySelector")," you can programmatically ",(0,i.kt)("a",{parentName:"p",href:"/docs/js/js-dom#changing-attributes"},"change its value"),", add or remove a class from it to impact the CSS applied or even create new elements around it.")),(0,i.kt)("p",null,"With this script, you can both modify the structure of your landing page and alter the form fields (or even just form field options) visible for the user. Hide some elements, show other, change the style of a web element to make it more prominent on the website. But that's not all!"),(0,i.kt)("h3",{id:"changing-elements-on-the-website"},"Changing elements on the website"),(0,i.kt)("p",null,"For our data enrichment use case, we will need to alter the script slightly."),(0,i.kt)(o.Z,{groupId:"marketingAutomationPlatforms",defaultValue:"sfmc",values:[{label:"Salesforce Marketing Cloud",value:"sfmc"},{label:"Oracle Eloqua",value:"eloqua"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"sfmc",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:"title=\"Change value of a hidden form field if Profile Attribute value includes 'Tax'\"",title:'"Change',value:!0,of:!0,a:!0,hidden:!0,form:!0,field:!0,if:!0,Profile:!0,Attribute:!0,includes:!0,"'Tax'\"":!0},"<script>\n    window.addEventListener('load', () => { // 1.\n        const regexSearchValue = /Tax/; // 2.\n        if (regexSearchValue.test('<ctrl:field name=Interests />')) { // 3.\n            document.querySelector('#alreadyInterested').value = 'True'; // 4.\n        };\n    };\n<\/script>\n"))),(0,i.kt)(l.Z,{value:"eloqua",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:"title=\"Change value of a hidden form field if Field Merge value includes 'Tax'\"",title:'"Change',value:!0,of:!0,a:!0,hidden:!0,form:!0,field:!0,if:!0,Field:!0,Merge:!0,includes:!0,"'Tax'\"":!0},"<script>\n    window.addEventListener('load', () => { // 1.\n        const regexSearchValue = /Tax/; // 2.\n        if (regexSearchValue.test('<span class=eloquaemail>Interests1</span>')) { // 3.\n            document.querySelector('#alreadyInterested').value = 'True'; // 4.\n        };\n    };\n<\/script>\n")))),(0,i.kt)("p",null,"In this scenario, we have a multi picklist field ",(0,i.kt)("inlineCode",{parentName:"p"},"Interests")," that captures what fascinates specific customer. If he is captivated by more than one topic, the names are semicolon-separated. A nice marketing tactic is to enrich this list each time the customer engages with something directly related to a particular topic. For example, downloads your new whitepaper."),(0,i.kt)("p",null,"In most Marketing Automation Platforms, it is straightforward to append a value to a column. Simple adding, however, leads to a (quite big) possibility of having duplicates. And this is neither good from the data quality perspective nor field length compliance."),(0,i.kt)("p",null,"So how to use the above script to enrich your data cleanly? We will need a hidden form field inside the whitepaper download form. In the HTML look for (or create) hidden field input (",(0,i.kt)("inlineCode",{parentName:"p"},"<input id='alreadyInterested' type='hidden' ...>"),"). The ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," attribute will be useful again."),(0,i.kt)("p",null,"You already know the first line from the previous section. The new things come next. We declare value we want to check in our data model picklist. In this example, we will test whether the user is already interested in Tax topic. The ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," before and after the word are special characters used for a ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions",title:"MDN Documentation on Regular_Expressions"},"regular expression"),"."),(0,i.kt)("p",null,"The third line is the fastest way to check whether the declared value is already in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Interests")," field."),(0,i.kt)("p",null,"Finally, in case of the value already being in the multi picklist, we put True inside the hidden form field. It enables us to enforce on form processing to append new interest conditionally - only if the hidden field is blank in the submission data."),(0,i.kt)("h2",{id:"create-conditional-logic"},"Create conditional logic"),(0,i.kt)("p",null,"Simple manipulation of visibility and values on your landing page is just beginning. You can get even more out of scripted-backed personalisations and take control over user & data flows."),(0,i.kt)("p",null,"Looking for an excellent way to tell your Google Analytics whether the user just downloaded a whitepaper or did he also wanted to receive product presentation on top of that? Not keen on creating two mirror-like Thank You pages with different conversion script? Sure!"),(0,i.kt)(o.Z,{groupId:"marketingAutomationPlatforms",defaultValue:"sfmc",values:[{label:"Salesforce Marketing Cloud",value:"sfmc"},{label:"Oracle Eloqua",value:"eloqua"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"sfmc",mdxType:"TabItem"},(0,i.kt)("p",null,"Your form processing page should append date stamp to a data model field in case of the user becoming a lead (asking for a product presentation). This data, apart from being a great source of knowledge for your lead reporting and data processing trigger, will be handy for this solution."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<script>\n    const leadCreationDate = '<ctrl:field name=leadCreationDate />';\n    if (Date.now() - new Date(leadCreationDate) < 93600000) {\n        dataLayer.push({\n            // Your Lead conversion dataLayer model\n        });\n    } else {\n        dataLayer.push({\n            // Your Whitepaper conversion dataLayer model\n        });\n    }\n<\/script>\n"))),(0,i.kt)(l.Z,{value:"eloqua",mdxType:"TabItem"},(0,i.kt)("p",null,"Your form should have a processing step that appends date stamp to a data model field in case of the user becoming a lead (asking for a product presentation). This data, apart from being a great source of knowledge for your lead reporting and data processing trigger, will be handy for this solution."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<script>\n    const leadCreationDate = '<span class=eloquaemail>LeadCreationTriggerDate1</span>';\n    if (Date.now() - new Date(leadCreationDate) < 93600000) {\n        dataLayer.push({\n            // Your Lead conversion dataLayer model\n        });\n    } else {\n        dataLayer.push({\n            // Your Whitepaper conversion dataLayer model\n        });\n    }\n<\/script>\n")))),(0,i.kt)("p",null,"Why? Because once you have this script on your Thank You page, you can check how distant in the past the personalised date is. And if it is within minutes, you can be pretty sure the user just became your lead. Which tells the script to push the lead conversion data layer instead of the whitepaper data layer. Simple and quick."),(0,i.kt)("p",null,"Remember to take into consideration the difference between local time and server time, which might play a role depending on the Marketing Automation Platform and configuration."),(0,i.kt)("h3",{id:"possibilities-are-endless"},"Possibilities are endless."),(0,i.kt)("p",null,"Want to be sure only recognised users will enter your subscription centre?"),(0,i.kt)(o.Z,{groupId:"marketingAutomationPlatforms",defaultValue:"sfmc",values:[{label:"Salesforce Marketing Cloud",value:"sfmc"},{label:"Oracle Eloqua",value:"eloqua"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"sfmc",mdxType:"TabItem"},(0,i.kt)("p",null,"Add email address or contact key personalisation. If it is empty, it means Marketing Cloud did not recognise this user. JavaScript can automatically redirect him to your subscription centre entry form that will take care of authorization."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"}," if ('<ctrl:field name=\"Email Address\" />' == '') {\n    window.location.replace(\u200b'https://redirect.here')\n}\n")),(0,i.kt)("p",null,"Want to double-check by querying the Salesforce Core? Add API call within the condition. You can also push some information from a data extension, or profile attributes to an external page. Personalise that data and use JavaScript to append it to redirect link as a query string or send it as a payload within POST call. Imagination is the only limit.")),(0,i.kt)(l.Z,{value:"eloqua",mdxType:"TabItem"},(0,i.kt)("p",null,"Add email address Field Merge. If it is empty, it means Eloqua did not recognise this user. JavaScript can automatically redirect him to your subscription centre entry form that will take care of authorization."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"if ('<span class=eloquaemail>\u200bEmailAddress\u200b</span>' == '') {\n    window.location.replace(\u200b'https://redirect.here')\n}\n")),(0,i.kt)("p",null,"Want to push some information from a data model to an external page? Field Merge that data and use JavaScript to append it to redirect link as a query string."),(0,i.kt)("p",null,"You can get even more power with using dynamic content (perfect for simplifying javascript logic) or web data lookups (allows you to leverage email group subscription, shared list audience \u203a even on external websites). Imagination is the only limit."))))}h.isMDXComponent=!0}}]);