import { createStore } from "redux";
import rootReducer  from "./reducers/index";

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

// subscribe(listener)

// Adds a change listener. It will be called any time an action is dispatched, and some part of the state tree may potentially have changed. You may then call getState() to read the current state tree inside the callback.