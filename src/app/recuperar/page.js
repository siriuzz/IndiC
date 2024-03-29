"use client"
import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import Input from '@mui/material/Input';
import {
    Button,
    FormGroup,
    InputAdornment
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Paper } from "@mui/material";
import { Kanit } from "next/font/google";
import theme from "../theme";
import { useStyles } from "../layout";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import axios from 'axios';
var jwt = require('jsonwebtoken');
require('dotenv').config()

const kanit = Kanit({ subsets: ['latin'], weight: ["400", "700"] }) // Se usa para usar la fuente Kanit en los elementos que no se le aplica por defecto

const wallpaperStyle = {
    backgroundImage: "url('/assets/LoginWallpaper.svg')",
    backgroundColor: "white",
    backgroundSize: "contain",
    backgroundPosition: "right center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    minWidth: "100vw",
    display: "flex",
    flexDirection: "column",
}; //constante que contiene el estilo del fondo de pantalla

const correoInputStyle = {
    backgroundColor: theme.palette.background.input,
    marginTop: "10px",
    borderRadius: "40px",
    width: "420px",
    height: "50px",
    paddingLeft: "15px",
}; // constante que contiene el estilo del input de correo institucional

const passwordInputStyle = {
    backgroundColor: theme.palette.background.input,
    marginTop: "40px",
    borderRadius: "40px",
    width: "420px",
    height: "50px",
    paddingLeft: "15px",
}; // constante que contiene el estilo del input de contraseña

const checkboxStyle = {
    color: theme.palette.primary.main
}; // constante que contiene el estilo del checkbox

const checkboxLabelStyle = {
    marginRight: "104px",
    color: theme.palette.secondary.label
}; // constante que contiene el estilo del label del checkbox

const linkLabelStyle = {
    alignSelf: "center",
    color: theme.palette.secondary.label
}; // constante que contiene el estilo del label del link

const buttonStyle = {
    marginTop: "30px",
    borderRadius: "10px",
    borderColor: theme.palette.primary.main,
    width: "147px",
    alignSelf: "center",
    fontSize: "18px",
    textTransform: "capitalize",
}; // constante que contiene el estilo del botón de iniciar sesión

export default function Login() {
    const [showPassword, setShowPassword] = useState(false); // hooks para el input de contraseña
    const togglePasswordVisibility = () => { setShowPassword(!showPassword); };//función para mostrar la contraseña
    const [checked, setChecked] = useState(false); // hooks para el checkbox
    const [isLoading, setIsLoading] = useState(false);
    const [correo, setCorreo] = useState(""); // hooks para el input de correo institucional
    const [password, setPassword] = useState(""); // hooks para el input de contraseña

    const handleChangeCorreo = (event) => {
        setCorreo(event.target.value);
    }
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        // const formData = new FormData();
        // formData.append('correo', correo);
        // formData.append('password', password);
        const token = localStorage.getItem('jwtToken');
        if (token) {
            localStorage.removeItem('jwtToken');
        }
        await axios.post('http://localhost:3001/api/auth/login', {
            correo: correo,
            password: password
        }).then(function (response) {
            // apiResponse = response.data;
            // const token = signToken(apiResponse);
            localStorage.setItem('jwtToken', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.data));
            window.location.href = "/inicio_estudiante";

        }).catch(function (error) {
            console.log(error);
        }).finally(function () {
            console.log("axios executed")
        });


        setIsLoading(false);

    }; // función para el submit del formulario
    return (
        <div // Fondo de pantalla
            style={wallpaperStyle}>
            <Paper // paper que almacena el logo y el formulario
                style={useStyles.paperSmall}
                elevation={3}>
                <Image style={{ marginTop: "54px" }} // logo de la aplicación
                    src={"/assets/Logo.png"}
                    width={70}
                    height={160}
                    alt="Logo app"
                />
                <h2 style={{marginTop: "60px", fontSize: "24px"}}>Introduzca su correo institucional:</h2>
                <ThemeProvider // tema de la aplicación 
                    theme={theme}>
                    <form onSubmit={handleSubmit}>
                        <FormGroup // formulario de inicio de sesión
                            className={kanit.className}>
                            <Input // input de correo institucional 
                                id="correo" onChange={handleChangeCorreo} className={kanit.className} style={correoInputStyle} placeholder="Correo Institucional"
                            endAdornment={
                                <InputAdornment position="start">
                                    <MailOutlineIcon style={{marginRight: "5px", height: "30px", width: "30px"}}/>
                                </InputAdornment>
                            }
                            />
                            <Button // botón para iniciar sesión
                                onClick={handleSubmit}
                                variant="outlined"
                                className={kanit.className}
                                style={buttonStyle}
                                disabled={isLoading}
                            >
                                {isLoading ? 'Cargando...' : 'Recuperar'}</Button>
                        </FormGroup>
                    </form>

                </ThemeProvider>
            </Paper>
        </div>
    );
}
