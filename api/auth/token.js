const app = require('../../express-config');
const jwt = require('jsonwebtoken');
const router = app.router;
require('dotenv').config()

router.post('/token/validate', async (req, res) => {
    const { token } = req.body;
    console.log(req.body)
    // console.log(token);
    const key = process.env.JWT_KEY;
    jwt.verify(token, key, function (err, decoded) {
        console.log(err);
        if (err) return res.status(401).json({ valid: false });
        else {
            // const payload = {
            //     id: decoded.id,
            //     nombre: decoded.nombre,
            //     correo: decoded.correo,
            //     rol: decoded.rol,
            //     id_carrera: decoded.id_carrera,
            //     id_estado: decoded.id_estado,
            //     iat: Math.floor(Date.now() / 1000),
            //     exp: Math.floor(Date.now() / 1000) + 60
            // }
            // const token = jwt.sign(payload, key);
            return res.status(200).json({ "token": token });
        }
    });
});

module.exports = router;