"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[3751],{6253:function(e,t,a){a.r(t),a.d(t,{default:function(){return E}});var n=a(7294),r=a(5045),l=a(7325);var c=a(9488),s=a(3702),u=a(6363),i="tag_Shcx";function m(e){var t=e.letterEntry;return n.createElement("article",null,n.createElement("h2",null,t.letter),n.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return n.createElement("li",{key:e.permalink,className:i},n.createElement(u.Z,e))}))),n.createElement("hr",null))}function o(e){var t=function(e){var t={};return Object.values(e).forEach((function(e){var a=function(e){return e[0].toUpperCase()}(e.label);null!=t[a]||(t[a]=[]),t[a].push(e)})),Object.entries(t).sort((function(e,t){var a=e[0],n=t[0];return a.localeCompare(n)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,t){return e.label.localeCompare(t.label)}))}}))}(e.tags);return n.createElement("section",{className:"margin-vert--lg"},t.map((function(e){return n.createElement(m,{key:e.letter,letterEntry:e})})))}var g=a(537),f=a(6010);function E(e){var t=e.tags,a=(0,l.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});return n.createElement(c.FG,{className:(0,f.Z)(s.k.wrapper.docsPages,s.k.page.docsTagsListPage)},n.createElement(c.d,{title:a}),n.createElement(g.Z,{tag:"doc_tags_list"}),n.createElement(r.Z,null,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement("main",{className:"col col--8 col--offset-2"},n.createElement("h1",null,a),n.createElement(o,{tags:t}))))))}},6363:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),r=a(6010),l=a(3699),c="tag_hD8n",s="tagRegular_D6E_",u="tagWithCount_i0QQ";function i(e){var t=e.permalink,a=e.label,i=e.count;return n.createElement(l.Z,{href:t,className:(0,r.Z)(c,i?u:s)},a,i&&n.createElement("span",null,i))}}}]);