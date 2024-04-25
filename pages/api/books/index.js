import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    let books = [];

    if (req.query.featured) {
      books = await prisma.book.findMany({
        where: {
          featured: true,
        },
      });
    } else {
      const limit = parseInt(req.query.limit) || 10; // Default to 10 if no limit is provided
      books = await prisma.book.findMany({
        take: limit,
      });
    }

    res.status(200).json(books);
  } else if (req.method === "POST") {
    const { title, author, description, publisher } = req.body;
    const book = await prisma.book.create({
      data: {
        title,
        author,
        description,
        publisher,
      },
    });
    res.status(201).json(book);
  }
}
