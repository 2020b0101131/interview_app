import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';
const userSchema = mongoose.Schema({
    _id: String,
    name: String,
    username: String,
    email: String,
    phone: String,
})
const add_users = mongoose.model('add_users', userSchema);
// autoIncrement.initialize(mongoose.connection);
// userSchema.plugin(autoIncrement.plugin, 'user');
export default add_users;