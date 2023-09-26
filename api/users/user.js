const app = require('../../express-config');
const Estudiante = require('../models/Estudiante');
const bcrypt = require('bcrypt');
const router = app.router;

router.get('/', (req, res) => {

}).post("/", async (req, res) => {
    const { correo, password } = req.body;
    const estudiante = await Estudiante.findOne({ where: { correo: correo } });
    if (estudiante) {
        if (estudiante.password === password) {
            res.json(estudiante);
        } else {
            res.json({ error: "Contraseña incorrecta" });
        }
    }
});