(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{346:function(e,t,i){},396:function(e,t,i){"use strict";i(346)},438:function(e,t,i){"use strict";i.r(t);i(396);var s=i(42),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"overview"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),i("p",[i("em",[e._v("NotifyBC")]),e._v(" is a general purpose API Server to manage subscriptions and dispatch notifications. It aims to implement some common backend processes of a notification service without imposing any constraints on the UI frontend, nor impeding other server components' functionality. This is achieved by interacting with user browser and other server components through RESTful API and other standard protocols in a loosely coupled way.")]),e._v(" "),i("h2",{attrs:{id:"features"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[e._v("#")]),e._v(" Features")]),e._v(" "),i("p",[i("em",[e._v("NotifyBC")]),e._v(" facilitates both anonymous and authentication-enabled secure webapps implementing notification feature. A "),i("em",[e._v("NotifyBC")]),e._v(" server instance supports multiple notification services. A service is a topic of interest that user wants to receive updates. It is used as the partition of notification messages and user subscriptions. A user may subscribe to a service in multiple push delivery channels allowed. A user may subscribe to multiple services. In-app pull notification doesn't require subscription as it's not intrusive to user.")]),e._v(" "),i("h3",{attrs:{id:"notification"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#notification"}},[e._v("#")]),e._v(" notification")]),e._v(" "),i("ul",[i("li",[e._v("both in-app pull notifications (a.k.a. messages or alerts) and push notifications")]),e._v(" "),i("li",[e._v("multiple push notifications delivery channels\n"),i("ul",[i("li",[e._v("email")]),e._v(" "),i("li",[e._v("sms")])])]),e._v(" "),i("li",[e._v("unicast and broadcast message types")]),e._v(" "),i("li",[e._v("future-dated notifications")]),e._v(" "),i("li",[e._v("for in-app pull notifications\n"),i("ul",[i("li",[e._v("support read and deleted message states")]),e._v(" "),i("li",[e._v("message expiration")]),e._v(" "),i("li",[e._v("deleted messages are not deleted immediately for auditing and recovery purposes")])])]),e._v(" "),i("li",[e._v("for broadcast push notifications\n"),i("ul",[i("li",[e._v("allow both sync and async "),i("em",[e._v("POST")]),e._v(" API calls. For async API call, an optional callback url is supported")]),e._v(" "),i("li",[e._v("can be auto-generated from RSS feeds")]),e._v(" "),i("li",[e._v("allow user to specify filter rules evaluated against data contained in the notification")]),e._v(" "),i("li",[e._v("allow sender to specify filter rules evaluated against data contained in the subscription")]),e._v(" "),i("li",[e._v("allow application developer to create custom filter functions used by the filter rules mentioned above")])])])]),e._v(" "),i("h3",{attrs:{id:"subscription-and-un-subscription"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#subscription-and-un-subscription"}},[e._v("#")]),e._v(" subscription and un-subscription")]),e._v(" "),i("ul",[i("li",[e._v("verify the ownership of push notification subscription channel:\n"),i("ul",[i("li",[e._v("generates confirmation code based on a regex input")]),e._v(" "),i("li",[e._v("send confirmation request to unconfirmed subscription channel")]),e._v(" "),i("li",[e._v("verify confirmation code")])])]),e._v(" "),i("li",[e._v("generate random un-subscription code")]),e._v(" "),i("li",[e._v("send acknowledgement message after un-subscription for anonymous subscribers")]),e._v(" "),i("li",[e._v("bulk unsubscription")]),e._v(" "),i("li",[i("a",{attrs:{href:"http://www.list-unsubscribe.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("list-unsubscribe"),i("OutboundLink")],1),e._v(" by email")]),e._v(" "),i("li",[e._v("track bounces and unsubscribe the recipient from all subscriptions when hard bounce count exceeds threshold")]),e._v(" "),i("li",[e._v("sms user can unsubscribe by replying a shortcode keyword with Swift sms provider")])]),e._v(" "),i("h3",{attrs:{id:"mail-merge"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#mail-merge"}},[e._v("#")]),e._v(" mail merge")]),e._v(" "),i("p",[e._v("Strings in notification or subscription message that are enclosed between curly braces "),i("em",[e._v("{")]),e._v(" "),i("em",[e._v("}")]),e._v(" are called tokens, also known as placeholders. Tokens are replaced based on the context of notification or subscription when dispatching the message. To avoid treating a string between curly braces as a token, escape the curly braces with backslash "),i("em",[e._v("\\")]),e._v(". For example "),i("em",[e._v("\\{i_am_not_a_token\\}")]),e._v(" is not a token. It will be rendered as "),i("em",[e._v("{i_am_not_a_token}")]),e._v(".")]),e._v(" "),i("p",[e._v("Tokens whose names are predetermined by "),i("em",[e._v("NotifyBC")]),e._v(" are called static tokens; otherwise they are called dynamic tokens.")]),e._v(" "),i("h4",{attrs:{id:"static-tokens"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#static-tokens"}},[e._v("#")]),e._v(" static tokens")]),e._v(" "),i("p",[i("em",[e._v("NotifyBC")]),e._v(" recognizes following case-insensitive static tokens. Most of the names are self-explanatory.")]),e._v(" "),i("ul",[i("li",[e._v("{subscription_confirmation_url}")]),e._v(" "),i("li",[e._v("{subscription_confirmation_code}")]),e._v(" "),i("li",[e._v("{service_name}")]),e._v(" "),i("li",[e._v("{http_host} - http host in the form "),i("i",[e._v("http(s): //<host_name>:<port>")]),e._v(". The value is obtained from the http request that triggers the message")]),e._v(" "),i("li",[e._v("{rest_api_root} - configured Loopback "),i("a",{attrs:{href:"https://loopback.io/doc/en/lb4/Customizing-server-configuration.html#configure-the-base-path",target:"_blank",rel:"noopener noreferrer"}},[e._v("REST API basePath"),i("OutboundLink")],1)]),e._v(" "),i("li",[e._v("{subscription_id}")]),e._v(" "),i("li",[e._v("anonymous unsubscription related tokens\n"),i("ul",[i("li",[e._v("{unsubscription_url}")]),e._v(" "),i("li",[e._v("{unsubscription_all_url} - url to unsubscribe all services the user has subscribed on\nthis "),i("i",[e._v("NotifyBC")]),e._v(" instance")]),e._v(" "),i("li",[e._v("{unsubscription_code}")]),e._v(" "),i("li",[e._v("{unsubscription_reversion_url}")]),e._v(" "),i("li",[e._v("{unsubscription_service_names} - includes {service_name} and additional services user has unsubscribed, prefixed with conditionally pluralized word "),i("i",[e._v("service")]),e._v(".")])])])]),e._v(" "),i("h4",{attrs:{id:"dynamic-tokens"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-tokens"}},[e._v("#")]),e._v(" dynamic tokens")]),e._v(" "),i("p",[e._v("Dynamic tokens are replaced with correspondingly named sub-field of "),i("em",[e._v("data")]),e._v(" field in the notification or subscription if exist. Qualify token name with "),i("em",[e._v("notification::")]),e._v(" or "),i("em",[e._v("subscription::")]),e._v(" to indicate the source of substitution. If token name is not qualified, then both notification and subscription are checked with notification takes precedence. Nested and indexed sub-fields are supported.")]),e._v(" "),i("p",[e._v("Examples")]),e._v(" "),i("ul",[i("li",[i("em",[e._v("{notification::description}")]),e._v(" is replaced with field "),i("em",[e._v("data.description")]),e._v(" of the notification request if exist")]),e._v(" "),i("li",[i("em",[e._v("{subscription::gender}")]),e._v(" is replaced with field "),i("em",[e._v("data.gender")]),e._v(" of the subscription if exist")]),e._v(" "),i("li",[i("em",[e._v("{addresses[0].city}")]),e._v(" is replaced with field "),i("em",[e._v("data.addresses[0].city")]),e._v(" of the notification if exist; otherwise is replaced with field "),i("em",[e._v("data.addresses[0].city")]),e._v(" of the subscription if exist")]),e._v(" "),i("li",[i("em",[e._v("{nonexistingDataField}")]),e._v(" is unreplaced if neither notification nor subscription contains "),i("em",[e._v("data.nonexistingDataField")])])]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("Notification by RSS feeds relies on dynamic token")]),e._v(" "),i("p",[e._v("A notification created by RSS feeds relies on dynamic token to supply the context to message template. In this case the "),i("i",[e._v("data")]),e._v(" field contains the RSS item.")])]),e._v(" "),i("h2",{attrs:{id:"architecture"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#architecture"}},[e._v("#")]),e._v(" Architecture")]),e._v(" "),i("h3",{attrs:{id:"request-types"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#request-types"}},[e._v("#")]),e._v(" Request Types")]),e._v(" "),i("p",[i("em",[e._v("NotifyBC")]),e._v(", designed to be a microservice, doesn't use full-blown ACL to secure API calls. Instead, it classifies incoming requests into admin and user types. The key difference is while both admin and user can subscribe to notifications, only admin can post notifications.")]),e._v(" "),i("p",[e._v("Each type has two subtypes based on following criteria")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("super-admin, if the request meets both of the following two requirements")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("The request carries one of the following two attributes")]),e._v(" "),i("ul",[i("li",[e._v("the source ip is in the admin ip list")]),e._v(" "),i("li",[e._v("has a client certificate that is signed using "),i("em",[e._v("NotifyBC")]),e._v(" server certificate. See "),i("RouterLink",{attrs:{to:"/docs/config/certificates.html#client-certificate-authentication"}},[e._v("Client certificate authentication")]),e._v(" on how to sign.")],1)])]),e._v(" "),i("li",[i("p",[e._v("The request doesn't contain any of following case insensitive HTTP headers, with the first three being SiteMinder headers")]),e._v(" "),i("ul",[i("li",[e._v("sm_universalid")]),e._v(" "),i("li",[e._v("sm_user")]),e._v(" "),i("li",[e._v("smgov_userdisplayname")]),e._v(" "),i("li",[e._v("is_anonymous")])])])])]),e._v(" "),i("li",[i("p",[e._v("admin, if the request is not super-admin and meets one of the following criteria")]),e._v(" "),i("ul",[i("li",[e._v("has a valid access token associated with an builtin admin user created and logged in using the "),i("em",[e._v("administrator")]),e._v(" api, and the request doesn't contain any HTTP headers listed above")]),e._v(" "),i("li",[e._v("has a valid OIDC access token containing customizable admin profile attributes")])]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("access token disambiguation")]),e._v(" "),i("p",[e._v("Here the term "),i("em",[e._v("access token")]),e._v(" has been used to refer two different things")]),e._v(" "),i("ol",[i("li",[e._v("the token associated with a builtin admin user")]),e._v(" "),i("li",[e._v("the token generated by OIDC provider.")])]),e._v(" "),i("p",[e._v("To reduce confusion, throughout the documentation the former is called "),i("em",[e._v("access token")]),e._v(" and the latter is called "),i("em",[e._v("OIDC access token")]),e._v(".")])])]),e._v(" "),i("li",[i("p",[e._v("authenticated user, if the request is neither super-admin nor admin, and meets one fo the following criteria")]),e._v(" "),i("ul",[i("li",[e._v("contains any of the 3 SiteMinder headers listed above, and comes from either trusted SiteMinder proxy or admin ip list")]),e._v(" "),i("li",[e._v("contains a valid OIDC access token")])])]),e._v(" "),i("li",[i("p",[e._v("anonymous user, if the request doesn't meet any of the above criteria")])])]),e._v(" "),i("p",[e._v("The only extra privileges that a super-admin has over admin are that super-admin can perform CRUD operations on "),i("em",[e._v("configuration")]),e._v(", "),i("em",[e._v("bounce")]),e._v(" and "),i("em",[e._v("administrator")]),e._v(" entities through REST API. In the remaining docs, when no further distinction is necessary, an admin request refers to both super-admin and admin request; a user request refers to both authenticated and anonymous request.")]),e._v(" "),i("p",[e._v("An admin request carries full authorization whereas user request has limited access. For example, a user request is not allowed to")]),e._v(" "),i("ul",[i("li",[e._v("send notification")]),e._v(" "),i("li",[e._v("bypass the delivery channel confirmation process when subscribing to a service")]),e._v(" "),i("li",[e._v("retrieve push notifications through API (can only receive notification from push notification channel such as email)")]),e._v(" "),i("li",[e._v("retrieve in-app notifications that is not targeted to the current user")])]),e._v(" "),i("p",[e._v("The result of an API call to the same end point may differ depending on the request type. For example, the call "),i("em",[e._v("GET /notifications")]),e._v(" without a filter will return all notifications to all users for an admin request, but only non-deleted, non-expired in-app notifications for authenticated user request, and forbidden for anonymous user request. Sometimes it is desirable for a request from admin ip list, which would normally be admin request, to be voluntarily downgraded to user request in order to take advantage of predefined filters such as the ones described above. This can be achieved by adding one of the HTTP headers listed above to the request. This is also why admin request is not determined by ip or token alone.")]),e._v(" "),i("p",[e._v("The way "),i("em",[e._v("NotifyBC")]),e._v(" interacts with other components is diagrammed below.\n"),i("img",{attrs:{src:e.$withBase("/img/architecture.svg"),alt:"architecture diagram"}})]),e._v(" "),i("h3",{attrs:{id:"authentication-strategies"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#authentication-strategies"}},[e._v("#")]),e._v(" Authentication Strategies")]),e._v(" "),i("p",[e._v("API requests to "),i("em",[e._v("NotifyBC")]),e._v(" can be either anonymous or authenticated. As alluded in "),i("a",{attrs:{href:"#request-types"}},[e._v("Request Types")]),e._v(" above, "),i("em",[e._v("NotifyBC")]),e._v(" supports following authentication strategies")]),e._v(" "),i("ol",[i("li",[e._v("ip whitelisting")]),e._v(" "),i("li",[e._v("client certificate")]),e._v(" "),i("li",[e._v("access token associated with an builtin admin user")]),e._v(" "),i("li",[e._v("OpenID Connect (OIDC)")]),e._v(" "),i("li",[e._v("CA SiteMinder")])]),e._v(" "),i("p",[e._v("Authentication is performed in above order. Once a request passed an authentication strategy, the rest strategies are skipped. A request that failed all authentication strategies is anonymous.")]),e._v(" "),i("p",[e._v("The mapping between authentication strategy and request type is")]),e._v(" "),i("table",{staticClass:"tg"},[i("tbody",[i("tr",[i("td",{staticClass:"tg-0pky",attrs:{rowspan:"2"}}),e._v(" "),i("td",{staticClass:"tg-c3ow",attrs:{colspan:"2"}},[e._v("Admin")]),e._v(" "),i("td",{staticClass:"tg-c3ow",attrs:{colspan:"2"}},[e._v("User")])]),e._v(" "),i("tr",[i("td",{staticClass:"tg-btxf"},[e._v("Super-admin")]),e._v(" "),i("td",{staticClass:"tg-btxf"},[e._v("admin")]),e._v(" "),i("td",{staticClass:"tg-btxf"},[e._v("authenticated")]),e._v(" "),i("td",{staticClass:"tg-btxf"},[e._v("anonymous")])]),e._v(" "),i("tr",[i("td",{staticClass:"tg-0pky"},[e._v("ip whitelisting")]),e._v(" "),i("td",{staticClass:"tg-c3ow"},[e._v("✔")]),e._v(" "),i("td",{staticClass:"tg-c3ow"}),e._v(" "),i("td",{staticClass:"tg-c3ow"}),e._v(" "),i("td",{staticClass:"tg-c3ow"})]),e._v(" "),i("tr",[i("td",{staticClass:"tg-btxf"},[e._v("client certifcate")]),e._v(" "),i("td",{staticClass:"tg-abip"},[e._v("✔")]),e._v(" "),i("td",{staticClass:"tg-abip"}),e._v(" "),i("td",{staticClass:"tg-abip"}),e._v(" "),i("td",{staticClass:"tg-abip"})]),e._v(" "),i("tr",[i("td",{staticClass:"tg-0pky"},[e._v("access token")]),e._v(" "),i("td",{staticClass:"tg-c3ow"}),e._v(" "),i("td",{staticClass:"tg-c3ow"},[e._v("✔")]),e._v(" "),i("td",{staticClass:"tg-c3ow"}),e._v(" "),i("td",{staticClass:"tg-c3ow"})]),e._v(" "),i("tr",[i("td",{staticClass:"tg-btxf"},[e._v("OIDC")]),e._v(" "),i("td",{staticClass:"tg-abip"}),e._v(" "),i("td",{staticClass:"tg-abip"},[e._v("✔")]),e._v(" "),i("td",{staticClass:"tg-abip"},[e._v("✔")]),e._v(" "),i("td",{staticClass:"tg-abip"})]),e._v(" "),i("tr",[i("td",{staticClass:"tg-0pky"},[e._v("SiteMinder")]),e._v(" "),i("td",{staticClass:"tg-c3ow"}),e._v(" "),i("td",{staticClass:"tg-c3ow"}),e._v(" "),i("td",{staticClass:"tg-c3ow"},[e._v("✔")]),e._v(" "),i("td",{staticClass:"tg-c3ow"})])])]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("Which authentication strategy to use?")]),e._v(" "),i("p",[e._v("Because ip whitelist doesn't expire and client certificate usually has a relatively long expiration period (say one year), they are suitable for long-running unattended server processes such as server-side code of web apps, cron jobs, IOT sensors etc. The server processes have to be trusted because once authenticated, they have full privilege to "),i("em",[e._v("NotifyBC")]),e._v(". Usually the server processes and "),i("em",[e._v("NotifyBC")]),e._v(" instance are in the same administrative domain, i.e. managed by the same admin group of an organization.")]),e._v(" "),i("p",[e._v("By contrast, OIDC and SiteMinder use short-lived tokens or session cookies. Therefore they are only suitable for interactive user sessions.")]),e._v(" "),i("p",[e._v("Access token associated with an builtin admin user should be avoided whenever possible.")]),e._v(" "),i("p",[e._v("Here are some common scenarios and recommendations")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("For server-side code of web apps")]),e._v(" "),i("ul",[i("li",[e._v("use OIDC if the web app is OIDC enabled and user requests can be proxied to "),i("em",[e._v("NotifyBC")]),e._v(" by web app; otherwise")]),e._v(" "),i("li",[e._v("use ip whitelisting if obtaining ip is feasible; otherwise")]),e._v(" "),i("li",[e._v("use client certificate (requires a little more config than ip whitelisting)")])])]),e._v(" "),i("li",[i("p",[e._v("For front-end browser-based web apps such as SPAs")]),e._v(" "),i("ul",[i("li",[e._v("use OIDC")])])]),e._v(" "),i("li",[i("p",[e._v("For server apps that send requests spontaneously such as IOT sensors, cron jobs")]),e._v(" "),i("ul",[i("li",[e._v("use ip whitelisting if obtaining ip is feasible; otherwise")]),e._v(" "),i("li",[e._v("client certificate")])])]),e._v(" "),i("li",[i("p",[e._v("If "),i("em",[e._v("NotifyBC")]),e._v(" is ued by a "),i("em",[e._v("SiteMinder")]),e._v(" protected web apps and "),i("em",[e._v("NotifyBC")]),e._v(" is also protected by "),i("em",[e._v("SiteMinder")])]),e._v(" "),i("ul",[i("li",[e._v("use SiteMinder")])])])])]),e._v(" "),i("h2",{attrs:{id:"application-framework"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#application-framework"}},[e._v("#")]),e._v(" Application Framework")]),e._v(" "),i("p",[i("em",[e._v("NotifyBC")]),e._v(" is created on Node.js "),i("a",{attrs:{href:"https://loopback.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("LoopBack"),i("OutboundLink")],1),e._v(". Contributors to source code of "),i("em",[e._v("NotifyBC")]),e._v(" should be familiar with LoopBack. "),i("a",{attrs:{href:"https://loopback.io/doc/en/lb4",target:"_blank",rel:"noopener noreferrer"}},[e._v("LoopBack Docs"),i("OutboundLink")],1),e._v(" serves a good complement to this documentation.")])])}),[],!1,null,null,null);t.default=a.exports}}]);