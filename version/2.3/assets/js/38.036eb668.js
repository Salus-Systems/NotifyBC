(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{435:function(e,t,i){"use strict";i.r(t);var s=i(42),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"overview"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),i("p",[i("em",[e._v("NotifyBC")]),e._v(" is a general purpose API Server to manage subscriptions and dispatch notifications. It aims to implement some common backend processes of a notification service without imposing any constraints on the UI frontend, nor impeding other server components' functionality. This is achieved by interacting with user browser and other server components through RESTful API and other standard protocols in a loosely coupled way.")]),e._v(" "),i("h2",{attrs:{id:"features"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[e._v("#")]),e._v(" Features")]),e._v(" "),i("p",[i("em",[e._v("NotifyBC")]),e._v(" facilitates both anonymous and SiteMinder authentication-enabled secure webapps implementing notification feature. A "),i("em",[e._v("NotifyBC")]),e._v(" server instance supports multiple notification services. A service is a topic of interest that user wants to receive updates. It is used as the partition of notification messages and user subscriptions. A user may subscribe to a service in multiple push delivery channels allowed. A user may subscribe to multiple services. In-app pull notification doesn't require subscription as it's not intrusive to user.")]),e._v(" "),i("h3",{attrs:{id:"notification"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#notification"}},[e._v("#")]),e._v(" notification")]),e._v(" "),i("ul",[i("li",[e._v("both in-app pull notifications (a.k.a. messages or alerts) and push notifications")]),e._v(" "),i("li",[e._v("multiple push notifications delivery channels\n"),i("ul",[i("li",[e._v("email")]),e._v(" "),i("li",[e._v("sms")])])]),e._v(" "),i("li",[e._v("unicast and broadcast message types")]),e._v(" "),i("li",[e._v("future-dated notifications")]),e._v(" "),i("li",[e._v("for in-app pull notifications\n"),i("ul",[i("li",[e._v("support read and deleted message states")]),e._v(" "),i("li",[e._v("message expiration")]),e._v(" "),i("li",[e._v("deleted messages are not deleted immediately for auditing and recovery purposes")])])]),e._v(" "),i("li",[e._v("both sync and async API call for broadcast push notifications. For async API call, an optional callback url is supported")]),e._v(" "),i("li",[e._v("broadcast push notifications can be auto-generated from RSS feeds")]),e._v(" "),i("li",[e._v("allow user to specify filter rules evaluated against broadcast push notification triggering event to improve relevance")]),e._v(" "),i("li",[e._v("allow application developer to create custom filter functions")])]),e._v(" "),i("h3",{attrs:{id:"subscription-and-un-subscription"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#subscription-and-un-subscription"}},[e._v("#")]),e._v(" subscription and un-subscription")]),e._v(" "),i("ul",[i("li",[e._v("verify the ownership of push notification subscription channel:\n"),i("ul",[i("li",[e._v("generates confirmation code based on a regex input")]),e._v(" "),i("li",[e._v("send confirmation request to unconfirmed subscription channel")]),e._v(" "),i("li",[e._v("verify confirmation code")])])]),e._v(" "),i("li",[e._v("generate random un-subscription code")]),e._v(" "),i("li",[e._v("send acknowledgement message after un-subscription for anonymous subscribers")]),e._v(" "),i("li",[e._v("bulk unsubscription")]),e._v(" "),i("li",[i("a",{attrs:{href:"http://www.list-unsubscribe.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("list-unsubscribe"),i("OutboundLink")],1),e._v(" by email")]),e._v(" "),i("li",[e._v("track bounces and unsubscribe the recipient from all subscriptions when hard bounce count exceeds threshold")]),e._v(" "),i("li",[e._v("sms user can unsubscribe by replying a shortcode keyword with Swift sms provider")])]),e._v(" "),i("h3",{attrs:{id:"mail-merge"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#mail-merge"}},[e._v("#")]),e._v(" mail merge")]),e._v(" "),i("h4",{attrs:{id:"static-tokens"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#static-tokens"}},[e._v("#")]),e._v(" static tokens")]),e._v(" "),i("p",[i("em",[e._v("NotifyBC")]),e._v(" recognizes following case-insensitive static tokens in push notification or subscription messages. They are replaced when sending the message")]),e._v(" "),i("ul",[i("li",[e._v("{subscription_confirmation_url}")]),e._v(" "),i("li",[e._v("{subscription_confirmation_code}")]),e._v(" "),i("li",[e._v("{service_name}")]),e._v(" "),i("li",[e._v("{http"),i("em",[e._v("host} - http host in the form _http(s): //<host_name>:<port>")]),e._v(". The value is obtained from the http request that triggers the message")]),e._v(" "),i("li",[e._v("{rest_api_root} - configured Loopback "),i("a",{attrs:{href:"https://loopback.io/doc/en/lb4/Customizing-server-configuration.html#configure-the-base-path",target:"_blank",rel:"noopener noreferrer"}},[e._v("REST API basePath"),i("OutboundLink")],1)]),e._v(" "),i("li",[e._v("{subscription_id}")]),e._v(" "),i("li",[e._v("anonymous unsubscription related tokens\n"),i("ul",[i("li",[e._v("{unsubscription_url}")]),e._v(" "),i("li",[e._v("{unsubscription"),i("em",[e._v("all_url} - url to unsubscribe all services the user has subscribed on this _NotifyBC")]),e._v(" instance")]),e._v(" "),i("li",[e._v("{unsubscription_code}")]),e._v(" "),i("li",[e._v("{unsubscription_reversion_url}")]),e._v(" "),i("li",[e._v("{unsubscription"),i("em",[e._v("service_names} - includes {service_name} and additional services user has unsubscribed, prefixed with conditionally pluralized word _service")]),e._v(".")])])])]),e._v(" "),i("h4",{attrs:{id:"dynamic-tokens"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-tokens"}},[e._v("#")]),e._v(" dynamic tokens")]),e._v(" "),i("p",[e._v("If a notification request contains field "),i("em",[e._v("data")]),e._v(" of type "),i("em",[e._v("object")]),e._v(", "),i("em",[e._v("NotifyBC")]),e._v(" also substitutes dynamic tokens, which are strings enclosed in {} but don't match static tokens above, with corresponding sub-field of "),i("em",[e._v("data")]),e._v(" if available. For example, if the string "),i("em",[e._v("{description}")]),e._v(" appears in email body, it is replaced with field "),i("em",[e._v("data.description")]),e._v(" of the notification request if populated.")]),e._v(" "),i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[e._v("Notification by RSS feeds relies on dynamic token")]),e._v(" "),i("p",[e._v("A notification created by RSS feeds relies on dynamic token to supply the context to message template. In this case the "),i("i",[e._v("data")]),e._v(" field contains the RSS item.")])]),e._v(" "),i("h2",{attrs:{id:"architecture"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#architecture"}},[e._v("#")]),e._v(" Architecture")]),e._v(" "),i("h3",{attrs:{id:"request-types"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#request-types"}},[e._v("#")]),e._v(" Request Types")]),e._v(" "),i("p",[i("em",[e._v("NotifyBC")]),e._v(", designed to be a microservice, doesn't use full-blown ACL to secure API calls. Instead, it classifies incoming requests into admin and user types. Each type has two subtypes based on following criteria")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("super-admin, if the source ip of the request is in the admin ip list and the request doesn't contain any of following case insensitive HTTP headers, with the first three being SiteMinder headers")]),e._v(" "),i("ul",[i("li",[e._v("sm_universalid")]),e._v(" "),i("li",[e._v("sm_user")]),e._v(" "),i("li",[e._v("smgov_userdisplayname")]),e._v(" "),i("li",[e._v("is_anonymous")])])]),e._v(" "),i("li",[i("p",[e._v("admin, if the request is not super-admin and meets one of the following criteria")]),e._v(" "),i("ul",[i("li",[e._v("has a valid access token associated with an builtin admin user created and logged in using the "),i("em",[e._v("administrator")]),e._v(" api, and the request doesn't contain any HTTP headers listed above")]),e._v(" "),i("li",[e._v("has a valid OIDC access token containing customizable admin profile attributes")])]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("access token disambiguation")]),e._v(" "),i("p",[e._v("Here the term "),i("em",[e._v("access token")]),e._v(" has been used to refer two different things")]),e._v(" "),i("ol",[i("li",[e._v("the token associated with a builtin admin user")]),e._v(" "),i("li",[e._v("the token generated by OIDC provider.")])]),e._v(" "),i("p",[e._v("To reduce confusion, throughout the documentation the former is called "),i("em",[e._v("access token")]),e._v(" and the latter is called "),i("em",[e._v("OIDC access token")]),e._v(".")])])]),e._v(" "),i("li",[i("p",[e._v("authenticated user, if the request is neither super-admin nor admin, and meets one fo the following criteria")]),e._v(" "),i("ul",[i("li",[e._v("contains any of the 3 SiteMinder headers listed above, and comes from either trusted SiteMinder proxy or admin ip list")]),e._v(" "),i("li",[e._v("contains a valid OIDC access token")])])]),e._v(" "),i("li",[i("p",[e._v("anonymous user, if the request doesn't meet any of the above criteria")])])]),e._v(" "),i("p",[e._v("The only extra privileges that a super-admin has over admin are that super-admin can perform CRUD operations on "),i("em",[e._v("configuration")]),e._v(", "),i("em",[e._v("bounce")]),e._v(" and "),i("em",[e._v("administrator")]),e._v(" entities through REST API. In the remaining docs, when no further distinction is necessary, an admin request refers to both super-admin and admin request; a user request refers to both authenticated and anonymous request.")]),e._v(" "),i("p",[e._v("An admin request carries full authorization whereas user request has limited access. For example, a user request is not allowed to")]),e._v(" "),i("ul",[i("li",[e._v("send notification")]),e._v(" "),i("li",[e._v("bypass the delivery channel confirmation process when subscribing to a service")]),e._v(" "),i("li",[e._v("retrieve push notifications")]),e._v(" "),i("li",[e._v("retrieve in-app notifications that is not targeted to the current user")])]),e._v(" "),i("p",[e._v("The result of an API call to the same end point may differ depending on the request type. For example, the call "),i("em",[e._v("GET /notifications")]),e._v(" without a filter will return all notifications to all users for an admin request, but only non-deleted, non-expired in-app notifications for authenticated user request, and forbidden for anonymous user request. Sometimes it is desirable for a request from admin ip list, which would normally be admin request, to be voluntarily downgraded to user request in order to take advantage of predefined filters such as the ones described above. This can be achieved by adding one of the HTTP headers listed above to the request. This is also why admin request is not determined by ip or token alone.")]),e._v(" "),i("p",[e._v("The way "),i("em",[e._v("NotifyBC")]),e._v(" interacts with other components is diagrammed below.\n"),i("img",{attrs:{src:e.$withBase("/img/architecture.svg"),alt:"architecture diagram"}})]),e._v(" "),i("h3",{attrs:{id:"authentication-strategies"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#authentication-strategies"}},[e._v("#")]),e._v(" Authentication Strategies")]),e._v(" "),i("p",[e._v("API requests to "),i("em",[e._v("NotifyBC")]),e._v(" can be either anonymous or authenticated. As alluded in "),i("a",{attrs:{href:"#request-types"}},[e._v("Request Types")]),e._v(" above, "),i("em",[e._v("NotifyBC")]),e._v(" supports following authentication strategies")]),e._v(" "),i("ol",[i("li",[e._v("ip whitelisting")]),e._v(" "),i("li",[e._v("Access token associated with an builtin admin user")]),e._v(" "),i("li",[e._v("OpenID Connect (OIDC)")]),e._v(" "),i("li",[e._v("CA SiteMinder")])]),e._v(" "),i("p",[e._v("Authentication is performed in above order. Once a request passed an authentication strategy, the rest strategies are skipped. A request that failed all authentication strategies is anonymous.")]),e._v(" "),i("p",[e._v("The mapping between authentication strategy and request type is")]),e._v(" "),i("table",[i("thead",[i("tr",[i("th"),e._v(" "),i("th",[e._v("Super-admin")]),e._v(" "),i("th",[e._v("admin")]),e._v(" "),i("th",[e._v("authenticated")]),e._v(" "),i("th",[e._v("anonymous")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[e._v("ip whitelisting")]),e._v(" "),i("td",[e._v("✔")]),e._v(" "),i("td"),e._v(" "),i("td"),e._v(" "),i("td")]),e._v(" "),i("tr",[i("td",[e._v("Access token")]),e._v(" "),i("td"),e._v(" "),i("td",[e._v("✔")]),e._v(" "),i("td"),e._v(" "),i("td")]),e._v(" "),i("tr",[i("td",[e._v("OIDC")]),e._v(" "),i("td"),e._v(" "),i("td",[e._v("✔")]),e._v(" "),i("td",[e._v("✔")]),e._v(" "),i("td")]),e._v(" "),i("tr",[i("td",[e._v("SiteMinder")]),e._v(" "),i("td"),e._v(" "),i("td"),e._v(" "),i("td",[e._v("✔")]),e._v(" "),i("td")])])]),e._v(" "),i("h2",{attrs:{id:"application-framework"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#application-framework"}},[e._v("#")]),e._v(" Application Framework")]),e._v(" "),i("p",[i("em",[e._v("NotifyBC")]),e._v(" is created on Node.js "),i("a",{attrs:{href:"https://loopback.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("LoopBack"),i("OutboundLink")],1),e._v(". Contributors to source code of "),i("em",[e._v("NotifyBC")]),e._v(" should be familiar with LoopBack. "),i("a",{attrs:{href:"https://loopback.io/doc/en/lb4",target:"_blank",rel:"noopener noreferrer"}},[e._v("LoopBack Docs"),i("OutboundLink")],1),e._v(" serves a good complement to this documentation.")])])}),[],!1,null,null,null);t.default=a.exports}}]);