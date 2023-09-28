const { Carrera } = require('../../db/models'); // Importa los modelos necesarios

const getCarreraById = async (req, res) => {
    try {
        console.log("Obteniendo carrera por id");
        const carrera = await Carrera.findOne({
            where: {
                id: req.params.id
            }
        });
        return carrera;
    }
    catch (error) {
        console.log("Error al obtener la carrera por id");
        return res.status(500).json({ error: error.message });
    }
}

const createCarreraFromCsv = async (row) => {
    try {
        console.log("Creando carrera");
        const carreraCreated = await Carrera.create(row);
        return carreraCreated;
    } catch (error) {
        console.log("Error al crear la carrera");
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getCarreraById,
    createCarreraFromCsv
}