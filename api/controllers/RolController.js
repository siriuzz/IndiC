const { Roles } = require('../../db/models'); // Importa los modelos necesarios

const getAllRoles = async (req, res) => {
    try {
        const allRoles = await Roles.findAll();
        return allRoles;
    }
    catch (error) {
        console.log("Error al obtener los roles");
        return res.status(500).json({ error: error.message });
    }
}

const createRol = async (req, res) => {
    // #swagger.description = 'Endpoint para crear rol.'
    /*	#swagger.responses[200] = {
            description: 'Rol creado exitosamente.'
    } */
    try {
        console.log("Creando rol");
        const rol = await Roles.create(req.body);
        return rol;
    } catch (error) {
        console.log("Error al crear el rol");
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAllRoles,
    createRol
}