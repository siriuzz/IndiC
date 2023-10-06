"use client"
import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import Input from '@mui/material/Input';
import {
    Button,
    FormControlLabel,
    FormGroup,
    InputAdornment
} from "@mui/material";
import { Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import { Checkbox } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Paper } from "@mui/material";
import Link from "next/link";
import { Kanit } from "next/font/google";
import theme from "../theme";
import { useStyles } from "../layout";
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
    flexDirection: "",
}; //constante que contiene el estilo del fondo de pantalla

const correoInputStyle = {
    backgroundColor: theme.palette.background.input,
    marginTop: "20px",
    borderRadius: "40px",
    width: "420px",
    height: "50px",
    paddingLeft: "15px",
}; // constante que contiene el estilo del input de correo institucional

const passwordInputStyle = {
    backgroundColor: theme.palette.background.input,
    marginTop: "30px",
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
    color: theme.palette.secondary.label,
    marginTop: "-2px",
    marginLeft: "25px",
    textDecoration: "underline",
}; // constante que contiene el estilo del label del link

const buttonStyle = {
    marginTop: "40px",
    borderRadius: "10px",
    borderColor: theme.palette.primary.main,
    width: "147px",
    alignSelf: "center",
    fontSize: "18px",
    textTransform: "capitalize",
}; // constante que contiene el estilo del botón de iniciar sesión

// const apiURL = process.env.NEXT_PUBLIC_API_HOST + ":" + process.env.NEXT_PUBLIC_API_PORT;
const apiURL = process.env.NEXT_PUBLIC_API_HOST + ":" + process.env.NEXT_PUBLIC_API_PORT;

export default function Login() {
    const [showPassword, setShowPassword] = useState(false); // hooks para el input de contraseña
    const togglePasswordVisibility = () => { setShowPassword(!showPassword); };//función para mostrar la contraseña
    const [checked, setChecked] = useState(false); // hooks para el checkbox
    const [isLoading, setIsLoading] = useState(false);
    const [correo, setCorreo] = useState(""); // hooks para el input de correo institucional
    const [password, setPassword] = useState(""); // hooks para el input de contraseña
    const [displayEML, setDisplayEML] = useState("none"); // hooks para desplegar el error de correo invalido
    const [displayPWD, setDisplayPWD] = useState("none"); // hooks para desplegar el error de contraseña invalida
    const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9][a-zA-Z0-9]+$/;

    const handleChangeCorreo = (event) => {
        const isValid = regex.test(event.target.value);
        if (!isValid) {
            setDisplayEML("flex");
        }
        else {
            setDisplayEML("none");
        }
        if (event.target.value === "") {
            setDisplayEML("none");
            setDisplayPWD("none");
        }
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
        const token = localStorage.getItem(`${process.env.NEXT_PUBLIC_JWT_NAME}`);
        if (token) {
            localStorage.removeItem(`${process.env.NEXT_PUBLIC_JWT_NAME}`);
        }
        await axios.post(`http://${apiURL}/api/auth/login`, {
            correo: correo,
            password: password
        }).then(function (response) {
            // apiResponse = response.data;
            // const token = signToken(apiResponse);
            localStorage.setItem(`${process.env.NEXT_PUBLIC_JWT_NAME}`, response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            if (response.data.user.rol === 'Estudiante') {
                console.log("redireccionando estudiante");
                window.location.href = "/inicio_estudiante";
            }
            else if (response.data.user.rol === 'Docente') {
                console.log("redireccionando docente");
                window.location.href = "/inicio_docente";
            } else if (response.data.user.rol === 'Administrador') {
                console.log("redireccionando administrador");
                window.location.href = "/inicio_administrador";
            }
            // else if (response.data.data.rol === 'Administrador')
            //     window.location.href = "/inicio_administrador";

        }).catch(function (error) {
            setDisplayPWD("flex");
            console.log(error.message);
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
                <div style={{ display: "inline-flex", fontSize: "46px", marginTop: "10px" }}> Iniciar<div style={{ color: theme.palette.primary.dark, marginLeft: "10px" }}>Sesión</div></div>
                <ThemeProvider // tema de la aplicación 
                    theme={theme}>
                    <form onSubmit={handleSubmit}>
                        <FormGroup // formulario de inicio de sesión
                            className={kanit.className}>
                            <Input // input de correo institucional 
                                id="correo" onChange={handleChangeCorreo}
                                className={kanit.className}
                                style={correoInputStyle}
                                placeholder="Correo Institucional"
                            />
                            <div style={{
                                color: "red",
                                display: displayEML,
                                marginBottom: "-24px"
                            }} role="alert">Correo invalido!</div>
                            <Input // input de contraseña
                                id="password"
                                className={kanit.className}
                                style={passwordInputStyle}
                                placeholder="Contraseña"
                                type={showPassword ? 'text' : 'password'}
                                onChange={handleChangePassword}
                                endAdornment={ // icono para mostrar la contraseña
                                    <InputAdornment position="start">
                                        <IconButton
                                            onClick={togglePasswordVisibility}
                                            onMouseDown={(e) => e.preventDefault()}
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                            <div style={{
                                color: "red",
                                display: displayPWD,
                            }}>Credenciales invalidas, intente nuevamente.</div>
                            <div // div que contiene el checkbox y el link de recuperar contraseña
                                style={{ display: "inline-flex" }} >
                                <FormControlLabel
                                    control={
                                        <Checkbox // checkbox para recordar usuario
                                            style={checkboxStyle}
                                            value="check"
                                            checked={checked}
                                            onChange={() => {
                                                setChecked(!checked);
                                            }}
                                        />
                                    } label={
                                        <span className={kanit.className} style={checkboxLabelStyle}>Recuérdame</span>
                                    } />
                                <Link // link para recuperar contraseña
                                    href="/recuperar" style={{ display: "flex" }}>
                                    <span style={linkLabelStyle}>
                                        Recordar contraseña
                                    </span>
                                </Link>
                            </div>
                            <Button // botón para iniciar sesión
                                onClick={handleSubmit}
                                variant="outlined"
                                className={kanit.className}
                                style={buttonStyle}
                                disabled={isLoading}
                            >
                                {isLoading ? 'Cargando...' : 'Iniciar Sesión'}</Button>
                        </FormGroup>
                    </form>
                </ThemeProvider>
            </Paper>
        </div>
    );
}
