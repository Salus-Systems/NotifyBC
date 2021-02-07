(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{419:function(s,i,e){"use strict";e.r(i);var t=e(42),n=Object(t.a)({},(function(){var s=this,i=s.$createElement,e=s._self._c||i;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"list-unsubscribe-by-email"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#list-unsubscribe-by-email"}},[s._v("#")]),s._v(" List-unsubscribe by Email")]),s._v(" "),e("p",[s._v("Some email clients provide a consistent UI to unsubscribe if an unsubscription email address is supplied. For example, newer iOS built-in email app will display following banner")]),s._v(" "),e("img",{attrs:{src:s.$withBase("/img/list-unsubscription.png"),alt:"list unsubscription"}}),s._v(" "),e("p",[s._v("To support this unsubscription method, "),e("em",[s._v("NotifyBC")]),s._v(" implements a custom inbound SMTP server to transform received emails sent to address "),e("em",[s._v("un-{subscriptionId}-{unsubscriptionCode}@{inboundSmtpServerDomain}")]),s._v(" to "),e("em",[s._v("NotifyBC")]),s._v(" unsubscribing API calls. This unsubscription email address is generated by "),e("em",[s._v("NotifyBC")]),s._v(" and set in header "),e("em",[s._v("List-Unsubscribe")]),s._v(" of all notification emails.")]),s._v(" "),e("p",[s._v("To enable list-unsubscribe by email")]),s._v(" "),e("ul",[e("li",[s._v("set up "),e("RouterLink",{attrs:{to:"/docs/config-inboundSmtpServer/"}},[s._v("inbound smtp server")])],1),s._v(" "),e("li",[s._v("verify config "),e("em",[s._v("notification.handleListUnsubscribeByEmail")]),s._v(" is set to true or absent in "),e("em",[s._v("/src/config.local.js")])])]),s._v(" "),e("p",[s._v("To disable list-unsubscribe by email, set "),e("em",[s._v("notification.handleListUnsubscribeByEmail")]),s._v(" to false in "),e("em",[s._v("/src/config.local.js")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("module.exports = {\n  ...\n  notification: {\n    ...\n    handleListUnsubscribeByEmail: false,\n  }\n}\n")])])])])}),[],!1,null,null,null);i.default=n.exports}}]);