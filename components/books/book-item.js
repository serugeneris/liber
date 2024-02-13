import classes from "./book-item.module.css";
import Image from "next/image";
import { useState } from "react";

function BookItem(props) {
  const [isHovered, setIsHover] = useState(false);
  const book = props.book;

  const containerClasses = isHovered
    ? `${classes.book} ${classes.hovered}`
    : classes.book;
  return (
    <div
      className={containerClasses}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className={classes.title}>
        Title: <span>{book.title}</span>
      </div>
      <div className={classes.author}>
        Author: <span>{book.author}</span>
      </div>
      <Image src={`/books/${book.image}`} width={300} height={450}></Image>
    </div>
  );
}

export default BookItem;
