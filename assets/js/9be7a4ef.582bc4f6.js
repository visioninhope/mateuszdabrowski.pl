"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[1694],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2043:function(e,t,n){n.d(t,{m:function(){return o}});var a=n(7294),i="leadText_16va",o=function(e){var t=e.content;return a.createElement(a.Fragment,null,a.createElement("p",{id:i},t))}},8687:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return u}});var a=n(7462),i=n(3366),o=(n(7294),n(4137)),r=n(2043),s=["components"],l={id:"ampscript-style-guide",title:"AMPScript Style Guide",sidebar_label:"Style Guide",description:"Script with style. Readable code is a few rules & best practices away",image:"img/og/og-image-ampscript-style-guide.png"},c=void 0,p={unversionedId:"ampscript/ampscript-style-guide",id:"ampscript/ampscript-style-guide",isDocsHomePage:!1,title:"AMPScript Style Guide",description:"Script with style. Readable code is a few rules & best practices away",source:"@site/docs/ampscript/ampscript-style-guide.mdx",sourceDirName:"ampscript",slug:"/ampscript/ampscript-style-guide",permalink:"/docs/ampscript/ampscript-style-guide",editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/docs/ampscript/ampscript-style-guide.mdx",tags:[],version:"current",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1629916676,formattedLastUpdatedAt:"8/25/2021",frontMatter:{id:"ampscript-style-guide",title:"AMPScript Style Guide",sidebar_label:"Style Guide",description:"Script with style. Readable code is a few rules & best practices away",image:"img/og/og-image-ampscript-style-guide.png"},sidebar:"snippets",previous:{title:"Tailor with Data",permalink:"/docs/usecase/tailor-with-data"},next:{title:"Performance",permalink:"/docs/ssjs/ssjs-vs-ampscript-performance"}},m=[{value:"Naming Convention",id:"naming-convention",children:[{value:"Meaningful Names",id:"meaningful-names",children:[]},{value:"AMPScript Letter Case",id:"ampscript-letter-case",children:[]},{value:"Consistent Quotes",id:"consistent-quotes",children:[]}]},{value:"Indentation and Spacing",id:"indentation-and-spacing",children:[{value:"Consistent Indentation",id:"consistent-indentation",children:[]},{value:"Intentional Spacing",id:"intentional-spacing",children:[]}]},{value:"Comments",id:"comments",children:[{value:"1. Table of Contents Comment",id:"1-table-of-contents-comment",children:[]},{value:"2. Section Comments",id:"2-section-comments",children:[]},{value:"3. Documentation Comments",id:"3-documentation-comments",children:[]}]},{value:"Sum Up",id:"sum-up",children:[]}],d={toc:m};function u(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.m,{content:"Script with style. Readable code is a few rules & conventions away.",mdxType:"LeadText"}),(0,o.kt)("p",null,"First things first: this Salesforce Marketing Cloud AMPScript style guide is highly subjective. You may use it as it is, implement only some parts of it, or ignore it altogether. There are only two rules that I believe are a must-have:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Be consistent across your codebase."),(0,o.kt)("li",{parentName:"ol"},"Strive for good readability.")),(0,o.kt)("p",null,"Everything else is preference. And you are just about to learn about mine."),(0,o.kt)("h2",{id:"naming-convention"},"Naming Convention"),(0,o.kt)("p",null,"AMPScript gives you a lot of freedom when it comes to naming and letter case. But instead of going freestyle with that flexibility, we should leverage it to build something meaningful and readable. I decided to focus also on simplicity."),(0,o.kt)("h3",{id:"meaningful-names"},"Meaningful Names"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Use descriptive names to provide context.")),(0,o.kt)("p",null,"As ",(0,o.kt)("a",{parentName:"p",href:"https://groups.google.com/g/comp.lang.c++/c/rYCO5yn4lXw/m/oITtSkZOtoUJ?pli=1"},"John F. Woods")," said, ",(0,o.kt)("inlineCode",{parentName:"p"},"always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live"),". Meaningful and consistent names are an excellent starting point for living a long (coding) life with a limited amount of frustration and regret when someone asks you about your year-old code to adapt to a new project."),(0,o.kt)("p",null,"Applying the rules listed below is easy when you write the code and remember its logic but can be a challenge after resetting your memory by writing few other scripts. Make your AMPScript better with meaningful variable names:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Use descriptive variable names. It is better to have a long explicit one (",(0,o.kt)("inlineCode",{parentName:"li"},"IsTrackingSuppressed"),") than a short mysterious abbreviation (",(0,o.kt)("inlineCode",{parentName:"li"},"Trk"),")."),(0,o.kt)("li",{parentName:"ol"},"When the variable is a boolean, prefix it with ",(0,o.kt)("inlineCode",{parentName:"li"},"Is")," (or ",(0,o.kt)("inlineCode",{parentName:"li"},"Has"),"/",(0,o.kt)("inlineCode",{parentName:"li"},"Does"),"/",(0,o.kt)("inlineCode",{parentName:"li"},"Are")," depending on the underlying data)."),(0,o.kt)("li",{parentName:"ol"},"When the variable is a date, suffix it with ",(0,o.kt)("inlineCode",{parentName:"li"},"Date"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/* \u2705 Descriptive and suggesting boolean data type */\nSET @isTrackingSuppressed = false;\n\n/* \u274c Name neither describes the variable purpose nor suggest its data type */\nSET @value = false;\n\n/* \u2705 Descriptive and suggesting date data type */\nSET @trackingSupressionStartDate = Now();\n\n/* \u274c Name neither describes the variable purpose nor suggest its data type */\nSET @supressed = Now();\n")),(0,o.kt)("h3",{id:"ampscript-letter-case"},"AMPScript Letter Case"),(0,o.kt)("p",null,"AMPScript letter case is a minefield. I have seen all possible combinations of letter case used for variables and AMPScript functions - both in shared snippets and official documentation."),(0,o.kt)("p",null,"I even created a ",(0,o.kt)("a",{parentName:"p",href:"https://www.linkedin.com/feed/update/urn:li:activity:6807595457716518912/"},"survey")," to check which approach is the most popular. Outcomes from 168 votes?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"45%: Mix of ",(0,o.kt)("inlineCode",{parentName:"li"},"ProperCase")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"UPPERCASE")," for various elements."),(0,o.kt)("li",{parentName:"ul"},"30%: ",(0,o.kt)("inlineCode",{parentName:"li"},"ProperCase")," for everything."),(0,o.kt)("li",{parentName:"ul"},"15%: ",(0,o.kt)("inlineCode",{parentName:"li"},"UPPERCASE")," for everything."),(0,o.kt)("li",{parentName:"ul"},"10%: Other conventions (including ",(0,o.kt)("inlineCode",{parentName:"li"},"lowercase")," with some ",(0,o.kt)("inlineCode",{parentName:"li"},"camelCase")," for functions and ",(0,o.kt)("inlineCode",{parentName:"li"},"snake_case")," for variables by ",(0,o.kt)("a",{parentName:"li",href:"https://www.linkedin.com/feed/update/urn:li:ugcPost:6807595457297084416?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A6807595457297084416%2C6807673667259125762%29&replyUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A6807595457297084416%2C6807687826575110145%29"},"Adam Spriggs"),", co-author of the AMPScript bible - ",(0,o.kt)("a",{parentName:"li",href:"https://ampscript.guide"},"ampscript.guide"),").")),(0,o.kt)("p",null,"So the best recommendation for you (and your team) to decide on one style - whichever it will be - and stay consistent."),(0,o.kt)("p",null,"I decided to use a mixed approach for the sake of readability. It might not be as simple as focusing on just one letter case format for the whole code, but it improves the experience of working with longer and more complex AMPScript a lot."),(0,o.kt)("h4",{id:"ampscript-variable-names"},"AMPScript Variable Names"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Use ",(0,o.kt)("inlineCode",{parentName:"strong"},"camelCase")," for variable names.")),(0,o.kt)("p",null,"I use ",(0,o.kt)("inlineCode",{parentName:"p"},"camelCase")," for AMPScript variables because:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"It is more readable than ",(0,o.kt)("inlineCode",{parentName:"li"},"lowercase")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"UPPERCASE")," - especially for longer names."),(0,o.kt)("li",{parentName:"ol"},"It is easier to differentiate variable name (",(0,o.kt)("inlineCode",{parentName:"li"},"@")," prefix and ",(0,o.kt)("inlineCode",{parentName:"li"},"camelCase"),") from the function name (",(0,o.kt)("inlineCode",{parentName:"li"},"PascalCase"),"), even if they use the same word (frequent for technical variables like counters)."),(0,o.kt)("li",{parentName:"ol"},"It is in line with the ",(0,o.kt)("a",{parentName:"li",href:"/docs/ssjs/ssjs-style-guide#js-variables-functions--methods-letter-case"},"SSJS styling for variables"),", so it's easier to switch between languages.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/* \u2705 camelCase variable names */\nVAR @response, @salesforceCampaigns, @rowCount\nSET @salesforceCampaigns = RetrieveSalesforceObjects('Campaign', 'Name,Id,StartDate,EndDate', 'IsActive', '=', 'True')\nSET @rowCount = RowCount(@salesforceCampaigns)\n\n/* \u274c lowercase variable names */\nVAR @response, @salesforcecampaigns, @rowcount\nSET @salesforcecampaigns = RetrieveSalesforceObjects('Campaign', 'Name,Id,StartDate,EndDate', 'IsActive', '=', 'True')\nSET @rowcount = RowCount(@salesforcecampaigns)\n\n/* \u274c inconsistent case variable names */\nVAR @RESPONSE, @salesforcecampaigns, @RowCount\nSET @salesforcecampaigns = RetrieveSalesforceObjects('Campaign', 'Name,Id,StartDate,EndDate', 'IsActive', '=', 'True')\nSET @RowCount = RowCount(@salesforcecampaigns)\n")),(0,o.kt)("h4",{id:"ampscript-functions"},"AMPScript Functions"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Use ",(0,o.kt)("inlineCode",{parentName:"strong"},"PascalCase")," for function names.")),(0,o.kt)("p",null,"I use ",(0,o.kt)("inlineCode",{parentName:"p"},"PascalCase")," for AMPScript functions because:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"It is more readable than ",(0,o.kt)("inlineCode",{parentName:"li"},"lowercase")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"UPPERCASE")," - especially for longer names."),(0,o.kt)("li",{parentName:"ol"},"It is easier to differentiate function name (",(0,o.kt)("inlineCode",{parentName:"li"},"PascalCase"),") from the variable name (",(0,o.kt)("inlineCode",{parentName:"li"},"@")," prefix and ",(0,o.kt)("inlineCode",{parentName:"li"},"camelCase"),"), even if they use the same word (frequent for technical variables like counters)."),(0,o.kt)("li",{parentName:"ol"},"It is in line with the ",(0,o.kt)("a",{parentName:"li",href:"/docs/ssjs/ssjs-style-guide#ssjs-functions-letter-case"},"SSJS styling for built-in functions"),", so it's easier to switch between languages.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/* \u2705 PascalCase variable names */\nSET @salesforceCampaigns = RetrieveSalesforceObjects('Campaign', 'Name,Id,StartDate,EndDate', 'IsActive', '=', 'True')\nSET @rowCount = RowCount(@salesforceCampaigns)\n\n/* \u274c lowercase function names */\nSET @salesforceCampaigns = retrievesalesforceobjects('Campaign', 'Name,Id,StartDate,EndDate', 'IsActive', '=', 'True')\nSET @rowCount = rowcount(@salesforceCampaigns)\n\n/* \u274c inconsistent case variable names */\nSET @salesforceCampaigns = retrievesalesforceobjects('Campaign', 'Name,Id,StartDate,EndDate', 'IsActive', '=', 'True')\nSET @rowCount = ROWCOUNT(@salesforceCampaigns)\n")),(0,o.kt)("h4",{id:"ampscript-loops-ifs-and-variable-declarations"},"AMPScript Loops, Ifs and Variable Declarations"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Use ",(0,o.kt)("inlineCode",{parentName:"strong"},"UPPERCASE")," for loops, if blocks and variable declarations.")),(0,o.kt)("p",null,"Although I recommend ",(0,o.kt)("inlineCode",{parentName:"p"},"PascalCase")," for most of the AMPScript syntax, I believe that limited usage of ",(0,o.kt)("inlineCode",{parentName:"p"},"UPPERCASE")," can have tremendous benefit to readability."),(0,o.kt)("p",null,"I use ",(0,o.kt)("inlineCode",{parentName:"p"},"UPPERCASE")," for three groups of elements:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Variable declaration and setting syntax (",(0,o.kt)("inlineCode",{parentName:"li"},"VAR")," & ",(0,o.kt)("inlineCode",{parentName:"li"},"SET"),")."),(0,o.kt)("li",{parentName:"ol"},"If statement syntax (",(0,o.kt)("inlineCode",{parentName:"li"},"IF"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"NOT"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"THEN")," ",(0,o.kt)("inlineCode",{parentName:"li"},"ELSEIF"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"ENDIF")," and also ",(0,o.kt)("inlineCode",{parentName:"li"},"IIF"),")."),(0,o.kt)("li",{parentName:"ol"},"Loop syntax (",(0,o.kt)("inlineCode",{parentName:"li"},"FOR"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"TO"),"/",(0,o.kt)("inlineCode",{parentName:"li"},"DOWNTO"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"DO"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"NEXT"),").")),(0,o.kt)("p",null,"Those three groups are either fundamental data points within your AMPScript code (variables) or the only source of real complexity (",(0,o.kt)("inlineCode",{parentName:"p"},"IF")," statements and ",(0,o.kt)("inlineCode",{parentName:"p"},"FOR")," loops). That's why I recommend improving readability and increasing attention around those parts of the script."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/* \u2705 UPPERCASE for variable desclarations, IF and FOR syntax */\nVAR @response, @salesforceCampaigns, @rowCount, @counter, @row, @name, @id, @startDate, @endDate, @rowData, @response\nSET @salesforceCampaigns = RetrieveSalesforceObjects('Campaign', 'Name,Id,StartDate,EndDate', 'IsActive', '=', 'True')\nSET @rowCount = RowCount(@salesforceCampaigns)\n\nIF @rowCount > 0 THEN\n    FOR @counter = 1 TO @rowCount DO\n        SET @row = Row(@retrieve, @counter)\n        SET @name = Field(@row, 'Name')\n        SET @id = Field(@row, 'Id')\n        SET @startDate = Field(@row, 'StartDate')\n        SET @endDate = Field(@row, 'EndDate')\n        SET @rowData = Concat(@name, ',', @id, ',', @startDate, ',', @endDate)\n        SET @response = Concat(@response, @rowData, ';')\n    NEXT @counter\nENDIF\n\n/* \u274c PascalCase for variable desclarations, IF and FOR syntax */\nVar @response, @salesforceCampaigns, @rowCount, @counter, @row, @name, @id, @startDate, @endDate, @rowData, @response\nSet @salesforceCampaigns = RetrieveSalesforceObjects('Campaign', 'Name,Id,StartDate,EndDate', 'IsActive', '=', 'True')\nSet @rowCount = RowCount(@salesforceCampaigns)\n\nIf @rowCount > 0 Then\n    For @counter = 1 To @rowCount Do\n        Set @row = Row(@retrieve, @counter)\n        Set @name = Field(@row, 'Name')\n        Set @id = Field(@row, 'Id')\n        Set @startDate = Field(@row, 'StartDate')\n        Set @endDate = Field(@row, 'EndDate')\n        Set @rowData = Concat(@name, ',', @id, ',', @startDate, ',', @endDate)\n        Set @response = Concat(@response, @rowData, ';')\n    Next @counter\nEndif\n")),(0,o.kt)("h3",{id:"consistent-quotes"},"Consistent Quotes"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Use single quote style.")),(0,o.kt)("p",null,"With AMPScript, you can use either single quotes (",(0,o.kt)("inlineCode",{parentName:"p"},"'"),") or double quotes (",(0,o.kt)("inlineCode",{parentName:"p"},'"'),"). I prefer the single quotes:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"I frequently use string variables with HTML that uses double quotes. Using single quotes in SSJS means no need to escape the ones in HTML."),(0,o.kt)("li",{parentName:"ol"},"On most keyboard (including mine), it doesn't require pressing Shift each time. Clicking one button is faster.")),(0,o.kt)("p",null,"However, there are many English words using apostrophes, and using double quotes means no need to escape them."),(0,o.kt)("p",null,"In the end, pick one, align with your team, and stay consistent. Yes, this means updating quotes after copy-pasting from Stack Overflow. RegEx is your friend ;)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/* \u2705 Single Quotes */\nSET @salesforceCampaigns = RetrieveSalesforceObjects('Campaign', 'Name,Id,StartDate,EndDate', 'IsActive', '=', 'True')\n\n/* \u274c Mixed Quotes */\nSET @salesforceCampaigns = RetrieveSalesforceObjects(\"Campaign\", 'Name,Id,StartDate,EndDate', \"IsActive\", \"=\", \"True\")\n")),(0,o.kt)("h2",{id:"indentation-and-spacing"},"Indentation and Spacing"),(0,o.kt)("p",null,"Letter case is just one element of syntax convention that helps with readability. Other important ones are indentation and spacing. AMPScript requires neither, but both can help you write better code."),(0,o.kt)("h3",{id:"consistent-indentation"},"Consistent Indentation"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Use indentation to highlight code relationships.")),(0,o.kt)("p",null,"Indentation in AMPScript is even more critical than in SSJS. Without curly brackets, it is the last hope for readability. The indentation will help you quickly understand the relationships between the code lines."),(0,o.kt)("p",null,"It is straightforward to apply the correct indentation to the simplicity of AMPScript. There are just two elements that require it. ",(0,o.kt)("inlineCode",{parentName:"p"},"IF")," statements and ",(0,o.kt)("inlineCode",{parentName:"p"},"FOR")," loops - add indentation level inside of those and get readable code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/* \u2705 Indented Syntax */\nIF @rowCount > 0 THEN\n    FOR @counter = 1 TO @rowCount DO\n        SET @row = Row(@retrieve, @counter)\n        SET @name = Field(@row, 'Name')\n        SET @id = Field(@row, 'Id')\n        SET @startDate = Field(@row, 'StartDate')\n        SET @endDate = Field(@row, 'EndDate')\n        SET @rowData = Concat(@name, ',', @id, ',', @startDate, ',', @endDate)\n        SET @response = Concat(@response, @rowData, ';')\n    NEXT @counter\nENDIF\n\n/* \u274c Flat Syntax */\nIF @rowCount > 0 THEN\nFOR @counter = 1 TO @rowCount DO\nSET @row = Row(@retrieve, @counter)\nSET @name = Field(@row, 'Name')\nSET @id = Field(@row, 'Id')\nSET @startDate = Field(@row, 'StartDate')\nSET @endDate = Field(@row, 'EndDate')\nSET @rowData = Concat(@name, ',', @id, ',', @startDate, ',', @endDate)\nSET @response = Concat(@response, @rowData, ';')\nNEXT @counter\nENDIF\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"You Should Know")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It's safer to use spaces instead of tabs for indentation. And it's more readable to use four spaces instead of two. You can configure your code editor to output four spaces on each Tab click."))),(0,o.kt)("h3",{id:"intentional-spacing"},"Intentional Spacing"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Use spaces wherever it makes the code more readable.")),(0,o.kt)("p",null,"To visually separate elements, use spaces:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Around operators."),(0,o.kt)("li",{parentName:"ul"},"After commas.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/* \u2705 Intentional spacing */\nIF @rowCount > 0 THEN\n    FOR @counter = 1 TO @rowCount DO\n        SET @rowData = Concat(@name, ',', @id, ',', @startDate, ',', @endDate)\n        SET @response = Concat(@response, @rowData, ';')\n    NEXT @counter\nENDIF\n\n/* \u274c Lack of spacing */\nIF @rowCount>0 THEN\n    FOR @counter=1 TO @rowCount DO\n        SET @rowData=Concat(@name,',',@id,',',@startDate,',',@endDate)\n        SET @response=Concat(@response,@rowData,';')\n    NEXT @counter\nENDIF\n")),(0,o.kt)("h2",{id:"comments"},"Comments"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Code tells you how. Comments tell you why.")," - ",(0,o.kt)("a",{parentName:"p",href:"https://blog.codinghorror.com/code-tells-you-how-comments-tell-you-why/"},"Jeff Atwood")),(0,o.kt)("p",null,"To make your code better, don't stop at just the code. Leverage comments to their full potential. Context, logic and caveats description will improve the experience for everyone - including you after few weeks."),(0,o.kt)("p",null,"Whenever you build complex AMPScript code, I recommend using three types of comments: table of contents, section and documentation. For short scripts, the last type will be enough."),(0,o.kt)("h3",{id:"1-table-of-contents-comment"},"1. Table of Contents Comment"),(0,o.kt)("p",null,"The first type of comment you should use at the top of your longer scripts is the table of contents comment. This one will be your best friend during the whole lifecycle of your script."),(0,o.kt)("p",null,"Before writing the AMPScript, describe the desired outcome and all steps you plan to code to get there. It can be high level; it can be a draft. But it will help you focus on the best way to write your script and consider potential roadblocks or opportunities for optimisation."),(0,o.kt)("p",null,"As you are building your script - update the comment to reflect the approach you took. It will help you assess the impact of potential changes and find missing pieces."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/* --------------------------------------------------------------------------\n\nAuthenticates each visitor to limit access only to SFMC logged-in users.\n\n1. Global Variables - should be updated for each implementation\n2. Authentication Flow\n2.1. Authorisation\n2.2. Authentication with REST Token\n2.2.1. Upsert Logging Data Extension\n\n-------------------------------------------------------------------------- */\n")),(0,o.kt)("h3",{id:"2-section-comments"},"2. Section Comments"),(0,o.kt)("p",null,"To fully leverage the pseudo-code table of contents, add section comments to mark where each part of your code starts."),(0,o.kt)("p",null,"For complex scripts, it might be a good idea to create few different levels of such comments. I use upper case with dashes for the first level, title case with dashes for the second level and only title case for the third level of comments"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/* ----------------------------------------------------------------------- */\n/* ------------------------- 1. GLOBAL VARIABLES ------------------------- */\n/* ----------------------------------------------------------------------- */\n\n/* ----------------------------------------------------------------------- */\n/* ----------------------- 2. AUTHENTICATION FLOW ------------------------ */\n/* ----------------------------------------------------------------------- */\n\n/* ------------------------- 2.1. Authorisation -------------------------- */\n\n/* ------------------------- 2.2. Authentication ------------------------- */\n\n/* 2.2.1. Build token request payload */\n")),(0,o.kt)("h3",{id:"3-documentation-comments"},"3. Documentation Comments"),(0,o.kt)("p",null,"Two previous comment types are suitable for high-level view and organisation of your more complex scripts. But the essential type of comment is the one that goes into detail about the implementation - the documentation comments."),(0,o.kt)("p",null,"When to write a comment? My rule of thumb is to add them whenever someone else reading your code for the first time would ask a question about context or purpose."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"    /* Capture Session for Authorisation purposes */\n    SET @session = RequestParameter('s')\n\n    /* ----------------------------------------------------------------------- */\n    /* ----------------------- 2. AUTHENTICATION FLOW ------------------------ */\n    /* ----------------------------------------------------------------------- */\n\n    /* ---------------------- 2.1. Session Validation ------------------------ */\n\n    /* If there is Session parameter, validate it with logging DE*/\n    IF NOT Empty(@session) THEN\n        /* If user was authenticated for another app or if he is not authenticated, redirect to login page */\n        IF Lookup(@authDE, 'appName', 'session', @session) != @appName THEN\n            Redirect(@appURL)\n        ENDIF\n        /* Authenticated users jumps to main code */\n")),(0,o.kt)("h2",{id:"sum-up"},"Sum Up"),(0,o.kt)("p",null,"It is a long article, so let's gather all the recommendations in one place:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Be consistent"),(0,o.kt)("li",{parentName:"ol"},"Strive for readability"),(0,o.kt)("li",{parentName:"ol"},"Use descriptive names to provide context ",(0,o.kt)("a",{parentName:"li",href:"#meaningful-names"},"\ud83d\udd17")),(0,o.kt)("li",{parentName:"ol"},"Use ",(0,o.kt)("inlineCode",{parentName:"li"},"camelCase")," for variable names ",(0,o.kt)("a",{parentName:"li",href:"#ampscript-variable-names"},"\ud83d\udd17")),(0,o.kt)("li",{parentName:"ol"},"Use ",(0,o.kt)("inlineCode",{parentName:"li"},"PascalCase")," for function names ",(0,o.kt)("a",{parentName:"li",href:"#ampscript-functions"},"\ud83d\udd17")),(0,o.kt)("li",{parentName:"ol"},"Use ",(0,o.kt)("inlineCode",{parentName:"li"},"UPPERCASE")," for loops, if blocks and variable declarations ",(0,o.kt)("a",{parentName:"li",href:"#ampscript-loops-ifs-and-variable-declarations"},"\ud83d\udd17")),(0,o.kt)("li",{parentName:"ol"},"Use single quote style ",(0,o.kt)("a",{parentName:"li",href:"#consistent-quotes"},"\ud83d\udd17")),(0,o.kt)("li",{parentName:"ol"},"Use indentation to highlight code relationships ",(0,o.kt)("a",{parentName:"li",href:"#consistent-indentation"},"\ud83d\udd17")),(0,o.kt)("li",{parentName:"ol"},"Use spaces wherever it makes the code more readable ",(0,o.kt)("a",{parentName:"li",href:"#intentional-spacing"},"\ud83d\udd17")),(0,o.kt)("li",{parentName:"ol"},"Use comments to provide required context to your script ",(0,o.kt)("a",{parentName:"li",href:"#comments"},"\ud83d\udd17"))),(0,o.kt)("p",null,"If you want to share something I'm missing or have arguments for a different recommendation - ",(0,o.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/mateusz-dabrowski-marketing/"},"let me know"),"."),(0,o.kt)("p",null,"Looking for more Marketing Cloud style? Check out my:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/ssjs/ssjs-style-guide"},"SFMC SSJS Style Guide")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/sql/sfmc-sql-style-guide"},"SFMC SQL Style Guide"))))}u.isMDXComponent=!0}}]);