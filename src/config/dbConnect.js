const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(process.env.CONNECTION_STRING, {})
        console.log(`MongoDB Connected: ${conn.connection.host}, ${conn.connection.name}`)
    }catch( err){
        console.log(err)
        process.exit(1)
    }
}

module.exports = dbConnect