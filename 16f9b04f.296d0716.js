(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{138:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),b=a,h=d["".concat(o,".").concat(b)]||d[b]||p[b]||i;return n?r.a.createElement(h,s(s({ref:t},l),{},{components:n})):r.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),i=(n(0),n(138)),o={id:"letsencrypt",title:"Letsencrypt",sidebar_label:"Letsencrypt"},s={unversionedId:"applications/letsencrypt",id:"applications/letsencrypt",isDocsHomePage:!1,title:"Letsencrypt",description:"SSL certificates made easy via the script acme.sh",source:"@site/docs/applications/letsencrypt.mdx",slug:"/applications/letsencrypt",permalink:"/applications/letsencrypt",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/main/docs/applications/letsencrypt.mdx",version:"current",sidebar_label:"Letsencrypt",sidebar:"docs",previous:{title:"Librespeed",permalink:"/applications/librespeed"},next:{title:"Netdata",permalink:"/applications/netdata"}},c=[{value:"Installation",id:"installation",children:[{value:"Before Install",id:"before-install",children:[]},{value:"Setting up Let&#39;s Encrypt",id:"setting-up-lets-encrypt",children:[]}]},{value:"Renewals",id:"renewals",children:[]},{value:"Changing domains (or adding secondaries)",id:"changing-domains-or-adding-secondaries",children:[]},{value:"Certificate and Install Locations",id:"certificate-and-install-locations",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"SSL certificates made easy via the script ",Object(i.b)("inlineCode",{parentName:"p"},"acme.sh")),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("h3",{id:"before-install"},"Before Install"),Object(i.b)("p",null,"Setting up your server with a Let's Encrypt certificate is easy, though it does require a couple steps. We use the helper script ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/neilpang/acme.sh"}),"acme.sh")," for domain verification and easy renewals."),Object(i.b)("p",null,"First, you must have your own domain or a subdomain already pointed at the IP address of your server. (An ",Object(i.b)("inlineCode",{parentName:"p"},"A Record"),")."),Object(i.b)("p",null,"If you need a domain name, there are plenty of registrars, here are two that I personally use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://namecheap.com"}),"Namecheap"),"; however, if you already own your domain, you can consider transferring it to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.cloudflare.com/products/registrar/"}),"CloudFlare")," to potentially save money."),Object(i.b)("p",null,"If you are using the CloudFlare DNS option, you can use the DNS Verification method rather than the web-root verification method -- this method is a bit more resilient and less prone to future issues than the web-root error as domain verification doesn't take place on your server. If you have a CloudFlare proxy in front of your server (for instance), there can sometimes be issues with renewal which will cause it to fail. The DNS Verification should not fail where the web-root does."),Object(i.b)("p",null,"If you'd like to use DNS verification for your CloudFlare domain, make sure you grab your API Key from your CloudFlare Profile (",Object(i.b)("inlineCode",{parentName:"p"},"Profile > API Tokens > View Global API Key"),")."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Warning")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Make sure you keep your API Key safe -- it's ",Object(i.b)("strong",{parentName:"p"},"as good as")," your password in terms of modifying the settings on your account."))),Object(i.b)("h3",{id:"setting-up-lets-encrypt"},"Setting up Let's Encrypt"),Object(i.b)("p",null,"In order to start issuing a certificate use the command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo box install letsencrypt\n")),Object(i.b)("p",null,"A dialog box will pop up and ask you the domain you'd like to secure with LE:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"Enter domain name to secure with LE\ndocs.swizzin.ltd\n")),Object(i.b)("p",null,"And press enter. You'll be asked if you want to use this domain for your default site. If you say yes, the ",Object(i.b)("inlineCode",{parentName:"p"},"server_name")," variable in the default nginx configuration will be updated with the provided domain. If you say no, the script will issue a certificate, but not apply it."),Object(i.b)("p",null,'You\'ll be asked if you want to use CloudFlare. If you choose "No", the installer will continue with the web-root (.well-known) domain verification. If you choose "Yes", you\'ll be asked for your CloudFlare email and API Key (don\'t worry, this will never leave your server -- the key is stored in ',Object(i.b)("inlineCode",{parentName:"p"},"/root/.acme.sh/account.conf")," for future renewals). After entering these details, the issuing will continue."),Object(i.b)("p",null,"If everything goes well, acme.sh should declare success. If you reload your site, you should now be greeted by a valid SSL certificate, rather than a warning about invalid SSL."),Object(i.b)("h2",{id:"renewals"},"Renewals"),Object(i.b)("p",null,"Renewals are handled automatically via the cronjob that acme.sh installs during the initial run. If your server is configured correctly, you shouldn't have to worry about future renewals."),Object(i.b)("h2",{id:"changing-domains-or-adding-secondaries"},"Changing domains (or adding secondaries)"),Object(i.b)("p",null,"If you decide you've outgrown your old domain or want to update your domain, simply run the script again with:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo box install letsencrypt\n")),Object(i.b)("p",null,"There are no lock files associated with the LE script, so it can be run as many times as you like to issue certificates for as many domains as you desire."),Object(i.b)("h2",{id:"certificate-and-install-locations"},"Certificate and Install Locations"),Object(i.b)("p",null,"By default, the configuration files for acme.sh reside in:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"/root/.acme.sh\n")),Object(i.b)("p",null,'This folder contains "account" information and domains currently configured via acme.sh.'),Object(i.b)("p",null,'SSL certificates are "installed" into your nginx directory as well and this is the location you should use with your scripts when configuring where the certificates are located on your machine:'),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"/etc/nginx/ssl/<hostname.ltd>\n")))}u.isMDXComponent=!0}}]);