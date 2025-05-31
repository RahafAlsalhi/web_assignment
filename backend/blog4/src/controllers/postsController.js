import pool from "../config/db.js";

export const createPost = async (req, res) => {
  const { title, content, author } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO posts(title, content, author) VALUES ($1, $2, $3) RETURNING *",
      [title, content, author]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPosts = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM posts ORDER BY id");
    res.render("index.ejs", { posts: result.rows });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPost = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const result = await pool.query("SELECT * FROM posts WHERE id = $1", [id]);
    if (result.rows.length > 0) res.json(result.rows[0]);
    else res.status(404).json({ error: "post not found" });
  } catch (error) {
    res.status(500).json({ error: "server error" });
  }
};

export const editPost = async (req, res) => {
  const id = parseInt(req.params.id);
  const { title, content, author } = req.body;

  try {
    const result = await pool.query(
      "UPDATE posts SET title = $1, content = $2, author = $3, date = NOW() WHERE id = $4 RETURNING *",
      [title, content, author, id]
    );

    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ error: `Post with ID ${id} not found` });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const patchPost = async (req, res) => {
  const id = parseInt(req.params.id);
  const { title, content, author } = req.body;

  try {
    const fields = [];
    const values = [];
    let count = 1;

    if (title) {
      fields.push(`title = $${count++}`);
      values.push(title);
    }
    if (content) {
      fields.push(`content = $${count++}`);
      values.push(content);
    }
    if (author) {
      fields.push(`author = $${count++}`);
      values.push(author);
    }

    if (fields.length === 0) {
      return res.status(400).json({ error: "No fields provided to update" });
    }

    fields.push(`date = NOW()`);
    values.push(id);

    const result = await pool.query(
      `UPDATE posts SET ${fields.join(", ")} WHERE id = $${count} RETURNING *`,
      values
    );

    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ error: `Post with ID ${id} not found` });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const deletePost = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const result = await pool.query(
      "DELETE FROM posts WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rows.length > 0) {
      res.status(200).json({ message: `Post with ID ${id} deleted` });
    } else {
      res.status(404).json({ error: `Post with ID ${id} not found` });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
