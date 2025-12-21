const mongoose = require("mongoose")


async function dbSangaConnectHu(){
    await mongoose.connect(process.env.connection_string) //process.env jata pani use garne ho
    console.log("DB connected successfully !!!")
}

module.exports = dbSangaConnectHu