import express from "express";
import bodyParser from "body-parser";
import { error } from "console";

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));

let posts = [];
let lastId = 0;

app.get("/", (req, res) => {
  res.json(posts);
});

app.get("/posts/:id", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (post) res.json(post);
  else res.status(404).json({ error: "Post not found" });
});

app.post("/post", (req, res) => {
  lastId++;
  const post = {
    id: lastId,
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    date: new Date(),
  };
  posts.push(post);
  res.status(200).json(post);
});

app.patch("/post/:id", (req, res) => {
  const postIndex = posts.findIndex((p) => p.id === parseInt(req.params.id));
  if (postIndex === -1)
    return res.status(404).json({ error: "Post not found" });

  const postObj = posts[postIndex];
  const updated = {
    id: postObj.id,
    title: req.body.title || postObj.title,
    content: req.body.content || postObj.content,
    author: req.body.author || postObj.author,
    date: new Date(),
  };
  posts[postIndex] = updated;
  res.status(200).json(updated);
});
app.delete("/post/:id", (req, res) => {
  const postIndex = posts.findIndex((p) => p.id === parseInt(req.params.id));
  if (postIndex === -1) {
    return res.status(404).json({ error: "Post not found" });
  }

  const deletedPost = posts.splice(postIndex, 1)[0];
  res.status(200).json({ message: "Post deleted", post: deletedPost });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
