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



const userSchema = mongoose.Schema({

    username: String,
    unumber:Number,
    umessage:String
});


const rashiSchema =mongoose.Schema({
     rid:Number,
     rname:String,
     rdesc:String,
     rimage:String


    
})
const Product = mongoose.model("Product", productSchema);
const User = mongoose.model("User", userSchema);
const Rashi =mongoose.model("Rashi", rashiSchema )

module.exports = { Product, User ,Rashi };
