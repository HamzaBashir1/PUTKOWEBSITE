import Blog from '../models/Blog.js';

// Create a new blog post
export const createBlog = async (req, res) => {
  try {
    const { title, content, author, categories, tags, image, summary, blogType } = req.body;
    const blog = new Blog({ title, content, author, categories, tags, image, summary, blogType });
    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    res.status(400).json({ error: 'Error creating blog post' });
  }
};

// Get all blog posts
export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(400).json({ error: 'Error fetching blogs' });
  }
};

// Get a single blog post by ID
export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ error: 'Error fetching blog' });
  }
};

// Delete a blog post by ID
export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });
    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Error deleting blog' });
  }
};

// Edit an existing blog post
export const editBlog = async (req, res) => {
    try {
      const { title, content, author, categories, tags, image, summary, blogType } = req.body;
      const blog = await Blog.findByIdAndUpdate(
        req.params.id, 
        { title, content, author, categories, tags, image, summary, blogType }, 
        { new: true } // Return the updated blog
      );
      
      if (!blog) return res.status(404).json({ error: 'Blog not found' });
      res.status(200).json(blog);
    } catch (error) {
      res.status(400).json({ error: 'Error updating blog post' });
    }
  };
  
  // Search blog posts by query (title, content, etc.)
  export const searchBlogs = async (req, res) => {
    try {
      const { query, searchBy } = req.query;
      let searchCriteria = {};
  
      // Define search options based on what the user wants to search
      if (searchBy === "title") {
        searchCriteria = { title: { $regex: query, $options: "i" } };
      } else if (searchBy === "content") {
        searchCriteria = { content: { $regex: query, $options: "i" } };
      } else if (searchBy === "categories") {
        searchCriteria = { categories: { $regex: query, $options: "i" } };
      } else if (searchBy === "tags") {
        searchCriteria = { tags: { $regex: query, $options: "i" } };
      } else {
        // If no specific search field is given, search across title, content, and categories by default
        searchCriteria = {
          $or: [
            { title: { $regex: query, $options: "i" } },
            { content: { $regex: query, $options: "i" } },
            { categories: { $regex: query, $options: "i" } }
          ]
        };
      }
  
      // Fetch and sort results
      const blogs = await Blog.find(searchCriteria).sort({ createdAt: -1 });
      res.status(200).json(blogs);
    } catch (error) {
      res.status(400).json({ error: 'Error fetching search results' });
    }
  };
  