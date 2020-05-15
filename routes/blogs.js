const express = require('express');
const router = express.Router();
const Blogs = require('../models/blogs.model');

//get all blogs
router.get('/', (req, res) => {
    Blogs.find()
    .then(blog => res.json(blog))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

//find by id 
router.get('/:id', (req, res) => {
    Blogs.findById(req.params.id)
    .then(blog => res.json(blog))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

//add new blog
router.post('/add', (req, res) => {
    const newBlog = new Blogs({
        title: req.body.title,
        post: req.body.post,
        author: req.body.author
    })
    newBlog.save().then(() => res.json('Blog Added Successfully'))
                  .catch(err => res.status(400).json(`Error: ${err}`));
});

//find by id and update
router.put('/update/:id', (req, res) => {
    Blogs.findById(req.params.id)
    .then(blog => {
        blog.title = req.body.title;
        blog.post = req.body.post;
        blog.author = req.body.author;

        blog
            .save()
            .then(() => res.json('Blog Updated Succesfully')
            .catch(err => res.status(400).json(`Error: ${err}`)));
    })
    .catch(err => res.status(400).json(`Error: ${err}`));
});

//delete by id 
router.delete('/:id', (req, res) => {
    Blogs.findByIdAndDelete(req.params.id)
    .then(() => res.json('Blog Deleted'))
    .catch(err => res.status(400).json(`Error: ${err}`))
});

module.exports = router;