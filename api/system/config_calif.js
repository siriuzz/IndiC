const app = require('../../express-config');
const router = app.router;

router.get('/Config_Calif', async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

});

module.exports = router;