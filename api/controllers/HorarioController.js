const { Horario } = require('../../db/models'); // Importa los modelos necesarios

const getAllHorarios = async (req, res) => {
    try {
        const allHorarios = await Horario.findAll();
        return allHorarios;
    }
    catch (error) {
        console.log("Error al obtener los horarios");
        return res.status(500).json({ error: error.message });
    }
}

const createHorarioFromCsv = async (element) => {
    try {
        const horario = await Horario.create(element);
        return horario;
    } catch (error) {
        return { error: error.message };
    }
}

module.exports = {
    getAllHorarios,
    createHorarioFromCsv
}