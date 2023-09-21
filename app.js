const express = require('express')
const app = express();
const estudiantesRoutes = require('./api/users/estudiante');
const swaggerUi = require('swagger-ui-express');
const router = express.Router();


const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.serve, swaggerUi.setup(require('./swagger-output.json')));

app.use('/api', router);
router.use('/Estudiantes', swaggerUi.serve, estudiantesRoutes);
// router.get('/Estudiantes', swaggerUi.serve, estudiantesRoutes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});