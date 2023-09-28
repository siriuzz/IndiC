const { Docente } = require('../../db/models'); // Importa los modelos necesarios

const getAllDocentes = async (req, res) => {
    try {
        const allDocentes = await Docente.findAll();
        return allDocentes;
    }
    catch (error) {
        console.log("Error al obtener los docentes");
        return res.status(500).json({ error: error.message });
    }
}

const getDocenteById = async (req, res) => {
    try {
        console.log("Obteniendo docente por id");
        const docente = await Docente.findOne({
            where: {
                id: req.params.id
            }
        });
        return docente;
    }
    catch (error) {
        console.log("Error al obtener el docente por id");
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
getAllDocentes,
getDocenteById
}