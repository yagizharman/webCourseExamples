import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose, { Mongoose } from 'mongoose';

const app=express();
app.use(cors({
    credentials:true,
}))

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server=http.createServer(app);

server.listen(8080,()=>{
    console.log('Server running on http://localhost:8080/');
})

const MONGO_URL='mongodb+srv://yagiz:FsIYm1gMS7RXPlUH@cluster0.54dhnks.mongodb.net/?retryWrites=true&w=majority';

mongoose.Promise=Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error',(error:Error)=> console.log(error))