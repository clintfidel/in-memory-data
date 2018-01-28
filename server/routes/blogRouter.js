import express from 'express';
import Blog from '../controllers/BlogController';

const { addBlog, getAllBlog } = Blog;

const blogRouter = express.Router();

blogRouter.route('/')
  .post(addBlog)
  .get(getAllBlog);
export default blogRouter;
