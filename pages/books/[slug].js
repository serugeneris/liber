import BookContent from "@/components/books/book-detail/book-content";
import { getAllBooks, getBookById } from "@/utils/get-books";

function BookDetailPage(props) {
  return <BookContent book={props.book}></BookContent>;
}

export function getStaticProps(context) {
  const id = context.params.slug;
  const bookData = getBookById(id);

  return {
    props: {
      book: bookData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const allBooks = getAllBooks();
  const paths = allBooks.map((book) => ({ params: { slug: String(book.id) } }));
  return {
    paths: paths,
    fallback: false,
  };
}

export default BookDetailPage;
