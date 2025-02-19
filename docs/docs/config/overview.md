---
permalink: /docs/config-overview/
---

# Configuration Overview

::: tip Helm Chart Configurations
The document pages in this section cover _NoitfyBC_ app level configurations only.
If your _NotifyBC_ is deployed to Kubernetes using Helm, you can also [customize](../getting-started/installation.md#customizations) infrastructure level configurations.
:::

There are two types of configurations - static and dynamic. Static configurations are defined in files or environment variables, requiring restarting _NotifyBC_ to take effect, whereas dynamic configurations are defined in databases and updates take effect immediately.

## Static Configurations

Most static configurations are specified in file _/src/config.ts_. If you need to change, instead of updating _/src/config.ts_ file, create local file _/src/config.local.js_ or environment specific file _/src/config.\<env\>.js_, which is only included when environment variable _NODE_ENV_ equals _\<env\>_. Besides _js_, _ts_ and _json_ file extensions are also supported. The rest of the documentation assumes the file extension is _js_. Content in these files are deeply merged in following ascending precedence

- default file /src/config.ts
- environment specific file _/src/config.\<env\>.js_
- local file _/src/config.local.js_

::: warning Run build script whenever changing file in /src
Every time a file under _/src_, including config files, is updated, run `yarn build` before restarting _NotifyBC_ to take effect.
:::

Following configs should be customized per installation

- [Admin IP List](../config/adminIpList.md)
- [Reverse Proxy IP Lists](../config/reverseProxyIpLists.md)
- [HTTP Host](../config/httpHost.md)
- [SMTP](../config/email.md#smtp)

In addition, if installing from source code

- [Database](../config/database.md)
- [Internal HTTP Host](../config/internalHttpHost.md)

Customizing other configs only if needed.

## Dynamic Configurations

Dynamic configs are managed using REST [configuration api](../api-config/).

::: tip Why Dynamic Configs?
Dynamic configs are needed in cases such as

- to allow define service-specific configs such as message templates
- in a multi-node deployment, configs can be generated by one node (typically master) and shared with other nodes

:::
