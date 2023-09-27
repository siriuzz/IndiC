const app = require('../../express-config');
const CarreraController = require('../controllers/CarreraController.js');
const router = app.router;

router.get('/Carreras', async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})
// .post('/Carreras', (req, res) => {

// }).put('/Carreras', (req, res) => {

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

module.exports = router;