(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{422:function(t,s,e){"use strict";e.r(s);var a=e(42),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"notification"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#notification"}},[t._v("#")]),t._v(" Notification")]),t._v(" "),e("p",[t._v("Configs in this section customize the handling of notification request or generating notifications from RSS feeds. They are all sub-properties of config object "),e("em",[t._v("notification")]),t._v(". Service-agnostic configs are static and service-dependent configs are dynamic.")]),t._v(" "),e("h2",{attrs:{id:"rss-feeds"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rss-feeds"}},[t._v("#")]),t._v(" RSS Feeds")]),t._v(" "),e("p",[e("em",[t._v("NotifyBC")]),t._v(" can generate broadcast push notifications automatically by polling RSS feeds periodically and detect changes by comparing with an internally maintained history list. The polling frequency, RSS url, RSS item change detection criteria, and message template can be defined in dynamic configs.")]),t._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[t._v("Only first page is retrieved for paginated RSS feeds")]),t._v(" "),e("p",[t._v("If a RSS feed is paginated, "),e("i",[t._v("NotifyBC")]),t._v(" only retrieves the first page rather than auto-fetch subsequent pages. Hence paginated RSS feeds should be sorted descendingly by last modified timestamp. Refresh interval should be adjusted small enough such that all new or updated items are contained in first page.")])]),t._v(" "),e("p",[t._v("For example, to notify subscribers of "),e("em",[t._v("myService")]),t._v(" on updates to feed "),e("em",[t._v("http://my-serivce/rss")]),t._v(", create following config item using "),e("RouterLink",{attrs:{to:"/docs/api-config/#create-a-configuration"}},[t._v("POST configuration API")])],1),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"notification"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"serviceName"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myService"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"value"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rss"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://my-serivce/rss"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timeSpec"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"* * * * *"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"itemKeyField"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"guid"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outdatedItemRetentionGenerations"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"includeUpdatedItems"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fieldsToCheckForUpdate"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pubDate"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"description"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"httpHost"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:3000"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"messageTemplates"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"from"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"no_reply@invlid.local"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"subject"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{title}"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"textBody"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{description}"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"htmlBody"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{description}"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("The config items in the "),e("em",[t._v("value")]),t._v(" field are")]),t._v(" "),e("ul",[e("li",[t._v("rss\n"),e("ul",[e("li",[t._v("url: RSS url")]),t._v(" "),e("li",[e("a",{attrs:{name:"timeSpec"}}),t._v("timeSpec: RSS poll frequency, a space separated fields conformed to "),e("a",{attrs:{href:"https://www.freebsd.org/cgi/man.cgi?crontab(5)",target:"_blank",rel:"noopener noreferrer"}},[t._v("unix crontab format"),e("OutboundLink")],1),t._v(" with an optional left-most seconds field. See "),e("a",{attrs:{href:"https://github.com/kelektiv/node-cron#cron-ranges",target:"_blank",rel:"noopener noreferrer"}},[t._v("allowed ranges"),e("OutboundLink")],1),t._v(" of each field")]),t._v(" "),e("li",[t._v("itemKeyField: rss item's unique key field to identify new items. By default "),e("em",[t._v("guid")])]),t._v(" "),e("li",[t._v("outdatedItemRetentionGenerations: number of last consecutive polls from which results an item has to be absent before the item can be removed from the history list. This config is designed to prevent multiple notifications triggered by the same item because RSS poll returns inconsistent results, usually due to a combination of pagination and lack of sorting. By default 1, meaning the history list only keeps the last poll result")]),t._v(" "),e("li",[t._v("includeUpdatedItems: whether to notify also updated items or just new items. By default "),e("em",[t._v("false")])]),t._v(" "),e("li",[t._v("fieldsToCheckForUpdate: list of fields to check for updates if "),e("em",[t._v("includeUpdatedItems")]),t._v(" is "),e("em",[t._v("true")]),t._v(". By default "),e("em",[t._v('["pubDate"]')])])])]),t._v(" "),e("li",[t._v("httpHost: the http protocol, host and port used by "),e("RouterLink",{attrs:{to:"/docs/overview/#mail-merge"}},[t._v("mail merge")]),t._v(". If missing, the value is auto-populated based on the REST request that creates this config item.")],1),t._v(" "),e("li",[t._v("messageTemplates: channel-specific message template supporting dynamic token as shown. Message template fields is same as those in "),e("RouterLink",{attrs:{to:"/docs/api-notification/#field-message"}},[t._v("notification api")])],1)]),t._v(" "),e("h2",{attrs:{id:"broadcast-push-notification-task-concurrency"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#broadcast-push-notification-task-concurrency"}},[t._v("#")]),t._v(" Broadcast Push Notification Task Concurrency")]),t._v(" "),e("p",[t._v("To achieve horizontal scaling, when a broadcast push notification request, hereby known as original request, is received, "),e("em",[t._v("NotifyBC")]),t._v(" divides subscribers into chunks and generates a HTTP sub-request for each chunk. The original request supervises the execution of sub-requests. The chunk size is defined by config "),e("em",[t._v("broadcastSubscriberChunkSize")]),t._v(". All subscribers in a sub-request chunk are processed concurrently when the sub-requests are submitted.")]),t._v(" "),e("p",[t._v("The original request submits sub-requests back to (preferably load-balanced) "),e("em",[t._v("NotifyBC")]),t._v(" server cluster for processing. Sub-request submission is throttled by config "),e("em",[t._v("broadcastSubRequestBatchSize")]),t._v(". "),e("em",[t._v("broadcastSubRequestBatchSize")]),t._v(" defines the upper limit of the number of Sub-requests that can be processed at any given time.")]),t._v(" "),e("p",[t._v("As an example, assuming the total number of subscribers for a notification is 1,000,000, "),e("em",[t._v("broadcastSubscriberChunkSize")]),t._v(" is 1,000 and "),e("em",[t._v("broadcastSubRequestBatchSize")]),t._v(" is 10, "),e("em",[t._v("NotifyBC")]),t._v(" will divide the 1M subscribers into 1,000 chunks and generates 1,000 sub-requests, one for each chunk. The 1,000 sub-requests will be submitted back to "),e("em",[t._v("NotifyBC")]),t._v(" cluster to be processed. The original request will ensure at most 10 sub-requests are submitted and being processed at any given time. In fact, the only time concurrency is less than 10 is near the end of the task when remaining sub-requests is less than 10. When a sub-request is received by "),e("em",[t._v("NotifyBC")]),t._v(" cluster, all 1,000 subscribers are processed concurrently. Suppose each sub-request (i.e. 1,000 subscribers) takes 1 minute to process on average, then the total time to dispatch notifications to 1M subscribers takes 1,000/10 = 100min, or 1hr40min.")]),t._v(" "),e("p",[t._v("The default value for "),e("em",[t._v("broadcastSubscriberChunkSize")]),t._v(" and "),e("em",[t._v("broadcastSubRequestBatchSize")]),t._v(" are defined in "),e("em",[t._v("/src/config.ts")])]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("module")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  notification"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    broadcastSubscriberChunkSize"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    broadcastSubRequestBatchSize"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("To customize, create the config with updated value in file "),e("em",[t._v("/src/config.local.js")]),t._v(".")]),t._v(" "),e("p",[t._v("If total number of subscribers is less than "),e("em",[t._v("broadcastSubscriberChunkSize")]),t._v(", then no sub-requests are spawned. Instead, the main request dispatches all notifications.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("How to determine the optimal value for "),e("i",[t._v("broadcastSubscriberChunkSize")]),t._v(" and "),e("i",[t._v("broadcastSubRequestBatchSize")]),t._v("?")]),t._v(" "),e("p",[e("i",[t._v("broadcastSubscriberChunkSize")]),t._v(" is determined by the concurrency capability of the downstream message handlers such as SMTP server or SMS service provider. "),e("i",[t._v("broadcastSubRequestBatchSize")]),t._v(" is determined by the size of "),e("i",[t._v("NotifyBC")]),t._v(" cluster. As a rule of thumb, set "),e("i",[t._v("broadcastSubRequestBatchSize")]),t._v(" equal to the number of non-master nodes in "),e("i",[t._v("NotifyBC")]),t._v(" cluster.")])]),t._v(" "),e("h2",{attrs:{id:"broadcast-push-notification-custom-filter-functions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#broadcast-push-notification-custom-filter-functions"}},[t._v("#")]),t._v(" Broadcast Push Notification Custom Filter Functions")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("Advanced Topic")]),t._v(" "),e("p",[t._v("Defining custom function requires knowledge of JavaScript and understanding how external libraries are added and referenced in Node.js. Setting a development environment to test the custom function is also recommended.")])]),t._v(" "),e("p",[t._v("To support rule-based notification event filtering, "),e("em",[t._v("NotifyBC")]),t._v(" uses a "),e("a",{attrs:{href:"https://github.com/f-w/jmespath.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("modified version"),e("OutboundLink")],1),t._v(" of "),e("a",{attrs:{href:"http://jmespath.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("jmespath"),e("OutboundLink")],1),t._v(" to implement json query. The modified version allows defining custom functions that can be used in "),e("a",{attrs:{href:"../api-subscription#broadcastPushNotificationFilter"}},[t._v("broadcastPushNotificationFilter")]),t._v(" field of subscription API. The functions must be implemented using JavaScript in config "),e("em",[t._v("notification.broadcastCustomFilterFunctions")]),t._v(". The functions can even be "),e("em",[t._v("async")]),t._v(". For example, the case-insensitive string matching function "),e("em",[t._v("contains_ci")]),t._v(" shown in the example of that field can be created in file "),e("em",[t._v("/src/config.local.js")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" _ "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lodash'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  notification"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    broadcastCustomFilterFunctions"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      contains_ci"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("_func")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolvedArgs")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("resolvedArgs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("resolvedArgs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" _"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("toLower")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resolvedArgs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("indexOf")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("toLower")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resolvedArgs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        _signature"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            types"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            types"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Consult jmespath.js source code on the "),e("a",{attrs:{href:"https://github.com/f-w/jmespath.js/blob/master/jmespath.js#L1127",target:"_blank",rel:"noopener noreferrer"}},[t._v("functionTable syntax"),e("OutboundLink")],1),t._v(" and "),e("a",{attrs:{href:"https://github.com/f-w/jmespath.js/blob/master/jmespath.js#L132",target:"_blank",rel:"noopener noreferrer"}},[t._v("type constants"),e("OutboundLink")],1),t._v(" used by above code. Note the function can use any Node.js modules ("),e("em",[e("a",{attrs:{href:"https://lodash.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("lodash"),e("OutboundLink")],1)]),t._v(" in this case).")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("install additional Node.js modules")]),t._v(" "),e("p",[t._v("The recommended way to install additional Node.js modules is by running command "),e("i",[e("a",{attrs:{href:"https://docs.npmjs.com/cli/install"}},[t._v("npm install <your_module>")])]),t._v(" from the directory one level above "),e("i",[t._v("NotifyBC")]),t._v(" root. For example, if\n"),e("i",[t._v("NotifyBC")]),t._v(" is installed on "),e("i",[t._v("/data/notifyBC")]),t._v(", then run the command from directory "),e("i",[t._v("/data")]),t._v(". The command will then install the module to "),e("i",[t._v("/data/node_modules/<your_module>")]),t._v(".")])]),t._v(" "),e("h2",{attrs:{id:"log-successful-broadcast-dispatches"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#log-successful-broadcast-dispatches"}},[t._v("#")]),t._v(" Log Successful Broadcast Dispatches")]),t._v(" "),e("p",[t._v("To optimize performance, by default only failed broadcast notification dispatches\nare logged in the notification record. If you want to log successful dispatches too, set config "),e("em",[t._v("logSuccessfulBroadcastDispatches")]),t._v(" to "),e("em",[t._v("true")]),t._v(" in file "),e("em",[t._v("/src/config.local.js")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  notification"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    logSuccessfulBroadcastDispatches"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("The "),e("em",[t._v("successfulDispatches")]),t._v(" field of the notification record will then contain an array of subscription "),e("em",[t._v("id")]),t._v("s of the successful dispatches.")]),t._v(" "),e("p",[t._v("A successful dispatch only means the sending is successful. It doesn't guarantee the recipient can receive the notification. "),e("RouterLink",{attrs:{to:"/docs/config-notificationBounce/"}},[t._v("Bounce")]),t._v(" may occur for a successful dispatch.")],1)])}),[],!1,null,null,null);s.default=n.exports}}]);