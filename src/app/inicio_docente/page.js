"use client"
import React, { useEffect } from "react";
import SidebarCloseDocente from "@/components/Sidebar/sidebarCloseDocente/sidebarCloseDocente";
import { IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";
import 'bootstrap/dist/css/bootstrap.css';
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Paper from "@mui/material/Paper";
import Image from "next/image";
import { useStyles } from "../layout";
import { Kanit } from "next/font/google";

const kanit = Kanit({ subsets: ['latin'], weight: ["400", "700"] })

const wallpaperStyle = {
    backgroundColor: "#dcd6f7",
    minHeight: "100vh",
    minWidth: "100vw",
    display: "flex",
    justifyContent: "left",
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
    width: "35px"
};

const labelStyle = {
    fontWeight: "bold",
    fontSize: "48px",
    display: "flex",
    marginLeft: "40px",
    marginTop: "10px",
    justifyContent: "space-between",
};

const paperStyle = {
    width: "472px",
    marginTop: "30px",
    marginLeft: "60px",
};

const divUserStyle = {
    display: "flex",
    flexDirection: "row"

};

const userInfoStyle = {
    fontSize: "26px",
    marginLeft: "40px",
    marginTop: "10px"
};

const CalendarStyle = {
    fontSize: "26px",
    marginLeft: "600px",
    marginTop: "-20 px",
    font: "Kanit",
};



export default function Inicio_docente() {
    const [value, setValue] = React.useState(dayjs()); // Inicializa con la fecha actual

    // Utiliza useEffect para establecer el valor inicial
    useEffect(() => {
        setValue(dayjs());
    }, []);

    // Define el estilo de fuente para el calendario

    return (
        <div style={wallpaperStyle}>
            <SidebarCloseDocente />
            <Paper elevation={3} style={useStyles.paperBig}>
                <div className={kanit.className} style={labelStyle}>
                    Bienvenido!
                    <IconButton style={notificationsButtonStyle}>
                        <NotificationsIcon style={notificationsIconStyle} />
                    </IconButton>
                </div>
                <Paper elevation={0} style={paperStyle}>
                    <div style={{ display: "flex" }}>
                        <div style={divUserStyle}>
                            <Image src="https://github.com/JuanDanielU/DisBG/blob/main/Empty-profile-picture.png?raw=true" alt="Profile picture" height={150} width={150} />
                            <div style={userInfoStyle}>
                                Nombres y Apellidos<div>Area Academica</div>
                            </div>
                        </div>
                        <div style={CalendarStyle}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DateCalendar', 'DateCalendar']}>
                                    <DemoItem>
                                        <DateCalendar
                                            value={value}
                                            onChange={(newValue) => setValue(newValue)}
                                        />
                                    </DemoItem>
                                </DemoContainer>
                            </LocalizationProvider>
                        </div>
                    </div>
                </Paper>
            </Paper>
        </div>
    );
}
