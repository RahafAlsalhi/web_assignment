import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
//frontend controller
const app = express();
const port = 3000;
const api_url = "http://localhost:4000";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(bodyParser.json());

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(`${api_url}/posts`);
    res.render("index.ejs", { posts: response.data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/create-post", (req, res) => {
  res.render("modify.ejs", {
    heading: "Create New Post",
    submit: "Create Post",
  });
});

app.get("/edit-post/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await axios.get(`${api_url}/posts/${id}`);
    res.render("modify.ejs", {
      heading: "Edit Post",
      submit: "Edit",
      post: response.data,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/posts", async (req, res) => {
  try {
    const response = await axios.post(`${api_url}/posts`, req.body);
    res.redirect("/");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/posts/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await axios.patch(`${api_url}/posts/${id}`, req.body);
    res.redirect("/");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/posts/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await axios.delete(`${api_url}/posts/${id}`);
    res.redirect("/");
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
