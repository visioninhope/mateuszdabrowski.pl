(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||r;return n?o.a.createElement(d,l(l({ref:t},s),{},{components:n})):o.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},107:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),o=n(53),r=n.n(o);const i=({content:e})=>a.createElement(a.Fragment,null,a.createElement("p",{id:r.a.leadText},e))},108:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},111:function(e,t,n){"use strict";var a=n(0),o=n(112);t.a=function(){var e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},112:function(e,t,n){"use strict";var a=n(0),o=Object(a.createContext)(void 0);t.a=o},113:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(111),i=n(108),l=n(54),c=n.n(l),s=37,b=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.children,p=e.defaultValue,u=e.values,m=e.groupId,d=e.className,f=Object(r.a)(),h=f.tabGroupChoices,j=f.setTabGroupChoices,O=Object(a.useState)(p),g=O[0],v=O[1];if(null!=m){var y=h[m];null!=y&&y!==g&&u.some((function(e){return e.value===y}))&&v(y)}var N=function(e){v(e),null!=m&&j(m,e)},w=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},d)},u.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(a.cloneElement)(l.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},l.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},114:function(e,t,n){"use strict";var a=n(3),o=n(0),r=n.n(o);t.a=function(e){var t=e.children,n=e.hidden,o=e.className;return r.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:o}),t)}},65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(8),r=(n(0),n(106)),i=(n(113),n(114),n(107)),l={id:"js-loops",title:"JS Loops",sidebar_label:"Loops",description:"JavaScript offers four for loops and two while loops. What's the difference?"},c={unversionedId:"js/js-loops",id:"js/js-loops",isDocsHomePage:!1,title:"JS Loops",description:"JavaScript offers four for loops and two while loops. What's the difference?",source:"@site/docs/js/js-loops.mdx",slug:"/js/js-loops",permalink:"/docs/js/js-loops",editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/docs/js/js-loops.mdx",version:"current",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1600110888,sidebar_label:"Loops",sidebar:"snippets",previous:{title:"JS If & Switch",permalink:"/docs/js/js-if-and-switch"},next:{title:"SFMC SQL Basics",permalink:"/docs/sql/sfmc-sql-basics"}},s=[{value:"For Loops",id:"for-loops",children:[{value:"For",id:"for",children:[]},{value:"For of",id:"for-of",children:[]},{value:"For in",id:"for-in",children:[]},{value:"forEach",id:"foreach",children:[]}]},{value:"While Loops",id:"while-loops",children:[{value:"While",id:"while",children:[]},{value:"Do While",id:"do-while",children:[]}]}],b={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(i.a,{content:"JavaScript offers four for loops and two while loops. What's the difference?",mdxType:"LeadText"}),Object(r.b)("h2",{id:"for-loops"},"For Loops"),Object(r.b)("h3",{id:"for"},"For"),Object(r.b)("p",null,"The classic ",Object(r.b)("inlineCode",{parentName:"p"},"for")," loop might be a bit long to write, but it has a lot of excellent properties:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Available in each JavaScript version."),Object(r.b)("li",{parentName:"ul"},"Works with ",Object(r.b)("inlineCode",{parentName:"li"},"break")," and ",Object(r.b)("inlineCode",{parentName:"li"},"continue")," statements for better looping control."),Object(r.b)("li",{parentName:"ul"},"Both initial and increment expressions can do multiple things."),Object(r.b)("li",{parentName:"ul"},"Condition is not limited to iterable size."),Object(r.b)("li",{parentName:"ul"},"Fast across various scenarios.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{1} title="Example of for loop iterating over an array"',"{1}":!0,title:'"Example',of:!0,for:!0,loop:!0,iterating:!0,over:!0,an:!0,'array"':!0}),"for (let i = 0; i < array.length; i++) {\n    console.log(array[i]);\n}\n")),Object(r.b)("p",null,"Let's break the script down to five steps each ",Object(r.b)("inlineCode",{parentName:"p"},"for")," loop follows:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Execute initial expression (",Object(r.b)("inlineCode",{parentName:"li"},"let i = 0")," in the above example)."),Object(r.b)("li",{parentName:"ol"},"Evaluate the condition (",Object(r.b)("inlineCode",{parentName:"li"},"i < array.length"),"). If it is false - the loop terminates. If true:"),Object(r.b)("li",{parentName:"ol"},"The statement within the loop is executed (",Object(r.b)("inlineCode",{parentName:"li"},"console.log(array[i])"),")."),Object(r.b)("li",{parentName:"ol"},"Finally, the increment expression will evaluate (",Object(r.b)("inlineCode",{parentName:"li"},"i++"),")."),Object(r.b)("li",{parentName:"ol"},"The loop goes back to step 2 until it is false.")),Object(r.b)("p",null,"If in doubt of which loop to use, pick the classic. To optimize speed, cache the length used for condition:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{1} title="Initial expression assigns array.length to a variable to cache it"',"{1}":!0,title:'"Initial',expression:!0,assigns:!0,"array.length":!0,to:!0,a:!0,variable:!0,cache:!0,'it"':!0}),"for (let i = 0, arrayLength = array.length; i < arrayLength; i++) {\n    console.log(array[i]);\n}\n")),Object(r.b)("h3",{id:"for-of"},"For of"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"For...of")," loop came to JavaScript in ES6 (as many good things have). It loops over iterables: strings, arrays, NodeLists, maps, sets and other array-like objects."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{1} title="Example of for...of loop iterating over letters of a string"',"{1}":!0,title:'"Example',of:!0,"for...of":!0,loop:!0,iterating:!0,over:!0,letters:!0,a:!0,'string"':!0}),"for (const letter of name) {\n    console.log(letter);\n}\n")),Object(r.b)("p",null,"This loop is blazing fast for very small iterables. From martech perspective, it is a fantastic tool to iterate over NodeLists/HTMLCollections when working with DOM. Works great for working with outputs of API calls. Worth also using for operating on split-string-arrays (for example comma-separated strings)."),Object(r.b)("p",null,"It has many qualities that set it apart from the classic ",Object(r.b)("inlineCode",{parentName:"p"},"for")," loop:"),Object(r.b)("h4",{id:"key-value-pair-of-object"},"Key-Value Pair of Object"),Object(r.b)("p",null,"It can iterate over key-value paired iterators (for example map or even object - thanks to ",Object(r.b)("inlineCode",{parentName:"p"},"Object.entries()"),"):"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{1}","{1}":!0}),"for (const [key, value] of Object.entries(object)) {\n    console.log(key, value);\n}\n")),Object(r.b)("h4",{id:"index-value-pair-of-array"},"Index-Value Pair of Array"),Object(r.b)("p",null,"It can catch array values along with indexes:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{1}","{1}":!0}),"for (const [index, value] of array.entries()) {\n    console.log(index, value);\n}\n")),Object(r.b)("h4",{id:"in-place-destructuring"},"In-place Destructuring"),Object(r.b)("p",null,"It can destructure object on the go:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{3}","{3}":!0}),"const persons = [{ name: 'John Smith' }, { name: 'Jane Doe' }];\n\nfor (const { name } of persons) {\n    console.log(name); // returns: 'John Smith' \\n 'Jane Doe'\n}\n")),Object(r.b)("p",null,"In this example, ",Object(r.b)("inlineCode",{parentName:"p"},"for...of")," loop not only iterates over objects within an array but also automatically destructures them by getting the value of the ",Object(r.b)("inlineCode",{parentName:"p"},"name")," key. Thanks to it, the ",Object(r.b)("inlineCode",{parentName:"p"},"console.log")," will be printing the names in one line."),Object(r.b)("h4",{id:"iterating-over-function-arguments"},"Iterating over Function Arguments"),Object(r.b)("p",null,"Thanks to existance of special function variable ",Object(r.b)("inlineCode",{parentName:"p"},"arguments"),", ",Object(r.b)("inlineCode",{parentName:"p"},"for...of")," can loop over undefined amount of arguments."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{3} title="Function will return sum of any number of integers provided thanks to for-of loop"',"{3}":!0,title:'"Function',will:!0,return:!0,sum:!0,of:!0,any:!0,number:!0,integers:!0,provided:!0,thanks:!0,to:!0,"for-of":!0,'loop"':!0}),"function sum() {\n  let sum = 0;\n  for (const number of arguments) {\n    sum += number;\n  }\n  return sum;\n}\n\nsum(1, 2, 3); // returns: 6\n")),Object(r.b)("h3",{id:"for-in"},"For in"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"for...in")," loop is a good idea when you want to loop over object prototype methods and properties. Any other scenario? Not worth it. Don't use it. Just don't."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{1}","{1}":!0}),"for (const key in object) {\n    console.log(key);\n}\n")),Object(r.b)("h3",{id:"foreach"},"forEach"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"forEach")," iterates directly over an array. It applies function to each item but does not return anything."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{1}","{1}":!0}),"array.forEach((item, index, array) => {\n    console.log(`${item} has index ${index}`);\n    if (index === array.length - 1) {\n        console.log('Last iteration!');\n    }\n});\n")),Object(r.b)("p",null,"It differs from other loops:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"No need to define an iteration variable."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"continue")," or ",Object(r.b)("inlineCode",{parentName:"li"},"break")," won't work."),Object(r.b)("li",{parentName:"ul"},"In the callback function, we can leverage up to three optional parameters for an array: item, index, array."),Object(r.b)("li",{parentName:"ul"},"Because it uses a callback function, the logic is block scoped.")),Object(r.b)("p",null,"In most scenarios, the ",Object(r.b)("inlineCode",{parentName:"p"},"for...of")," loop will be a better choice."),Object(r.b)("hr",null),Object(r.b)("h2",{id:"while-loops"},"While Loops"),Object(r.b)("h3",{id:"while"},"While"),Object(r.b)("p",null,"A ",Object(r.b)("inlineCode",{parentName:"p"},"while")," loop executes its statement as long as the condition evaluates to true."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{2} title="Infinite while loop"',"{2}":!0,title:'"Infinite',while:!0,'loop"':!0}),"let run = true\nwhile (run === true) {\n    console.log('To the infinity and beyond!');\n}\n")),Object(r.b)("p",null,"To break out of ",Object(r.b)("inlineCode",{parentName:"p"},"while")," loop, there must be logic within it that will change the condition to false (or a ",Object(r.b)("inlineCode",{parentName:"p"},"break")," statement):"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{3}","{3}":!0}),"let run = true;\nlet i = 0;\nwhile (run === true) {\n    console.log('To the infinity and beyond!');\n    i++;\n    if (i > 10) {\n        run = false;\n    }\n}\n")),Object(r.b)("p",null,"or just:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{3} title="This loop has the same outcome as the one above"',"{3}":!0,title:'"This',loop:!0,has:!0,the:!0,same:!0,outcome:!0,as:!0,one:!0,'above"':!0}),"let run = true;\nlet i = 0;\nwhile (i <= 10) {\n    console.log('To the infinity and beyond!');\n    i++;\n}\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"while")," loop is the best option for iterating over ",Object(r.b)("strong",{parentName:"p"},"big")," arrays."),Object(r.b)("h3",{id:"do-while"},"Do While"),Object(r.b)("p",null,"Same as ",Object(r.b)("inlineCode",{parentName:"p"},"while"),", but the code runs once before evaluating the condition."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{1,3}","{1,3}":!0}),"do {\n    console.log('Running!');\n} while (run === true)\n")),Object(r.b)("p",null,"Perfect when you need to run an API call, check whether there are more pages of outcomes and act accordingly."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"You Should Know")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"JavaScript support labels for loops. It allows you to name each loop for even better control with both ",Object(r.b)("inlineCode",{parentName:"p"},"continue")," and ",Object(r.b)("inlineCode",{parentName:"p"},"break")," statements."),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'{1,8} title="Labelled loop example using a nested for loops"',"{1,8}":!0,title:'"Labelled',loop:!0,example:!0,using:!0,a:!0,nested:!0,for:!0,'loops"':!0}),"MainLoopLabel:\nfor (let i = 0; i < array.length; i++) {\n    // Logic\n    SecondaryLoopLabel:\n    for (let j = 0; j < array[i].length; j++) {\n        // Logic\n        if (array[i][j] === 'important') {\n            break MainLoopLabel;\n        };\n    };\n};\n")),Object(r.b)("p",{parentName:"div"},"As you can see, in the first line we added a label for the first ",Object(r.b)("inlineCode",{parentName:"p"},"for")," loop. Then, in the statement within the second ",Object(r.b)("inlineCode",{parentName:"p"},"for")," loop, we used ",Object(r.b)("inlineCode",{parentName:"p"},"break")," followed by the label. Once executed, it will break both for loops, even if there were still iterations in the main one. The same approach works with the ",Object(r.b)("inlineCode",{parentName:"p"},"continue")," statement."))))}p.isMDXComponent=!0}}]);