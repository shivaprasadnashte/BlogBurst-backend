const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
        trim: true,
        maxlength: [20, 'Name cannot be more than 20 characters']
    },
    username: {
        type: String,
        required: [true, 'Please provide an email'],
        trim: true,
        unique: true,
        maxlength: [50, 'Email cannot be more than 50 characters']
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        trim: true,
        minlength: [6, 'Password cannot be less than 6 characters'],
        maxlength: [20, 'Password cannot be more than 20 characters']
    },
  
}, { timestamps: true });

const blogSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: [true, 'Please provide a userId'],
        trim: true,
        // maxlength: [100, 'userId cannot be more than 100 characters']
    },
    // username: {
    //     type: String,
    //     required: [true, 'Please provide a username'],
    //     trim: true,
    //     maxlength: [100, 'username cannot be more than 100 characters']
    // },
    title: {
        type: String,
        required: [true, 'Please provide a title'],
        trim: true,
        maxlength: [100, 'Title cannot be more than 100 characters']
    },
    category: {
        type: String,
        required: [true, 'Please provide a catrgory'],
        trim: true,
        maxlength: [100, 'Catrgory cannot be more than 100 characters']
    },
    body: {
        type: String,
        required: [true, 'Please provide a body'],
        trim: true,
        maxlength: [5000, 'Body cannot be more than 5000 characters']
    },
    author: {
        type: String,
        // required: [true, 'Please provide a author'],
        trim: true,
        maxlength: [100, 'Author cannot be more than 100 characters']
    },
}, { timestamps: true });

const commentSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: [true, 'Please provide a userId'],
        trim: true,
       
    },
    username: {
        type: String,
        required: [true, 'Please provide a username'],
        trim: true,
       
    },
    blogId: {
        type: String,
        required: [true, 'Please provide a blogId'],
        trim: true,
      
    },
    comment: {
        type: String,
        required: [true, 'Please provide a body'],
        trim: true,
        maxlength: [5000, 'Body cannot be more than 5000 characters']
    },
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema);
const Comment = mongoose.model('Comment', commentSchema);
const User = mongoose.model('User', userSchema);
module.exports = { Blog, Comment, User };