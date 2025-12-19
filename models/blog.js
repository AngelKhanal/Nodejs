const mongoose = require("mongoose")

const schema = mongoose.Schema  // mongoose.schema class lai schema ma store gareko 

const blogSchema = new schema({
    title : String,
    subtitle : String,
    description : String
})

const Blog = mongoose.model("Blog", blogSchema)
module.exports = Blog