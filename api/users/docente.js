const app = require('../../express-config');
const router = app.router;
const DocenteController = require('../controllers/DocenteController');
const multer = require('multer');
const upload = multer({ dest: 'temp/' });
const Papa = require('papaparse');
const fs = require('fs');
const config = require('../papaConfig.js');

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

router.post('/Docentes/upload', upload.single('csv'), async (req, res) => {
    try {
        const file = fs.createReadStream(req.file.path);
        config.complete = async function (results) {
            // console.log(results);
            for (let i = 0; i < results.data.length; i++) {
                const element = results.data[i];
                await DocenteController.createDocenteFromCsv(element);
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
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

module.exports = router;