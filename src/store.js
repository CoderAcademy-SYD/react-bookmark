import { createStore } from "redux";
import state from "./reducers";

export default createStore(
    state,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);