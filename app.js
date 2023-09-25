const express = require('express')
const app = express();
const estudiantesRoutes = require('./api/users/estudiante.js');
const docentesRoutes = require('./api/users/docente');
const swaggerUi = require('swagger-ui-express');
const router = express.Router();


const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.serve, swaggerUi.setup(require('./swagger-output.json'))
    /*
    #swagger.tags = ['Documentacion']
    */
);

app.use('/api', router);

router.use('/Estudiantes', swaggerUi.serve, estudiantesRoutes
    /* 
    #swagger.tags = ['Estudiantes']
    */

);

router.use('/Docentes', swaggerUi.serve, docentesRoutes
    /* 
    #swagger.tags = ['Docentes']
        
    */
);

router.use('/Asignaturas', swaggerUi.serve, require('./api/academic/asignatura')
    /* 
    #swagger.tags = ['Asignaturas']
            */
);

router.use('/Carreras', swaggerUi.serve, require('./api/academic/carrera')
    /* 
    #swagger.tags = ['Carreras']
    */
);

router.use('/Config_calif', swaggerUi.serve, require('./api/system/config_calif')
    /* 
    #swagger.tags = ['Configuracion calificaciones']
    */
);

router.use('/Estados', swaggerUi.serve, require('./api/system/estado')
    /* 
     #swagger.tags = ['Estados']
    */
);

router.use('/Roles', swaggerUi.serve, require('./api/system/roles')
    /*
    #swagger.tags = ['Roles']
    */
);
// router.get('/Estudiantes', swaggerUi.serve, estudiantesRoutes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});