const app = require('../../express-config');
const EstudianteController = require('../controllers/EstudianteController.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = app.router;
require('dotenv').config()


router.post('/login', async (req, res) => {
    // #swagger.description = 'Endpoint para hacer login.'
    /*	#swagger.responses[200] = {
            description: 'Login exitoso.'
    } */
    /* #swagger.parameters[body] = [
        {
            in: 'body',
            description: 'Información del estudiante.',
            required: true,
            schema: {
                correo: 
                {
                    type: string,
                    description: 'Correo del estudiante.',
                    required: true
                },
                password: 
                {
                    type: string,
                    description: 'Contraseña del estudiante.',
                    required: true
                }
            }
        }
    ] */
    try {
        const { correo, password } = req.body;

        const estudiante = await EstudianteController.getEstudianteByCorreo(req, res);

        if (estudiante.length == 0) return res.status(404).json({ error: 'Estudiante no encontrado.' });
        if (estudiante.correo != correo) return res.status(400);

        bcrypt.compare(password, estudiante.password, function (err, result) {
            if (result == false) return res.status(400).json({ error: 'Correo o contraseña incorrecta.' });
            else {
                // const payload = {
                //     id: result.id,
                //     nombre: result.nombre,
                //     correo: result.correo,
                //     rol: 'estudiante',
                //     id_carrera: result.id_carrera,
                //     id_estado: result.id_estado
                // }
                // const key = process.env.JWT_KEY;
                // const token = jwt.sign(payload, key);
                // localStorage.setItem('jwtToken', token);

                return res.status(200).json(estudiante);
            }
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

module.exports = router;