import { configureStore } from "@reduxjs/toolkit";
import FavoriteReducer from "./FavoriteSlice/FavoriteSlice";

export const store = configureStore({
    reducer: {
        favorites: FavoriteReducer
    }
})  