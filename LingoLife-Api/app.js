import express from 'express';
import cors from 'cors';
import conn from './db/conn.js' 
import ForumRouter from './routes/Forum.js'

//Db Connection
conn();
const app = express();
app.use(cors()); 
app.use(express.json())

// Routes
app.use("/forum",ForumRouter);

app.listen(5000, function(){
    console.log("Servidor Online!!");
});