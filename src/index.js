import React from "react";
import ReactDOM from "react-dom/client";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AmplifyProvider>
      <App />
    </AmplifyProvider>
  </React.StrictMode>
);
