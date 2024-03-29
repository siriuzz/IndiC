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

const updatePassword = async (req, res) => {
    try {
        const oldPassword = req.body.oldPassword;
        const newPassword = req.body.newPassword;
        let estudiante = await Estudiante.findByPk(req.params.id);

        if (estudiante) {
            console.log("Estudiante encontrado");
        }

        const match = await bcrypt.compare(oldPassword, estudiante.password)
        if (match) {
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(newPassword, salt);
            estudiante.password = hash;
            estudiante.salt = salt;
            console.log("Actualizando contraseña");
            const result = await estudiante.save();
            // const newEstudiante = await Estudiante.update(estudiante, {
            //     where: {
            //         id: req.params.id
            //     }
            // });
            return estudiante.dataValues;
        }
    } catch (error) {
        console.log("Error al actualizar la contraseña");
        return { error: error.message };
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
        return { error: error.message };
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

const updateEstudiante = async (req, res) => {
    try {
        console.log("Actualizando estudiante");
        const estudiante = await Estudiante.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        return estudiante;
    } catch (error) {
        console.log("Error al actualizar el estudiante");
        return { error: error.message };
    }
}

const deleteEstudiante = async (req, res) => {
    try {
        console.log("Eliminando estudiante");
        const estudiante = await Estudiante.destroy({
            where: {
                id: req.params.id
            }
        });
        return estudiante;
    } catch (error) {
        console.log("Error al eliminar el estudiante");
        return { error: error.message };
    }
}

const desactivarEstudiante = async (req, res) => {
    try {
        console.log("Desactivando estudiante");
        const estudiante = await Estudiante.update({
            id_estado: 2
        }, {
            where: {
                id: req.params.id
            }
        });
        return estudiante;
    } catch (error) {
        console.log("Error al desactivar el estudiante");
        return { error: error.message };
    }
}

const activarEstudiante = async (req, res) => {
    try {
        console.log("Activando estudiante");
        const estudiante = await Estudiante.update({
            id_estado: 1
        }, {
            where: {
                id: req.params.id
            }
        });
        return estudiante;
    } catch (error) {
        console.log("Error al activar el estudiante");
        return { error: error.message };
    }
}

module.exports = {
    getAllEstudiantes,
    createEstudiante,
    getEstudianteById,
    getEstudianteByCorreo,
    createEstudianteFromCsv,
    updatePassword,
    updateEstudiante,
    deleteEstudiante,
    desactivarEstudiante,
    activarEstudiante
}