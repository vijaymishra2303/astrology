
require("./mongoose")
const { Product, User ,Rashi } = require("./astoSchema");// Importing models
const express = require("express");
const app = express();
const multer = require("multer");
const cors = require("cors");

 

app.use(cors());
app.use(express.json());
app.use(express.static("public"))

// Multer configuration for file upload
const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, "public/uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage:storage }).single("pimage");

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
                    umessage: req.body.umessage,
                    username: req.body.username,
                    unumber:req.body.unumber
                });
                 newUser.save()
                res.send("File Uploaded ")
            
        }
    });
});

app.get("/user",async (req,resp)=>{
    const users=await User.find()
    resp.send(users)
})


const uploadr = multer({ storage: storage }).single("rimage");
app.post("/rashi",async(req,res)=>{
    uploadr(req, res, async(err)=>{
        if(err){
            console.log(err);
        }else{
            const newRashi= new Rashi({
                rid:req.body.rid,
                rname:req.body.rname,
                rdesc:req.body.rdesc,
                rimage: "http://localhost:4000/uploads/" + req.file.filename,

            });
            newRashi.save();
            res.send("File Uploaded")
        }
    })
})
app.get("/rashi",async(req,resp)=>{
    const rashis=await Rashi.find()
    resp.send(rashis)
})

app.listen(4000)