const { Estudiante } = require('../models'); // Importa los modelos necesarios

const getAllEstudiantes = async (req, res) => {
    try {
        const allEstudiantes = await Estudiante.findAll();
        return allEstudiantes;
    }
    catch (error) {
        console.log("Error al obtener los estudiantes");
        // return res.status(500).json({ error: error.message });
    }
}
const getEstudianteById = async (req, res) => {
    try {
        console.log("Obteniendo estudiante por id");
        const estudiante = await Estudiante.findOne({
            where: {
                id: req.params.id
            }
        });
        return estudiante;
    }
    catch (error) {
        console.log("Error al obtener el estudiante por id");
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
    createEstudiante,
    getEstudianteById
}