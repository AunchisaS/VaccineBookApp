import mongoose from "mongoose";

let isConnect = false
export const dbConnect = async() =>{
    mongoose.set('strictQuery',true)
    if (isConnect) return

    const MONGO_URI = process.env.MONGO_URI
    if (!MONGO_URI) throw new Error("Please define MONGO_URI")

    try{
        await mongoose.connect(MONGO_URI,{bufferCommands:false})
        isConnect = true
        console.log("MONGO_DB is connected...")
    }catch(err){
        console.log(err)
    }

    return
}