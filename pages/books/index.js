import BooksGrid from "@/components/books/books-grid";

const ALL_BOOKS = [
  {
    id: 1,
    title: "Politics",
    author: "Aristotle",
    image: "politics-aristotle.jpg",
  },
  { id: 2, title: "Republic", author: "Plato", image: "republic-plato.jpg" },
  { id: 3, title: "Odyssey", author: "Homer", image: "odyssey-homer.jpg" },
];

function Books() {
  return <BooksGrid books={ALL_BOOKS} />;
}

export default Books;
