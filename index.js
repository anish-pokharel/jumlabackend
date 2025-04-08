const express = require('express');
const app = express();
const connectdb = require('./db');
const cors = require('cors');

// const path = require('path'); 
const contact= require('./routes/contactRoutes')
const notice= require('./routes/NoticeRoutes')
const team= require('./routes/teamRoute')
const population= require('./routes/populationRoutes')


app.use(express.json());
app.use(cors());
app.use(contact);
app.use(notice);
app.use(team);
app.use(population);

app.listen(3200,()=>{
    console.log('LocalHost is connected');
})