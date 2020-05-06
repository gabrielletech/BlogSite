const mongoose = require('mongoose');

const blogsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    post: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    }
});

let Blogs = mongoose.model('Blogs', blogsSchema);
module.exports = Blogs;