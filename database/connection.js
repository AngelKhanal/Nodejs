const mongoose = require("mongoose")

async function dbSangaConnectHu(){
    await mongoose.connect("mongodb+srv://angel:easy@cluster0.tasznha.mongodb.net/?appName=Cluster0")
    console.log("DB connected successfully !!!")
}

module.exports = dbSangaConnectHu