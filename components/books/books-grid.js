import BookItem from "./book-item";
import classes from "./books-grid.module.css";

function BooksGrid(props) {
  const books = props.books;

  return (
    <div className={classes.books}>
      {books.map((book) => {
        return <BookItem book={book} key={book.id}></BookItem>;
      })}
    </div>
  );
}

export default BooksGrid;
