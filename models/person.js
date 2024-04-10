const mongoose=require('mongoose');

const PersonSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    age:{
        type:Number,
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        required: true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type: String,
        unique : true,
        required:true
    },
    adress:{
        type:String
    }

});

const Person=mongoose.model("Person",PersonSchema);
module.exports = Person;