const app = require('../../express-config');
const EstadoController = require('../controllers/EstadoController.js');
const router = app.router;

router.get('/Estados', async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

}).post('/Estados', async (req, res) => {
    // #swagger.description = 'Endpoint para crear estado.'
    /*	#swagger.responses[200] = {
            description: 'Estado creado exitosamente.'
    } */
    /* #swagger.parameters[body] = [
        {
            in: 'body',
            description: 'Información del estado.',
            required: true,
            schema: { $ref: "#/components/schemas/Estado" }
        }
    ] */
    try {
        const Estado = await EstadoController.createEstado(req, res);
        return res.status(200).json(Estado);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

})

module.exports = router;