import { createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./routeReducer";
import thunk from 'redux-thunk';

export function configureStore() {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
}


