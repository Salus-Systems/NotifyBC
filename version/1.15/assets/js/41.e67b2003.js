(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{438:function(t,s,e){"use strict";e.r(s);var a=e(42),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"bulk-import"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bulk-import"}},[t._v("#")]),t._v(" Bulk Import")]),t._v(" "),e("p",[t._v("To facilitate migrating subscriptions from other notification systems, "),e("em",[t._v("NotifyBC")]),t._v(" provides a utility script to bulk import subscription data from a .csv file. To use the utility, you need")]),t._v(" "),e("ul",[e("li",[t._v("Software installed\n"),e("ul",[e("li",[t._v("NodeJS@>=6.9.1")]),t._v(" "),e("li",[t._v("Git")])])]),t._v(" "),e("li",[t._v("Admin Access to a "),e("em",[t._v("NotifyBC")]),t._v(" instance by adding your client ip to the "),e("RouterLink",{attrs:{to:"/docs/config-adminIpList/"}},[t._v("Admin IP List")])],1),t._v(" "),e("li",[t._v("a csv file with header row matching "),e("RouterLink",{attrs:{to:"/docs/api-subscription/#model-schema"}},[t._v("subscription model schema")]),t._v(". A sample csv file is "),e("a",{attrs:{href:"https://github.com/bcgov/NotifyBC/tree/main/utils/bulk-import/sample-subscription.csv",target:"_blank",rel:"noopener noreferrer"}},[t._v("provided"),e("OutboundLink")],1),t._v(". Compound fields (of object type) should be dot-flattened as shown in the sample for field "),e("em",[t._v("confirmationRequest.sendRequest")])],1)]),t._v(" "),e("p",[t._v("To run the utility")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("~ $ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\nhttps://github.com/bcgov/NotifyBC.git "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\nnotifyBC\n~ $ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" notifyBC\n~/notifyBC $ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -g "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n~/notifyBC $ node utils/bulk-import/subscription.js "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("api-url-prefix"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -c "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("concurrency"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("csv-file-path"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),e("p",[t._v("Here <csv-file-path> is the path to csv file and <api-url-prefix> is the "),e("em",[t._v("NotifyBC")]),t._v(" api url prefix , default to "),e("em",[t._v("http://localhost:3000/api")]),t._v(".")]),t._v(" "),e("p",[t._v("The script parses the csv file and generates a HTTP post request for each row. The concurrency of HTTP request is controlled by option "),e("em",[t._v("-c")]),t._v(" which is default to 10 if omitted. A successful run should output the number of rows imported without any error message")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("success row count = ***\n")])])]),e("h3",{attrs:{id:"field-parsers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#field-parsers"}},[t._v("#")]),t._v(" Field Parsers")]),t._v(" "),e("p",[t._v("The utility script takes care of type conversion for built-in fields. If you need to import proprietary fields, by default the fields are imported as strings. To import non-string fields or manipulating json output, you need to define "),e("a",{attrs:{href:"https://github.com/Keyang/node-csvtojson#custom-parsers",target:"_blank",rel:"noopener noreferrer"}},[t._v("custom parsers"),e("OutboundLink")],1),t._v(" in file "),e("a",{attrs:{href:"https://github.com/bcgov/NotifyBC/blob/main/utils/bulk-import/subscription.js",target:"_blank",rel:"noopener noreferrer"}},[e("em",[t._v("utils/bulk-import/subscription.js")]),e("OutboundLink")],1),t._v(". For example, to parse "),e("em",[t._v("myCustomIntegerField")]),t._v(" to integer, add in the "),e("em",[t._v("colParser")]),t._v(" object")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("  colParser"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("myCustomIntegerField")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" head"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" resultRow"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" row"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" colIdx")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);