"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4341],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,h=u["".concat(o,".").concat(m)]||u[m]||d[m]||l;return t?a.createElement(h,i(i({ref:n},c),{},{components:t})):a.createElement(h,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=u;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9410:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var a,r=t(3117),l=t(102),i=(t(7294),t(3905)),s=["components"],o={title:"Shebang",sidebar_position:31},p=void 0,c={unversionedId:"guides/shebang",id:"guides/shebang",title:"Shebang",description:"This guide explains the differences between the run and shebang sub-commands, mainly covering how each of them",source:"@site/docs/guides/shebang.md",sourceDirName:"guides",slug:"/guides/shebang",permalink:"/docs/guides/shebang",draft:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/guides/shebang.md",tags:[],version:"current",sidebarPosition:31,frontMatter:{title:"Shebang",sidebar_position:31},sidebar:"tutorialSidebar",previous:{title:"Scripts",permalink:"/docs/guides/scripts"},next:{title:"Scala.js",permalink:"/docs/guides/scala-js"}},d={},u=[{value:"<code>shebang</code> script headers",id:"shebang-script-headers",level:3},{value:"<code>shebang</code> and the command line",id:"shebang-and-the-command-line",level:3},{value:"Script files&#39; extensions",id:"script-files-extensions",level:3}],m=(a="ChainedSnippets",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),h={toc:u};function g(e){var n=e.components,t=(0,l.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide explains the differences between the ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"shebang")," sub-commands, mainly covering how each of them\nparses its arguments."),(0,i.kt)("h3",{id:"shebang-script-headers"},(0,i.kt)("inlineCode",{parentName:"h3"},"shebang")," script headers"),(0,i.kt)("p",null,"Before proceeding, let's discuss how Scala CLI works in a script without the ",(0,i.kt)("inlineCode",{parentName:"p"},"shebang")," command.\nHere is a simple ",(0,i.kt)("inlineCode",{parentName:"p"},"hello.sc")," script with a ",(0,i.kt)("inlineCode",{parentName:"p"},"shebang")," header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=hello.sc",title:"hello.sc"},"#!/usr/bin/env -S scala-cli -S 3\n\nprintln(args.size)\nprintln(args.headOption)\n")),(0,i.kt)("p",null,"And it works correctly:"),(0,i.kt)(m,{mdxType:"ChainedSnippets"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"chmod +x hello.sc\n./hello.sc    \n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"0\nNone\n"))),(0,i.kt)("p",null,"And it also works:"),(0,i.kt)(m,{mdxType:"ChainedSnippets"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./hello.sc -- Hello World\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"2\nSome(Hello)\n"))),(0,i.kt)("p",null,"Note that the extra ",(0,i.kt)("inlineCode",{parentName:"p"},"--")," must be added to make it work. If it is not supplied, the result is:"),(0,i.kt)(m,{mdxType:"ChainedSnippets"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"run-fail","run-fail":!0},"./hello.sc Hello World\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"[error] Hello: input file not found\nWorld: input file not found\n"))),(0,i.kt)("p",null,"If we modify our script slightly and use the ",(0,i.kt)("inlineCode",{parentName:"p"},"shebang")," sub-command in the header, we will get the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=hello.sc",title:"hello.sc"},"#!/usr/bin/env -S scala-cli shebang -S 3\n\nprintln(args.size)\nprintln(args.headOption)\n")),(0,i.kt)(m,{mdxType:"ChainedSnippets"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./hello.sc Hello World\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"2\nSome(Hello)\n"))),(0,i.kt)("h3",{id:"shebang-and-the-command-line"},(0,i.kt)("inlineCode",{parentName:"h3"},"shebang")," and the command line"),(0,i.kt)("p",null,"Let's now see how the ",(0,i.kt)("inlineCode",{parentName:"p"},"shebang")," command works straight from the command line."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=Main.scala",title:"Main.scala"},'object Main {\n  def main(args: Array[String]): Unit = println(args.mkString(" "))\n}  \n')),(0,i.kt)(m,{mdxType:"ChainedSnippets"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli shebang Main.scala Hello world\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Hello world\n"))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Please note that ",(0,i.kt)("inlineCode",{parentName:"p"},"shebang")," changing how arguments are parsed means that every option after the first input will be treated as\nan argument to the app."),(0,i.kt)(m,{mdxType:"ChainedSnippets"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli shebang Main.scala -S 2.13 #-S 2.13 is not recognised as an option, but as app arguments\n")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-text"},"-S 2.13\n")))),(0,i.kt)("p",null,"If we try to do the same with the ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," sub-command, we get the following error:"),(0,i.kt)(m,{mdxType:"ChainedSnippets"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"run-fail","run-fail":!0},"scala-cli run Main.scala Hello world\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"[error]  Hello: input file not found\nworld: input file not found\n"))),(0,i.kt)("h3",{id:"script-files-extensions"},"Script files' extensions"),(0,i.kt)("p",null,"When running the ",(0,i.kt)("inlineCode",{parentName:"p"},"shebang")," subcommand, script files don't need the ",(0,i.kt)("inlineCode",{parentName:"p"},".sc")," extension,\nbut they are then REQUIRED to start with a shebang line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=hello-with-shebang",title:"hello-with-shebang"},"#!/usr/bin/env -S scala-cli shebang -S 3\n\nprintln(args.size)\nprintln(args.headOption)\n")),(0,i.kt)(m,{mdxType:"ChainedSnippets"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"chmod +x hello-with-shebang\n./hello-with-shebang Hello World\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"2\nSome(Hello)\n"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=hello-no-shebang",title:"hello-no-shebang"},"println(args.size)\nprintln(args.headOption)\n")),(0,i.kt)(m,{mdxType:"ChainedSnippets"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"run-fail","run-fail":!0},"chmod +x hello-no-shebang\nscala-cli shebang hello-no-shebang Hello World\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"hello-no-shebang: unrecognized source type (expected .scala or .sc extension, or a directory)\n"))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Files with no extensions are always run as scripts even though they may contain e.g. valid ",(0,i.kt)("inlineCode",{parentName:"p"},".scala")," program.")))}g.isMDXComponent=!0}}]);