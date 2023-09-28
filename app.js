const express = require('express')
const app = express();
const estudiantesRoutes = require('./api/users/estudiante.js');
const docentesRoutes = require('./api/users/docente');
const authRoutes = require('./api/auth/login');
const tokenRoutes = require('./api/auth/token');
const carrerasRoutes = require('./api/academic/carrera');
const swaggerUi = require('swagger-ui-express');
const router = express.Router();
const cors = require('cors');

const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Replace with your Next.js app's URL
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//     res.setHeader('Access-Control-Allow-Credentials', 'true');
//     next();
// });
app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(require('./swagger-output.json')));

app.use('/api', router);

router.use('/', swaggerUi.serve, estudiantesRoutes
    /* 
    #swagger.tags = ['Estudiantes']
    */

);

router.use('/', authRoutes
    /*
    #swagger.tags = ['Auth']
    */
);

router.use('/', tokenRoutes
    /*
    #swagger.tags = ['Auth']
    */
);

router.use('/', swaggerUi.serve, docentesRoutes
    /* 
    #swagger.tags = ['Docentes']
        
    */
);

router.use('/', swaggerUi.serve, require('./api/academic/asignatura')
    /* 
    #swagger.tags = ['Asignaturas']
            */
);

router.use('/', swaggerUi.serve, carrerasRoutes
    /* 
    #swagger.tags = ['Carreras']
    */
);

router.use('/', swaggerUi.serve, require('./api/system/config_calif')
    /* 
    #swagger.tags = ['Configuracion calificaciones']
    */
);

router.use('/', swaggerUi.serve, require('./api/system/estado')
    /* 
     #swagger.tags = ['Estados']
    */
);

router.use('/', swaggerUi.serve, require('./api/system/roles')
    /*
    #swagger.tags = ['Roles']
    */
);

router.use('/', swaggerUi.serve, require('./api/academic/horario.js')
    /*
    #swagger.tags = ['Horarios']
    */
);
// router.get('/Estudiantes', swaggerUi.serve, estudiantesRoutes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

module.exports = { router, port };