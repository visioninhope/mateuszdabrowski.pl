(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{106:function(e,t,i){"use strict";i.d(t,"a",(function(){return p})),i.d(t,"b",(function(){return d}));var n=i(0),r=i.n(n);function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){s(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var b=r.a.createContext({}),c=function(e){var t=r.a.useContext(b),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=c(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,s=e.originalType,a=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=c(i),u=n,d=p["".concat(a,".").concat(u)]||p[u]||m[u]||s;return i?r.a.createElement(d,o(o({ref:t},b),{},{components:i})):r.a.createElement(d,o({ref:t},b))}));function d(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=i.length,a=new Array(s);a[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,a[1]=o;for(var b=2;b<s;b++)a[b]=i[b];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},107:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var n=i(0),r=i(53),s=i.n(r);const a=({content:e})=>n.createElement(n.Fragment,null,n.createElement("p",{id:s.a.leadText},e))},98:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return o})),i.d(t,"metadata",(function(){return l})),i.d(t,"rightToc",(function(){return b})),i.d(t,"default",(function(){return p}));var n=i(3),r=i(8),s=(i(0),i(106)),a=i(107),o={id:"sfmc-config-permissions",title:"SFMC Permissions",sidebar_label:"Permissions",description:"Welcome to the jungle, we've got Roles and Permissions."},l={unversionedId:"config/sfmc-config-permissions",id:"config/sfmc-config-permissions",isDocsHomePage:!1,title:"SFMC Permissions",description:"Welcome to the jungle, we've got Roles and Permissions.",source:"@site/docs/config/sfmc-config-permissions.mdx",slug:"/config/sfmc-config-permissions",permalink:"/docs/config/sfmc-config-permissions",editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/docs/config/sfmc-config-permissions.mdx",version:"current",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1605472530,sidebar_label:"Permissions",sidebar:"snippets",previous:{title:"SFMC SQL Debugging Email Sends",permalink:"/docs/sql/sfmc-sql-snippet-debugging-email-sends"}},b=[{value:"Permissions Best Practices",id:"permissions-best-practices",children:[{value:"Standard vs Custom Roles",id:"standard-vs-custom-roles",children:[]},{value:"Permission Overlap",id:"permission-overlap",children:[]}]},{value:"SFMC Permissions",id:"sfmc-permissions",children:[{value:"General Permissions",id:"general-permissions",children:[]},{value:"Email Studio Permissions",id:"email-studio-permissions",children:[]},{value:"Mobile Studio Permissions",id:"mobile-studio-permissions",children:[]},{value:"Social Studio Permissions",id:"social-studio-permissions",children:[]},{value:"Web Studio Permissions",id:"web-studio-permissions",children:[]},{value:"Interaction Studio Permissions",id:"interaction-studio-permissions",children:[]},{value:"Analytics Builder Permissions",id:"analytics-builder-permissions",children:[]},{value:"Journey Builder Permissions",id:"journey-builder-permissions",children:[]},{value:"Content Builder Permissions",id:"content-builder-permissions",children:[]},{value:"Audience Builder Permissions",id:"audience-builder-permissions",children:[]},{value:"AppExchange Permissions",id:"appexchange-permissions",children:[]},{value:"Legacy Permissions",id:"legacy-permissions",children:[]}]}],c={rightToc:b};function p(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(s.b)(a.a,{content:"Welcome to the jungle, we've got Roles and Permissions.",mdxType:"LeadText"}),Object(s.b)("h2",{id:"permissions-best-practices"},"Permissions Best Practices"),Object(s.b)("h3",{id:"standard-vs-custom-roles"},"Standard vs Custom Roles"),Object(s.b)("p",null,"The best way to work with Roles and Permissions in Salesforce Marketing Cloud is to leverage standard roles and only build on top of them with custom permissions/roles. Creating custom roles from scratch (even by copying existing standard role) is not recommended. There are two reasons for this:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Standard Roles are updated every release to support changes in permissions structure."),Object(s.b)("li",{parentName:"ol"},"In many Marketing Cloud spaces, you need multiple permissions from various permission groups.")),Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"You Should Know")),Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"An excellent example of it might be the Journey Builder."),Object(s.b)("p",{parentName:"div"},"It is not enough to add full Journey Builder permissions to allow someone to work with that part of Marketing Cloud, because Activities used on Journey canvas require additional permissions to work:"),Object(s.b)("pre",{parentName:"div"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-md"}),"1. Decision Splits and Wait by Attribute requires:\n    - Email > Subscribers > Data Extensions > View\n    - Salesforce Marketing Cloud > Contacts > Read Contact Data\n2. Update Contact requires:\n    - Email > Subscribers > Data Extensions > View\n    - Email > Subscribers > List > View\n3. Engagement Splits requires:\n    - Email > Content > Email > View\n    - Content Builder > Assets > View\n4. Journey Entry Sources requires:\n    - Email > Subscribers > Data Extensions > View\n    - Email > Subscribers > List > View\n    - Salesforce Marketing Cloud > Contacts > Read Contact Data\n5. Goals, Exit Criteria, Default Email and Mobile Number settings require:\n    - Email > Subscribers > Data Extensions > View\n    - Salesforce Marketing Cloud > Contacts > Read Contact Data\n")),Object(s.b)("p",{parentName:"div"},"Such mixes are happening in multiple parts of Marketing Cloud and might change from release to release, which makes creating custom roles from scratch very hard to make and maintain."))),Object(s.b)("p",null,"However, Standard Roles not always align perfectly with your needs. The widespread use case would be hiding shared folders via permissions or blocking deletion rights for some users. It is where custom work is needed."),Object(s.b)("h3",{id:"permission-overlap"},"Permission Overlap"),Object(s.b)("p",null,"When working with multiple roles or overlapping permissions, be sure to check what is the outcome on the user."),Object(s.b)("p",null,"Marketing Cloud goes with the most restrictive resulting permission possible:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"If at least one permission (role-based or individual) is set to Deny - the user will ",Object(s.b)("strong",{parentName:"li"},"not")," be able to use the feature."),Object(s.b)("li",{parentName:"ol"},"If there is neither Allow nor Deny permission - the user will ",Object(s.b)("strong",{parentName:"li"},"not")," be able to use the feature."),Object(s.b)("li",{parentName:"ol"},"If there is at least one Allow permission and not even one Deny permission - the user will be able to use the feature.")),Object(s.b)("p",null,"You can check the outcome by going to Setup > Users > Users > clicking checkbox next to a user > clicking Manage Roles > Edit Permissions. In this place, you can not only configure individual permissions but also, by expanding to the final permission level, check current result permission along with the source for that state."),Object(s.b)("hr",null),Object(s.b)("h2",{id:"sfmc-permissions"},"SFMC Permissions"),Object(s.b)("p",null," Below I have listed details on the permissions currently available in Salesforce Marketing Cloud Setup. For better readability, I have split them by Studio/Builder, so they are not in the same order as in Setup."),Object(s.b)("p",null," To search for specific permission you can use site search in top right or browser search (",Object(s.b)("inlineCode",{parentName:"p"},"CMD"),"/",Object(s.b)("inlineCode",{parentName:"p"},"Ctrl"),"+",Object(s.b)("inlineCode",{parentName:"p"},"F")," keys)."),Object(s.b)("hr",null),Object(s.b)("h3",{id:"general-permissions"},"General Permissions"),Object(s.b)("h4",{id:"salesforce-marketing-cloud"},"Salesforce Marketing Cloud"),Object(s.b)("p",null,"Contains a mix of permissions for:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Marketing Cloud Dashboard tools"),Object(s.b)("li",{parentName:"ul"},"Contacts"),Object(s.b)("li",{parentName:"ul"},"Marketing Cloud Roles"),Object(s.b)("li",{parentName:"ul"},"Some ",Object(s.b)("strong",{parentName:"li"},"Legacy")," or unreleased functions like ",Object(s.b)("em",{parentName:"li"},"Pulse")," or ",Object(s.b)("em",{parentName:"li"},"Watchdog"),".")),Object(s.b)("p",null,"One of the most important permissions here is:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Salesforce Marketing Cloud > Contacts > Read Contact Data.")),Object(s.b)("p",null,"It is used in multiple SFMC areas and is required for them to work."),Object(s.b)("h4",{id:"tags"},"Tags"),Object(s.b)("p",null,"Permissions for Marketing Cloud tagging solution."),Object(s.b)("h4",{id:"administration"},"Administration"),Object(s.b)("p",null,"Permissions for most of the ",Object(s.b)("em",{parentName:"p"},"Setup")," items."),Object(s.b)("h4",{id:"event-notifications"},"Event Notifications"),Object(s.b)("p",null,"Permissions for REST API Event Notifications Service."),Object(s.b)("h4",{id:"audit-trail"},"Audit Trail"),Object(s.b)("p",null,"Permissions for ",Object(s.b)("em",{parentName:"p"},"Audit Trail")," tools."),Object(s.b)("h4",{id:"database-encryption"},"Database Encryption"),Object(s.b)("p",null,"Permissions for ",Object(s.b)("em",{parentName:"p"},"Transparent Database Encryption"),"."),Object(s.b)("hr",null),Object(s.b)("h3",{id:"email-studio-permissions"},"Email Studio Permissions"),Object(s.b)("h4",{id:"email"},"Email"),Object(s.b)("p",null,"Huge permission set for most of the ",Object(s.b)("em",{parentName:"p"},"Email Studio")," features."),Object(s.b)("p",null,"Two of the most important permissions here are:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Email > Subscribers > Data Extensions > View"),Object(s.b)("li",{parentName:"ul"},"Email > Subscribers > List > View")),Object(s.b)("p",null,"They are used in multiple SFMC areas and are required for them to work."),Object(s.b)("p",null,"Contains also some permissions for ",Object(s.b)("strong",{parentName:"p"},"Legacy")," features like ",Object(s.b)("em",{parentName:"p"},"Omniture TnT")," and ",Object(s.b)("em",{parentName:"p"},"3sixty"),"."),Object(s.b)("h4",{id:"email-send-wizard"},"Email Send Wizard"),Object(s.b)("p",null,"Enables Email Send process in ",Object(s.b)("em",{parentName:"p"},"Email Studio")," and partially for single send in ",Object(s.b)("em",{parentName:"p"},"Journey Builder"),"."),Object(s.b)("h4",{id:"distributed-sending"},"Distributed Sending"),Object(s.b)("p",null,"Permissions for ",Object(s.b)("em",{parentName:"p"},"Distributed Sending"),"."),Object(s.b)("h4",{id:"transactional-sending"},"Transactional Sending"),Object(s.b)("p",null,"Permissions for ",Object(s.b)("em",{parentName:"p"},"Transactional Messaging API"),"."),Object(s.b)("hr",null),Object(s.b)("h3",{id:"mobile-studio-permissions"},"Mobile Studio Permissions"),Object(s.b)("h4",{id:"mobileconnect"},"MobileConnect"),Object(s.b)("p",null,"Permissions for ",Object(s.b)("em",{parentName:"p"},"MobileConnect"),"."),Object(s.b)("h4",{id:"mobilepush"},"MobilePush"),Object(s.b)("p",null,"Permissions for ",Object(s.b)("em",{parentName:"p"},"MobilePush"),"."),Object(s.b)("h4",{id:"groupconnect"},"GroupConnect"),Object(s.b)("p",null,"Permissions for ",Object(s.b)("em",{parentName:"p"},"Group Connect"),"."),Object(s.b)("hr",null),Object(s.b)("h3",{id:"social-studio-permissions"},"Social Studio Permissions"),Object(s.b)("p",null,"Most permissions are managed from within ",Object(s.b)("em",{parentName:"p"},"Social Studio")," and not available in global Setup."),Object(s.b)("h4",{id:"socialengage"},"SocialEngage"),Object(s.b)("p",null,"Permissions for Engage, part of ",Object(s.b)("em",{parentName:"p"},"Social Studio"),"."),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Perform Workgroup Leader Role")," is permission for an unreleased feature."),Object(s.b)("hr",null),Object(s.b)("h3",{id:"web-studio-permissions"},"Web Studio Permissions"),Object(s.b)("h4",{id:"cloudpages"},"CloudPages"),Object(s.b)("p",null,"Permissions for ",Object(s.b)("em",{parentName:"p"},"Cloud Pages"),"."),Object(s.b)("hr",null),Object(s.b)("h3",{id:"interaction-studio-permissions"},"Interaction Studio Permissions"),Object(s.b)("p",null,"Most permissions are managed from within ",Object(s.b)("em",{parentName:"p"},"Interaction Studio")," and not available in global Setup."),Object(s.b)("h4",{id:"interaction-studio"},"Interaction Studio"),Object(s.b)("p",null,"Permissions for ",Object(s.b)("em",{parentName:"p"},"Interaction Studio")," (",Object(s.b)("em",{parentName:"p"},"Evergage"),")."),Object(s.b)("h4",{id:"interaction-studio---legacy"},"Interaction Studio - Legacy"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Legacy")," permissions for previous ",Object(s.b)("em",{parentName:"p"},"Interaction Studio")," solution (",Object(s.b)("em",{parentName:"p"},"Thunderhead"),")."),Object(s.b)("hr",null),Object(s.b)("h3",{id:"analytics-builder-permissions"},"Analytics Builder Permissions"),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Tracking")," within ",Object(s.b)("em",{parentName:"p"},"Email Studio")," is managed by separate permissions available within ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"#email"}),"Email")," permission group."),Object(s.b)("h4",{id:"reports"},"Reports"),Object(s.b)("p",null,"Permissions for ",Object(s.b)("em",{parentName:"p"},"Reports"),"."),Object(s.b)("h4",{id:"campaignanalytics"},"CampaignAnalytics"),Object(s.b)("p",null,"Permissions enabling Campaign objects for ",Object(s.b)("em",{parentName:"p"},"Reports"),".\nAvailable only on Role level (cannot be limited as individual permission)."),Object(s.b)("h4",{id:"analytics"},"Analytics"),Object(s.b)("p",null,"Permissions for ",Object(s.b)("em",{parentName:"p"},"Web Analytics")," and integration with ",Object(s.b)("em",{parentName:"p"},"Google Analytics"),"."),Object(s.b)("h4",{id:"discover"},"Discover"),Object(s.b)("p",null,"Permissions for ",Object(s.b)("em",{parentName:"p"},"Discover")," premium feature."),Object(s.b)("hr",null),Object(s.b)("h3",{id:"journey-builder-permissions"},"Journey Builder Permissions"),Object(s.b)("h4",{id:"automation-studio"},"Automation Studio"),Object(s.b)("p",null,"Permissions for ",Object(s.b)("em",{parentName:"p"},"Automation Studio"),"."),Object(s.b)("h4",{id:"journey-builder"},"Journey Builder"),Object(s.b)("p",null,"Permissions for ",Object(s.b)("em",{parentName:"p"},"Journey Builder"),"."),Object(s.b)("hr",null),Object(s.b)("h3",{id:"content-builder-permissions"},"Content Builder Permissions"),Object(s.b)("h4",{id:"content-builder"},"Content Builder"),Object(s.b)("p",null,"Permissions for ",Object(s.b)("em",{parentName:"p"},"Content Builder"),"."),Object(s.b)("h4",{id:"workflows-and-approvals"},"Workflows and Approvals"),Object(s.b)("p",null,"Permissions for ",Object(s.b)("em",{parentName:"p"},"Content Builder")," Approval tool."),Object(s.b)("h4",{id:"approvals-email"},"Approvals (Email)"),Object(s.b)("p",null,"Additional Permissions for ",Object(s.b)("em",{parentName:"p"},"Content Builder")," Approval tool."),Object(s.b)("hr",null),Object(s.b)("h3",{id:"audience-builder-permissions"},"Audience Builder Permissions"),Object(s.b)("h4",{id:"contact-builder"},"Contact Builder"),Object(s.b)("p",null,"Permissions for ",Object(s.b)("em",{parentName:"p"},"Contact Builder"),"."),Object(s.b)("h4",{id:"audience-builder"},"Audience Builder"),Object(s.b)("p",null,"Permissions for ",Object(s.b)("em",{parentName:"p"},"Audience Builder"),"."),Object(s.b)("h4",{id:"active-audiences"},"Active Audiences"),Object(s.b)("p",null,"Permissions for ",Object(s.b)("em",{parentName:"p"},"Active Audiences")," - part of ",Object(s.b)("em",{parentName:"p"},"Audience Builder"),"."),Object(s.b)("h4",{id:"audience-builder-enabler"},"Audience Builder Enabler"),Object(s.b)("p",null,"Permission for enabling ",Object(s.b)("em",{parentName:"p"},"Audience Builder"),"."),Object(s.b)("h4",{id:"data-factory-utility"},"Data Factory Utility"),Object(s.b)("p",null,"Permission related to ",Object(s.b)("em",{parentName:"p"},"Audience Builder")," and ",Object(s.b)("em",{parentName:"p"},"Discover")," (",Object(s.b)("em",{parentName:"p"},"Analytics Builder")," add-on). Moves data between environments. Configured during implementation. Do not touch."),Object(s.b)("h4",{id:"salesforce-dmp"},"Salesforce DMP"),Object(s.b)("p",null,"Most permissions are managed from within ",Object(s.b)("em",{parentName:"p"},"Salesforce DMP")," and not available in global Setup."),Object(s.b)("h4",{id:"einstein-data-analytics"},"Einstein Data Analytics"),Object(s.b)("p",null,"Most permissions are managed from within ",Object(s.b)("em",{parentName:"p"},"Einstein Analytics")," and not available in global Setup."),Object(s.b)("h4",{id:"datorama"},"Datorama"),Object(s.b)("p",null,"Most permissions are managed from within ",Object(s.b)("em",{parentName:"p"},"Datorama")," and not available in global Setup."),Object(s.b)("h4",{id:"datorama-reports"},"Datorama Reports"),Object(s.b)("p",null,"Permissions for ",Object(s.b)("em",{parentName:"p"},"Datorama Reports")," - part of ",Object(s.b)("em",{parentName:"p"},"Datorama"),"."),Object(s.b)("hr",null),Object(s.b)("h3",{id:"appexchange-permissions"},"AppExchange Permissions"),Object(s.b)("h4",{id:"hubexchange"},"HubExchange"),Object(s.b)("p",null,"Permissions for ",Object(s.b)("em",{parentName:"p"},"AppExchange"),"."),Object(s.b)("hr",null),Object(s.b)("h3",{id:"legacy-permissions"},"Legacy Permissions"),Object(s.b)("p",null,"Below you can find permissions for solutions that are no longer offered by Salesforce. No need to worry about them."),Object(s.b)("h4",{id:"marketo"},"Marketo"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Legacy")," permissions for integration with ",Object(s.b)("em",{parentName:"p"},"Adobe Marketo"),"."),Object(s.b)("h4",{id:"xpress"},"Xpress"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Legacy")," permissions."),Object(s.b)("h4",{id:"adobeanalytics"},"AdobeAnalytics"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Legacy")," permissions for integration with ",Object(s.b)("em",{parentName:"p"},"Adobe Analytics"),"."),Object(s.b)("h4",{id:"tmmessenger"},"tmMessenger"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Legacy")," permissions for integration with ",Object(s.b)("em",{parentName:"p"},"TicketMaster"),"."),Object(s.b)("h4",{id:"lemi"},"LEMI"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Legacy")," permissions."),Object(s.b)("h4",{id:"3sixty"},"3sixty"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Legacy")," permissions for integration with ",Object(s.b)("em",{parentName:"p"},"3sixty")," elearning platform."),Object(s.b)("h4",{id:"extension-manager"},"Extension Manager"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Legacy")," permissions for ",Object(s.b)("em",{parentName:"p"},"Marketing Cloud Extension Manager"),"."),Object(s.b)("h4",{id:"developerapp"},"DeveloperApp"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Legacy")," permissions."))}p.isMDXComponent=!0}}]);