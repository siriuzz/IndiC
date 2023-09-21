const { Estudiante } = require('../models'); // Importa los modelos necesarios

const getAllEstudiantes = async (req, res) => {
    try {
        const allEstudiantes = await Estudiante.findAll({
            // include: [
            //     {
            //         model: estado,
            //         attributes: ['estado_id']
            //     },
            //     {
            //         model: roles,
            //         attributes: ['rol_id']
            //     },
            //     {
            //         model: carrera,
            //         attributes: ['carrera_id']
            //     }
            // ]
        });
        return allEstudiantes;
    } catch (error) {
        console.log("Error al obtener los estudiantes");
        return res.status(500).json({ error: error.message });
    }
}

const createEstudiante = async (req, res) => {
    try {
        const estudiante = await Estudiante.create(req.body);
        return estudiante;
    } catch (error) {
        console.log("Error al crear el estudiante");
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAllEstudiantes,
    createEstudiante
}