"use strict";(self.webpackChunkwarewulf=self.webpackChunkwarewulf||[]).push([[867],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,d=p["".concat(c,".").concat(m)]||p[m]||h[m]||o;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1592:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return h}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],u={id:"contributing",title:"Contributing"},c={unversionedId:"contributing/contributing",id:"contributing/contributing",isDocsHomePage:!1,title:"Contributing",description:"Warewulf is an open source project, meaning we have the challenge of limited resources. We are grateful for any support that you can offer. Helping other users, raising issues, helping write documentation, or contributing code are all ways to help!",source:"@site/docs/contributing/contributing.md",sourceDirName:"contributing",slug:"/contributing/contributing",permalink:"/docs/contributing/contributing",editUrl:"https://github.com/hpcng/warewulf-web/edit/main/docs/contributing/contributing.md",version:"current",frontMatter:{id:"contributing",title:"Contributing"},sidebar:"someSidebar",previous:{title:"openSUSE Leap and SLES 15 Quickstart",permalink:"/docs/quickstart/suse15"},next:{title:"Documentation",permalink:"/docs/contributing/documentation"}},s=[{value:"Join the community",id:"join-the-community",children:[{value:"Warewulf on Slack",id:"warewulf-on-slack",children:[]}]},{value:"Raise an Issue",id:"raise-an-issue",children:[]},{value:"Contribute to the code",id:"contribute-to-the-code",children:[{value:"Step 1. Fork the repo",id:"step-1-fork-the-repo",children:[]},{value:"Step 2. Checkout a new branch",id:"step-2-checkout-a-new-branch",children:[]},{value:"Step 3. Make your changes",id:"step-3-make-your-changes",children:[]},{value:"Step 4. Push your branch to your fork",id:"step-4-push-your-branch-to-your-fork",children:[]},{value:"Step 5. Submit a Pull Request",id:"step-5-submit-a-pull-request",children:[]},{value:"Step 6. Keep your branch in sync",id:"step-6-keep-your-branch-in-sync",children:[]}]}],l={toc:s};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Warewulf is an open source project, meaning we have the challenge of limited resources. We are grateful for any support that you can offer. Helping other users, raising issues, helping write documentation, or contributing code are all ways to help!"),(0,o.kt)("h2",{id:"join-the-community"},"Join the community"),(0,o.kt)("p",null,"This is a huge endeavor, and your help would be greatly appreciated! Post to online communities about Warewulf, and request that your distribution vendor, service provider, and system administrators include Warewulf for you!"),(0,o.kt)("h3",{id:"warewulf-on-slack"},"Warewulf on Slack"),(0,o.kt)("p",null,"Many of our users come to Slack for quick help with an issue. You can find us at ",(0,o.kt)("a",{parentName:"p",href:"https://join.slack.com/t/hpcng/shared_invite/zt-k9atb2dj-rnlPjSh5Os3Ks6vlDEOyAA"},"HPCng"),"."),(0,o.kt)("h2",{id:"raise-an-issue"},"Raise an Issue"),(0,o.kt)("p",null,"For general bugs/issues, you can open an issue ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/hpcng/warewulf/issues/new"},"at the GitHub repo"),". However, if you find a security  related issue/problem, please email HPCng directly at ",(0,o.kt)("a",{parentName:"p",href:"mailto:security@hpcng.org"},"security@hpcng.org"),". More information about the HPCng security policies and procedures can be found ",(0,o.kt)("a",{parentName:"p",href:"https://hpcng.org/security-policy"},"here"),"."),(0,o.kt)("h2",{id:"contribute-to-the-code"},"Contribute to the code"),(0,o.kt)("p",null,"We use the traditional ",(0,o.kt)("a",{parentName:"p",href:"https://guides.github.com/introduction/flow"},"GitHub Flow")," to develop. This means that you fork the main repo, create a new branch to make changes, and submit a pull request (PR) to the master branch."),(0,o.kt)("p",null,"Check out our official ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/hpcng/warewulf/blob/master/CONTRIBUTING.md"},"CONTRIBUTING.md")," document, which also includes a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/hpcng/warewulf/blob/master/CONTRIBUTING.md#code-of-conduct"},"code of conduct"),"."),(0,o.kt)("h3",{id:"step-1-fork-the-repo"},"Step 1. Fork the repo"),(0,o.kt)("p",null,"To contribute to Warewulf, you should obtain a GitHub account and fork the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/hpcng/warewulf"},"Warewulf")," repository. Once forked, clone your fork of the repo to your computer. (Obviously, you should replace ",(0,o.kt)("inlineCode",{parentName:"p"},"your-username")," with your GitHub username.)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/your-username/warewulf.git\ncd warewulf\n")),(0,o.kt)("h3",{id:"step-2-checkout-a-new-branch"},"Step 2. Checkout a new branch"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://guides.github.com/introduction/flow"},"Branches")," are a way of\nisolating your features from the main branch. Given that we\u2019ve just cloned the\nrepo, we will probably want to make a new branch from master in which to work on\nour new feature. Lets call that branch ",(0,o.kt)("inlineCode",{parentName:"p"},"new-feature"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout master\ngit checkout -b new-feature\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can always check which branch you are in by running ",(0,o.kt)("inlineCode",{parentName:"p"},"git branch"),"."))),(0,o.kt)("h3",{id:"step-3-make-your-changes"},"Step 3. Make your changes"),(0,o.kt)("p",null,"On your new branch, go nuts! Make changes, test them, and when you are happy commit the changes to the branch:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'git add file-changed1 file-changed2...\ngit commit -m "what changed?"\n')),(0,o.kt)("p",null,"This commit message is important - it should describe exactly the changes that you have made. Good commit messages read like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'git commit -m "changed function getConfig in functions.go to output csv to fix #2"\ngit commit -m "updated docs about shell to close #10"\n')),(0,o.kt)("p",null,"The tags ",(0,o.kt)("inlineCode",{parentName:"p"},"close #10")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"fix #2")," are referencing issues that are posted on the upstream repo where you will direct your pull request. When your PR is merged into the master branch, these messages will automatically close the issues, and further, they will link your commits directly to the issues they intend to fix. This will help future maintainers understand your contribution, or (hopefully not) revert the code back to a previous version if necessary."),(0,o.kt)("h3",{id:"step-4-push-your-branch-to-your-fork"},"Step 4. Push your branch to your fork"),(0,o.kt)("p",null,"When you are done with your commits, you should push your branch to your fork (and you can also continuously push commits here as you work):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git push origin new-feature\n")),(0,o.kt)("p",null,"Note that you should always check the status of your branches to see what has been pushed (or not):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git status\n")),(0,o.kt)("h3",{id:"step-5-submit-a-pull-request"},"Step 5. Submit a Pull Request"),(0,o.kt)("p",null,"Once you have pushed your branch, then you can go to your fork (in the web GUI on GitHub) and ",(0,o.kt)("a",{parentName:"p",href:"https://help.github.com/articles/creating-a-pull-request"},"submit a Pull Request"),". Regardless of the name of your branch, your PR should be submitted to the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," branch. Submitting your PR will open a conversation thread for the maintainers of Warewulf to discuss your contribution. At this time, the continuous integration that is linked with the code base will also be executed. If there is an issue, or if the maintainers suggest changes, you can continue to push commits to your branch and they will update the Pull Request."),(0,o.kt)("h3",{id:"step-6-keep-your-branch-in-sync"},"Step 6. Keep your branch in sync"),(0,o.kt)("p",null,"Cloning the repo will create an exact copy of the Warewulf repository at that moment. As you work, your branch may become out of date as others merge changesinto the upstream master. In the event that you need to update a branch, you will need to follow the next steps:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# add a new remote named "upstream"\ngit remote add upstream https://github.com/hpcng/warewulf.git\n# or another branch to be updated\ngit checkout master\ngit pull upstream master\n# to update your fork\ngit push origin master\ngit checkout new-feature\ngit merge master\n')))}h.isMDXComponent=!0}}]);