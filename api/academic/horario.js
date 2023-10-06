const app = require('../../express-config');
const HorarioController = require('../controllers/HorarioController.js');
const router = app.router;
const multer = require('multer');
const upload = multer({ dest: 'temp/' });
const Papa = require('papaparse');
const fs = require('fs');
const config = require('../papaConfig.js');

router.get('/Horarios', async (req, res) => {
    try {
        const result = await HorarioController.getAllHorarios(req, res);
        console.log(result);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

router.post('/Horarios/upload', upload.single('csv'), async (req, res) => {
    /* #swagger.tags = ['Horarios']
    #swagger.description = 'Endpoint para crear horarios desde un archivo CSV.'
    #swagger.contentType = 'multipart/form-data'
    #swagger.parameters['file'] = {
            in: 'formData',
            type: 'file',
            description: 'Archivo csv con los datos de los horarios.'
        }
        } 
    */
    try {
        const file = fs.createReadStream(req.file.path);
        config.complete = async function (results) {
            // console.log(results);
            for (let i = 0; i < results.data.length; i++) {
                const element = results.data[i];
                const horario = await HorarioController.createHorarioFromCsv(element);
                console.log(horario);
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
})

module.exports = router;