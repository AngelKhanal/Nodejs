const express = require("express")
const dbSangaConnectHu = require("./database/connection")
const User = require("./models/userModel")
const Blog = require("./models/blog")
const app = express()
const bcrypt = require("bcrypt")
const { homePage, fetchUsers, aboutPage, register, fetchUserId, updateUserId, deleteUser, deleteUserId} = require("./controllers/userController")
const { fetchBlog, fetchBlogId, createBlog, updateBlogId, deleteBlogId, deleteBlog } = require("./controllers/blogController")

const jwt = require("jsonwebtoken")
require("dotenv").config()

dbSangaConnectHu()
app.use(express.json())  // used to read json data

// app.get("/",function(req,res){   // localhost:3000 ma gayo vane hello world aaune ho 
//     res.json({
//         name:"Home page"
//     })
// })


// app.get("/about",function(req,res){   // localhost:3000 ma gayo vane hello world aaune ho 
//     res.json({
    //         address:"About page address",
    //         age: 22,
    //         name: 'angel'
    //     })
    // })
    
    // app.get("/fetch-users", async function(req,res){
        //     const data = await User.find()
        //     res.json({
            //         data : data  // format is --> variable : k pathaune tyo
            //     })
            // })
            
app.get("/",homePage)

app.get("/fetch-users",fetchUsers)

app.get("/about",aboutPage)

app.get("/fetch-blog", fetchBlog)

app.get("/fetch-blog/:id", fetchBlogId)

app.post("/register",register)

app.get("/fetch-users/:id",fetchUserId)

app.post("/create-blog",createBlog)

app.patch("/update-users/:id",updateUserId)

app.patch("/update-blog/:id",updateBlogId)

app.delete("/delete-blog/:id", deleteBlogId)

app.delete("/delete-blog",deleteBlog)

app.delete("/delete",deleteUser)

app.delete("/delete/:id",deleteUserId)

// app.get("/about",function(req,res){  // localhost:3000/about garyo vane about world aaune ho
//     res.send("About World")
// })

// app.get("/bipin",function(req,res){   // localhost:3000/bipin 
//     res.send("About Bipin")
// })


app.listen(3000,function(){
    console.log("server has started at port 3000")
})


// Login or authentication


app.post("/login", async function(req,res){
    const email = req.body.email
    const password = req.body.password
    const data = await User.findOne({email:email})
    if(!data){
        res.json({
            message : "Not registered!!"
        })
    }
    else{
        const isMatched = bcrypt.compareSync(password,data.password)
        if(isMatched){
            const token = jwt.sign({name:"angel"},process.env.jwt_secret,{  // name is hidden and for id to hide id:data_id lekhne
                expiresIn : "1d"
            })
            res.json({
                message : "Logged In successfull!",
                token : token
            })
        }
        else{
            res.json({
                message : "Invalid password"
            })
        }
    }
})  
