import { createStore, applyMiddleware, compose } from "redux";

import { rootReducer } from "./RootReducer"
import thunk from "redux-thunk";

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools ? devtools : compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
