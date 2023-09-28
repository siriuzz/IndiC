const app = require('../../express-config');
const router = app.router;
const DocenteController = require('../controllers/DocenteController');

router.get('/Docentes', async (req, res) => {
    // #swagger.description = 'Endpoint para obtener todos los docentes.'
    /*	#swagger.responses[200] = {
            description: 'Docentes obtenidos correctamente.',
            schema: { $ref: "#/components/schemas/Docente" }
    } */
    try {
        const result = await DocenteController.getAllDocentes(req, res);
        console.log(result);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

}).get('/Docentes/:id', async (req, res) => {

    // #swagger.description = 'Endpoint para obtener un Docente por su ID.'
    /*	#swagger.responses[200] = {
            description: 'Docente obtenido correctamente.',
            schema: { $ref: "#/components/schemas/Docente" }
    } */
    try {
        const result = await DocenteController.getDocenteById(req, res);
        console.log(result);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

}).post('/Docentes', (req, res) => {


}).put('/Docentes', (req, res) => {


}).patch('/Docentes', (req, res) => {


});

module.exports = router;