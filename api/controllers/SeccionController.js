const { Secciones } = require('../../db/models'); // Importa los modelos necesarios

const getSecciones = async (req, res) => {
    try {
        const secciones = await Secciones.findAll();
        return res.status(200).json({ secciones });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createSeccionesFromCsv = async (row) => {
    try {
        console.log(row);
        const seccion = await Secciones.create({
            id_asignatura: row.id_asignatura,
            numero: row.numero,
            id_docente: row.id_docente,
            aula: row.aula,
            is_active: true,
            calificacion_base_mt: 40
        });
        return seccion;
    } catch (error) {
        return { error: error.message };
    }
}

module.exports = {
    getSecciones,
    createSeccionesFromCsv
}