"use client"
import React, { useEffect } from "react";
import styles from "./page.module.css";
import SidebarClose from "@/components/Sidebar/sidebarEstudiante/SidebarEstudiante";
import { Button, IconButton, colors } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";
import EditIcon from "@mui/icons-material/EditOutlined";
import 'bootstrap/dist/css/bootstrap.css'
import Paper from "@mui/material/Paper";
import Image from "next/image";
import { styled } from '@mui/material/styles';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Kanit } from '@next/font/google';
// import bootstrap from 'bootstrap';
import Link from "next/link";
import axios from "axios";
import Badge from '@mui/material/Badge';


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
    marginTop: "-200px",
    borderRadius: "50px",
    padding: "10px 20px",
    zIndex: 1, // Coloca el botón por encima de la imagen
    marginLeft: "700px",
    height: "30x"
};
const kanit = Kanit({ subsets: ['latin'], weight: ["400", "700"] })

const apiURL = process.env.NEXT_PUBLIC_API_HOST + ":" + process.env.NEXT_PUBLIC_API_PORT;

export default function Perfil() {
    const [user, setUser] = React.useState({});
    const [carrera, setCarrera] = React.useState({});
    const [telefono, setTelefono] = React.useState("###-###-####");
    const [condicionAcademica, setCondicionAcademica] = React.useState("Normal");

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        setCarrera(user.carrera);
        setUser(user);
        console.log(user.id)
        axios.get(`http://${apiURL}/api/Estudiantes/${user.id}`).then((res) => {
            const telefono = res.data.telefono;
            setTelefono(telefono);
        });
        if (user.indice_general > 3.0) {
            setCondicionAcademica("Normal");
        } else if (user.indice_general < 3.0 && user.indice_general > 2.0) {
            setCondicionAcademica("En Riesgo");
        } else {
            setCondicionAcademica("En Peligro");
        }
    }, []);
    
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
                    marginLeft: "5rem",
                    height: "92.3vh",
                    width: "100%",
                }}>

                <div className={styles.label}>
                    Bienvenido!
                    <IconButton className={styles.notificationsButton}>
                    <Badge badgeContent={1} color="secondary">
                        <NotificationsIcon style={{ height: "35px", width: "35px" }} />
                        </Badge>
                    </IconButton>
                </div>
                <Paper elevation={0} style={{}}>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <Image src="https://github.com/JuanDanielU/DisBG/blob/main/Empty-profile-picture.png?raw=true" alt="Profile picture" height={130} width={130} style={{ marginLeft: "60px", marginTop: "20px" }}
                        />
                        <EditButton variant="contained" style={{ marginTop: "130px" }} >
                            <EditIcon style={{ height: "20", width: "20", color: "#6750a4" }} />
                        </EditButton>

                        <div style={{ fontSize: "18px", color: "grey", marginLeft: "20px", marginTop: "30px" }}>
                            Nombre: <div style={{fontSize: "26px", color: "black"}}>{user.nombre}</div><div>ID: <div style={{fontSize: "26px", color: "black"}}>{user.id}</div><div>Carrera: <div style={{fontSize: "26px", color: "black"}}>{carrera.carrera}</div></div></div>

                            <div style={{ marginTop: "90px", color: "black" }}>
                                <div style={{ fontWeight: '600', fontSize: "16px", marginTop: "60px", marginLeft: "-160px" }}>Correo Institucional</div>
                                <Link href="/" style={{ color: '#979797' }}>
                                    <div style={{ color: "#979797", fontWeight: '400', fontSize: "15px", marginTop: "0px", marginLeft: "-160px" }}>{user.correo}</div>
                                </Link>

                                <div style={{ fontWeight: '600', fontSize: "16px", marginTop: "20px", marginLeft: "-160px" }}>Teléfono</div>
                                <div style={{ color: "#979797", fontWeight: '400', fontSize: "15px", marginTop: "0px", marginLeft: "-160px" }}>{telefono}</div>
                                <div style={{ fontWeight: '600', fontSize: "16px", marginTop: "20px", marginLeft: "-160px" }}>Condición Academica</div>
                                <div style={{ color: "#979797", fontWeight: '400', fontSize: "15px", marginTop: "0px", marginLeft: "-160px" }}>{condicionAcademica}</div>
                            </div>
                            <Button variant="contained" style={buttonStyle}>
                                <LockOpenIcon style={{ height: "20px", width: "18px", marginLeft: "-7px" }} />
                                <div className={kanit.className} style={{ fontSize: "16px", textTransform: "none", marginLeft: "5px" }}>
                                    Cambiar Contraseña
                                </div>
                            </Button>
                            <Image
                                src={"/assets/cuenta_estudiante.svg"}
                                style={{ height: "400px", width: "400px", marginLeft: "600px", marginTop: "-280px" }}
                                height={100}
                                width={100}
                                alt="Error image"
                            />
                        </div>
                    </div>
                </Paper>
            </Paper>
        </div >
    );
}
