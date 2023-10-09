"use client"
import React, { useState } from "react";
import { Button, IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";
import 'bootstrap/dist/css/bootstrap.css';
import Paper from "@mui/material/Paper";
import Image from "next/image";
import { useStyles } from "../layout";
import { Kanit } from "next/font/google";
import SidebarDocente from "@/components/Sidebar/sidebarDocente/SidebarDocente";
import CircleIcon from '@mui/icons-material/Circle';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Avatar from '@mui/material/Avatar';




const kanit = Kanit({ subsets: ['latin'], weight: ["400", "700"] })

const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%", // Centrar verticalmente en la pantalla
    position: "relative", // Permite superponer elementos
};


const wallpaperStyle = {
    backgroundColor: "#FFFFFF",
    minHeight: "100vh",
    minWidth: "100vw",
    display: "flex",
    backgroundImage: "url('/assets/configuracion.svg')",
    backgroundSize: "52%", // Ajustar el tamaño de la imagen para cubrir todo el fondo
    backgroundPosition: "90% -150%", 
    backgroundRepeat: "no-repeat",
};

const notificationsButtonStyle = {
    color: "black",
    marginTop: "5px",
    width: "35px",
    height: "35px",
    display: "flex",
    marginRight: "24px",
};

const notificationsIconStyle = {
    height: "35px",
    width: "35px",
    marginLeft: "2100px",
    marginTop: "-120px",
};


const paperStyle = {
    width: "472px",
    marginTop: "30px",
    marginLeft: "60px",
};

const divUserStyle = {
    display: "flex",
    flexDirection: "row",
    marginLeft: "220px",
    marginTop: "30px",
};

const userInfoStyle = {
    fontSize: "20px",
    marginLeft: "20px",
    marginTop: "10px",
    color: "#000000",
    width: "800px",
};


const paperBigConfig = {
    backgroundColor: "#F7F2FA",
    borderRadius: "40px",
    marginTop: "150px",
    marginRight: "10px",
    marginLeft: "-900px",
    height: "540px",
    width: "1100px",
}


const buttonStyle = {
    position: "absolute",
    top: "50%", // Centra verticalmente el botón en relación con el contenedor
    transform: "translateY(-50%)", // Alinea verticalmente el botón correctamente
    backgroundColor: "#e8def8",
    color: "black",
    marginTop: "-70px",
    borderRadius: "50px",
    padding: "10px 20px",
    zIndex: 1, // Coloca el botón por encima de la imagen
    marginLeft: "-32px",
    height: "30x",
};


const GuardarStyle = {
    position: "absolute",
    top: "50%", // Centra verticalmente el botón en relación con el contenedor
    transform: "translateY(-50%)", // Alinea verticalmente el botón correctamente
    backgroundColor: "#D0BCFF",
    color: "black",
    marginTop: "-298px",
    borderRadius: "50px",
    padding: "10px 20px",
    zIndex: 1, // Coloca el botón por encima de la imagen
    marginLeft: "850px",
    height: "30x",
    width: "100px",
};


