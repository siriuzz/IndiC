const app = require('../../express-config');
const CarreraController = require('../controllers/CarreraController.js');
const router = app.router;
const multer = require('multer');
const upload = multer({ dest: 'temp/' });
const Papa = require('papaparse');
const fs = require('fs');
const config = require('../papaConfig.js');

router.get('/Carreras', async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})
    .post('/Carreras', (req, res) => {

    })
// .put('/Carreras', (req, res) => {

// }).patch('/Carreras', (req, res) => {

// });
router.get('/Carreras/:id', async (req, res) => {
    try {
        console.log("Obteniendo carrera por id");
        const carrera = await CarreraController.getCarreraById(req, res);
        return res.status(200).json(carrera);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

})

router.post('/Carreras/upload', upload.single('csv'), async (req, res) => {
    /* #swagger.tags = ['Carrera']
    #swagger.description = 'Endpoint para crear carreras desde un archivo CSV.'
    /*	#swagger.responses[200] = {
            description: 'Carreras creadas correctamente.',
            schema: { $ref: "#/components/schemas/Carrera" }
    } */
    try {
        const file = fs.createReadStream(req.file.path);
        config.complete = async function (results) {
            // console.log(results);
            for (let i = 0; i < results.data.length; i++) {
                const element = results.data[i];
                await CarreraController.createCarreraFromCsv(element);
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