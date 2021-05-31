(self.webpackChunkmd=self.webpackChunkmd||[]).push([[87],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var d=2;d<r;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8921:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(7294),o=n(6010),r="tableOfContentsInline_3fWc";function s(e){var t=e.toc,n=e.isChild;return t.length?a.createElement("ul",{className:n?"":"table-of-contents"},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(s,{isChild:!0,toc:e.children}))}))):null}var i=function(e){var t=e.toc;return a.createElement("div",{className:(0,o.Z)(r)},a.createElement(s,{toc:t}))}},2043:function(e,t,n){"use strict";n.d(t,{m:function(){return r}});var a=n(7294),o="leadText_16va",r=function(e){var t=e.content;return a.createElement(a.Fragment,null,a.createElement("p",{id:o},t))}},3581:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),s=n(8921),i=n(2043),l={id:"ssjs-style-guide",title:"SSJS Style Guide",sidebar_label:"SSJS Style Guide",description:"Script with style. Readable code is a few rules & best practices away"},d={unversionedId:"ssjs/ssjs-style-guide",id:"ssjs/ssjs-style-guide",isDocsHomePage:!1,title:"SSJS Style Guide",description:"Script with style. Readable code is a few rules & best practices away",source:"@site/docs/ssjs/ssjs-style-guide.mdx",sourceDirName:"ssjs",slug:"/ssjs/ssjs-style-guide",permalink:"/docs/ssjs/ssjs-style-guide",editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/docs/ssjs/ssjs-style-guide.mdx",version:"current",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1622498616,formattedLastUpdatedAt:"6/1/2021",sidebar_label:"SSJS Style Guide",frontMatter:{id:"ssjs-style-guide",title:"SSJS Style Guide",sidebar_label:"SSJS Style Guide",description:"Script with style. Readable code is a few rules & best practices away"},sidebar:"snippets",previous:{title:"SSJS vs AMPScript Performance",permalink:"/docs/ssjs/ssjs-vs-ampscript-performance"},next:{title:"Solve with Cloud Apps",permalink:"/docs/usecase/sfmc-cloud-apps"}},p=[{value:"Letter Case",id:"letter-case",children:[{value:"JS Variables, Functions &amp; Methods Case",id:"js-variables-functions--methods-case",children:[]},{value:"SSJS Functions Case",id:"ssjs-functions-case",children:[]}]},{value:"Alignment and Indentation",id:"alignment-and-indentation",children:[{value:"Expanded Syntax",id:"expanded-syntax",children:[]},{value:"Consistent Indentation",id:"consistent-indentation",children:[]},{value:"Intentional Spacing",id:"intentional-spacing",children:[]}]},{value:"Debatable Styles",id:"debatable-styles",children:[{value:"Semicolons",id:"semicolons",children:[]},{value:"Consistent Quotes",id:"consistent-quotes",children:[]}]},{value:"Sum Up",id:"sum-up",children:[]}],c={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.m,{content:"Script with style. Readable code is a few rules & conventions away.",mdxType:"LeadText"}),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Table of Contents")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)(s.Z,{toc:p,mdxType:"TOCInline"}))),(0,r.kt)("p",null,"First things first: this Salesforce Marketing Cloud SSJS style guide is highly subjective. You may use it as it is, implement only some parts of it, or ignore it altogether. There are only two rules that I believe are a must-have:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Be consistent across your codebase."),(0,r.kt)("li",{parentName:"ol"},"Strive for good readability.")),(0,r.kt)("p",null,"Everything else is preference. And you are just about to learn about mine."),(0,r.kt)("h2",{id:"letter-case"},"Letter Case"),(0,r.kt)("p",null,"SSJS gives you a lot of freedom when it comes to letter case. But instead of going freestyle with that flexibility, we should leverage it to build something meaningful and readable. I decided to focus also on simplicity."),(0,r.kt)("h3",{id:"js-variables-functions--methods-case"},"JS Variables, Functions & Methods Case"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Use ",(0,r.kt)("inlineCode",{parentName:"strong"},"camelCase")," for all elements of JS syntax.")),(0,r.kt)("p",null,"The first category of the building blocks in your code will be JavaScript (ECMAScript 3 in case of SSJS) native elements. Variables (",(0,r.kt)("inlineCode",{parentName:"p"},"var")," only), functions (no array goodies), and methods."),(0,r.kt)("p",null,"For all of those I'm using ",(0,r.kt)("inlineCode",{parentName:"p"},"camelCase"),". It's the most popular convetion, so it will make it easier to work with other programmers, leverage code snippets and onboard new-to-SSJS people to SFMC development."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"/* \u2705 camelCase for JS syntax */\nvar variableName = 'Hello World';\nfunction functionName(variableName) {\n    return variableName.toLowerCase();\n};\n\n/* \u274c Random case */\nvar VARIABLENAME = 'Hello World';\nfunction FunctionName(variableName) {\n    return variableName.tolowercase();\n};\n")),(0,r.kt)("h3",{id:"ssjs-functions-case"},"SSJS Functions Case"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Use ",(0,r.kt)("inlineCode",{parentName:"strong"},"PascalCase")," for all elements of SSJS syntax.")),(0,r.kt)("p",null,"I take a different approach when working with SSJS Functions from both Platform and Core libraries. For any element coming from those, I use ",(0,r.kt)("inlineCode",{parentName:"p"},"PascalCase"),"."),(0,r.kt)("p",null,"Not only it allows to differentiate JavaScript native and SFMC custom elements, but it also follows the official SSJS documentation (and therefore most of the snippets you might find)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"/* \u2705 PamelCase for JS syntax */\nPlatform.Load('Core', '1');\nvar dataExtension = DataExtension.Retrieve({\n    Property: 'CustomerKey',\n    SimpleOperator: 'equals',\n    Value: 'dataExtensionExternalKey'\n});\n\n/* \u274c Random case */\nPLATFORM.LOAD('Core', '1');\nvar dataExtension = dataextensions.retrieve({\n    Property: 'CustomerKey',\n    SimpleOperator: 'equals',\n    Value: 'dataExtensionExternalKey'\n});\n")),(0,r.kt)("h2",{id:"alignment-and-indentation"},"Alignment and Indentation"),(0,r.kt)("p",null,"Letter case is just one element of syntax convention that helps with readability. Another huge one is alignment and indentation. JavaScript requires neither, but both can help you write better code."),(0,r.kt)("h3",{id:"expanded-syntax"},"Expanded Syntax"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sparse is better than dense.")),(0,r.kt)("p",null,"Readability counts. Having less lines is not worth mental gymnastics required to read a condensed code. It is also much easier to find unclosed brackets."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"/* \u2705 Expanded Variable Syntax */\nvar debugging = {\n    request: true,\n    response: true,\n    error: true\n};\n\n/* \u274c Condensed Variable Syntax */\nvar debugging = { request: true, response: true, error: true };\n\n/* \u2705 Expanded Function Syntax */\nfunction debugValue(description, value) {\n    Write(description + ': ' + (typeof value == 'object' ? Stringify(value) : value) + '<br><br>');\n};\n\n/* \u274c Condensed Function Syntax */\nfunction debugValue(description, value) { Write(description + ': ' + (typeof value == 'object' ? Stringify(value) : value) + '<br><br>'); };\n\n/* \u2705 Expanded Try/Catch Syntax */\ntry {\n    var response = HTTP.Get('http://www.example.c');\n} catch (error) {\n    handleError(error);\n};\n\n/* \u274c Condensed Try/Catch Syntax */\ntry { var response = HTTP.Get('http://www.example.c'); } catch (error) { handleError(error); };\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"You Should Know")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"I have two exceptions to this rule - both related to ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," statement shorthands."),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},"Ternary operator")),(0,r.kt)("p",{parentName:"div"},"Ternary simplifies basic ",(0,r.kt)("inlineCode",{parentName:"p"},"if"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"else")," statements, and when used correctly, it should be readable in a single line. If you fear it might be hard to understand, you probably shouldn't use the ternary operator in the first place."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"/* \u2705 Condensed Ternary Syntax */\ntypeof value == 'object' ? Stringify(value) : value;\n\n/* \u274c Expanded Ternary Syntax */\ntypeof value == 'object'\n    ? Stringify(value)\n    : value;\n\n/* \u274c Too Complex for Ternary Syntax */\ndebugging ? debugValue(error) : Platform.Function.InsertData('Data_Extension_Name', ['id', 'errorSource', 'errorMessage', 'errorDescription'], [GUID(), 'Name of the place where the script runs', Stringify(error.message), Stringify(error.description)]);\n")),(0,r.kt)("ol",{parentName:"div",start:2},(0,r.kt)("li",{parentName:"ol"},"Single line ",(0,r.kt)("inlineCode",{parentName:"li"},"if")," statements.")),(0,r.kt)("p",{parentName:"div"},"Similarly to ternary, single-line if statements also should be used only for basic ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," statements. Whenever there is any complexity (be it ",(0,r.kt)("inlineCode",{parentName:"p"},"else")," statement or just a longer case body), I always go with the expanded syntax."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"/* \u2705 Condensed Shorthand If Syntax */\nif (debugging) debugValue(error);\n\n/* \u2705 Expanded Standard If Syntax */\nif (debugging) {\n    debugValue(error);\n} else {\n    Platform.Function.InsertData('Data_Extension_Name', ['id', 'errorSource', 'errorMessage', 'errorDescription'], [GUID(), 'Name of the place where the script runs', Stringify(error.message), Stringify(error.description)]);\n};\n\n/* \u274c Too Complex for Shorthand If Syntax */\nif (response.StatusCode == 200) { var parsedResponse = Platform.Function.ParseJSON(String(response.Response)); if (!parsedResponse.success) throw 'Wrong reCAPTCHA'; };\n")),(0,r.kt)("p",{parentName:"div"},"It's up to you to decide how complex is too complex. Whenever in doubt - use expanded syntax."))),(0,r.kt)("h3",{id:"consistent-indentation"},"Consistent Indentation"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Use indentation to highlight code relationships.")),(0,r.kt)("p",null,"This rule extends the expanded syntax guide. Don't stop at expanding. Indent. It will help you quickly understand the relationships between the code lines."),(0,r.kt)("p",null,"The easy way to implement correct identation is to add a level whenever you open curly bracket and remove one whenever you close it. However, sometimes readability can be improved with even more identation, for example within expanded array."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"/* \u2705 Indented Syntax */\nfor (var i = 0; i < response.length - 1; i++) {\n    var responseRowData = response[i].split(',');\n    campaignData.push({\n        name: responseRowData[0],\n        id: responseRowData[1],\n        startDate: responseRowData[2],\n        endDate: responseRowData[3]\n    });\n};\n\n/* \u274c Flat Syntax */\nfor (var i = 0; i < response.length - 1; i++) {\nvar responseRowData = response[i].split(',');\ncampaignData.push({\nname: responseRowData[0],\nid: responseRowData[1],\nstartDate: responseRowData[2],\nendDate: responseRowData[3]\n});\n};\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"You Should Know")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"It's safer to use spaces instead of tabs for indentation. And it's more readable to use four spaces instead of two. You can configure your code editor to output four spaces on each Tab click."))),(0,r.kt)("h3",{id:"intentional-spacing"},"Intentional Spacing"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Use spaces wherever it makes the code more readable.")),(0,r.kt)("p",null,"To visually separate elements, use spaces:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Around operators."),(0,r.kt)("li",{parentName:"ul"},"Before opening curly bracket and after closing curly brakcet."),(0,r.kt)("li",{parentName:"ul"},"After commas."),(0,r.kt)("li",{parentName:"ul"},"After keywords (",(0,r.kt)("inlineCode",{parentName:"li"},"if"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"while"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),", etc.).")),(0,r.kt)("p",null,"To provide important context, don't add spaces:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"After opening and before closing non-curly brackets."),(0,r.kt)("li",{parentName:"ul"},"Between function name and arguments.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"/* \u2705 Intentional spacing */\nif (response.StatusCode != 200) {\n    throw {'message': 'HTTP.Get Error', 'description': 'Could not connect to example.com'}\n};\n\n/* \u274c Lack of spacing */\nif(response.StatusCode!=200){\n    throw{'message':'HTTP.Get Error','description':'Could not connect to example.com'}\n};\n\n/* \u2705 Intentional spacing */\nfunction debugValue(description, value) {\n    Write(description + ': ' + (typeof value == 'object' ? Stringify(value) : value) + '<br><br>');\n};\n\n/* \u274c Wrong spacing */\nfunction debugValue ( description, value ) {\n    Write ( description + ': ' + ( typeof value == 'object' ? Stringify( value ) : value ) + '<br><br>' );\n};\n")),(0,r.kt)("h2",{id:"debatable-styles"},"Debatable Styles"),(0,r.kt)("p",null,"Apart from letter case and indentation, some additional style rules are important to consider. Multiple arguments favour various conventions, so feel free not to follow my recommendation as long as you stay consistent across your code."),(0,r.kt)("h3",{id:"semicolons"},"Semicolons"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Add a semicolon after each statement.")),(0,r.kt)("p",null,"The semicolons in JavaScript are optional. You can do without them entirely. But I prefer to use them. Why?"),(0,r.kt)("p",null,"If you do not use semicolons, JS will add them for you using Automatic Semicolon Injection (ASI). In most cases, it works perfectly, but there might be some situations where the outcome is not what you expected. And that will lead to a very long and frustrating debugging session. If you want to think about ASI when writing, you may ignore semicolons."),(0,r.kt)("p",null,"If you don't want to worry about ASI, per JS language specification, you should:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mark the end of your simple statements with a semicolon ",(0,r.kt)("inlineCode",{parentName:"li"},";"),". Think variable declarations and operations."),(0,r.kt)("li",{parentName:"ul"},"Don't end complex statements with a semicolon. Think ",(0,r.kt)("a",{parentName:"li",href:"/docs/ssjs/ssjs-if-and-switch#if-statements"},(0,r.kt)("inlineCode",{parentName:"a"},"if"))," statements, ",(0,r.kt)("a",{parentName:"li",href:"/docs/ssjs/ssjs-loops"},"loops"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"functions"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"try/catch")," blocks."),(0,r.kt)("li",{parentName:"ul"},"But... you need a semicolon after the ",(0,r.kt)("a",{parentName:"li",href:"/docs/ssjs/ssjs-loops#do-while"},(0,r.kt)("inlineCode",{parentName:"a"},"do/while")," loop"),". Because JavaScript (and yeah, it is different from ",(0,r.kt)("a",{parentName:"li",href:"/docs/ssjs/ssjs-loops#while"},(0,r.kt)("inlineCode",{parentName:"a"},"while")," loop")," when considering the statement blocks). Oh, and you will need to add them in your ",(0,r.kt)("a",{parentName:"li",href:"/docs/ssjs/ssjs-loops#for"},(0,r.kt)("inlineCode",{parentName:"a"},"for")," loop")," iteration rules.")),(0,r.kt)("p",null,"That's also a bit to digest and worry about when writing the code. Let's simplify it."),(0,r.kt)("p",null,"While you don't ",(0,r.kt)("strong",{parentName:"p"},"need")," a semicolon after complex statements, it won't hurt. It can even help you if you plan to minify the code. So, to make it straightforward and fail-safe, I recommend adding it after each statement."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Keep calm and spam semicolons"',title:'"Keep',calm:!0,and:!0,spam:!0,'semicolons"':!0},"/* \u2705 Semicolons everywhere */\nfor (var i = 0; i < response.length - 1; i++) {\n    var responseRowData = response[i].split(',');\n    campaignData.push({\n        name: responseRowData[0],\n        id: responseRowData[1],\n        startDate: responseRowData[2],\n        endDate: responseRowData[3]\n    });\n};\n\n/* \u274c No semicolons - this will crash due to no semicolons between for iteration rules */\nfor (var i = 0 i < response.length - 1  i++) {\n    var responseRowData = response[i].split(',')\n    campaignData.push({\n        name: responseRowData[0],\n        id: responseRowData[1],\n        startDate: responseRowData[2],\n        endDate: responseRowData[3]\n    })\n}\n")),(0,r.kt)("h3",{id:"consistent-quotes"},"Consistent Quotes"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Use single quote style.")),(0,r.kt)("p",null,"With SSJS, you can use either single quotes (",(0,r.kt)("inlineCode",{parentName:"p"},"'"),") or double quotes (",(0,r.kt)("inlineCode",{parentName:"p"},'"'),"). Don't follow random approach of Salesforce SSJS documentation - choose one and be consistent."),(0,r.kt)("p",null,"I prefer single quotes for SSJS:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"I frequently use string variables with HTML that uses double quotes. Using single quotes in SSJS means no need to escape the ones in HTML."),(0,r.kt)("li",{parentName:"ol"},"On most keyboard (including mine), it doesn't require pressing Shift each time. Clicking one button is faster.")),(0,r.kt)("p",null,"However, there are also arguments for double quotes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"There are many English words using apostrophes, and using double quotes means no need to escape them"),(0,r.kt)("li",{parentName:"ol"},"JSON requires double-quotes.")),(0,r.kt)("p",null,"In the end, pick one, align with your team, and stay consistent. Yes, this means updating quotes after copy-pasting from Stack Overflow. RegEx is your friend ;)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"/* \u2705 Single Quotes */\nif (response.StatusCode != 200) {\n    throw {'message': 'HTTP.Get Error', 'description': 'Could not connect to example.com'};\n};\n\n/* \u2705 Double Quotes */\nif (response.StatusCode != 200) {\n    throw {\"message\": \"HTTP.Get Error\", \"description\": \"Could not connect to example.com\"};\n};\n\n/* \u274c Mixed Quotes */\nif (response.StatusCode != 200) {\n    throw {'message': \"HTTP.Get Error\", 'description': \"Could not connect to example.com\"};\n};\n")),(0,r.kt)("h2",{id:"sum-up"},"Sum Up"),(0,r.kt)("p",null,"It is a long article, so let's gather all the recommendations in one place:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Be consistent"),(0,r.kt)("li",{parentName:"ol"},"Strive for readability"),(0,r.kt)("li",{parentName:"ol"},"Use comments to provide required context to your script"),(0,r.kt)("li",{parentName:"ol"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"camelCase")," for all elements of JS syntax ",(0,r.kt)("a",{parentName:"li",href:"#js-variables-functions--methods-case"},"\ud83d\udd17")),(0,r.kt)("li",{parentName:"ol"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"PascalCase")," for all elements of SSJS syntax ",(0,r.kt)("a",{parentName:"li",href:"#ssjs-functions-case"},"\ud83d\udd17")),(0,r.kt)("li",{parentName:"ol"},"Sparse is better than dense ",(0,r.kt)("a",{parentName:"li",href:"#expanded-syntax"},"\ud83d\udd17")),(0,r.kt)("li",{parentName:"ol"},"Use indentation to highlight code relationships ",(0,r.kt)("a",{parentName:"li",href:"#consistent-indentation"},"\ud83d\udd17")),(0,r.kt)("li",{parentName:"ol"},"Use spaces wherever it makes the code more readable ",(0,r.kt)("a",{parentName:"li",href:"#intentional-spacing"},"\ud83d\udd17")),(0,r.kt)("li",{parentName:"ol"},"Add a semicolon after each statement ",(0,r.kt)("a",{parentName:"li",href:"#semicolons"},"\ud83d\udd17")),(0,r.kt)("li",{parentName:"ol"},"Use single quote style ",(0,r.kt)("a",{parentName:"li",href:"#consistent-quotes"},"\ud83d\udd17"))),(0,r.kt)("p",null,"If you want to share something I'm missing or have arguments for a different recommendation - ",(0,r.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/mateusz-dabrowski-marketing/"},"let me know"),"."),(0,r.kt)("p",null,"Looking for even more Marketing Cloud style? Check out my ",(0,r.kt)("a",{parentName:"p",href:"/docs/sql/sfmc-sql-style-guide"},"SFMC SQL Style Guide"),"."))}u.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);