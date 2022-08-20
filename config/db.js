const MONGOOSE = require('mongoose');
require('dotenv').config({ path: 'var.env' });

const DB = async () => {
    try {
        const URI = process.env.DB_MONGO;
        console.log(URI)
        await MONGOOSE.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("base de datos conectada")
    } catch (error) {
        console.error(error);
        process.exit(1);
    }

}
module.exports = DB