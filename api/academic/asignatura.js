const app = require('../../express-config');
const router = app.router;
const multer = require('multer');
const upload = multer({ dest: 'temp/' });
const Papa = require('papaparse');
const fs = require('fs');
const config = require('../papaConfig.js');
const AsignaturaController = require('../controllers/AsignaturaController.js');

router.get('/Asignaturas', async (req, res) => {
    try {
        const result = await AsignaturaController.getAllAsignaturas(req, res);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

}).post('/Asignaturas', async (req, res) => {
    try {
        if (!req.body.nombre) return res.status(400).json({ error: 'El nombre de la asignatura es requerido.' });
        if (!req.body.codigo) return res.status(400).json({ error: 'El código de la asignatura es requerido.' });
        if (!req.body.creditos) return res.status(400).json({ error: 'Los créditos de la asignatura son requeridos.' });
        const result = await AsignaturaController.createAsignatura(req, res);
        res.status(201).json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

router.get('/Asignaturas/:id', async (req, res) => {
    try {
        const result = await AsignaturaController.getAsignaturaById(req, res);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}).put('/Asignaturas/:id', async (req, res) => {
    try {
        const result = await AsignaturaController.updateAsignatura(req, res);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

router.get('/Asignaturas/:id/Secciones', async (req, res) => {
    try {
        const result = await AsignaturaController.getSeccionesByAsignaturaId(req, res);
        res.json(result);
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

router.patch('/Asignaturas/desactivar/:id', async (req, res) => {
    try {
        const result = await AsignaturaController.desactivarAsignatura(req, res);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}).patch('/Asignaturas/activar/:id', async (req, res) => {
    try {
        const result = await AsignaturaController.activarAsignatura(req, res);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

router.post('/Asignaturas/upload', upload.single('csv'), (req, res) => {
    /* #swagger.tags = ['Asignaturas']
    #swagger.description = 'Endpoint para crear asignaturas desde un archivo CSV.'
    /*	#swagger.responses[200] = {
            description: 'Asignaturas creadas correctamente.',
            schema: { $ref: "#/components/schemas/Asignatura" }
    }
    #swagger.contentType = 'multipart/form-data'

    #swagger.parameters['file'] = {
        in: 'formData',
        type: 'file',
        description: 'Archivo csv con los datos de las carreras.'
    } 
    */
    const file = fs.createReadStream(req.file.path);
    config.complete = async function (results) {
        // console.log(results);
        for (let i = 0; i < results.data.length; i++) {
            const element = results.data[i];
            await AsignaturaController.createAsignaturaFromCsv(element);
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
})

module.exports = router;