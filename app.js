const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const connectDB = require('./db/db')
const userRouters = require('./routes/userRoutes')
const cookieParser = require('cookie-parser');

dotenv.config();
connectDB()

const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());


app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
  next(); 
});

app.get('/', (req, res) => {
  try {
    res.send('Hello World');
  } catch (err) {
    next(err); // Add try-catch block to handle errors
  }
});

app.use('/user' , userRouters)

module.exports = app;