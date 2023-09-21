const express = require('express');
// const app = require('../express-config');
const EstudianteController = require('../../controllers/EstudianteController.js');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const result = await EstudianteController.getAllEstudiantes(req, res);
        console.log(result);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

})
    .post('/', (req, res) => {

    }).put('/', (req, res) => {

    }).patch('/', (req, res) => {

    });

module.exports = router;