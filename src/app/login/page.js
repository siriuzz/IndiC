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
    marginTop: "70px",
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
    marginTop: "50px",
    borderRadius: "10px",
    borderColor: theme.palette.primary.main,
    width: "147px",
    alignSelf: "center",
    fontSize: "18px",
    textTransform: "capitalize",
}; // constante que contiene el estilo del botón de iniciar sesión

export default function Login() {

    const classes = useStyles(); // constante para almacenar los estilos de los papers
    const [showPassword, setShowPassword] = useState(false); // hooks para el input de contraseña
    const togglePasswordVisibility = () => { setShowPassword(!showPassword); };//función para mostrar la contraseña
    const [checked, setChecked] = useState(false); // hooks para el checkbox

    return (
        <div // Fondo de pantalla
            style={wallpaperStyle}>
            <Paper // paper que almacena el logo y el formulario
                className={classes.paperSmall}
                elevation={3}>
                <Image style={{ marginTop: "54px" }} // logo de la aplicación
                    src={"/assets/Logo.png"}
                    width={70}
                    height={160}
                    alt="Logo app"
                />
                <ThemeProvider // tema de la aplicación 
                    theme={theme}>
                    <FormGroup // formulario de inicio de sesión
                        className={kanit.className}>
                        <Input // input de correo institucional 
                            className={kanit.className} style={correoInputStyle} placeholder="Correo Institucional">
                        </Input>
                        <Input // input de contraseña
                            className={kanit.className}
                            style={passwordInputStyle}
                            placeholder="Contraseña"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={ // icono para mostrar la contraseña
                                <InputAdornment>
                                    <IconButton style={{ marginRight: "5px" }}
                                        onClick={togglePasswordVisibility}
                                        onMouseDown={(e) => e.preventDefault()}
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
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
                                    ¿Olvidó su contraseña?
                                </span>
                            </Link>
                        </div>
                        <Button // botón para iniciar sesión
                            variant="outlined" href="./inicio_estudiante"
                            className={kanit.className}
                            style={buttonStyle}
                        >Iniciar Sesión</Button>
                    </FormGroup>
                </ThemeProvider>
            </Paper>
        </div>
    );
}
