import { Router } from "express";
import { checkAuth } from "../utils/checkAuth.js";
import { createPost } from "../controllers/posts.js";

const router = new Router();

// Register
// http://localhost:6634/api/posts
router.post("/", checkAuth, createPost);

export default router;
