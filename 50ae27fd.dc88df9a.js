(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{116:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||r;return a?i.a.createElement(d,s(s({ref:t},l),{},{components:a})):i.a.createElement(d,s({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},117:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),i=a(56),r=a.n(i);const o=({content:e})=>n.createElement(n.Fragment,null,n.createElement("p",{id:r.a.leadText},e))},87:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(3),i=a(7),r=(a(0),a(116)),o=a(117),s={id:"ssjs-snippet-ampscript-in-ssjs",title:"AMPScript in SSJS",sidebar_label:"AMPScript in SSJS",description:"Not all AMPScript functions are available in SSJS. But you still can use them."},c={unversionedId:"ssjs/ssjs-snippet-ampscript-in-ssjs",id:"ssjs/ssjs-snippet-ampscript-in-ssjs",isDocsHomePage:!1,title:"AMPScript in SSJS",description:"Not all AMPScript functions are available in SSJS. But you still can use them.",source:"@site/docs/ssjs/ssjs-snippet-ampscript-in-ssjs.mdx",slug:"/ssjs/ssjs-snippet-ampscript-in-ssjs",permalink:"/docs/ssjs/ssjs-snippet-ampscript-in-ssjs",editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/docs/ssjs/ssjs-snippet-ampscript-in-ssjs.mdx",version:"current",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1613339337,sidebar_label:"AMPScript in SSJS",sidebar:"snippets",previous:{title:"Tailor the experience with data logic",permalink:"/docs/usecase/tailor-with-data"},next:{title:"MobileConnect Phone Change",permalink:"/docs/ssjs/ssjs-snippet-mobileconnect-phone-change"}},l=[{value:"Problem with missing SSJS functions",id:"problem-with-missing-ssjs-functions",children:[]},{value:"Solution",id:"solution",children:[]},{value:"Options",id:"options",children:[{value:"Long AMPScript Code",id:"long-ampscript-code",children:[]},{value:"Dynamic AMPScript Code",id:"dynamic-ampscript-code",children:[]},{value:"Working with AMPScript on Lists &amp; Objects",id:"working-with-ampscript-on-lists--objects",children:[]}]}],p={toc:l};function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(o.a,{content:"Not all AMPScript functions are available in SSJS. But you still can use them.",mdxType:"LeadText"}),Object(r.b)("h2",{id:"problem-with-missing-ssjs-functions"},"Problem with missing SSJS functions"),Object(r.b)("p",null,"SSJS language has many features missing from AMPScript - ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"../ssjs/debugging-ssjs#try-to-catch-the-error"}),"try/catch blocks"),", arrays and objects to mention the most used ones. But some things are available only in AMPScript."),Object(r.b)("p",null,"Some, like ",Object(r.b)("inlineCode",{parentName:"p"},"ProperCase")," function, can be recreated in SSJS with a bit of RegEx creativity. Other, like ",Object(r.b)("inlineCode",{parentName:"p"},"RetrieveSalesforceObjects"),", cannot (unless you decide on building custom wrappers around Salesforce API)."),Object(r.b)("p",null,"Either way, you are in for a time consuming, error-prone custom coding. Is there a better way?"),Object(r.b)("h2",{id:"solution"},"Solution"),Object(r.b)("p",null,"You guessed it - yes, there is a better way. You can run AMPScript code with your SSJS. The simple answer to this problem is ",Object(r.b)("inlineCode",{parentName:"p"},"Platform.Function.TreatAsContent()")," SSJS function."),Object(r.b)("p",null,"But the good answer is few lines longer:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"function ampScript(code) {\n    var ampBlock = '\\%\\%[' + code + ']\\%\\%';\n    Platform.Function.TreatAsContent(ampBlock);\n    return Variable.GetValue('@Response');\n}\n")),Object(r.b)("p",null,"Instead of writing your AMPScript execution wrapper every time from scratch, here is a ready-to-use function that you can copy-paste across your scripts that allows you to use ampscript and do it gracefully."),Object(r.b)("p",null,"Sure, it still uses the ",Object(r.b)("inlineCode",{parentName:"p"},"Platform.Function.TreatAsContent()")," at its heart, but there are two additional tricks:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"var ampBlock = '\\%\\%[' + code + ']\\%\\%'"),": allows you to write AMPScript without the block symbols and adds them in the last moment. This way, Marketing Cloud will execute your code once you pass it to the ",Object(r.b)("inlineCode",{parentName:"li"},"Platform.Function.TreatAsContent()")," function. It is essential when you want to ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#dynamic-ampscript-code"}),"insert SSJS in your AMPScript"),"."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"return Variable.GetValue('@Response');"),": allows you to pull back data from your AMPScript to the SSJS. For it to work, you must set the ",Object(r.b)("inlineCode",{parentName:"li"},"@Response")," variable in your AMPScript.")),Object(r.b)("p",null,"How to use it? Pass the AMPScript code in the function and, if you want to do something with ",Object(r.b)("inlineCode",{parentName:"p"},"@Response")," value, assign it to an SSJS variable."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:'title="As JavaScript lacks native ProperCase, we can use AMPScript for that"',title:'"As',JavaScript:!0,lacks:!0,native:!0,"ProperCase,":!0,we:!0,can:!0,use:!0,AMPScript:!0,for:!0,'that"':!0}),"var properCaseFullName = ampScript(\"SET @Response = ProperCase(AttributeValue('fullName'))\");\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"You Should Know")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Be sure only to use this approach if there is no equivalent SSJS solution, as mixing languages will impact performance. It is crucial for code in the messages that Marketing Cloud will execute on send time."))),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)("p",null,"You can adapt the above script to suit your needs better."),Object(r.b)("h3",{id:"long-ampscript-code"},"Long AMPScript Code"),Object(r.b)("p",null,"Above example is a short and straightforward AMPScript. However, in many cases, you will need a bit more code to do the job. You can write it as a single line if you want, but I recommend you split it into separate lines for readability purposes."),Object(r.b)("p",null,"You can do it quickly, by just concatenating strings with ",Object(r.b)("inlineCode",{parentName:"p"},"+"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:"title=\"Check whether there is a Campaign in Salesforce called 'WelcomeCampaign2021'\"",title:'"Check',whether:!0,there:!0,is:!0,a:!0,Campaign:!0,in:!0,Salesforce:!0,called:!0,"'WelcomeCampaign2021'\"":!0}),"var response = ampScript(\"SET @Retrieve = RetrieveSalesforceObjects(\"\n    + \"'Campaign', 'Id', 'Name', '=', 'WelcomeCampaign2021') \"\n    + \"IF RowCount(@Retrieve) > 0 THEN SET @Response = 'true' \"\n    + \"ELSE SET @Response = 'false' ENDIF\"\n")),Object(r.b)("p",null,"Be sure to always check, whether you have a space either at the end of the previous line or beginning of the new line. Otherwise, after concatenation you might end up with incorrect code."),Object(r.b)("h3",{id:"dynamic-ampscript-code"},"Dynamic AMPScript Code"),Object(r.b)("p",null,"Using AMPScript via SSJS not only enables additional features for Server-Side JavaScript. It also allows you to make your AMPScript more dynamic by leveraging variables in the loops:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:'{4} title="Same check as above, but for multiple campaigns and output to an array"',"{4}":!0,title:'"Same',check:!0,as:!0,"above,":!0,but:!0,for:!0,multiple:!0,campaigns:!0,and:!0,output:!0,to:!0,an:!0,'array"':!0}),"var availableCampaigns = []\nfor (var campaignName in campaignList) {\n    var response = ampScript(\"SET @Retrieve = RetrieveSalesforceObjects(\"\n        + \"'Campaign', 'Id', 'Name', '=', '\" + campaignName + \"') \"\n        + \"IF RowCount(@Retrieve) > 0 THEN SET @Response = 'true' \"\n        + \"ELSE SET @Response = 'false' ENDIF\");\n    if (reponse) availableCampaigns.push(campaignName);\n}\n")),Object(r.b)("p",null,"It is even more useful when you have variability in what you want to create. For example, let's consider a use case where you want to create Campaigns in Salesforce from Marketing Cloud, but only some of your campaigns have an End Date known from the beginning."),Object(r.b)("p",null,"In ",Object(r.b)("inlineCode",{parentName:"p"},"CreateSalesforceObject")," AMPScript function, you must pass all fields with their values and a count of fields added to the object. With SSJS, you can use the ",Object(r.b)("inlineCode",{parentName:"p"},"length")," method to count the Campaign's fields in each loop's run. Then pass the outcome to the call parameters just as in the example above."),Object(r.b)("h3",{id:"working-with-ampscript-on-lists--objects"},"Working with AMPScript on Lists & Objects"),Object(r.b)("p",null,"Unfortunately, AMPScript doesn't support list or objects. Fortunately, SSJS do. To pull that off, we will need a bit of creativity, but it makes life so much easier once done."),Object(r.b)("p",null,"The easy example is visible in the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#dynamic-ampscript-code"}),"previous section")," - the snippet creates an array of Campaigns available in Salesforce."),Object(r.b)("p",null,"But we can go so much farther than that:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:"{8-9,11,14}","{8-9,11,14}":!0}),"var response = ampScript(\"SET @Retrieve = RetrieveSalesforceObjects(\"\n    + \"'Campaign', 'Name,Id,StartDate,EndDate', 'IsActive', '=', 'True') \"\n    + \"SET @RowCount = RowCount(@Retrieve) SET @Response = '' \"\n    + \"IF @RowCount > 0 THEN @Counter = 1 TO @RowCount DO \"\n    + \"SET @Row = ROW(@Retrieve, @Counter) \"\n    + \"SET @Name = FIELD(@Row, 'Name') SET @Id = FIELD(@Row, 'Id') \"\n    + \"SET @StartDate = FIELD(@Row, 'StartDate') SET @EndDate = FIELD(@Row, 'EndDate') \"\n    + \"SET @RowDate = CONCAT(@Name, ',', @Id, ',', @StartDate, ',', @EndDate) \"\n    + \"SET @Response = CONCAT(@Response, @RowData,';') \"\n    + \"NEXT ENDIF\")\nresponse = response.split(';');\nvar campaignData = [];\nfor (var i = 0; i < response.length - 1; i++) {\n    var responseRowData = response[i].split(',');\n    campaignData.push({\n        name: responseRowData[0],\n        id: responseRowData[1],\n        startDate: responseRowData[2],\n        endDate: responseRowData[3]\n    })\n}\n")),Object(r.b)("p",null,"Ok, a lot to unpack. But trust me, it's worth it. Let's go!"),Object(r.b)("p",null,"The first line is easy - we are using ",Object(r.b)("inlineCode",{parentName:"p"},"RetrieveSalesforceObjects")," function to get a list of all active Salesforce Campaigns and limit the fields we need about them."),Object(r.b)("p",null,"Next, we have a standard AMPScript way of iterating over the function's outcomes."),Object(r.b)("p",null,"Now starts the exciting part - we are creating an AMPScript variable for each field, concatenate it using a comma and then adding it to the end of the ",Object(r.b)("inlineCode",{parentName:"p"},"@Response")," variable - semicolon-separated."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-css",metastring:'title="Structure of the AMPScript output"',title:'"Structure',of:!0,the:!0,AMPScript:!0,'output"':!0}),"Name1,Id1,StartDate1,EndDate1;Name2,Id2,StartDate2,EndDate2;Name3,Id3,StartDate3,EndDate3\n")),Object(r.b)("p",null,"As we assigned the final string to ",Object(r.b)("inlineCode",{parentName:"p"},"@Response"),", the function will return it to the SSJS context."),Object(r.b)("p",null,"Once it's there, we are leveraging the SSJS by splitting the string on semicolons to create an array of substrings containing each Salesforce Campaign's details."),Object(r.b)("p",null,"Then we loop over it and split each Campaign string by comma. With the deconstructed data, we create a nice and clean ",Object(r.b)("inlineCode",{parentName:"p"},"campaignData")," object that we can use in the rest of our code. Neat."))}u.isMDXComponent=!0}}]);