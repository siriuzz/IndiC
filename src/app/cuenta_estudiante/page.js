"use client"
import React from "react";
import styles from "./page.module.css";
import SidebarClose from "@/components/Sidebar/sidebarClose/SidebarClose";
import { Button, IconButton, colors } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";
import EditIcon from "@mui/icons-material/EditOutlined";
import 'bootstrap/dist/css/bootstrap.css'
import Paper from "@mui/material/Paper";
import Image from "next/image";
import { styled } from '@mui/material/styles';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Kanit } from '@next/font/google';
import Link from "next/link";

const kanit = Kanit({ subsets: ['latin'], weight: ["400", "700"] })

export default function Perfil() {

    const EditButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText("#e4d1d1"),
        backgroundColor: "#e4d1d1",
        '&:hover': {
            backgroundColor: "#a99b9b",
        },
        borderRadius: "20px",
        marginLeft: "-55px",
        marginTop: "165px",
        height: "35px",
        width: " -20px",
    }));


    const buttonStyle = {
        position: "absolute",
        top: "50%", // Centra verticalmente el botón en relación con el contenedor
        transform: "translateY(-50%)", // Alinea verticalmente el botón correctamente
        backgroundColor: "#f2f2f2",
        border: "solid",
        color: "#424874",
        marginTop: "-170px",
        borderRadius: "50px",
        padding: "10px 20px",
        zIndex: 1, // Coloca el botón por encima de la imagen
        marginLeft: "700px",
        height: "30x"
    };



    return (
        <div className={styles.wallpaper}>
            <SidebarClose />
            <Paper elevation={3}
                style={{
                    backgroundColor: "white",
                    borderRadius: "40px",
                    marginTop: "20px",
                    marginBottom: "20px",
                    marginRight: "20px",
                    height: "92.3vh",
                    width: "100%",
                }}>

                <div className={styles.label}>
                    Bienvenido!
                    <IconButton className={styles.notificationsButton}>
                        <NotificationsIcon style={{ height: "35px", width: "35px" }} />
                    </IconButton>
                </div>
                <Paper elevation={0} style={{}}>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <Image src="https://github.com/JuanDanielU/DisBG/blob/main/Empty-profile-picture.png?raw=true" alt="Profile picture" height={130} width={130} style={{ marginLeft: "60px", marginTop: "60px" }}
                        />
                        <EditButton variant="contained">
                            <EditIcon style={{ height: "20", width: "20", color: "#6750a4" }} />
                        </EditButton>
                        <div style={{ fontSize: "26px", marginLeft: "20px", marginTop: "70px" }}>
                            Nombres y Apellidos<div>ID<div>Carrera</div></div>
                            <div>
                                <div style={{ fontWeight: '600', fontSize: "16px", marginTop: "60px", marginLeft: "-160px" }}>Correo Institucional</div>
                                <Link href="/" style={{ color: '#979797' }}>
                                    <div style={{ color: "#979797", fontWeight: '400', fontSize: "15px", marginTop: "0px", marginLeft: "-160px" }}>juandu@example.com </div>
                                </Link>
                                <div style={{ fontWeight: '600', fontSize: "16px", marginTop: "20px", marginLeft: "-160px" }}>Email</div>
                                <Link href="/" style={{ color: '#979797' }}>
                                    <div style={{ color: "#979797", fontWeight: '400', fontSize: "15px", marginTop: "0px", marginLeft: "-160px" }}>kelvinga@example.com<Link href="/"> <EditIcon style={{ height: "20", width: "20", color: "#6750a4", marginLeft: "20px", marginTop: "-5px" }} />
                                    </Link></div>
                                </Link>
                                <div style={{ fontWeight: '600', fontSize: "16px", marginTop: "20px", marginLeft: "-160px" }}>Teléfono</div>
                                <div style={{ color: "#979797", fontWeight: '400', fontSize: "15px", marginTop: "0px", marginLeft: "-160px" }}>849-587-6767  <Link href="/"><EditIcon style={{ height: "20", width: "20", color: "#6750a4", marginLeft: "10px", marginTop: "-5px" }} />
                                </Link></div>
                                <div style={{ fontWeight: '600', fontSize: "16px", marginTop: "20px", marginLeft: "-160px" }}>Condición Academica</div>
                                <div style={{ color: "#979797", fontWeight: '400', fontSize: "15px", marginTop: "0px", marginLeft: "-160px" }}>Normal</div>

                            </div>
                            <Button variant="contained" style={buttonStyle}>
                                <LockOpenIcon style={{ height: "20px", width: "18px", marginLeft: "-7px" }} />
                                <div className={kanit.className} style={{ fontSize: "16px", textTransform: "none", marginLeft: "5px" }}>
                                    Cambiar Contraseña
                                </div>
                            </Button>
                            <Image
                                src={"/assets/cuenta_estudiante.svg"}
                                style={{ height: "400px", width: "400px", marginLeft: "600px", marginTop: "-400px" }}
                                height={100}
                                width={100}
                                alt="Error image"
                            />
                        </div>
                    </div>
                </Paper>
            </Paper>
        </div>
    );
}