import classes from "./book-image.module.css";
import Image from "next/image";

function BookImage(image) {
  return (
    <div>
      <Image src={`/books/${image}`} width={300} height={450}></Image>
    </div>
  );
}

export default BookImage;
