const mongoose = require("mongoose")

const schema = mongoose.Schema  // mongoose.schema class lai schema ma store gareko 

const userSchema = new schema({
  name : String,
  email : String,
  password : String
})

const User = mongoose.model("User",userSchema)
module.exports = User