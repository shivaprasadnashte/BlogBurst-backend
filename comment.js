const express = require('express'); 
const commentRouter = express.Router();
const commentSchema=require('./module/module');


commentRouter.route('/comment').post( async (req, res) => {
    const input = {
        userId: req.body.userId,
        username: req.body.username,
        blogId: req.body.blogId,
        comment: req.body.comment,
    }
   const newComment = new commentSchema.Comment(input);
   await newComment.save()
    .then((rs) => res.json(rs))
    .catch(err => res.status(400).json('Error: ' + err));
})
commentRouter.route('/comment/:id').get(async(req,res)=>{
    const id = req.params.id;
   const comments = await commentSchema.Comment.find({blogId:id});
    res.json(comments);
})
commentRouter.route('/comment/:id').delete(async(req,res)=>{
    const id = req.params.id;
    await commentSchema.Comment.findByIdAndDelete(id)
    .then(() => res.json('Comment deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
})
module.exports = commentRouter;