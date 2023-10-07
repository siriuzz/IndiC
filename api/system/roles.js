const app = require('../../express-config');
const RolController = require('../controllers/RolController.js');
const router = app.router;

app.router.get('/Roles', async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

}).post('/Roles', async (req, res) => {
    /* #swagger.parameters[body] = [
        {
            in: 'body',
            description: 'Información del rol.',
            required: true,
            schema: { $ref: "#/components/schemas/Rol" }
        }
    ] */
    const Rol = await RolController.createRol(req, res);
    return res.status(200).json(Rol);

});

module.exports = router;