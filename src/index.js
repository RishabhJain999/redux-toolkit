import React from "react";
import App from "./component/App";
import { createRoot } from "react-dom/client";

import "./index.css";
import { Provider } from "react-redux";
import { store } from "./features/Store";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
