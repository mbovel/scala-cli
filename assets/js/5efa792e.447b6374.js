"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1476],{9705:function(e,n,t){t.d(n,{m:function(){return s},v:function(){return o}});var a=t(7294),i=t(2004);function o(e){var n=e.children;return a.createElement("div",{className:"runnable-command"},n)}function s(e){var n=e.url;return a.createElement(i.Z,{playing:!0,loop:!0,muted:!0,controls:!0,width:"100%",height:"",url:n})}},361:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=t(3117),i=t(102),o=(t(7294),t(3905)),s=t(9705),r=["components"],l={title:"Version",sidebar_position:25},c=void 0,p={unversionedId:"commands/version",id:"commands/version",title:"Version",description:"The version sub-command prints the currently used Scala CLI version and the associated Scala version.",source:"@site/docs/commands/version.md",sourceDirName:"commands",slug:"/commands/version",permalink:"/docs/commands/version",draft:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/commands/version.md",tags:[],version:"current",sidebarPosition:25,frontMatter:{title:"Version",sidebar_position:25},sidebar:"tutorialSidebar",previous:{title:"Completions",permalink:"/docs/commands/completions"},next:{title:"Shebang",permalink:"/docs/commands/shebang"}},d={},u=[],m={toc:u};function h(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"version")," sub-command prints the currently used Scala CLI version and the associated Scala version."),(0,o.kt)(s.v,{mdxType:"ChainedSnippets"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli version\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Scala CLI version: 0.1.19\nScala version (default): 3.2.1\n"))),(0,o.kt)("p",null,"It is also possible to print the same output with the ",(0,o.kt)("inlineCode",{parentName:"p"},"-version")," option passed to the default sub-command.\nThis way doesn't allow to use the other options relevant to ",(0,o.kt)("inlineCode",{parentName:"p"},"version"),", however."),(0,o.kt)(s.v,{mdxType:"ChainedSnippets"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli -version\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Scala CLI version: 0.1.19\nScala version (default): 3.2.1\n"))),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"version")," is called, Scala CLI will automatically check if it's up to date.\nIf your version is outdated, you will get a warning."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Your Scala CLI. version is outdated. The newest version is 0.1.19\nIt is recommended that you update Scala CLI through the same tool or method you used for its initial installation for avoiding the creation of outdated duplicates.\n")),(0,o.kt)("p",null,"You can skip checking if Scala CLI is up to date by passing the ",(0,o.kt)("inlineCode",{parentName:"p"},"--offline")," option."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli version --offline\n")),(0,o.kt)("p",null,"It's also possible to just print the raw Scala CLI version with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--cli-version")," option.\nThis won't check if the app is outdated, so the ",(0,o.kt)("inlineCode",{parentName:"p"},"--offline")," option is unnecessary in this context."),(0,o.kt)(s.v,{mdxType:"ChainedSnippets"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli version --cli-version\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"0.1.19\n"))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Do not confuse the ",(0,o.kt)("inlineCode",{parentName:"p"},"version")," sub-command's ",(0,o.kt)("inlineCode",{parentName:"p"},"--cli-version")," option with the launcher option under the same name, as they\ndo different things. The former prints the raw Scala CLI version, while the latter allows to change the Scala CLI\nlauncher version. In fact, both of them can be used at one time."),(0,o.kt)(s.v,{mdxType:"ChainedSnippets"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli --cli-version 0.1.18 version --cli-version\n")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"0.1.18\n"))),(0,o.kt)("p",{parentName:"admonition"},"Launcher options have to be passed before the sub-command is specified, which allows to differentiate between them.")),(0,o.kt)("p",null,"Similarly, it's possible to just print the raw default Scala version.\nOnce more, this won't check if the app is outdated, so the ",(0,o.kt)("inlineCode",{parentName:"p"},"--offline")," option is unnecessary in this context as well."),(0,o.kt)(s.v,{mdxType:"ChainedSnippets"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli version --scala-version\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"3.2.1\n"))))}h.isMDXComponent=!0}}]);