"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[2163],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},425:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:n},t)}},3992:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(7462),r=n(7294),l=n(6010),i=n(2957),o=n(6550),s=n(5238),p=n(3609),u=n(2560);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=m(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,p]=k({queryString:n,groupId:a}),[c,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),g=(()=>{const e=s??c;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),h(e)}),[p,h,l]),tabValues:l}}var g=n(1048);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function S(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),a=p[n].value;a!==o&&(c(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},i,{className:(0,l.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=h(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},r.createElement(S,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function v(e){const t=(0,g.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},1872:(e,t,n)=>{n.d(t,{m:()=>l});var a=n(7294);const r="leadText_qzwo",l=e=>{let{content:t}=e;return a.createElement(a.Fragment,null,a.createElement("p",{id:r},t))}},1598:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var a=n(7462),r=(n(7294),n(4137)),l=n(3992),i=n(425),o=n(1872);const s={id:"ssjs-vs-ampscript-performance",title:"SSJS vs AMPScript Performance",sidebar_label:"Performance",description:"Should I use AMPScript or SSJS? Which is better? As always, it depends. Check the performance comparisons for various use cases.",image:"img/og/og-image-ssjs-vs-ampscript-performance.png",tags:["Marketing Cloud","SSJS","AMPScript","Performance"]},p=void 0,u={unversionedId:"ssjs/ssjs-vs-ampscript-performance",id:"ssjs/ssjs-vs-ampscript-performance",title:"SSJS vs AMPScript Performance",description:"Should I use AMPScript or SSJS? Which is better? As always, it depends. Check the performance comparisons for various use cases.",source:"@site/docs/ssjs/ssjs-vs-ampscript-performance.mdx",sourceDirName:"ssjs",slug:"/ssjs/ssjs-vs-ampscript-performance",permalink:"/docs/ssjs/ssjs-vs-ampscript-performance",draft:!1,editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/docs/ssjs/ssjs-vs-ampscript-performance.mdx",tags:[{label:"Marketing Cloud",permalink:"/docs/tags/marketing-cloud"},{label:"SSJS",permalink:"/docs/tags/ssjs"},{label:"AMPScript",permalink:"/docs/tags/amp-script"},{label:"Performance",permalink:"/docs/tags/performance"}],version:"current",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1672049341,formattedLastUpdatedAt:"Dec 26, 2022",frontMatter:{id:"ssjs-vs-ampscript-performance",title:"SSJS vs AMPScript Performance",sidebar_label:"Performance",description:"Should I use AMPScript or SSJS? Which is better? As always, it depends. Check the performance comparisons for various use cases.",image:"img/og/og-image-ssjs-vs-ampscript-performance.png",tags:["Marketing Cloud","SSJS","AMPScript","Performance"]},sidebar:"docs",previous:{title:"Style Guide",permalink:"/docs/ssjs/ssjs-style-guide"},next:{title:"JavaScript",permalink:"/docs/category/javascript"}},c={},m=[{value:"Conclusions",id:"conclusions",level:2},{value:"AMPScript vs SSJS",id:"ampscript-vs-ssjs",level:3},{value:"SSJS Best Practices",id:"ssjs-best-practices",level:3},{value:"Methodology",id:"methodology",level:2},{value:"Performance Test Cases",id:"performance-test-cases",level:2},{value:"Code Block Breaking",id:"code-block-breaking",level:3},{value:"Test Cases",id:"test-cases",level:4},{value:"Outcomes (ms)",id:"outcomes-ms",level:4},{value:"Sum Up",id:"sum-up",level:4},{value:"ProperCase",id:"propercase",level:3},{value:"Test Cases",id:"test-cases-1",level:4},{value:"Outcomes (ms)",id:"outcomes-ms-1",level:4},{value:"Sum Up:",id:"sum-up-1",level:4},{value:"LowerCase &amp; UpperCase",id:"lowercase--uppercase",level:3},{value:"Test Cases",id:"test-cases-2",level:4},{value:"Outcomes (ms)",id:"outcomes-ms-2",level:4},{value:"Sum up",id:"sum-up-2",level:4}],d={toc:m},k="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.m,{content:"Should I use AMPScript or SSJS? Which is better? As always, it depends. Check the performance comparisons for various use cases.",mdxType:"LeadText"}),(0,r.kt)("p",null,"There is much knowledge shared on blogs, social networks, and Stack Exchange in the Salesforce Marketing Cloud world. Frequently you will see some strong opinions on which scripting approach is best."),(0,r.kt)("p",null,"I decided to check some of those assumptions empirically. Some test results are obvious, and some might surprise you (just as they surprised me)."),(0,r.kt)("p",null,"I split the article into two sections:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#conclusions"},"Conclusions")," are the TL;DR of my tests. If you want quick high-level findings - go there."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#performance-test-cases"},"Performance Test Cases")," are the nerdy part, where I describe the exact code used for each case and more dive into detailed outcomes that might give you a better basis for a decision on what to use.")),(0,r.kt)("admonition",{title:"You Should Know",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This article will be in constant Work In Progress state, as I plan to add new test cases and conclusions perpetually."),(0,r.kt)("p",{parentName:"admonition"},"Should you have any interesting idea for a test case - let me know!"),(0,r.kt)("p",{parentName:"admonition"},"Next: speed comparison of mirrored SSJS Platform and Core functions.")),(0,r.kt)("h2",{id:"conclusions"},"Conclusions"),(0,r.kt)("h3",{id:"ampscript-vs-ssjs"},"AMPScript vs SSJS"),(0,r.kt)("p",null,"For scripting in time-critical assets (Emails, SMS, Pushes), go with AMPScript. It is much more optimised for the most popular use cases in this space, which will make a difference when scaled for hundreds of thousands of executions."),(0,r.kt)("p",null,"For scripting in other assets (Landing Pages, Automation Studio), it depends on the use case. As a rule of thumb, AMPScript might be a bit more optimised, but for more complex projects, it lacks readability, flexibility and power (arrays, objects, try/catch, etc.). If you are building something simple - AMPScript might be the way to go. Otherwise, go with SSJS (or mix for optimisation)."),(0,r.kt)("h3",{id:"ssjs-best-practices"},"SSJS Best Practices"),(0,r.kt)("p",null,"When splitting your SSJS code block, try not to do it within a long loop (",(0,r.kt)("a",{parentName:"p",href:"#code-block-breaking"},"Code Block Breaking"),")."),(0,r.kt)("p",null,"However, if you find an out-of-the-box AMPScript function that does something requiring custom development on the SSJS side (ProperCase, SFDC integration), it might be worth to inject AMPScript into your SSJS. The impact of code splitting on execution time might be much smaller than that of the complex code necessary to replicate a function (",(0,r.kt)("a",{parentName:"p",href:"#propercase"},"ProperCase"),"). For functions available in both languages, you should stay with the SSJS not to mix scripting contexts  (",(0,r.kt)("a",{parentName:"p",href:"#lowercase--uppercase"},"LowerCase & UpperCase"),")."),(0,r.kt)("h2",{id:"methodology"},"Methodology"),(0,r.kt)("p",null,"The testing toolset is minimal by the nature of SSJS and AMPScript. I'm using a Cloud Page and ",(0,r.kt)("inlineCode",{parentName:"p"},"new Date().getTime();")," to capture the execution's beginning and end. Within this scope, I run a ",(0,r.kt)("a",{parentName:"p",href:"/docs/ssjs/ssjs-loops"},"loop")," with the code I want to test. Finally, I divide the total time by the number of loop iterations to get an average run time."),(0,r.kt)("p",null,"This approach means that the millisecond values I provide are in no way the exact times you can use to calculate the speed at scale. But they should be standardised enough to allow for meaningful comparison between various scenarios. The actual times also change a bit when we run the test multiple times, as the strain on Marketing Cloud servers at the very moment of execution also has an impact. Focus less on exact milliseconds count and more on relations between the values."),(0,r.kt)("p",null,"In the test case descriptions, you can find additional details on the methodology: input used for the test, expected output, number of loop iterations or exact code tested."),(0,r.kt)("admonition",{title:"You Should Know",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For testing the execution speed of AMPScript block solutions, I'm using the SSJS to start and stop the count. I compared it with calculation using AMPScript ",(0,r.kt)("inlineCode",{parentName:"p"},"FormatDate(Now(), 'ISO')"),", and there was no meaningful difference between the two.")),(0,r.kt)("h2",{id:"performance-test-cases"},"Performance Test Cases"),(0,r.kt)("h3",{id:"code-block-breaking"},"Code Block Breaking"),(0,r.kt)("p",null,"I wanted to test the cost of breaking out of a code block for both SSJS and AMPScript."),(0,r.kt)("p",null,"Understanding the execution time impact of the scripting context switch was necessary for me to make valid conclusions for future tests and help decide on the best approach when coding a personalisation solution."),(0,r.kt)("h4",{id:"test-cases"},"Test Cases"),(0,r.kt)(l.Z,{defaultValue:"ssjs",values:[{label:"SSJS",value:"ssjs"},{label:"SSJS + HTML",value:"html"},{label:"SSJS + AMPScript",value:"ampinssjs"},{label:"AMPScript",value:"ampscript"},{label:"AMPScript x2",value:"ampscript2"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ssjs",mdxType:"TabItem"},(0,r.kt)("p",null,"In this scenario, there is no context switch. I timed a pure SSJS loop to have a base for analysis."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"for (var i = 0; i < 10000; i++) {\n    var a;\n};\n"))),(0,r.kt)(i.Z,{value:"html",mdxType:"TabItem"},(0,r.kt)("p",null,"In the next scenario, I added empty breaking out of SSJS within a loop."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'for (var i = 0; i < 10000; i++) {\n    var b;\n    <\/script>\n\n    <script runat="server">\n};\n'))),(0,r.kt)(i.Z,{value:"ampinssjs",mdxType:"TabItem"},(0,r.kt)("p",null,"Next, I pushed an AMPScript block within the break."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'for (var i = 0; i < 10000; i++) {\n    <\/script>\n    %%[\n        VAR @c\n    ]%%\n    <script runat="server">\n};\n'))),(0,r.kt)(i.Z,{value:"ampscript",mdxType:"TabItem"},(0,r.kt)("p",null,"Then I put the for loop in the AMPScript context. As a result, the SSJS code block breaking impact count only once per 10 000 executions, making it irrelevant for the final average. It gives us another base for the next test."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<\/script>\n%%[\n    FOR @current = 1 TO 10000 DO\n        VAR @d\n    NEXT @current\n]%%\n<script runat="server">\n\n'))),(0,r.kt)(i.Z,{value:"ampscript2",mdxType:"TabItem"},(0,r.kt)("p",null,"For the final scenario I decided to break out of AMPScript context within an AMPScript loop, as this is popular way for creating dynamic content in Marketing Cloud."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<\/script>\n    %%[\n    FOR @current = 1 TO 10000 DO\n        VAR @e\n        ]%%\n\n        %%[\n    NEXT @current\n    ]%%\n<script runat="server">\n')))),(0,r.kt)("h4",{id:"outcomes-ms"},"Outcomes (ms)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"SSJS"),(0,r.kt)("th",{parentName:"tr",align:null},"SSJS + HTML"),(0,r.kt)("th",{parentName:"tr",align:null},"SSJS + AMPScript"),(0,r.kt)("th",{parentName:"tr",align:null},"AMPScript"),(0,r.kt)("th",{parentName:"tr",align:null},"AMPScript x2"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0.0016"),(0,r.kt)("td",{parentName:"tr",align:null},"0.1453"),(0,r.kt)("td",{parentName:"tr",align:null},"0.1422"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0015"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0016")))),(0,r.kt)("h4",{id:"sum-up"},"Sum Up"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Breaking out of the SSJS code block is impacting execution time."),(0,r.kt)("li",{parentName:"ol"},"Breaking out of the AMPScript code block has close to none impact on execution time.")),(0,r.kt)("h3",{id:"propercase"},"ProperCase"),(0,r.kt)("p",null,"What should you use when you want to change a string to Proper Case? As there is no single function in SSJS for that, I compared two pure SSJS approaches (",(0,r.kt)("inlineCode",{parentName:"p"},"split"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"join")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"replace")," with RegEx) with ",(0,r.kt)("a",{parentName:"p",href:"/docs/ssjs/snippets/ampscript-in-ssjs"},"AMPScript in SSJS")," and (nearly) pure AMPScript."),(0,r.kt)("p",null,"The test was performed using ten different strings varying in number of words and capitalization:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var sentences = [\n    'one',                                      // 1\n    'one Two',                                  // 2\n    'one Two THREE',                            // 3\n    'one Two THREE fOUR',                       // 4\n    'one Two THREE fOUR FiVe',                  // 5\n    'one Two THREE fOUR FiVe siX',              // 6\n    'one Two THREE fOUR FiVe siX &',            // 7\n    'one Two THREE fOUR FiVe siX & 8',          // 8\n    'one Two THREE fOUR FiVe siX & 8 nine',     // 9\n    'one Two THREE fOUR FiVe siX & 8 nine-ten'  // 10\n];\n")),(0,r.kt)("p",null,"All approaches output final sentence as: ",(0,r.kt)("inlineCode",{parentName:"p"},"One Two Three Four Five Six & 8 Nine-ten")),(0,r.kt)("h4",{id:"test-cases-1"},"Test Cases"),(0,r.kt)(l.Z,{defaultValue:"split",values:[{label:"SSJS Split",value:"split"},{label:"SSJS Replace",value:"replace"},{label:"AMPScript in SSJS",value:"ampinssjs"},{label:"AMPScript",value:"ampscript"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"split",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'function toTitleCase(string) {\n    var sentence = string.toLowerCase().split(" ");\n    for (var i = 0; i < sentence.length; i++) {\n        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);\n    };\n    sentence = sentence.join(" ");\n    return sentence;\n};\n\ntitle = toTitleCase(testedString);\n'))),(0,r.kt)(i.Z,{value:"replace",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"title = testedString.replace(\n    /[a-zA-Z]\\S*/g,\n    function(string) {\n        return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase()\n    }\n);\n"))),(0,r.kt)(i.Z,{value:"ampinssjs",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"function ampScript(code) {\n    var ampBlock = '\\%\\%[' + code + ']\\%\\%';\n    Platform.Function.TreatAsContent(ampBlock);\n    return Variable.GetValue('@response');\n};\n\ntitle = ampScript(\"SET @response = ProperCase('\" + testedString + \"')\");\n"))),(0,r.kt)(i.Z,{value:"ampscript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"%%[\nSET @response = ProperCase(@sentence)\n]%%\n")))),(0,r.kt)("h4",{id:"outcomes-ms-1"},"Outcomes (ms)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Sentence"),(0,r.kt)("th",{parentName:"tr",align:null},"SSJS Split"),(0,r.kt)("th",{parentName:"tr",align:null},"SSJS Replace"),(0,r.kt)("th",{parentName:"tr",align:null},"AMPScript in SSJS"),(0,r.kt)("th",{parentName:"tr",align:null},"AMPScript"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0968"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0782"),(0,r.kt)("td",{parentName:"tr",align:null},"0.3686"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0032")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"0.1376"),(0,r.kt)("td",{parentName:"tr",align:null},"0.1186"),(0,r.kt)("td",{parentName:"tr",align:null},"0.3688"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0032")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"0.175"),(0,r.kt)("td",{parentName:"tr",align:null},"0.1594"),(0,r.kt)("td",{parentName:"tr",align:null},"0.3874"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0032")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"0.2218"),(0,r.kt)("td",{parentName:"tr",align:null},"0.2032"),(0,r.kt)("td",{parentName:"tr",align:null},"0.375"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0062")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"0.2562"),(0,r.kt)("td",{parentName:"tr",align:null},"0.247"),(0,r.kt)("td",{parentName:"tr",align:null},"0.3686"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0064")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"0.2968"),(0,r.kt)("td",{parentName:"tr",align:null},"0.2812"),(0,r.kt)("td",{parentName:"tr",align:null},"0.372"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0062")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"0.3344"),(0,r.kt)("td",{parentName:"tr",align:null},"0.2844"),(0,r.kt)("td",{parentName:"tr",align:null},"0.375"),(0,r.kt)("td",{parentName:"tr",align:null},"0.003")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"0.372"),(0,r.kt)("td",{parentName:"tr",align:null},"0.2874"),(0,r.kt)("td",{parentName:"tr",align:null},"0.372"),(0,r.kt)("td",{parentName:"tr",align:null},"0.003")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:null},"0.4126"),(0,r.kt)("td",{parentName:"tr",align:null},"0.3312"),(0,r.kt)("td",{parentName:"tr",align:null},"0.3718"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0064")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"0.4124"),(0,r.kt)("td",{parentName:"tr",align:null},"0.342"),(0,r.kt)("td",{parentName:"tr",align:null},"0.375"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0064")))),(0,r.kt)("h4",{id:"sum-up-1"},"Sum Up:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Pure AMPScript execution time for ProperCase scenario murders SSJS."),(0,r.kt)("li",{parentName:"ol"},"When working with arrays or regex replace, SSJS execution time extends with each additional word. However, AMPScript execution time is constant thanks to the optimised out-of-the-box ",(0,r.kt)("inlineCode",{parentName:"li"},"ProperCase")," function."),(0,r.kt)("li",{parentName:"ol"},"Although ",(0,r.kt)("a",{parentName:"li",href:"/docs/ssjs/snippets/ampscript-in-ssjs"},"AMPScript in SSJS")," is doing levels-of-magnitude worse than pure AMPScript, it will be a better choice then pure SSJS for long sentences (10+ words)."),(0,r.kt)("li",{parentName:"ol"},"SSJS Replace might be the option to choose despite the performance if you want more flexibility (for example, changing that ",(0,r.kt)("inlineCode",{parentName:"li"},"Nine-ten")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"Nine-Ten"),")."),(0,r.kt)("li",{parentName:"ol"},"Otherwise, for anything longer than a few words, consider ",(0,r.kt)("a",{parentName:"li",href:"#code-block-breaking"},"breaking from the SSJS code block")," to leverage AMPscript.")),(0,r.kt)("h3",{id:"lowercase--uppercase"},"LowerCase & UpperCase"),(0,r.kt)("p",null,"Based on the ",(0,r.kt)("a",{parentName:"p",href:"#propercase"},"Proper Case")," scenario's exciting outcomes, I decided to follow up on that with a performance comparison on a function that is available out-of-the-box in both SSJS and AMPScript. For testing, I used sibling string modification - Lower Case."),(0,r.kt)("p",null,"The test was performed using ten different strings varying in number of words and capitalization (same as for Proper Case):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var sentences = [\n    'one',                                      // 1\n    'one Two',                                  // 2\n    'one Two THREE',                            // 3\n    'one Two THREE fOUR',                       // 4\n    'one Two THREE fOUR FiVe',                  // 5\n    'one Two THREE fOUR FiVe siX',              // 6\n    'one Two THREE fOUR FiVe siX &',            // 7\n    'one Two THREE fOUR FiVe siX & 8',          // 8\n    'one Two THREE fOUR FiVe siX & 8 nine',     // 9\n    'one Two THREE fOUR FiVe siX & 8 nine-ten'  // 10\n];\n")),(0,r.kt)("p",null,"All approaches output final sentence as: ",(0,r.kt)("inlineCode",{parentName:"p"},"one two three four five six & 8 nine-ten")),(0,r.kt)("h4",{id:"test-cases-2"},"Test Cases"),(0,r.kt)(l.Z,{defaultValue:"method",values:[{label:"SSJS Method",value:"method"},{label:"SSJS Function",value:"function"},{label:"AMPScript in SSJS",value:"ampinssjs"},{label:"AMPScript",value:"ampscript"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"method",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"title = testedString.toLowerCase();\n"))),(0,r.kt)(i.Z,{value:"function",mdxType:"TabItem"},(0,r.kt)("p",null,"This approach doesn't make sense but gives an idea of the impact of using function vs method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"function toLowerCase(string) {\n    var sentence = string.toLowerCase();\n    return sentence;\n};\ntitle = toLowerCase(sentences[a]);\n"))),(0,r.kt)(i.Z,{value:"ampinssjs",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"function ampScript(code) {\n    var ampBlock = '\\%\\%[' + code + ']\\%\\%';\n    Platform.Function.TreatAsContent(ampBlock);\n    return Variable.GetValue('@response');\n};\n\ntitle = ampScript(\"SET @response = LowerCase('\" + testedString + \"')\");\n"))),(0,r.kt)(i.Z,{value:"ampscript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"%%[\nSET @response = LowerCase(@sentence)\n]%%\n")))),(0,r.kt)("h4",{id:"outcomes-ms-2"},"Outcomes (ms)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Sentence"),(0,r.kt)("th",{parentName:"tr",align:null},"SSJS Method"),(0,r.kt)("th",{parentName:"tr",align:null},"SSJS Function"),(0,r.kt)("th",{parentName:"tr",align:null},"AMPScript in SSJS"),(0,r.kt)("th",{parentName:"tr",align:null},"AMPScript"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"0.014"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0203"),(0,r.kt)("td",{parentName:"tr",align:null},"0.3625"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0032")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0125"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0187"),(0,r.kt)("td",{parentName:"tr",align:null},"0.3625"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0031")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0125"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0188"),(0,r.kt)("td",{parentName:"tr",align:null},"0.3625"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0031")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0125"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0188"),(0,r.kt)("td",{parentName:"tr",align:null},"0.3687"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0016")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0125"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0187"),(0,r.kt)("td",{parentName:"tr",align:null},"0.3641"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0015")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0125"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0188"),(0,r.kt)("td",{parentName:"tr",align:null},"0.3641"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0031")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0125"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0187"),(0,r.kt)("td",{parentName:"tr",align:null},"0.3625"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0032")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0125"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0187"),(0,r.kt)("td",{parentName:"tr",align:null},"0.3672"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0031")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0125"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0204"),(0,r.kt)("td",{parentName:"tr",align:null},"0.3593"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0032")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"0.014"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0203"),(0,r.kt)("td",{parentName:"tr",align:null},"0.3625"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0016")))),(0,r.kt)("h4",{id:"sum-up-2"},"Sum up"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The out-of-the-box JavaScript method works much better then the custom solution developer for ",(0,r.kt)("a",{parentName:"li",href:"#propercase"},"Proper Case")," - just like the AMPScript function, it executes in constant time regardless of sentence length."),(0,r.kt)("li",{parentName:"ol"},"Pure AMPScript execution time still is better, but due to constant time in both languages and much faster SSJS speed, there is no longer any reason to use ",(0,r.kt)("a",{parentName:"li",href:"/docs/ssjs/snippets/ampscript-in-ssjs"},"AMPScript in SSJS")," or ",(0,r.kt)("a",{parentName:"li",href:"#code-block-breaking"},"break out of SSJS code block"),".")))}h.isMDXComponent=!0}}]);