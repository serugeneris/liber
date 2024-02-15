import AllBooks from "@/components/books/all-books";
import { getAllBooks } from "@/utils/get-books";

function Books() {
  const allBooks = getAllBooks();

  return <AllBooks books={allBooks}></AllBooks>;
}

export default Books;
