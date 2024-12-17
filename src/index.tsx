import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {App} from "./app/App";
import {store, storeContext} from "./app/store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <storeContext.Provider value={store}>
      <App/>
    </storeContext.Provider>
  </React.StrictMode>
);
