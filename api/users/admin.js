const app = require('../../express-config');
const router = app.router;
const AdminController = require('../controllers/AdminController');
const multer = require('multer');
const upload = multer({ dest: 'temp/' });
const fs = require('fs');
const config = require('../papaConfig');
const Papa = require('papaparse');
const bcrypt = require('bcrypt');



router.get('/Admins', async (req, res) => {
    // #swagger.tags = ['Admins']
    // #swagger.description = 'Endpoint para obtener todos los administradores.'
    /*	#swagger.responses[200] = {
            description: 'Administradores obtenidos correctamente.',
            schema: { $ref: "#/components/schemas/Admin" }
    } */
    try {
        const result = await AdminController.getAllAdmins(req, res);
        console.log(result);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

}).get('/Admins/:id', async (req, res) => {
    // #swagger.tags = ['Admins']

    // #swagger.description = 'Endpoint para obtener un Administrador por su ID.'
    /*	#swagger.responses[200] = {
            description: 'Administrador obtenido correctamente.',
            schema: { $ref: "#/components/schemas/Admin" }
    } */
    try {
        const result = await AdminController.getAdminById(req, res);
        console.log(result);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

})

router.get('/Admins/analytics/get', async (req, res) => {
    /* #swagger.tags = ['Admins']*/
    // #swagger.description = 'Endpoint para obtener las estadisticas de los administradores.'
    try {
        const result = await AdminController.getAdminsAnalytics(req, res);
        res.json(result);
        console.log(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

router.post('/Admins/upload', upload.single('csv'), async (req, res) => {
    /* #swagger.tags = ['Admins']
         #swagger.description = 'Endpoint para subir un archivo csv con los datos de los administradores.'
    #swagger.contentType = 'multipart/form-data'

         #swagger.parameters['file'] = {
              in: 'formData',
              type: 'file',
              description: 'Archivo csv con los datos de los administradores.'
         }
         #swagger.responses[201] = {
              description: 'Administradores creados correctamente.',
              schema: { $ref: "#/components/schemas/Admin" }
         }
         #swagger.responses[500] = {
              description: 'Error al crear los administradores.',
              schema: { $ref: "#/components/schemas/Error" }
         }
            #swagger.responses[400] = {
                description: 'Error al subir el archivo.',
                schema: { $ref: "#/components/schemas/Error" }
            }
            #swagger.responses[500] = {
                description: 'Error al eliminar el archivo.',
                schema: { $ref: "#/components/schemas/Error" }
            }
        */
    try {
        const file = fs.createReadStream(req.file.path);
        config.complete = async (results) => {
            for (let i = 0; i < results.data.length; i++) {
                const element = results.data[i];
                const admin = await AdminController.createAdminFromCsv(element);
                console.log(admin);
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
        config.error = (error) => {
            console.log(error);
        }
        Papa.parse(file, config);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

module.exports = router;