const express = require('express');
const app = require('../express-config');

router.get('/Config_Calif', async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

}).post('/Config_Calif', (req, res) => {

}).put('/Config_Calif', (req, res) => {

}).patch('/Config_Calif', (req, res) => {

});

module.exports = router;