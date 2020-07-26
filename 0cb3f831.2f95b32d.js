(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{56:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var o=n(2),a=n(6),r=(n(0),n(83)),i=(n(89),n(90),n(84)),l={id:"js-loops",title:"Loops"},c={unversionedId:"js/js-loops",id:"js/js-loops",isDocsHomePage:!1,title:"Loops",description:"For Loops",source:"@site/docs/js/js-loops.mdx",permalink:"/docs/js/js-loops",editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/docs/js/js-loops.mdx",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1595755319,sidebar:"snippets",previous:{title:"Debugging & Error Handling",permalink:"/docs/ssjs/debugging-ssjs"}},s=[{value:"For Loops",id:"for-loops",children:[{value:"For",id:"for",children:[]},{value:"For of",id:"for-of",children:[]},{value:"For in",id:"for-in",children:[]},{value:"forEach",id:"foreach",children:[]}]},{value:"While Loops",id:"while-loops",children:[{value:"While",id:"while",children:[]},{value:"Do While",id:"do-while",children:[]}]}],b={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(i.a,{content:"JavaScript offers four for loops and two while loops. What's the difference?",mdxType:"LeadText"}),Object(r.b)("h2",{id:"for-loops"},"For Loops"),Object(r.b)("h3",{id:"for"},"For"),Object(r.b)("p",null,"The classic ",Object(r.b)("inlineCode",{parentName:"p"},"for")," loop might be a bit long to write, but it has a lot of excellent properties:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Available in each JavaScript version."),Object(r.b)("li",{parentName:"ul"},"Works with ",Object(r.b)("inlineCode",{parentName:"li"},"break")," and ",Object(r.b)("inlineCode",{parentName:"li"},"continue")," statements for better looping control."),Object(r.b)("li",{parentName:"ul"},"Both initial and increment expressions can do multiple things."),Object(r.b)("li",{parentName:"ul"},"Condition is not limited to iterable size."),Object(r.b)("li",{parentName:"ul"},"Fast across various scenarios.")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js",metastring:'{1} title="Example of for loop iterating over an array"',"{1}":!0,title:'"Example',of:!0,for:!0,loop:!0,iterating:!0,over:!0,an:!0,'array"':!0}),"for (let i = 0; i < array.length; i++) {\n    console.log(array[i]);\n}\n")),Object(r.b)("p",null,"Let's break the script down to five steps each ",Object(r.b)("inlineCode",{parentName:"p"},"for")," loop follows:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Execute initial expression (",Object(r.b)("inlineCode",{parentName:"li"},"let i = 0")," in the above example)."),Object(r.b)("li",{parentName:"ol"},"Evaluate the condition (",Object(r.b)("inlineCode",{parentName:"li"},"i < array.length"),"). If it is false - the loop terminates. If true:"),Object(r.b)("li",{parentName:"ol"},"The statement within the loop is executed (",Object(r.b)("inlineCode",{parentName:"li"},"console.log(array[i])"),")."),Object(r.b)("li",{parentName:"ol"},"Finally, the increment expression will evaluate (",Object(r.b)("inlineCode",{parentName:"li"},"i++"),")."),Object(r.b)("li",{parentName:"ol"},"The loop goes back to step 2 until it is false.")),Object(r.b)("p",null,"If in doubt of which loop to use, pick the classic. To optimize speed, cache the length used for condition:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js",metastring:'{1} title="Initial expression assigns array.length to a variable to cache it"',"{1}":!0,title:'"Initial',expression:!0,assigns:!0,"array.length":!0,to:!0,a:!0,variable:!0,cache:!0,'it"':!0}),"for (let i = 0, arrayLength = array.length; i < arrayLength; i++) {\n    console.log(array[i]);\n}\n")),Object(r.b)("h3",{id:"for-of"},"For of"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"For...of")," loop came to JavaScript in ES6 (as many good things have). It loops over iterables: strings, arrays, NodeLists, maps, sets and other array-like objects."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js",metastring:'{1} title="Example of for...of loop iterating over letters of a string"',"{1}":!0,title:'"Example',of:!0,"for...of":!0,loop:!0,iterating:!0,over:!0,letters:!0,a:!0,'string"':!0}),"for (const letter of name) {\n    console.log(letter);\n}\n")),Object(r.b)("p",null,"This loop is blazing fast for very small iterables. From martech perspective, it is a fantastic tool to iterate over NodeLists/HTMLCollections when working with DOM. Works great for working with outputs of API calls. Worth also using for operating on split-string-arrays (for example comma-separated strings)."),Object(r.b)("p",null,"It has many qualities that set it apart from the classic ",Object(r.b)("inlineCode",{parentName:"p"},"for")," loop:"),Object(r.b)("h4",{id:"key-value-pair-of-object"},"Key-Value Pair of Object"),Object(r.b)("p",null,"It can iterate over key-value paired iterators (for example map or even object - thanks to ",Object(r.b)("inlineCode",{parentName:"p"},"Object.entries()"),"):"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js",metastring:"{1}","{1}":!0}),"for (const [key, value] of Object.entries(object)) {\n    console.log(key, value);\n}\n")),Object(r.b)("h4",{id:"index-value-pair-of-array"},"Index-Value Pair of Array"),Object(r.b)("p",null,"It can catch array values along with indexes:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js",metastring:"{1}","{1}":!0}),"for (const [index, value] of array.entries()) {\n    console.log(index, value);\n}\n")),Object(r.b)("h4",{id:"in-place-destructuring"},"In-place Destructuring"),Object(r.b)("p",null,"It can destructure object on the go:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js",metastring:"{3}","{3}":!0}),"const persons = [{ name: 'John Smith' }, { name: 'Jane Doe' }];\n\nfor (const { name } of persons) {\n    console.log(name); // returns: 'John Smith' \\n 'Jane Doe'\n}\n")),Object(r.b)("p",null,"In this example, ",Object(r.b)("inlineCode",{parentName:"p"},"for...of")," loop not only iterates over objects within an array but also automatically destructures them by getting the value of the ",Object(r.b)("inlineCode",{parentName:"p"},"name")," key. Thanks to it, the ",Object(r.b)("inlineCode",{parentName:"p"},"console.log")," will be printing the names in one line."),Object(r.b)("h4",{id:"iterating-over-function-arguments"},"Iterating over Function Arguments"),Object(r.b)("p",null,"Thanks to existance of special function variable ",Object(r.b)("inlineCode",{parentName:"p"},"arguments"),", ",Object(r.b)("inlineCode",{parentName:"p"},"for...of")," can loop over undefined amount of arguments."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js",metastring:'{3} title="Function will return sum of any number of integers provided thanks to for-of loop"',"{3}":!0,title:'"Function',will:!0,return:!0,sum:!0,of:!0,any:!0,number:!0,integers:!0,provided:!0,thanks:!0,to:!0,"for-of":!0,'loop"':!0}),"function sum() {\n  let sum = 0;\n  for (const number of arguments) {\n    sum += number;\n  }\n  return sum;\n}\n\nsum(1, 2, 3); // returns: 6\n")),Object(r.b)("h3",{id:"for-in"},"For in"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"for...in")," loop is a good idea when you want to loop over object prototype methods and properties. Any other scenario? Not worth it. Don't use it. Just don't."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js",metastring:"{1}","{1}":!0}),"for (const key in object) {\n    console.log(key);\n}\n")),Object(r.b)("h3",{id:"foreach"},"forEach"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"forEach")," iterates directly over an array. It applies function to each item but does not return anything."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js",metastring:"{1}","{1}":!0}),"array.forEach((item, index, array) => {\n    console.log(`${item} has index ${index}`);\n    if (index === array.length - 1) {\n        console.log('Last iteration!');\n    }\n});\n")),Object(r.b)("p",null,"It differs from other loops:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"No need to define an iteration variable."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"continue")," or ",Object(r.b)("inlineCode",{parentName:"li"},"break")," won't work."),Object(r.b)("li",{parentName:"ul"},"In the callback function, we can leverage up to three optional parameters for an array: item, index, array."),Object(r.b)("li",{parentName:"ul"},"Because it uses a callback function, the logic is block scoped.")),Object(r.b)("p",null,"In most scenarios, the ",Object(r.b)("inlineCode",{parentName:"p"},"for...of")," loop will be a better choice."),Object(r.b)("hr",null),Object(r.b)("h2",{id:"while-loops"},"While Loops"),Object(r.b)("h3",{id:"while"},"While"),Object(r.b)("p",null,"A ",Object(r.b)("inlineCode",{parentName:"p"},"while")," loop executes its statement as long as the condition evaluates to true."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js",metastring:'{2} title="Infinite while loop"',"{2}":!0,title:'"Infinite',while:!0,'loop"':!0}),"let run = true\nwhile (run === true) {\n    console.log('To the infinity and beyond!');\n}\n")),Object(r.b)("p",null,"To break out of ",Object(r.b)("inlineCode",{parentName:"p"},"while")," loop, there must be logic within it that will change the condition to false (or a ",Object(r.b)("inlineCode",{parentName:"p"},"break")," statement):"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js",metastring:"{3}","{3}":!0}),"let run = true;\nlet i = 0;\nwhile (run === true) {\n    console.log('To the infinity and beyond!');\n    i++;\n    if (i > 10) {\n        run = false;\n    }\n}\n")),Object(r.b)("p",null,"or just:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js",metastring:'{3} title="This loop has the same outcome as the one above"',"{3}":!0,title:'"This',loop:!0,has:!0,the:!0,same:!0,outcome:!0,as:!0,one:!0,'above"':!0}),"let run = true;\nlet i = 0;\nwhile (i <= 10) {\n    console.log('To the infinity and beyond!');\n    i++;\n}\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"while")," loop is the best option for iterating over ",Object(r.b)("strong",{parentName:"p"},"big")," arrays."),Object(r.b)("h3",{id:"do-while"},"Do While"),Object(r.b)("p",null,"Same as ",Object(r.b)("inlineCode",{parentName:"p"},"while"),", but the code runs once before evaluating the condition."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"do {\n    console.log('Running!');\n} while (run === true)\n")),Object(r.b)("p",null,"Perfect when you need to run an API call, check whether there are more pages of outcomes and act accordingly."))}p.isMDXComponent=!0},83:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),m=o,f=p["".concat(i,".").concat(m)]||p[m]||u[m]||r;return n?a.a.createElement(f,l(l({ref:t},s),{},{components:n})):a.a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n(0),a=n.n(o),r=n(48),i=n.n(r);const l=({content:e})=>a.a.createElement(a.a.Fragment,null,a.a.createElement("p",{id:i.a.leadText},e))},85:function(e,t,n){"use strict";function o(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(a&&(a+=" "),a+=t);return a}},86:function(e,t,n){"use strict";var o=n(0);const a=Object(o.createContext)(void 0);t.a=a},87:function(e,t,n){"use strict";var o=n(0),a=n(86);t.a=function(){const e=Object(o.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},89:function(e,t,n){"use strict";var o=n(0),a=n.n(o),r=n(87),i=n(85),l=n(49),c=n.n(l);const s=37,b=39;t.a=function(e){const{block:t,children:n,defaultValue:l,values:p,groupId:u}=e,{tabGroupChoices:m,setTabGroupChoices:f}=Object(r.a)(),[d,j]=Object(o.useState)(l);if(null!=u){const e=m[u];null!=e&&e!==d&&p.some(t=>t.value===e)&&j(e)}const h=e=>{j(e),null!=u&&f(u,e)},O=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},p.map(({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":d===e,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":d===e}),key:e,ref:e=>O.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case b:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(O,e.target,e),onFocus:()=>h(e),onClick:()=>h(e)},t))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},o.Children.toArray(n).filter(e=>e.props.value===d)[0]))}},90:function(e,t,n){"use strict";var o=n(0),a=n.n(o);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);