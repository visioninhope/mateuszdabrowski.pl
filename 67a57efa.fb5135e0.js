(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,p=b["".concat(o,".").concat(d)]||b[d]||m[d]||r;return n?i.a.createElement(p,s(s({ref:t},l),{},{components:n})):i.a.createElement(p,s({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},106:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(0),i=n.n(a),r=n(53),o=n.n(r),s=function(e){var t=e.content;return i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{id:o.a.leadText},t))}},107:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},110:function(e,t,n){"use strict";var a=n(0),i=n(111);t.a=function(){var e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},111:function(e,t,n){"use strict";var a=n(0),i=Object(a.createContext)(void 0);t.a=i},112:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(110),o=n(107),s=n(54),c=n.n(s),l=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,s=e.children,b=e.defaultValue,m=e.values,d=e.groupId,p=e.className,h=Object(r.a)(),f=h.tabGroupChoices,g=h.setTabGroupChoices,O=Object(a.useState)(b),j=O[0],v=O[1];if(null!=d){var w=f[d];null!=w&&w!==j&&m.some((function(e){return e.value===w}))&&v(w)}var y=function(e){v(e),null!=d&&g(d,e)},N=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},p)},m.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return y(t)},onClick:function(){y(t)}},n)}))),t?Object(a.cloneElement)(s.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},s.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},113:function(e,t,n){"use strict";var a=n(3),i=n(0),r=n.n(i);t.a=function(e){var t=e.children,n=e.hidden,i=e.className;return r.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:i}),t)}},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),i=n(8),r=(n(0),n(105)),o=(n(112),n(113),n(106)),s={id:"ssjs-if-and-switch",title:"SSJS If & Switch",sidebar_label:"If & Switch",description:"Deep dive into the two pillars of SSJS flow control"},c={unversionedId:"ssjs/ssjs-if-and-switch",id:"ssjs/ssjs-if-and-switch",isDocsHomePage:!1,title:"SSJS If & Switch",description:"Deep dive into the two pillars of SSJS flow control",source:"@site/docs/ssjs/ssjs-if-and-switch.mdx",slug:"/ssjs/ssjs-if-and-switch",permalink:"/docs/ssjs/ssjs-if-and-switch",editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/docs/ssjs/ssjs-if-and-switch.mdx",version:"current",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1600110888,sidebar_label:"If & Switch",sidebar:"snippets",previous:{title:"Docs & Snippets",permalink:"/docs/"},next:{title:"SSJS Loops",permalink:"/docs/ssjs/ssjs-loops"}},l=[{value:"If Statements",id:"if-statements",children:[{value:"And, Or, Brackets",id:"and-or-brackets",children:[]},{value:"Boolean evaluation",id:"boolean-evaluation",children:[]},{value:"Flip Booleans with Bang",id:"flip-booleans-with-bang",children:[]},{value:"If shorthand",id:"if-shorthand",children:[]}]},{value:"Shortcircuiting",id:"shortcircuiting",children:[{value:"Shortcircuiting OR",id:"shortcircuiting-or",children:[]},{value:"Shortcircuiting AND",id:"shortcircuiting-and",children:[]},{value:"Pseudo-Ternary",id:"pseudo-ternary",children:[]}]},{value:"Switch Statement",id:"switch-statement",children:[]}],u={rightToc:l};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(o.a,{content:"Deep dive into the two pillars of SSJS flow control",mdxType:"LeadText"}),Object(r.b)("h2",{id:"if-statements"},"If Statements"),Object(r.b)("p",null,"The most popular way of handling conditional logic is with the ",Object(r.b)("inlineCode",{parentName:"p"},"if")," statement. It is universal, flexible, and easy to understand. By evaluating a condition, it allows your script to either execute or omit part of the code."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{2} title="Create a segment of customers that made more than two purchases"',"{2}":!0,title:'"Create',a:!0,segment:!0,of:!0,customers:!0,that:!0,made:!0,more:!0,than:!0,two:!0,'purchases"':!0}),"for (var customer in customers) {\n    if (customer.purchases > 2) {\n        marketingSegment.push(customer.email);\n    }\n}\n")),Object(r.b)("p",null,"Basic ",Object(r.b)("inlineCode",{parentName:"p"},"if")," can be extended by adding optional ",Object(r.b)("inlineCode",{parentName:"p"},"else if")," for an additional condition with the different outcome or optional ",Object(r.b)("inlineCode",{parentName:"p"},"else")," for all scenarios not caught by above conditions."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{2,4,6} title="Create multiple segments for different levels of customers"',"{2,4,6}":!0,title:'"Create',multiple:!0,segments:!0,for:!0,different:!0,levels:!0,of:!0,'customers"':!0}),"for (var customer in customers) {\n    if (customer.purchases > 10) {\n        goldCustomerSegment.push(customer.email);\n    } else if (customer.purchases > 5) {\n        silverCustomerSegment.push(customer.email);\n    } else {\n        bronzeCustomerSegment.push(customer.email);\n    }\n}\n")),Object(r.b)("h3",{id:"and-or-brackets"},"And, Or, Brackets"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"if")," statement is even more powerful if you enhance your conditions with the ORs (",Object(r.b)("inlineCode",{parentName:"p"},"||"),"), ANDs (",Object(r.b)("inlineCode",{parentName:"p"},"&&"),") and brackets:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{2,4} title="Split customers into two segments depending on a condition group"',"{2,4}":!0,title:'"Split',customers:!0,into:!0,two:!0,segments:!0,depending:!0,on:!0,a:!0,condition:!0,'group"':!0}),"for (var customer in customers) {\n    if (customer.purchases <=2 || customer.lastPurchaseDate <= new Date('2019-12-31')) {\n        reengagementCampaignSegment.push(customer);\n    } else if (customer.purchases > 2 && customer.lastPurchaseDate > new Date('2019-12-31')) {\n        upsellCampaignSegment.push(customer);\n    }\n}\n")),Object(r.b)("h3",{id:"boolean-evaluation"},"Boolean evaluation"),Object(r.b)("p",null,"You can use boolean values of variables/methods/functions to omit the operator in your condition and make the code more readable."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{3} title="If the customer has domain of your competiton, add him to blocklist"',"{3}":!0,title:'"If',the:!0,customer:!0,has:!0,domain:!0,of:!0,your:!0,"competiton,":!0,add:!0,him:!0,to:!0,'blocklist"':!0}),"for (var customer in customers) {\n    var competitionUser = customer.email.includes('@competition.com');\n    if (competitionUser) {  // if comptetitionUser is true, block will be exectuted\n        blocklist.push(customer);\n    }\n}\n")),Object(r.b)("h3",{id:"flip-booleans-with-bang"},"Flip Booleans with Bang"),Object(r.b)("p",null,"Bang symbol (",Object(r.b)("inlineCode",{parentName:"p"},"!"),") can be used to flip the value of a boolean:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{3} title="If the customer does not have competition domain in email, add him to campaign"',"{3}":!0,title:'"If',the:!0,customer:!0,does:!0,not:!0,have:!0,competition:!0,domain:!0,in:!0,"email,":!0,add:!0,him:!0,to:!0,'campaign"':!0}),"for (var customer in customers) {\n    var competitionUser = customer.email.toLowerCase().indexOf('@competition.com') >= 0;\n    if (!competitionUser) {  // if not competition user, execute content\n        campaignSegment.push(customer);\n    }\n}\n")),Object(r.b)("p",null,"Bang not only functions as a NOT operator but also changes truthy and falsy values into an (opposite) boolean."),Object(r.b)("p",null,"Falsy values in JavaScript are: ",Object(r.b)("inlineCode",{parentName:"p"},"false"),", ",Object(r.b)("inlineCode",{parentName:"p"},"0"),", empty string ",Object(r.b)("inlineCode",{parentName:"p"},'""'),", ",Object(r.b)("inlineCode",{parentName:"p"},"null"),", ",Object(r.b)("inlineCode",{parentName:"p"},"undefined"),", ",Object(r.b)("inlineCode",{parentName:"p"},"NaN"),".\nAll other possible values are considered truthy."),Object(r.b)("p",null,"This is very useful, as it allows you to leverage boolean evaluation on truthy values:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{3} title="Applies either personalized name or default value"',"{3}":!0,title:'"Applies',either:!0,personalized:!0,name:!0,or:!0,default:!0,'value"':!0}),"for (var customer in customers) {\n    var helloPersonalization;\n    if (customer.firstName) { // if customer.firstName has characters, it is truthy\n        helloPersonalization = customer.firstName;\n    } else if (!customer.firstName) { // if it does not have any characterrs, it will be falsy\n        helloPersonalization = 'Valued Customer';\n    }\n}\n")),Object(r.b)("p",null,'To make it clear - above code is very "dirty" and can be written much better (for example without ',Object(r.b)("inlineCode",{parentName:"p"},"else if")," by applying default value on variable initialization). You will find an example of how to write it better later."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"You Should Know")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"You can level up the use of this feature by leveraging double bang ",Object(r.b)("inlineCode",{parentName:"p"},"!!")," to convert truthy/falsy value into an (appropriate) boolean."),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="If optInDate has any value (is not empty) the isOptedIn variable will evaluate to true"',title:'"If',optInDate:!0,has:!0,any:!0,value:!0,"(is":!0,not:!0,"empty)":!0,the:!0,isOptedIn:!0,variable:!0,will:!0,evaluate:!0,to:!0,'true"':!0}),"var isOptedIn = !!optInDate;\n")))),Object(r.b)("h3",{id:"if-shorthand"},"If shorthand"),Object(r.b)("p",null,"For simple, one-line ",Object(r.b)("inlineCode",{parentName:"p"},"if")," statements, there is also a one-line shorthand:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="If the customer is opted in, send an email"',title:'"If',the:!0,customer:!0,is:!0,opted:!0,"in,":!0,send:!0,an:!0,'email"':!0}),"if (isOptedIn) sendEmail(emailAddress, emailID);\n")),Object(r.b)("p",null,"You could probably use simple ",Object(r.b)("inlineCode",{parentName:"p"},"if")," conditions for the whole logic of your code. But you shouldn't. There are some interesting and useful options worth checking out."),Object(r.b)("hr",null),Object(r.b)("h2",{id:"shortcircuiting"},"Shortcircuiting"),Object(r.b)("p",null,"We already covered using OR ",Object(r.b)("inlineCode",{parentName:"p"},"||")," + AND ",Object(r.b)("inlineCode",{parentName:"p"},"&&")," operators. But by using them correctly, you can optimize the speed of your scripts greatly."),Object(r.b)("h3",{id:"shortcircuiting-or"},"Shortcircuiting OR"),Object(r.b)("p",null,"OR evaluates to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," if ",Object(r.b)("em",{parentName:"p"},"at least one")," value is equal to ",Object(r.b)("inlineCode",{parentName:"p"},"true"),"."),Object(r.b)("p",null,"If the left side of the OR evaluates to ",Object(r.b)("inlineCode",{parentName:"p"},"true"),", we know for sure that the whole statement is ",Object(r.b)("inlineCode",{parentName:"p"},"true"),". Checking the value of the right side is not needed. And JavaScript knows this too."),Object(r.b)("p",null,"Thanks to it, if we want to use an OR statement and we suspect that one side is much faster than the other, we should use it on the left side."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{2020:!0,className:"language-js",metastring:'{2} title="If last purchase was before 2020 or a very complex check requiring calls to eCommerce API evaluates to false, filter out the customer from the campaign"',"{2}":!0,title:'"If',last:!0,purchase:!0,was:!0,before:!0,or:!0,a:!0,very:!0,complex:!0,check:!0,requiring:!0,calls:!0,to:!0,eCommerce:!0,API:!0,evaluates:!0,"false,":!0,filter:!0,out:!0,the:!0,customer:!0,from:!0,'campaign"':!0}),"for (var customer in customers) {\n    if (customer.lastPurchaseDate < new Date('2019-12-31') || complexRequestToEcommerceAPI() === false) {\n        exclusionSegment.push(customer)\n    }\n}\n")),Object(r.b)("p",null,"Left side in the above example is a straightforward and quick check, as all parts of the condition are already within the script. The right side, however, might take seconds to get the data from other system and calculate the value. If the ",Object(r.b)("inlineCode",{parentName:"p"},"lastPurchaseDate")," is before our threshold, we don't have to waste time and API calls. A win for us, and a win for the customer waiting for the script to finish."),Object(r.b)("h3",{id:"shortcircuiting-and"},"Shortcircuiting AND"),Object(r.b)("p",null,"Similar logic can be applied to AND operator. ",Object(r.b)("inlineCode",{parentName:"p"},"&&")," evaluates to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," only if ",Object(r.b)("em",{parentName:"p"},"both sides")," are ",Object(r.b)("inlineCode",{parentName:"p"},"true"),". If we have a more straightforward condition or we suspect it might frequently evaluate to ",Object(r.b)("inlineCode",{parentName:"p"},"false"),", we should put it on the left side. If it ends up being falsy, JavaScript won't be checking the right side of the AND operator."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{1} title="If the email provided for login is in correct format, check if password has required length. Once validated, check if this login and password are matching pair for a user. Only then consider the login to be valid"',"{1}":!0,title:'"If',the:!0,email:!0,provided:!0,for:!0,login:!0,is:!0,in:!0,correct:!0,"format,":!0,check:!0,if:!0,password:!0,has:!0,required:!0,"length.":!0,Once:!0,"validated,":!0,this:!0,and:!0,are:!0,matching:!0,pair:!0,a:!0,"user.":!0,Only:!0,then:!0,consider:!0,to:!0,be:!0,'valid"':!0}),"if (isValidEmail(login) && isValidPassword(password) && isValidPair(email, password)) {\n    var isLoggedIn = true;\n}\n")),Object(r.b)("p",null,"In the above example, we are doing multiple tests ordered from the easiest to the hardest. Thanks to it, if the login is not in the correct format for an email address, we won't have even to check the password or query our encrypted database with a hashed version of the password."),Object(r.b)("h3",{id:"pseudo-ternary"},"Pseudo-Ternary"),Object(r.b)("p",null,"Despite the JavaScript ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"./js-if-and-switch.mdx#ternary"}),"ternary")," operator is not supported in SSJS, you can leverage shortcircuiting to get the same outcome. If a simple ",Object(r.b)("inlineCode",{parentName:"p"},"if")," statement has only two possible outcomes depending on a condition, ternary is more straightforward and readable alternative. Based on previous example, instead of:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{2-7} title=\"Dirty if statement using basic 'if'\"","{2-7}":!0,title:'"Dirty',if:!0,statement:!0,using:!0,basic:!0,"'if'\"":!0}),"for (var customer in customers) {\n    var helloPersonalization;\n    if (customer.firstName) {\n        helloPersonalization = 'Hello' + customer.firstName;\n    } else if (!customer.firstName) {\n        helloPersonalization = 'Hello Valued Customer';\n    }\n}\n")),Object(r.b)("p",null,"we can use a clean pseudo-ternary:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{2} title="Same logic changed to a pseudo-ternary"',"{2}":!0,title:'"Same',logic:!0,changed:!0,to:!0,a:!0,'pseudo-ternary"':!0}),"for (var customer in customers) {\n    var helloPersonalization = customer.firstName && 'Hello' + customer.firstName || 'Hello Valued Customer';\n}\n")),Object(r.b)("p",null,"Instead of 6 lines of code, we have 1. Awesome! But how does it work? The pseudo-ternary structure looks like this: ",Object(r.b)("inlineCode",{parentName:"p"},"variable = condition && valueIfTrue || valueIfFalse;"),". So in the example above, if the ",Object(r.b)("inlineCode",{parentName:"p"},"customer.firstName")," is not empty (is truthy), it will be pushed as the value of ",Object(r.b)("inlineCode",{parentName:"p"},"helloPersonalization"),". If it is empty, the default value will be assigned instead."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"You Should Know")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"You can leverage similar logic to trigger functions or ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"./debugging-ssjs#debugging-variable"}),"debugging"),":"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="If isLoggedIn is false, the redirectToLogInPage function will be executed"',title:'"If',isLoggedIn:!0,is:!0,"false,":!0,the:!0,redirectToLogInPage:!0,function:!0,will:!0,be:!0,'executed"':!0}),"!isLoggedIn && redirectToLogInPage();\n")))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"switch-statement"},"Switch Statement"),Object(r.b)("p",null,"Sometimes you have many options for a single condition. You could write it with a simple ",Object(r.b)("inlineCode",{parentName:"p"},"if"),", but the ",Object(r.b)("inlineCode",{parentName:"p"},"switch")," might be much more readable than a long list of ",Object(r.b)("inlineCode",{parentName:"p"},"else if")," statements with nearly identical conditions. In SSJS switch is especially useful for centralized handler page you query from multiple front ends."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="Return the error type based on the code"',title:'"Return',the:!0,error:!0,type:!0,based:!0,on:!0,'code"':!0}),"function errorDescription(error) {\n    switch (error.code) {\n        case 400:\n            return 'Bad Request';\n        case 401:\n            return 'Unauthorized';\n        case 403:\n            return 'Forbidden';\n        case 404:\n            return 'Not Found'\n        default:\n            return 'Unknown Error';\n    }\n}\n")),Object(r.b)("p",null,"Some things to remember when working with a ",Object(r.b)("inlineCode",{parentName:"p"},"switch"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If multiple cases fulfil the condition, a ",Object(r.b)("inlineCode",{parentName:"li"},"switch")," will execute the first from the top."),Object(r.b)("li",{parentName:"ul"},"You can assign multiple cases to the same code block:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{3-5,8-9} title="Return either sum or difference of two values (sum by default)"',"{3-5,8-9}":!0,title:'"Return',either:!0,sum:!0,or:!0,difference:!0,of:!0,two:!0,values:!0,"(sum":!0,by:!0,'default)"':!0}),"var outcome;\nswitch (a, operation, b) {\n    default:\n    case '+':\n    case 'plus':\n        outcome = a + b;\n        break;\n    case '-':\n    case 'minus':\n        outcome = a - b;\n        break;\n}\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Use either ",Object(r.b)("inlineCode",{parentName:"li"},"break")," statement to end each case or use the ",Object(r.b)("inlineCode",{parentName:"li"},"return")," statement if in function. Otherwise, the switch will also execute all below cases until it encounters one of the above keywords (or hits the last scenario). Of course, there might be some edge scenarios where you want this exact behaviour to happen."),Object(r.b)("li",{parentName:"ul"},"Always use ",Object(r.b)("inlineCode",{parentName:"li"},"default")," statement, even if you believe it will never be triggered (not required, but best practice). Use it to handle the scenario you haven't considered."),Object(r.b)("li",{parentName:"ul"},"Cases in a ",Object(r.b)("inlineCode",{parentName:"li"},"switch")," are using strict comparison (",Object(r.b)("inlineCode",{parentName:"li"},"==="),") for evaluation, so the provided value must match the case not only by value but also by type. A string value of ",Object(r.b)("inlineCode",{parentName:"li"},"'0'")," won't trigger an integer ",Object(r.b)("inlineCode",{parentName:"li"},"0")," case.")))}b.isMDXComponent=!0}}]);