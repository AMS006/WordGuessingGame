const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    prn:{
        type:String,
        required:true,
        unique:true
    },
    year:{
        type:Number,
        required:true,
    },
    level:{
        type:Number,
        required:true,
        default:1
    },
    password:{
        type:String,
        required:true
    }
})

userSchema.pre("save", async function (next) {
    if (!this.isModified) {
      next();
    }
  
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  });

module.exports = mongoose.model('users',userSchema)