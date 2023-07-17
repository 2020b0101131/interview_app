import mongoose from 'mongoose';
const Connection = async(username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.3e1nmap.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log("Database is connected successfully")
    } catch (error) {
        console.log(`Error while connecting with mongoose ${error}`);
    }
}
export default Connection;