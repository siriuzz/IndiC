const { Admin } = require('../../db/models'); // Importa los modelos necesarios
const bcrypt = require('bcrypt');

const getAllAdmins = async (req, res) => {
    try {
        const allAdmin = await Admin.findAll();
        return allAdmin;
    }
    catch (error) {
        console.log("Error al obtener los Admin");
        return res.status(500).json({ error: error.message });
    }
}

const getAdminById = async (req, res) => {
    try {
        console.log("Obteniendo estudiante por id");
        const admin = await Admin.findOne({
            where: {
                id: req.params.id
            }
        });
        return admin;
    }
    catch (error) {
        console.log("Error al obtener el administrador por id");
        return res.status(500).json({ error: error.message });
    }
}

const getAdminByCorreo = async (req, res) => {
    try {
        console.log("Obteniendo administrador por correo");
        const admin = await Admin.findOne({
            where: {
                correo: req.body.correo
            }
        });
        return admin;
    } catch (error) {
        console.log("Error al obtener el administrador por correo");
        return res.status(500).json({ error: error.message });
    }
}

const createAdminFromCsv = async (row) => {
    try {
        bcrypt.genSalt(10, async (err, salt) => {
            bcrypt.hash(row.password, salt, async (err, hash) => {
                row.password = hash;
                row.salt = salt;
                const admin = await Admin.create({
                    nombre: row.nombre,
                    correo: row.correo,
                    telefono: row.telefono,
                    cedula: row.cedula,
                    password: row.password,
                    salt: row.salt,
                    fecha_registro: new Date(),
                    direccion: row.direccion,
                    id_estado: 1,
                    id_rol: 3,
                    configuracion: { "config": "config" }
                });
                return admin;
            });
        });
        // const { nombre, correo, password } = req.body;
        // const admin = await Admin.create({
        //     nombre
        // });
    }
    catch (error) {
        console.log("Error al crear el administrador desde csv");
        return { error: error.message };
    }
}

module.exports = {
    getAllAdmins,
    getAdminById,
    createAdminFromCsv,
    getAdminByCorreo
}