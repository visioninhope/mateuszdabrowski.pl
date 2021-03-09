(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{119:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,d=u["".concat(r,".").concat(m)]||u[m]||b[m]||o;return a?i.a.createElement(d,s(s({ref:t},l),{},{components:a})):i.a.createElement(d,s({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var l=2;l<o;l++)r[l]=a[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},120:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0),i=a(57),o=a.n(i);const r=({content:e})=>n.createElement(n.Fragment,null,n.createElement("p",{id:o.a.leadText},e))},89:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(3),i=a(8),o=(a(0),a(119)),r=a(120),s={id:"ssjs-snippet-ampscript-in-ssjs",title:"AMPScript in SSJS",sidebar_label:"AMPScript in SSJS",description:"Not all AMPScript functions are available in SSJS. But you still can use them."},c={unversionedId:"ssjs/ssjs-snippet-ampscript-in-ssjs",id:"ssjs/ssjs-snippet-ampscript-in-ssjs",isDocsHomePage:!1,title:"AMPScript in SSJS",description:"Not all AMPScript functions are available in SSJS. But you still can use them.",source:"@site/docs/ssjs/ssjs-snippet-ampscript-in-ssjs.mdx",slug:"/ssjs/ssjs-snippet-ampscript-in-ssjs",permalink:"/docs/ssjs/ssjs-snippet-ampscript-in-ssjs",editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/docs/ssjs/ssjs-snippet-ampscript-in-ssjs.mdx",version:"current",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1613430233,formattedLastUpdatedAt:"2/16/2021",sidebar_label:"AMPScript in SSJS",sidebar:"snippets",previous:{title:"Tailor the experience with data logic",permalink:"/docs/usecase/tailor-with-data"},next:{title:"MobileConnect Phone Change",permalink:"/docs/ssjs/ssjs-snippet-mobileconnect-phone-change"}},l=[{value:"Problem with missing SSJS functions",id:"problem-with-missing-ssjs-functions",children:[]},{value:"Solution",id:"solution",children:[]},{value:"Options",id:"options",children:[{value:"Long AMPScript Code",id:"long-ampscript-code",children:[]},{value:"Dynamic AMPScript Code",id:"dynamic-ampscript-code",children:[]},{value:"Working with AMPScript on Lists &amp; Objects",id:"working-with-ampscript-on-lists--objects",children:[]}]}],p={toc:l};function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(r.a,{content:"Not all AMPScript functions are available in SSJS. But you still can use them.",mdxType:"LeadText"}),Object(o.b)("h2",{id:"problem-with-missing-ssjs-functions"},"Problem with missing SSJS functions"),Object(o.b)("p",null,"SSJS language has many features missing from AMPScript - ",Object(o.b)("a",{parentName:"p",href:"../ssjs/debugging-ssjs#try-to-catch-the-error"},"try/catch blocks"),", arrays and objects to mention the most used ones. But some things are available only in AMPScript."),Object(o.b)("p",null,"Some, like ",Object(o.b)("inlineCode",{parentName:"p"},"ProperCase")," function, can be recreated in SSJS with a bit of RegEx creativity. Other, like ",Object(o.b)("inlineCode",{parentName:"p"},"RetrieveSalesforceObjects"),", cannot (unless you decide on building custom wrappers around Salesforce API)."),Object(o.b)("p",null,"Either way, you are in for a time consuming, error-prone custom coding. Is there a better way?"),Object(o.b)("h2",{id:"solution"},"Solution"),Object(o.b)("p",null,"You guessed it - yes, there is a better way. You can run AMPScript code with your SSJS. The simple answer to this problem is ",Object(o.b)("inlineCode",{parentName:"p"},"Platform.Function.TreatAsContent()")," SSJS function."),Object(o.b)("p",null,"But the good answer is few lines longer:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"function ampScript(code) {\n    var ampBlock = '\\%\\%[' + code + ']\\%\\%';\n    Platform.Function.TreatAsContent(ampBlock);\n    return Variable.GetValue('@Response');\n}\n")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"You Should Know")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"As we are using ",Object(o.b)("inlineCode",{parentName:"p"},"Variable.GetValue")," here, you will need to import Salesforce Marketing Cloud SSJS Core library at the top of your script."),Object(o.b)("p",{parentName:"div"},"Just add ",Object(o.b)("inlineCode",{parentName:"p"},"Platform.Load('core', '1')")," right after ",Object(o.b)("inlineCode",{parentName:"p"},"<script runat=server>")," and you are good to go!"))),Object(o.b)("p",null,"Instead of writing your AMPScript execution wrapper every time from scratch, here is a ready-to-use function that you can copy-paste across your scripts that allows you to use ampscript and do it gracefully."),Object(o.b)("p",null,"Sure, it still uses the ",Object(o.b)("inlineCode",{parentName:"p"},"Platform.Function.TreatAsContent()")," at its heart, but there are two additional tricks:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"var ampBlock = '\\%\\%[' + code + ']\\%\\%'"),": allows you to write AMPScript without the block symbols and adds them in the last moment. This way, Marketing Cloud will execute your code once you pass it to the ",Object(o.b)("inlineCode",{parentName:"li"},"Platform.Function.TreatAsContent()")," function. It is essential when you want to ",Object(o.b)("a",{parentName:"li",href:"#dynamic-ampscript-code"},"insert SSJS in your AMPScript"),"."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"return Variable.GetValue('@Response');"),": allows you to pull back data from your AMPScript to the SSJS. For it to work, you must ",Object(o.b)("inlineCode",{parentName:"li"},"SET")," the ",Object(o.b)("inlineCode",{parentName:"li"},"@Response")," variable in your AMPScript. Whatever value you assign to the ",Object(o.b)("inlineCode",{parentName:"li"},"@Response")," in the AMPScript context, will be returned to your SSJS context.")),Object(o.b)("p",null,"How to use it? Pass the AMPScript code in the function and, if you want to do something with ",Object(o.b)("inlineCode",{parentName:"p"},"@Response")," value, assign it to an SSJS variable."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js",metastring:'title="As JavaScript lacks native ProperCase, we can use AMPScript for that"',title:'"As',JavaScript:!0,lacks:!0,native:!0,"ProperCase,":!0,we:!0,can:!0,use:!0,AMPScript:!0,for:!0,'that"':!0},"var properCaseFullName = ampScript(\"SET @Response = ProperCase(AttributeValue('fullName'))\");\n")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"You Should Know")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Be sure only to use this approach if there is no equivalent SSJS solution, as mixing languages will impact performance. It is crucial for code in the messages that Marketing Cloud will execute on send time."),Object(o.b)("p",{parentName:"div"},"For example, if you are only planning to use ProperCase, it might be better to go the RegEx path for significant volume messaging."))),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("p",null,"You can adapt the above script to suit your needs better."),Object(o.b)("h3",{id:"long-ampscript-code"},"Long AMPScript Code"),Object(o.b)("p",null,"Above example is a short and straightforward AMPScript. However, you will need a bit more code to do the job in many cases. You can write it as a single line if you want, but I recommend you split it into separate lines for readability purposes."),Object(o.b)("p",null,"You can do it quickly, by just concatenating strings with ",Object(o.b)("inlineCode",{parentName:"p"},"+"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js",metastring:"title=\"Check whether there is a Campaign in Salesforce called 'WelcomeCampaign2021'\"",title:'"Check',whether:!0,there:!0,is:!0,a:!0,Campaign:!0,in:!0,Salesforce:!0,called:!0,"'WelcomeCampaign2021'\"":!0},"var response = ampScript(\"SET @Retrieve = RetrieveSalesforceObjects(\"\n    + \"'Campaign', 'Id', 'Name', '=', 'WelcomeCampaign2021') \"\n    + \"IF RowCount(@Retrieve) > 0 THEN SET @Response = 'true' \"\n    + \"ELSE SET @Response = 'false' ENDIF\"\n")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"You Should Know")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"To use any Salesforce Object functions, you will need to have Marketing Cloud Connect implemented to tie in your Marketing Cloud and Sales or Service Cloud."))),Object(o.b)("p",null,"Be sure always to check, whether you have space either at the end of the previous line or beginning of the new line. Otherwise, after concatenation, you might end up with incorrect code."),Object(o.b)("h3",{id:"dynamic-ampscript-code"},"Dynamic AMPScript Code"),Object(o.b)("p",null,"Using AMPScript via SSJS not only enables additional features for Server-Side JavaScript. It also allows you to make your AMPScript more dynamic by leveraging variables in the loops:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js",metastring:'{4} title="Same check as above, but for multiple campaigns and output to an array"',"{4}":!0,title:'"Same',check:!0,as:!0,"above,":!0,but:!0,for:!0,multiple:!0,campaigns:!0,and:!0,output:!0,to:!0,an:!0,'array"':!0},"var availableCampaigns = []\nfor (var campaignName in campaignList) {\n    var response = ampScript(\"SET @Retrieve = RetrieveSalesforceObjects(\"\n        + \"'Campaign', 'Id', 'Name', '=', '\" + campaignName + \"') \"\n        + \"IF RowCount(@Retrieve) > 0 THEN SET @Response = 'true' \"\n        + \"ELSE SET @Response = 'false' ENDIF\");\n    if (reponse) availableCampaigns.push(campaignName);\n}\n")),Object(o.b)("p",null,"It is even more useful when you have variability in what you want to create. For example, let's consider a use case where you want to create Campaigns in Salesforce from Marketing Cloud, but only some of your campaigns have an End Date known from the beginning."),Object(o.b)("p",null,"In ",Object(o.b)("inlineCode",{parentName:"p"},"CreateSalesforceObject")," AMPScript function, you must pass all fields with their values and a count of fields added to the object. With SSJS, you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"length")," method to count the Campaign's fields in each loop's run. Then pass the outcome to the call parameters just as in the example above."),Object(o.b)("h3",{id:"working-with-ampscript-on-lists--objects"},"Working with AMPScript on Lists & Objects"),Object(o.b)("p",null,"Unfortunately, AMPScript doesn't support list or objects. Fortunately, SSJS do. We will need a bit of creativity to pull that off, but it makes life so much easier once done."),Object(o.b)("p",null,"The easy example is visible in the ",Object(o.b)("a",{parentName:"p",href:"#dynamic-ampscript-code"},"previous section")," - the snippet creates an array of Campaigns available in Salesforce."),Object(o.b)("p",null,"But we can go so much farther than that:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js",metastring:"{8-9,11,14}","{8-9,11,14}":!0},"var response = ampScript(\"SET @Retrieve = RetrieveSalesforceObjects(\"\n    + \"'Campaign', 'Name,Id,StartDate,EndDate', 'IsActive', '=', 'True') \"\n    + \"SET @RowCount = RowCount(@Retrieve) SET @Response = '' \"\n    + \"IF @RowCount > 0 THEN @Counter = 1 TO @RowCount DO \"\n    + \"SET @Row = ROW(@Retrieve, @Counter) \"\n    + \"SET @Name = FIELD(@Row, 'Name') SET @Id = FIELD(@Row, 'Id') \"\n    + \"SET @StartDate = FIELD(@Row, 'StartDate') SET @EndDate = FIELD(@Row, 'EndDate') \"\n    + \"SET @RowDate = CONCAT(@Name, ',', @Id, ',', @StartDate, ',', @EndDate) \"\n    + \"SET @Response = CONCAT(@Response, @RowData,';') \"\n    + \"NEXT ENDIF\")\nresponse = response.split(';');\nvar campaignData = [];\nfor (var i = 0; i < response.length - 1; i++) {\n    var responseRowData = response[i].split(',');\n    campaignData.push({\n        name: responseRowData[0],\n        id: responseRowData[1],\n        startDate: responseRowData[2],\n        endDate: responseRowData[3]\n    })\n}\n")),Object(o.b)("p",null,"Ok, a lot to unpack. But trust me, it's worth it. Let's go!"),Object(o.b)("p",null,"The first line is easy - we are using ",Object(o.b)("inlineCode",{parentName:"p"},"RetrieveSalesforceObjects")," function to get a list of all active Salesforce Campaigns and limit the fields we need about them."),Object(o.b)("p",null,"Next, we have a standard AMPScript way of iterating over the function's outcomes."),Object(o.b)("p",null,"Now starts the exciting part - we are creating an AMPScript variable for each field, concatenate it using a comma and then adding it to the end of the ",Object(o.b)("inlineCode",{parentName:"p"},"@Response")," variable - semicolon-separated."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-css",metastring:'title="Structure of the AMPScript output"',title:'"Structure',of:!0,the:!0,AMPScript:!0,'output"':!0},"Name1,Id1,StartDate1,EndDate1;Name2,Id2,StartDate2,EndDate2;Name3,Id3,StartDate3,EndDate3\n")),Object(o.b)("p",null,"As we assigned the final string to ",Object(o.b)("inlineCode",{parentName:"p"},"@Response"),", the function will return it to the SSJS context."),Object(o.b)("p",null,"Once it's there, we are leveraging the SSJS by splitting the string on semicolons to create an array of substrings containing each Salesforce Campaign's details."),Object(o.b)("p",null,"Then we loop over it and split each Campaign string by comma. With the deconstructed data, we create a nice and clean ",Object(o.b)("inlineCode",{parentName:"p"},"campaignData")," object that we can use in the rest of our code. Neat."))}u.isMDXComponent=!0}}]);