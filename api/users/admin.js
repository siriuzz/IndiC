const app = require('../../express-config');
const router = app.router;
const AdminController = require('../controllers/AdminController');


router.get('/Administrador', async (req, res) => {

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

}).get('/Administrador/:id', async (req, res) => {

    // #swagger.description = 'Endpoint para obtener un Administrador por su ID.'
    /*	#swagger.responses[200] = {
            description: 'Administrador obtenido correctamente.',
            schema: { $ref: "#/components/schemas/Admin" }
    } */
    try {
        const result = await AdminController.getAdminById(req,res);
        console.log(result);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

}).post('/Administrador', (req, res) => {


}).put('/Administrador', (req, res) => {


}).patch('/Administrador', (req, res) => {


});

module.exports = router;