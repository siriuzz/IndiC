const app = require('../../express-config');
const SeccionController = require('../controllers/SeccionController');
const router = app.router;
const multer = require('multer');
const upload = multer({ dest: 'temp/' });
const Papa = require('papaparse');
const fs = require('fs');
const config = require('../papaConfig.js');

router.get('/Secciones', async (req, res) => {
    try {
        const result = await SeccionController.getAllSecciones(req, res);
        console.log(result);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

router.post('/Secciones/upload', upload.single('csv'), async (req, res) => {
    /* #swagger.tags = ['Secciones']
        #swagger.description = 'Endpoint para crear secciones desde un archivo csv.'
        #swagger.contentType = 'multipart/form-data'
        #swagger.parameters['csv'] = {
            in: 'formData',
            type: 'file',
            description: 'Archivo csv con las secciones a crear.',
            required: true
        } */
    try {
        const file = fs.createReadStream(req.file.path);
        config.complete = async function (results) {
            // console.log(results);
            for (let i = 0; i < results.data.length; i++) {
                const element = results.data[i];
                await SeccionController.createSeccionesFromCsv(element);
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
        const result = await Papa.parse(file, config);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

module.exports = router;