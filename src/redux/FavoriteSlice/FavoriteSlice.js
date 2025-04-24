import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorites:""
};

export const FavoriteSlice = createSlice({
    name:"favorite",
    initialState,
    reducers:{
        AddFavorite: (state, action) => {
            state.favorites = action.payload;
        }
    }
})

export const {AddFavorite} = FavoriteSlice.actions;
export default FavoriteSlice.reducer;