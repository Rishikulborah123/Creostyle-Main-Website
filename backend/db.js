const mongoose = require('mongoose');
const mongoURL = `mongodb+srv://rishikul:${encodedPassword}@creostyle.abq9b.mongodb.net/?retryWrites=true&w=majority&appName=creostyle`;
const connectToMongo = async () => {
    await mongoose.connect(mongoURL).then(()=> console.log("Connected to Mongo Successfully")).catch(err => console.log(err));
}

module.exports = connectToMongo;