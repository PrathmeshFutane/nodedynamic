
const mongoose = require("mongoose");

const validator = require("validator");

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email id");
            }
        }
    },
    number:{
        type:String,
        required:true,
         min:10
    },
    message:{
        type:String,
        required:true,
        minLength:3
    
    },
    date:{
        type:Date,
        default:Date.now
    }
});

// we need to create a collection

// user name should be in capital format
const User = mongoose.model("User", userSchema);
module.exports = User;