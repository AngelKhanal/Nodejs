const express = require("express")
const dbSangaConnectHu = require("./database/connection")
const User = require("./models/userModel")
const Blog = require("./models/blog")
const app = express()

dbSangaConnectHu()

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
        data : data  // variable : k pathaune tyo
    })
})

app.get("/fetch-blog", async function(req,res){
    const data = await Blog.find()
    res.json({
        blog : data  // variable : k pathaune tyo
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




// mongodb+srv://angel:<db_password>@cluster0.tasznha.mongodb.net/?appName=Cluster0