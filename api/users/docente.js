const app = require('../../express-config');
const router = app.router;


router.get('/Docentes', async (req, res) => {

    try {

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

}).post('/Docentes', (req, res) => {


}).put('/Docentes', (req, res) => {


}).patch('/Docentes', (req, res) => {


});

module.exports = router;