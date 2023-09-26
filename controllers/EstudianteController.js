const { Estudiante } = require('../models'); // Importa los modelos necesarios
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
        const { correo } = req.body;
        if (correo == null) return res.status(400).json({ error: 'Correo no especificado.' });
        console.log("Obteniendo estudiante por correo");
        const estudiante = await Estudiante.findOne({
            where: {
                correo: correo
            }
        });
        return estudiante;
    }
    catch (error) {
        console.log("Error al obtener el estudiante por correo");
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAllEstudiantes,
    createEstudiante,
    getEstudianteById,
    getEstudianteByCorreo
}