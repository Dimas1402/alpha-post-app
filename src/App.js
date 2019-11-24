import React from "react";
import Routes from "./routes/Routes";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Reducers } from "./redux/reducers";

const Store = createStore(
  Reducers,
  {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

function App() {
  return (
    <div className="App admin">
      <Provider store={Store}>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
