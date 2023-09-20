const express = require('express');
const app = require('../express-config');

router.get('/Carreras', async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

}).post('/Carreras', (req, res) => {

}).put('/Carreras', (req, res) => {

}).patch('/Carreras', (req, res) => {

});

module.exports = router;