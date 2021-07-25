(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{443:function(e,t,s){"use strict";s.r(t);var o=s(42),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"developer-notes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#developer-notes"}},[e._v("#")]),e._v(" Developer Notes")]),e._v(" "),s("h2",{attrs:{id:"setup-development-environment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup-development-environment"}},[e._v("#")]),e._v(" Setup development environment")]),e._v(" "),s("p",[e._v("Install Visual Studio Code and following extensions:")]),e._v(" "),s("ul",[s("li",[e._v("Prettier")]),e._v(" "),s("li",[e._v("ESLint")]),e._v(" "),s("li",[e._v("Vetur")]),e._v(" "),s("li",[e._v("Code Spell Checker")]),e._v(" "),s("li",[e._v("Debugger for Chrome")])]),e._v(" "),s("p",[e._v("Multiple run configs have been created to facilitate debugging server, client, test and docs.")]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("Client certificate authentication doesn't work in client debugger")]),e._v(" "),s("p",[e._v("Because Vue cli webpack dev server cannot proxy passthrough HTTPS connections, client certificate authentication doesn't work in client debugger. If testing client certificate authentication in web console is needed, run "),s("code",[e._v("yarn build")]),e._v(" to generate prod client distribution and launch server debugger on https://localhost:3000")])]),e._v(" "),s("h2",{attrs:{id:"automated-testing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#automated-testing"}},[e._v("#")]),e._v(" Automated Testing")]),e._v(" "),s("p",[e._v("Test framework is created by LoopBack lb4 CLI, using LoopBack provided tool set and following LoopBack "),s("a",{attrs:{href:"https://loopback.io/doc/en/lb4/Testing-your-application.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("best practices"),s("OutboundLink")],1),e._v(". To launch test, run "),s("code",[e._v("yarn test")]),e._v(". A "),s("em",[e._v("Test")]),e._v(" launch config is provided to debug in VS Code.")]),e._v(" "),s("p",[e._v("Github Actions runs tests as part of the build. All test scripts should be able to run unattended, headless, quickly and depend only on local resources.")]),e._v(" "),s("h3",{attrs:{id:"writing-test-specs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#writing-test-specs"}},[e._v("#")]),e._v(" Writing Test Specs")]),e._v(" "),s("p",[e._v("Thanks to "),s("a",{attrs:{href:"https://github.com/visionmedia/supertest",target:"_blank",rel:"noopener noreferrer"}},[e._v("supertest"),s("OutboundLink")],1),e._v(" and LoopBack's "),s("a",{attrs:{href:"https://loopback.io/doc/en/lb4/Memory-connector.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("memory database connector"),s("OutboundLink")],1),e._v(", test specs can be written to cover nearly end-to-end request processing workflow (only "),s("em",[e._v("sendMail")]),e._v(" and "),s("em",[e._v("sendSMS")]),e._v(" need to be mocked). This allows test specs to anchor onto business requirements rather than program units such as functions or files, resulting in regression tests that are more resilient to code refactoring.\nWhenever possible, a test spec should be written to")]),e._v(" "),s("ul",[s("li",[e._v("start at a processing phase as early as possible. For example, to test a REST end point, start with the HTTP user request.")]),e._v(" "),s("li",[e._v("assert outcome of a processing phase as late and down below as possible - the HTTP response body/code, the database record created, for example.")]),e._v(" "),s("li",[e._v("avoid asserting middleware function input/output to facilitate code refactoring.")]),e._v(" "),s("li",[e._v("mock email/sms sending function (implemented by default). Inspect the input of the function, or at least assert the function has been called.")])]),e._v(" "),s("h2",{attrs:{id:"code-coverage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#code-coverage"}},[e._v("#")]),e._v(" Code Coverage")]),e._v(" "),s("p",[e._v("After running "),s("code",[e._v("yarn test")]),e._v(", nyc code coverage report is generated in git ignored folder "),s("em",[e._v("/coverage")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"install-docs-website"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-docs-website"}},[e._v("#")]),e._v(" Install Docs Website")]),e._v(" "),s("p",[e._v("If you want to contribute to "),s("em",[e._v("NotifyBC")]),e._v(" docs beyond simple fix ups, run")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" --cwd docs "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" --cwd docs dev\n")])])]),s("p",[e._v("If everything goes well, the last line of the output will be")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("> VuePress dev server listening at http://localhost:8080/NotifyBC/\n")])])]),s("p",[e._v("You can now browse to the local docs site "),s("a",{attrs:{href:"http://localhost:8080/NotifyBC/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:8080/NotifyBC"),s("OutboundLink")],1)]),e._v(" "),s("h2",{attrs:{id:"publish-version-checklist"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#publish-version-checklist"}},[e._v("#")]),e._v(" Publish Version Checklist")]),e._v(" "),s("p",[e._v("Before adding a release,")]),e._v(" "),s("ol",[s("li",[e._v("update "),s("em",[e._v("version")]),e._v(" in "),s("em",[e._v("package.json")])]),e._v(" "),s("li",[e._v("update "),s("em",[e._v("version")]),e._v(" "),s("em",[e._v("appVersion")]),e._v(" in "),s("em",[e._v("helm/Chart.yaml")]),e._v(" (major/minor only)")]),e._v(" "),s("li",[e._v("update "),s("RouterLink",{attrs:{to:"/docs/getting-started/what's-new.html"}},[e._v("What's new")]),e._v(" (major/minor only)")],1)])])}),[],!1,null,null,null);t.default=a.exports}}]);