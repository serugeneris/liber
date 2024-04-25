import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    const books = await prisma.book.findMany();
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
