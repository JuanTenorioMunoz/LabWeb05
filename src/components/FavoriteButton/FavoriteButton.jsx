import { useSelector, useDispatch } from "react-redux";
import { AddFavorite } from "../../redux/FavoriteSlice/FavoriteSlice";

const FavoriteButton = ({bookInfo}) => {
    const dispatch = useDispatch();
    const favorites = useSelector((state)=> state.favorites.favorites)

    const addToFavorites = (bookInfo) => {
        dispatch(AddFavorite(bookInfo))
    }

    return(
        <button className="favorite-button" onClick={() => addToFavorites(bookInfo)}></button>
    )
}

export default FavoriteButton;