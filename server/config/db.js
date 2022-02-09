const mongoose = require('mongoose');
const config = require('config');
// const db = config('mongo_uri');
const uri = "mongodb+srv://root:1234@cluster0.ouoo3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true
        });
        console.log('MongoDB Connected!!');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;
