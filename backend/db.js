const mongoose = require('mongoose');
const mongoURL = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/creostyle?readPreference=primary&appname=MongoDB%20Compass&ssl=false';
const connectToMongo = async () => {
    await mongoose.connect(mongoURL).then(()=> console.log("Connected to Mongo Successfully")).catch(err => console.log(err));
}

module.exports = connectToMongo;