import express from "express";
import booksRoute from "./routes/books.js";
const app = express();
const port = 3000;
app.use(express.json());

app.use("/api/books", booksRoute);
app.listen(port, () => {
  console.log("server");
});
