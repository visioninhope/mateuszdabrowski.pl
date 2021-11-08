"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[2050],{4137:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return p}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=i,h=u["".concat(l,".").concat(p)]||u[p]||d[p]||o;return n?a.createElement(h,r(r({ref:t},m),{},{components:n})):a.createElement(h,r({ref:t},m))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1872:function(e,t,n){n.d(t,{m:function(){return o}});var a=n(7294),i="leadText_16va",o=function(e){var t=e.content;return a.createElement(a.Fragment,null,a.createElement("p",{id:i},t))}},5088:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return d},default:function(){return p}});var a=n(7462),i=n(3366),o=(n(7294),n(4137)),r=n(1872),s=["components"],l={id:"js-if-and-switch",title:"JS If & Switch",sidebar_label:"If & Switch",description:"Deep dive into the two pillars of JavaScript flow control.",image:"img/og/og-image-js-if-and-switch.png",tags:["JavaScript"]},c=void 0,m={unversionedId:"js/js-if-and-switch",id:"js/js-if-and-switch",isDocsHomePage:!1,title:"JS If & Switch",description:"Deep dive into the two pillars of JavaScript flow control.",source:"@site/docs/js/js-if-and-switch.mdx",sourceDirName:"js",slug:"/js/js-if-and-switch",permalink:"/docs/js/js-if-and-switch",editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/docs/js/js-if-and-switch.mdx",tags:[{label:"JavaScript",permalink:"/docs/tags/java-script"}],version:"current",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1630274625,formattedLastUpdatedAt:"8/30/2021",frontMatter:{id:"js-if-and-switch",title:"JS If & Switch",sidebar_label:"If & Switch",description:"Deep dive into the two pillars of JavaScript flow control.",image:"img/og/og-image-js-if-and-switch.png",tags:["JavaScript"]},sidebar:"snippets",previous:{title:"SSJS Script Template",permalink:"/docs/ssjs/ssjs-snippet-ssjs-script-template"},next:{title:"Loops",permalink:"/docs/js/js-loops"}},d=[{value:"If Statements",id:"if-statements",children:[{value:"And, Or, Brackets",id:"and-or-brackets",children:[],level:3},{value:"Boolean evaluation",id:"boolean-evaluation",children:[],level:3},{value:"Flip Booleans with Bang",id:"flip-booleans-with-bang",children:[],level:3},{value:"If Shorthand",id:"if-shorthand",children:[],level:3}],level:2},{value:"Ternary",id:"ternary",children:[],level:2},{value:"Shortcircuiting",id:"shortcircuiting",children:[{value:"Shortcircuiting OR",id:"shortcircuiting-or",children:[],level:3},{value:"Shortcircuiting AND",id:"shortcircuiting-and",children:[],level:3}],level:2},{value:"Switch Statement",id:"switch-statement",children:[],level:2}],u={toc:d};function p(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.m,{content:"Deep dive into the two pillars of JavaScript flow control",mdxType:"LeadText"}),(0,o.kt)("h2",{id:"if-statements"},"If Statements"),(0,o.kt)("p",null,"The most popular way of handling conditional logic is with the ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," statement. It is universal, flexible, and easy to understand. By evaluating a condition, it allows your script to either execute or omit part of the code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'{2} title="Create a segment of customers that made more than two purchases"',"{2}":!0,title:'"Create',a:!0,segment:!0,of:!0,customers:!0,that:!0,made:!0,more:!0,than:!0,two:!0,'purchases"':!0},"for (let customer of customers) {\n    if (customer.purchases > 2) {\n        marketingSegment.push(customer.email);\n    }\n}\n")),(0,o.kt)("p",null,"Basic ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," can be extended by adding optional ",(0,o.kt)("inlineCode",{parentName:"p"},"else if")," for an additional condition with the different outcome or optional ",(0,o.kt)("inlineCode",{parentName:"p"},"else")," for all scenarios not caught by above conditions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'{2,4,6} title="Create multiple segments for different levels of customers"',"{2,4,6}":!0,title:'"Create',multiple:!0,segments:!0,for:!0,different:!0,levels:!0,of:!0,'customers"':!0},"for (let customer of customers) {\n    if (customer.purchases > 10) {\n        goldCustomerSegment.push(customer.email);\n    } else if (customer.purchases > 5) {\n        silverCustomerSegment.push(customer.email);\n    } else {\n        bronzeCustomerSegment.push(customer.email);\n    }\n}\n")),(0,o.kt)("h3",{id:"and-or-brackets"},"And, Or, Brackets"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," statement is even more powerful if you enhance your conditions with the ORs (",(0,o.kt)("inlineCode",{parentName:"p"},"||"),"), ANDs (",(0,o.kt)("inlineCode",{parentName:"p"},"&&"),") and brackets:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'{2,4} title="Split customers into two segments depending on a condition group"',"{2,4}":!0,title:'"Split',customers:!0,into:!0,two:!0,segments:!0,depending:!0,on:!0,a:!0,condition:!0,'group"':!0},"for (let customer of customers) {\n    if (customer.purchases <=2 || customer.lastPurchaseDate <= new Date('2019-12-31')) {\n        reengagementCampaignSegment.push(customer);\n    } else if (customer.purchases > 2 && customer.lastPurchaseDate > new Date('2019-12-31')) {\n        upsellCampaignSegment.push(customer);\n    }\n}\n")),(0,o.kt)("h3",{id:"boolean-evaluation"},"Boolean evaluation"),(0,o.kt)("p",null,"You can use boolean values of variables/methods/functions to omit the operator in your condition and make the code more readable."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'{3} title="If the customer has domain of your competiton, add him to blocklist"',"{3}":!0,title:'"If',the:!0,customer:!0,has:!0,domain:!0,of:!0,your:!0,"competiton,":!0,add:!0,him:!0,to:!0,'blocklist"':!0},"for (let customer of customers) {\n    const competitionUser = customer.email.includes('@competition.com');\n    if (competitionUser) {  // if comptetitionUser is true, block will be exectuted\n        blocklist.push(customer);\n    }\n}\n")),(0,o.kt)("h3",{id:"flip-booleans-with-bang"},"Flip Booleans with Bang"),(0,o.kt)("p",null,"Bang symbol (",(0,o.kt)("inlineCode",{parentName:"p"},"!"),") can be used to flip the value of a boolean:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'{3} title="If the customer does not have competition domain in email, add him to campaign"',"{3}":!0,title:'"If',the:!0,customer:!0,does:!0,not:!0,have:!0,competition:!0,domain:!0,in:!0,"email,":!0,add:!0,him:!0,to:!0,'campaign"':!0},"for (let customer of customers) {\n    const competitionUser = customer.email.includes('@competition.com');\n    if (!competitionUser) {  // if not competition user, execute content\n        campaignSegment.push(customer);\n    }\n}\n")),(0,o.kt)("p",null,"Bang not only functions as a NOT operator but also changes truthy and falsy values into an (opposite) boolean."),(0,o.kt)("p",null,"Falsy values in JavaScript are: ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),", empty string ",(0,o.kt)("inlineCode",{parentName:"p"},'""'),", ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"NaN"),".\nAll other possible values are considered truthy."),(0,o.kt)("p",null,"This is very useful, as it allows you to leverage boolean evaluation on truthy values:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'{3} title="Applies either personalized name or default value"',"{3}":!0,title:'"Applies',either:!0,personalized:!0,name:!0,or:!0,default:!0,'value"':!0},"for (let customer of customers) {\n    let helloPersonalization;\n    if (customer.firstName) { // if customer.firstName has characters, it is truthy\n        helloPersonalization = customer.firstName;\n    } else if (!customer.firstName) { // if it does not have any characterrs, it will be falsy\n        helloPersonalization = 'Valued Customer';\n    }\n}\n")),(0,o.kt)("p",null,'To make it clear - above code is very "dirty" and can be written much better (for example without ',(0,o.kt)("inlineCode",{parentName:"p"},"else if")," by applying default value on variable initialization). You will find an example of how to write it better later."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"You Should Know")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can level up the use of this feature by leveraging double bang ",(0,o.kt)("inlineCode",{parentName:"p"},"!!")," to convert truthy/falsy value into an (appropriate) boolean."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="If optInDate has any value (is not empty) the isOptedIn variable will evaluate to true"',title:'"If',optInDate:!0,has:!0,any:!0,value:!0,"(is":!0,not:!0,"empty)":!0,the:!0,isOptedIn:!0,variable:!0,will:!0,evaluate:!0,to:!0,'true"':!0},"const isOptedIn = !!optInDate;\n")))),(0,o.kt)("h3",{id:"if-shorthand"},"If Shorthand"),(0,o.kt)("p",null,"For simple, one-line ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," statements, there is also a one-line shorthand:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="If the customer is opted in, send an email"',title:'"If',the:!0,customer:!0,is:!0,opted:!0,"in,":!0,send:!0,an:!0,'email"':!0},"if (isOptedIn) sendEmail(emailAddress, emailID);\n")),(0,o.kt)("p",null,"You could probably use simple ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," statements for the whole logic of your code. But you shouldn't. There are some interesting and useful options worth checking out."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"ternary"},"Ternary"),(0,o.kt)("p",null,"If a simple ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," statement has only two possible outcomes depending on a condition, ternary is more straightforward and readable alternative. Based on previous example, instead of:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"{2-7} title=\"Dirty if statement using basic 'if'\"","{2-7}":!0,title:'"Dirty',if:!0,statement:!0,using:!0,basic:!0,"'if'\"":!0},"for (let customer of customers) {\n    let helloPersonalization = 'Hello ';\n    if (customer.firstName) {\n        helloPersonalization += customer.firstName;\n    } else if (!customer.firstName) {\n        helloPersonalization += 'Valued Customer';\n    }\n}\n")),(0,o.kt)("p",null,"we can use a clean ternary:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'{2} title="Same logic changed to a clean ternary"',"{2}":!0,title:'"Same',logic:!0,changed:!0,to:!0,a:!0,clean:!0,'ternary"':!0},"for (let customer of customers) {\n    let helloPersonalization = customer.firstName ? 'Hello ' + customer.firstName : 'Hello Valued Customer';\n}\n")),(0,o.kt)("p",null,"Instead of 6 lines of code, we have 1. Awesome! But how does it work? The ternary structure looks like this: ",(0,o.kt)("inlineCode",{parentName:"p"},"variable = condition ? valueIfTrue : valueIfFalse;"),". So in the example above, if the ",(0,o.kt)("inlineCode",{parentName:"p"},"customer.firstName")," is not empty (is truthy), it will be pushed as the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"helloPersonalization"),". If it is empty, the default value will be assigned instead."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"You Should Know")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ternary has more uses not than just the standard ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," statement. It is awesome text customization with interpolation:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Fill in the sentence with different words depending on boolean value of isOptedIn"',title:'"Fill',in:!0,the:!0,sentence:!0,with:!0,different:!0,words:!0,depending:!0,on:!0,boolean:!0,value:!0,of:!0,'isOptedIn"':!0},"const optInStatusMessage = `You are ${isOptedIn ? 'opted in' : 'not opted in'}`;\n")),(0,o.kt)("p",{parentName:"div"},"Ternaries are not limited to variables and strings. They can also run functions:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="If isLoggedIn is false, the redirectToLogInPage function will be executed"',title:'"If',isLoggedIn:!0,is:!0,"false,":!0,the:!0,redirectToLogInPage:!0,function:!0,will:!0,be:!0,'executed"':!0},"!isLoggedIn ? redirectToLogInPage() : null;\n")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"shortcircuiting"},"Shortcircuiting"),(0,o.kt)("p",null,"We already covered using OR ",(0,o.kt)("inlineCode",{parentName:"p"},"||")," + AND ",(0,o.kt)("inlineCode",{parentName:"p"},"&&")," operators. But by using them correctly, you can optimize the speed of your scripts greatly."),(0,o.kt)("h3",{id:"shortcircuiting-or"},"Shortcircuiting OR"),(0,o.kt)("p",null,"OR evaluates to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if ",(0,o.kt)("em",{parentName:"p"},"at least one")," value is equal to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("p",null,"If the left side of the OR evaluates to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", we know for sure that the whole statement is ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),". Checking the value of the right side is not needed. And JavaScript knows this too."),(0,o.kt)("p",null,"Thanks to it, if we want to use an OR statement and we suspect that one side is much faster than the other, we should use it on the left side."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",2020:!0,className:"language-js",metastring:'{2} title="If last purchase was before 2020 or a very complex check requiring calls to eCommerce API evaluates to false, filter out the customer from the campaign"',"{2}":!0,title:'"If',last:!0,purchase:!0,was:!0,before:!0,or:!0,a:!0,very:!0,complex:!0,check:!0,requiring:!0,calls:!0,to:!0,eCommerce:!0,API:!0,evaluates:!0,"false,":!0,filter:!0,out:!0,the:!0,customer:!0,from:!0,'campaign"':!0},"for (let customer of customers) {\n    if (customer.lastPurchaseDate < new Date('2019-12-31') || complexRequestToEcommerceAPI() === false) {\n        exclusionSegment.push(customer)\n    }\n}\n")),(0,o.kt)("p",null,"Left side in the above example is a straightforward and quick check, as all parts of the condition are already within the script. The right side, however, might take seconds to get the data from other system and calculate the value. If the ",(0,o.kt)("inlineCode",{parentName:"p"},"lastPurchaseDate")," is before our threshold, we don't have to waste time and API calls. A win for us, and a win for the customer waiting for the script to finish."),(0,o.kt)("h3",{id:"shortcircuiting-and"},"Shortcircuiting AND"),(0,o.kt)("p",null,"Similar logic can be applied to AND operator. ",(0,o.kt)("inlineCode",{parentName:"p"},"&&")," evaluates to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," only if ",(0,o.kt)("em",{parentName:"p"},"both sides")," are ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),". If we have a more straightforward condition or we suspect it might frequently evaluate to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", we should put it on the left side. If it ends up being falsy, JavaScript won't be checking the right side of the AND operator."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'{1} title="If the email provided for login is in correct format, check if password has required length. Once validated, check if this login and password are matching pair for a user. Only then consider the login to be valid"',"{1}":!0,title:'"If',the:!0,email:!0,provided:!0,for:!0,login:!0,is:!0,in:!0,correct:!0,"format,":!0,check:!0,if:!0,password:!0,has:!0,required:!0,"length.":!0,Once:!0,"validated,":!0,this:!0,and:!0,are:!0,matching:!0,pair:!0,a:!0,"user.":!0,Only:!0,then:!0,consider:!0,to:!0,be:!0,'valid"':!0},"if (isValidEmail(login) && isValidPassword(password) && isValidPair(email, password)) {\n    const isLoggedIn = true;\n}\n")),(0,o.kt)("p",null,"In the above example, we are doing multiple tests ordered from the easiest to the hardest. Thanks to it, if the login is not in the correct format for an email address, we won't have even to check the password or query our encrypted database with a hashed version of the password."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"You Should Know")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Using shortcircuit is a quite popular pattern, especially for managing user interface components:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="If the user is not an admin, shortcircuit and don\'t render the AdminBar component"',title:'"If',the:!0,user:!0,is:!0,not:!0,an:!0,"admin,":!0,shortcircuit:!0,and:!0,"don't":!0,render:!0,AdminBar:!0,'component"':!0},"isAdmin && showAdminBar()\n")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"switch-statement"},"Switch Statement"),(0,o.kt)("p",null,"Sometimes you have many options for a single condition. You could write it with a simple ",(0,o.kt)("inlineCode",{parentName:"p"},"if"),", but the ",(0,o.kt)("inlineCode",{parentName:"p"},"switch")," might be much more readable than a long list of ",(0,o.kt)("inlineCode",{parentName:"p"},"else if")," statements with nearly identical conditions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Return the error type based on the code"',title:'"Return',the:!0,error:!0,type:!0,based:!0,on:!0,'code"':!0},"function errorDescription(error) {\n    switch (error.code) {\n        case 400:\n            return 'Bad Request';\n        case 401:\n            return 'Unauthorized';\n        case 403:\n            return 'Forbidden';\n        case 404:\n            return 'Not Found'\n        default:\n            return 'Unknown Error';\n    }\n}\n")),(0,o.kt)("p",null,"Some things to remember when working with a ",(0,o.kt)("inlineCode",{parentName:"p"},"switch"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If multiple cases fulfil the condition, a ",(0,o.kt)("inlineCode",{parentName:"li"},"switch")," will execute the first from the top."),(0,o.kt)("li",{parentName:"ul"},"You can assign multiple cases to the same code block:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'{3-5,8-9} title="Return either sum or difference of two values (sum by default)"',"{3-5,8-9}":!0,title:'"Return',either:!0,sum:!0,or:!0,difference:!0,of:!0,two:!0,values:!0,"(sum":!0,by:!0,'default)"':!0},"let outcome;\nswitch (a, operation, b) {\n    default:\n    case '+':\n    case 'plus':\n        outcome = a + b;\n        break;\n    case '-':\n    case 'minus':\n        outcome = a - b;\n        break;\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use either ",(0,o.kt)("inlineCode",{parentName:"li"},"break")," statement to end each case or use the ",(0,o.kt)("inlineCode",{parentName:"li"},"return")," statement if in function. Otherwise, the switch will also execute all below cases until it encounters one of the above keywords (or hits the last scenario). Of course, there might be some edge scenarios where you want this exact behaviour to happen."),(0,o.kt)("li",{parentName:"ul"},"Always use ",(0,o.kt)("inlineCode",{parentName:"li"},"default")," statement, even if you believe it will never be triggered (not required, but best practice). Use it to handle the scenario you haven't considered."),(0,o.kt)("li",{parentName:"ul"},"Cases in a ",(0,o.kt)("inlineCode",{parentName:"li"},"switch")," are using strict comparison (",(0,o.kt)("inlineCode",{parentName:"li"},"==="),") for evaluation, so the provided value must match the case not only by value but also by type. A string value of ",(0,o.kt)("inlineCode",{parentName:"li"},"'0'")," won't trigger an integer ",(0,o.kt)("inlineCode",{parentName:"li"},"0")," case.")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"You Should Know")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"By default, the switch statement is a single block for the scope. If you, however, want to declare variables of the same name in different cases, you can do it by adding parentheses:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"{4,7,9,12} title=\"Despite 'outcome' variable being initialized twice with 'let', it will not drop an error because of two different block scopes\"","{4,7,9,12}":!0,title:'"Despite',"'outcome'":!0,variable:!0,being:!0,initialized:!0,twice:!0,with:!0,"'let',":!0,it:!0,will:!0,not:!0,drop:!0,an:!0,error:!0,because:!0,of:!0,two:!0,different:!0,block:!0,'scopes"':!0},"switch (a, operation, b) {\n    default:\n    case '+':\n    case 'plus': {\n        let outcome = a + b;\n        break;\n    }\n    case '-':\n    case 'minus': {\n        let outcome = a - b;\n        break;\n    }\n}\n")))))}p.isMDXComponent=!0}}]);