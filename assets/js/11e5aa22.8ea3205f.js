"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6393],{9705:function(e,t,n){n.d(t,{m:function(){return o},v:function(){return s}});var a=n(7294),i=n(2004);function s(e){var t=e.children;return a.createElement("div",{className:"runnable-command"},t)}function o(e){var t=e.url;return a.createElement(i.Z,{playing:!0,loop:!0,muted:!0,controls:!0,width:"100%",height:"",url:t})}},1552:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return h}});var a=n(3117),i=n(102),s=(n(7294),n(3905)),o=n(9705),l=["components"],r={title:"Publish Setup \u26a1\ufe0f",sidebar_position:19},u=void 0,p={unversionedId:"commands/publishing/publish-setup",id:"commands/publishing/publish-setup",title:"Publish Setup \u26a1\ufe0f",description:"The Publish Setup command is restricted and requires setting the --power option to be used.",source:"@site/docs/commands/publishing/publish-setup.md",sourceDirName:"commands/publishing",slug:"/commands/publishing/publish-setup",permalink:"/docs/commands/publishing/publish-setup",draft:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/commands/publishing/publish-setup.md",tags:[],version:"current",sidebarPosition:19,frontMatter:{title:"Publish Setup \u26a1\ufe0f",sidebar_position:19},sidebar:"tutorialSidebar",previous:{title:"Package \u26a1\ufe0f",permalink:"/docs/commands/package"},next:{title:"Publish \u26a1\ufe0f",permalink:"/docs/commands/publishing/publish"}},c={},h=[{value:"Configuration",id:"configuration",level:2},{value:"User details",id:"user-details",level:3},{value:"PGP key pair",id:"pgp-key-pair",level:3},{value:"Sonatype credentials",id:"sonatype-credentials",level:3},{value:"GitHub token",id:"github-token",level:3},{value:"Pushing project to GitHub",id:"pushing-project-to-github",level:2},{value:"Local setup",id:"local-setup",level:2},{value:"GitHub actions setup",id:"github-actions-setup",level:2},{value:"GitHub Packages",id:"github-packages",level:2}],d={toc:h};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"The Publish Setup command is restricted and requires setting the ",(0,s.kt)("inlineCode",{parentName:"p"},"--power")," option to be used.\nYou can pass it explicitly or set it globally by running:"),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre"},"scala-cli config power true\n"))),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"publish setup")," sub-command configures your project for publishing to Maven repositories,\nsuch as Maven Central or GitHub Packages. It checks that all required parameters for publishing are set, and tries\nto infer many of them from the environment. It writes configuration as using directives, appended\nto a file named ",(0,s.kt)("inlineCode",{parentName:"p"},"publish-conf.scala")," at the root of the workspace."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"publish setup")," can configure publishing, so that you can publish from your local machine,\nbut also from GitHub actions.\nIn particular, it can upload secrets as GitHub repository secrets, so that only\nminimal effort is required to setup publishing from GitHub actions."),(0,s.kt)("p",null,"Running ",(0,s.kt)("inlineCode",{parentName:"p"},"publish setup")," works fine on brand new machines or projects, but it works better when:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"user details, credentials for publishing, and a PGP key are configured (user-wide)"),(0,s.kt)("li",{parentName:"ul"},"the current project is already pushed to GitHub")),(0,s.kt)("h2",{id:"configuration"},"Configuration"),(0,s.kt)("p",null,"Configuring Scala CLI for publishing makes ",(0,s.kt)("inlineCode",{parentName:"p"},"publish setup")," works more smoothly later on."),(0,s.kt)("p",null,"In particular, one can configure:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"details about oneself (name, email, website - written in the developers section of POM files)"),(0,s.kt)("li",{parentName:"ul"},"a PGP key pair (to sign artifacts)"),(0,s.kt)("li",{parentName:"ul"},"Sonatype credentials (to upload artifacts to Maven Central)"),(0,s.kt)("li",{parentName:"ul"},"a GitHub token (to upload repository secrets to GitHub, and artifacts to Maven repositories of GitHub Packages)")),(0,s.kt)("p",null,"User-wide configuration in Scala CLI is handled by the ",(0,s.kt)("a",{parentName:"p",href:"/docs/commands/config"},(0,s.kt)("inlineCode",{parentName:"a"},"config")," command"),", and\nthe sections below show how to use it to configure things for ",(0,s.kt)("inlineCode",{parentName:"p"},"publish setup"),"."),(0,s.kt)("h3",{id:"user-details"},"User details"),(0,s.kt)("p",null,"Set details with"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'scala-cli config publish.user.name "Alex Me"\nscala-cli config publish.user.email "alex@alex.me"\nscala-cli config publish.user.url "https://alex.me"\n')),(0,s.kt)("p",null,"The email can be left empty if you'd rather not put your email in POM files:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'scala-cli config publish.user.email ""\n')),(0,s.kt)("h3",{id:"pgp-key-pair"},"PGP key pair"),(0,s.kt)("p",null,"Generate a PGP key pair for publishing with"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"scala-cli config --create-pgp-key\n")),(0,s.kt)("p",null,"This sets 3 entries in the Scala CLI configuration, that you can print with"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"scala-cli config pgp.public-key\nscala-cli config pgp.secret-key\nscala-cli config pgp.secret-key-password\n")),(0,s.kt)("h3",{id:"sonatype-credentials"},"Sonatype credentials"),(0,s.kt)("p",null,"Publishing to Maven Central requires a Sonatype account, and requesting the right to publish\nunder specific organizations.\nYou can follow the\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/sbt/sbt-ci-release#sonatype"},"sbt-ci-release Sonatype instructions"),"\nto create an account there. Either your real Sonatype username and password, or Sonatype tokens, can be used\nin Scala CLI (via the ",(0,s.kt)("inlineCode",{parentName:"p"},"publish.credentials")," config key in both cases)."),(0,s.kt)("p",null,"These can be written in the Scala CLI configuration the following way:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"SONATYPE_USER=me SONATYPE_PASSWORD=1234 scala-cli config publish.credentials s01.oss.sonatype.org env:SONATYPE_USER env:SONATYPE_PASSWORD --password-value\n")),(0,s.kt)("p",null,"Note that both user and password arguments are assumed to be secrets, and\naccept the format documented ",(0,s.kt)("a",{parentName:"p",href:"/docs/reference/password-options"},"here"),". Beyond environment\nvariables, commands or paths to files can provide those values. They can also be passed\nas is on the command line, although this is not recommended for security reasons."),(0,s.kt)("p",null,"In the example above, we pass the username and password via the environment, and\nask the ",(0,s.kt)("inlineCode",{parentName:"p"},"config")," sub-command to read environment variables and persist the password values\n(via ",(0,s.kt)("inlineCode",{parentName:"p"},"--password-value"),")."),(0,s.kt)("p",null,"If you'd rather persist the environment variable names in the Scala CLI configuration, rather than\ntheir values, you can do"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"scala-cli config publish.credentials s01.oss.sonatype.org env:SONATYPE_USER env:SONATYPE_PASSWORD\n")),(0,s.kt)("p",null,"Note that in this case, both ",(0,s.kt)("inlineCode",{parentName:"p"},"SONATYPE_USER")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"SONATYPE_PASSWORD")," will need to be available\nin the environment when using those credentials in the ",(0,s.kt)("inlineCode",{parentName:"p"},"publish")," sub-command."),(0,s.kt)("h3",{id:"github-token"},"GitHub token"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"publish setup")," uses a GitHub token in order to:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"upload secrets as GitHub repository secrets"),(0,s.kt)("li",{parentName:"ul"},"upload artifacts to GitHub packages, when publishing to it")),(0,s.kt)("p",null,"To setup a token for Scala CLI, you need to generate a token first.\nFor that, head to your ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/settings/tokens"},"Personal access tokens page"),',\nand click "Generate new token". The "public_repo" scope is required to upload\nrepository secrets, and the "write:packages" scope is required to upload artifacts\nto GitHub packages.'),(0,s.kt)("p",null,"Once created, copy the token in your clipboard, and run"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'# macOS\nscala-cli config github.token command:pbpaste --password-value\n# Linux\nscala-cli config github.token "command:xclip -selection clipboard -o" --password-value\n')),(0,s.kt)("h2",{id:"pushing-project-to-github"},"Pushing project to GitHub"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"publish setup")," infers some publishing parameters from the GitHub URL of your project.\nIt also uploads repository secrets there, when setting up publishing on GitHub actions."),(0,s.kt)("p",null,"To create a new repository from a project, head to ",(0,s.kt)("a",{parentName:"p",href:"https://repo.new"},"https://repo.new"),", pick a name\nfor your project and create the repository. Note its URL, and do"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"scala-cli default-file .gitignore --write # if you don't have a .gitignore already\ngit init # if git isn't set up already\ngit remote add origin https://github.com/org/name # replace org/name with your freshly created repository values\n")),(0,s.kt)("h2",{id:"local-setup"},"Local setup"),(0,s.kt)("p",null,"To setup publishing in order to publish from your local machine, you can run"),(0,s.kt)(o.v,{mdxType:"ChainedSnippets"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"scala-cli publish setup .\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"9 options need to be set\n\norganization:\n  computing io.github.scala-cli from GitHub account scala-cli\nname:\n  using workspace directory name hello-scala-cli\ncomputeVersion:\n  assuming versions are computed from git tags\nrepository:\n  using Maven Central via its s01 server\nlicense:\n  using Apache-2.0 (default)\nurl:\n  computing from GitHub repository scala-cli/hello-scala-cli\nvcs:\n  using GitHub repository scala-cli/hello-scala-cli\ndevelopers:\n  using Alex Me <alex@alex.me> (https://github.com/scala-cli) from config\n\nWrote ./publish-conf.scala\n\nProject is ready for publishing!\nTo publish your project, run\n  scala-cli publish .\n"))),(0,s.kt)("p",null,"You can then publish your project from your local machine with"),(0,s.kt)(o.v,{mdxType:"ChainedSnippets"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"scala-cli publish .\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"Publishing io.github.scala-cli:hello-scala-cli_3:0.1.0-SNAPSHOT\n \u2714 Computed 8 checksums\n \ud83d\ude9a Wrote 12 files\n\n \ud83d\udc40 Check results at\n  https://s01.oss.sonatype.org/content/repositories/snapshots/io/github/scala-cli/hello-scala-cli_3/0.1.0-SNAPSHOT\n"))),(0,s.kt)("h2",{id:"github-actions-setup"},"GitHub actions setup"),(0,s.kt)("p",null,"To setup publishing from GitHub actions, you can run"),(0,s.kt)(o.v,{mdxType:"ChainedSnippets"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"scala-cli publish setup . --ci\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"11 options need to be set\n\norganization:\n  computing io.github.scala-cli from GitHub account scala-cli\nname:\n  using workspace directory name hello-scala-cli\ncomputeVersion:\n  assuming versions are computed from git tags\nrepository:\n  using Maven Central via its s01 server\npublish.user:\n  using publish.credentials from Scala CLI configuration\npublish.password:\n  using publish.credentials from Scala CLI configuration\nlicense:\n  using Apache-2.0 (default)\nurl:\n  using GitHub repository https://github.com/scala-cli/hello-scala-cli\nvcs:\n  using GitHub repository scala-cli/hello-scala-cli\ndevelopers:\n  using Alex Me <alex@alex.me> (https://github.com/scala-cli) from config\n\nUploading 4 GitHub repository secrets\n  updated PUBLISH_USER\n  updated PUBLISH_PASSWORD\n  updated PUBLISH_SECRET_KEY\n  updated PUBLISH_SECRET_KEY_PASSWORD\n\nUploaded key 0xe58386629a30f5c5 to http://keyserver.ubuntu.com:11371\n\nWrote ./publish-conf.scala\nWrote workflow in ./.github/workflows/ci.yml\n\nCommit and push ./publish-conf.scala, ./.github/workflows/ci.yml, to enable publishing from CI\n"))),(0,s.kt)("p",null,"Then committing and pushing the suggested files ",(0,s.kt)("inlineCode",{parentName:"p"},"publish-conf.scala")," and ",(0,s.kt)("inlineCode",{parentName:"p"},".github/workflows/ci.yml"),"\nshould trigger a workflow pushing snapshot artifacts to Sonatype Snapshots."),(0,s.kt)("p",null,"To publish a non-snapshot version, either push a tag like ",(0,s.kt)("inlineCode",{parentName:"p"},"v0.1.0")," (or any other version with a ",(0,s.kt)("inlineCode",{parentName:"p"},"v"),"\nprefix), or create a release with a tag with the same name from the GitHub UI."),(0,s.kt)("h2",{id:"github-packages"},"GitHub Packages"),(0,s.kt)("p",null,"In order to setup publishing to GitHub packages, pass ",(0,s.kt)("inlineCode",{parentName:"p"},"--publish-repository github")," to the\n",(0,s.kt)("inlineCode",{parentName:"p"},"publish setup")," commands above, like"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"scala-cli publish setup . --publish-repository github\n")))}m.isMDXComponent=!0}}]);