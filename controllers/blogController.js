const Blog = require("../models/blog")

 async function fetchBlog(req,res){
    const data = await Blog.find()
    res.json({
        blog : data  // variable : k pathaune tyo
    })
}

 async function fetchBlogId(req,res){
    const id = req.params.id
    const data = await Blog.findById(id).select("-__v")
    res.json({
        blog : data  // variable : k pathaune tyo
    })
}

 async function createBlog(req,res){
    const {title,subtitle,description} = req.body
    console.log(title,subtitle,description)
    await Blog.create({
        title,
        subtitle,
        description
    })
    res.json({
        message : "Blog created successfully!!!"
    })
}

 async function updateBlogId(req,res){
    const id = req.params.id
    const {title,subtitle,description} = req.body
    const data = await Blog.findByIdAndUpdate(id,{title,subtitle,description}).select("-__v")
    res.json({
        data
    })
}

 async function deleteBlogId(req,res){
    const id = req.params.id
    await Blog.findByIdAndDelete(id)
    res.json({
        message : "Blog with that id deleted successfully !!"
    })
}

 async function deleteBlog(req,res){
    const {id} = req.body
    await Blog.findByIdAndDelete(id)
    res.json({
        message : "Blog with that id deleted successfully !!"
    })
}

module.exports = {fetchBlog,fetchBlogId,createBlog,updateBlogId,deleteBlog,deleteBlogId}