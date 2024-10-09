import mongoose from "mongoose";
const ConnectDB= async()=>{
    await mongoose.connect(process.env.MONGO_URL,{
        dbName:"CERTIFICATE_MAKER"}).then(()=>{
            console.log("database connected succesfully")
        })
        .catch((err)=>{
            console.log(err);
        })
}
export default ConnectDB;