export default function Configuración() {


    return (
        
        <div style={wallpaperStyle}>
            <div style={{ display: "flex" }}>
                <SidebarDocente />
                    <div style={divUserStyle}>
                        <Image src="https://github.com/JuanDanielU/DisBG/blob/main/Empty-profile-picture.png?raw=true" alt="Profile picture" height={80} width={80} />
                        <div style={userInfoStyle}>
                            Nombre: Nombre y Apellido<div>Id: ID</div>
                            <IconButton style={notificationsButtonStyle}>
                                <NotificationsIcon style={notificationsIconStyle} />
                            </IconButton>
                            <Button style={GuardarStyle}>
                                <div className={kanit.className} style={{ fontSize: "12px", textTransform: "none", fontWeight: "500", width: "270px", color: "#381E72" }}>
                                    Guardar
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
                <Paper elevation={3} style={paperBigConfig}>
                    <Paper elevation={0} style={paperStyle}>
                        <div style={{ fontWeight: "400", background: "#F7F2FA", fontSize: "32px", weight: "232px", height: "100px", marginTop: "-30px" }}>
                            Configuraciones
                        </div>
                        <div style={{ fontWeight: "400", background: "#F7F2FA", fontSize: "13px", weight: "232px", marginLeft: "-10px", marginTop: "-20px" }}>
                            Seguridad
                            <div>
                                <Button style={buttonStyle}>
                                    <CircleIcon style={{ height: "12px", width: "12px" }} />
                                    <div className={kanit.className} style={{ fontSize: "12px", textTransform: "none", marginLeft: "-50px", fontWeight: "500", width: "270px" }}>
                                        Cambiar contraseña
                                    </div>
                                </Button>
                            </div>
                            <div style={{ fontWeight: "400", background: "#F7F2FA", fontSize: "13px", weight: "232px", marginLeft: "2px", marginTop: "103px" }}>
                                Notificaciones
                                <FormControl>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="female"
                                        name="radio-buttons-group"
                                        style={{ marginTop: "50px", marginLeft: "-90px" }}
                                    >
                                        <FormControlLabel
                                            value="female"
                                            control={<Radio style={{ color: "#9370DB", marginLeft: "-160px" }} />}
                                            label={
                                                <div style={{ display: "flex", alignItems: "center" }}>
                                                    <CircleIcon style={{ height: "12px", width: "12px" }} />
                                                    <div
                                                        className={kanit.className}
                                                        style={{
                                                            fontSize: "12px",
                                                            textTransform: "none",
                                                            marginLeft: "10px",
                                                            fontWeight: "500",
                                                            width: "350px",
                                                        }}
                                                    >
                                                        Solo de mayor prioridad
                                                    </div>
                                                </div>
                                            }
                                            style={{ flexDirection: "row-reverse", marginLeft: "-10px", marginTop: "-20px" }}
                                        />
                                        <FormControlLabel
                                            value="male"
                                            control={<Radio style={{ color: "#9370DB", marginLeft: "-160px" }} />}
                                            label={
                                                <div style={{ display: "flex", alignItems: "center" }}>
                                                    <CircleIcon style={{ height: "12px", width: "12px" }} />
                                                    <div
                                                        className={kanit.className}
                                                        style={{
                                                            fontSize: "12px",
                                                            textTransform: "none",
                                                            marginLeft: "10px",
                                                            fontWeight: "500",
                                                            width: "350px",
                                                        }}
                                                    >
                                                        Deshabilitar notificaciones
                                                    </div>
                                                </div>
                                            }
                                            style={{ flexDirection: "row-reverse", marginLeft: "-10px" }}
                                        />
                                    </RadioGroup>
                                </FormControl>
                                <div style={{ fontWeight: "400", background: "#F7F2FA", fontSize: "13px", weight: "232px", marginLeft: "2px", marginTop: "40px" }}>
                                    Apariencia
                                    <FormControl>
                                        <RadioGroup
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            defaultValue="systemDefault"
                                            name="radio-buttons-group"
                                            style={{ marginTop: "50px", marginLeft: "-70px" }}
                                        >
                                            <FormControlLabel
                                                value="darkMode"
                                                control={<Radio style={{ color: "#9370DB", marginLeft: "-160px" }} />}
                                                label={
                                                    <div style={{ display: "flex", alignItems: "center" }}>
                                                        <Avatar style={{ backgroundColor: "#EADDFF", color: "#21005D", fontWeight: '600', fontSize: "12px", marginLeft: "-10px", height: "30px", width: "30px" }}>D</Avatar>
                                                        <div
                                                            className={kanit.className}
                                                            style={{
                                                                fontSize: "12px",
                                                                textTransform: "none",
                                                                marginLeft: "10px",
                                                                fontWeight: "500",
                                                                width: "350px",
                                                            }}
                                                        >
                                                            Modo Oscuro
                                                        </div>
                                                    </div>
                                                }
                                                style={{ flexDirection: "row-reverse", marginLeft: "-10px", marginTop: "-20px" }}
                                            />
                                            <FormControlLabel
                                                value="lightMode"
                                                control={<Radio style={{ color: "#9370DB", marginLeft: "-160px" }} />}
                                                label={
                                                    <div style={{ display: "flex", alignItems: "center" }}>
                                                        <Avatar style={{ backgroundColor: "#EADDFF", color: "#21005D", fontWeight: '600', fontSize: "12px", marginLeft: "-10px", height: "30px", width: "30px" }}>L</Avatar>
                                                        <div
                                                            className={kanit.className}
                                                            style={{
                                                                fontSize: "12px",
                                                                textTransform: "none",
                                                                marginLeft: "10px",
                                                                fontWeight: "500",
                                                                width: "350px",
                                                            }}
                                                        >
                                                            Modo Claro
                                                        </div>
                                                    </div>
                                                }
                                                style={{ flexDirection: "row-reverse", marginLeft: "-10px" }}
                                            />
                                            <FormControlLabel
                                                value="systemDefault"
                                                control={<Radio style={{ color: "#9370DB", marginLeft: "-160px" }} />}
                                                label={
                                                    <div style={{ display: "flex", alignItems: "center" }}>
                                                        <Avatar style={{ backgroundColor: "#EADDFF", color: "#21005D", fontWeight: '600', fontSize: "12px", marginLeft: "-10px", height: "30px", width: "30px" }}>S</Avatar>
                                                        <div
                                                            className={kanit.className}
                                                            style={{
                                                                fontSize: "12px",
                                                                textTransform: "none",
                                                                marginLeft: "10px",
                                                                fontWeight: "500",
                                                                width: "350px",
                                                            }}
                                                        >
                                                            System Default
                                                        </div>
                                                    </div>
                                                }
                                                style={{ flexDirection: "row-reverse", marginLeft: "-10px" }}
                                            />
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                            </div>
                        </div>
                </Paper>
            </Paper>
        </div>
    );
}
