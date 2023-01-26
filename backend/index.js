const cors=require("cors")
const express=require("express")
const dotenv=require("dotenv")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")

dotenv.config()

const {Schema}=mongoose
const userSchema=new Schema(
    {
        imgUrl:{type:String},
        description:{type:String},
        title:{type:String},
        price:{type:String}
    },
    {timestamps:true}
)
const Users=mongoose.model("users",userSchema)


const app=express()

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("<h1>Admin panel</h1>")
  })


//get all users
app.get("/users",(req,res)=>{
    Users.find({},(err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            res.status(404).json({message:err})
        }
    })
})


//get users by id
app.get("/users/:id",(req,res)=>{
    const{id}=req.params
    Users.findById(id,(err,doc)=>{
        if(!err){
            res.send(doc)
        }else{
            res.status(500).json({message:err})
        }
    })
})

//delete users by id
app.delete("/users/:id",(req,res)=>{
    const{id}=req.params
    Users.findByIdAndDelete(id,(err)=>{
        if(!err){
            res.send("Delete data")
        }else{
            res.status(404).json({message:err})
        }
    })
})

app.post("/users",(req,res)=>{
    const user=new Users({
        imgUrl:req.body.imgUrl,
        description:req.body.description,
        title:req.body.title,
        price:req.body.price,
    })
    user.save()
    res.send({message:"create data"})
})


const PORT=process.env.PORT
const url=process.env.CONNECTION_URL.replace("<password>",process.env.PASSWORD)
mongoose.set('strictQuery', true);
mongoose.connect(url,(err)=>{
    if(!err){
        console.log("DB connect");
        app.listen(PORT, () => {
            console.log("Server start")
          })
    }
})