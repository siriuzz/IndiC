const express = require('express');
const app = require('../../express-config');
const router = app.router;

router.get('/Estudiante_Asignatura', async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

}).post('/Estudiante_Asignaturas', (req, res) => {

}).put('/Estudiante_Asignaturas', (req, res) => {

}).patch('/Estudiante_Asignaturas', (req, res) => {

});

module.exports = router;