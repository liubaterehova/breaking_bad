import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import axios from "axios";
import makeApi from "./api";
import { createBrowserHistory } from "history";
import configureStore from "./store";

import "./index.css";
import * as serviceWorker from "./serviceWorker";

import MainPage from "../src/containers/ConnectMainPage";

const configure = async () => {
  const history = createBrowserHistory();

  const api = makeApi({ client: axios });
  const store = configureStore({ api, history });

  const rootElement = document.getElementById("root");

  ReactDOM.render(
    <Provider store={store}>
      <MainPage history={history}></MainPage>{" "}
    </Provider>,

    rootElement
  );

  serviceWorker.unregister();
};

configure();
