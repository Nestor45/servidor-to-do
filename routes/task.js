//rutas para las tareas

const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const TASKCONTROLLER = require('../controllers/taskController');
// api/task y se de tipo post

ROUTER.post('/', TASKCONTROLLER.crearTask);
ROUTER.get('/', TASKCONTROLLER.obtenerTasks);
ROUTER.put('/:id', TASKCONTROLLER.actulizarTask);
ROUTER.get('/:id', TASKCONTROLLER.obtenerTask);
ROUTER.delete('/:id', TASKCONTROLLER.eliminarTask);
module.exports = ROUTER