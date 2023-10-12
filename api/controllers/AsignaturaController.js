const { Asignatura, Secciones } = require('../../db/models'); // Importa los modelos necesarios

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

const getAsignaturaById = async (req, res) => {
    try {
        const { id } = req.params;
        const asignatura = await Asignatura.findOne({
            where: { id: id }
        });
        if (asignatura) {
            return asignatura;
        }
        return res.status(404).send('Asignatura with the specified ID does not exists');
    } catch (error) {
        console.log("Error al obtener la asignatura");
        // return res.status(500).send(error.message);
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

const updateAsignatura = async (req, res) => {
    try {
        const asignatura = await Asignatura.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        return asignatura;
    } catch (error) {
        console.log("Error al actualizar la asignatura");
        return res.status(500).json({ error: error.message });
    }
}

const desactivarAsignatura = async (req, res) => {
    try {
        const secciones = await Secciones.update({ is_active: 0 }, {
            where: {
                id_asignatura: req.params.id
            }
        });
        return secciones;
    } catch (error) {
        console.log("Error al desactivar la asignatura");
        return res.status(500).json({ error: error.message });
    }
}

const activarAsignatura = async (req, res) => {
    try {
        const secciones = await Secciones.update({ is_active: 1 }, {
            where: {
                id_asignatura: req.params.id
            }
        });
        return secciones;
    } catch (error) {
        console.log("Error al activar la asignatura");
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAllAsignaturas,
    createAsignaturaFromCsv,
    updateAsignatura,
    desactivarAsignatura,
    getAsignaturaById,
    activarAsignatura
}