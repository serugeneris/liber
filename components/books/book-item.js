import classes from "./book-item.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function BookItem(props) {
  const [isHovered, setIsHover] = useState(false);
  const book = props.book;

  const linkPath = `/books/${book.id}`;

  const containerClasses = isHovered
    ? `${classes.book} ${classes.hovered}`
    : classes.book;
  return (
    <Link href={linkPath}>
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
    </Link>
  );
}

export default BookItem;
