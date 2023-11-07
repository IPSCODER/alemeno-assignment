import { createStore ,applyMiddleware } from "redux";
import reduxThunk from "redux-thunk"
import rootReducer from "./root-reducer";


const middlerwares = [reduxThunk];





export const store = createStore(rootReducer,applyMiddleware(...middlerwares))