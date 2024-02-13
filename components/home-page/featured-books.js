import BooksGrid from "../books/books-grid";
import classes from "./featured-books.module.css";

const FEATURED_BOOKS = [
  {
    id: 1,
    title: "Politics",
    author: "Aristotle",
    image: "politics-aristotle.jpg",
  },
  { id: 2, title: "Republic", author: "Plato", image: "republic-plato.jpg" },
];

function FeaturedBooks() {
  return (
    <section className={classes.container}>
      <h2>Featured Books</h2>
      <BooksGrid books={FEATURED_BOOKS}></BooksGrid>
    </section>
  );
}

export default FeaturedBooks;
