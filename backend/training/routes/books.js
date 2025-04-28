import express from "express";
import Joi from "joi";
const router = express.Router();

const books = [
  { id: 1, title: "gg", auther: "rr", price: 10 },
  { id: 2, title: "ee", auther: "cc", price: 20 },
];

router.get("/", (req, res) => {
  res.json(books);
});

router.get("/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({ message: "book not found" });
  }
});

router.post("/", (req, res) => {
  const schema = Joi.object({
    title: Joi.string().trim().min(3).max(200).required(),
    auther: Joi.string().trim().min(3).max(200).required(),
    price: Joi.number().min(0).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  const book = {
    id: books.length + 1,
    title: req.body.title,
    auther: req.body.auther,
    price: req.body.price,
  };
  books.push(book);
  res.status(201).json(book);
});

export default router;
