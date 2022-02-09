const mongoose = require('mongoose');
const db = "mongodb+srv://root:1234@cluster0.ouoo3.mongodb.net/social-dev?retryWrites=true&w=majority";

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true
        });
        console.log('MongoDB Connected!!');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;
