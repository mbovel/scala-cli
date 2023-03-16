"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3782],{9705:function(e,t,n){n.d(t,{m:function(){return i},v:function(){return l}});var a=n(7294),s=n(2004);function l(e){var t=e.children;return a.createElement("div",{className:"runnable-command"},t)}function i(e){var t=e.url;return a.createElement(s.Z,{playing:!0,loop:!0,muted:!0,controls:!0,width:"100%",height:"",url:t})}},4543:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return d}});var a=n(3117),s=n(102),l=(n(7294),n(3905)),i=n(9705),o=["components"],r={title:"Setup multiple Scala CLI projects in IDEA IntelliJ as separate modules",sidebar_position:13},p=void 0,c={unversionedId:"cookbooks/intellij-multi-bsp",id:"cookbooks/intellij-multi-bsp",title:"Setup multiple Scala CLI projects in IDEA IntelliJ as separate modules",description:"If you've read through the basic IDEA IntelliJ cookbook, then you already know how to import a Scala CLI",source:"@site/docs/cookbooks/intellij-multi-bsp.md",sourceDirName:"cookbooks",slug:"/cookbooks/intellij-multi-bsp",permalink:"/docs/cookbooks/intellij-multi-bsp",draft:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/cookbooks/intellij-multi-bsp.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"Setup multiple Scala CLI projects in IDEA IntelliJ as separate modules",sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Setup a Scala CLI project in IntelliJ alongside your existing SBT project",permalink:"/docs/cookbooks/intellij-sbt-with-bsp"},next:{title:"Packaging Scala applications as executable files",permalink:"/docs/cookbooks/scala-package"}},u={},d=[],m={toc:d};function h(e){var t=e.components,r=(0,s.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"If you've read through ",(0,l.kt)("a",{parentName:"p",href:"/docs/cookbooks/intellij"},"the basic IDEA IntelliJ cookbook"),", then you already know how to import a Scala CLI\nproject using ",(0,l.kt)("inlineCode",{parentName:"p"},"BSP"),". However, in some cases importing a single project just does not fit the bill."),(0,l.kt)("p",null,"Here's a walk-through for a slightly more advanced scenario."),(0,l.kt)("p",null,"Let's say we keep the sources for 2 separate Scala apps in one repository. Each has its own subdirectory, to keep things\nclean. Additionally, you have another one for scripts alongside them."),(0,l.kt)("p",null,"It looks somewhat similar to this:"),(0,l.kt)(i.v,{mdxType:"ChainedSnippets"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"tree -a\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},".\n\u251c\u2500\u2500 app1\n\u2502\xa0\xa0 \u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 HelloWorld1.scala\n\u2502\xa0\xa0 \u2514\u2500\u2500 test\n\u2502\xa0\xa0     \u2514\u2500\u2500 MyTests1.test.scala\n\u251c\u2500\u2500 app2\n\u2502\xa0\xa0 \u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 HelloWorld2.scala\n\u2502\xa0\xa0 \u2514\u2500\u2500 test\n\u2502\xa0\xa0     \u2514\u2500\u2500 MyTests2.test.scala\n\u2514\u2500\u2500 scripts\n    \u251c\u2500\u2500 AnotherScript.sc\n    \u2514\u2500\u2500 SomeScript.sc\n\n7 directories, 6 files\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=app1/src/HelloWorld1.scala",title:"app1/src/HelloWorld1.scala"},'@main def hello: Unit = println("hello1")\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=app1/test/MyTests1.scala",title:"app1/test/MyTests1.scala"},'//> using dep "org.scalameta::munit:1.0.0-M7"\nclass MyTests1 extends munit.FunSuite {\n  test("my test 1") {\n    assert(2 + 2 == 4)\n  }\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=app2/src/HelloWorld2.scala",title:"app2/src/HelloWorld2.scala"},'@main def hello: Unit = println("hello2")\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=app2/test/MyTests2.scala",title:"app2/test/MyTests2.scala"},'//> using dep "com.lihaoyi::utest::0.8.1"\n\nimport utest.*\n\nobject MessagesTests extends TestSuite {\n  val tests = Tests {\n    test("my test 2") {\n      assert(2 + 2 == 4)\n    }\n  }\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=scripts/SomeScript.sc",title:"scripts/SomeScript.sc"},'println("some script")\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=scripts/AnotherScript.sc",title:"scripts/AnotherScript.sc"},'println("another script")\n'))),(0,l.kt)("p",null,"When running these apps, you'd like to run them separately. ",(0,l.kt)("inlineCode",{parentName:"p"},"app1")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"app2")," may have conflicting dependencies, or it\nmay just not feel hygienic to share their classpath long term."),(0,l.kt)("p",null,"However, you keep those in one repository because of business relevance (or whatever other reasons why they are tied\ntogether), and so, you'd like to see them all at once in your IDE, with all the syntax coloring, completions and\ndebugging\nyour code straight from the IDE, the whole shebang."),(0,l.kt)("p",null,"It's tempting to just run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli setup-ide .\n")),(0,l.kt)("p",null,"Unfortunately, in this case that won't really do the trick. Even if you run and package the apps & scripts from the\nterminal separately, when importing everything together to your IDE like this, the single ",(0,l.kt)("inlineCode",{parentName:"p"},"BSP")," project will make them\nshare their classpath. This in turn means that things will break."),(0,l.kt)("p",null,"The only way to solve this is for each to have its own ",(0,l.kt)("inlineCode",{parentName:"p"},"BSP")," configuration, really.\nAnd so:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli setup-ide app1\nscala-cli setup-ide app2\nscala-cli setup-ide scripts\n")),(0,l.kt)("p",null,"As a result, a separate ",(0,l.kt)("inlineCode",{parentName:"p"},".bsp")," directory was created in ",(0,l.kt)("inlineCode",{parentName:"p"},"app1"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"app2")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"scripts"),", respectively."),(0,l.kt)(i.v,{mdxType:"ChainedSnippets"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"tree -a\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},".\n\u251c\u2500\u2500 app1\n\u2502\xa0\xa0 \u251c\u2500\u2500 .bsp\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 scala-cli.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 .scala-build\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 ide-inputs.json\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 ide-options-v2.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 HelloWorld1.scala\n\u2502\xa0\xa0 \u2514\u2500\u2500 test\n\u2502\xa0\xa0     \u2514\u2500\u2500 MyTests1.test.scala\n\u251c\u2500\u2500 app2\n\u2502\xa0\xa0 \u251c\u2500\u2500 .bsp\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 scala-cli.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 .scala-build\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 ide-inputs.json\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 ide-options-v2.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 HelloWorld2.scala\n\u2502\xa0\xa0 \u2514\u2500\u2500 test\n\u2502\xa0\xa0     \u2514\u2500\u2500 MyTests2.test.scala\n\u2514\u2500\u2500 scripts\n    \u251c\u2500\u2500 .bsp\n    \u2502\xa0\xa0 \u2514\u2500\u2500 scala-cli.json\n    \u251c\u2500\u2500 .scala-build\n    \u2502\xa0\xa0 \u251c\u2500\u2500 ide-inputs.json\n    \u2502\xa0\xa0 \u2514\u2500\u2500 ide-options-v2.json\n    \u251c\u2500\u2500 AnotherScript.sc\n    \u2514\u2500\u2500 SomeScript.sc\n\n13 directories, 15 files\n\n\n\n"))),(0,l.kt)("p",null,"After opening the root directory in ",(0,l.kt)("inlineCode",{parentName:"p"},"IntelliJ")," (",(0,l.kt)("inlineCode",{parentName:"p"},"File")," -> ",(0,l.kt)("inlineCode",{parentName:"p"},"Open..."),"), the 3 ",(0,l.kt)("inlineCode",{parentName:"p"},"BSP")," setups should be successfully\ndetected."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"IntelliJ noticed the 3 BSP configs",src:n(6577).Z,width:"792",height:"190"})),(0,l.kt)("p",null,"However, since there are 3 different setups, ",(0,l.kt)("inlineCode",{parentName:"p"},"IntelliJ")," doesn't know what to import. And so, we have to set it up\nourselves."),(0,l.kt)("p",null,"Right-click on your project root directory in ",(0,l.kt)("inlineCode",{parentName:"p"},"Intellij")," and go into ",(0,l.kt)("inlineCode",{parentName:"p"},"Module Settings"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Go into Module Settings",src:n(5956).Z,width:"1124",height:"1512"})),(0,l.kt)("p",null,"Then, under ",(0,l.kt)("inlineCode",{parentName:"p"},"Project Structure")," -> ",(0,l.kt)("inlineCode",{parentName:"p"},"Modules")," press the ",(0,l.kt)("inlineCode",{parentName:"p"},"+")," button and then ",(0,l.kt)("inlineCode",{parentName:"p"},"Import Module"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Import a module",src:n(5012).Z,width:"2052",height:"1696"})),(0,l.kt)("p",null,"Navigate to each of the subdirectories from there and add them as a ",(0,l.kt)("inlineCode",{parentName:"p"},"BSP")," module (",(0,l.kt)("inlineCode",{parentName:"p"},"BSP")," should be an available choice,\nif the ",(0,l.kt)("inlineCode",{parentName:"p"},"setup-ide")," was run correctly)."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Import from BSP as external model",src:n(3548).Z,width:"1508",height:"1194"})),(0,l.kt)("p",null,"You have to import each of the subdirectories separately (",(0,l.kt)("inlineCode",{parentName:"p"},"app1"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"app2")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"scripts"),", in the example)."),(0,l.kt)("p",null,"The end result should look like this:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"End result multi-BSP setup",src:n(9266).Z,width:"3576",height:"1978"})),(0,l.kt)("p",null,"Now each of the subdirectories uses its own ",(0,l.kt)("inlineCode",{parentName:"p"},"BSP")," connection, which in turn means a separate classpath. And all of that\nin a single ",(0,l.kt)("inlineCode",{parentName:"p"},"IntelliJ")," project!"),(0,l.kt)("p",null,"Upon closer inspection, you may notice that ",(0,l.kt)("inlineCode",{parentName:"p"},"IntelliJ")," stores this as separate sub-project configurations. Each\nsubdirectory gets its own ",(0,l.kt)("inlineCode",{parentName:"p"},".idea")," folder with the relevant settings."),(0,l.kt)(i.v,{mdxType:"ChainedSnippets"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"tree -a\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},".\n\u251c\u2500\u2500 .idea\n\u2502\xa0\xa0 \u251c\u2500\u2500 .gitignore\n\u2502\xa0\xa0 \u251c\u2500\u2500 bsp.xml\n\u2502\xa0\xa0 \u251c\u2500\u2500 codeStyles\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 Project.xml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 codeStyleConfig.xml\n\u2502\xa0\xa0 \u251c\u2500\u2500 intellij-multi-bsp.iml\n\u2502\xa0\xa0 \u251c\u2500\u2500 misc.xml\n\u2502\xa0\xa0 \u251c\u2500\u2500 modules.xml\n\u2502\xa0\xa0 \u251c\u2500\u2500 sbt.xml\n\u2502\xa0\xa0 \u251c\u2500\u2500 vcs.xml\n\u2502\xa0\xa0 \u2514\u2500\u2500 workspace.xml\n\u251c\u2500\u2500 app1\n\u2502\xa0\xa0 \u251c\u2500\u2500 .bsp\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 scala-cli.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 .idea\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 modules\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 app1-root.iml\n\u2502\xa0\xa0 \u251c\u2500\u2500 .scala-build\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 ide-inputs.json\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 ide-options-v2.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 HelloWorld1.scala\n\u2502\xa0\xa0 \u2514\u2500\u2500 test\n\u2502\xa0\xa0     \u2514\u2500\u2500 MyTests1.test.scala\n\u251c\u2500\u2500 app2\n\u2502\xa0\xa0 \u251c\u2500\u2500 .bsp\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 scala-cli.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 .idea\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 modules\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 app2-root.iml\n\u2502\xa0\xa0 \u251c\u2500\u2500 .scala-build\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 ide-inputs.json\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 ide-options-v2.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 HelloWorld2.scala\n\u2502\xa0\xa0 \u2514\u2500\u2500 test\n\u2502\xa0\xa0     \u2514\u2500\u2500 MyTests2.test.scala\n\u2514\u2500\u2500 scripts\n    \u251c\u2500\u2500 .bsp\n    \u2502\xa0\xa0 \u2514\u2500\u2500 scala-cli.json\n    \u251c\u2500\u2500 .idea\n    \u2502\xa0\xa0 \u2514\u2500\u2500 modules\n    \u2502\xa0\xa0     \u2514\u2500\u2500 scripts-root.iml\n    \u251c\u2500\u2500 .scala-build\n    \u2502\xa0\xa0 \u251c\u2500\u2500 ide-inputs.json\n    \u2502\xa0\xa0 \u2514\u2500\u2500 ide-options-v2.json\n    \u251c\u2500\u2500 AnotherScript.sc\n    \u2514\u2500\u2500 SomeScript.sc\n\n21 directories, 28 files\n"))))}h.isMDXComponent=!0},6577:function(e,t,n){t.Z=n.p+"assets/images/intellij_bsp_build_scripts_found-0b3d0113be74946fc391973f15f8d0db.png"},3548:function(e,t,n){t.Z=n.p+"assets/images/intellij_import_bsp_module-a5bccf0d05ba59b09e216ee6a8cbfa3f.png"},5956:function(e,t,n){t.Z=n.p+"assets/images/intellij_module_settings-5071b97e865bc5ccac8af0082a0c857f.png"},5012:function(e,t,n){t.Z=n.p+"assets/images/intellij_module_settings_import_module-906dfd87a9e0e4c3fdff2fa8d049bb3c.png"},9266:function(e,t,n){t.Z=n.p+"assets/images/intellij_multi_bsp_setup-f70bc9b77e59dff5c761f262fc3713d7.png"}}]);