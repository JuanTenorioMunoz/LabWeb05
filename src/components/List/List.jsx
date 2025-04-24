 import Book from "../Book/Book";
 import FavoriteButton from "../FavoriteButton/FavoriteButton";

 const List = ({data}) => {

    return(
        <div className="book-list">
            {data.map((book) => {
                        return(
                        <div>
                        <Book
                            title={book.title}
                            author={book.author}
                            category={book.category}
                            synopsis={book.synopsis}
                        ></Book>
                        <FavoriteButton bookInfo={book}></FavoriteButton>
                        </div>
            )})}
        </div>
    )
 }

 export default List;