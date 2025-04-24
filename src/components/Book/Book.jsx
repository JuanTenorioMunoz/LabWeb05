import "../Book/Book.css"
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const Book = ({title, author, category, synopsis}) => {
    return(
        <div className="book-card">
            <h1 className="title">{title}</h1>
            <h2 className="author">{author}</h2>
            <h2 className="category">{category}</h2>
            <p className="synopsis">{synopsis}</p>
        </div>
    )
}

export default Book;