const ALL_BOOKS = [
  {
    id: 1,
    title: "Politics",
    author: "Aristotle",
    image: "politics-aristotle.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Republic",
    author: "Plato",
    image: "republic-plato.jpg",
    featured: true,
  },
  {
    id: 3,
    title: "Odyssey",
    author: "Homer",
    image: "odyssey-homer.jpg",
    featured: false,
  },
];

export function getAllBooks() {
  return ALL_BOOKS;
}

export function getFeaturedBooks() {
  return ALL_BOOKS.filter((book) => book.featured);
}

export function getBookById(id) {
  return ALL_BOOKS.find((book) => book.id === parseInt(id));
}
