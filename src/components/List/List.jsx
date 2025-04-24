 import Book from "../Book/Book";

 const List = ({data}) => {

    return(
        <div className="book-list">
            {data.map((book) => {
                        return(
                        <Book
                            title={book.title}
                            author={book.author}
                            category={book.category}
                            synopsis={book.synopsis}
                        ></Book>  
            )})}
        </div>
    )
 }

 export default List;