const app = require('../../express-config');
const EstudianteController = require('../../controllers/EstudianteController.js');
const router = app.router;

router.get('/', async (req, res) => {

    // #swagger.description = 'Endpoint para obtener todos los estudiantes.'
    /*	#swagger.responses[200] = {
            description: 'Estudiantes obtenidos correctamente.',
            schema: { $ref: "#/components/schemas/Estudiante" }
    } */
    try {
        const result = await EstudianteController.getAllEstudiantes(req, res);
        console.log(result);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

})
    .post('/', (req, res) => {
        // #swagger.description = 'Endpoint para crear un estudiante.'
        /*	#swagger.requestBody = {
               required: true,
               schema: { $ref: "#/components/schemas/Estudiante" }
       }
         #swagger.parameters['nombre'] = {
                in: 'body.nombre',                             
                description: "Nombre del estudiante",
                required: true,
                type: 'string',
                }
         swagger.parameters['body'] = {
         in: 'body',                            
         description: "Nombre del estudiante",                   
         required: true,                     
         type: 'string',
         }
         #swaggger.responses[200] = {
                description: 'Estudiante creado correctamente.',
                schema: { $ref: "#/components/schemas/Estudiante" }
         } 
    } */

    }).put('/', (req, res) => {
        // #swagger.description = 'Endpoint para actualizar un estudiante.'
        /*  #swagger.parameters['obj'] = {
                in: 'body',
                description: 'Some description...',
                schema: {
                    $name: 'Jhon Doe',
                    $age: 29,
                    about: ''
                }
        } */

    }).patch('/', (req, res) => {

    });

module.exports = router;