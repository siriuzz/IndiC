const app = require('../../express-config');
const router = app.router;

app.router.get('/Roles', async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

}).post('/Roles', (req, res) => {

}).put('/Roles', (req, res) => {

}).patch('/Roles', (req, res) => {

});

module.exports = router;