import express from "express";
import Joi from "joi";
const router = express.Router();

const authors = [
  { id: 1, firstName: "rana", lastName: "adas", nationality: "palestinian" },
  { id: 2, firstName: "deema", lastName: "alsalhi", nationality: "jordanian" },
];

// GET all authors
router.get("/", (req, res) => {
  res.json(authors);
});

// GET one author by ID
router.get("/:id", (req, res) => {
  const author = authors.find((a) => a.id === parseInt(req.params.id));
  if (author) {
    res.status(200).json(author);
  } else {
    res.status(404).json({ message: "Author not found" });
  }
});

// POST new author
router.post("/", (req, res) => {
  const schema = Joi.object({
    firstName: Joi.string().trim().min(3).max(200).required(),
    lastName: Joi.string().trim().min(3).max(200).required(),
    nationality: Joi.string().trim().min(3).max(200).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const author = {
    id: authors.length + 1,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    nationality: req.body.nationality,
  };

  authors.push(author);
  res.status(201).json(author);
});

// PUT update author
router.put("/:id", (req, res) => {
  const schema = Joi.object({
    firstName: Joi.string().trim().min(3).max(200),
    lastName: Joi.string().trim().min(3).max(200),
    nationality: Joi.string().trim().min(3).max(200),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const author = authors.find((a) => a.id === parseInt(req.params.id));
  if (author) {
    res.status(200).json({ message: "Author has been updated", author });
  } else {
    res.status(404).json({ message: "Author not found" });
  }
});

// DELETE author
router.delete("/:id", (req, res) => {
  const index = authors.findIndex((a) => a.id === parseInt(req.params.id));
  if (index !== -1) {
    const deletedAuthor = authors.splice(index, 1);
    res.status(200).json({ message: "Author has been deleted", deletedAuthor });
  } else {
    res.status(404).json({ message: "Author not found" });
  }
});

export default router;
