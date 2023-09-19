const { Estudiante } = require('../models'); // Importa los modelos necesarios

const getAllEstudiantes = async (req, res) => {
    try {
        const allEstudiantes = await Estudiante.findAll({
            // include: [
            //     {
            //         model: estado,
            //         attributes: ['estado']
            //     },
            //     {
            //         model: roles,
            //         attributes: ['rol']
            //     },
            //     {
            //         model: carrera,
            //         attributes: ['carrera']
            //     }
            // ]
        });
        return allEstudiantes;
    } catch (error) {
        console.log("Error al obtener los estudiantes");
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAllEstudiantes
}