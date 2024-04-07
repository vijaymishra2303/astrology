// const mongoose=require("mongoose")
// const astoSchema=mongoose.Schema({
//     pid:Number,
//     pname:String,
//     pimage:String
// })
// module.exports=mongoose.model("product",astoSchema)



const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    pid: Number,
    pname: String,
    pdesc:String,
    pimage: String
});

const rashiSchema =mongoose.Schema({
    
})

const userSchema = mongoose.Schema({
    uid: Number,
    username: String,
    email: String
});

const Product = mongoose.model("Product", productSchema);
const User = mongoose.model("User", userSchema);

module.exports = { Product, User };
