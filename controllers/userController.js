const bcrypt = require("bcrypt")
const User = require("../models/userModel")

 function homePage(req,res){
    res.json({
        name : "home page"
    })
}

 function aboutPage(req,res){
    res.json({
        address : "About page address",
        age: 22,
        name: 'angel'
    })
}

 async function fetchUsers(req,res){
    const data = await User.find()
    res.json({
        data : data  // format is --> variable : k pathaune tyo
})
}

 async function register(req,res){
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
}

 async function fetchUserId(req,res){
    const id = req.params.id
    const data = await User.findById(id).select(["-password","-__v"])  // yah select le password show gardaina ra -__v pani
    res.json({
        data
    })
}

 async function updateUserId(req,res){
    const id = req.params.id
    const {name,email,password} = req.body
    const data = await User.findByIdAndUpdate(id,{name,email,password:bcrypt.hashSync(password,10)}).select("-__v")
    res.json({
        data
    })
}

 async function deleteUserId(req,res){
    const id = req.params.id
    await User.findByIdAndDelete(id)
    res.json({
        message : "User with that id deleted successfully !!"
    })
}

 async function deleteUser(req,res){
    const {id} = req.body
    await User.findByIdAndDelete(id)
    res.json({
        message : "User with that id deleted successfully !!"
    })
}

module.exports = {homePage,aboutPage,register,fetchUserId,fetchUsers,updateUserId,deleteUser,deleteUserId}

