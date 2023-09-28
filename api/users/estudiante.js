const app = require('../../express-config');
const EstudianteController = require('../controllers/EstudianteController.js');
const router = app.router;
const multer = require('multer');
const upload = multer({ dest: 'temp/' });
const Papa = require('papaparse');
const fs = require('fs');
const config = require('../papaConfig.js');

router.get('/Estudiantes', async (req, res) => {

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

}).post("/Estudiantes", async (req, res) => {
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
router.get('/Estudiantes/:id', async (req, res) => {

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

router.post('/Estudiantes/upload', upload.single('csv'), async (req, res) => {
    const file = fs.createReadStream(req.file.path);
    config.complete = async function (results) {
        // console.log(results);
        for (let i = 0; i < results.data.length; i++) {
            const element = results.data[i];
            await EstudianteController.createEstudianteFromCsv(element);
        }
        fs.unlink(req.file.path, (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Error al eliminar el archivo' });
            }
            //file removed
        })
        res.status(201).json(results.data);
    }
    config.error = function (error) {
        res.status(400).json({ error: 'Invalid CSV format' }); // Handle errors
    }
    Papa.parse(file, config);
});


module.exports = router;