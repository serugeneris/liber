import classes from "./book-content.module.css";
import BookImage from "./book-image";

function BookContent(props) {
  const { title, image, author, description } = props.book;
  return (
    <article className={classes.content}>
      <BookImage></BookImage>
      <div className={classes.book_details}>
        <h1 className={classes.title}>{title}</h1>
        <h2>{author}</h2>
        <div className={classes.description}>
          <p>{description}</p>
        </div>
      </div>
    </article>
  );
}

export default BookContent;
