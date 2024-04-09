import classes from "./book-image.module.css";
import Image from "next/image";

function BookImage(props) {
  const { image } = props;
  return (
    <div>
      <Image src={`/books/${image}`} width={390} height={585}></Image>
    </div>
  );
}

export default BookImage;
