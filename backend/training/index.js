import express from "express";
import booksRoute from "./routes/books.js";
import authorsRoute from "./routes/authors.js";
const app = express();
const port = 3000;

app.use(express.json());

app.use("/api/books", booksRoute);
app.use("/api/authors", authorsRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
