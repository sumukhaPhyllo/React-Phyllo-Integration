# Getting Started with Phyllo on React

### Add PhylloConnect CDN to your html file

index.html

```sh
<script src="https://cdn.getphyllo.com/connect/v2/phyllo-connect.js"></script>
```

Now you can access PhylloConnect object inside window object

```sh
const PhylloConnect = window.PhylloConnect;
```

Now you can redirect users to Phyllo sdk

```sh
const config = {
  clientDisplayName: <clientDisplayName>,
  environment: <environment>,
  userId: <userId>,
  token: <token>,
  redirect: <redirect>,
  workPlatformId: <workPlatformId>,
}

# You can access PhylloConnect via window.PhylloConnect
const phylloConnect = PhylloConnect.initialize(config);

# Attach all event listeners
phylloConnect.on("accountConnected", (accountId, workplatformId, userId) => {})
phylloConnect.on("accountDisconnected", (accountId, workplatformId, userId) => {})
phylloConnect.on("tokenExpired", (userId) => {})
phylloConnect.on("exit", (reason, userId) => {})
phylloConnect.on("connectionFailure", (reason, workplatformId, userId) => {})

# Now you can open Phyllo SDK with open method
phylloConnect.open();
```
