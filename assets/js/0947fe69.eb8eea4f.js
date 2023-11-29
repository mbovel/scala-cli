"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6021],{7221:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>t,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var c=o(5893),n=o(1151);const i={title:"Packaging Scala applications as Docker images",sidebar_position:15},s=void 0,r={id:"cookbooks/scala-docker",title:"Packaging Scala applications as Docker images",description:"Scala CLI can create an executable application and package it into a Docker image.",source:"@site/docs/cookbooks/scala-docker.md",sourceDirName:"cookbooks",slug:"/cookbooks/scala-docker",permalink:"/docs/cookbooks/scala-docker",draft:!1,unlisted:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/cookbooks/scala-docker.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{title:"Packaging Scala applications as Docker images",sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"Packaging Scala applications as executable files",permalink:"/docs/cookbooks/scala-package"},next:{title:"Packaging Scala applications as GraalVM native images",permalink:"/docs/cookbooks/native-images"}},t={},l=[];function d(e){const a={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a.p,{children:"Scala CLI can create an executable application and package it into a Docker image."}),"\n",(0,c.jsx)(a.p,{children:"For example, here's a simple piece of code that will be executed in a Docker container:"}),"\n",(0,c.jsx)(a.pre,{children:(0,c.jsx)(a.code,{className:"language-scala",metastring:"title=HelloDocker.scala",children:'object HelloDocker extends App {\n    println("Hello from Docker")\n}\n'})}),"\n",(0,c.jsxs)(a.p,{children:["Passing ",(0,c.jsx)(a.code,{children:"--docker"})," to the ",(0,c.jsx)(a.code,{children:"package"})," sub-command generates a Docker image. When creating a Docker image, the ",(0,c.jsx)(a.code,{children:"--docker-image-repository"})," parameter is mandatory."]}),"\n",(0,c.jsxs)(a.p,{children:["The following command generates a ",(0,c.jsx)(a.code,{children:"hello-docker"})," image with the ",(0,c.jsx)(a.code,{children:"latest"})," tag:"]}),"\n",(0,c.jsx)(a.pre,{children:(0,c.jsx)(a.code,{className:"language-bash",children:"scala-cli --power package --docker HelloDocker.scala --docker-image-repository hello-docker\n"})}),"\n",(0,c.jsx)(a.pre,{children:(0,c.jsx)(a.code,{className:"language-bash",children:"docker run hello-docker\n# Hello from Docker\n"})}),"\n",(0,c.jsx)(a.p,{children:"You can also package your app in the Scala.js or Scala Native environments.\nFor example, this command creates a Scala.js Docker image:"}),"\n",(0,c.jsx)(a.pre,{children:(0,c.jsx)(a.code,{className:"language-bash",children:"scala-cli --power package --js --docker HelloDocker.scala --docker-image-repository hello-docker\n"})}),"\n",(0,c.jsx)(a.p,{children:"This command creates a Scala Native Docker image:"}),"\n",(0,c.jsx)(a.pre,{children:(0,c.jsx)(a.code,{className:"language-bash",metastring:"ignore",children:"scala-cli --power package --native --docker HelloDocker.scala --docker-image-repository hello-docker\n"})}),"\n",(0,c.jsx)(a.admonition,{type:"note",children:(0,c.jsx)(a.p,{children:"Packaging a Scala Native application to a Docker image is supported only on Linux."})})]})}function p(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,c.jsx)(a,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},1151:(e,a,o)=>{o.d(a,{Z:()=>r,a:()=>s});var c=o(7294);const n={},i=c.createContext(n);function s(e){const a=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),c.createElement(i.Provider,{value:a},e.children)}}}]);