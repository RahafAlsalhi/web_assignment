import express from "express";
import {
  getPosts,
  getPost,
  createPost,
  editPost,
  patchPost,
  deletePost,
} from "../controllers/postsController.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/posts/:id", getPost);
router.post("/posts", createPost);
router.put("/posts/:id", editPost);
router.patch("/posts/:id", patchPost);
router.delete("/posts/:id", deletePost);

export default router;
