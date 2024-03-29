const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' })
require('dotenv').config()

const doc = {
    info: {
        title: 'IndiC API',
        description: 'Esta es la documentación de la API de IndiC',
    },
    host: `${process.env.NEXT_PUBLIC_API_HOST}:${process.env.NEXT_PUBLIC_API_PORT}`,
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
                $salt: "1234567890",

                $fecha_registro: "2021-09-19",
                $direccion: "Calle 123",
                $id_carrera: 1,
                $id_estado: 1,
                $id_rol: 1,
                $periodos_cursados: 1,
                $asignaturas_aprobadas: 1,
                $configuracion: JSON.stringify({ "config": "config" }),
                $indice_general: 3.5
            },
            Docente: {
                $nombre: 'Juana Doe',
                $correo: 'juana@email.com',
                $telefono: '1234567890',
                $cedula: '1234567890',
                $password: '1234567890',
                $salt: '1234567890',
                $fecha_registro: '2021-09-19',
                $direccion: 'Calle 123',
                $id_estado: 1,
                $id_rol: 1,
                $configuracion: JSON.stringify({ "config": "config" }),
            },
            Asignatura: {
                $nombre: "Programacion I",
                $codigo: "1234",
                $creditos: "4"
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
            Estudiante_Seccion: {
                $id_asignatura: 1,
                $id_estudiante: 1,
                $calificacion_mt: 40,
                $calificacion_final: 100,
                $periodo: 1
            },
            Seccion: {
                $numero: 1,
                $id_docente: 1,
                $id_asignatura: 1,
                $id_horario: 1,
                $periodo: 1,
                $year: "2021-09-19",
                $aula: "Aula 1",
                $is_active: true,
                $calificacion_base_mt: 40
            },
            Horario: {
                $dia: 1,
                $hora_inicio: 8,
                $hora_fin: 10
            },
            Config_Calif: {
                $nombre: "Configuracion de calificaciones",
                $estado: true
            },
            Admin: {
                $nombre: "Julio Doe",
                $correo: "123@gmail.com",
                $telefono: "1234567890",
                $cedula: "1234567890",
                $password: "1234567890",
                $salt: "1234567890",
                $fecha_registro: "2021-09-19",
                $direccion: "Calle 123",
                $id_estado: 1,
                $id_rol: 1,
                $configuracion: JSON.stringify({ "config": "config" })
            }
        }
    }
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./app.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);