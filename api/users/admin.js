const app = require('../../express-config');
const router = app.router;
const AdminController = require('../controllers/AdminController');


router.get('/Admins', async (req, res) => {

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

}).post('/Admins', (req, res) => {


}).put('/Admins', (req, res) => {


}).patch('/Admins', (req, res) => {


});

module.exports = router;