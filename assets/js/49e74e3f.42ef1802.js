(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{121:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return p}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=b(a),m=n,p=d["".concat(r,".").concat(m)]||d[m]||u[m]||i;return a?o.a.createElement(p,l(l({ref:t},s),{},{components:a})):o.a.createElement(p,l({ref:t},s))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var s=2;s<i;s++)r[s]=a[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},122:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0),o=a(57),i=a.n(o);const r=({content:e})=>n.createElement(n.Fragment,null,n.createElement("p",{id:i.a.leadText},e))},89:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(3),o=a(8),i=(a(0),a(121)),r=a(122),l={id:"ideas",title:"Ideas",description:"Here you can find all my Salesforce IdeaExchange contributions. Let's make the change!"},c={unversionedId:"ideas",id:"ideas",isDocsHomePage:!1,title:"Ideas",description:"Here you can find all my Salesforce IdeaExchange contributions. Let's make the change!",source:"@site/sites/ideas.mdx",slug:"/ideas",permalink:"/sites/ideas",editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/sites/ideas.mdx",version:"current",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1617867177,formattedLastUpdatedAt:"4/8/2021"},s=[{value:"Journey Builder",id:"journey-builder",children:[{value:"DeliveryTime for Journey Builder emails",id:"deliverytime-for-journey-builder-emails",children:[]},{value:"_DataSourceName for Entry Data Extension in Journey Builder",id:"_datasourcename-for-entry-data-extension-in-journey-builder",children:[]}]},{value:"Behavioral Triggers",id:"behavioral-triggers",children:[{value:"Einstein User Attributes in Behavioral Trigger Content Block",id:"einstein-user-attributes-in-behavioral-trigger-content-block",children:[]},{value:"Link Tracking in Behavioral Trigger Content Block",id:"link-tracking-in-behavioral-trigger-content-block",children:[]},{value:"Behavioral Trigger Abandoned Cart Custom Attributes",id:"behavioral-trigger-abandoned-cart-custom-attributes",children:[]},{value:"Behavioral Trigger Content Block rendering on Yahoo, AOL, Windows Outlook",id:"behavioral-trigger-content-block-rendering-on-yahoo-aol-windows-outlook",children:[]}]},{value:"Mobile Studio",id:"mobile-studio",children:[{value:"Locale-based SMS Blackout",id:"locale-based-sms-blackout",children:[]}]}],b={toc:s};function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(r.a,{content:"Here you can find all my Salesforce IdeaExchange contributions. Let's make the change!",mdxType:"LeadText"}),Object(i.b)("h2",{id:"journey-builder"},"Journey Builder"),Object(i.b)("h3",{id:"deliverytime-for-journey-builder-emails"},"DeliveryTime for Journey Builder emails"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"DeliveryTime")," is ",Object(i.b)("a",{parentName:"p",href:"../docs/config/sfmc-config-system-data-views#_job"},Object(i.b)("inlineCode",{parentName:"a"},"_Job")," Data View")," field that stores timestamp for the email delivery (the moment when it successfully reached the target Email Service Provider). It is currently impossible to get delivery time for emails sent via Journey Builder."),Object(i.b)("p",null,"All other engagement data points are available (",Object(i.b)("inlineCode",{parentName:"p"},"EventDate")," field for ",Object(i.b)("a",{parentName:"p",href:"../docs/config/sfmc-config-system-data-views#_sent"},"_Sent"),", ",Object(i.b)("a",{parentName:"p",href:"../docs/config/sfmc-config-system-data-views#_open"},"_Open"),", ",Object(i.b)("a",{parentName:"p",href:"../docs/config/sfmc-config-system-data-views#_click"},"_Click"),", ",Object(i.b)("a",{parentName:"p",href:"../docs/config/sfmc-config-system-data-views#_bounce"},"_Bounce"),") but ",Object(i.b)("inlineCode",{parentName:"p"},"DeliveryTime")," from ",Object(i.b)("a",{parentName:"p",href:"../docs/config/sfmc-config-system-data-views#_job"},Object(i.b)("inlineCode",{parentName:"a"},"_Job")," Data View")," returns ",Object(i.b)("inlineCode",{parentName:"p"},"NULL")," for Journey Builder emails."),Object(i.b)("p",null,"It is happening, however, only for Journey Builder emails. Sends via any other methods (for example Send Flow) are correctly displaying the delivery time."),Object(i.b)("p",null,"I see it as a massive limitation for automations focused on keeping the database clean and debugging sends."),Object(i.b)("a",{class:"button button--outline button--lg button--primary col col--6 col--offset-3",href:"https://trailblazer.salesforce.com/ideaView?id=0874V000001HkZgQAK"},"Vote on IdeaExchange"),Object(i.b)("h3",{id:"_datasourcename-for-entry-data-extension-in-journey-builder"},"_DataSourceName for Entry Data Extension in Journey Builder"),Object(i.b)("p",null,"As per the ",Object(i.b)("a",{parentName:"p",href:"https://help.salesforce.com/articleView?id=mc_es_available_personalization_strings.htm&type=5"},"documentation"),", ",Object(i.b)("inlineCode",{parentName:"p"},"_DataSourceName")," personalisation string should show the communication audience's name. It covers lists, data extensions, groups, and filters."),Object(i.b)("p",null,"It works when the email is sent via Email Studio -> Email -> Content -> Send flow. However, when we send Email (or SMS) from Journey Builder, ",Object(i.b)("inlineCode",{parentName:"p"},"_DataSourceName"),' shows "All Subscribers" instead of the Entry Data Extension name. It is true for both Multi-Step Journeys, and Single Email Sends.'),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"_DataSourceName")," should show Entry Data Extension Name for Emails in Journey Builder. It is handy for debugging from Send Log and creating dynamic logic in emails based on Data Extension naming convention."),Object(i.b)("a",{class:"button button--outline button--lg button--primary col col--6 col--offset-3",href:"https://trailblazer.salesforce.com/ideaView?id=0874V000001HkZRQA0"},"Vote on IdeaExchange"),Object(i.b)("hr",null),Object(i.b)("h2",{id:"behavioral-triggers"},"Behavioral Triggers"),Object(i.b)("h3",{id:"einstein-user-attributes-in-behavioral-trigger-content-block"},"Einstein User Attributes in Behavioral Trigger Content Block"),Object(i.b)("p",null,"The ",Object(i.b)("a",{parentName:"p",href:"../docs/config/sfmc-config-behavioral-triggers#behavioral-trigger-content-block"},"Behavioral Triggers Content Block")," for Emails is an excellent tool for easy drag-and-drop creation of Abandoned Engagement communication. But it is missing one powerful feature \u2014 the ability to personalise the email with customer data."),Object(i.b)("p",null,"It is already available in the form of:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Einstein User Attributes that we can pass through ",Object(i.b)("inlineCode",{parentName:"li"},"setUserInfo")," data layer."),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("a",{parentName:"li",href:"../docs/config/sfmc-config-behavioral-triggers#5-building-the-api-query"},"request"),' used in the back end of the current Behavioral Triggers Content Block; by adding "&user_attributes=attributeName" to the endpoint.'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"../docs/config/sfmc-config-behavioral-triggers#6-response-parsing"},"Code")," of the existing Behavioral Triggers Content Block responsible for creating AMPScript variables based on the Einstein User Attributes data.")),Object(i.b)("p",null,"However, as the Einstein User Attributes are neither added to the request by default nor can be configured in the User Integrace of the Content Block, to get this data in the email, one must create yet another, the same call with the above query parameter added. Neither user friendly nor optimal due to expensive ",Object(i.b)("inlineCode",{parentName:"p"},"HTTP.Get")," function running twice in such a scenario."),Object(i.b)("p",null,"Salesforce can fix it. Below are two solution tiers:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Minimum Valuable Solution"),': Add the required query string ("&user_attributes=X,Y") with all potential Custom Einsteins User Attributes to the request URL built within the Content Block code.'),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Solution Deluxe"),": Improve the above with the UI-enabled selection of needed Profile Attributes, just as available with Product Attributes.")),Object(i.b)("a",{class:"button button--outline button--lg button--primary col col--6 col--offset-3",href:"https://trailblazer.salesforce.com/ideaView?id=0874V0000003lB7QAI"},"Vote on IdeaExchange"),Object(i.b)("h3",{id:"link-tracking-in-behavioral-trigger-content-block"},"Link Tracking in Behavioral Trigger Content Block"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"../docs/config/sfmc-config-behavioral-triggers#behavioral-trigger-content-block"},"Behavioral Triggers Content Block")," allows for easy out-of-the-box use of abandoned engagement data in our Emails. It neatly pulls the Catalog items that captivated the customer's attention and displays them for win-back purposes. Of course, each item links back to its e-commerce page."),Object(i.b)("p",null,"Its implementation is, however, leading to a problem with tracking. My favourite solution - Parameter Manager with Web Analytics Connector - is not working on the Behavioral Trigger Content Block. Neither can we add the tracking parameters manually, as there is no such option in the UI."),Object(i.b)("p",null,"Right now, there are only two ways to add the UTM's:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Add them to the Catalog directly - this adds them for all scenarios connected to Einstein or Behavioral Triggers. Not useful, as in most cases, we want to differentiate various personalisation placements by using distinct UTM tracking."),Object(i.b)("li",{parentName:"ol"},"Create a Custom Behavioral Trigger Content Block - now we will be able to leverage direct links from ",Object(i.b)("inlineCode",{parentName:"li"},"IGO_PRODUCTATTRIBS")," add tracking to them in the product's HTML template. Okay, but not easy and make you loose click data for Einstein Recommendations.")),Object(i.b)("p",null,"Salesforce can fix it. Below are two possible solutions:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Minimum Valuable Solution"),": Add a text box to a Behavioral Trigger Content Block configuration menu to add our custom tracking. The Content Block should apply the provided tracking query to each link. AMPScript support included."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Solution Deluxe"),": On top of the above solution, Marketing Cloud should consider the Parameter Management to allow for a mix of global UTM's from Web Analytics Connector and local from the new text box in Behavioral Trigger Content Block configuration.")),Object(i.b)("a",{class:"button button--outline button--lg button--primary col col--6 col--offset-3",href:"https://trailblazer.salesforce.com/ideaView?id=0874V000000UKBJQA4"},"Vote on IdeaExchange"),Object(i.b)("h3",{id:"behavioral-trigger-abandoned-cart-custom-attributes"},"Behavioral Trigger Abandoned Cart Custom Attributes"),Object(i.b)("p",null,"The ",Object(i.b)("a",{parentName:"p",href:"../docs/config/sfmc-config-behavioral-triggers"},"Behavioral Triggers")," are a terrific solution for Abandoned Engagement. The ",Object(i.b)("a",{parentName:"p",href:"../docs/config/sfmc-config-behavioral-triggers#track-cart"},"Abandoned Cart")," scenario already has multiple great features that make it easy to implement."),Object(i.b)("p",null,"There is, however, area for an easy improvement on that idea to make it much more flexible and ready for real-world scenarios. Salesforce can do it with two solutions:"),Object(i.b)("h4",{id:"custom-cart-attributes"},"Custom Cart Attributes"),Object(i.b)("p",null,"Just as there are Custom Attributes for the Product Catalog, it would be great to have a similar option on the cart itself. Product Catalog ones are global - shared for all Customers interested in selected product. There is a need for something more unique and customer-specific."),Object(i.b)("p",null,"It is already available in the form of an optional ",Object(i.b)("inlineCode",{parentName:"p"},"price")," attribute of ",Object(i.b)("a",{parentName:"p",href:"../docs/config/sfmc-config-behavioral-triggers#track-cart"},Object(i.b)("inlineCode",{parentName:"a"},"trackCart")," Collect.js Data Layer")," that contains individual price that does not impact the Product Catalog.  It would be great to have the possibility to add a few more, available in ",Object(i.b)("a",{parentName:"p",href:"../docs/config/sfmc-config-behavioral-triggers#track-cart"},Object(i.b)("inlineCode",{parentName:"a"},"trackCart")," Collect.js")," and the ",Object(i.b)("a",{parentName:"p",href:"../docs/config/sfmc-config-behavioral-triggers#api-responses"},"response")," from Einstein Backend (IgoDigital)."),Object(i.b)("p",null,"Use case? Sure. Coupon Code Name, Coupon Code Discount (either integer or float for per cent value), added Personalisation, Voucher ID. All those tools are frequently used in e-commerce and would be perfect for a ",Object(i.b)("inlineCode",{parentName:"p"},"trackCart")," layer. Suitable for personalisation, perfect for passing data needed for rebuilding the cart."),Object(i.b)("h4",{id:"cart-attributes-visibility-in-the-content-block"},"Cart Attributes Visibility in the Content Block"),Object(i.b)("p",null,"This one is an extension of the above idea. We already have a way to decide which Product Catalog Attributes are displayed in Behavioral Trigger Content Block. But in many cases, when I use Abandoned Cart, I would like to show ",Object(i.b)("inlineCode",{parentName:"p"},"trackCart")," individual price (including applied coupons) instead of the global Catalog one. It could also be useful for some Custom Cart Attributes from the previous solution."),Object(i.b)("p",null,"Below are three solution tiers:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Minimum Valuable Solution"),": Add ",Object(i.b)("inlineCode",{parentName:"li"},"price")," ",Object(i.b)("inlineCode",{parentName:"li"},"trackCart")," attribute (",Object(i.b)("inlineCode",{parentName:"li"},"amount")," in the ",Object(i.b)("a",{parentName:"li",href:"../docs/config/sfmc-config-behavioral-triggers#api-responses"},"response")," from the IgoDigital) available for selection when defining fields shown for products in ",Object(i.b)("a",{parentName:"li",href:"../docs/config/sfmc-config-behavioral-triggers#behavioral-trigger-content-block"},"Behavioral Trigger Content Block"),"."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Nice Solution"),": On top of the first point, add two additional (optional) attributes to ",Object(i.b)("inlineCode",{parentName:"li"},"trackCart")," Collect.js and IgoDigital ",Object(i.b)("a",{parentName:"li",href:"../docs/config/sfmc-config-behavioral-triggers#api-responses"},"response"),": ",Object(i.b)("inlineCode",{parentName:"li"},"couponCodeName"),", ",Object(i.b)("inlineCode",{parentName:"li"},"couponCodeDiscount "),"- and make them also available for selection in ",Object(i.b)("a",{parentName:"li",href:"../docs/config/sfmc-config-behavioral-triggers#behavioral-trigger-content-block"},"Behavioral Trigger Content Block"),"."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Solution Deluxe"),": On top of the first point, add the possibility of defining Custom Cart Attributes in the UI and leveraging them in ",Object(i.b)("inlineCode",{parentName:"li"},"trackCart")," Collect.js and IgoDigital ",Object(i.b)("a",{parentName:"li",href:"../docs/config/sfmc-config-behavioral-triggers#api-responses"},"response"),". Just as with Custom Profile Attributes / Custom Product Attributes. Additionally, make them also available for selection in ",Object(i.b)("a",{parentName:"li",href:"../docs/config/sfmc-config-behavioral-triggers#behavioral-trigger-content-block"},"Behavioral Trigger Content Block"),".")),Object(i.b)("a",{class:"button button--outline button--lg button--primary col col--6 col--offset-3",href:"https://trailblazer.salesforce.com/ideaView?id=0874V0000003lCKQAY"},"Vote on IdeaExchange"),Object(i.b)("h3",{id:"behavioral-trigger-content-block-rendering-on-yahoo-aol-windows-outlook"},"Behavioral Trigger Content Block rendering on Yahoo, AOL, Windows Outlook"),Object(i.b)("p",null,"The current version of Behavioral Trigger Content Block is not rendering correctly on Yahoo, AOL and Windows Outlook. On those Email Providers, the product text is not displayed, and the customer only sees the images."),Object(i.b)("p",null,"The reason for this is using ",Object(i.b)("inlineCode",{parentName:"p"},"rem")," units font-size for product descriptions - ",Object(i.b)("inlineCode",{parentName:"p"},"font-size: 0.8125rem"),":"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},'<td class="mcbt_name" style="padding: 0; font-size: 0.8125rem; padding-top: 10px; text-align: center; width: 100%; max-width: 310px;">--name--</td>')),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"rem")," units are currently not supported by Yahoo, AOL and Windows Outlook (",Object(i.b)("a",{parentName:"p",href:"https://www.caniemail.com/features/css-unit-rem/"},"Can I Email"),") which leads to those Email Providers ignoring this parameter. When this happens, the font-size value is inherited from the parent that have font-size configured."),Object(i.b)("p",null,"And for Behavioral Trigger Content block that parent is a ",Object(i.b)("inlineCode",{parentName:"p"},"<td>")," parameter within header ",Object(i.b)("a",{parentName:"p",href:"../docs/config/sfmc-config-behavioral-triggers#3-settings--markup-fragments"},Object(i.b)("inlineCode",{parentName:"a"},"markupFragment")),". Unfortunately, it has ",Object(i.b)("inlineCode",{parentName:"p"},"font-size: 0"),":"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},'<td class="multi-column" style="padding: 0; text-align: center; font-size: 0; padding-top: 10px; padding-bottom: 10px;">')),Object(i.b)("p",null,"There should be no ",Object(i.b)("inlineCode",{parentName:"p"},"rem")," units used in the Behavioral Trigger Content Block code and instead a standard ",Object(i.b)("inlineCode",{parentName:"p"},"px")," font-size assignment for the Block to render correctly."),Object(i.b)("a",{class:"button button--outline button--lg button--primary col col--6 col--offset-3",href:"https://trailblazer.salesforce.com/ideaView?id=0874V000000UKIKQA4"},"Vote on IdeaExchange"),Object(i.b)("hr",null),Object(i.b)("h2",{id:"mobile-studio"},"Mobile Studio"),Object(i.b)("h3",{id:"locale-based-sms-blackout"},"Locale-based SMS Blackout"),Object(i.b)("p",null,"SMS Blackout allows blocking SMS sends in the chosen timeframe. Currently, SMS Blackout can be configured based on Account Timezone."),Object(i.b)("p",null,"However, it would be much better for multi-country clients to configure the Blackout period based on the recipient's local timezone. MobilePhone locale is perfect for implementing this."),Object(i.b)("p",null,"This way, it would be possible to create, for example, single SMS Blackout for night time and apply it for each contact regardless of the timezone. The locale is already there for MobileConnect and can be leveraged for determining timezone offset."),Object(i.b)("a",{class:"button button--outline button--lg button--primary col col--6 col--offset-3",href:"https://trailblazer.salesforce.com/ideaView?id=0874V000000sjSYQAY"},"Vote on IdeaExchange"))}d.isMDXComponent=!0}}]);