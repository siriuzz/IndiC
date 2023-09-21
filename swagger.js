const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' })

const doc = {
    info: {
        title: 'IndiC API',
        description: 'Esta es la documentación de la API de IndiC',
    },
    host: 'localhost:3000',
    schemes: ['http'],
    explorer: true,
    components: {
        schemas: {
            Estudiante: {
                $nombre: "John Doe",
                $correo: "john@1234.com",
                $telefono: "1234567890",
                $cedula: "1234567890",
                $password: "1234567890",
                $fecha_registro: "2021-09-19",
                $direccion: "Calle 123",
                $id_carrera: 1,
                $id_estado: 1,
                $id_rol: 1,
                $periodos_cursados: 1,
                $configuracion: JSON.stringify({ "config": "config" })
            },
            Docente: {
                $nombre: 'Juana Doe',
                $correo: 'juana@email.com',
                $telefono: '1234567890',
                $cedula: '1234567890',
                $password: '1234567890',
                $fecha_registro: '2021-09-19',
                $direccion: 'Calle 123',
                $id_estado: 1,
                $id_rol: 1,
                $configuracion: JSON.stringify({ "config": "config" }),
            },
            Asignatura: {
                $asignatura: "Programacion I",
                $id_docente: "1",
                $creditos: "4",
                $aula: "A-1",
                $activa: true,
                $calificacion_base_mt: 40
            },
            Rol: {
                $rol: "Estudiante"
            },
            Estado: {
                $estado: "Activo"
            },
            Carrera: {
                $carrera: "Ingeniería de Sistemas",
                $periodos_totales: 17,
                $asignaturas_totales: 50,
            },
            Estudiante_Asignatura: {
                $id_asignatura: 1,
                $id_estudiante: 1,
                $calificacion_mt: 40,
                $calificacion_final: 100,
            },
            Config_Calif: {
                $nombre: "Configuracion de calificaciones",
                $estado: true
            }
        }
    }
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./app.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
    await import('./app.js'); // Your project's root file
});;