import { useSelector } from "react-redux";
import Book from "../Book/Book"; 
const FavoriteList = () => {

    const favorites = useSelector((state) => state.favorites.favorites);

    return (
        <div className="book-list">

            {favorites.map((book) => (
                    <Book bookInfo={book} />
            ))}
        </div>
    );
};

export default FavoriteList;
