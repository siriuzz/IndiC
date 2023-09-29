const { Admin } = require('../../db/models'); // Importa los modelos necesarios

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

const createAdminFromCsv = async (req, res) => {
    try {
        const { nombre, correo, password } = req.body;
        const admin = await Admin.create({
            nombre: nombre,
            correo: correo,
            password: password
        });
        return admin;
    }
    catch (error) {
        console.log("Error al crear el administrador desde csv");
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAllAdmins,
    getAdminById
}