const app = require('../../express-config');
const router = app.router;

router.get('/Estados', async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

}).post('/Estados', (req, res) => {

}).put('/Estados', (req, res) => {

}).patch('/Estados', (req, res) => {

});

module.exports = router;