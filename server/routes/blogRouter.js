import express from 'express';
import Blog from '../controllers/BlogController';

const { addBlog, getAllBlog, modifyBlog } = Blog;

const blogRouter = express.Router();

blogRouter.route('/')
  .post(addBlog)
  .get(getAllBlog);

blogRouter.route('/edit/:blogId')
  .put(modifyBlog);
export default blogRouter;
