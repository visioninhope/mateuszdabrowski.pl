(self.webpackChunkmd=self.webpackChunkmd||[]).push([[163],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8921:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var a=n(7294),r=n(6010),i="tableOfContentsInline_3fWc";function l(e){var t=e.toc,n=e.isChild;return t.length?a.createElement("ul",{className:n?"":"table-of-contents"},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(l,{isChild:!0,toc:e.children}))}))):null}var o=function(e){var t=e.toc;return a.createElement("div",{className:(0,r.Z)(i)},a.createElement(l,{toc:t}))}},8448:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},2168:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(7294),r=n(50),i=n(6010),l="tabItem_1uMI",o="tabItemActive_2DSg";var s=37,p=39;var c=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,u=e.values,m=e.groupId,d=e.className,k=(0,r.Z)(),h=k.tabGroupChoices,g=k.setTabGroupChoices,f=(0,a.useState)(c),S=f[0],N=f[1],v=a.Children.toArray(e.children),b=[];if(null!=m){var w=h[m];null!=w&&w!==S&&u.some((function(e){return e.value===w}))&&N(w)}var y=function(e){var t=e.currentTarget,n=b.indexOf(t),a=u[n].value;N(a),null!=m&&(g(m,a),setTimeout((function(){var e,n,a,r,i,l,s,p;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,l=window,s=l.innerHeight,p=l.innerWidth,n>=0&&i<=p&&r<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},T=function(e){var t,n;switch(e.keyCode){case p:var a=b.indexOf(e.target)+1;n=b[a]||b[0];break;case s:var r=b.indexOf(e.target)-1;n=b[r]||b[b.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},d)},u.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":S===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:T,onFocus:y,onClick:y},n)}))),t?(0,a.cloneElement)(v.filter((function(e){return e.props.value===S}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}},2713:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},50:function(e,t,n){"use strict";var a=n(7294),r=n(2713);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},2043:function(e,t,n){"use strict";n.d(t,{m:function(){return i}});var a=n(7294),r="leadText_16va",i=function(e){var t=e.content;return a.createElement(a.Fragment,null,a.createElement("p",{id:r},t))}},5958:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return u},toc:function(){return m},default:function(){return k}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),l=n(2168),o=n(8448),s=n(8921),p=n(2043),c={id:"ssjs-vs-ampscript-performance",title:"SSJS vs AMPScript Performance",sidebar_label:"Performance",description:"Should I use AMPScript or SSJS? Which is better? As always, it depends. Check the performance comparisons for various use cases."},u={unversionedId:"ssjs/ssjs-vs-ampscript-performance",id:"ssjs/ssjs-vs-ampscript-performance",isDocsHomePage:!1,title:"SSJS vs AMPScript Performance",description:"Should I use AMPScript or SSJS? Which is better? As always, it depends. Check the performance comparisons for various use cases.",source:"@site/docs/ssjs/ssjs-vs-ampscript-performance.mdx",sourceDirName:"ssjs",slug:"/ssjs/ssjs-vs-ampscript-performance",permalink:"/docs/ssjs/ssjs-vs-ampscript-performance",editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/docs/ssjs/ssjs-vs-ampscript-performance.mdx",version:"current",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1615417469,formattedLastUpdatedAt:"3/11/2021",sidebar_label:"Performance",frontMatter:{id:"ssjs-vs-ampscript-performance",title:"SSJS vs AMPScript Performance",sidebar_label:"Performance",description:"Should I use AMPScript or SSJS? Which is better? As always, it depends. Check the performance comparisons for various use cases."},sidebar:"snippets",previous:{title:"Docs & Snippets",permalink:"/docs/"},next:{title:"Solve with Cloud Apps",permalink:"/docs/usecase/sfmc-cloud-apps"}},m=[{value:"Conclusions",id:"conclusions",children:[{value:"AMPScript vs SSJS",id:"ampscript-vs-ssjs",children:[]},{value:"SSJS Best Practices",id:"ssjs-best-practices",children:[]}]},{value:"Methodology",id:"methodology",children:[]},{value:"Performance Test Cases",id:"performance-test-cases",children:[{value:"Code Block Breaking",id:"code-block-breaking",children:[]},{value:"ProperCase",id:"propercase",children:[]},{value:"LowerCase &amp; UpperCase",id:"lowercase--uppercase",children:[]}]}],d={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(p.m,{content:"Should I use AMPScript or SSJS? Which is better? As always, it depends. Check the performance comparisons for various use cases.",mdxType:"LeadText"}),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Table of Contents")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)(s.Z,{toc:m,mdxType:"TOCInline"}))),(0,i.kt)("p",null,"There is much knowledge shared on blogs, social networks, and Stack Exchange in the Salesforce Marketing Cloud world. Frequently you will see some strong opinions on which scripting approach is best."),(0,i.kt)("p",null,"I decided to check some of those assumptions empirically. Some test results are obvious, and some might surprise you (just as they surprised me)."),(0,i.kt)("p",null,"I split the article into two sections:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#conclusions"},"Conclusions")," are the TL;DR of my tests. If you want quick high-level findings - go there."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#performance-test-cases"},"Performance Test Cases")," are the nerdy part, where I describe the exact code used for each case and more dive into detailed outcomes that might give you a better basis for a decision on what to use.")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"You Should Know")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This article will be in constant Work In Progress state, as I plan to add new test cases and conclusions perpetually."),(0,i.kt)("p",{parentName:"div"},"Should you have any interesting idea for a test case - let me know!"),(0,i.kt)("p",{parentName:"div"},"Next: speed comparison of mirrored SSJS Platform and Core functions."))),(0,i.kt)("h2",{id:"conclusions"},"Conclusions"),(0,i.kt)("h3",{id:"ampscript-vs-ssjs"},"AMPScript vs SSJS"),(0,i.kt)("p",null,"For scripting in time-critical assets (Emails, SMS, Pushes), go with AMPScript. It is much more optimised for the most popular use cases in this space, which will make a difference when scaled for hundreds of thousands of executions."),(0,i.kt)("p",null,"For scripting in other assets (Landing Pages, Automation Studio), it depends on the use case. As a rule of thumb, AMPScript might be a bit more optimised, but for more complex projects, it lacks readability, flexibility and power (arrays, objects, try/catch, etc.). If you are building something simple - AMPScript might be the way to go. Otherwise, go with SSJS (or mix for optimisation)."),(0,i.kt)("h3",{id:"ssjs-best-practices"},"SSJS Best Practices"),(0,i.kt)("p",null,"When splitting your SSJS code block, try not to do it within a long loop (",(0,i.kt)("a",{parentName:"p",href:"#code-block-breaking"},"Code Block Breaking"),")."),(0,i.kt)("p",null,"However, if you find an out-of-the-box AMPScript function that does something requiring custom development on the SSJS side (ProperCase, SFDC integration), it might be worth to inject AMPScript into your SSJS. The impact of code splitting on execution time might be much smaller than that of the complex code necessary to replicate a function (",(0,i.kt)("a",{parentName:"p",href:"#propercase"},"ProperCase"),"). For functions available in both languages, you should stay with the SSJS not to mix scripting contexts  (",(0,i.kt)("a",{parentName:"p",href:"#lowercase--uppercase"},"LowerCase & UpperCase"),")."),(0,i.kt)("h2",{id:"methodology"},"Methodology"),(0,i.kt)("p",null,"The testing toolset is minimal by the nature of SSJS and AMPScript. I'm using a Cloud Page and ",(0,i.kt)("inlineCode",{parentName:"p"},"new Date().getTime();")," to capture the execution's beginning and end. Within this scope, I run a ",(0,i.kt)("a",{parentName:"p",href:"/docs/ssjs/ssjs-loops"},"loop")," with the code I want to test. Finally, I divide the total time by the number of loop iterations to get an average run time."),(0,i.kt)("p",null,"This approach means that the millisecond values I provide are in no way the exact times you can use to calculate the speed at scale. But they should be standardised enough to allow for meaningful comparison between various scenarios. The actual times also change a bit when we run the test multiple times, as the strain on Marketing Cloud servers at the very moment of execution also has an impact. Focus less on exact milliseconds count and more on relations between the values."),(0,i.kt)("p",null,"In the test case descriptions, you can find additional details on the methodology: input used for the test, expected output, number of loop iterations or exact code tested."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"You Should Know")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For testing the execution speed of AMPScript block solutions, I'm using the SSJS to start and stop the count. I compared it with calculation using AMPScript ",(0,i.kt)("inlineCode",{parentName:"p"},"FormatDate(Now(), 'ISO')"),", and there was no meaningful difference between the two."))),(0,i.kt)("h2",{id:"performance-test-cases"},"Performance Test Cases"),(0,i.kt)("h3",{id:"code-block-breaking"},"Code Block Breaking"),(0,i.kt)("p",null,"I wanted to test the cost of breaking out of a code block for both SSJS and AMPScript."),(0,i.kt)("p",null,"Understanding the execution time impact of the scripting context switch was necessary for me to make valid conclusions for future tests and help decide on the best approach when coding a personalisation solution."),(0,i.kt)("h4",{id:"test-cases"},"Test Cases"),(0,i.kt)(l.Z,{defaultValue:"ssjs",values:[{label:"SSJS",value:"ssjs"},{label:"SSJS + HTML",value:"html"},{label:"SSJS + AMPScript",value:"ampinssjs"},{label:"AMPScript",value:"ampscript"},{label:"AMPScript x2",value:"ampscript2"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"ssjs",mdxType:"TabItem"},(0,i.kt)("p",null,"In this scenario, there is no context switch. I timed a pure SSJS loop to have a base for analysis."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"for (var i = 0; i < 10000; i++) {\n    var a;\n}\n"))),(0,i.kt)(o.Z,{value:"html",mdxType:"TabItem"},(0,i.kt)("p",null,"In the next scenario, I added empty breaking out of SSJS within a loop."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'for (var i = 0; i < 10000; i++) {\n    var b;\n    <\/script>\n\n    <script runat="server">\n}\n'))),(0,i.kt)(o.Z,{value:"ampinssjs",mdxType:"TabItem"},(0,i.kt)("p",null,"Next, I pushed an AMPScript block within the break."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'for (var i = 0; i < 10000; i++) {\n    <\/script>\n    %%[\n        VAR @c\n    ]%%\n    <script runat="server">\n}\n'))),(0,i.kt)(o.Z,{value:"ampscript",mdxType:"TabItem"},(0,i.kt)("p",null,"Then I put the for loop in the AMPScript context. As a result, the SSJS code block breaking impact count only once per 10 000 executions, making it irrelevant for the final average. It gives us another base for the next test."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'<\/script>\n%%[\n    FOR @current = 1 TO 10000 DO\n        VAR @d\n    NEXT @current\n]%%\n<script runat="server">\n\n'))),(0,i.kt)(o.Z,{value:"ampscript2",mdxType:"TabItem"},(0,i.kt)("p",null,"For the final scenario I decided to break out of AMPScript context within an AMPScript loop, as this is popular way for creating dynamic content in Marketing Cloud."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'<\/script>\n    %%[\n    FOR @current = 1 TO @Counter DO\n        VAR @d\n        ]%%\n\n        %%[\n    NEXT @current\n    ]%%\n<script runat="server">\n')))),(0,i.kt)("h4",{id:"outcomes-ms"},"Outcomes (ms)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"SSJS"),(0,i.kt)("th",{parentName:"tr",align:null},"SSJS + HTML"),(0,i.kt)("th",{parentName:"tr",align:null},"SSJS + AMPScript"),(0,i.kt)("th",{parentName:"tr",align:null},"AMPScript"),(0,i.kt)("th",{parentName:"tr",align:null},"AMPScript x2"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0.0016"),(0,i.kt)("td",{parentName:"tr",align:null},"0.1453"),(0,i.kt)("td",{parentName:"tr",align:null},"0.1422"),(0,i.kt)("td",{parentName:"tr",align:null},"0.0015"),(0,i.kt)("td",{parentName:"tr",align:null},"0.0016")))),(0,i.kt)("h4",{id:"sum-up"},"Sum Up"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Breaking out of the SSJS code block is impacting execution time."),(0,i.kt)("li",{parentName:"ol"},"Breaking out of the AMPScript code block has close to none impact on execution time.")),(0,i.kt)("h3",{id:"propercase"},"ProperCase"),(0,i.kt)("p",null,"What should you use when you want to change a string to Proper Case? As there is no single function in SSJS for that, I compared two pure SSJS approaches (",(0,i.kt)("inlineCode",{parentName:"p"},"split"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"join")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"replace")," with RegEx) with ",(0,i.kt)("a",{parentName:"p",href:"/docs/ssjs/ssjs-snippet-ampscript-in-ssjs"},"AMPScript in SSJS")," and (nearly) pure AMPScript."),(0,i.kt)("p",null,"The test was performed using ten different strings varying in number of words and capitalization:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"var sentences = [\n    'one',                                      // 1\n    'one Two',                                  // 2\n    'one Two THREE',                            // 3\n    'one Two THREE fOUR',                       // 4\n    'one Two THREE fOUR FiVe',                  // 5\n    'one Two THREE fOUR FiVe siX',              // 6\n    'one Two THREE fOUR FiVe siX &',            // 7\n    'one Two THREE fOUR FiVe siX & 8',          // 8\n    'one Two THREE fOUR FiVe siX & 8 nine',     // 9\n    'one Two THREE fOUR FiVe siX & 8 nine-ten'  // 10\n];\n")),(0,i.kt)("p",null,"All approaches output final sentence as: ",(0,i.kt)("inlineCode",{parentName:"p"},"One Two Three Four Five Six & 8 Nine-ten")),(0,i.kt)("h4",{id:"test-cases-1"},"Test Cases"),(0,i.kt)(l.Z,{defaultValue:"split",values:[{label:"SSJS Split",value:"split"},{label:"SSJS Replace",value:"replace"},{label:"AMPScript in SSJS",value:"ampinssjs"},{label:"AMPScript",value:"ampscript"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"split",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'function toTitleCase(string) {\n    var sentence = string.toLowerCase().split(" ");\n    for (var i = 0; i < sentence.length; i++) {\n        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);\n    }\n    sentence = sentence.join(" ");\n    return sentence;\n}\n\ntitle = toTitleCase(testedString);\n'))),(0,i.kt)(o.Z,{value:"replace",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"title = testedString.replace(\n    /[a-zA-Z]\\S*/g, function(string) {\n        return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase()\n    }\n);\n"))),(0,i.kt)(o.Z,{value:"ampinssjs",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"function ampScript(code) {\n    var ampBlock = '\\%\\%[' + code + ']\\%\\%';\n    Platform.Function.TreatAsContent(ampBlock);\n    return Variable.GetValue('@Response');\n}\n\ntitle = ampScript(\"SET @Response = ProperCase('\" + testedString + \"')\");\n"))),(0,i.kt)(o.Z,{value:"ampscript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"%%[\nSET @Response = ProperCase(@Sentence)\n]%%\n")))),(0,i.kt)("h4",{id:"outcomes-ms-1"},"Outcomes (ms)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Sentence"),(0,i.kt)("th",{parentName:"tr",align:null},"SSJS Split"),(0,i.kt)("th",{parentName:"tr",align:null},"SSJS Replace"),(0,i.kt)("th",{parentName:"tr",align:null},"AMPScript in SSJS"),(0,i.kt)("th",{parentName:"tr",align:null},"AMPScript"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"0.0968"),(0,i.kt)("td",{parentName:"tr",align:null},"0.0782"),(0,i.kt)("td",{parentName:"tr",align:null},"0.3686"),(0,i.kt)("td",{parentName:"tr",align:null},"0.0032")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2"),(0,i.kt)("td",{parentName:"tr",align:null},"0.1376"),(0,i.kt)("td",{parentName:"tr",align:null},"0.1186"),(0,i.kt)("td",{parentName:"tr",align:null},"0.3688"),(0,i.kt)("td",{parentName:"tr",align:null},"0.0032")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3"),(0,i.kt)("td",{parentName:"tr",align:null},"0.175"),(0,i.kt)("td",{parentName:"tr",align:null},"0.1594"),(0,i.kt)("td",{parentName:"tr",align:null},"0.3874"),(0,i.kt)("td",{parentName:"tr",align:null},"0.0032")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4"),(0,i.kt)("td",{parentName:"tr",align:null},"0.2218"),(0,i.kt)("td",{parentName:"tr",align:null},"0.2032"),(0,i.kt)("td",{parentName:"tr",align:null},"0.375"),(0,i.kt)("td",{parentName:"tr",align:null},"0.0062")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5"),(0,i.kt)("td",{parentName:"tr",align:null},"0.2562"),(0,i.kt)("td",{parentName:"tr",align:null},"0.247"),(0,i.kt)("td",{parentName:"tr",align:null},"0.3686"),(0,i.kt)("td",{parentName:"tr",align:null},"0.0064")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"6"),(0,i.kt)("td",{parentName:"tr",align:null},"0.2968"),(0,i.kt)("td",{parentName:"tr",align:null},"0.2812"),(0,i.kt)("td",{parentName:"tr",align:null},"0.372"),(0,i.kt)("td",{parentName:"tr",align:null},"0.0062")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"7"),(0,i.kt)("td",{parentName:"tr",align:null},"0.3344"),(0,i.kt)("td",{parentName:"tr",align:null},"0.2844"),(0,i.kt)("td",{parentName:"tr",align:null},"0.375"),(0,i.kt)("td",{parentName:"tr",align:null},"0.003")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"8"),(0,i.kt)("td",{parentName:"tr",align:null},"0.372"),(0,i.kt)("td",{parentName:"tr",align:null},"0.2874"),(0,i.kt)("td",{parentName:"tr",align:null},"0.372"),(0,i.kt)("td",{parentName:"tr",align:null},"0.003")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"9"),(0,i.kt)("td",{parentName:"tr",align:null},"0.4126"),(0,i.kt)("td",{parentName:"tr",align:null},"0.3312"),(0,i.kt)("td",{parentName:"tr",align:null},"0.3718"),(0,i.kt)("td",{parentName:"tr",align:null},"0.0064")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"10"),(0,i.kt)("td",{parentName:"tr",align:null},"0.4124"),(0,i.kt)("td",{parentName:"tr",align:null},"0.342"),(0,i.kt)("td",{parentName:"tr",align:null},"0.375"),(0,i.kt)("td",{parentName:"tr",align:null},"0.0064")))),(0,i.kt)("h4",{id:"sum-up-1"},"Sum Up:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Pure AMPScript execution time for ProperCase scenario murders SSJS."),(0,i.kt)("li",{parentName:"ol"},"When working with arrays or regex replace, SSJS execution time extends with each additional word. However, AMPScript execution time is constant thanks to the optimised out-of-the-box ",(0,i.kt)("inlineCode",{parentName:"li"},"ProperCase")," function."),(0,i.kt)("li",{parentName:"ol"},"Although ",(0,i.kt)("a",{parentName:"li",href:"/docs/ssjs/ssjs-snippet-ampscript-in-ssjs"},"AMPScript in SSJS")," is doing levels-of-magnitude worse than pure AMPScript, it will be a better choice then pure SSJS for long sentences (10+ words)."),(0,i.kt)("li",{parentName:"ol"},"SSJS Replace might be the option to choose despite the performance if you want more flexibility (for example, changing that ",(0,i.kt)("inlineCode",{parentName:"li"},"Nine-ten")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"Nine-Ten"),")."),(0,i.kt)("li",{parentName:"ol"},"Otherwise, for anything longer than a few words, consider ",(0,i.kt)("a",{parentName:"li",href:"#code-block-breaking"},"breaking from the SSJS code block")," to leverage AMPscript.")),(0,i.kt)("h3",{id:"lowercase--uppercase"},"LowerCase & UpperCase"),(0,i.kt)("p",null,"Based on the ",(0,i.kt)("a",{parentName:"p",href:"#propercase"},"Proper Case")," scenario's exciting outcomes, I decided to follow up on that with a performance comparison on a function that is available out-of-the-box in both SSJS and AMPScript. For testing, I used sibling string modification - Lower Case."),(0,i.kt)("p",null,"The test was performed using ten different strings varying in number of words and capitalization (same as for Proper Case):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"var sentences = [\n    'one',                                      // 1\n    'one Two',                                  // 2\n    'one Two THREE',                            // 3\n    'one Two THREE fOUR',                       // 4\n    'one Two THREE fOUR FiVe',                  // 5\n    'one Two THREE fOUR FiVe siX',              // 6\n    'one Two THREE fOUR FiVe siX &',            // 7\n    'one Two THREE fOUR FiVe siX & 8',          // 8\n    'one Two THREE fOUR FiVe siX & 8 nine',     // 9\n    'one Two THREE fOUR FiVe siX & 8 nine-ten'  // 10\n];\n")),(0,i.kt)("p",null,"All approaches output final sentence as: ",(0,i.kt)("inlineCode",{parentName:"p"},"one two three four five six & 8 nine-ten")),(0,i.kt)("h4",{id:"test-cases-2"},"Test Cases"),(0,i.kt)(l.Z,{defaultValue:"method",values:[{label:"SSJS Method",value:"method"},{label:"SSJS Function",value:"function"},{label:"AMPScript in SSJS",value:"ampinssjs"},{label:"AMPScript",value:"ampscript"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"method",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"title = testedString.toLowerCase();\n"))),(0,i.kt)(o.Z,{value:"function",mdxType:"TabItem"},(0,i.kt)("p",null,"This approach doesn't make sense but gives an idea of the impact of using function vs method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"function toLowerCase(string) {\n    var sentence = string.toLowerCase()\n    return sentence;\n}\ntitle = toLowerCase(sentences[a]);\n"))),(0,i.kt)(o.Z,{value:"ampinssjs",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"function ampScript(code) {\n    var ampBlock = '\\%\\%[' + code + ']\\%\\%';\n    Platform.Function.TreatAsContent(ampBlock);\n    return Variable.GetValue('@Response');\n}\n\ntitle = ampScript(\"SET @Response = LowerCase('\" + testedString + \"')\");\n"))),(0,i.kt)(o.Z,{value:"ampscript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"%%[\nSET @Response = LowerCase(@Sentence)\n]%%\n")))),(0,i.kt)("h4",{id:"outcomes-ms-2"},"Outcomes (ms)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Sentence"),(0,i.kt)("th",{parentName:"tr",align:null},"SSJS Method"),(0,i.kt)("th",{parentName:"tr",align:null},"SSJS Function"),(0,i.kt)("th",{parentName:"tr",align:null},"AMPScript in SSJS"),(0,i.kt)("th",{parentName:"tr",align:null},"AMPScript"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"0.014"),(0,i.kt)("td",{parentName:"tr",align:null},"0.0203"),(0,i.kt)("td",{parentName:"tr",align:null},"0.3625"),(0,i.kt)("td",{parentName:"tr",align:null},"0.0032")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2"),(0,i.kt)("td",{parentName:"tr",align:null},"0.0125"),(0,i.kt)("td",{parentName:"tr",align:null},"0.0187"),(0,i.kt)("td",{parentName:"tr",align:null},"0.3625"),(0,i.kt)("td",{parentName:"tr",align:null},"0.0031")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3"),(0,i.kt)("td",{parentName:"tr",align:null},"0.0125"),(0,i.kt)("td",{parentName:"tr",align:null},"0.0188"),(0,i.kt)("td",{parentName:"tr",align:null},"0.3625"),(0,i.kt)("td",{parentName:"tr",align:null},"0.0031")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4"),(0,i.kt)("td",{parentName:"tr",align:null},"0.0125"),(0,i.kt)("td",{parentName:"tr",align:null},"0.0188"),(0,i.kt)("td",{parentName:"tr",align:null},"0.3687"),(0,i.kt)("td",{parentName:"tr",align:null},"0.0016")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5"),(0,i.kt)("td",{parentName:"tr",align:null},"0.0125"),(0,i.kt)("td",{parentName:"tr",align:null},"0.0187"),(0,i.kt)("td",{parentName:"tr",align:null},"0.3641"),(0,i.kt)("td",{parentName:"tr",align:null},"0.0015")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"6"),(0,i.kt)("td",{parentName:"tr",align:null},"0.0125"),(0,i.kt)("td",{parentName:"tr",align:null},"0.0188"),(0,i.kt)("td",{parentName:"tr",align:null},"0.3641"),(0,i.kt)("td",{parentName:"tr",align:null},"0.0031")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"7"),(0,i.kt)("td",{parentName:"tr",align:null},"0.0125"),(0,i.kt)("td",{parentName:"tr",align:null},"0.0187"),(0,i.kt)("td",{parentName:"tr",align:null},"0.3625"),(0,i.kt)("td",{parentName:"tr",align:null},"0.0032")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"8"),(0,i.kt)("td",{parentName:"tr",align:null},"0.0125"),(0,i.kt)("td",{parentName:"tr",align:null},"0.0187"),(0,i.kt)("td",{parentName:"tr",align:null},"0.3672"),(0,i.kt)("td",{parentName:"tr",align:null},"0.0031")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"9"),(0,i.kt)("td",{parentName:"tr",align:null},"0.0125"),(0,i.kt)("td",{parentName:"tr",align:null},"0.0204"),(0,i.kt)("td",{parentName:"tr",align:null},"0.3593"),(0,i.kt)("td",{parentName:"tr",align:null},"0.0032")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"10"),(0,i.kt)("td",{parentName:"tr",align:null},"0.014"),(0,i.kt)("td",{parentName:"tr",align:null},"0.0203"),(0,i.kt)("td",{parentName:"tr",align:null},"0.3625"),(0,i.kt)("td",{parentName:"tr",align:null},"0.0016")))),(0,i.kt)("h4",{id:"sum-up-2"},"Sum up"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The out-of-the-box JavaScript method works much better then the custom solution developer for ",(0,i.kt)("a",{parentName:"li",href:"#propercase"},"Proper Case")," - just like the AMPScript function, it executes in constant time regardless of sentence length."),(0,i.kt)("li",{parentName:"ol"},"Pure AMPScript execution time still is better, but due to constant time in both languages and much faster SSJS speed, there is no longer any reason to use ",(0,i.kt)("a",{parentName:"li",href:"/docs/ssjs/ssjs-snippet-ampscript-in-ssjs"},"AMPScript in SSJS")," or ",(0,i.kt)("a",{parentName:"li",href:"#code-block-breaking"},"break out of SSJS code block"),".")))}k.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);