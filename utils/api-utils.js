export async function getAllBooks() {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/books?limit=10"
  );
  const data = await response.json();

  const books = data.map((book) => {
    return {
      id: book.bookId,
      ...book,
    };
  });

  return books;
}

export async function getFeaturedBooks() {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/books?featured=true"
  );
  const data = await response.json();

  const books = data.map((book) => {
    return {
      id: book.bookId,
      ...book,
    };
  });

  return books;
}
