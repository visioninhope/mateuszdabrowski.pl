(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{120:function(e,t,a){"use strict";function n(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}},121:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return b}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),d=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=d(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(a),m=n,b=u["".concat(r,".").concat(m)]||u[m]||p[m]||o;return a?i.a.createElement(b,l(l({ref:t},c),{},{components:a})):i.a.createElement(b,l({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var c=2;c<o;c++)r[c]=a[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},122:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0),i=a(57),o=a.n(i);const r=({content:e})=>n.createElement(n.Fragment,null,n.createElement("p",{id:o.a.leadText},e))},125:function(e,t,a){"use strict";var n=a(0),i=a(126);t.a=function(){const e=Object(n.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},126:function(e,t,a){"use strict";var n=a(0);const i=Object(n.createContext)(void 0);t.a=i},128:function(e,t,a){"use strict";var n=a(0),i=a.n(n),o=a(125),r=a(120),l=a(59),s=a.n(l);const c=37,d=39;t.a=function(e){const{lazy:t,block:a,defaultValue:l,values:u,groupId:p,className:m}=e,{tabGroupChoices:b,setTabGroupChoices:h}=Object(o.a)(),[f,g]=Object(n.useState)(l),y=n.Children.toArray(e.children),v=[];if(null!=p){const e=b[p];null!=e&&e!==f&&u.some((t=>t.value===e))&&g(e)}const w=e=>{const t=e.currentTarget,a=v.indexOf(t),n=u[a].value;g(n),null!=p&&(h(p,n),setTimeout((()=>{(function(e){const{top:t,left:a,bottom:n,right:i}=e.getBoundingClientRect(),{innerHeight:o,innerWidth:r}=window;return t>=0&&i<=r&&n<=o&&a>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s.a.tabItemActive),setTimeout((()=>t.classList.remove(s.a.tabItemActive)),2e3))}),150))},O=e=>{var t;let a;switch(e.keyCode){case d:{const t=v.indexOf(e.target)+1;a=v[t]||v[0];break}case c:{const t=v.indexOf(e.target)-1;a=v[t]||v[v.length-1];break}}null===(t=a)||void 0===t||t.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":a},m)},u.map((({value:e,label:t})=>i.a.createElement("li",{role:"tab",tabIndex:f===e?0:-1,"aria-selected":f===e,className:Object(r.a)("tabs__item",s.a.tabItem,{"tabs__item--active":f===e}),key:e,ref:e=>v.push(e),onKeyDown:O,onFocus:w,onClick:w},t)))),t?Object(n.cloneElement)(y.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}},129:function(e,t,a){"use strict";var n=a(0),i=a.n(n);t.a=function({children:e,hidden:t,className:a}){return i.a.createElement("div",{role:"tabpanel",hidden:t,className:a},e)}},71:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return d})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return m}));var n=a(3),i=a(8),o=(a(0),a(121)),r=a(128),l=a(129),s=a(122),c={id:"tailor-with-data",title:"Tailor the experience with data logic",sidebar_label:"Tailor with Data",description:"Everyone and his boss are talking about personalisation. Most stop at tailoring the content. Don't be that person. Utilise the power of simple data logic and control the user flows."},d={unversionedId:"usecase/tailor-with-data",id:"usecase/tailor-with-data",isDocsHomePage:!1,title:"Tailor the experience with data logic",description:"Everyone and his boss are talking about personalisation. Most stop at tailoring the content. Don't be that person. Utilise the power of simple data logic and control the user flows.",source:"@site/docs/usecase/tailor-with-data.mdx",sourceDirName:"usecase",slug:"/usecase/tailor-with-data",permalink:"/docs/usecase/tailor-with-data",editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/docs/usecase/tailor-with-data.mdx",version:"current",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1608934850,formattedLastUpdatedAt:"12/25/2020",sidebar_label:"Tailor with Data",frontMatter:{id:"tailor-with-data",title:"Tailor the experience with data logic",sidebar_label:"Tailor with Data",description:"Everyone and his boss are talking about personalisation. Most stop at tailoring the content. Don't be that person. Utilise the power of simple data logic and control the user flows."},sidebar:"snippets",previous:{title:"Engage with Countdown",permalink:"/docs/usecase/engage-with-countdown"},next:{title:"AMPScript in SSJS",permalink:"/docs/ssjs/ssjs-snippet-ampscript-in-ssjs"}},u=[{value:"Outline",id:"outline",children:[]},{value:"Leverage the data",id:"leverage-the-data",children:[{value:"Change the structure of the landing page",id:"change-the-structure-of-the-landing-page",children:[]},{value:"Create a genuinely dynamic form",id:"create-a-genuinely-dynamic-form",children:[]},{value:"Enrich your data",id:"enrich-your-data",children:[]}]},{value:"Script your solution",id:"script-your-solution",children:[{value:"Hiding elements on the website",id:"hiding-elements-on-the-website",children:[]},{value:"Changing elements on the website",id:"changing-elements-on-the-website",children:[]}]},{value:"Create conditional logic",id:"create-conditional-logic",children:[{value:"Possibilities are endless.",id:"possibilities-are-endless",children:[]}]}],p={toc:u};function m(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(s.a,{content:"Everyone and his boss are talking about personalisation. Most stop at tailoring the content. Don't be that person. Utilise the power of simple data logic and control the user flows.",mdxType:"LeadText"}),Object(o.b)("h2",{id:"outline"},"Outline"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"#leverage-the-data"},"Review the use cases possible thanks to the tailored data logic")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"#script-your-solution"},"Check easy to implement script examples")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"#create-conditional-logic"},"Create personalisation fueled conditional user flows"))),Object(o.b)("h2",{id:"leverage-the-data"},"Leverage the data"),Object(o.b)("p",null,"Most Marketing Automation tools allow you to use the contact and account data for personalisation. Are you inserting a user-specific value from a data model to landing page or email? Creating custom content tailored to the user? Easy and simple. ",Object(o.b)("a",{parentName:"p",href:"https://www.oracle.com/marketingcloud/products/marketing-automation/",title:"Oracle Eloqua Marketing Automation Platform"},"Eloqua"),"'s ",Object(o.b)("a",{parentName:"p",href:"https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAA/Help/FieldMerges/FieldMerges.htm",title:"Field Merge Documentation"},"Field Merges")," or ",Object(o.b)("a",{parentName:"p",href:"https://www.salesforce.com/eu/products/marketing-cloud/overview/",title:"Salesforce Marketing Cloud Platform"},"Marketing Cloud"),"'s personalisation strings. But you can do so much more!"),Object(o.b)("h3",{id:"change-the-structure-of-the-landing-page"},"Change the structure of the landing page"),Object(o.b)("p",null,"Part of your subscription centre should be visible only to your clients? Instead of creating and managing two separate pages, you can use personalisation to check whether the visitor has any license and unhide product-related data & subscription section."),Object(o.b)("h3",{id:"create-a-genuinely-dynamic-form"},"Create a genuinely dynamic form"),Object(o.b)("p",null,"Not keen on asking your customers, again and again, the same questions in your content form? Use personalisation to hide form fields that won't give you new knowledge. The shorter the form, the better."),Object(o.b)("h3",{id:"enrich-your-data"},"Enrich your data"),Object(o.b)("p",null,"You got multi picklist storing information on topics that are interesting to your customers? Want to use whitepaper download form to add such data point? Sure, all Marketing Automation Platforms have form processing that will be able to append such value. But unfortunately, in most, you won't be able to check whether it will result in a duplicate data point. You guessed it, personalisation with a simple script can fix it."),Object(o.b)("h2",{id:"script-your-solution"},"Script your solution"),Object(o.b)("p",null,"Time to create a script that will solve the problems mentioned above. Firstly, you will need to pull from your data model."),Object(o.b)(r.a,{groupId:"marketingAutomationPlatforms",defaultValue:"sfmc",values:[{label:"Salesforce Marketing Cloud",value:"sfmc"},{label:"Oracle Eloqua",value:"eloqua"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"sfmc",mdxType:"TabItem"},Object(o.b)("p",null,"For Marketing Cloud, the easiest way is to use the personalisation string. The code is straightforward:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},"<ctrl:field name=ProfileAttributeName />\n")),Object(o.b)("p",null,"The only thing you need is the name of the Profile Attribute or Data Extension field. It gets a bit more elaborate if you want to leverage other sources, but still viable. You can use the Lookup function for non-sendable Data Extensions. You can even dig into Salesforce Objects with a bit of AMPScript.")),Object(o.b)(l.a,{value:"eloqua",mdxType:"TabItem"},Object(o.b)("p",null,"For Eloqua, the easiest way is to use the Field Merge. The code is straightforward:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},"<span class=eloquaemail>\u200bField_Merge_Name1\u200b</span>\n")),Object(o.b)("p",null,"The only thing you need is the Field Merge name. Unfortunately, you can not add the asset name, as Eloqua is using in the code the automatically created HTML name."),Object(o.b)("p",null,"In most cases it is very similar to the original Field Merge name, in some - like Field Merge created by copying another one - can be a surprise. To be sure you have the correct name I recommended creating an empty HTML landing page and drag and drop the Field Merge onto HTML editor. It will add whole needed code for you."))),Object(o.b)("p",null,"To create a script that will allow for three use cases mentioned in the first part of the post, we need one more thing - an ",Object(o.b)("inlineCode",{parentName:"p"},"id")," attribute. Some elements will already have it (for example, in Eloqua each form field exists in separate div element: ",Object(o.b)("inlineCode",{parentName:"p"},"<div id='formElement1' ...>"),"). For others, you will have to add it to the HTML manually."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"You Should Know")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"You are not limited to the ",Object(o.b)("inlineCode",{parentName:"p"},"id")," attribute. Leverage any attribute and capture it with ",Object(o.b)("inlineCode",{parentName:"p"},"document.querySelector()")," or ",Object(o.b)("inlineCode",{parentName:"p"},"document.querySelectorAll()"),". For example, capturing ",Object(o.b)("inlineCode",{parentName:"p"},"class")," is great to change multiple related parts of the website at once."))),Object(o.b)("p",null,"With personalisation code and value of the ",Object(o.b)("inlineCode",{parentName:"p"},"id")," attribute at hand, we can start the (short) scripting."),Object(o.b)("h3",{id:"hiding-elements-on-the-website"},"Hiding elements on the website"),Object(o.b)(r.a,{groupId:"marketingAutomationPlatforms",defaultValue:"sfmc",values:[{label:"Salesforce Marketing Cloud",value:"sfmc"},{label:"Oracle Eloqua",value:"eloqua"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"sfmc",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html",metastring:"title=\"Hide element with id='idName' if viewers EmailOptedIn attribute has value 'True'\"",title:'"Hide',element:!0,with:!0,id:"'idName'",if:!0,viewers:!0,EmailOptedIn:!0,attribute:!0,has:!0,value:!0,"'True'\"":!0},"<script>\n    window.addEventListener('load', () => { // 1.\n        if ('<ctrl:field name=EmailOptedIn />' === 'True') { // 2.\n            document.querySelector('#idValue').display = 'none'; // 3.\n        };\n    };\n<\/script>\n"))),Object(o.b)(l.a,{value:"eloqua",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html",metastring:"title=\"Hide element with id='idName' if viewers EmailOptedIn field has value 'True'\"",title:'"Hide',element:!0,with:!0,id:"'idName'",if:!0,viewers:!0,EmailOptedIn:!0,field:!0,has:!0,value:!0,"'True'\"":!0},"<script>\n    window.addEventListener('load', () => { // 1.\n        if ('<span class=eloquaemail>EmailOptedIn1</span>' === 'True') { //2.\n            document.querySelector('#idValue').display = 'none'; // 3.\n        };\n    };\n<\/script>\n")))),Object(o.b)("p",null,"Above script has three important lines that deserve some explanation."),Object(o.b)("p",null,"First one tells the web browser to launch the logic only after the whole page loaded. It is essential, as it guarantees that the browser already rendered the website element you want to hide."),Object(o.b)("p",null,"Next is the ",Object(o.b)("inlineCode",{parentName:"p"},"if")," statement. It evaluates the data model value received via personalisation (left side of ==) with another value we choose (right side of ==). In this case, it checks whether Email Opted In for a particular user is set to True (names and values may differ in your data model)."),Object(o.b)("p",null,"The third line looks for an HTML element with id equal to ",Object(o.b)("inlineCode",{parentName:"p"},"'idValue'")," and hides it from the user."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"You Should Know")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"You can adapt this script to do almost anything. Once you have your element selected with ",Object(o.b)("inlineCode",{parentName:"p"},"querySelector")," you can programmatically change its value, add or remove a class from it to impact the CSS applied or even create new elements around it."))),Object(o.b)("p",null,"With this script, you can both modify the structure of your landing page and alter the form fields (or even just form field options) visible for the user. Hide some elements, show other, change the style of a web element to make it more prominent on the website. But that's not all!"),Object(o.b)("h3",{id:"changing-elements-on-the-website"},"Changing elements on the website"),Object(o.b)("p",null,"For our data enrichment use case, we will need to alter the script slightly."),Object(o.b)(r.a,{groupId:"marketingAutomationPlatforms",defaultValue:"sfmc",values:[{label:"Salesforce Marketing Cloud",value:"sfmc"},{label:"Oracle Eloqua",value:"eloqua"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"sfmc",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html",metastring:"title=\"Change value of a hidden form field if Profile Attribute value includes 'Tax'\"",title:'"Change',value:!0,of:!0,a:!0,hidden:!0,form:!0,field:!0,if:!0,Profile:!0,Attribute:!0,includes:!0,"'Tax'\"":!0},"<script>\n    window.addEventListener('load', () => { // 1.\n        const regexSearchValue = /Tax/; // 2.\n        if (regexSearchValue.test('<ctrl:field name=Interests />')) { // 3.\n            document.querySelector('#alreadyInterested').value = 'True'; // 4.\n        };\n    };\n<\/script>\n"))),Object(o.b)(l.a,{value:"eloqua",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html",metastring:"title=\"Change value of a hidden form field if Field Merge value includes 'Tax'\"",title:'"Change',value:!0,of:!0,a:!0,hidden:!0,form:!0,field:!0,if:!0,Field:!0,Merge:!0,includes:!0,"'Tax'\"":!0},"<script>\n    window.addEventListener('load', () => { // 1.\n        const regexSearchValue = /Tax/; // 2.\n        if (regexSearchValue.test('<span class=eloquaemail>Interests1</span>')) { // 3.\n            document.querySelector('#alreadyInterested').value = 'True'; // 4.\n        };\n    };\n<\/script>\n")))),Object(o.b)("p",null,"In this scenario, we have a multi picklist field ",Object(o.b)("inlineCode",{parentName:"p"},"Interests")," that captures what fascinates specific customer. If he is captivated by more than one topic, the names are semicolon-separated. A nice marketing tactic is to enrich this list each time the customer engages with something directly related to a particular topic. For example, downloads your new whitepaper."),Object(o.b)("p",null,"In most Marketing Automation Platforms, it is straightforward to append a value to a column. Simple adding, however, leads to a (quite big) possibility of having duplicates. And this is neither good from the data quality perspective nor field length compliance."),Object(o.b)("p",null,"So how to use the above script to enrich your data cleanly? We will need a hidden form field inside the whitepaper download form. In the HTML look for (or create) hidden field input (",Object(o.b)("inlineCode",{parentName:"p"},"<input id='alreadyInterested' type='hidden' ...>"),"). The ",Object(o.b)("inlineCode",{parentName:"p"},"id")," attribute will be useful again."),Object(o.b)("p",null,"You already know the first line from the previous section. The new things come next. We declare value we want to check in our data model picklist. In this example, we will test whether the user is already interested in Tax topic. The ",Object(o.b)("inlineCode",{parentName:"p"},"/")," before and after the word are special characters used for a ",Object(o.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions",title:"MDN Documentation on Regular_Expressions"},"regular expression"),"."),Object(o.b)("p",null,"The third line is the fastest way to check whether the declared value is already in the ",Object(o.b)("inlineCode",{parentName:"p"},"Interests")," field."),Object(o.b)("p",null,"Finally, in case of the value already being in the multi picklist, we put True inside the hidden form field. It enables us to enforce on form processing to append new interest conditionally - only if the hidden field is blank in the submission data."),Object(o.b)("h2",{id:"create-conditional-logic"},"Create conditional logic"),Object(o.b)("p",null,"Simple manipulation of visibility and values on your landing page is just beginning. You can get even more out of scripted-backed personalisations and take control over user & data flows."),Object(o.b)("p",null,"Looking for an excellent way to tell your Google Analytics whether the user just downloaded a whitepaper or did he also wanted to receive product presentation on top of that? Not keen on creating two mirror-like Thank You pages with different conversion script? Sure!"),Object(o.b)(r.a,{groupId:"marketingAutomationPlatforms",defaultValue:"sfmc",values:[{label:"Salesforce Marketing Cloud",value:"sfmc"},{label:"Oracle Eloqua",value:"eloqua"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"sfmc",mdxType:"TabItem"},Object(o.b)("p",null,"Your form processing page should append date stamp to a data model field in case of the user becoming a lead (asking for a product presentation). This data, apart from being a great source of knowledge for your lead reporting and data processing trigger, will be handy for this solution."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},"<script>\n    const leadCreationDate = '<ctrl:field name=leadCreationDate />';\n    if (Date.now() - new Date(leadCreationDate) < 93600000) {\n        dataLayer.push({\n            // Your Lead conversion dataLayer model\n        });\n    } else {\n        dataLayer.push({\n            // Your Whitepaper conversion dataLayer model\n        });\n    }\n<\/script>\n"))),Object(o.b)(l.a,{value:"eloqua",mdxType:"TabItem"},Object(o.b)("p",null,"Your form should have a processing step that appends date stamp to a data model field in case of the user becoming a lead (asking for a product presentation). This data, apart from being a great source of knowledge for your lead reporting and data processing trigger, will be handy for this solution."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},"<script>\n    const leadCreationDate = '<span class=eloquaemail>LeadCreationTriggerDate1</span>';\n    if (Date.now() - new Date(leadCreationDate) < 93600000) {\n        dataLayer.push({\n            // Your Lead conversion dataLayer model\n        });\n    } else {\n        dataLayer.push({\n            // Your Whitepaper conversion dataLayer model\n        });\n    }\n<\/script>\n")))),Object(o.b)("p",null,"Why? Because once you have this script on your Thank You page, you can check how distant in the past the personalised date is. And if it is within minutes, you can be pretty sure the user just became your lead. Which tells the script to push the lead conversion data layer instead of the whitepaper data layer. Simple and quick."),Object(o.b)("p",null,"Remember to take into consideration the difference between local time and server time, which might play a role depending on the Marketing Automation Platform and configuration."),Object(o.b)("h3",{id:"possibilities-are-endless"},"Possibilities are endless."),Object(o.b)("p",null,"Want to be sure only recognised users will enter your subscription centre?"),Object(o.b)(r.a,{groupId:"marketingAutomationPlatforms",defaultValue:"sfmc",values:[{label:"Salesforce Marketing Cloud",value:"sfmc"},{label:"Oracle Eloqua",value:"eloqua"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"sfmc",mdxType:"TabItem"},Object(o.b)("p",null,"Add email address or contact key personalisation. If it is empty, it means Marketing Cloud did not recognise this user. JavaScript can automatically redirect him to your subscription centre entry form that will take care of authorization."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"}," if ('<ctrl:field name=\"Email Address\" />' == '') {\n    window.location.replace(\u200b'https://redirect.here')\n}\n")),Object(o.b)("p",null,"Want to double-check by querying the Salesforce Core? Add API call within the condition. You can also push some information from a data extension, or profile attributes to an external page. Personalise that data and use JavaScript to append it to redirect link as a query string or send it as a payload within POST call. Imagination is the only limit.")),Object(o.b)(l.a,{value:"eloqua",mdxType:"TabItem"},Object(o.b)("p",null,"Add email address Field Merge. If it is empty, it means Eloqua did not recognise this user. JavaScript can automatically redirect him to your subscription centre entry form that will take care of authorization."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"if ('<span class=eloquaemail>\u200bEmailAddress\u200b</span>' == '') {\n    window.location.replace(\u200b'https://redirect.here')\n}\n")),Object(o.b)("p",null,"Want to push some information from a data model to an external page? Field Merge that data and use JavaScript to append it to redirect link as a query string."),Object(o.b)("p",null,"You can get even more power with using dynamic content (perfect for simplifying javascript logic) or web data lookups (allows you to leverage email group subscription, shared list audience \u203a even on external websites). Imagination is the only limit."))))}m.isMDXComponent=!0}}]);