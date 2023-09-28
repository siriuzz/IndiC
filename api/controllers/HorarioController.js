const { Horario } = require('../../db/models'); // Importa los modelos necesarios

const getAllHorarios = async (req, res) => {
    try {
        const allHorarios = await Horario.findAll();
        return allHorarios;
    }
    catch (error) {
        console.log("Error al obtener los horarios");
        // return res.status(500).json({ error: error.message });
    }
}

const createHorarioFromCsv = async (element) => {
    try {
        console.log(element);
        const horario = await Horario.create({
            dia: element.dia,
            hora_inicio: element.hora_inicio,
            hora_fin: element.hora_fin
        });
        return horario;
    } catch (error) {
        console.log("Error al crear el horario");
        return { error: error.message };
    }
}

module.exports = {
    getAllHorarios,
    createHorarioFromCsv
}