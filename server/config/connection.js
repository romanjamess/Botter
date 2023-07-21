const mongoose = require("mongoose");

const connectTo = process.env.MONGODB_URI || "mongodb://localhost:27017/pablostacos"; 
console.log("mongo connection is right here =>", connectTo)
mongoose.connect(
    connectTo
);
 module.exports = mongoose.connection;