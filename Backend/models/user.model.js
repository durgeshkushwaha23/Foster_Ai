import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    email:{
        type: 'string',
        unique: true,
        required: true,
        trime: true,
    },
    password: {
        type: 'string',
        required: true,
        minlength: 8,
        maxlength: 128,
        select: false // This means that this field will not be returned when we fetch a user document.
    }

})

userSchema.statics.hashpassword = async function (password) {
    return await bcrypt.hash(password, 10);
  };

userSchema.methods.isvalidPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateJWT = function () {
    return jwt.sign({ email: this.email }, process.env.JWT_SECRET, { expiresIn: '24h' });
}


const user = mongoose.model('User', userSchema);
export default user;