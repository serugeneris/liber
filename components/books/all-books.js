import BooksGrid from "./books-grid";
import classes from "./all-books.module.css";

function AllBooks(props) {
  return (
    <section className={classes.container}>
      <h2>All Books</h2>
      <BooksGrid books={props.books} />;
    </section>
  );
}

export default AllBooks;
