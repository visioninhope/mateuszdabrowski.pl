(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{78:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return d})),r.d(t,"default",(function(){return m}));var n=r(2),a=r(6),o=(r(0),r(86)),s=r(91),i=r(92),c=r(87),u={id:"wsproxy",title:"WSProxy Basics"},l={unversionedId:"ssjs/wsproxy",id:"ssjs/wsproxy",isDocsHomePage:!1,title:"WSProxy Basics",description:"Simple Object Access Protocol is one of the most popular ways of for exchanging structured information. It's old. It's complex. It's hard to wrap head around quickly. Most of the modern web uses REST API (more about it in a minute). But SOAP is still alive in a lot of places. Salesforce Marketing Cloud included. Sort of.",source:"@site/docs/ssjs/wsproxy.mdx",permalink:"/docs/ssjs/wsproxy",editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/docs/ssjs/wsproxy.mdx",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1595956064},d=[{value:"WSProxy and SOAP",id:"wsproxy-and-soap",children:[]}],b={rightToc:d};function m(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)(c.a,{content:"Make SOAP API great again!",mdxType:"LeadText"}),Object(o.b)("p",null,"Simple Object Access Protocol is one of the most popular ways of for exchanging structured information. It's old. It's complex. It's hard to wrap head around quickly. Most of the modern web uses REST API (more about it in a minute). But SOAP is still alive in a lot of places. Salesforce Marketing Cloud included. Sort of."),Object(o.b)("p",null,"As far as SFMC is still using ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/web_service_guide.htm",title:"SFMC SOAP API Official Documentation"}),"SOAP API"),", it is in freeze mode. Not actively developed (officialy) as focus is put on extending the scope of the REST API. But right now we are in this weird transitional period, when some features of Marketing Cloud are accessible with the SOAP, some with the REST. And some with both, even when official documentation disagree (for example undocumented ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://gortonington.com/creating-a-triggered-automation-in-sfmc-via-rest-api/",title:'Blog post by Gregory "Gortonigton" Gifford'}),"Automation Endpoint"),"). When we can expect fully RESTful SFMC? Recent launch of the WSProxy should be enough for an answer. Let's dive in why."),Object(o.b)("h2",{id:"wsproxy-and-soap"},"WSProxy and SOAP"),Object(o.b)("p",null,"What is WSProxy? It's a SSJS wrapper around the bad and ugly of the SOAP API. And it is absolutely wonderful. One code comparision is worth thousand words."),Object(o.b)(s.a,{defaultValue:"soap",values:[{label:"SOAP API Call",value:"soap"},{label:"Standard SSJS SOAP Call",value:"ssjs"},{label:"WSProxy SOAP Call",value:"wsproxy"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"soap",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml",metastring:'title="Send a Triggered Send Email with SOAP"',title:'"Send',a:!0,Triggered:!0,Send:!0,Email:!0,with:!0,'SOAP"':!0}),'<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"\n                  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n                  xmlns:xsd="http://www.w3.org/2001/XMLSchema"\n                  xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing"\n                  xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"\n                  xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">\n    <soapenv:Header>\n        <wsse:Security soapenv:mustUnderstand="1">\n            <wsse:UsernameToken>\n                <wsse:Username>username</wsse:Username>\n                <wsse:Password>password</wsse:Password>\n            </wsse:UsernameToken>\n        </wsse:Security>\n    </soapenv:Header>\n    <soapenv:Body>\n        <CreateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">\n            <Objects xsi:type="TriggeredSend">\n                <PartnerKey xsi:nil="true"/>\n                <ObjectID xsi:nil="true"/>\n                <TriggeredSendDefinition>\n                    <PartnerKey xsi:nil="true"/>\n                    <ObjectID xsi:nil="true"/>\n                    <CustomerKey>Definition_Key</CustomerKey>\n                </TriggeredSendDefinition>\n                <Subscribers>\n                    <PartnerKey xsi:nil="true"/>\n                    <ObjectID xsi:nil="true"/>\n                    <EmailAddress>aruiz@example.com</EmailAddress>\n                    <SubscriberKey>aruiz@example.com</SubscriberKey>\n                    <Attributes>\n                        <Name>FirstName</Name>\n                        <ValueMateuszValue>\n                    </Attributes>\n                    <Attributes>\n                        <Name>LastName</Name>\n                        <Value>D\u0105browski</Value>\n                    </Attributes>\n                    <Attributes>\n                        <Name>PurchasedItemName</Name>\n                        <Value>Exway Flex</Value>\n                    </Attributes>\n                    <Attributes>\n                        <Name>PurchasedItemDeliveryDate</Name>\n                        <Value>27/07/2020</Value>\n                    </Attributes>\n                    <Attributes>\n                        <Name>PurchasedItemTracingCode</Name>\n                        <Value>Q1W2E3R4T5Y6</Value>\n                    </Attributes>\n                </Subscribers>\n            </Objects>\n        </CreateRequest>\n    </soapenv:Body>\n</soapenv:Envelope>\n'))),Object(o.b)(i.a,{value:"ssjs",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html",metastring:'title="Send a Triggered Send Email with SSJS"',title:'"Send',a:!0,Triggered:!0,Send:!0,Email:!0,with:!0,'SSJS"':!0}),'<script runat="server">\n    Platform.Load("core","1");\n\n    var triggeredSendKey = 123456;\n    var emailAddress = "sendme@triggered.send";\n    var subscriberKey = "ABC-123-XYZ-890";\n    var firstName = "Mateusz";\n    var lastName = "D\u0105browski";\n    var purchasedItemName = "Exway Flex"\n    var purchasedItemDeliveryDate = "27/07/2020"\n    var purchasedItemTrackingCode = "Q1W2E3R4T5Y6";\n\n    var triggeredSend = Platform.Function.CreateObject(\'TriggeredSend\');\n\n    var triggeredSendDefinition = Platform.Function.CreateObject("TriggeredSendDefinition");\n    Platform.Function.SetObjectProperty(triggeredSendDefinition, "CustomerKey", triggeredSendKey);\n    Platform.Function.SetObjectProperty(triggeredSend, "TriggeredSendDefinition", triggeredSendDefinition);\n\n    var subsciber = Platform.Function.CreateObject("Subscriber");\n    Platform.Function.SetObjectProperty(subscriber, "EmailAddress", emailAddress);\n    Platform.Function.SetObjectProperty(subscriber, "SubscriberKey", subscriberKey);\n\n    var attribute = Platform.Function.CreateObject("Attribute");\n    Platform.Function.SetObjectProperty(attribute, "Name", "FirstName");\n    Platform.Function.SetObjectProperty(attribute, "Value", firstName);\n    Platform.Function.AddObjectArrayItem(subscriber, "Attributes", attribute);\n\n    attribute = Platform.Function.CreateObject("Attribute");\n    Platform.Function.SetObjectProperty(attribute, "Name", "LastName");\n    Platform.Function.SetObjectProperty(attribute, "Value", lastName);\n    Platform.Function.AddObjectArrayItem(subscriber, "Attributes", attribute);\n\n    attribute = Platform.Function.CreateObject("Attribute");\n    Platform.Function.SetObjectProperty(attribute, "Name", "PurchasedItemName");\n    Platform.Function.SetObjectProperty(attribute, "Value", purchasedItemName);\n    Platform.Function.AddObjectArrayItem(subscriber, "Attributes", attribute);\n\n    attribute = Platform.Function.CreateObject("Attribute");\n    Platform.Function.SetObjectProperty(attribute, "Name", "PurchasedItemDeliveryDate");\n    Platform.Function.SetObjectProperty(attribute, "Value", purchasedItemDeliveryDate);\n    Platform.Function.AddObjectArrayItem(subscriber, "Attributes", attribute);\n\n    attribute = Platform.Function.CreateObject("Attribute");\n    Platform.Function.SetObjectProperty(attribute, "Name", "PurchasedItemTracingCode");\n    Platform.Function.SetObjectProperty(attribute, "Value", purchasedItemTrackingCode);\n    Platform.Function.AddObjectArrayItem(subscriber, "Attributes", attribute);\n\n    Platform.Function.AddObjectArrayItem(triggeredSend, "Subscribers", subscriber);\n\n    var statusAndReustID = [0, 0];\n\n    vat response = Platform.Function.InvokeCreate(triggeredSend, statusAndReustID, null);\n<\/script>\n'))),Object(o.b)(i.a,{value:"wsproxy",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html",metastring:'title="Send a Triggered Send Email with WSProxy"',title:'"Send',a:!0,Triggered:!0,Send:!0,Email:!0,with:!0,'WSProxy"':!0}),"")))),Object(o.b)("p",null,"Topics to cover:\nWhat is WSProxy (no Core)\nSOAP API documentation: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/web_service_guide.htm"}),"https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/web_service_guide.htm"),"\nHow to translate SOAP envelope to WSProxy\nOperations"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create"),Object(o.b)("li",{parentName:"ul"},"Retrieve\netc.\nItem vs Batch")))}m.isMDXComponent=!0},86:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return p}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,p=d["".concat(s,".").concat(m)]||d[m]||b[m]||o;return r?a.a.createElement(p,i(i({ref:t},u),{},{components:r})):a.a.createElement(p,i({ref:t},u))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},87:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(0),a=r.n(n),o=r(48),s=r.n(o);const i=({content:e})=>a.a.createElement(a.a.Fragment,null,a.a.createElement("p",{id:s.a.leadText},e))},88:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}},89:function(e,t,r){"use strict";var n=r(0);const a=Object(n.createContext)(void 0);t.a=a},90:function(e,t,r){"use strict";var n=r(0),a=r(89);t.a=function(){const e=Object(n.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},91:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(90),s=r(88),i=r(49),c=r.n(i);const u=37,l=39;t.a=function(e){const{block:t,children:r,defaultValue:i,values:d,groupId:b}=e,{tabGroupChoices:m,setTabGroupChoices:p}=Object(o.a)(),[f,y]=Object(n.useState)(i),[g,O]=Object(n.useState)(!1);if(null!=b){const e=m[b];null!=e&&e!==f&&d.some(t=>t.value===e)&&y(e)}const S=e=>{y(e),null!=b&&p(b,e)},P=[],w=e=>{e.metaKey||e.altKey||e.ctrlKey||O(!0)},h=()=>{O(!1)};return Object(n.useEffect)(()=>{window.addEventListener("keydown",w),window.addEventListener("mousedown",h)},[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":t})},d.map(({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===e,className:Object(s.a)("tabs__item",c.a.tabItem,{"tabs__item--active":f===e}),style:g?{}:{outline:"none"},key:e,ref:e=>P.push(e),onKeyDown:e=>{((e,t,r)=>{switch(r.keyCode){case l:((e,t)=>{const r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()})(e,t);break;case u:((e,t)=>{const r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()})(e,t)}})(P,e.target,e),w(e)},onFocus:()=>S(e),onClick:()=>{S(e),O(!1)},onPointerDown:()=>O(!1)},t))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(r).filter(e=>e.props.value===f)[0]))}},92:function(e,t,r){"use strict";var n=r(0),a=r.n(n);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);