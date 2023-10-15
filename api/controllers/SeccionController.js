const { Secciones, Estudiante_Seccion, Asignatura, Docente, Horario } = require('../../db/models'); // Importa los modelos necesarios
const { Op } = require('sequelize');

const getAllSecciones = async (req, res) => {
    try {
        const secciones = await Secciones.findAll();
        return res.status(200).json({ secciones });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getEstudiantes = async (req, res) => {
    try {
        const { id } = req.params;
        const seccion = await Secciones.findOne({
            where: { id: id }
        });
        if (seccion) {
            const estudiantes = await Estudiante_Seccion.findAll({
                where: { id_seccion: id }
            });
            return estudiantes;
        }
        return 'Seccion with the specified ID does not exists';
    } catch (error) {
        return error.message;
    }
}

const getSeccionById = async (req, res) => {
    try {
        const { id } = req.params;
        const seccion = await Secciones.findOne({
            where: { id: id }
        });
        if (seccion) {
            return res.status(200).json({ seccion });
        }
        return res.status(404).send('Seccion with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getSeleccion = async (req, res) => {
    try {
        const { id } = req.params;
        const seccionesTomadas = await Estudiante_Seccion.findAll({
            where: { id_estudiante: id }
        });

        const seccionesTomadasIds = seccionesTomadas.map((seccion) => seccion.id_seccion);
        // console.log(seccionesTomadasIds);

        const seccion = await Secciones.findAll({
            where: {
                id: {
                    [Op.notIn]: seccionesTomadasIds
                },
                is_active: 1
            },
            include: [{
                model: Asignatura,
                attributes: ['nombre', 'codigo']
            }, {
                model: Docente,
                attributes: ['nombre']
            }, {
                model: Horario,
                attributes: ['dia', 'hora_inicio', 'hora_fin']
            }]
        }).catch((error) => {
            console.log(error);
        });
        if (seccion) {
            return seccion;
        }
        return 'Seccion with the specified ID does not exists';
    } catch (error) {
        return error.message;
    }
}

const updateSeccion = async (req, res) => {
    try {
        const seccion = await Secciones.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        return seccion;
    } catch (error) {
        return res.status(500).json({ error: error.message });
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
    getAllSecciones,
    createSeccionesFromCsv,
    getSeccionById,
    getSeleccion,
    updateSeccion,
    getEstudiantes
}