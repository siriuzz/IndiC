const app = require('../../express-config');
const EstudianteController = require('../controllers/EstudianteController.js');
const router = app.router;

router.get('/', async (req, res) => {

    // #swagger.description = 'Endpoint para obtener todos los estudiantes.'
    /*	#swagger.responses[200] = {
            description: 'Estudiantes obtenidos correctamente.',
            schema: { $ref: "#/components/schemas/Estudiante" }
    } */
    try {
        const result = await EstudianteController.getAllEstudiantes(req, res);
        console.log(result);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

}).post("/", async (req, res) => {
    // #swagger.description = 'Endpoint para crear un estudiante.'
    /*	#swagger.responses[200] = {
            description: 'Estudiante creado correctamente.',
            schema: { $ref: "#/components/schemas/Estudiante" }
    } */
    /* #swagger.parameters[body] = [
        {
            in: 'body',
            description: 'Información del estudiante.',
            required: true,
            schema: { $ref: "#/components/schemas/Estudiante" }
        }
    ] */
    try {
        const result = await EstudianteController.createEstudiante(req, res);
        console.log(result);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
router.get('/:id', async (req, res) => {

    // #swagger.description = 'Endpoint para obtener un estudiante.'
    /*	#swagger.responses[200] = {
            description: 'Estudiante obtenido correctamente.',
            schema: { $ref: "#/components/schemas/Estudiante" }
    } */
    try {
        const result = await EstudianteController.getEstudianteById(req, res);
        console.log(result);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

});


module.exports = router;