"use client"
import React, { useEffect, useState } from "react";
import SidebarCloseDocente from "@/components/Sidebar/sidebarDocente/sidebarDocente";
import { Button, IconButton } from "@mui/material";
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
import { Jost, Kanit } from "next/font/google";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import theme from "../theme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import axios from "axios";

ChartJS.register(
    Title, Tooltip, LineElement,
    CategoryScale, LinearScale, PointElement, Filler
)

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
    width: "35px",
    marginTop: "-30px"
};

const labelStyle = {
    fontWeight: "bold",
    fontSize: "48px",
    display: "flex",
    marginLeft: "80px",
    marginTop: "30px",
    justifyContent: "space-between",
};

const divUserStyle = {
    display: "flex",
    float: "right",
    marginLeft: "90px",
    marginTop: "40px"
};

const userInfoStyle = {
    fontSize: "30px",
    marginLeft: "50px",
    marginTop: "5px",
    width: "280px",
};

const CalendarStyle = {
    fontSize: "24px",
    float: "right",
    marginRight: "90px",
    marginTop: "-60px",
    height: "310px",
    borderRadius: "10px",
    border: "2px solid #A6B1E1"
};

const LinearStyle = {
    width: "570px",
    height: "auto",
    marginTop: "-10px",
    marginLeft: "80px",
}

const AsignaturaStyle = {
    fontSize: "24px",
    height: "300px",
    fontFamily: kanit,
    fontStyle: "bold",
    float: "right",
    marginRight: "60px",
    borderRadius: "10px",
    marginTop: "20px",
    overflowY: "auto"
};

const EachAsignaturaStyle = {
    backgroundColor: "#f4eeff",
    borderRadius: "5px",
    width: "370px",
    justifySelf: "center",
    marginLeft: "10px",
    marginTop: "5px",
    marginBottom: "10px",
};

const apiURL = process.env.NEXT_PUBLIC_API_HOST + ":" + process.env.NEXT_PUBLIC_API_PORT;


export default function Inicio_docente() {
    const [value, setValue] = useState(dayjs());
    const [profesor, setProfesor] = useState({}); //almacena variables del profesor que realizo el login



    // useEffect(() => {
    //     setValue(dayjs());
    //     setProfesor(JSON.parse(localStorage.getItem("user")));
    //     axios.post(`http://${apiURL}/api/token/validate`, { token: localStorage.getItem(`${process.env.NEXT_PUBLIC_JWT_NAME}`) }).then((response) => {
    //         // console.log("this is the data");
    //     }).catch((error) => {
    //         console.log(error);
    //         localStorage.removeItem(`${process.env.NEXT_PUBLIC_JWT_NAME}`);
    //         window.location.href = '/login';
    //     });
    //     // console.log(profesor);
    // }, []);

    const [data, setData] = useState({
        labels: ["IDS323", "IDS311", "IDS326", "IDS325", "IDS323L"],
        datasets: [
            {
                height: "40px",
                label: "Promedio de calificaciones",
                data: [80, 70, 85, 63, 75],
                backgroundColor: [
                    'rgba(166, 177, 225, 0.8)',
                ],
                borderColor: '#0052B4',
                tension: 0.4,
                fill: true,
                pointStyle: 'circ',
                pointBorderColor: 'blue',
                pointBackgroundColor: '#E4D1D1',
                showLine: true
            }
        ]
    });

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
                <ThemeProvider theme={theme}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={divUserStyle}>
                            <Image src="https://github.com/JuanDanielU/DisBG/blob/main/Empty-profile-picture.png?raw=true" alt="Profile picture" height={150} width={150} />
                            <div style={userInfoStyle}>
                                Nombre: {" " + profesor.nombre}<br></br>
                                Id: {" " + profesor.id}<div>Estado: {" " + profesor.id_estado == 1 ? "Activo" : "Inactivo"}</div>
                            </div>
                        </div>
                        <Paper elevation={2} style={CalendarStyle}>
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
                        </Paper>
                    </div>
                    <Paper elevation={6} style={AsignaturaStyle}>
                        <List sx={{ width: "390px", paddingY: "0px" }}>

                            <div style={{ marginLeft: "15px", marginTop: "5px", fontSize: "18px" }}>Asignaturas a impartir<Button style={{ float: "right", marginRight: "10px", marginTop: "-1.5px", fontSize: "12px", textTransform: "none", textDecoration: "underline" }}>Ver todo</Button></div>
                            {
                                profesor.secciones && profesor.secciones.map((seccion) => {
                                    return (
                                        <div style={EachAsignaturaStyle} key={seccion.id}>
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar style={{ backgroundColor: '#A6B1E1' }}>
                                                        <BookmarkBorderOutlinedIcon />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText primary={seccion.Asignatura.nombre} secondary={"Sección " + seccion.numero + " " + seccion.aula} />
                                            </ListItem>
                                        </div>
                                    )
                                })
                            }
                            {
                                // <div style={EachAsignaturaStyle}>
                                //     <ListItem>
                                //         <ListItemAvatar>
                                //             <Avatar style={{ backgroundColor: '#A6B1E1' }}>
                                //                 <BookmarkBorderOutlinedIcon />
                                //             </Avatar>
                                //         </ListItemAvatar>
                                //         <ListItemText primary="IDS325 - Aseguramiento de la Calidad" secondary="Sección 01 GC302" />
                                //     </ListItem>
                                // </div>
                                // <div style={EachAsignaturaStyle}>
                                //     <ListItem>
                                //         <ListItemAvatar>
                                //             <Avatar style={{ backgroundColor: '#A6B1E1' }}>
                                //                 <BookmarkBorderOutlinedIcon />
                                //             </Avatar>
                                //         </ListItemAvatar>
                                //         <ListItemText primary="IDS311 - Proceso de Software" secondary="Sección 05 AH101" />
                                //     </ListItem>
                                // </div>
                                // <div style={EachAsignaturaStyle}>
                                //     <ListItem>
                                //         <ListItemAvatar>
                                //             <Avatar style={{ backgroundColor: '#A6B1E1' }}>
                                //                 <BookmarkBorderOutlinedIcon />
                                //             </Avatar>
                                //         </ListItemAvatar>
                                //         <ListItemText primary="IDS326 - Construcción de Software" secondary="Sección 02 FD411" />
                                //     </ListItem>
                                // </div>
                            }
                        </List>
                    </Paper>
                    <div style={LinearStyle}>
                    <div>Promedio de calificaciones por asignatura: </div>
                        <Line data={data} />
                    </div>
                </ThemeProvider>
            </Paper>
        </div>
    );
}
