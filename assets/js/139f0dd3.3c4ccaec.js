(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{121:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var o=a(0),r=a.n(o);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),m=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=m(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,n=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=m(a),b=o,h=p["".concat(n,".").concat(b)]||p[b]||u[b]||i;return a?r.a.createElement(h,s(s({ref:t},c),{},{components:a})):r.a.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,n=new Array(i);n[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,n[1]=s;for(var c=2;c<i;c++)n[c]=a[c];return r.a.createElement.apply(null,n)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},122:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var o=a(0),r=a(57),i=a.n(r);const n=({content:e})=>o.createElement(o.Fragment,null,o.createElement("p",{id:i.a.leadText},e))},74:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var o=a(3),r=a(8),i=(a(0),a(121)),n=a(122),s={id:"my-toolset",title:"Toolset",description:"Show me your tools, and I will tell you who you are. Or so they say"},l={unversionedId:"my-toolset",id:"my-toolset",isDocsHomePage:!1,title:"Toolset",description:"Show me your tools, and I will tell you who you are. Or so they say",source:"@site/sites/toolset.mdx",sourceDirName:".",slug:"/my-toolset",permalink:"/sites/my-toolset",editUrl:"https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/sites/toolset.mdx",version:"current",lastUpdatedBy:"Mateusz D\u0105browski",lastUpdatedAt:1598091094,formattedLastUpdatedAt:"8/22/2020",frontMatter:{id:"my-toolset",title:"Toolset",description:"Show me your tools, and I will tell you who you are. Or so they say"}},c=[{value:"Software",id:"software",children:[{value:"Operating System",id:"operating-system",children:[]},{value:"Browser",id:"browser",children:[]},{value:"Text Editor",id:"text-editor",children:[]},{value:"Terminal",id:"terminal",children:[]},{value:"API Client",id:"api-client",children:[]},{value:"Design",id:"design",children:[]},{value:"Productivity",id:"productivity",children:[]}]}],m={toc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(n.a,{content:"Show me your tools, and I will tell you who you are. Or so they say.",mdxType:"LeadText"}),Object(i.b)("h2",{id:"software"},"Software"),Object(i.b)("h3",{id:"operating-system"},"Operating System"),Object(i.b)("p",null,"Mac and Windows (sorry Ubuntu, this wasn't working for me anymore)."),Object(i.b)("h3",{id:"browser"},"Browser"),Object(i.b)("p",null,"Safari for non-development, ",Object(i.b)("a",{parentName:"p",href:"https://www.mozilla.org/en-US/firefox/developer/"},"Firefox Developer Edition")," and ",Object(i.b)("a",{parentName:"p",href:"https://www.google.com/chrome/"},"Chrome")," for anything code related."),Object(i.b)("h3",{id:"text-editor"},"Text Editor"),Object(i.b)("p",null,"For all my development on both Mac and Windows, I'm using Microsoft ",Object(i.b)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"Visual Studio Code"),". I tested about a dozen various editors, and this one feels like the most polished and universal solutions for Marketing Automation Developers. It's blazing fast, powerful and extendable \u2014 great out-of-the-box, awesome once you configured for your own needs. I'm using it not only for standard coding (HTML, CSS, JavaScript, SSJS, AMPScript, MJML) but also for writing Markdown, working with JSON, manipulating CSV files and RegExing. As for now, I'm using other solutions only for SQL and Jupyter Notebooks."),Object(i.b)("p",null,"A lot of VSCode powers comes from a fantastic extension repository, and some require a sincere recommendation (in alphabetical order):"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2"},"Bracket Pair Colorizer 2"),": Changes the colour of the matching brackets to differentiate nested elements. The only way to stay sane in JavaScript jungle."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight"},"Color Highlight"),": Simple tools that add appropriate background to any colour code. Excellent for anything front-end."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"},"ESLint"),": If you write JavaScript, you use ESLint. Period."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview"},"Image Preview"),": Another handy and straightforward solution. It shows miniatures of the image next to the import in the code."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer"},"Live Server"),": There are many tools to see hot reloading version of the page you are coding. This one is the simplest."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme"},"Material Theme"),": It's a beautiful looking theme."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=mjmlio.vscode-mjml"},"MJML")," and ",Object(i.b)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=digitalstreamio.mjml-syntax"},"mjml-syntax"),": Must have extensions if you want to write mobile-first emails with MJML in VSCode."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense"},"Path Intellisense"),": Autocompletes paths. Yay!"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=ms-python.python"},"Python"),": If you write Python, you use Python."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv"},"Rainbow CSV"),": Shows columns in pure CSV. Happy magic."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode"},"TabNine"),": If you ever dreamt about the code that writes itself, this is the extension you want. Creepy. Awesome. But creepy. Must have."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree"},"Todo Tree"),": The best way to work with TODO logging in code."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons"},"vscode-icons"),": Those are nice looking icons.")),Object(i.b)("p",null,"Finally, it is not an extension, but a must-have for me: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/tonsky/FiraCode"},"Fira Code")," font. Check it out. You will love it."),Object(i.b)("p",null,"If you are interested in my configuration, you can find dotfiles on the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/MateuszDabrowski/dotfiles/tree/master/vscode"},"Github Repository"),"."),Object(i.b)("h3",{id:"terminal"},"Terminal"),Object(i.b)("p",null,"90% of the time I'm using the terminal integrated into VSCode. 10% of the time it is ",Object(i.b)("a",{parentName:"p",href:"https://www.iterm2.com"},"iTerm")," (on Mac) or Powershell (on Windows)."),Object(i.b)("p",null,"Windows setup with Powershell both as standalone and in the VSCode is quite out-of-the-box with just some ",Object(i.b)("a",{parentName:"p",href:"https://github.com/MateuszDabrowski/dotfiles/blob/master/terminal/powershell-profile.txt"},"useful aliases"),"."),Object(i.b)("p",null,"My Mac is a bit more customized. For starters, instead of bash, I'm using ",Object(i.b)("a",{parentName:"p",href:"http://zsh.sourceforge.net"},"zsh")," with ",Object(i.b)("a",{parentName:"p",href:"https://ohmyz.sh"},"oh-my-zsh")," and ",Object(i.b)("a",{parentName:"p",href:"https://brew.sh"},"Homebrew"),". I also have a lot of aliases to speed up my work (you can check them in ",Object(i.b)("a",{parentName:"p",href:"https://github.com/MateuszDabrowski/dotfiles/blob/master/terminal/.zshrc"},"Github Repo"),")."),Object(i.b)("p",null,"On both systems, I leverage ",Object(i.b)("a",{parentName:"p",href:"https://nodejs.org/en/"},"Node.js")," for JavaScript related coding and ",Object(i.b)("a",{parentName:"p",href:"https://docs.conda.io/en/latest/miniconda.html"},"Miniconda")," to stay sane in the ",Object(i.b)("a",{parentName:"p",href:"https://xkcd.com/1987/"},"jungle full of Pythons"),"."),Object(i.b)("h3",{id:"api-client"},"API Client"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://insomnia.rest/"},"Insomnia Core"),". It is simple, and it works."),Object(i.b)("h3",{id:"design"},"Design"),Object(i.b)("p",null,"I'm not a graphic designer. I need something that is simple, fast and can output images for emails, landing pages and presentations. With such needs, there is nothing better than ",Object(i.b)("a",{parentName:"p",href:"https://www.sketch.com/"},"Sketch"),"."),Object(i.b)("h3",{id:"productivity"},"Productivity"),Object(i.b)("p",null,"Apart from the above main areas, I also love some smaller apps that make my life better (unfortunately, all Mac only):"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"https://www.alfredapp.com/"},"Alfred")," is one of the best ways to keep your hands on the keyboard all the time. And there are tons of extensions (called workflows) that make it even better. Some of my favourite:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/deanishe/alfred-convert"},"Convert")," for google-like quick conversion of various units."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/gilbarbara/alfred-workflows/tree/master/mdn-search"},"MDN Search")," for quick search in the best source of front-end dev knowledge."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/sballin/alfred-search-notes-app"},"Search Notes")," is a must-have if you use Apple Notes and want to find a specific one quickly."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/LeEnno/alfred-terminalfinder"},"TerminalFinder")," makes it quick and easy to jump between iTerm and Finder view of the folder."))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"https://numi.app/"},"Numi")," - the best calculator app you can have. By far."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"https://folivora.ai/"},"Better Touch Tool")," not only allows you to leverage gestures to their fullest but also takes care of windows snapping to the edges."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"https://mailplaneapp.com/"},"Mailplane")," - if you use Gmail and have a Mac, this app is a must."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"https://pdfexpert.com/"},"PDF Expert")," is the best PDF app you can have."),Object(i.b)("li",{parentName:"ol"},"For tasks and notes, after testing multiple options, I stuck with Apple Notes and Reminders.")))}p.isMDXComponent=!0}}]);