import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSLice"
const appStore = configureStore({
    reducer:{
        cart:cartReducer
    }
});

export default appStore;
