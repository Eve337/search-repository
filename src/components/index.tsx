import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reposReducer from "../components/reducers/reposReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  repos: reposReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export type RootState = ReturnType<typeof rootReducer>;
