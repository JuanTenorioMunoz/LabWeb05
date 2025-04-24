import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorites: JSON.parse(localStorage.getItem("favorites")) || []

};

export const FavoriteSlice = createSlice({
    name:"favorite",
    initialState,
    reducers:{
        AddFavorite: (state, action) => {
            const book = action.payload
            state.favorites.push(book);
            localStorage.setItem("favorites", JSON.stringify(state.favorites));
        },
        RemoveFavorite: (state, action) => {
            const bookId = action.payload;
            state.favorites = state.favorites.filter(book => book.id !== bookId);
            localStorage.setItem("favorites", JSON.stringify(state.favorites));
        }
    }
})

export const {AddFavorite, RemoveFavorite} = FavoriteSlice.actions;
export default FavoriteSlice.reducer;