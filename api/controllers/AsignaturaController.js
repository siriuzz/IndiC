const { Asignatura } = require('../../db/models'); // Importa los modelos necesarios

const getAllAsignaturas = async (req, res) => {
    try {
        const allAsignaturas = await Asignatura.findAll();
        return allAsignaturas;
    }
    catch (error) {
        console.log("Error al obtener las asignaturas");
        // return res.status(500).json({ error: error.message });
    }
}

const createAsignaturaFromCsv = async (element) => {
    try {
        console.log(element);
        const asignatura = await Asignatura.create({
            nombre: element.nombre,
            codigo: element.codigo,
            creditos: element.creditos,
            horas: element.horas,
            tipo: element.tipo,
            estado: element.estado,
            id_carrera: element.id_carrera
        });
        return asignatura;
    } catch (error) {
        console.log("Error al crear la asignatura");
        return { error: error.message };
    }
}

module.exports = {
    getAllAsignaturas,
    createAsignaturaFromCsv
}