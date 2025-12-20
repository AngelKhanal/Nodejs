const express = require("express")
const dbSangaConnectHu = require("./database/connection")
const User = require("./models/userModel")
const Blog = require("./models/blog")
const app = express()
const bcrypt = require("bcrypt")

dbSangaConnectHu()
app.use(express.json())  // used to read json data

app.get("/",function(req,res){   // localhost:3000 ma gayo vane hello world aaune ho 
    res.json({
        name:"Home page"
    })
})

app.get("/about",function(req,res){   // localhost:3000 ma gayo vane hello world aaune ho 
    res.json({
        address:"About page address",
        age: 22,
        name: 'angel'
    })
})

app.get("/fetch-users", async function(req,res){
    const data = await User.find()
    res.json({
        data : data  // format is --> variable : k pathaune tyo
    })
})

app.get("/fetch-blog", async function(req,res){
    const data = await Blog.find()
    res.json({
        blog : data  // variable : k pathaune tyo
    })
})

app.post("/register",async function(req,res){
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

    // const{name,email,password} = req.body  --> yesari pani garda hunxa jaslai destructuring vanxa

    console.log(name,email,password)
    await User.create({
        name : name,  // yeslai name matra lekhda hunxa js ma jaba duitai side ma same name xa vane
        email : email,
        // password : password,
        password : bcrypt.hashSync(password,10)  // 10 vaneko salt round ho jati dher hunxa teti round dher hunxa and more secure hunxa but time more lagxa 
    })
    res.json({              
        message : "User registered successfullly!!!"
    })
})

app.post("/create-blog",async function(req,res){
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
})

app.delete("/delete-blog/:id", async function(req,res){
    const id = req.params.id
    await Blog.findByIdAndDelete(id)
    res.json({
        message : "Blog with that id deleted successfully !!"
    })
})

app.delete("/delete-blog",async function(req,res){
    const {id} = req.body
    await Blog.findByIdAndDelete(id)
    res.json({
        message : "Blog with that id deleted successfully !!"
    })
})

app.delete("/delete",async function(req,res){
    const {id} = req.body
    await User.findByIdAndDelete(id)
    res.json({
        message : "User with that id deleted successfully !!"
    })
})

app.delete("/delete/:id",async function(req,res){
    const id = req.params.id
    await User.findByIdAndDelete(id)
    res.json({
        message : "User with that id deleted successfully !!"
    })
})

// app.get("/about",function(req,res){  // localhost:3000/about garyo vane about world aaune ho
//     res.send("About World")
// })

// app.get("/bipin",function(req,res){   // localhost:3000/bipin 
//     res.send("About Bipin")
// })


app.listen(3000,function(){
    console.log("server has started at port 3000")
})


// create and delete operation api for blog having field title , subtitle description 
