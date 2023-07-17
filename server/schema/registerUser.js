import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';
const registerSchema = mongoose.Schema({
    email: String,
    password: String,
})
const register = mongoose.model('register', registerSchema);
// autoIncrement.initialize(mongoose.connection);
// userSchema.plugin(autoIncrement.plugin, 'user');
export default register;