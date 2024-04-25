import BooksGrid from "../books/books-grid";
import classes from "./featured-books.module.css";

function FeaturedBooks(props) {
  return (
    <section className={classes.container}>
      <h2>Featured Books</h2>
      <BooksGrid books={props.books}></BooksGrid>
    </section>
  );
}

export default FeaturedBooks;
