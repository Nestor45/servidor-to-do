const Task = require('../models/task')
exports.crearTask = async (req, res) => {
    console.log(req.body);
    try {
        let task;
        //creamos la tarea

        task = new Task(req.body);

        await task.save();
        res.send(task);

    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks)
        
        
        //console.log("algo",tasks.entries())
    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actulizarTask = async (req, res) => {
    try {
        console.log("dentro de actilizar")
        const {name,description,category,status} = req.body;
        let task = await Task.findById(req.params.id);

        if (!task) {
            res.status(404).json({msg: "No existe las tarea"})
        }

        task.name=name;
        task.description=description;
        task.category=category;
        task.status=status;


        task = await Task.findOneAndUpdate({_id:req.params.id},task,{new:true});

        res.json(task);

    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error');
    }
}


exports.obtenerTask = async (req, res) => {
    try {
        console.log("dentro de obtener tarea")
        let task = await Task.findById(req.params.id);

        if (!task) {
            res.status(404).json({msg: "No existe las tarea"})
        }
        res.json(task);

    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarTask = async (req, res) => {
    try {
        console.log("dentro de Eliminar tarea")
        let task = await Task.findById(req.params.id);

        if (!task) {
            res.status(404).json({msg: "No existe las tarea"})
        }
        await Task.findByIdAndRemove({ _id: req.params.id });
        res.json({msg:"Tarea Eliminada con existo"});

    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error');
    }
}