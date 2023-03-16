"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8134],{9705:function(e,a,t){t.d(a,{m:function(){return l},v:function(){return i}});var n=t(7294),s=t(2004);function i(e){var a=e.children;return n.createElement("div",{className:"runnable-command"},a)}function l(e){var a=e.url;return n.createElement(s.Z,{playing:!0,loop:!0,muted:!0,controls:!0,width:"100%",height:"",url:a})}},9861:function(e,a,t){t.r(a),t.d(a,{assets:function(){return m},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return c},metadata:function(){return o},toc:function(){return d}});var n=t(3117),s=t(102),i=(t(7294),t(3905)),l=t(9705),r=["components"],c={title:"Scripts",sidebar_position:30},p="Scripts",o={unversionedId:"guides/scripts",id:"guides/scripts",title:"Scripts",description:"Scala CLI accepts Scala scripts as files that end in .sc.",source:"@site/docs/guides/scripts.md",sourceDirName:"guides",slug:"/guides/scripts",permalink:"/docs/guides/scripts",draft:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/guides/scripts.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"Scripts",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Migrating from the old Scala runner",permalink:"/docs/guides/old-runner-migration"},next:{title:"Shebang",permalink:"/docs/guides/shebang"}},m={},d=[{value:"Self executable Scala Script",id:"self-executable-scala-script",level:3},{value:"Arguments",id:"arguments",level:3},{value:"Define source files in using directives",id:"define-source-files-in-using-directives",level:3},{value:"Difference with Ammonite scripts",id:"difference-with-ammonite-scripts",level:3}],u={toc:d};function h(e){var a=e.components,t=(0,s.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"scripts"},"Scripts"),(0,i.kt)("p",null,"Scala CLI accepts Scala scripts as files that end in ",(0,i.kt)("inlineCode",{parentName:"p"},".sc"),".\nUnlike ",(0,i.kt)("inlineCode",{parentName:"p"},".scala")," files, in scripts, any kind of statement is accepted at the top-level:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=hello.sc",title:"hello.sc"},'val message = "Hello from Scala script"\nprintln(message)\n')),(0,i.kt)("p",null,"A script is run with the Scala CLI command:"),(0,i.kt)(l.v,{mdxType:"ChainedSnippets"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli hello.sc\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Hello from Scala script\n"))),(0,i.kt)("p",null,"The way this works is that a script is wrapped in an ",(0,i.kt)("inlineCode",{parentName:"p"},"object")," before it's passed to the Scala compiler, and a ",(0,i.kt)("inlineCode",{parentName:"p"},"main"),"\nmethod is added to it.\nIn the previous example, when the ",(0,i.kt)("inlineCode",{parentName:"p"},"hello.sc")," script is passed to the compiler, the altered code looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'object hello {\n  val message = "Hello from Scala script"\n  println(message)\n\n  def main(args: Array[String]): Unit = ()\n}\n')),(0,i.kt)("p",null,"The name ",(0,i.kt)("inlineCode",{parentName:"p"},"hello")," comes from the file name, ",(0,i.kt)("inlineCode",{parentName:"p"},"hello.sc"),"."),(0,i.kt)("p",null,"When a script is in a sub-directory, a package name is also inferred:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=my-app/constants/messages.sc",title:"my-app/constants/messages.sc"},'def hello = "Hello from Scala scripts"\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=my-app/main.sc",title:"my-app/main.sc"},"import constants.messages\nprintln(messages.hello)\n")),(0,i.kt)("p",null,"Please note: when referring to code from another script, the actual relative path from the project root is used for the\npackage path. In the example above, as ",(0,i.kt)("inlineCode",{parentName:"p"},"messages.sc")," is located in the ",(0,i.kt)("inlineCode",{parentName:"p"},"my-app/constants/")," directory, to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"hello"),"\nfunction you have to call ",(0,i.kt)("inlineCode",{parentName:"p"},"constants.messages.hello"),"."),(0,i.kt)("p",null,"When referring to code from a piped script, just use its wrapper name: ",(0,i.kt)("inlineCode",{parentName:"p"},"stdin"),"."),(0,i.kt)(l.v,{mdxType:"ChainedSnippets"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"echo '@main def main() = println(stdin.message)' > PrintMessage.scala\necho 'def message: String = \"Hello\"' | scala-cli PrintMessage.scala _.sc\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Hello\n"))),(0,i.kt)("p",null,"To specify a main class when running a script, use this command:"),(0,i.kt)(l.v,{mdxType:"ChainedSnippets"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli my-app --main-class main_sc\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Hello from Scala scripts\n"))),(0,i.kt)("p",null,"Both of the previous scripts (",(0,i.kt)("inlineCode",{parentName:"p"},"hello.sc")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"main.sc"),") automatically get a main class, so this is required to\ndisambiguate them. If a main class coming from a regular ",(0,i.kt)("inlineCode",{parentName:"p"},".scala")," file is present in your app's context, that will be\nrun by default if the ",(0,i.kt)("inlineCode",{parentName:"p"},"--main-class")," param is not explicitly specified."),(0,i.kt)("p",null,"When in doubt, you can always list the main classes present in your app by passing ",(0,i.kt)("inlineCode",{parentName:"p"},"--list-main-classes"),"."),(0,i.kt)(l.v,{mdxType:"ChainedSnippets"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"echo '@main def main1() = println(\"main1\")' > main1.scala\necho '@main def main2() = println(\"main2\")' > main2.scala\necho 'println(\"on-disk script\")' > script.sc\necho 'println(\"piped script\")' | scala-cli --list-main-classes _.sc main1.scala main2.scala script.sc\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"stdin_sc script_sc main2 main1\n"))),(0,i.kt)("h3",{id:"self-executable-scala-script"},"Self executable Scala Script"),(0,i.kt)("p",null,"You can define a file with the \u201cshebang\u201d header to be self-executable. Please remember to use ",(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli shebang"),"\ncommand, which makes Scala CLI compatible with Unix shebang interpreter directive. For example, given this script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=HelloScript.sc",title:"HelloScript.sc"},'#!/usr/bin/env -S scala-cli shebang\nprintln("Hello world")\n')),(0,i.kt)("p",null,"You can make it executable and run it, just like any other shell script:"),(0,i.kt)(l.v,{mdxType:"ChainedSnippets"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"chmod +x HelloScript.sc\n./HelloScript.sc\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Hello world\n"))),(0,i.kt)("p",null,"It is also possible to set Scala CLI command-line options in the shebang line, for example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=Shebang213.sc",title:"Shebang213.sc"},"#!/usr/bin/env -S scala-cli shebang --scala-version 2.13\n")),(0,i.kt)("p",null,"The command ",(0,i.kt)("inlineCode",{parentName:"p"},"shebang")," also allows script files to be executed even if they have no file extension,\nprovided they start with the ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/shebang#shebang-script-headers"},(0,i.kt)("inlineCode",{parentName:"a"},"shebang")," header"),".\nNote that those files are always run as scripts even though they may contain e.g. valid ",(0,i.kt)("inlineCode",{parentName:"p"},".scala")," program."),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("p",null,"You may also pass arguments to your script, and they are referenced with the special ",(0,i.kt)("inlineCode",{parentName:"p"},"args")," variable:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=p.sc",title:"p.sc"},"#!/usr/bin/env -S scala-cli shebang\n\nprintln(args(1))\n")),(0,i.kt)(l.v,{mdxType:"ChainedSnippets"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"chmod +x p.sc\n./p.sc hello world\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"world\n"))),(0,i.kt)("h3",{id:"define-source-files-in-using-directives"},"Define source files in using directives"),(0,i.kt)("p",null,"You can also add source files with the using directive ",(0,i.kt)("inlineCode",{parentName:"p"},"//> using file")," in Scala scripts:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=main.sc",title:"main.sc"},'//> using file "Utils.scala" \n\nprintln(Utils.message)\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=Utils.scala",title:"Utils.scala"},'object Utils {\n  val message = "Hello World"\n}\n')),(0,i.kt)("p",null,"Scala CLI takes into account and compiles ",(0,i.kt)("inlineCode",{parentName:"p"},"Utils.scala"),"."),(0,i.kt)(l.v,{mdxType:"ChainedSnippets"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli main.sc\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Hello World\n"))),(0,i.kt)("h3",{id:"difference-with-ammonite-scripts"},"Difference with Ammonite scripts"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://ammonite.io"},"Ammonite")," is a popular REPL for Scala that can also compile and run ",(0,i.kt)("inlineCode",{parentName:"p"},".sc")," files."),(0,i.kt)("p",null,"Scala CLI and Ammonite are similar, but differ significantly when your code is split in multiple scripts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In Ammonite, a script needs to use ",(0,i.kt)("inlineCode",{parentName:"li"},"import $file")," directives to use values defined in another script"),(0,i.kt)("li",{parentName:"ul"},"With Scala CLI, all scripts passed can reference each other without such directives")),(0,i.kt)("p",null,"On the other hand:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'You can pass a single "entry point" script as input to Ammonite, and Ammonite finds the scripts it depends on via\nthe ',(0,i.kt)("inlineCode",{parentName:"li"},"import $file")," directives"),(0,i.kt)("li",{parentName:"ul"},"Scala CLI requires all scripts to be passed beforehand, either one-by-one, or by putting them in a directory, and\npassing the directory to Scala CLI")))}h.isMDXComponent=!0}}]);