(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return m})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return h}));var a=n(2),o=n(6),i=n(0),r=n(90),s=n(96),l=n(97),c=n(91);const u=({input:e,inputType:t="time",daysOnly:n=!1,hoursOnly:a=!1})=>{const[o,r]=i.useState("time"===t?e:new Date(e)-new Date);return i.useEffect(()=>{const n=o>0&&setInterval(()=>r("time"===t?o-1e3:new Date(e)-new Date),1e3);return()=>{clearInterval(n)}}),n?i.createElement(i.Fragment,null,i.createElement("span",{className:"countDown"},Math.floor(o/864e5)," days")):a?i.createElement(i.Fragment,null,i.createElement("span",{className:"countDown"},Math.floor(o/36e5)," hours")):0===Math.floor(o/1e3/60)?i.createElement(i.Fragment,null,i.createElement("span",{className:"countDown"},Math.floor(o/1e3%60)," seconds")):0===Math.floor(o/36e5)?i.createElement(i.Fragment,null,i.createElement("span",{className:"countDown"},Math.floor(o/1e3/60%60)," minutes and ",Math.floor(o/1e3%60)," seconds")):0===Math.floor(o/864e5)?i.createElement(i.Fragment,null,i.createElement("span",{className:"countDown"},Math.floor(o/36e5%24)," hours, ",Math.floor(o/1e3/60%60)," ","minutes and ",Math.floor(o/1e3%60)," seconds")):i.createElement(i.Fragment,null,i.createElement("span",{className:"countDown"},Math.floor(o/864e5)," days, ",Math.floor(o/36e5%24)," ","hours, ",Math.floor(o/1e3/60%60)," minutes and ",Math.floor(o/1e3%60)," seconds"))};var d={id:"engage-with-countdown",title:"Engage with Countdown",description:"Start boosting conversion rates right now! There are many ways to engage customers, and urgency is the king among them. Learn how to leverage it today."},m={unversionedId:"engage-with-countdown",id:"engage-with-countdown",isDocsHomePage:!1,title:"Engage with Countdown",description:"Start boosting conversion rates right now! There are many ways to engage customers, and urgency is the king among them. Learn how to leverage it today.",source:"@site/ideas/engage-with-countdown.mdx",slug:"/engage-with-countdown",permalink:"/ideas/engage-with-countdown",editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/ideas/engage-with-countdown.mdx",version:"current",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1598091094,sidebar:"ideas",previous:{title:"Ideas",permalink:"/ideas/"},next:{title:"Tailor the experience with data logic",permalink:"/ideas/tailor-with-data"}},p=[{value:"Outline",id:"outline",children:[]},{value:"Final countdown",id:"final-countdown",children:[{value:"HTML",id:"html",children:[]},{value:"JavaScript",id:"javascript",children:[]}]},{value:"Counting options",id:"counting-options",children:[]},{value:"Take advantage of dynamic content",id:"take-advantage-of-dynamic-content",children:[]}],b={rightToc:p};function h(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(c.a,{content:"Start boosting conversion rates right now! There are many ways to engage customers, and urgency is the king among them. Learn how to leverage it today.",mdxType:"LeadText"}),Object(r.b)("h2",{id:"outline"},"Outline"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#final-countdown"}),"Learn how to implement the solution")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#counting-options"}),"Adapt it to the story you are telling")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#take-advantage-of-dynamic-content"}),"Leverage personalisation for even better results"))),Object(r.b)("p",null,"Lured visitors to your landing page? Great! Now it is time to convert them to your cause. Whitepaper download, product purchase or enrollment, doesn't matter. In each case, you will fight for the attention of the user and drive him towards the goal set for him. It's not easy in the modern web environment, but even the basics might give you the upper hand."),Object(r.b)("h2",{id:"final-countdown"},"Final countdown"),Object(r.b)("p",null,"Let's talk about a simple solution you can implement on your landing page in just ",Object(r.b)(u,{input:48e4,mdxType:"Countdown"})," \u2014 a counter."),Object(r.b)("p",null,"To add a dynamic countdown to your website, you will need basic HTML (to put it into a specific place) and a JavaScript code to do the math. CSS is optional but might spice up the style of your page."),Object(r.b)("h3",{id:"html"},"HTML"),Object(r.b)("p",null,"Firstly, you will need to create an ",Object(r.b)("inlineCode",{parentName:"p"},"id")," attribute to mark the container in which you want to display the counter. It might be on the ",Object(r.b)("inlineCode",{parentName:"p"},"<p>")," element for an inline solution or on ",Object(r.b)("inlineCode",{parentName:"p"},"<div>")," element were you to create a more visual version."),Object(r.b)("p",null,"Next, the spans. Add empty ",Object(r.b)("inlineCode",{parentName:"p"},"<span>")," elements with the ",Object(r.b)("inlineCode",{parentName:"p"},"class")," corresponding to the time unit you want to show. JavaScript will swap it for the correct numeric value and dynamically change it as time passes. You can add just hours, or you can go for full spectrum."),Object(r.b)("p",null,"For example, did you know there is only ",Object(r.b)(u,{input:"July 20, 2024, 20:17:40 UTC",inputType:"date",mdxType:"Countdown"})," left till 55th anniversary of the first moon landing?"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html",metastring:"Sample countdown code for above line",Sample:!0,countdown:!0,code:!0,for:!0,above:!0,line:!0}),"<p id=\"counter1\">\n    For example, did you know there is only <span class=\"days\"></span> days, <span class=\"hours\"></span> hours, <span class=\"minutes\"></span> minutes and <span class=\"seconds\"></span> seconds left till 50th anniversary of the first moonlanding?\n</p>\n\n<script>\n    function getTimeRemaining(endtime) {\n        const now = new Date().getTime();\n        const t = endtime - now;\n        const seconds = Math.floor((t / 1000) % 60);\n        const minutes = Math.floor((t / 1000 / 60) % 60);\n        const hours = Math.floor((t / (1000 * 60 * 60)) % 24);\n        const days = Math.floor(t / (1000 * 60 * 60 * 24));\n        return {\n            'total': t,\n            'days': days,\n            'hours': hours,\n            'minutes': minutes,\n            'seconds': seconds\n        };\n    }\n\n    function initializeClock(element, endtime) {\n        const clock = document.querySelector(element);\n        const daysSpan = clock.querySelector('.days');\n        const hoursSpan = clock.querySelector('.hours');\n        const minutesSpan = clock.querySelector('.minutes');\n        const secondsSpan = clock.querySelector('.seconds');\n\n        function updateClock() {\n            const t = getTimeRemaining(endtime);\n            daysSpan.innerHTML = t.days;\n            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);\n            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);\n            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);\n            if (t.total <= 0) {\n                clearInterval(timeinterval);\n            }\n        }\n        updateClock();\n        const timeinterval = setInterval(updateClock, 1000);\n    }\n\n    /* Declare deadline time */\n    const deadline = new Date(\"2019-07-20T20:17:00+00:00\").getTime()\n    /* Trigger counter function by targeting specific element and passing the above deadline */\n    initializeClock('#counter1', deadline);\n<\/script>\n")),Object(r.b)("h3",{id:"javascript"},"JavaScript"),Object(r.b)("p",null,"There is much more fun in the JavaScript part. Worry not - you don't need to know the language at all. Let's have a look at the lines to understand what is happening on the general level and then focus on personalisation options."),Object(r.b)("h4",{id:"function-gettimeremaining"},"Function ",Object(r.b)("inlineCode",{parentName:"h4"},"getTimeRemaining")),Object(r.b)("p",null,"The first function does the math behind countdown. With the deadline set for the counter and the current time took from visitor's hardware, it calculates the remaining values of each time unit."),Object(r.b)("p",null,"Remember to keep there those and only those units that you actually use in your counter. The rest should be deleted (for example, if you want to get rid of the ",Object(r.b)("em",{parentName:"p"},"day")," unit, remove both the ",Object(r.b)("inlineCode",{parentName:"p"},"const days = (...)")," line and ",Object(r.b)("inlineCode",{parentName:"p"},"'days': days,")," from the return statement)."),Object(r.b)("h4",{id:"function-initializeclock"},"Function ",Object(r.b)("inlineCode",{parentName:"h4"},"initializeClock")),Object(r.b)("p",null,"The second function is responsible for finding the ",Object(r.b)("inlineCode",{parentName:"p"},"id")," attribute and ",Object(r.b)("inlineCode",{parentName:"p"},"<span>")," elements we created in the HTML part and updating the countdown every second. Simple and only possible edit would be to delete the line with time unit that will not be used, just as mentioned above."),Object(r.b)("h4",{id:"function-updateclock"},"Function ",Object(r.b)("inlineCode",{parentName:"h4"},"updateClock")),Object(r.b)("p",null,"The job of the last one is to swap span elements targeted in ",Object(r.b)("inlineCode",{parentName:"p"},"initializeClock")," to values calculated by ",Object(r.b)("inlineCode",{parentName:"p"},"getTimeRemaining")," - and to stop counter refreshing after it gets to zero. Again - only edit needed would be to delete the unneeded unit."),Object(r.b)("p",null,"To not leave you with \u201cdelete this, delete that\u201d talk and empty hands, feel free to take a look at a simplified ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://gist.github.com/MateuszDabrowski/f433cecf3c02c400c9e74d08b78ad50c#file-day-counter-html"}),"sample code")," that counts only days. As for the placement in your code - it will be best to put the ",Object(r.b)("inlineCode",{parentName:"p"},"<script>(...)<\/script>")," part right before the closing ",Object(r.b)("inlineCode",{parentName:"p"},"</body>")," tag."),Object(r.b)("h2",{id:"counting-options"},"Counting options"),Object(r.b)("p",null,"Time for the important part - the one you will always edit. The counter's deadline. You probably already noticed ",Object(r.b)("inlineCode",{parentName:"p"},"const deadline")," in the sample and guessed it is the line we will focus on now. It might look a bit intimidating with the weird structure, but in this way, it actually gives you a lot of power. This date formatting is an example of an ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/ISO_8601"}),"ISO 8601")," standard."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const deadline = new Date("2077-07-20T20:17:00+00:00").getTime()\n')),Object(r.b)("p",null,"To use it, insert date in a YYYY-MM-DD",Object(r.b)("strong",{parentName:"p"},"T"),"hh:mm:ss ",Object(r.b)("strong",{parentName:"p"},"+"),"hh:mm format. The ",Object(r.b)("strong",{parentName:"p"},"T")," is just a delimiter between date and time, ",Object(r.b)("strong",{parentName:"p"},"+"),"hh:mm, on the other hand, allows you to add time variable (for example summertime change)."),Object(r.b)("p",null,"However, depending on the needs, you may want to use other available formats, for example, simplified only-date format perfect when you need to count days."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const deadline = new Date("2077-01-31").getTime();\n')),Object(r.b)("p",null,"Another option is to calculate the amount of time to count down from instead of a static end date. It might be a much better solution if you want to create a feeling of pressure for a small task or engage visitor without a real deadline on your side."),Object(r.b)("p",null,"To use this solution, you need to declare the starting value. In below example, it is set to 15 days. The code multiplies 1000 milliseconds times 60 seconds times 60 minutes times 24 hours. Want to count 5 minutes? Go for 1000 ",Object(r.b)("em",{parentName:"p"}," 60 ")," 60 * 5."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);\n")),Object(r.b)("h2",{id:"take-advantage-of-dynamic-content"},"Take advantage of dynamic content"),Object(r.b)("p",null,"Simple countdown on landing page already can make an enormous difference to your conversion rate. But, of course, you can get even more out of it by using the toolset of your marketing automation tool."),Object(r.b)("p",null,"There are many cases where urgency is a perfect solution, however, not always all visitors should\nsee the same timeframe. An example? Renewal notification that counts downtime before a subscription expires. Instead of a\nstatic product end date, implement the counter and put some pressure with seconds running out in real-time."),Object(r.b)("p",null,"To do this, make your marketing automation tool push a date value (in above mentioned ISO 8601 format) from the visitor data model right into var deadline JavaScript line."),Object(r.b)(s.a,{groupId:"marketingAutomationPlatforms",defaultValue:"sfmc",values:[{label:"Salesforce Marketing Cloud",value:"sfmc"},{label:"Oracle Eloqua",value:"eloqua"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"sfmc",mdxType:"TabItem"},Object(r.b)("p",null,"In Salesforce Marketing Cloud, you can use either ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/personalisationStringsAMPscript.htm"}),"AMPScript personalisation string")," or SSJS personalisation string:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"/* Remember to check whether the date you are using has Local or System based timezone */\nconst deadline = new Date('<ctrl:field name=DateTypeAttributeName />').getTime();\n")),Object(r.b)("p",null,"Wondering what will happen with visitors that don't have this date value? With just personalisation string such users will see the counter set to zero right from the start. Of course, we would rather not have it that way. Thankfully SSJS personalisations strings allow us to add default value very easily:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const deadline = new Date('<ctrl:field name=DateTypeAttributeName default='2077-07-20T20:17:00+00:00' />').getTime();\n")),Object(r.b)("p",null,"You can also easily create a dynamic content block that will be visible only when the date from personalisation string is soon enough, by leveraging a simple ",Object(r.b)("inlineCode",{parentName:"p"},"if/else")," logic of SSJS.")),Object(r.b)(l.a,{value:"eloqua",mdxType:"TabItem"},Object(r.b)("p",null,"In Oracle Eloqua it would be a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAA/Help/FieldMerges/FieldMergeExamples.htm"}),"field merge"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const deadline = new Date('<span class=eloquaemail> Date_Field_Merge1 </span>').getTime();\n")),Object(r.b)("p",null,"Wondering what will happen with visitors that don't have this date value? With just field merge such users will see the counter set to zero right from the start. Of course, we would rather not have it that way. Let's create a remedy with yet another marketing automation tool - ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAA/Help/DynamicContent/DynamicContentExamples.htm"}),"dynamic content")," (that's Eloqua name for a content element that adapts to the visitor depending on the value in the data model). Just wrap the HTML part of a counter and set it to be visible only if the visitor has a date value in the field used in field merge (or even when it is also within the chosen timeframe)."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<span elqid="001" elqtype="DynamicContent" class="remove-absolute" style="display: block"></span>\n')))),Object(r.b)("p",null,"Use it hard. How? Put that renewal offer with a counter inside a dynamic content and insert it into every content landing page. Simple and quick solution to make sure your customers will be notified ",Object(r.b)("em",{parentName:"p"},"when")," they should. You can also put single dynamic content box related to events or webinars and push information with the counter about the nearest happening one. Just be sure to leverage dynamic content options to show different texts depending on visitor persona. And, of course, update that dynamic content after the event."),Object(r.b)("p",null,"What next? Take the code, implement on a landing page, build an urgency fueled story and watch boosted engagement do its job. You can count on it."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"You Should Know")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"As emails don't support JavaScript, you won't be able to leverage the above code for your sends. However, that doesn't mean you cannot increase engagement with a countdown in your outbound."),Object(r.b)("p",{parentName:"div"},"Multiple solutions create dynamically changing .gifs that allows you to create a real-time timer in your email. I'm using ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.sendtric.com"}),"Sendtric"),". A different approach, same engagement boosting value."))))}h.isMDXComponent=!0},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,b=d["".concat(r,".").concat(p)]||d[p]||m[p]||i;return n?o.a.createElement(b,s(s({ref:t},c),{},{components:n})):o.a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(0),o=n.n(a),i=n(48),r=n.n(i);const s=({content:e})=>o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{id:r.a.leadText},e))},92:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},94:function(e,t,n){"use strict";var a=n(0);const o=Object(a.createContext)(void 0);t.a=o},95:function(e,t,n){"use strict";var a=n(0),o=n(94);t.a=function(){const e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},96:function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(95),r=n(92),s=n(49),l=n.n(s);const c=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:s,values:d,groupId:m}=e,{tabGroupChoices:p,setTabGroupChoices:b}=Object(i.a)(),[h,f]=Object(a.useState)(s),[g,y]=Object(a.useState)(!1);if(null!=m){const e=p[m];null!=e&&e!==h&&d.some(t=>t.value===e)&&f(e)}const w=e=>{f(e),null!=m&&b(m,e)},O=[],j=e=>{e.metaKey||e.altKey||e.ctrlKey||y(!0)},v=()=>{y(!1)};return Object(a.useEffect)(()=>{window.addEventListener("keydown",j),window.addEventListener("mousedown",v)},[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":t})},d.map(({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===e,className:Object(r.a)("tabs__item",l.a.tabItem,{"tabs__item--active":h===e}),style:g?{}:{outline:"none"},key:e,ref:e=>O.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case c:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(O,e.target,e),j(e)},onFocus:()=>w(e),onClick:()=>{w(e),y(!1)},onPointerDown:()=>y(!1)},t))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===h)[0]))}},97:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){return o.a.createElement("div",null,e.children)}}}]);