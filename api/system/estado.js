const express = require('express');
const app = require('../express-config');

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