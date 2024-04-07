
require("./mongoose")
const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");
const { Product, User } = require("./astoSchema"); // Importing models

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Multer configuration for file upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage }).single("pimage");

// POST method for creating a new product
app.post("/product", async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            console.log(err);
           
        } else {
                const newProduct = new  Product({
                    pid: req.body.pid,
                    pname: req.body.pname,
                    pdesc:req.body.pdesc,
                    pimage: "http://localhost:4000/uploads/" + req.file.filename
                });
                 newProduct.save();
                res.send("File Uploaded")
            
        }
    });
});


app.get("/product",async (req,resp)=>{
        const products=await Product.find()
        resp.send(products)
    })




//user collection
app.post("/user", async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            console.log(err);
           
        } else {
                const newUser = new User({
                    uid: req.body.uid,
                    username: req.body.username,
                    email:req.body.email
                });
                 newUser.save()
                res.send("File Uploaded")
            
        }
    });
});



app.get("/user",async (req,resp)=>{
    const users=await User.find()
    resp.send(users)
})




app.listen(4000)