const { Docente } = require('../../db/models'); // Importa los modelos necesarios
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

const createDocenteFromCsv = async (res, element) => {
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
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllDocentes,
    getDocenteById,
    createDocenteFromCsv
}