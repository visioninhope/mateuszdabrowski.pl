"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[5960],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),p=o,h=m["".concat(s,".").concat(p)]||m[p]||d[p]||i;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8448:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294);function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},5529:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7462),o=n(7294),i=n(1048),r=n(1874),l=n(6010),s="tabItem_LplD";function u(e){var t,n,i,u=e.lazy,c=e.block,d=e.defaultValue,m=e.values,p=e.groupId,h=e.className,g=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,r.lx)(f,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=g[0])?void 0:i.props.value;if(null!==y&&!f.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,r.UB)(),k=w.tabGroupChoices,b=w.setTabGroupChoices,N=(0,o.useState)(y),T=N[0],C=N[1],S=[],M=(0,r.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var E=k[p];null!=E&&E!==T&&f.some((function(e){return e.value===E}))&&C(E)}var D=function(e){var t=e.currentTarget,n=S.indexOf(t),a=f[n].value;a!==T&&(M(t),C(a),null!=p&&b(p,a))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=S.indexOf(e.currentTarget)+1;n=S[a]||S[0];break;case"ArrowLeft":var o=S.indexOf(e.currentTarget)-1;n=S[o]||S[S.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},h)},f.map((function(e){var t=e.value,n=e.label,i=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return S.push(e)},onKeyDown:x,onFocus:D,onClick:D},i,{className:(0,l.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),u?(0,o.cloneElement)(g.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function c(e){var t=(0,i.Z)();return o.createElement(u,(0,a.Z)({key:String(t)},e))}},1872:function(e,t,n){n.d(t,{m:function(){return i}});var a=n(7294),o="leadText_qzwo",i=function(e){var t=e.content;return a.createElement(a.Fragment,null,a.createElement("p",{id:o},t))}},7004:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return m},metadata:function(){return h},toc:function(){return f}});var a=n(7462),o=n(3366),i=n(7294),r=n(4137),l=n(5529),s=n(8448),u=n(1872),c=function(e){var t=e.input,n=e.inputType,a=void 0===n?"time":n,o=e.daysOnly,r=void 0!==o&&o,l=e.hoursOnly,s=void 0!==l&&l,u=i.useState("time"===a?t:new Date(t)-new Date),c=u[0],d=u[1];return i.useEffect((function(){var e=c>0&&setInterval((function(){return d("time"===a?c-1e3:new Date(t)-new Date)}),1e3);return function(){clearInterval(e)}})),r?i.createElement(i.Fragment,null,i.createElement("span",{className:"countDown"},Math.floor(c/864e5)," days")):s?i.createElement(i.Fragment,null,i.createElement("span",{className:"countDown"},Math.floor(c/36e5)," hours")):0===Math.floor(c/1e3/60)?i.createElement(i.Fragment,null,i.createElement("span",{className:"countDown"},Math.floor(c/1e3%60)," seconds")):0===Math.floor(c/36e5)?i.createElement(i.Fragment,null,i.createElement("span",{className:"countDown"},Math.floor(c/1e3/60%60)," minutes and ",Math.floor(c/1e3%60)," seconds")):0===Math.floor(c/864e5)?i.createElement(i.Fragment,null,i.createElement("span",{className:"countDown"},Math.floor(c/36e5%24)," hours, ",Math.floor(c/1e3/60%60)," ","minutes and ",Math.floor(c/1e3%60)," seconds")):i.createElement(i.Fragment,null,i.createElement("span",{className:"countDown"},Math.floor(c/864e5)," days, ",Math.floor(c/36e5%24)," ","hours, ",Math.floor(c/1e3/60%60)," minutes and ",Math.floor(c/1e3%60)," seconds"))},d=["components"],m={id:"engage-with-countdown",title:"Engage with Countdown",description:"Start boosting conversion rates right now! There are many ways to engage customers, and urgency is the king among them. Learn how to leverage it today.",image:"img/og/og-image-engage-with-countdown.png",tags:["Marketing Cloud","Eloqua","JavaScript","Personalisation","Cloud Page"]},p=void 0,h={unversionedId:"usecase/engage-with-countdown",id:"usecase/engage-with-countdown",title:"Engage with Countdown",description:"Start boosting conversion rates right now! There are many ways to engage customers, and urgency is the king among them. Learn how to leverage it today.",source:"@site/docs/usecase/engage-with-countdown.mdx",sourceDirName:"usecase",slug:"/usecase/engage-with-countdown",permalink:"/docs/usecase/engage-with-countdown",editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/docs/usecase/engage-with-countdown.mdx",tags:[{label:"Marketing Cloud",permalink:"/docs/tags/marketing-cloud"},{label:"Eloqua",permalink:"/docs/tags/eloqua"},{label:"JavaScript",permalink:"/docs/tags/java-script"},{label:"Personalisation",permalink:"/docs/tags/personalisation"},{label:"Cloud Page",permalink:"/docs/tags/cloud-page"}],version:"current",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1632606565,formattedLastUpdatedAt:"9/25/2021",frontMatter:{id:"engage-with-countdown",title:"Engage with Countdown",description:"Start boosting conversion rates right now! There are many ways to engage customers, and urgency is the king among them. Learn how to leverage it today.",image:"img/og/og-image-engage-with-countdown.png",tags:["Marketing Cloud","Eloqua","JavaScript","Personalisation","Cloud Page"]},sidebar:"snippets",previous:{title:"Tailor with Data",permalink:"/docs/usecase/tailor-with-data"},next:{title:"Power of Code Resources",permalink:"/docs/usecase/sfmc-code-resource"}},g={},f=[{value:"Outline",id:"outline",level:2},{value:"Final countdown",id:"final-countdown",level:2},{value:"HTML",id:"html",level:3},{value:"JavaScript",id:"javascript",level:3},{value:"Function <code>getTimeRemaining</code>",id:"function-gettimeremaining",level:4},{value:"Function <code>initializeClock</code>",id:"function-initializeclock",level:4},{value:"Function <code>updateClock</code>",id:"function-updateclock",level:4},{value:"Counting options",id:"counting-options",level:2},{value:"Take advantage of dynamic content",id:"take-advantage-of-dynamic-content",level:2}],v={toc:f};function y(e){var t=e.components,n=(0,o.Z)(e,d);return(0,r.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(u.m,{content:"Start boosting conversion rates right now! There are many ways to engage customers, and urgency is the king among them. Learn how to leverage it today.",mdxType:"LeadText"}),(0,r.kt)("h2",{id:"outline"},"Outline"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#final-countdown"},"Learn how to implement the solution")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#counting-options"},"Adapt it to the story you are telling")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#take-advantage-of-dynamic-content"},"Leverage personalisation for even better results"))),(0,r.kt)("p",null,"Lured visitors to your landing page? Great! Now it is time to convert them to your cause. Whitepaper download, product purchase or enrollment, doesn't matter. In each case, you will fight for the attention of the user and drive him towards the goal set for him. It's not easy in the modern web environment, but even the basics might give you the upper hand."),(0,r.kt)("h2",{id:"final-countdown"},"Final countdown"),(0,r.kt)("p",null,"Let's talk about a simple solution you can implement on your landing page in just ",(0,r.kt)(c,{input:48e4,mdxType:"Countdown"})," \u2014 a counter."),(0,r.kt)("p",null,"To add a dynamic countdown to your website, you will need basic HTML (to put it into a specific place) and a JavaScript code to do the math. CSS is optional but might spice up the style of your page."),(0,r.kt)("h3",{id:"html"},"HTML"),(0,r.kt)("p",null,"Firstly, you will need to create an ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," attribute to mark the container in which you want to display the counter. It might be on the ",(0,r.kt)("inlineCode",{parentName:"p"},"<p>")," element for an inline solution or on ",(0,r.kt)("inlineCode",{parentName:"p"},"<div>")," element were you to create a more visual version."),(0,r.kt)("p",null,"Next, the spans. Add empty ",(0,r.kt)("inlineCode",{parentName:"p"},"<span>")," elements with the ",(0,r.kt)("inlineCode",{parentName:"p"},"class")," corresponding to the time unit you want to show. JavaScript will swap it for the correct numeric value and dynamically change it as time passes. You can add just hours, or you can go for full spectrum."),(0,r.kt)("p",null,"For example, did you know there is only ",(0,r.kt)(c,{input:"July 20, 2024, 20:17:40 UTC",inputType:"date",mdxType:"Countdown"})," left till 55th anniversary of the first moon landing?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:"Sample countdown code for above line",Sample:!0,countdown:!0,code:!0,for:!0,above:!0,line:!0},"<p id=\"counter1\">\n    For example, did you know there is only <span class=\"days\"></span> days, <span class=\"hours\"></span> hours, <span class=\"minutes\"></span> minutes and <span class=\"seconds\"></span> seconds left till 50th anniversary of the first moonlanding?\n</p>\n\n<script>\n    function getTimeRemaining(endtime) {\n        const now = new Date().getTime();\n        const t = endtime - now;\n        const seconds = Math.floor((t / 1000) % 60);\n        const minutes = Math.floor((t / 1000 / 60) % 60);\n        const hours = Math.floor((t / (1000 * 60 * 60)) % 24);\n        const days = Math.floor(t / (1000 * 60 * 60 * 24));\n        return {\n            'total': t,\n            'days': days,\n            'hours': hours,\n            'minutes': minutes,\n            'seconds': seconds\n        };\n    }\n\n    function initializeClock(element, endtime) {\n        const clock = document.querySelector(element);\n        const daysSpan = clock.querySelector('.days');\n        const hoursSpan = clock.querySelector('.hours');\n        const minutesSpan = clock.querySelector('.minutes');\n        const secondsSpan = clock.querySelector('.seconds');\n\n        function updateClock() {\n            const t = getTimeRemaining(endtime);\n            daysSpan.innerHTML = t.days;\n            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);\n            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);\n            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);\n            if (t.total <= 0) {\n                clearInterval(timeinterval);\n            }\n        }\n        updateClock();\n        const timeinterval = setInterval(updateClock, 1000);\n    }\n\n    /* Declare deadline time */\n    const deadline = new Date(\"2019-07-20T20:17:00+00:00\").getTime()\n    /* Trigger counter function by targeting specific element and passing the above deadline */\n    initializeClock('#counter1', deadline);\n<\/script>\n")),(0,r.kt)("h3",{id:"javascript"},"JavaScript"),(0,r.kt)("p",null,"There is much more fun in the JavaScript part. Worry not - you don't need to know the language at all. Let's have a look at the lines to understand what is happening on the general level and then focus on personalisation options."),(0,r.kt)("h4",{id:"function-gettimeremaining"},"Function ",(0,r.kt)("inlineCode",{parentName:"h4"},"getTimeRemaining")),(0,r.kt)("p",null,"The first function does the math behind countdown. With the deadline set for the counter and the current time took from visitor's hardware, it calculates the remaining values of each time unit."),(0,r.kt)("p",null,"Remember to keep there those and only those units that you actually use in your counter. The rest should be deleted (for example, if you want to get rid of the ",(0,r.kt)("em",{parentName:"p"},"day")," unit, remove both the ",(0,r.kt)("inlineCode",{parentName:"p"},"const days = (...)")," line and ",(0,r.kt)("inlineCode",{parentName:"p"},"'days': days,")," from the return statement)."),(0,r.kt)("h4",{id:"function-initializeclock"},"Function ",(0,r.kt)("inlineCode",{parentName:"h4"},"initializeClock")),(0,r.kt)("p",null,"The second function is responsible for finding the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," attribute and ",(0,r.kt)("inlineCode",{parentName:"p"},"<span>")," elements we created in the HTML part and updating the countdown every second. Simple and only possible edit would be to delete the line with time unit that will not be used, just as mentioned above."),(0,r.kt)("h4",{id:"function-updateclock"},"Function ",(0,r.kt)("inlineCode",{parentName:"h4"},"updateClock")),(0,r.kt)("p",null,"The job of the last one is to swap span elements targeted in ",(0,r.kt)("inlineCode",{parentName:"p"},"initializeClock")," to values calculated by ",(0,r.kt)("inlineCode",{parentName:"p"},"getTimeRemaining")," - and to stop counter refreshing after it gets to zero. Again - only edit needed would be to delete the unneeded unit."),(0,r.kt)("p",null,"To not leave you with \u201cdelete this, delete that\u201d talk and empty hands, feel free to take a look at a simplified ",(0,r.kt)("a",{parentName:"p",href:"https://gist.github.com/MateuszDabrowski/f433cecf3c02c400c9e74d08b78ad50c#file-day-counter-html"},"sample code")," that counts only days. As for the placement in your code - it will be best to put the ",(0,r.kt)("inlineCode",{parentName:"p"},"<script>(...)<\/script>")," part right before the closing ",(0,r.kt)("inlineCode",{parentName:"p"},"</body>")," tag."),(0,r.kt)("h2",{id:"counting-options"},"Counting options"),(0,r.kt)("p",null,"Time for the important part - the one you will always edit. The counter's deadline. You probably already noticed ",(0,r.kt)("inlineCode",{parentName:"p"},"const deadline")," in the sample and guessed it is the line we will focus on now. It might look a bit intimidating with the weird structure, but in this way, it actually gives you a lot of power. This date formatting is an example of an ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ISO_8601"},"ISO 8601")," standard."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const deadline = new Date("2077-07-20T20:17:00+00:00").getTime()\n')),(0,r.kt)("p",null,"To use it, insert date in a YYYY-MM-DD",(0,r.kt)("strong",{parentName:"p"},"T"),"hh:mm:ss ",(0,r.kt)("strong",{parentName:"p"},"+"),"hh:mm format. The ",(0,r.kt)("strong",{parentName:"p"},"T")," is just a delimiter between date and time, ",(0,r.kt)("strong",{parentName:"p"},"+"),"hh:mm, on the other hand, allows you to add time variable (for example summertime change)."),(0,r.kt)("p",null,"However, depending on the needs, you may want to use other available formats, for example, simplified only-date format perfect when you need to count days."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const deadline = new Date("2077-01-31").getTime();\n')),(0,r.kt)("p",null,"Another option is to calculate the amount of time to count down from instead of a static end date. It might be a much better solution if you want to create a feeling of pressure for a small task or engage visitor without a real deadline on your side."),(0,r.kt)("p",null,"To use this solution, you need to declare the starting value. In below example, it is set to 15 days. The code multiplies 1000 milliseconds times 60 seconds times 60 minutes times 24 hours. Want to count 5 minutes? Go for 1000 ",(0,r.kt)("em",{parentName:"p"}," 60 ")," 60 * 5."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);\n")),(0,r.kt)("h2",{id:"take-advantage-of-dynamic-content"},"Take advantage of dynamic content"),(0,r.kt)("p",null,"Simple countdown on landing page already can make an enormous difference to your conversion rate. But, of course, you can get even more out of it by using the toolset of your marketing automation tool."),(0,r.kt)("p",null,"There are many cases where urgency is a perfect solution, however, not always all visitors should\nsee the same timeframe. An example? Renewal notification that counts downtime before a subscription expires. Instead of a\nstatic product end date, implement the counter and put some pressure with seconds running out in real-time."),(0,r.kt)("p",null,"To do this, make your marketing automation tool push a date value (in above mentioned ISO 8601 format) from the visitor data model right into var deadline JavaScript line."),(0,r.kt)(l.Z,{groupId:"marketingAutomationPlatforms",defaultValue:"sfmc",values:[{label:"Salesforce Marketing Cloud",value:"sfmc"},{label:"Oracle Eloqua",value:"eloqua"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"sfmc",mdxType:"TabItem"},(0,r.kt)("p",null,"In Salesforce Marketing Cloud, you can use either ",(0,r.kt)("a",{parentName:"p",href:"https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-programmatic-content.meta/mc-programmatic-content/personalisationStringsAMPscript.htm"},"AMPScript personalisation string")," or SSJS personalisation string:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"/* Remember to check whether the date you are using has Local or System based timezone */\nconst deadline = new Date('<ctrl:field name=DateTypeAttributeName />').getTime();\n")),(0,r.kt)("p",null,"Wondering what will happen with visitors that don't have this date value? With just personalisation string such users will see the counter set to zero right from the start. Of course, we would rather not have it that way. Thankfully SSJS personalisations strings allow us to add default value very easily:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const deadline = new Date('<ctrl:field name=DateTypeAttributeName default='2077-07-20T20:17:00+00:00' />').getTime();\n")),(0,r.kt)("p",null,"You can also easily create a dynamic content block that will be visible only when the date from personalisation string is soon enough, by leveraging a simple ",(0,r.kt)("inlineCode",{parentName:"p"},"if/else")," logic of SSJS.")),(0,r.kt)(s.Z,{value:"eloqua",mdxType:"TabItem"},(0,r.kt)("p",null,"In Oracle Eloqua it would be a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAA/Help/FieldMerges/FieldMergeExamples.htm"},"field merge"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const deadline = new Date('<span class=eloquaemail> Date_Field_Merge1 </span>').getTime();\n")),(0,r.kt)("p",null,"Wondering what will happen with visitors that don't have this date value? With just field merge such users will see the counter set to zero right from the start. Of course, we would rather not have it that way. Let's create a remedy with yet another marketing automation tool - ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAA/Help/DynamicContent/DynamicContentExamples.htm"},"dynamic content")," (that's Eloqua name for a content element that adapts to the visitor depending on the value in the data model). Just wrap the HTML part of a counter and set it to be visible only if the visitor has a date value in the field used in field merge (or even when it is also within the chosen timeframe)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<span elqid="001" elqtype="DynamicContent" class="remove-absolute" style="display: block"></span>\n')))),(0,r.kt)("p",null,"Use it hard. How? Put that renewal offer with a counter inside a dynamic content and insert it into every content landing page. Simple and quick solution to make sure your customers will be notified ",(0,r.kt)("em",{parentName:"p"},"when")," they should. You can also put single dynamic content box related to events or webinars and push information with the counter about the nearest happening one. Just be sure to leverage dynamic content options to show different texts depending on visitor persona. And, of course, update that dynamic content after the event."),(0,r.kt)("p",null,"What next? Take the code, implement on a landing page, build an urgency fueled story and watch boosted engagement do its job. You can count on it."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"You Should Know")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"As emails don't support JavaScript, you won't be able to leverage the above code for your sends. However, that doesn't mean you cannot increase engagement with a countdown in your outbound."),(0,r.kt)("p",{parentName:"div"},"Multiple solutions create dynamically changing .gifs that allows you to create a real-time timer in your email. I'm using ",(0,r.kt)("a",{parentName:"p",href:"https://www.sendtric.com"},"Sendtric"),". A different approach, same engagement boosting value."))))}y.isMDXComponent=!0}}]);