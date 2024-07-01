import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import searchReducer from "./searchSlice";
import chatReducer from "./chatSlice";
import userReducer from "./userSlice";
const store = configureStore(
    {
        reducer:{
            app : appReducer,
            search: searchReducer,
            chat: chatReducer,
            user: userReducer
        }
    }
)

export default store;