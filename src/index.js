import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import axios from "axios";
import makeApi from "./api";
import { createBrowserHistory } from "history";
import configureStore from "./store";

import "./index.css";
import * as serviceWorker from "./serviceWorker";

import ConnectMainPage from "../src/containers/ConnectMainPage";
import Template from "../src/components/template";

const configure = async () => {
  const api = makeApi({ client: axios });
  const store = configureStore({ api, history });

  const rootElement = document.getElementById("root");

  ReactDOM.render(
    <Provider store={store}>
      <Template history={history}>
        <ConnectMainPage />
      </Template>{" "}
    </Provider>,

    rootElement
  );

  serviceWorker.unregister();
};

configure();
