import express from "express";
import Connection from "./database/db.js";
import dotenv from 'dotenv';
const app = express();
import Routes from "./routes/routes.js";
import cors from 'cors';
import bodyParser from "body-parser";
///////////////////////////////////////////
app.use(cors()); // should be initialsed at the top before app.use();
/////////////////////////////////////////
dotenv.config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username, password);
////////////////////////////////////
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Routes);
///////////////////////////////////

//////////////////////////////////
const Port = process.env.PORT;
app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
})