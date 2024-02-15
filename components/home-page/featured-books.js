import { getFeaturedBooks } from "@/utils/get-books";
import BooksGrid from "../books/books-grid";
import classes from "./featured-books.module.css";

function FeaturedBooks() {
  const featuredBooks = getFeaturedBooks();

  return (
    <section className={classes.container}>
      <h2>Featured Books</h2>
      <BooksGrid books={featuredBooks}></BooksGrid>
    </section>
  );
}

export default FeaturedBooks;
