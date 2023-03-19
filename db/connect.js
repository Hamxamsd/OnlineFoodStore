const mongoose = require("mongoose");
require('dotenv').config()

let uri = `mongodb://localhost:27017`
mongoose.set('strictQuery', true);
const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(console.log('connted DB'))
    } catch (err) {
        console.error(err);
    }


};

module.exports = connectDB;