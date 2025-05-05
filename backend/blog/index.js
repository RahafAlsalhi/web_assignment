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
let post = { title: null, imageUrl: null, content: null };

app.get("/", (req, res) => {
  res.render("home.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  if (req.body) {
    post.title = req.body.title;
    post.imageUrl = req.body.imageUrl;
    post.content = req.body.content;

    const newPost = {
      id: nextId++,
      title: post.title,
      imageUrl: post.imageUrl,
      content: post.content,
    };

    posts.push(newPost);
    res.redirect("/");
  }
});

app.get("/posts/:id/edit", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (post) {
    res.render("edit.ejs", { post });
  } else {
    res.send("Post not found");
  }
});

app.post("/posts/:id", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (post) {
    post.title = req.body.title;
    post.imageUrl = req.body.imageUrl;
    post.content = req.body.content;
    res.redirect("/");
  } else {
    res.send("Post not found");
  }
});

app.post("/posts/:id/delete", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (post) {
    posts = posts.filter((p) => p.id != parseInt(req.params.id));
    res.redirect("/");
  } else {
    res.send("Post not found");
  }
});

app.listen(PORT, () => {});
