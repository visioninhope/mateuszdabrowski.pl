"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[5559],{4137:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),u=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(a),m=n,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return a?i.createElement(h,r(r({ref:t},d),{},{components:a})):i.createElement(h,r({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,r[1]=l;for(var u=2;u<o;u++)r[u]=a[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7271:(e,t,a)=>{a.d(t,{V:()=>o,z:()=>n});var i=a(7294);const n=e=>{let{link:t,text:a,newTab:n=!1}=e;return i.createElement(i.Fragment,null,i.createElement("a",{class:"button button--outline button--lg button--primary col col--6 col--offset-3",href:t,target:n?"_blank":"_self"},a))},o=e=>{let{linkLeft:t,textLeft:a,newTabLeft:n=!1,linkRight:o,textRight:r,newTabRight:l=!1}=e;return i.createElement(i.Fragment,null,i.createElement("div",{class:"col col--12"},i.createElement("a",{class:"button button--outline button--lg button--primary col col--5 col--offset-0",href:t,target:n?"_blank":"_self"},a),i.createElement("a",{class:"button button--outline button--lg button--primary col col--5 col--offset-2",href:o,target:l?"_blank":"_self"},r)))}},1872:(e,t,a)=>{a.d(t,{m:()=>o});var i=a(7294);const n="leadText_qzwo",o=e=>{let{content:t}=e;return i.createElement(i.Fragment,null,i.createElement("p",{id:n},t))}},7404:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=a(7462),n=(a(7294),a(4137)),o=a(1872);a(7271);const r={id:"is-catalog-etl-metadata-viewer",title:"IS Catalog ETL Metadata Viewer",sidebar_label:"Catalog ETL Metadata Viewer",description:"Debug your Interaction Studio (SFMC Personalization) Catalog Object Item attributes with the power of Serverside Code.",image:"img/og/og-image-interaction-studio-catalog-etl-metadata-viewer.png"},l=void 0,s={unversionedId:"interaction-studio/snippets/is-catalog-etl-metadata-viewer",id:"interaction-studio/snippets/is-catalog-etl-metadata-viewer",title:"IS Catalog ETL Metadata Viewer",description:"Debug your Interaction Studio (SFMC Personalization) Catalog Object Item attributes with the power of Serverside Code.",source:"@site/docs/interaction-studio/snippets/is-catalog-etl-metadata-viewer.mdx",sourceDirName:"interaction-studio/snippets",slug:"/interaction-studio/snippets/is-catalog-etl-metadata-viewer",permalink:"/docs/interaction-studio/snippets/is-catalog-etl-metadata-viewer",draft:!1,editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/docs/interaction-studio/snippets/is-catalog-etl-metadata-viewer.mdx",tags:[],version:"current",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1677959774,formattedLastUpdatedAt:"Mar 4, 2023",frontMatter:{id:"is-catalog-etl-metadata-viewer",title:"IS Catalog ETL Metadata Viewer",sidebar_label:"Catalog ETL Metadata Viewer",description:"Debug your Interaction Studio (SFMC Personalization) Catalog Object Item attributes with the power of Serverside Code.",image:"img/og/og-image-interaction-studio-catalog-etl-metadata-viewer.png"},sidebar:"snippets",previous:{title:"Interaction Studio Snippets",permalink:"/docs/category/interaction-studio-snippets"}},u={},d=[{value:"Problem with Catalog Object ETL Metadata",id:"problem-with-catalog-object-etl-metadata",level:2},{value:"Solution",id:"solution",level:2},{value:"Implementation Guide",id:"implementation-guide",level:3},{value:"Serverside Code",id:"serverside-code",level:3},{value:"Limitations",id:"limitations",level:2},{value:"Data scope",id:"data-scope",level:3},{value:"Data quality",id:"data-quality",level:3},{value:"Context.event.fields.item",id:"contexteventfieldsitem",level:3},{value:"Options",id:"options",level:2}],c={toc:d},p="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.m,{content:"Debug your Interaction Studio (SFMC Personalization) Catalog Object Item attributes with the power of Serverside Code.",mdxType:"LeadText"}),(0,n.kt)("h2",{id:"problem-with-catalog-object-etl-metadata"},"Problem with Catalog Object ETL Metadata"),(0,n.kt)("p",null,"Interaction Studio (MCP) can pull product, content and related catalog data from multiple sources and does it continuously. That's perfect when all works great, but debugging features are minimal once you see some data discrepancies."),(0,n.kt)("p",null,"Sure, SFTP stores processed CSV Feed files, but finding the culprit takes work, especially if you push frequently with delta files."),(0,n.kt)("p",null,"Knowing which exact ETL load introduced problematic data is a tremendous help in finding the root cause of the issue and rectifying the data pipeline. While it is not available out of the box, we can build a custom for it."),(0,n.kt)("h2",{id:"solution"},"Solution"),(0,n.kt)("p",null,"Inspired by the excellent User Metadata Serverside template created by ",(0,n.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/christopherlong/"},"Christopher Long")," available ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/christopher-longSFDC/mcp/wiki/Serverside-Templates"},"here")," I decided to create something similar for the Catalog Object data."),(0,n.kt)("p",null,"A Serverside Template that leverages built-in Simulated Payload Preview available in Template Editor to display hidden changelog for ETL updates."),(0,n.kt)("p",null,"This approach leverages native features of the platform to access unsurfaced data in a techy but easily transferable format."),(0,n.kt)("p",null,"Additionally, it's a great way to showcase some IS Serverside Code approaches that can be useful for building standard campaign templates."),(0,n.kt)("h3",{id:"implementation-guide"},"Implementation Guide"),(0,n.kt)("p",null,"Implementation is straightforward, and you can have a working solution within a minute."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to SFMC \xbb Personalization"),(0,n.kt)("li",{parentName:"ol"},"On the left pane, hover over Server-Side and click on Server-Side and Triggered Templates"),(0,n.kt)("li",{parentName:"ol"},"Click New Template"),(0,n.kt)("li",{parentName:"ol"},'Provide a meaningful name (for example: "Catalog ETL Metadata Viewer")'),(0,n.kt)("li",{parentName:"ol"},"Copy-paste the code available below"),(0,n.kt)("li",{parentName:"ol"},"Save"),(0,n.kt)("li",{parentName:"ol"},"Use :)")),(0,n.kt)("p",null,"You don't need to Publish a template to leverage the Simulated Payload Preview. Keeping it unpublished guarantees no one will use it for a live Campaign."),(0,n.kt)("h3",{id:"serverside-code"},"Serverside Code"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"export class CatalogETLMetadataViewer implements CampaignTemplateComponent {\n\n    @header(' ')\n\n    @markdown(`\n##### How to use\n\nIn the Payload Preview pane on the right:\n\n1. Select catalog object in the Current Item Type\n2. Select item in the Current Item\n3. View the Details in the section below\n\nOptionally, you can modify the scope of returned data in the left Configuration pane.\n`)\n\n    @title('Item attribute metadata to display:')\n    @subtitle('File and Updated Date are available only for the ETL Source.')\n    showItemAttributeDetails: ('Value'|'Source'|'File'|'Updated Date'|'Locale')[] = ['Value', 'Source', 'File', 'Updated Date'];\n\n    @markdown(`Platform displays partially incorrect data when you manually Save Item in the Catalog, learn more [here](https://mateuszdabrowski.pl/docs/interaction-studio/snippets/is-catalog-etl-metadata-viewer/).`)\n\n    @title('Item non-attribute values to display:')\n    @subtitle('Only values are available - no Source/File/Updated Date/Locale data is exposed by the platform.')\n    showItemContextDetails: ('ID'|'Location'|'Related Catalog Objects'|'Categories'|'SKUs')[];\n\n    run(context: CampaignComponentContext) {\n        // Pulls Catalog Object type from Simulation configuration\n        const itemType = context.event.itemType();\n        // Pulls selected Item ID from Simulation configuration\n        const itemId = JSON.parse(context.event.fields.item as string)._id.value;\n        // Pulls full Item data from the Catalog\n        const itemDetail = context.services.catalog.findItem(itemType, itemId);\n\n        // Prepares the payload response according to Configuration pane\n        function itemProcessor(item, config) {\n            let processedItem = {\n                attributes: {},\n            };\n            const attributes = processedItem.attributes;\n\n            const makeEpochReadableAgain = epoch => String(new Date(epoch)).substring(4, 24);\n\n            // Conditional non-attribute data stuffing\n            if (config.itemContext?.includes('ID')) processedItem['id'] = item.id;\n            if (config.itemContext?.includes('SKUs')) processedItem['skus'] = item.skus;\n            if (config.itemContext?.includes('Categories')) processedItem['categories'] = item.categories;\n            if (config.itemContext?.includes('Related Catalog Objects')) processedItem['relatedCatalogObjects'] = item.dimensions;\n            if (config.itemContext?.includes('Locations')) processedItem['locations'] = item.locations;\n\n            // Conditional attribute data stuffing with processing\n            for (const [attribute, attributeData] of (<any>Object).entries(item.attributes)) {\n                let processedAttributes = {};\n\n                if (config.itemAttributes?.includes('Value')) processedAttributes['value'] = attributeData.value;\n                if (Number.isInteger(attributeData.value) && attributeData.value > 10e10) processedAttributes['readableValue'] = makeEpochReadableAgain(attributeData.value);\n                if (config.itemAttributes?.includes('Source')) processedAttributes['lastChangeSource'] = attributeData.metadata?.origin || 'SDK';\n                if (config.itemAttributes?.includes('File') && attributeData.metadata?.origin === 'ETL' ) processedAttributes['lastChangeFromETL'] = attributeData.metadata?.provider.substring(16);\n                if (config.itemAttributes?.includes('Updated Date') && attributeData.metadata?.origin === 'ETL' ) processedAttributes['lastChangeDate'] = makeEpochReadableAgain(attributeData.metadata?.lastUpdated);\n                if (config.itemAttributes?.includes('Locale')) processedAttributes['locale'] = attributeData.locale;\n\n                attributes[attribute] = processedAttributes;\n            }\n\n            return processedItem\n        }\n\n        // Outputs final payload to the Payload Preview pane\n        return {\n            item: itemProcessor(itemDetail, {itemAttributes: this.showItemAttributeDetails, itemContext: this.showItemContextDetails}),\n        };\n    }\n}\n")),(0,n.kt)("h2",{id:"limitations"},"Limitations"),(0,n.kt)("p",null,"While this solution can benefit Interaction Studio Catalog Object debugging, there are a few significant limitations."),(0,n.kt)("h3",{id:"data-scope"},"Data scope"),(0,n.kt)("p",null,"Unfortunately, at the moment, the platform surfaces metadata only for Catalog Items updated using ETL. Any other source (Manual update, Web or Mobile SDK) provides only current value but no information about the last change or the exact Source (apart from it not being an ETL)."),(0,n.kt)("p",null,"Additionally, the metadata returned for the ETL uploads provides only the file name and timestamp that first introduced the current value. There is no option to check what was the previous value."),(0,n.kt)("p",null,"It is still very helpful to understand whether the Interaction Studio overwrote the attribute using incorrect ETL data and which CSVs you should check to confirm the pipeline issues."),(0,n.kt)("h3",{id:"data-quality"},"Data quality"),(0,n.kt)("p",null,"Another huge caveat with the metadata is that Manual changes through the Catalog UI create many issues by silently changing attribute values and/or metadata. Example behaviours:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Manual changes to field value retain metadata information of the previous value source (so values marked as coming from both ",(0,n.kt)("inlineCode",{parentName:"li"},"ETL")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"SDK")," Sources could be introduced via UI)."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"price"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"listPrice"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"margin"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"published"),", and ",(0,n.kt)("inlineCode",{parentName:"li"},"expiration")," are being changed from ",(0,n.kt)("inlineCode",{parentName:"li"},"ETL")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"SDK")," Source even when manual changes weren't touching those attributes."),(0,n.kt)("li",{parentName:"ol"},"if ",(0,n.kt)("inlineCode",{parentName:"li"},"expiration")," was ",(0,n.kt)("inlineCode",{parentName:"li"},"NULL"),", it gets set to timestamp 100 years in the future"),(0,n.kt)("li",{parentName:"ol"},"if ",(0,n.kt)("inlineCode",{parentName:"li"},"margin")," was ",(0,n.kt)("inlineCode",{parentName:"li"},"NULL"),", it gets set to 0")),(0,n.kt)("p",null,"It is awful, but hopefully, only a few manual changes are happening in the production dataset, and this issue will be minimal. Still, it's worth remembering this when the metadata preview doesn't match data in the CSV."),(0,n.kt)("h3",{id:"contexteventfieldsitem"},"Context.event.fields.item"),(0,n.kt)("p",null,"While ",(0,n.kt)("inlineCode",{parentName:"p"},"context.event.fields.item")," is perfect for the use case described here, don't try to use it in standard Campaigns. Unfortunately, it is filled in only in the Simulation Preview and will not be available when deployed to a website. It is a massive limitation with one dirty workaround."),(0,n.kt)("p",null,"To get a similar outcome in an actual campaign, you have to:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create a string User Attribute to store the last viewed product ID."),(0,n.kt)("li",{parentName:"ol"},"In the Sitemap, extend the Product View Page Type ",(0,n.kt)("inlineCode",{parentName:"li"},"onActionEvent")," to push the current product ID to the attribute created in the previous step."),(0,n.kt)("li",{parentName:"ol"},"Leverage ",(0,n.kt)("inlineCode",{parentName:"li"},"context?.user?.attributes?.nameOfYourNewAttribute")," to get the ID and leverage it for .findItem and other purposes.")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("p",null,"I created the current version of the solution with an easy-to-use, straightforward interface leveraging out-of-the-box features of the platform. However, you can extend the code with an additional field accepting a list of IDs to return payloads for multiple items in a single run to facilitate faster debugging."))}m.isMDXComponent=!0}}]);