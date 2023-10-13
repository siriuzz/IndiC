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
        // console.log(result);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

}).post("/Estudiantes", async (req, res) => {
    // #swagger.tags = ['Estudiantes']
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

}).put('/Estudiantes/:id', async (req, res) => {
    // #swagger.description = 'Endpoint para actualizar un estudiante.'
    /*	#swagger.responses[200] = {
            description: 'Estudiante actualizado correctamente.',
            schema: { $ref: "#/components/schemas/Estudiante" }
    } */
    /* #swagger.parameters[body] = [
        {
            in: 'body',
            description: 'Actualización de la información del estudiante.',
            required: true,
            schema: { $ref: "#/components/schemas/Estudiante" }
        }
    ] */
    try {
        const result = await EstudianteController.updateEstudiante(req, res);
        // console.log(result);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

}).delete('/Estudiantes/:id', async (req, res) => {
    // #swagger.description = 'Endpoint para eliminar un estudiante.'
    /*	#swagger.responses[200] = {
            description: 'Estudiante eliminado correctamente.',
            schema: { $ref: "#/components/schemas/Estudiante" }
    } */
    try {
        const result = await EstudianteController.deleteEstudiante(req, res);
        // console.log(result);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

});

router.patch('/Estudiantes/desactivar/:id', async (req, res) => {
    // #swagger.description = 'Endpoint para desactivar un estudiante.'
    /*	#swagger.responses[200] = {
            description: 'Estudiante desactivado correctamente.',
            schema: { $ref: "#/components/schemas/Estudiante" }
    } */
    try {
        const result = await EstudianteController.desactivarEstudiante(req, res);
        // console.log(result);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

});

router.patch('/Estudiantes/activar/:id', async (req, res) => {
    // #swagger.description = 'Endpoint para activar un estudiante.'
    /*	#swagger.responses[200] = {
            description: 'Estudiante activado correctamente.',
            schema: { $ref: "#/components/schemas/Estudiante" }
    } */
    try {
        const result = await EstudianteController.activarEstudiante(req, res);
        // console.log(result);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

});

router.patch('/Estudiantes/CambiarPassword/:id', async (req, res) => {
    // #swagger.description = 'Endpoint para actualizar la contraseña de un estudiante.'
    /*	#swagger.responses[200] = {
            description: 'Estudiante actualizado correctamente.',
    } */
    /* #swagger.parameters[body] = [
        {
            in: 'body',
            description: 'Actualización de la información del estudiante.',
            required: true,
            schema: { oldPassword: "oldPassword", newPassword: "newPassword" }
        }
    ] */
    try {
        const result = await EstudianteController.updatePassword(req, res);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

});

router.post('/Estudiantes/upload', upload.single('csv'), async (req, res) => {
    /* #swagger.tags = ['Estudiantes']
    #swagger.description = 'Endpoint para subir un archivo csv con los datos de los estudiantes.'
    #swagger.contentType = 'multipart/form-data'

    #swagger.parameters['file'] = {
        in: 'formData',
        type: 'file',
        description: 'Archivo csv con los datos de los estudiantes.'
    }
    */
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