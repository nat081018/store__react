import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom"
import { Provider } from "react-redux";
import {store, persistor} from "./redux/store.js"
import { PersistGate } from 'redux-persist/integration/react'

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import { Provider } from "react-redux";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
    <BrowserRouter>
      <App />
    </BrowserRouter> 
    </PersistGate>
    </Provider>  
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
