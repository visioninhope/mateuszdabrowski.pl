(self.webpackChunkmd=self.webpackChunkmd||[]).push([[605],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8921:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var o=n(7294),a=n(6010),r="tableOfContentsInline_3fWc";function i(e){var t=e.toc,n=e.isChild;return t.length?o.createElement("ul",{className:n?"":"table-of-contents"},t.map((function(e){return o.createElement("li",{key:e.id},o.createElement("a",{href:"#"+e.id,dangerouslySetInnerHTML:{__html:e.value}}),o.createElement(i,{isChild:!0,toc:e.children}))}))):null}var l=function(e){var t=e.toc;return o.createElement("div",{className:(0,a.Z)(r)},o.createElement(i,{toc:t}))}},2043:function(e,t,n){"use strict";n.d(t,{m:function(){return r}});var o=n(7294),a="leadText_16va",r=function(e){var t=e.content;return o.createElement(o.Fragment,null,o.createElement("p",{id:a},t))}},4240:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var o=n(2122),a=n(9756),r=(n(7294),n(3905)),i=n(8921),l=n(2043),s={id:"js-loops",title:"JS Loops",sidebar_label:"Loops",description:"JavaScript offers four for loops and two while loops. What's the difference?"},p={unversionedId:"js/js-loops",id:"js/js-loops",isDocsHomePage:!1,title:"JS Loops",description:"JavaScript offers four for loops and two while loops. What's the difference?",source:"@site/docs/js/js-loops.mdx",sourceDirName:"js",slug:"/js/js-loops",permalink:"/docs/js/js-loops",editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/docs/js/js-loops.mdx",version:"current",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1615417469,formattedLastUpdatedAt:"3/11/2021",sidebar_label:"Loops",frontMatter:{id:"js-loops",title:"JS Loops",sidebar_label:"Loops",description:"JavaScript offers four for loops and two while loops. What's the difference?"},sidebar:"snippets",previous:{title:"JS If & Switch",permalink:"/docs/js/js-if-and-switch"},next:{title:"Engage with Countdown",permalink:"/docs/usecase/engage-with-countdown"}},c=[{value:"For Loops",id:"for-loops",children:[{value:"For",id:"for",children:[]},{value:"For of",id:"for-of",children:[]},{value:"For in",id:"for-in",children:[]},{value:"forEach",id:"foreach",children:[]}]},{value:"While Loops",id:"while-loops",children:[{value:"While",id:"while",children:[]},{value:"Do While",id:"do-while",children:[]}]}],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.m,{content:"JavaScript offers four for loops and two while loops. What's the difference?",mdxType:"LeadText"}),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Table of Contents")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)(i.Z,{toc:c,mdxType:"TOCInline"}))),(0,r.kt)("h2",{id:"for-loops"},"For Loops"),(0,r.kt)("h3",{id:"for"},"For"),(0,r.kt)("p",null,"The classic ",(0,r.kt)("inlineCode",{parentName:"p"},"for")," loop might be a bit long to write, but it has a lot of excellent properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Available in each JavaScript version."),(0,r.kt)("li",{parentName:"ul"},"Works with ",(0,r.kt)("inlineCode",{parentName:"li"},"break")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"continue")," statements for better looping control."),(0,r.kt)("li",{parentName:"ul"},"Both initial and increment expressions can do multiple things."),(0,r.kt)("li",{parentName:"ul"},"Condition is not limited to iterable size."),(0,r.kt)("li",{parentName:"ul"},"Fast across various scenarios.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'{1} title="Example of for loop iterating over an array"',"{1}":!0,title:'"Example',of:!0,for:!0,loop:!0,iterating:!0,over:!0,an:!0,'array"':!0},"for (let i = 0; i < array.length; i++) {\n    console.log(array[i]);\n}\n")),(0,r.kt)("p",null,"Let's break the script down to five steps each ",(0,r.kt)("inlineCode",{parentName:"p"},"for")," loop follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Execute initial expression (",(0,r.kt)("inlineCode",{parentName:"li"},"let i = 0")," in the above example)."),(0,r.kt)("li",{parentName:"ol"},"Evaluate the condition (",(0,r.kt)("inlineCode",{parentName:"li"},"i < array.length"),"). If it is false - the loop terminates. If true:"),(0,r.kt)("li",{parentName:"ol"},"The statement within the loop is executed (",(0,r.kt)("inlineCode",{parentName:"li"},"console.log(array[i])"),")."),(0,r.kt)("li",{parentName:"ol"},"Finally, the increment expression will evaluate (",(0,r.kt)("inlineCode",{parentName:"li"},"i++"),")."),(0,r.kt)("li",{parentName:"ol"},"The loop goes back to step 2 until it is false.")),(0,r.kt)("p",null,"If in doubt of which loop to use, pick the classic. To optimize speed, cache the length used for condition:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'{1} title="Initial expression assigns array.length to a variable to cache it"',"{1}":!0,title:'"Initial',expression:!0,assigns:!0,"array.length":!0,to:!0,a:!0,variable:!0,cache:!0,'it"':!0},"for (let i = 0, arrayLength = array.length; i < arrayLength; i++) {\n    console.log(array[i]);\n}\n")),(0,r.kt)("h3",{id:"for-of"},"For of"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"For...of")," loop came to JavaScript in ES6 (as many good things have). It loops over iterables: strings, arrays, NodeLists, maps, sets and other array-like objects."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'{1} title="Example of for...of loop iterating over letters of a string"',"{1}":!0,title:'"Example',of:!0,"for...of":!0,loop:!0,iterating:!0,over:!0,letters:!0,a:!0,'string"':!0},"for (const letter of name) {\n    console.log(letter);\n}\n")),(0,r.kt)("p",null,"This loop is blazing fast for very small iterables. From martech perspective, it is a fantastic tool to iterate over NodeLists/HTMLCollections when working with DOM. Works great for working with outputs of API calls. Worth also using for operating on split-string-arrays (for example comma-separated strings)."),(0,r.kt)("p",null,"It has many qualities that set it apart from the classic ",(0,r.kt)("inlineCode",{parentName:"p"},"for")," loop:"),(0,r.kt)("h4",{id:"key-value-pair-of-object"},"Key-Value Pair of Object"),(0,r.kt)("p",null,"It can iterate over key-value paired iterators (for example map or even object - thanks to ",(0,r.kt)("inlineCode",{parentName:"p"},"Object.entries()"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"{1}","{1}":!0},"for (const [key, value] of Object.entries(object)) {\n    console.log(key, value);\n}\n")),(0,r.kt)("h4",{id:"index-value-pair-of-array"},"Index-Value Pair of Array"),(0,r.kt)("p",null,"It can catch array values along with indexes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"{1}","{1}":!0},"for (const [index, value] of array.entries()) {\n    console.log(index, value);\n}\n")),(0,r.kt)("h4",{id:"in-place-destructuring"},"In-place Destructuring"),(0,r.kt)("p",null,"It can destructure object on the go:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"{3}","{3}":!0},"const persons = [{ name: 'John Smith' }, { name: 'Jane Doe' }];\n\nfor (const { name } of persons) {\n    console.log(name); // returns: 'John Smith' \\n 'Jane Doe'\n}\n")),(0,r.kt)("p",null,"In this example, ",(0,r.kt)("inlineCode",{parentName:"p"},"for...of")," loop not only iterates over objects within an array but also automatically destructures them by getting the value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," key. Thanks to it, the ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log")," will be printing the names in one line."),(0,r.kt)("h4",{id:"iterating-over-function-arguments"},"Iterating over Function Arguments"),(0,r.kt)("p",null,"Thanks to existance of special function variable ",(0,r.kt)("inlineCode",{parentName:"p"},"arguments"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"for...of")," can loop over undefined amount of arguments."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'{3} title="Function will return sum of any number of integers provided thanks to for-of loop"',"{3}":!0,title:'"Function',will:!0,return:!0,sum:!0,of:!0,any:!0,number:!0,integers:!0,provided:!0,thanks:!0,to:!0,"for-of":!0,'loop"':!0},"function sum() {\n  let sum = 0;\n  for (const number of arguments) {\n    sum += number;\n  }\n  return sum;\n}\n\nsum(1, 2, 3); // returns: 6\n")),(0,r.kt)("h3",{id:"for-in"},"For in"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"for...in")," loop is a good idea when you want to loop over object prototype methods and properties. Any other scenario? Not worth it. Don't use it. Just don't."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"{1}","{1}":!0},"for (const key in object) {\n    console.log(key);\n}\n")),(0,r.kt)("h3",{id:"foreach"},"forEach"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"forEach")," iterates directly over an array. It applies function to each item but does not return anything."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"{1}","{1}":!0},"array.forEach((item, index, array) => {\n    console.log(`${item} has index ${index}`);\n    if (index === array.length - 1) {\n        console.log('Last iteration!');\n    }\n});\n")),(0,r.kt)("p",null,"It differs from other loops:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"No need to define an iteration variable."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"continue")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"break")," won't work."),(0,r.kt)("li",{parentName:"ul"},"In the callback function, we can leverage up to three optional parameters for an array: item, index, array."),(0,r.kt)("li",{parentName:"ul"},"Because it uses a callback function, the logic is block scoped.")),(0,r.kt)("p",null,"In most scenarios, the ",(0,r.kt)("inlineCode",{parentName:"p"},"for...of")," loop will be a better choice."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"while-loops"},"While Loops"),(0,r.kt)("h3",{id:"while"},"While"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"while")," loop executes its statement as long as the condition evaluates to true."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'{2} title="Infinite while loop"',"{2}":!0,title:'"Infinite',while:!0,'loop"':!0},"let run = true\nwhile (run === true) {\n    console.log('To the infinity and beyond!');\n}\n")),(0,r.kt)("p",null,"To break out of ",(0,r.kt)("inlineCode",{parentName:"p"},"while")," loop, there must be logic within it that will change the condition to false (or a ",(0,r.kt)("inlineCode",{parentName:"p"},"break")," statement):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"{3}","{3}":!0},"let run = true;\nlet i = 0;\nwhile (run === true) {\n    console.log('To the infinity and beyond!');\n    i++;\n    if (i > 10) {\n        run = false;\n    }\n}\n")),(0,r.kt)("p",null,"or just:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'{3} title="This loop has the same outcome as the one above"',"{3}":!0,title:'"This',loop:!0,has:!0,the:!0,same:!0,outcome:!0,as:!0,one:!0,'above"':!0},"let run = true;\nlet i = 0;\nwhile (i <= 10) {\n    console.log('To the infinity and beyond!');\n    i++;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"while")," loop is the best option for iterating over ",(0,r.kt)("strong",{parentName:"p"},"big")," arrays."),(0,r.kt)("h3",{id:"do-while"},"Do While"),(0,r.kt)("p",null,"Same as ",(0,r.kt)("inlineCode",{parentName:"p"},"while"),", but the code runs once before evaluating the condition."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"{1,3}","{1,3}":!0},"do {\n    console.log('Running!');\n} while (run === true)\n")),(0,r.kt)("p",null,"Perfect when you need to run an API call, check whether there are more pages of outcomes and act accordingly."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"You Should Know")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"JavaScript support labels for loops. It allows you to name each loop for even better control with both ",(0,r.kt)("inlineCode",{parentName:"p"},"continue")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"break")," statements."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'{1,8} title="Labelled loop example using a nested for loops"',"{1,8}":!0,title:'"Labelled',loop:!0,example:!0,using:!0,a:!0,nested:!0,for:!0,'loops"':!0},"MainLoopLabel:\nfor (let i = 0; i < array.length; i++) {\n    // Logic\n    SecondaryLoopLabel:\n    for (let j = 0; j < array[i].length; j++) {\n        // Logic\n        if (array[i][j] === 'important') {\n            break MainLoopLabel;\n        };\n    };\n};\n")),(0,r.kt)("p",{parentName:"div"},"As you can see, in the first line we added a label for the first ",(0,r.kt)("inlineCode",{parentName:"p"},"for")," loop. Then, in the statement within the second ",(0,r.kt)("inlineCode",{parentName:"p"},"for")," loop, we used ",(0,r.kt)("inlineCode",{parentName:"p"},"break")," followed by the label. Once executed, it will break both for loops, even if there were still iterations in the main one. The same approach works with the ",(0,r.kt)("inlineCode",{parentName:"p"},"continue")," statement."))))}m.isMDXComponent=!0},6010:function(e,t,n){"use strict";function o(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);