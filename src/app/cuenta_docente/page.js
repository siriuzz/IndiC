"use client"
import React from "react";
import styles from "./page.module.css";
import { Button, IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";
import EditIcon from "@mui/icons-material/EditOutlined";
import 'bootstrap/dist/css/bootstrap.css'
import Paper from "@mui/material/Paper";
import Image from "next/image";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Kanit } from '@next/font/google';
import Link from "next/link";

import axios from "axios";
import { useEffect } from "react";

import SidebarDocente from "@/components/Sidebar/sidebarDocente/sidebarDocente";
import { useStyles } from "../layout";


const kanit = Kanit({ subsets: ['latin'], weight: ["400", "700"] })

const editButtonStyle = {
    borderRadius: "20px",
    marginLeft: "-55px",
    marginTop: "165px",
    height: "35px",
    width: " -20px",
    backgroundColor: "#e4d1d1",
};

const apiURL = process.env.NEXT_PUBLIC_API_HOST + ":" + process.env.NEXT_PUBLIC_API_PORT;

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
    marginLeft: "700px",
    height: "30x"
};

export default function Perfil() {

    const [telefono, setTelefono] = React.useState("###-###-####");
    const [user, setUser] = React.useState({});

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        setUser(user);
        console.log(user.id);
        axios.get(`http://${apiURL}/api/Docentes/${user.id}`).then((res) => {
            const telefono = res.data.telefono;
            setTelefono(telefono);
        });
    }, []);

    return (
        <div className={styles.wallpaper}>
            <SidebarDocente />
            <Paper elevation={3}
                style={useStyles.paperBig}>

                <div className={styles.label}>
                    Bienvenido!
                    <IconButton className={styles.notificationsButton}>
                        <NotificationsIcon style={{ height: "35px", width: "35px" }} />
                    </IconButton>
                </div>
                <Paper elevation={0}>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <Image src="https://github.com/JuanDanielU/DisBG/blob/main/Empty-profile-picture.png?raw=true" alt="Profile picture" height={130} width={130} style={{ marginLeft: "60px", marginTop: "60px" }}
                        />
                        <IconButton style={editButtonStyle} variant="contained">
                            <EditIcon style={{ height: "20", width: "20", color: "#6750a4" }} />

                        </IconButton>
                        <div style={{ fontSize: "26px", marginLeft: "40px", marginTop: "70px" }}>
                            Nombre: {user.nombre}
                            <div>Id: {user.id}
                                <div>Estado: {user.id_estado == 1 ? "Activo" : "Inactivo"}</div>
                            </div>

                            <div>
                                <div style={{ fontWeight: '600', fontSize: "16px", marginTop: "60px", marginLeft: "-160px" }}>Correo Institucional</div>
                                <Link href="/" style={{ color: '#979797' }}>
                                    <div style={{ color: "#979797", fontWeight: '400', fontSize: "15px", marginTop: "0px", marginLeft: "-160px" }}>{user.correo} </div>
                                </Link>

                                <div style={{ fontWeight: '600', fontSize: "16px", marginTop: "20px", marginLeft: "-160px" }}>Teléfono</div>
                                <div style={{ color: "#979797", fontWeight: '400', fontSize: "15px", marginTop: "0px", marginLeft: "-160px" }}>849-587-6767  <Link href="/">
                                </Link></div>
                            </div>
                            <Button variant="contained" style={buttonStyle}>
                                <LockOpenIcon style={{ height: "20px", width: "18px", marginLeft: "-7px" }} />
                                <div className={kanit.className} style={{ fontSize: "16px", textTransform: "none", marginLeft: "5px" }}>
                                    Cambiar Contraseña
                                </div>
                            </Button>
                            <Image
                                src={"/assets/cuenta_docente.svg"}
                                style={{ height: "400px", width: "400px", marginLeft: "600px", marginTop: "-230px" }}
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
