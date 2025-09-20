import express from 'express';
import cors from 'cors';
import 'dotenv/config.js';
import controller from './Controller/index.js';
const app=express();
const PORT=process.env.PORT;
app.use(express.json())
app.use(cors())
app.use(controller);
app.listen(PORT,()=>{
    console.log(`App is running at the ${PORT}`)
})
