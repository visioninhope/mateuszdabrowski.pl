"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[5605],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1872:(e,t,n)=>{n.d(t,{m:()=>r});var o=n(7294);const a="leadText_qzwo",r=e=>{let{content:t}=e;return o.createElement(o.Fragment,null,o.createElement("p",{id:a},t))}},6394:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(7462),a=(n(7294),n(4137)),r=n(1872);const i={id:"js-loops",title:"JS Loops",sidebar_label:"Loops",description:"JavaScript offers four for loops and two while loops. What's the difference?",image:"img/og/og-image-js-loops.png",tags:["JavaScript"]},l=void 0,s={unversionedId:"js/js-loops",id:"js/js-loops",title:"JS Loops",description:"JavaScript offers four for loops and two while loops. What's the difference?",source:"@site/docs/js/js-loops.mdx",sourceDirName:"js",slug:"/js/js-loops",permalink:"/docs/js/js-loops",draft:!1,editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/docs/js/js-loops.mdx",tags:[{label:"JavaScript",permalink:"/docs/tags/java-script"}],version:"current",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1649279138,formattedLastUpdatedAt:"Apr 6, 2022",frontMatter:{id:"js-loops",title:"JS Loops",sidebar_label:"Loops",description:"JavaScript offers four for loops and two while loops. What's the difference?",image:"img/og/og-image-js-loops.png",tags:["JavaScript"]},sidebar:"docs",previous:{title:"If & Switch",permalink:"/docs/js/js-if-and-switch"},next:{title:"DOM",permalink:"/docs/js/js-dom"}},p={},c=[{value:"For Loops",id:"for-loops",level:2},{value:"For",id:"for",level:3},{value:"For of",id:"for-of",level:3},{value:"Key-Value Pair of Object",id:"key-value-pair-of-object",level:4},{value:"Index-Value Pair of Array",id:"index-value-pair-of-array",level:4},{value:"In-place Destructuring",id:"in-place-destructuring",level:4},{value:"Iterating over Function Arguments",id:"iterating-over-function-arguments",level:4},{value:"For in",id:"for-in",level:3},{value:"forEach",id:"foreach",level:3},{value:"While Loops",id:"while-loops",level:2},{value:"While",id:"while",level:3},{value:"Do While",id:"do-while",level:3}],u={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(r.m,{content:"JavaScript offers four for loops and two while loops. What's the difference?",mdxType:"LeadText"}),(0,a.kt)("h2",{id:"for-loops"},"For Loops"),(0,a.kt)("h3",{id:"for"},"For"),(0,a.kt)("p",null,"The classic ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," loop might be a bit long to write, but it has a lot of excellent properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Available in each JavaScript version."),(0,a.kt)("li",{parentName:"ul"},"Works with ",(0,a.kt)("inlineCode",{parentName:"li"},"break")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"continue")," statements for better looping control."),(0,a.kt)("li",{parentName:"ul"},"Both initial and increment expressions can do multiple things."),(0,a.kt)("li",{parentName:"ul"},"Condition is not limited to iterable size."),(0,a.kt)("li",{parentName:"ul"},"Fast across various scenarios.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'{1} title="Example of for loop iterating over an array"',"{1}":!0,title:'"Example',of:!0,for:!0,loop:!0,iterating:!0,over:!0,an:!0,'array"':!0},"for (let i = 0; i < array.length; i++) {\n    console.log(array[i]);\n}\n")),(0,a.kt)("p",null,"Let's break the script down to five steps each ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," loop follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Execute initial expression (",(0,a.kt)("inlineCode",{parentName:"li"},"let i = 0")," in the above example)."),(0,a.kt)("li",{parentName:"ol"},"Evaluate the condition (",(0,a.kt)("inlineCode",{parentName:"li"},"i < array.length"),"). If it is false - the loop terminates. If true:"),(0,a.kt)("li",{parentName:"ol"},"The statement within the loop is executed (",(0,a.kt)("inlineCode",{parentName:"li"},"console.log(array[i])"),")."),(0,a.kt)("li",{parentName:"ol"},"Finally, the increment expression will evaluate (",(0,a.kt)("inlineCode",{parentName:"li"},"i++"),")."),(0,a.kt)("li",{parentName:"ol"},"The loop goes back to step 2 until it is false.")),(0,a.kt)("p",null,"If in doubt of which loop to use, pick the classic. To optimize speed, cache the length used for condition:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'{1} title="Initial expression assigns array.length to a variable to cache it"',"{1}":!0,title:'"Initial',expression:!0,assigns:!0,"array.length":!0,to:!0,a:!0,variable:!0,cache:!0,'it"':!0},"for (let i = 0, arrayLength = array.length; i < arrayLength; i++) {\n    console.log(array[i]);\n}\n")),(0,a.kt)("h3",{id:"for-of"},"For of"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"For...of")," loop came to JavaScript in ES6 (as many good things have). It loops over iterables: strings, arrays, NodeLists, maps, sets and other array-like objects."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'{1} title="Example of for...of loop iterating over letters of a string"',"{1}":!0,title:'"Example',of:!0,"for...of":!0,loop:!0,iterating:!0,over:!0,letters:!0,a:!0,'string"':!0},"for (const letter of name) {\n    console.log(letter);\n}\n")),(0,a.kt)("p",null,"This loop is blazing fast for very small iterables. From martech perspective, it is a fantastic tool to iterate over NodeLists/HTMLCollections when working with DOM. Works great for working with outputs of API calls. Worth also using for operating on split-string-arrays (for example comma-separated strings)."),(0,a.kt)("p",null,"It has many qualities that set it apart from the classic ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," loop:"),(0,a.kt)("h4",{id:"key-value-pair-of-object"},"Key-Value Pair of Object"),(0,a.kt)("p",null,"It can iterate over key-value paired iterators (for example map or even object - thanks to ",(0,a.kt)("inlineCode",{parentName:"p"},"Object.entries()"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"{1}","{1}":!0},"for (const [key, value] of Object.entries(object)) {\n    console.log(key, value);\n}\n")),(0,a.kt)("h4",{id:"index-value-pair-of-array"},"Index-Value Pair of Array"),(0,a.kt)("p",null,"It can catch array values along with indexes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"{1}","{1}":!0},"for (const [index, value] of array.entries()) {\n    console.log(index, value);\n}\n")),(0,a.kt)("h4",{id:"in-place-destructuring"},"In-place Destructuring"),(0,a.kt)("p",null,"It can destructure object on the go:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"{3}","{3}":!0},"const persons = [{ name: 'John Smith' }, { name: 'Jane Doe' }];\n\nfor (const { name } of persons) {\n    console.log(name); // returns: 'John Smith' \\n 'Jane Doe'\n}\n")),(0,a.kt)("p",null,"In this example, ",(0,a.kt)("inlineCode",{parentName:"p"},"for...of")," loop not only iterates over objects within an array but also automatically destructures them by getting the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," key. Thanks to it, the ",(0,a.kt)("inlineCode",{parentName:"p"},"console.log")," will be printing the names in one line."),(0,a.kt)("h4",{id:"iterating-over-function-arguments"},"Iterating over Function Arguments"),(0,a.kt)("p",null,"Thanks to existance of special function variable ",(0,a.kt)("inlineCode",{parentName:"p"},"arguments"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"for...of")," can loop over undefined amount of arguments."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'{3} title="Function will return sum of any number of integers provided thanks to for-of loop"',"{3}":!0,title:'"Function',will:!0,return:!0,sum:!0,of:!0,any:!0,number:!0,integers:!0,provided:!0,thanks:!0,to:!0,"for-of":!0,'loop"':!0},"function sum() {\n  let sum = 0;\n  for (const number of arguments) {\n    sum += number;\n  }\n  return sum;\n}\n\nsum(1, 2, 3); // returns: 6\n")),(0,a.kt)("h3",{id:"for-in"},"For in"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"for...in")," loop is a good idea when you want to loop over object prototype methods and properties. Any other scenario? Not worth it. Don't use it. Just don't."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"{1}","{1}":!0},"for (const key in object) {\n    console.log(key);\n}\n")),(0,a.kt)("h3",{id:"foreach"},"forEach"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"forEach")," iterates directly over an array. It applies function to each item but does not return anything."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"{1}","{1}":!0},"array.forEach((item, index, array) => {\n    console.log(`${item} has index ${index}`);\n    if (index === array.length - 1) {\n        console.log('Last iteration!');\n    }\n});\n")),(0,a.kt)("p",null,"It differs from other loops:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"No need to define an iteration variable."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"continue")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"break")," won't work."),(0,a.kt)("li",{parentName:"ul"},"In the callback function, we can leverage up to three optional parameters for an array: item, index, array."),(0,a.kt)("li",{parentName:"ul"},"Because it uses a callback function, the logic is block scoped.")),(0,a.kt)("p",null,"In most scenarios, the ",(0,a.kt)("inlineCode",{parentName:"p"},"for...of")," loop will be a better choice."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"while-loops"},"While Loops"),(0,a.kt)("h3",{id:"while"},"While"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"while")," loop executes its statement as long as the condition evaluates to true."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'{2} title="Infinite while loop"',"{2}":!0,title:'"Infinite',while:!0,'loop"':!0},"let run = true\nwhile (run === true) {\n    console.log('To the infinity and beyond!');\n}\n")),(0,a.kt)("p",null,"To break out of ",(0,a.kt)("inlineCode",{parentName:"p"},"while")," loop, there must be logic within it that will change the condition to false (or a ",(0,a.kt)("inlineCode",{parentName:"p"},"break")," statement):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"{3}","{3}":!0},"let run = true;\nlet i = 0;\nwhile (run === true) {\n    console.log('To the infinity and beyond!');\n    i++;\n    if (i > 10) {\n        run = false;\n    }\n}\n")),(0,a.kt)("p",null,"or just:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'{3} title="This loop has the same outcome as the one above"',"{3}":!0,title:'"This',loop:!0,has:!0,the:!0,same:!0,outcome:!0,as:!0,one:!0,'above"':!0},"let run = true;\nlet i = 0;\nwhile (i <= 10) {\n    console.log('To the infinity and beyond!');\n    i++;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"while")," loop is the best option for iterating over ",(0,a.kt)("strong",{parentName:"p"},"big")," arrays."),(0,a.kt)("h3",{id:"do-while"},"Do While"),(0,a.kt)("p",null,"Same as ",(0,a.kt)("inlineCode",{parentName:"p"},"while"),", but the code runs once before evaluating the condition."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"{1,3}","{1,3}":!0},"do {\n    console.log('Running!');\n} while (run === true)\n")),(0,a.kt)("p",null,"Perfect when you need to run an API call, check whether there are more pages of outcomes and act accordingly."),(0,a.kt)("admonition",{title:"You Should Know",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"JavaScript support labels for loops. It allows you to name each loop for even better control with both ",(0,a.kt)("inlineCode",{parentName:"p"},"continue")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"break")," statements."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'{1,8} title="Labelled loop example using a nested for loops"',"{1,8}":!0,title:'"Labelled',loop:!0,example:!0,using:!0,a:!0,nested:!0,for:!0,'loops"':!0},"MainLoopLabel:\nfor (let i = 0; i < array.length; i++) {\n    // Logic\n    SecondaryLoopLabel:\n    for (let j = 0; j < array[i].length; j++) {\n        // Logic\n        if (array[i][j] === 'important') {\n            break MainLoopLabel;\n        };\n    };\n};\n")),(0,a.kt)("p",{parentName:"admonition"},"As you can see, in the first line we added a label for the first ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," loop. Then, in the statement within the second ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," loop, we used ",(0,a.kt)("inlineCode",{parentName:"p"},"break")," followed by the label. Once executed, it will break both for loops, even if there were still iterations in the main one. The same approach works with the ",(0,a.kt)("inlineCode",{parentName:"p"},"continue")," statement.")))}m.isMDXComponent=!0}}]);