const express = require('express');
// const app = require('../express-config');
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

}).put('/Estudiantes', (req, res) => {

}).patch('/Estudiantes', (req, res) => {

});

module.exports = router;