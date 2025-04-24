 import Book from "../Book/Book";
 import FavoriteButton from "../FavoriteButton/FavoriteButton";

 const List = ({data}) => {

    return(
        <div className="book-list">
            {data.map((book) => {
                        return(
                        <div>
                            <Book bookInfo={book}></Book>
                        </div>
            )})}
        </div>
    )
 }

 export default List;