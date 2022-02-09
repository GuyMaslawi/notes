const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

//Connect DB
connectDB();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

//Define Routes
app.use('/notes', require('./routes/notes'));
app.use('/users', require('./routes/users'));
app.use('/auth', require('./routes/auth'));
app.use('/profile', require('./routes/profile'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
