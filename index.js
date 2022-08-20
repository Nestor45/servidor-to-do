console.log("servidor");

const EXPRESS = require('express');
const DB = require('./config/db');
const cors = require("cors");
//Creamor el servidor 
const APP = EXPRESS();

//Conectamos a la base de datos
DB();
APP.use(cors());

APP.use(EXPRESS.json());
APP.use('/api/task', require('./routes/task'));

APP.listen(4000, () => {
    console.log("El servidor esta corriendo");
})