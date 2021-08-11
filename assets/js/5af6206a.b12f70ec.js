"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[7292],{4137:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(h,s(s({ref:t},c),{},{components:r})):n.createElement(h,s({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2043:function(e,t,r){r.d(t,{m:function(){return o}});var n=r(7294),a="leadText_16va",o=function(e){var t=e.content;return n.createElement(n.Fragment,null,n.createElement("p",{id:a},t))}},1762:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var n=r(2122),a=r(9756),o=(r(7294),r(4137)),s=r(2043),i=["components"],l={id:"ssjs-snippet-ssjs-script-template",title:"SSJS Script Template",sidebar_label:"SSJS Script Template",description:"Jumpstart your coding with best practice fueled SSJS Template."},p=void 0,c={unversionedId:"ssjs/ssjs-snippet-ssjs-script-template",id:"ssjs/ssjs-snippet-ssjs-script-template",isDocsHomePage:!1,title:"SSJS Script Template",description:"Jumpstart your coding with best practice fueled SSJS Template.",source:"@site/docs/ssjs/ssjs-snippet-ssjs-script-template.mdx",sourceDirName:"ssjs",slug:"/ssjs/ssjs-snippet-ssjs-script-template",permalink:"/docs/ssjs/ssjs-snippet-ssjs-script-template",editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/docs/ssjs/ssjs-snippet-ssjs-script-template.mdx",version:"current",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1628199943,formattedLastUpdatedAt:"8/5/2021",frontMatter:{id:"ssjs-snippet-ssjs-script-template",title:"SSJS Script Template",sidebar_label:"SSJS Script Template",description:"Jumpstart your coding with best practice fueled SSJS Template."},sidebar:"snippets",previous:{title:"MobileConnect Phone Change",permalink:"/docs/ssjs/ssjs-snippet-mobileconnect-phone-change"},next:{title:"If & Switch",permalink:"/docs/js/js-if-and-switch"}},d=[{value:"SSJS Template Code",id:"ssjs-template-code",children:[]},{value:"SSJS Template Description",id:"ssjs-template-description",children:[{value:"Table of Contents",id:"table-of-contents",children:[]},{value:"Global Variables",id:"global-variables",children:[]},{value:"Helper Functions",id:"helper-functions",children:[]},{value:"Script Body",id:"script-body",children:[]}]}],u={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(s.m,{content:"Jumpstart your coding with best practice fueled SSJS Template.",mdxType:"LeadText"}),(0,o.kt)("p",null,"Some like to start with a blank slate. Some - from a well-crafted template. I'm in the #TeamTemplate, and here you can see my SSJS one. Check the bottom of this page for a walkthrough."),(0,o.kt)("h2",{id:"ssjs-template-code"},"SSJS Template Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<script runat='server'>\n    /* -------------------------------------------------------------------------\n\n    Short description of the purpose of the script.\n\n    1. Global Variables\n    1.1. API Endpoint\n    1.2. Error Handling\n    2. Helper Functions\n    2.1. Debugging\n    2.2. Error handling\n    3. {{Section Name}}\n    ...\n\n    -------------------------------------------------------------------------- */\n\n    Platform.Load('core', '1');\n    // Uncomment below if you will be using SOAP API via WSProxy in the script\n    // var soap = new Script.Util.WSProxy();\n\n    /* ---------------------- 1. GLOBAL VARIABLES ---------------------------- */\n\n    var endpoint, headerNames, headerValues, payload, response, parsedResponse;\n    var debugging = false;\n\n    /* ---------------------- 1.1. API Endpoint------------------------------- */\n    var clientID = 'CLIENT_ID';\n    var clientSecret = 'CLIENT_SECRET';\n    var clientBase = 'API_BASE_URI';\n\n    /* -------------------- 1.2. Error Handling------------------------------- */\n    var scriptName = 'SCRIPT_NAME';\n    var errorDE = 'ERROR_DATA_EXTENSION';\n    var errorURL = 'ERROR_CLOUD_PAGE_URL';\n\n    /* ---------------------- 2. HELPER FUNCTIONS ---------------------------- */\n\n    /* ---------------------- 2.1. Debugging --------------------------------- */\n\n    /**\n    * @function debugValue\n    * @description Outputs provided description and SSJS value to front-end in a type-safe & consistent way\n    * @param {string} description - Describes meaning of the second parameter in the output\n    * @param {*} value - The value that needs to be debugged\n    */\n    function debugValue(description, value) {\n        Write(description + ': ' + (typeof value == 'object' ? Stringify(value) : value) + '<br><br>');\n    };\n\n    /* ---------------------- 2.2. Error handling ---------------------------- */\n\n    /**\n    * @function handleError\n    * @description Adds the error with context to error logging Data Extension and redirects to error page.\n    * @param {Object} error - The caught error object. Can come from the try/catch block or be manually created.\n    * @param {string} error.message - First error key stores short error message describing the issue.\n    * @param {string} error.description - Second error key stores detailed error path helping with root cause analysis\n    */\n    function handleError(error) {\n        if (debugging) {\n            debugValue('Found error', error);\n        } else {\n            // Remember that if your Logging Data Extension is in Shared Folder, you need to add the \"ENT.\" prefix to name\n            Platform.Function.InsertData(errorDE, ['ID', 'ScriptName', 'ErrorMessage', 'ErrorDescription'], [GUID(), scriptName, error.message, error.description]);\n            Platform.Response.Redirect(errorURL + '?error=' + error.message + '&error_description=' + error.description);\n        };\n    };\n\n    try {\n    /* -------------------- 3. {{SECTION NAME}} ------------------------- */\n\n    /**\n    * There can be just one section for simpler scripts, or there can be multiple.\n    * As your code grow, split it into separate numbered sections for easier navigation.\n    * Always try to make each section coherent with code logic to make the split meaningful.\n    */\n\n    // if (debugging) debugValue('{{API Call Name}} Response', response);\n\n    } catch (error) {\n        handleError(error);\n    }\n\n<\/script>\n")),(0,o.kt)("h2",{id:"ssjs-template-description"},"SSJS Template Description"),(0,o.kt)("h3",{id:"table-of-contents"},"Table of Contents"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"    /* -------------------------------------------------------------------------\n\n    Short description of the purpose of the script.\n\n    1. Global Variables\n    1.1. API Endpoint\n    1.2. Error Handling\n    2. Helper Functions\n    2.1. Debugging\n    2.2. Error handling\n    3. {{Section Name}}\n    ...\n\n    -------------------------------------------------------------------------- */\n")),(0,o.kt)("p",null,"The opening section of the template does two things:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Briefly informs everyone what the purpose of this script is"),(0,o.kt)("li",{parentName:"ol"},"Describes the high-level structure of the script to allow for quick navigation")),(0,o.kt)("p",null,"Read more on that approach in my ",(0,o.kt)("a",{parentName:"p",href:"/docs/ssjs/ssjs-style-guide#1-table-of-contents-comment"},"SSJS Style Guide"),"."),(0,o.kt)("h3",{id:"global-variables"},"Global Variables"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"    /* ---------------------- 1. GLOBAL VARIABLES ---------------------------- */\n\n    var endpoint, headerNames, headerValues, payload, response, parsedResponse;\n    var debugging = false;\n\n    /* ---------------------- 1.1. API Endpoint------------------------------- */\n    var clientID = 'CLIENT_ID';\n    var clientSecret = 'CLIENT_SECRET';\n    var clientBase = 'API_BASE_URI';\n\n    /* -------------------- 1.2. Error Handling------------------------------- */\n    var scriptName = 'SCRIPT_NAME';\n    var errorDE = 'ERROR_DATA_EXTENSION';\n    var errorURL = 'ERROR_CLOUD_PAGE_URL';\n")),(0,o.kt)("p",null,"This section is responsible for storing all key variables. There are two main types I like to keep here:"),(0,o.kt)("h4",{id:"multiuse-empty-variables"},"Multiuse empty variables"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var endpoint, headerNames, headerValues, payload, response, parsedResponse;\n")),(0,o.kt)("p",null,"In this category, you will find variables used multiple times within various parts of the script, but their specific values have too short lifespan to warrant a separate variable."),(0,o.kt)("p",null,"By declaring them here, I don't have to use ",(0,o.kt)("inlineCode",{parentName:"p"},"var")," later in the script, and therefore I don't have to worry about the order of the code if I make some changes during the refactoring phase."),(0,o.kt)("p",null,"There is also a second reason - defining them before the try/catch block, even without any value, will allow accessing its value after that block. Read more about that in ",(0,o.kt)("a",{parentName:"p",href:"/docs/ssjs/debugging-ssjs#try-to-catch-the-error"},"Debugging & Error Handling"),"."),(0,o.kt)("h4",{id:"customizable-variables"},"Customizable variables"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"    var debugging = false;\n\n    /* ---------------------- 1.1. API Endpoint------------------------------- */\n    var clientID = 'CLIENT_ID';\n    var clientSecret = 'CLIENT_SECRET';\n    var clientBase = 'API_BASE_URI';\n\n    /* -------------------- 1.2. Error Handling------------------------------- */\n    var scriptName = 'SCRIPT_NAME';\n    var errorDE = 'ERROR_DATA_EXTENSION';\n    var errorURL = 'ERROR_CLOUD_PAGE_URL';\n")),(0,o.kt)("p",null,"The second type I store here are customizable global variables:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"changing from script to script or"),(0,o.kt)("li",{parentName:"ul"},"controlling the script's behaviour (like configurational ones or the ",(0,o.kt)("inlineCode",{parentName:"li"},"debugging")," variable described in detail ",(0,o.kt)("a",{parentName:"li",href:"/docs/ssjs/debugging-ssjs#debugging-variable"},"here"),")")),(0,o.kt)("p",null,"The template contains the API Endpoint section that I frequently use, but if your script does not need it - delete it to optimize and simplify the code."),(0,o.kt)("h3",{id:"helper-functions"},"Helper Functions"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"    /* ---------------------- 2. HELPER FUNCTIONS ---------------------------- */\n\n    /* ---------------------- 2.1. Debugging --------------------------------- */\n\n    /**\n    * @function debugValue\n    * @description Outputs provided description and SSJS value to front-end in a type-safe & consistent way\n    * @param {string} description - Describes meaning of the second parameter in the output\n    * @param {*} value - The value that needs to be debugged\n    */\n    function debugValue(description, value) {\n        Write(description + ': ' + (typeof value == 'object' ? Stringify(value) : value) + '<br><br>');\n    };\n\n    /* ---------------------- 2.2. Error handling ---------------------------- */\n\n    /**\n    * @function handleError\n    * @description Adds the error with context to error logging Data Extension and redirects to error page.\n    * @param {Object} error - The caught error object. Can come from the try/catch block or be manually created.\n    * @param {string} error.message - First error key stores short error message describing the issue.\n    * @param {string} error.description - Second error key stores detailed error path helping with root cause analysis\n    */\n    function handleError(error) {\n        if (debugging) {\n            debugValue('Found error', error);\n        } else {\n            // Remember that if your Logging Data Extension is in Shared Folder, you need to add the \"ENT.\" prefix to name\n            Platform.Function.InsertData(errorDE, ['ID', 'ScriptName', 'ErrorMessage', 'ErrorDescription'], [GUID(), scriptName, error.message, error.description]);\n            Platform.Response.Redirect(errorURL + '?error=' + error.message + '&error_description=' + error.description);\n        };\n    };\n")),(0,o.kt)("p",null,"In this section, I keep all the helper functions used multiple times in the script or are battle-tested and shared across various scripts."),(0,o.kt)("p",null,"In the template, you can find my two favourite ones that I use in every single script."),(0,o.kt)("p",null,"To learn more about them, check out detailed descriptions of ",(0,o.kt)("a",{parentName:"p",href:"/docs/ssjs/debugging-ssjs#debugging-variable"},(0,o.kt)("inlineCode",{parentName:"a"},"debugValue"))," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/ssjs/debugging-ssjs#error-handler-function"},(0,o.kt)("inlineCode",{parentName:"a"},"handleError"))," functions."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"You Should Know")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If the script will be used in JSON Code Resource backend I modify those two functions a bit by:"),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Changing the ",(0,o.kt)("inlineCode",{parentName:"p"},"debugValue")," Write to: ",(0,o.kt)("inlineCode",{parentName:"p"},"Write(' --- ' + description + ': ' + (typeof value == 'object' ? Stringify(value) : value) + ' --- ');")," as break line tag will not work.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Removing the ",(0,o.kt)("inlineCode",{parentName:"p"},"Platform.Response.Redirect")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"handleError")," as we don't want backend redirects. The ",(0,o.kt)("inlineCode",{parentName:"p"},"errorURL")," variable follows suit."))))),(0,o.kt)("p",null,"In many cross-cloud scenarios I also use ",(0,o.kt)("a",{parentName:"p",href:"/docs/ssjs/ssjs-snippet-ampscript-in-ssjs"},"AMPScript runner"),", but as it is more use case specific solution, I don't keep it in base template."),(0,o.kt)("p",null,"I prefix all functions with ",(0,o.kt)("a",{parentName:"p",href:"/docs/ssjs/ssjs-style-guide#3-documentation-comments"},"documentation comments"),"."),(0,o.kt)("h3",{id:"script-body"},"Script Body"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"    try {\n    /* -------------------- 3. {{SECTION NAME}} ------------------------- */\n\n    /**\n    * There can be just one section for simpler scripts, or there can be multiple.\n    * As your code grow, split it into separate numbered sections for easier navigation.\n    * Always try to make each section coherent with code logic to make the split meaningful.\n    */\n\n    } catch (error) {\n        handleError(error);\n    }\n")),(0,o.kt)("p",null,"The final part of the template is where I'm adding the main part of the script. It's wrapped in try/catch (more on that ",(0,o.kt)("a",{parentName:"p",href:"/docs/ssjs/debugging-ssjs#try-to-catch-the-error"},"here"),") and - if the script is long - split into ",(0,o.kt)("a",{parentName:"p",href:"/docs/ssjs/ssjs-style-guide#2-section-comments"},"sections"),"."))}m.isMDXComponent=!0}}]);