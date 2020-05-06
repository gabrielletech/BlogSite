require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const uri = process.env.MONGO_URI;

const app = express();
app.use(cors());
app.use(bodyParser.json());

//connect to database
const connection = mongoose.connection;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
connection.once('open', () => console.log('Connected to MongoDB'));

const blogsRouter = require('./routes/blogs');
app.use('/blogs', blogsRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
