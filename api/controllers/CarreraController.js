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

module.exports = {
    getCarreraById
}