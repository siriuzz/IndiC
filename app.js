const express = require('express')
const app = express();
const router = express.Router();
const EstudianteController = require('./controllers/EstudianteController.js');
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', router);

router.get('/Estudiantes', async (req, res) => {
    try {
        const result = await EstudianteController.getAllEstudiantes(req, res);
        console.log(result);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

}).post('/Estudiantes', (req, res) => {

});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports = router;