"use client"
import React from 'react';
import Image from 'next/image';
import { IconButton, Button, ThemeProvider } from '@mui/material';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css'
import HomeOutlined from "@mui/icons-material/HomeOutlined";
import theme from '@/app/theme';
import {Kanit} from "next/font/google";
import Paper from '@mui/material/Paper';

//icons
import GradeOutlined from '@mui/icons-material/GradeOutlined';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import EditOutlined from '@mui/icons-material/EditOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

    const kanit = Kanit({ subsets: ['latin'], weight: ["400", "700"] })

    const menuButtonStyle = {
    marginTop: "0.5rem",
    color: "black",
    padding: "0.5rem 0.5rem",
    marginLeft: "8px"
};

const iconStyles = {
    width: "2rem",
    height: "2rem"
};

const logoContainerStyle = {
    display: "flex",
    marginRight: "10px",
    marginTop: "30px",
    justifyContent: "center",
};


const iconStyle = {
    display: "flex",
    color: "black",
    height: "35px",
    width: "35px",
    marginLeft: "-5px",
};

const bottomdivStyle = {
    marginTop: "auto",
    alignSelf: "bottom",
    marginBottom: "1rem"
};

export default function SidebarCloseEstudiante() {

    const [collapsed, setCollapsed] = React.useState("75px");
    const [display, setDisplay] = React.useState("none");
    const [backgroundColor, setBackgroundColor] = React.useState("transparent");
    const [backgroundColor2, setBackgroundColor2] = React.useState("transparent");
    const [contained, setContained] = React.useState("");
    const [border, setBorder] = React.useState("");
    const [elevation, setElevation] = React.useState(0);

    const toggleSidebar = () => {
        if (collapsed === "280px") {
            setCollapsed("75px");
            setDisplay("none");
            setBackgroundColor("transparent");
            setBackgroundColor2("transparent");
            setBorder("");
            setContained("");
            setElevation(0);
        }
        else {
            setCollapsed("280px");
            setDisplay("flex");
            setBackgroundColor("white");
            setBackgroundColor2("black");
            setContained("contained");
            setBorder("2px solid #a681e1");
            setElevation(3);
        }
    };

    const spanStyle = {
        display: display,
        color: "black",
        fontSize: "18px",
        marginLeft: "5px",
        marginTop: "3px"
    };

    const buttonStyle = {
        justifyContent: "left",
        backgroundColor: backgroundColor,
        color: "black",
        borderRadius: "20px",
        textTransform: "none",
        width: "96%",
        border: border
    };

    const buttonStyle2 = {
        justifyContent: "left",
        backgroundColor: backgroundColor,
        color: "black",
        borderRadius: "20px",
        textTransform: "none",
        width: "96%",
        border: border,
        marginTop: "10px"
    };

    return (
        <Paper elevation={elevation} style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            height: "100%",
            width: collapsed,
            backgroundColor: backgroundColor,
            borderTopRightRadius: "40px",
            borderBottomRightRadius: "40px",
            zindex: 1,
            paddingLeft: "0.7rem"
        }}>
            <ThemeProvider theme={theme}>
                <div>
                    <IconButton onClick={toggleSidebar} style={menuButtonStyle}>
                        <MenuOutlinedIcon style={iconStyles} />
                    </IconButton>
                    <div style={logoContainerStyle}>
                        <Image
                            src={"https://github.com/JuanDanielU/DisBG/blob/main/Logo.png?raw=true"}
                            width={50}
                            height={118}
                            alt="Logo app"
                        />
                    </div>
                </div>

                <hr
                    style={{
                        color: backgroundColor2,
                        height: 1.5,
                        width: "93%",
                        justifySelf: "center",
                        marginTop: "20px",
                        marginBottom: "20px"
                    }}
                ></hr>

                <div>
                    <Link href="/inicio_estudiante">
                        <Button style={buttonStyle} variant={contained}>
                            <HomeOutlined style={iconStyle} />
                            <span className={kanit.className} style={spanStyle}>Inicio</span>
                        </Button>
                    </Link>

                    <Link href="/calificaciones_estudiantes">
                        <Button style={buttonStyle2} variant={contained}>
                            <GradeOutlined style={iconStyle} />
                            <span className={kanit.className} style={spanStyle}>Calificaciones</span>
                        </Button>
                    </Link>

                    <Link href="/calculadora">
                        <Button style={buttonStyle2} variant={contained}>
                            <SignalCellularAltIcon style={iconStyle} />
                            <span className={kanit.className} style={spanStyle}>Calculadora de indice</span>
                        </Button>
                    </Link>

                    <Link href="/seleccionar_asignaturas">
                        <Button style={buttonStyle2} variant={contained}>
                            <EditOutlined style={iconStyle} />
                            <span className={kanit.className} style={spanStyle}>Selección</span>
                        </Button>
                    </Link>

                    <Link href="/cuenta_estudiante">
                        <Button style={buttonStyle2} variant={contained}>
                            <PeopleAltOutlinedIcon style={iconStyle} />
                            <span className={kanit.className} style={spanStyle}>Cuenta</span>
                        </Button>
                    </Link>
                </div>

                <div style={bottomdivStyle} >
                    <Link href="/configuracion_estudiante">
                        <Button style={buttonStyle2} variant={contained}>
                            <SettingsOutlinedIcon style={iconStyle} />
                            <span className={kanit.className} style={spanStyle}>Configuración</span>
                        </Button>
                    </Link>
                    <Link href="/login">
                        <Button style={buttonStyle2} variant={contained}>
                            <ExitToAppOutlinedIcon style={iconStyle} />
                            <span className={kanit.className} style={spanStyle}>Salir</span>
                        </Button>
                    </Link>
                </div>
            </ThemeProvider>
        </Paper>
    )
}