import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import blogReducer from "./reducers/blogReducers";
import messageReducer from "./reducers/messageReducers";

const reducer = combineReducers({
  blog: blogReducer,
  messages: messageReducer,
});

const initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
