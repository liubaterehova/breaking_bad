import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import customReducer, { filterReducer } from "../custom";

export default history => {
    return combineReducers({
        router: connectRouter(history),
        custom: customReducer,
        filterState: filterReducer
    });
};