const mongoose = require('mongoose');
// const errorLogger = require('../app/Config/logging');

const mongo_connection_string = process.env.CONNECTION_STRING;
mongoose.connection.once('open', () => {
    console.log("MongoDB Connection");
});

mongoose.connection.on('error', (err) => {
    console.log('Mongodb Error');
   // errorLogger.error("Db is not Connect");
});

async function mongoConnect(){
    await mongoose.connect(mongo_connection_string).then(() => {
    }).catch(error => {
        console.log(error);
    })
}
module.exports = {
    mongoConnect
}