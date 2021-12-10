import { combineReducers } from "redux";
import calciReducer from './calciReducer';


const rootReducer = combineReducers({
    calci: calciReducer,
});

export default rootReducer;