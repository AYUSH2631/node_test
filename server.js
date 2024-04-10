
const express=require('express')
const app=express();

const db=require('./db');

//const Person=require( './models/person');

const bodyParser=require('body-parser');
const Person = require('./models/person');
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send("hello");
})

app.get('/about',(req,res)=>{
    res.send("hello guruji");
})

app.get('/search',(req,res)=>{
    res.send("hello Radha rani");
})

app.post('/person',async(req,res)=>{
    try{

        const data=req.body

    const newPerson= new Person(data);

    const response=await newPerson.save();
    console.log('data saved');
    res.status(200).json(response);

    }
    catch(err){
        console.log(error,'Error in saving the person');
       res.status(500).json({error: 'Could not create person'});

    }
    
    
    // newPerson.save((error,savedPerson)=>{
    //     if(error){
    //         
    //     }else{
    //         console.log('person saved');
    //         res.status(200).json(savedPerson);
    //     }
    // })
}) 

app.get('/person',async(req,res)=>{
    try{
        const data=await Person.find();
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "couldn't fetch people"})
    }
})



app.listen(3000,()=>{
    console.log("listen to port 3000");
});