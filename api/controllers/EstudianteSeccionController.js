const { Estudiante_Seccion, Secciones, Asignatura } = require('../../db/models'); // Importa los modelos necesarios


const getEstudianteSeccion = async (req, res) => {
    try {
        const estudianteSeccion = await Estudiante_Seccion.findAll();
        return res.status(200).json({ estudianteSeccion });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const calcularIndice = async (req, res) => {
    try {
        const { id } = req.params;
        const secciones = await Estudiante_Seccion.findAll({
            where: {
                id_estudiante: id
            },
            include: [{
                model: Secciones,
                as: 'Secciones',
                include: {
                    model: Asignatura
                }
            }]
        });
        // console.log(secciones);
        let creditosPorCalificaciones = [];
        let totalCreditos = 0;

        for (var seccion in secciones) {
            let creditos = secciones[seccion].Secciones.Asignatura.creditos;
            let calificacion = secciones[seccion].calificacion_final;
            if (calificacion >= 90) calificacion = 4;
            else if (calificacion >= 85) calificacion = 3.5;
            else if (calificacion >= 80) calificacion = 3;
            else if (calificacion >= 75) calificacion = 2.5;
            else if (calificacion >= 70) calificacion = 2;
            let creditosPorCalificacion = creditos * calificacion;
            creditosPorCalificaciones.push(creditosPorCalificacion);
            totalCreditos += creditos;

            // console.log("creditosPorCalificacion ", creditosPorCalificacion, " totalCreditos ", totalCreditos);
        }

        let indice_general = 0;
        for (var i in creditosPorCalificaciones) {
            // console.log(indice_general);
            indice_general += creditosPorCalificaciones[i];
        }
        indice_general = (indice_general / totalCreditos);
        // console.log(indice_general);
        return indice_general;
    } catch (error) {
        return error.message;
    }
}

const calcularIndicePorPeriodo = async (req, res) => {
    try {
        const { id } = req.params;
        if (!(id)) {
            return { error: "Faltan parámetros" };
        }

        const calificaciones = await Estudiante_Seccion.findAll({
            where: {
                id_estudiante: id,
            },
            include: [{
                model: Secciones,
                as: 'Secciones',
                include: {
                    model: Asignatura
                }
            }]
        })
        return calificaciones;
    } catch (error) {
        return error.message;
    }
}


const createEstudianteSeccionFromCsv = async (row) => {
    try {
        const estudianteSeccion = await Estudiante_Seccion.create(row);
        return estudianteSeccion;
    } catch (error) {
        return { error: error.message };
    }
}

module.exports = {
    getEstudianteSeccion,
    createEstudianteSeccionFromCsv,
    calcularIndice,
    calcularIndicePorPeriodo
}
