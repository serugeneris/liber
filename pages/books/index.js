import AllBooks from "@/components/books/all-books";
import { getAllBooks } from "@/utils/get-books";
import Head from "next/head";

function Books() {
  const allBooks = getAllBooks();

  return (
    <>
      <Head>
        <title>All books</title>
      </Head>
      <AllBooks books={allBooks}></AllBooks>
    </>
  );
}

export default Books;
