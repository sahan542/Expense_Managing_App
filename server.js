const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const colors = require("colors");
const dotenv = require('dotenv');
const connectDb =require("./config/connectDb");


//config dot env file
dotenv.config();

//database call
connectDb();

//rest object
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//routes
app.use('/api/v1/users', require('./routes/userRoute'));

//port
const PORT = 8080 || process.env.PORT;

//listing server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

});