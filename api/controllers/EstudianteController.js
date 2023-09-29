const { Estudiante, Carrera } = require('../../db/models'); // Importa los modelos necesarios
const bcrypt = require('bcrypt');

const getAllEstudiantes = async (req, res) => {
    try {
        const allEstudiantes = await Estudiante.findAll();
        return allEstudiantes;
    }
    catch (error) {
        console.log("Error al obtener los estudiantes");
        // return res.status(500).json({ error: error.message });
    }
}

const createEstudiante = async (req, res) => {
    try {
        const password = req.body.password;
        let estudiante;
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, async function (err, hash) {
                req.body.password = hash;
                req.body.salt = salt;
                console.log("Creando estudiante");
                estudiante = await Estudiante.create(req.body);
                return estudiante;
            });
        });
    } catch (error) {
        console.log("Error al crear el estudiante");
        return res.status(500).json({ error: error.message });
    }
}
const getEstudianteById = async (req, res) => {
    try {
        console.log("Obteniendo estudiante por id");
        const estudiante = await Estudiante.findOne({
            where: {
                id: req.params.id
            }
        });
        return estudiante;
    }
    catch (error) {
        console.log("Error al obtener el estudiante por id");
        return res.status(500).json({ error: error.message });
    }
}
const getEstudianteByCorreo = async (req, res) => {
    try {
        console.log(req.body);
        const { correo } = req.body;
        if (correo == null) return res.status(400).json({ error: 'Correo no especificado.' });
        console.log("Obteniendo estudiante por correo");
        const estudiante = await Estudiante.findOne({
            where: {
                correo: correo
            },
            include: [
                {
                    model: Carrera,
                    attributes: ['carrera', 'periodos_totales', 'asignaturas_totales']
                }
            ]
        });
        return estudiante;
    }
    catch (error) {
        console.log("Error al obtener el estudiante por correo");
        return { error: error.message };
    }
}

const createEstudianteFromCsv = async (row) => {
    try {
        console.log(row);
        const password = row.password;
        let estudiante;
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, async function (err, hash) {
                row.password = hash;
                row.salt = salt;
                console.log("Creando estudiante");
                estudiante = await Estudiante.create({
                    nombre: row.nombre,
                    correo: row.correo,
                    telefono: row.telefono,
                    cedula: row.cedula,
                    password: row.password,
                    salt: row.salt,
                    fecha_registro: new Date(),
                    direccion: row.direccion,
                    id_carrera: row.id_carrera,
                    id_estado: row.id_estado,
                    id_rol: 1,
                    periodos_cursados: row.periodos_cursados,
                    asignaturas_aprobadas: row.asignaturas_aprobadas,
                    configuracion: { "config": "config" },
                    indice_general: row.indice_general
                });
                return estudiante;
            });
        });
    } catch (error) {
        console.log("Error al crear el estudiante");
        return { error: error.message };
    }
};

module.exports = {
    getAllEstudiantes,
    createEstudiante,
    getEstudianteById,
    getEstudianteByCorreo,
    createEstudianteFromCsv
}