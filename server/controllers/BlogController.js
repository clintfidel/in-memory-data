import dummyDb from '../models/index';


const {
  blogModel
} = dummyDb;

const BlogController = {
  addBlog(req, res) {
    const myBlog = {
      id: blogModel.length + 1,
      blogTitle: req.body.blogTitle,
      blogPost: req.body.blogPost,
      views: 0
    };
    Object.assign(req.body, myBlog);
    blogModel.push(req.body);
    return res.status(201).json({
      message: 'added succesfully',
      users: blogModel[blogModel.length - 1]
    });
  },

  getAllBlog(req, res) {
    const result = [];
    for (let i = 0; i < blogModel.length; i += 1) {
      result.push(blogModel[i]);
    }
    res.status(200).send(result);
  },

  modifyBlog(req, res) {
    const { blogPost, blogTitle } = req.body;
    let blog;
    for (let i = 0; i < blogModel.length; i += 1) {
      if (blogModel[i].id === Number(req.params.blogId)) {
        blogModel[i].blogPost = blogPost;
        blogModel[i].blogTitle = blogTitle;
        blog = blogModel[i];
        return res.status(200).json({
          message: 'blogUpdated successfully',
          blog
        });
      }
      return res.status(404).json({
        message: 'No blog found!'
      });
    }
  }

};

export default BlogController;
