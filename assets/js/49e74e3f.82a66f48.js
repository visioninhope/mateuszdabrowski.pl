"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[1598],{4137:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var o=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,i=function(e,t){if(null==e)return{};var a,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(a),h=i,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||n;return a?o.createElement(m,r(r({ref:t},d),{},{components:a})):o.createElement(m,r({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,r=new Array(n);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<n;c++)r[c]=a[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},982:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=a(7462),i=(a(7294),a(4137)),n=a(1872);const r={id:"ideas",title:"Ideas",description:"Here you can find all my Salesforce IdeaExchange contributions. Let's make the change!",image:"img/og/og-image-ideas.png"},l=void 0,s={unversionedId:"ideas",id:"ideas",title:"Ideas",description:"Here you can find all my Salesforce IdeaExchange contributions. Let's make the change!",source:"@site/sites/ideas.mdx",sourceDirName:".",slug:"/ideas",permalink:"/sites/ideas",draft:!1,editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/sites/ideas.mdx",tags:[],version:"current",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1648418534,formattedLastUpdatedAt:"Mar 27, 2022",frontMatter:{id:"ideas",title:"Ideas",description:"Here you can find all my Salesforce IdeaExchange contributions. Let's make the change!",image:"img/og/og-image-ideas.png"}},c={},d=[{value:"Mobile Studio",id:"mobile-studio",level:2},{value:"Locale-based SMS Blackout",id:"locale-based-sms-blackout",level:3},{value:"Web Studio",id:"web-studio",level:2},{value:"Cloud Page Favicon &amp; Open Graph Management",id:"cloud-page-favicon--open-graph-management",level:3},{value:"Journey Builder",id:"journey-builder",level:2},{value:"DeliveryTime for Journey Builder emails",id:"deliverytime-for-journey-builder-emails",level:3},{value:"_DataSourceName for Entry Data Extension in Journey Builder",id:"_datasourcename-for-entry-data-extension-in-journey-builder",level:3},{value:"Journey Builder Script Activity",id:"journey-builder-script-activity",level:3},{value:"Behavioral Triggers",id:"behavioral-triggers",level:2},{value:"Einstein User Attributes in Behavioral Trigger Content Block",id:"einstein-user-attributes-in-behavioral-trigger-content-block",level:3},{value:"Link Tracking in Behavioral Trigger Content Block",id:"link-tracking-in-behavioral-trigger-content-block",level:3},{value:"Behavioral Trigger Abandoned Cart Custom Attributes",id:"behavioral-trigger-abandoned-cart-custom-attributes",level:3},{value:"Custom Cart Attributes",id:"custom-cart-attributes",level:4},{value:"Cart Attributes Visibility in the Content Block",id:"cart-attributes-visibility-in-the-content-block",level:4},{value:"Behavioral Trigger Content Block rendering on Yahoo, AOL, Windows Outlook",id:"behavioral-trigger-content-block-rendering-on-yahoo-aol-windows-outlook",level:3},{value:"Content Builder",id:"content-builder",level:2},{value:"Content Builder Shared Folders Permissions",id:"content-builder-shared-folders-permissions",level:3}],u={toc:d};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(n.m,{content:"Here you can find all my Salesforce IdeaExchange contributions. Let's make the change!",mdxType:"LeadText"}),(0,i.kt)("h2",{id:"mobile-studio"},"Mobile Studio"),(0,i.kt)("h3",{id:"locale-based-sms-blackout"},"Locale-based SMS Blackout"),(0,i.kt)("p",null,"SMS Blackout allows blocking SMS sends in the chosen timeframe. Currently, SMS Blackout can be configured based on Account Timezone."),(0,i.kt)("p",null,"However, it would be much better for multi-country clients to configure the Blackout period based on the recipient's local timezone. MobilePhone locale is perfect for implementing this."),(0,i.kt)("p",null,"This way, it would be possible to create, for example, a single SMS Blackout for nighttime and apply it for each contact regardless of the timezone. The locale is already there for MobileConnect and can be leveraged for determining timezone offset."),(0,i.kt)("a",{class:"button button--outline button--lg button--primary col col--6 col--offset-3",href:"https://trailblazer.salesforce.com/ideaView?id=0874V000000sjSYQAY"},"Vote on IdeaExchange"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"web-studio"},"Web Studio"),(0,i.kt)("h3",{id:"cloud-page-favicon--open-graph-management"},"Cloud Page Favicon & Open Graph Management"),(0,i.kt)("p",null,"Currently the only option to manage ",(0,i.kt)("inlineCode",{parentName:"p"},"<meta>")," elements in Web Studio is to code them manually on each Cloud Page. This is creating a lot of workload and is an error prone process."),(0,i.kt)("p",null,"While many ",(0,i.kt)("inlineCode",{parentName:"p"},"<meta>")," tags are Cloud Page specific and this is not that big of a problem, there are some that could be shared:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Favicon - not only it could be shared by all Cloud Pages, but now it's not even possible to upload one in .ico format to Content Builder."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"og:image"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"twitter:image")," - having possibility to set a default one (with possibility to overwrite for a specific page) would greatly improve the UX of social shared Cloud Pages - even just putting a nice company logo would make sharing lead or whitepaper forms look so much nicer and trigger better engagement.")),(0,i.kt)("p",null,"This could be easily improved by Salesforce by implementing one of two options:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"[",(0,i.kt)("strong",{parentName:"li"},"Minimum Valuable Solution"),"]"," Global configuration for Web Studio where one can upload a favicon and ",(0,i.kt)("inlineCode",{parentName:"li"},"og:image"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"twitter:image")," and have it applied to all Cloud Pages"),(0,i.kt)("li",{parentName:"ol"},"[",(0,i.kt)("strong",{parentName:"li"},"Solution Deluxe"),"]"," Possibility to upload multiple favicons and ",(0,i.kt)("inlineCode",{parentName:"li"},"og:images"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"twitter:images")," and use a picklist option on Cloud Page level to select the one that should be used.")),(0,i.kt)("p",null,"Input field in Cloud Page editor for ",(0,i.kt)("inlineCode",{parentName:"p"},"og:title")," would be cherry on top."),(0,i.kt)("a",{class:"button button--outline button--lg button--primary col col--6 col--offset-3",href:"https://ideas.salesforce.com/s/idea/a0B8W00000I8cvPUAR/cloud-page-favicon-open-graph-management"},"Vote on IdeaExchange"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"journey-builder"},"Journey Builder"),(0,i.kt)("h3",{id:"deliverytime-for-journey-builder-emails"},"DeliveryTime for Journey Builder emails"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DeliveryTime")," is ",(0,i.kt)("a",{parentName:"p",href:"../../docs/config/sfmc-config-system-data-views#_job"},(0,i.kt)("inlineCode",{parentName:"a"},"_Job")," Data View")," field that stores timestamp for the email delivery (when it successfully reached the target Email Service Provider). It is currently impossible to get delivery time for emails sent via Journey Builder."),(0,i.kt)("p",null,"All other engagement data points are available (",(0,i.kt)("inlineCode",{parentName:"p"},"EventDate")," field for ",(0,i.kt)("a",{parentName:"p",href:"../../docs/config/sfmc-config-system-data-views#_sent"},"_Sent"),", ",(0,i.kt)("a",{parentName:"p",href:"../../docs/config/sfmc-config-system-data-views#_open"},"_Open"),", ",(0,i.kt)("a",{parentName:"p",href:"../../docs/config/sfmc-config-system-data-views#_click"},"_Click"),", ",(0,i.kt)("a",{parentName:"p",href:"../../docs/config/sfmc-config-system-data-views#_bounce"},"_Bounce"),"), but ",(0,i.kt)("inlineCode",{parentName:"p"},"DeliveryTime")," from ",(0,i.kt)("a",{parentName:"p",href:"../../docs/config/sfmc-config-system-data-views#_job"},(0,i.kt)("inlineCode",{parentName:"a"},"_Job")," Data View")," returns ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL")," for Journey Builder emails."),(0,i.kt)("p",null,"It is happening, however, only for Journey Builder emails. Sends via any other methods (for example, Send Flow) are correctly displaying the delivery time."),(0,i.kt)("p",null,"I see it as a massive limitation for automations focused on keeping the database clean and debugging sends."),(0,i.kt)("a",{class:"button button--outline button--lg button--primary col col--6 col--offset-3",href:"https://trailblazer.salesforce.com/ideaView?id=0874V000001HkZgQAK"},"Vote on IdeaExchange"),(0,i.kt)("h3",{id:"_datasourcename-for-entry-data-extension-in-journey-builder"},"_DataSourceName for Entry Data Extension in Journey Builder"),(0,i.kt)("p",null,"As per the ",(0,i.kt)("a",{parentName:"p",href:"https://help.salesforce.com/articleView?id=mc_es_available_personalization_strings.htm&type=5"},"documentation"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"_DataSourceName")," personalisation string should show the communication audience's name. It covers lists, data extensions, groups, and filters."),(0,i.kt)("p",null,"It works when the email is sent via Email Studio -> Email -> Content -> Send flow. However, when we send an Email (or SMS) from Journey Builder, ",(0,i.kt)("inlineCode",{parentName:"p"},"_DataSourceName"),' shows "All Subscribers" instead of the Entry Data Extension name. It is true for both Multi-Step Journeys and Single Email Sends.'),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"_DataSourceName")," should show Entry Data Extension Name for Emails in Journey Builder. It is handy to debug from Send Log and create dynamic logic in emails based on the Data Extension naming convention."),(0,i.kt)("a",{class:"button button--outline button--lg button--primary col col--6 col--offset-3",href:"https://trailblazer.salesforce.com/ideaView?id=0874V000001HkZRQA0"},"Vote on IdeaExchange"),(0,i.kt)("h3",{id:"journey-builder-script-activity"},"Journey Builder Script Activity"),(0,i.kt)("p",null,"Salesforce Marketing Cloud Journey Builder offers many out-of-the-box Activities and the possibility to create or download custom ones from AppExchange. However, there is a space between those solutions that Salesforce can cover to empower Marketing Cloud users. An out-of-the-box Script Activity, similar to the one available in Automation Studio."),(0,i.kt)("p",null,"Flexible enough to offer countless possibilities to SFMC power users without the complexity of creating a custom solution with the whole hosting, scalability and security considerations."),(0,i.kt)("p",null,"Right now, it requires either:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Stitching multiple Journeys and Automations with status-capturing Data Extensions to let members flow through the mix or"),(0,i.kt)("li",{parentName:"ul"},"filthy tricks with scripting in emails and, in the end, raising an error to block it from sending (quasi Script Activity with bad impact on reporting, performance, speed and super messages).")),(0,i.kt)("p",null,"Salesforce can solve it. Below are two possible solutions (and a bonus one for even more performance-oriented fun):"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Minimum Valuable Solution"),": Script Activity with the same features as in Automation Studio. The possibility of executing SSJS (or even AMPScript to optimise performance) against every Journey member would allow for pre-send updates of data from external systems using HTTP functions to ensure that crucial personalisation details are up-to-date."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Solution Deluxe"),": Extension of the previous idea to define various paths based on a predefined value in the script. Think about custom decision splits using out-of-sfmc data that allow you to change the Journey path based on real-time information from external systems."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Bonus Solution"),": There is also a place for a much less system-heavy script activity on the side. One that captures all members that get to that Activity and in predefined cadence (for example, every hour), if there is at least one member available, executes provided script once. Think of it as a mix of Wait and Script Activity that allows executing logic applied to groups. Use cases? Lazy update of the personalisation-source Data Extension that happens only if there are members that would need it. Or performance check of the subsequent communication to decide whether the members should receive it. All with the performance impact of one script execution per hour - regardless of the number of members.")),(0,i.kt)("a",{class:"button button--outline button--lg button--primary col col--6 col--offset-3",href:"https://trailblazer.salesforce.com/ideaView?id=0874V000000lglGQAQ"},"Vote on IdeaExchange"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"behavioral-triggers"},"Behavioral Triggers"),(0,i.kt)("h3",{id:"einstein-user-attributes-in-behavioral-trigger-content-block"},"Einstein User Attributes in Behavioral Trigger Content Block"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"../../docs/config/sfmc-config-behavioral-triggers#behavioral-trigger-content-block"},"Behavioral Triggers Content Block")," for Emails is an excellent tool for easy drag-and-drop creation of Abandoned Engagement communication. But it is missing one powerful feature \u2014 the ability to personalise the email with customer data."),(0,i.kt)("p",null,"It is already available in the form of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Einstein User Attributes that we can pass through the ",(0,i.kt)("inlineCode",{parentName:"li"},"setUserInfo")," data layer."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"../../docs/config/sfmc-config-behavioral-triggers#5-building-the-api-query"},"request"),' used in the back end of the current Behavioral Triggers Content Block; by adding "&user_attributes=attributeName" to the endpoint.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../docs/config/sfmc-config-behavioral-triggers#6-response-parsing"},"Code")," of the existing Behavioral Triggers Content Block responsible for creating AMPScript variables based on the Einstein User Attributes data.")),(0,i.kt)("p",null,"However, as the Einstein User Attributes are neither added to the request by default nor configured in the User Integrace of the Content Block, to get this data in the email, one must create yet another, the same call with the above query parameter added. Neither user friendly nor optimal due to expensive ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP.Get")," function running twice in such a scenario."),(0,i.kt)("p",null,"Salesforce can fix it. Below are two solution tiers:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Minimum Valuable Solution"),': Add the required query string ("&user_attributes=X,Y") with all potential Custom Einsteins User Attributes to the request URL built within the Content Block code.'),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Solution Deluxe"),": Improve the above with the UI-enabled selection of needed Profile Attributes, just as available with Product Attributes.")),(0,i.kt)("a",{class:"button button--outline button--lg button--primary col col--6 col--offset-3",href:"https://trailblazer.salesforce.com/ideaView?id=0874V0000003lB7QAI"},"Vote on IdeaExchange"),(0,i.kt)("h3",{id:"link-tracking-in-behavioral-trigger-content-block"},"Link Tracking in Behavioral Trigger Content Block"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../../docs/config/sfmc-config-behavioral-triggers#behavioral-trigger-content-block"},"Behavioral Triggers Content Block")," allows for easy out-of-the-box use of abandoned engagement data in our Emails. It neatly pulls the Catalog items that captivated the customer's attention and displays them for win-back purposes. Of course, each item links back to its e-commerce page."),(0,i.kt)("p",null,"Its implementation is, however, leading to a problem with tracking. My favourite solution - Parameter Manager with Web Analytics Connector - is not working on the Behavioral Trigger Content Block. Neither can we add the tracking parameters manually, as there is no such option in the UI."),(0,i.kt)("p",null,"Right now, there are only two ways to add the UTM's:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add them to the Catalog directly - this adds them for all scenarios connected to Einstein or Behavioral Triggers. Not helpful, as in most cases, we want to differentiate various personalisation placements by using distinct UTM tracking."),(0,i.kt)("li",{parentName:"ol"},"Create a Custom Behavioral Trigger Content Block - now we will be able to leverage direct links from ",(0,i.kt)("inlineCode",{parentName:"li"},"IGO_PRODUCTATTRIBS")," add tracking to them in the product's HTML template. Okay, but not easy and make you lose click data for Einstein Recommendations.")),(0,i.kt)("p",null,"Salesforce can fix it. Below are two possible solutions:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Minimum Valuable Solution"),": Add a text box to a Behavioral Trigger Content Block configuration menu to add our custom tracking. The Content Block should apply the provided tracking query to each link. AMPScript support included."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Solution Deluxe"),": On top of the above solution, Marketing Cloud should consider the Parameter Management to allow for a mix of global UTM's from Web Analytics Connector and local from the new text box in Behavioral Trigger Content Block configuration.")),(0,i.kt)("a",{class:"button button--outline button--lg button--primary col col--6 col--offset-3",href:"https://trailblazer.salesforce.com/ideaView?id=0874V000000UKBJQA4"},"Vote on IdeaExchange"),(0,i.kt)("h3",{id:"behavioral-trigger-abandoned-cart-custom-attributes"},"Behavioral Trigger Abandoned Cart Custom Attributes"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"../../docs/config/sfmc-config-behavioral-triggers"},"Behavioral Triggers")," are a terrific solution for Abandoned Engagement. The ",(0,i.kt)("a",{parentName:"p",href:"../../docs/config/sfmc-config-behavioral-triggers#track-cart"},"Abandoned Cart")," scenario already has multiple great features that make it easy to implement."),(0,i.kt)("p",null,"There is, however, an area for an easy improvement on that idea to make it much more flexible and ready for real-world scenarios. Salesforce can do it with two solutions:"),(0,i.kt)("h4",{id:"custom-cart-attributes"},"Custom Cart Attributes"),(0,i.kt)("p",null,"Just as there are Custom Attributes for the Product Catalog, it would be great to have a similar option on the cart itself. Product Catalog ones are global - shared for all Customers interested in selected products. There is a need for something more unique and customer-specific."),(0,i.kt)("p",null,"It is already available in the form of an optional ",(0,i.kt)("inlineCode",{parentName:"p"},"price")," attribute of ",(0,i.kt)("a",{parentName:"p",href:"../../docs/config/sfmc-config-behavioral-triggers#track-cart"},(0,i.kt)("inlineCode",{parentName:"a"},"trackCart")," Collect.js Data Layer")," that contains individual price that does not impact the Product Catalog.  It would be great to have the possibility to add a few more, available in ",(0,i.kt)("a",{parentName:"p",href:"../../docs/config/sfmc-config-behavioral-triggers#track-cart"},(0,i.kt)("inlineCode",{parentName:"a"},"trackCart")," Collect.js")," and the ",(0,i.kt)("a",{parentName:"p",href:"../../docs/config/sfmc-config-behavioral-triggers#api-responses"},"response")," from Einstein Backend (IgoDigital)."),(0,i.kt)("p",null,"Use case? Sure. Coupon Code Name, Coupon Code Discount (either integer or float for per cent value), added Personalisation, Voucher ID. All those tools are frequently used in e-commerce and would be perfect for a ",(0,i.kt)("inlineCode",{parentName:"p"},"trackCart")," layer. Suitable for personalisation, perfect for passing data needed for rebuilding the cart."),(0,i.kt)("h4",{id:"cart-attributes-visibility-in-the-content-block"},"Cart Attributes Visibility in the Content Block"),(0,i.kt)("p",null,"This one is an extension of the above idea. We already have a way to decide which Product Catalog Attributes are displayed in the Behavioral Trigger Content Block. But in many cases, when I use Abandoned Cart, I would like to show ",(0,i.kt)("inlineCode",{parentName:"p"},"trackCart")," individual price (including applied coupons) instead of the global Catalog one. It could also be helpful for some Custom Cart Attributes from the previous solution."),(0,i.kt)("p",null,"Below are three solution tiers:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Minimum Valuable Solution"),": Add ",(0,i.kt)("inlineCode",{parentName:"li"},"price")," ",(0,i.kt)("inlineCode",{parentName:"li"},"trackCart")," attribute (",(0,i.kt)("inlineCode",{parentName:"li"},"amount")," in the ",(0,i.kt)("a",{parentName:"li",href:"../../docs/config/sfmc-config-behavioral-triggers#api-responses"},"response")," from the IgoDigital) available for selection when defining fields shown for products in ",(0,i.kt)("a",{parentName:"li",href:"../../docs/config/sfmc-config-behavioral-triggers#behavioral-trigger-content-block"},"Behavioral Trigger Content Block"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Nice Solution"),": On top of the first point, add two additional (optional) attributes to ",(0,i.kt)("inlineCode",{parentName:"li"},"trackCart")," Collect.js and IgoDigital ",(0,i.kt)("a",{parentName:"li",href:"../../docs/config/sfmc-config-behavioral-triggers#api-responses"},"response"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"couponCodeName"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"couponCodeDiscount "),"- and make them also available for selection in ",(0,i.kt)("a",{parentName:"li",href:"../../docs/config/sfmc-config-behavioral-triggers#behavioral-trigger-content-block"},"Behavioral Trigger Content Block"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Solution Deluxe"),": On top of the first point, add the possibility of defining Custom Cart Attributes in the UI and leveraging them in ",(0,i.kt)("inlineCode",{parentName:"li"},"trackCart")," Collect.js and IgoDigital ",(0,i.kt)("a",{parentName:"li",href:"../../docs/config/sfmc-config-behavioral-triggers#api-responses"},"response"),". Just as with Custom Profile Attributes / Custom Product Attributes. Additionally, make them also available for selection in ",(0,i.kt)("a",{parentName:"li",href:"../../docs/config/sfmc-config-behavioral-triggers#behavioral-trigger-content-block"},"Behavioral Trigger Content Block"),".")),(0,i.kt)("a",{class:"button button--outline button--lg button--primary col col--6 col--offset-3",href:"https://trailblazer.salesforce.com/ideaView?id=0874V0000003lCKQAY"},"Vote on IdeaExchange"),(0,i.kt)("h3",{id:"behavioral-trigger-content-block-rendering-on-yahoo-aol-windows-outlook"},"Behavioral Trigger Content Block rendering on Yahoo, AOL, Windows Outlook"),(0,i.kt)("p",null,"The current version of Behavioral Trigger Content Block is not rendering correctly on Yahoo, AOL and Windows Outlook. On those Email Providers, the product text is not displayed, and the customer only sees the images."),(0,i.kt)("p",null,"The reason for this is using ",(0,i.kt)("inlineCode",{parentName:"p"},"rem")," units font-size for product descriptions - ",(0,i.kt)("inlineCode",{parentName:"p"},"font-size: 0.8125rem"),":"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'<td class="mcbt_name" style="padding: 0; font-size: 0.8125rem; padding-top: 10px; text-align: center; width: 100%; max-width: 310px;">--name--</td>')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"rem")," units are currently not supported by Yahoo, AOL and Windows Outlook (",(0,i.kt)("a",{parentName:"p",href:"https://www.caniemail.com/features/css-unit-rem/"},"Can I Email"),") which leads to those Email Providers ignoring this parameter. When this happens, the font-size value is inherited from the parent that have font-size configured."),(0,i.kt)("p",null,"And for Behavioral Trigger Content block that parent is a ",(0,i.kt)("inlineCode",{parentName:"p"},"<td>")," parameter within header ",(0,i.kt)("a",{parentName:"p",href:"../../docs/config/sfmc-config-behavioral-triggers#3-settings--markup-fragments"},(0,i.kt)("inlineCode",{parentName:"a"},"markupFragment")),". Unfortunately, it has ",(0,i.kt)("inlineCode",{parentName:"p"},"font-size: 0"),":"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'<td class="multi-column" style="padding: 0; text-align: center; font-size: 0; padding-top: 10px; padding-bottom: 10px;">')),(0,i.kt)("p",null,"There should be no ",(0,i.kt)("inlineCode",{parentName:"p"},"rem")," units used in the Behavioral Trigger Content Block code and instead a standard ",(0,i.kt)("inlineCode",{parentName:"p"},"px")," font-size assignment for the Block to render correctly."),(0,i.kt)("a",{class:"button button--outline button--lg button--primary col col--6 col--offset-3",href:"https://trailblazer.salesforce.com/ideaView?id=0874V000000UKIKQA4"},"Vote on IdeaExchange"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"content-builder"},"Content Builder"),(0,i.kt)("h3",{id:"content-builder-shared-folders-permissions"},"Content Builder Shared Folders Permissions"),(0,i.kt)("p",null,"Content Builder is great for creating and neatly organising assets in Marketing Cloud, but it has one huge issue. Folder access management."),(0,i.kt)("p",null,"There are already great ",(0,i.kt)("a",{parentName:"p",href:"https://trailblazer.salesforce.com/ideaView?id=0873A000000PZ6oQAG"},"Ideas on expanding the folder rights"),", so in this Idea, I want to focus on something different - and much easier to fix for Salesforce."),(0,i.kt)("p",null,"When settings permissions for a Marketing Cloud User or Role, there are options that control the rights to Shared Folders of Content Builder. As with Shared Data Extensions Folder permissions, you can decide what the user or role can do with Shared Content Folders."),(0,i.kt)("p",null,"However, there is one huge difference:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"With Shared Data Extension Folders, when you remove all permissions, the user or role can no longer see Shared space and effectively loses access to all Shared Data Extensions."),(0,i.kt)("li",{parentName:"ol"},"With Shared Content Folders, when you remove all permissions, the user or role will not see the folders, but they will still see the Shared Folder tab and - what's much worse - ",(0,i.kt)("inlineCode",{parentName:"li"},"All Shared Content")," section displaying all the Content assets stored within Shared Folders.")),(0,i.kt)("p",null,"As SFMC applies the permissions to read and edit content to both local and shared assets, every person with edit rights can change assets in a Shared Content Folder - event if they do not have permission to that folder."),(0,i.kt)("p",null,"This behaviour breaks a prevalent use case of having local folders available to all creators while limiting shared folders only to administrative roles. It is possible (and very useful) for Data Extensions. But not for Content Builder, as everyone can access all administrative-level assets (like master templates or crucial content blocks)."),(0,i.kt)("p",null,"The fix is straightforward - if the current user does not have any permissions to Shared Content Builder Folders, it shouldn't see either the ",(0,i.kt)("inlineCode",{parentName:"p"},"All Shared Content")," section or even the Shared Folders tab. That's it. It would then mirror the Shared Data Extension folder permissions and enable the local/administrative access split use case."),(0,i.kt)("a",{class:"button button--outline button--lg button--primary col col--6 col--offset-3",href:"https://trailblazer.salesforce.com/ideaView?id=0874V0000019OQtQAM"},"Vote on IdeaExchange"))}p.isMDXComponent=!0},1872:(e,t,a)=>{a.d(t,{m:()=>n});var o=a(7294);const i="leadText_qzwo",n=e=>{let{content:t}=e;return o.createElement(o.Fragment,null,o.createElement("p",{id:i},t))}}}]);