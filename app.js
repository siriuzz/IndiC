const express = require('express')
const app = require('./express-config');
const estudiantesRoutes = require('./api/users/estudiante');

app.use('/Estudiantes', estudiantes);