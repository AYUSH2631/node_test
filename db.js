const mongoose= require('mongoose');

const mongoURL='mongodb://127.0.0.1:27017/test';

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true

})

const db=mongoose.connection;

db.on('connected',()=>{
    console.log("connected to db");
})

db.on('error',()=>{
    console.log("connected to error");
})

db.on('disconnected',()=>{
    console.log("disconnected to db");
})


module.exports=db;