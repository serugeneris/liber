import AllBooks from "@/components/books/all-books";
import { getAllBooks } from "@/utils/api-utils";
import Head from "next/head";

function Books(props) {
  const allBooks = props.books;

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

export async function getStaticProps() {
  const books = await getAllBooks();
  return {
    props: {
      books: books,
    },
    revalidate: 60,
  };
}
