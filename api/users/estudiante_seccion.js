
const app = require('../../express-config');
const router = app.router;
const config = require('../papaConfig');
const Papa = require('papaparse');
const fs = require('fs');
const multer = require('multer');
const EstudianteSeccionController = require('../controllers/EstudianteSeccionController');
const upload = multer({ dest: 'temp/' });


router.get('/Estudiante_Seccion', async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

})
router.get('/Estudiante_Seccion/:id', async (req, res) => {
    /* #swagger.tags = ['Estudiante_Seccion']
            #swagger.description = 'Endpoint para obtener las secciones de un estudiante.' */

    try {
        const result = await EstudianteSeccionController.getEstudianteSeccionByIdAndPeriod(req, res);
        return res.json(result);

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

router.post('/Estudiante_Seccion/seleccion/:id_estudiante/Seccion/:id_seccion', async (req, res) => {
    //endpoint para seleccion

    /* #swagger.tags = ['Estudiante_Seccion']
            #swagger.description = 'Endpoint para crear las secciones de un estudiante.'
            #swagger.requestBody = {
                required: true,
                content: {
                    "application/json": {
                        schema: { $ref: "#/components/schemas/Estudiante_Seccion" }
                    }
                }
            }
             */
    try {
        const result = await EstudianteSeccionController.createEstudianteSeccion(req, res);
        return res.json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
).put('/Estudiante_Seccion/:id_estudiante/Seccion/:id_seccion', async (req, res) => {
    //endpoint para calificaciones
    /* #swagger.tags = ['Estudiante_Seccion']
            #swagger.description = 'Endpoint para actualizar las secciones de un estudiante.' */

    try {
        const result = await EstudianteSeccionController.updateEstudianteSeccion(req, res);
        return res.json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

router.get('/Estudiante_Seccion/calcularIndice/:id', async (req, res) => {
    /* #swagger.tags = ['Estudiante_Seccion']
            #swagger.description = 'Endpoint para obtener las secciones de un estudiante.' */
    try {
        const result = await EstudianteSeccionController.calcularIndice(req, res);
        return res.json(result);

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

router.get('/Estudiante_Seccion/CalcularIndicePorPeriodo/:id', async (req, res) => {
    /* #swagger.tags = ['Estudiante_Seccion']
            #swagger.description = 'Endpoint para obtener las secciones de un estudiante.' */
    try {
        const result = await EstudianteSeccionController.calcularIndicePorPeriodo(req, res);
        return res.json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

router.post('/Estudiante_Seccion/upload', upload.single('csv'), (req, res) => {
    /* #swagger.tags = ['Estudiante_Seccion']
         #swagger.description = 'Endpoint para subir un archivo csv con estudiantes_secciones.' 
    #swagger.contentType = 'multipart/form-data'

         
    /* #swagger.parameters['file'] = {
            in: 'formData',
            description: 'Archivo csv con estudiantes_secciones.',
            required: true,
            type: 'file'
    } */
    try {
        const file = fs.createReadStream(req.file.path);
        config.complete = async function (results) {
            // console.log(results);
            for (let i = 0; i < results.data.length; i++) {
                const element = results.data[i];
                await EstudianteSeccionController.createEstudianteSeccionFromCsv(element);
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