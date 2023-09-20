const express = require('express');
const app = require('../express-config');

router.get('/Asignaturas', async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

}).post('/Asignaturas', (req, res) => {

}).put('/Asignaturas', (req, res) => {

}).patch('/Asignaturas', (req, res) => {

});

module.exports = router;