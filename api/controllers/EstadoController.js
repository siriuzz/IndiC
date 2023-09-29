const { Estado } = require('../../db/models'); // Importa los modelos necesarios

const getAllEstados = async (req, res) => {
    try {
        const allEstados = await Estado.findAll();
        return allEstados;
    }
    catch (error) {
        console.log("Error al obtener los estados");
        return res.status(500).json({ error: error.message });
    }
}

const createEstado = async (req, res) => {
    try {
        console.log("Creando estado");
        const estado = await Estado.create(req.body);
        return estado;
    } catch (error) {
        console.log("Error al crear el estado");
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAllEstados,
    createEstado
}