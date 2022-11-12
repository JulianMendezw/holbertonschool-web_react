import React from "react";
import ReactDOM from "react-dom";
import { ConnectedApp } from "./App/App";
import { applyMiddleware, createStore, compose } from "redux";
import uiReducer from "./reducers/uiReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const store = createStore(
  uiReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById("root")
);
