const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
//Import Routes
const authRoute = require('./routes/auth');
const dashboardRoute = require('./routes/dashboard')

dotenv.config();
//Connect to DB
mongoose.connect(process.env.DB_CONNECT)
.then(() => {
    console.log('database is connected!!')
}).catch((err) => {
  console.log( err)
})

//Middlewares
app.use(express.json());


//Route Middlewares
app.use('/api/user', authRoute);
app.use('/dashboard', dashboardRoute);


app.listen(4000, () => console.log('Server Up and Running'));