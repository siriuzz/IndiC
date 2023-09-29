const { Estudiante_Seccion } = require('../../db/models'); // Importa los modelos necesarios
const estudiante = require('../../db/models/estudiante');

const getEstudianteSeccion = async (req, res) => {
    try {
        const estudianteSeccion = await Estudiante_Seccion.findAll();
        return res.status(200).json({ estudianteSeccion });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createEstudianteSeccionFromCsv = async (row) => {
    try {
        const estudianteSeccion = await Estudiante_Seccion.create(row);
        return estudianteSeccion;
    } catch (error) {
        return { error: error.message };
    }
}

module.exports = {
    getEstudianteSeccion,
    createEstudianteSeccionFromCsv
}
