const express = require("express")
const app = express()

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

// app.get("/about",function(req,res){  // localhost:3000/about garyo vane about world aaune ho
//     res.send("About World")
// })

// app.get("/bipin",function(req,res){   // localhost:3000/bipin 
//     res.send("About Bipin")
// })


app.listen(3000,function(){
    console.log("server has started at port 3000")
})