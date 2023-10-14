const app = require('../../express-config');
const EstudianteController = require('../controllers/EstudianteController.js');
const DocenteController = require('../controllers/DocenteController.js');
const AdminController = require('../controllers/AdminController');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = app.router;
require('dotenv').config()


router.post('/auth/login', async (req, res) => {
    /**  #swagger.tags = ['Auth']
     #swagger.description = 'Endpoint para hacer login.'
          #swagger.responses[200] = {
            description: 'Login exitoso.'
    } 
         */

    try {
        const { correo, password } = req.body;

        const estudiante = await EstudianteController.getEstudianteByCorreo(req, res);
        console.log(estudiante);
        if (estudiante) {
            bcrypt.compare(password, estudiante.password, function (err, result) {
                if (result == false) return res.status(400).json({ error: 'Correo o contraseña incorrecta.' });
                else {
                    const payload = {
                        id: estudiante.id,
                        nombre: estudiante.nombre,
                        correo: estudiante.correo,
                        rol: 'estudiante',
                        id_carrera: estudiante.id_carrera,
                        id_estado: estudiante.id_estado,
                        iat: Math.floor(Date.now() / 1000),
                        exp: Math.floor(Date.now() / 1000) + parseInt(process.env.JWT_TIMEOUT)
                    }
                    const key = process.env.JWT_KEY;
                    const token = jwt.sign(payload, key);

                    return res.status(200).json({
                        "token": token, "user": {
                            id: estudiante.id,
                            nombre: estudiante.nombre,
                            correo: estudiante.correo,
                            rol: 'Estudiante',
                            id_carrera: estudiante.id_carrera,
                            id_estado: estudiante.id_estado,
                            periodos_cursados: estudiante.periodos_cursados,
                            asignaturas_aprobadas: estudiante.asignaturas_aprobadas,
                            indice_general: estudiante.indice_general,
                            carrera: estudiante.Carrera
                        }
                    });
                }
            });
        }

        const docente = await DocenteController.getDocenteByCorreo(req, res);
        if (docente) {
            bcrypt.compare(password, docente.password, async function (err, result) {
                if (result == false) return res.status(400).json({ error: 'Correo o contraseña incorrecta.' });
                else {
                    const payload = {
                        id: docente.id,
                        nombre: docente.nombre,
                        correo: docente.correo,
                        rol: 'Docente',
                        id_estado: docente.id_estado,
                        iat: Math.floor(Date.now() / 1000),
                        exp: Math.floor(Date.now() / 1000) + parseInt(process.env.JWT_TIMEOUT)
                    }
                    const key = process.env.JWT_KEY;
                    const token = jwt.sign(payload, key);
                    const req = { params: { id: docente.id } }
                    const seccionesDocente = await DocenteController.getSeccionesDocenteById(req, res);

                    return res.status(200).json({
                        "token": token, "user": {
                            id: docente.id,
                            nombre: docente.nombre,
                            correo: docente.correo,
                            rol: 'Docente',
                            id_estado: docente.id_estado,
                            secciones: seccionesDocente
                        }
                    });
                }
            });
        }

        const admin = await AdminController.getAdminByCorreo(req, res);
        if (admin) {
            bcrypt.compare(password, admin.password, function (err, result) {
                if (result == false) return res.status(400).json({ error: 'Correo o contraseña incorrecta.' });
                else {
                    const payload = {
                        id: admin.id,
                        nombre: admin.nombre,
                        correo: admin.correo,
                        rol: 'Administrador',
                        id_estado: admin.id_estado,
                        iat: Math.floor(Date.now() / 1000),
                        exp: Math.floor(Date.now() / 1000) + parseInt(process.env.JWT_TIMEOUT)
                    }
                    const key = process.env.JWT_KEY;
                    const token = jwt.sign(payload, key);

                    return res.status(200).json({
                        "token": token, "user": {
                            id: admin.id,
                            nombre: admin.nombre,
                            correo: admin.correo,
                            rol: 'Administrador',
                            id_estado: admin.id_estado
                        }
                    });
                }
            });
        }

        // const administrador = await AdministradorController.getAdministradorByCorreo(req, res);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

module.exports = router;