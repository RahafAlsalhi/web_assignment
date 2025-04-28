import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let posts = [];
let nextId = 1;
app.get("/", (req, res) => {
  res.render("home.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  if (req.body) {
    const { title, imageUrl, content } = req.body;
    const newPost = { id: nextId++, title, imageUrl, content };
    posts.push(newPost);
  }
  res.send("post added succssfully");
});

app.get("/posts/:id/edit", (req, res) => {
  const post = posts.find((p) => {
    p.id == req.params.id;
  });
  if (post) {
    res.render("posts/edit", { post });
  } else {
    res.send("Post not found");
  }
});

app.post("/posts/:id", (req, res) => {
  const post = posts.find((p) => {
    p.id == req.params.id;
  });
  if (post) {
    post.title = req.body.title;
    post.imageUrl = req.body.imageUrl;
    post.content = req.body.content;
    res.send("post updated successfully");
  } else {
    res.send("Post not found");
  }
});

app.post("/posts/:id/delete", (req, res) => {
  posts = posts.filter((p) => {
    p.id != req.params.id;
  });
  res.send("post deleted successfully");
});

app.listen(PORT, () => {});
