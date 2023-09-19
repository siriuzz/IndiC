const express = require('express');
const app = require('../express-config');
const EstudianteController = require('../../controllers/EstudianteController.js');

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