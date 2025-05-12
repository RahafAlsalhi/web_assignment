import express from "express";
import Joi from "joi";
const router = express.Router();

const books = [
  { id: 1, title: "gg", author: "rr", price: 10 },
  { id: 2, title: "ee", author: "cc", price: 20 },
];

// GET all books
router.get("/", (req, res) => {
  res.json(books);
});

// GET book by ID
router.get("/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

// POST new book
router.post("/", (req, res) => {
  const schema = Joi.object({
    title: Joi.string().trim().min(3).max(200).required(),
    author: Joi.string().trim().min(3).max(200).required(),
    price: Joi.number().min(0).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const book = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
    price: req.body.price,
  };

  books.push(book);
  res.status(201).json(book);
});

// PUT update book
router.put("/:id", (req, res) => {
  const schema = Joi.object({
    title: Joi.string().trim().min(3).max(200),
    author: Joi.string().trim().min(3).max(200),
    price: Joi.number().min(0),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (book) {
    res.status(200).json({ message: "Book has been updated", book });
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

// DELETE book
router.delete("/:id", (req, res) => {
  const index = books.findIndex((b) => b.id === parseInt(req.params.id));
  if (index !== -1) {
    const deletedBook = books.splice(index, 1);
    res.status(200).json({ message: "Book has been deleted", deletedBook });
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

export default router;
