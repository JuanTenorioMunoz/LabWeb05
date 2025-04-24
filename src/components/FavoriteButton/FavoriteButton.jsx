import { useSelector, useDispatch } from "react-redux";
import { AddFavorite, RemoveFavorite } from "../../redux/FavoriteSlice/FavoriteSlice";

const FavoriteButton = ({ bookInfo }) => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites.favorites);

    const favoriteMatch = favorites.find((fav) => fav.id === bookInfo.id);
    const isFavorite = favoriteMatch; 
    const toggleFavorite = () => {
        if (isFavorite) {
            dispatch(RemoveFavorite(bookInfo.id));
        } else {
            dispatch(AddFavorite(bookInfo));
        }
    };

    return (
        <button
            className={"favorite-button"}
            onClick={toggleFavorite}
        >
            {isFavorite ? "Remove from favorites" : "Add to favorites"}
        </button>
    );
};

export default FavoriteButton;
