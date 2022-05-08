import newsReducer from "../news/newsReducer";
import {combineReducers, createStore} from "redux";


export const rootReducer = combineReducers({
    newsStore: newsReducer
})

export const store = createStore(rootReducer)