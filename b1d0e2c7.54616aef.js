(window.webpackJsonp=window.webpackJsonp||[]).push([[56,16],{117:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return d}));var s=a(2),n=a(6),i=(a(0),a(138)),o=a(48),c={id:"medusa",title:"Medusa",sidebar_label:"Medusa"},r={unversionedId:"applications/medusa",id:"applications/medusa",isDocsHomePage:!1,title:"Medusa",description:"(py)Medusa is an automatic video library manager for TV Shows written in Python. It watches for new episodes of your favorite shows, and when they are posted it does its magic.",source:"@site/docs/applications/medusa.mdx",slug:"/applications/medusa",permalink:"/applications/medusa",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/main/docs/applications/medusa.mdx",version:"current",sidebar_label:"Medusa",sidebar:"docs",previous:{title:"Lidarr",permalink:"/applications/lidarr"},next:{title:"Ombi",permalink:"/applications/ombi"}},l=[{value:"Initial Setup",id:"initial-setup",children:[]},{value:"How to Access",id:"how-to-access",children:[]},{value:"Service Management",id:"service-management",children:[]}],u={rightToc:l};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(s.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"(py)Medusa is an automatic video library manager for TV Shows written in Python. It watches for new episodes of your favorite shows, and when they are posted it does its magic."),Object(i.b)("h2",{id:"initial-setup"},"Initial Setup"),Object(i.b)("p",null,"Installing Medusa is easy. Simply issue the following command from SSH:"),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-plaintext",metastring:"main",main:!0}),"sudo box install medusa\n")),Object(i.b)("p",null,"This command will install and configure medusa for your user."),Object(i.b)("h2",{id:"how-to-access"},"How to Access"),Object(i.b)("p",null,"After installation, you can access Medusa at the url: ",Object(i.b)("inlineCode",{parentName:"p"},"https://<yourhostname.ltd>/medusa")),Object(i.b)("h2",{id:"service-management"},"Service Management"),Object(i.b)("p",null,"Despite using a multi-user service name, multi-user for medusa is not enabled by default."),Object(i.b)("p",null,"The systemd service file resides at:"),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-bash",metastring:"main",main:!0}),"/etc/systemd/system/medusa@.service\n")),Object(i.b)(o.default,{service:"medusa@<username>",mdxType:"SystemdTabs"}))}d.isMDXComponent=!0},139:function(e,t,a){"use strict";var s=a(0),n=a.n(s),i=a(142),o=a(140),c=a(50),r=a.n(c),l=37,u=39;t.a=function(e){var t=e.block,a=e.children,c=e.defaultValue,d=e.values,b=e.groupId,m=e.className,p=Object(i.a)(),f=p.tabGroupChoices,v=p.setTabGroupChoices,y=Object(s.useState)(c),h=y[0],O=y[1],w=Object(s.useState)(!1),j=w[0],g=w[1];if(null!=b){var T=f[b];null!=T&&T!==h&&d.some((function(e){return e.value===T}))&&O(T)}var x=function(e){O(e),null!=b&&v(b,e)},k=[],M=function(e){e.metaKey||e.altKey||e.ctrlKey||g(!0)},I=function(){g(!1)};return Object(s.useEffect)((function(){return window.addEventListener("keydown",M),window.addEventListener("mousedown",I),function(){window.removeEventListener("keydown",M),window.removeEventListener("mousedown",I)}}),[]),n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},m)},d.map((function(e){var t=e.value,a=e.label;return n.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(o.a)("tabs__item",t,r.a.tabItem,{"tabs__item--active":h===t}),style:j?{}:{outline:"none"},key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case u:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e),M(e)},onFocus:function(){return x(t)},onClick:function(){x(t),g(!1)},onPointerDown:function(){return g(!1)}},a)}))),n.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},s.Children.toArray(a).filter((function(e){return e.props.value===h}))[0]))}},48:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return u})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return m}));var s=a(2),n=a(6),i=(a(0),a(138)),o=a(139),c=a(141),r=a(143),l={},u={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",isDocsHomePage:!1,title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",slug:"/snippets/systemdtabs",permalink:"/snippets/systemdtabs",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/main/docs/snippets/systemdtabs.mdx",version:"current"},d=[],b={rightToc:d};function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(s.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"code"},Object(i.b)(o.a,{defaultValue:"start",values:[{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"start",mdxType:"TabItem"},Object(i.b)(r.a,{children:"sudo systemctl start "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(i.b)(c.a,{value:"stop",mdxType:"TabItem"},Object(i.b)(r.a,{children:"sudo systemctl stop "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(i.b)(c.a,{value:"restart",mdxType:"TabItem"},Object(i.b)(r.a,{children:"sudo systemctl restart "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(i.b)(c.a,{value:"enable",mdxType:"TabItem"},Object(i.b)(r.a,{children:"sudo systemctl enable "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(i.b)(c.a,{value:"disable",mdxType:"TabItem"},Object(i.b)(r.a,{children:"sudo systemctl disable "+a.service,className:"bash",mdxType:"CodeBlock"})))))}m.isMDXComponent=!0}}]);