import { useEffect, useState } from "react";
import "./App.css";
import logo from "./logo.svg";

// configure it in your .env file
const config = {
  clientDisplayName: client_display_name_here,
  environment: environment_here,
  userId: user_id_here,
  token: user_token,
  redirect: redirect_or_popup,
  workPlatformId: work_platform_id_or_null,
};

function App() {
  const [phylloConnectSDK, setPhylloConnectSDK] = useState({});

  useEffect(() => {
    const PhylloConnect = window.PhylloConnect;
    const phylloConnect = PhylloConnect.initialize(config);

    phylloConnect.on(
      "accountConnected",
      (accountId, workplatformId, userId) => {
        console.log(
          `onAccountConnected: ${accountId}, ${workplatformId}, ${userId}`
        );
      }
    );
    phylloConnect.on(
      "accountDisconnected",
      (accountId, workplatformId, userId) => {
        console.log(
          `onAccountDisconnected: ${accountId}, ${workplatformId}, ${userId}`
        );
      }
    );
    phylloConnect.on("tokenExpired", (userId) => {
      console.log(`onTokenExpired: ${userId}`);
    });
    phylloConnect.on("exit", (reason, userId) => {
      console.log(`onExit: ${reason}, ${userId}`);
    });
    phylloConnect.on("connectionFailure", (reason, workplatformId, userId) => {
      console.log(
        `onConnectionFailure: ${reason}, ${workplatformId}, ${userId}`
      );
    });
    setPhylloConnectSDK(phylloConnect);
  }, []);

  const redirectToPhylloSDK = () => {
    phylloConnectSDK.open();
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={redirectToPhylloSDK}>
          Click me to go to Phyllo sdk
        </button>
      </header>
    </div>
  );
}

export default App;
