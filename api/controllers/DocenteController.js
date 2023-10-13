const { Docente, Secciones, Asignatura } = require('../../db/models'); // Importa los modelos necesarios
const bcrypt = require('bcrypt');

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

const getDocenteByCorreo = async (req, res) => {
    try {
        console.log(req.body);
        const { correo } = req.body;
        if (correo == null) return res.status(400).json({ error: 'Correo no especificado.' });
        console.log("Obteniendo docente por correo");
        const docente = await Docente.findOne({
            where: {
                correo: correo
            }
        });
        return docente;
    }
    catch (error) {
        console.log("Error al obtener el docente por correo");
        return res.status(500).json({ error: error.message });
    }
}

const getSeccionesDocenteById = async (id) => {
    try {
        console.log("Obteniendo secciones por id de docente");
        const secciones = await Secciones.findAll({
            where: {
                id_docente: id
            },
            include: [
                {
                    model: Asignatura,
                    attributes: ['nombre']
                },
            ]
        });
        return secciones;
    }
    catch (error) {
        console.log("Error al obtener las secciones por id de docente");
        return { error: error.message };
    }
}

const createDocenteFromCsv = async (element) => {
    try {
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(element.password, salt, async function (err, hash) {
                console.log("Creando docente");
                const docente = await Docente.create({
                    nombre: element.nombre,
                    correo: element.correo,
                    telefono: element.telefono,
                    cedula: element.cedula,
                    password: hash,
                    salt: salt,
                    fecha_registro: new Date(),
                    direccion: element.direccion,
                    id_estado: 1,
                    id_rol: 2,
                    configuracion: JSON.stringify({
                        "config": "config"
                    })
                });
                return docente;
            });
        });
    } catch (error) {
        return { error: error.message };
    }
}

const updateDocente = async (req, res) => {
    try {
        console.log("Actualizando docente");
        const docente = await Docente.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        return docente;
    }
    catch (error) {
        console.log("Error al actualizar el docente");
        return res.status(500).json({ error: error.message });
    }
}

const desactivarDocente = async (req, res) => {
    try {
        console.log("Desactivando docente");
        const docente = await Docente.update({ id_estado: 2 }, {
            where: {
                id: req.params.id
            }
        });
        return docente;
    }
    catch (error) {
        console.log("Error al desactivar el docente");
        return res.status(500).json({ error: error.message });
    }
}

const activarDocente = async (req, res) => {
    try {
        console.log("Activando docente");
        const docente = await Docente.update({ id_estado: 1 }, {
            where: {
                id: req.params.id
            }
        });
        return docente;
    }
    catch (error) {
        console.log("Error al activar el docente");
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAllDocentes,
    getDocenteById,
    createDocenteFromCsv,
    getDocenteByCorreo,
    getSeccionesDocenteById,
    updateDocente,
    desactivarDocente,
    activarDocente
}