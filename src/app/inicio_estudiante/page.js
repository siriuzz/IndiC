"use client"
import React from "react";
import SidebarClose from "@/components/Sidebar/sidebarEstudiante/SidebarEstudiante";
import { IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";
import 'bootstrap/dist/css/bootstrap.css'
import Paper from "@mui/material/Paper";
import Image from "next/image";
import { useStyles } from "../layout";
import { Kanit } from "next/font/google";
import LinearProgress from "@mui/material/LinearProgress";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import theme from "../theme";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { useEffect, useState } from "react";
// const checkTokenValidity = require("@/utils/jwtValidation").checkTokenValidity;


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
    justifyContent: "space-between"
};

const paperStyle = {
    width: "472px",
    marginTop: "30px",
    marginLeft: "60px",
    display: "flex",
};

const divUserStyle = {
    display: "flex",
    flexDirection: "row",
};

const divUserInfoStyle = {
    fontSize: "26px",
    marginLeft: "40px",
    marginTop: "10px",
    width: "250px",
};

const divIndiceGraphContainerStyle = {
    display: "flex",
    flexDirection: "column",
    marginRight: "50px",
    borderRadius: "50px",
    border: "solid 1px #a681e1",
    height: "319px",
    width: "316px",
    justifyContent: "center",
    marginTop: "-35px",
};

const divIndiceGraphStyle = {
    alignSelf: "center",
    width: "180px",
    height: "180px"
};

const divIndiceStyle = {
    display: "flex",
    position: "absolute",
    marginTop: "65px",
    marginLeft: "68px",
    fontSize: "36px"
};

const divIndiceTextStyle = {
    fontSize: "24px",
    width: "155px",
    marginLeft: "15px",
    alignSelf: "center",
    marginTop: "20px"
};

const paperPeriodosStyle = {
    float: "right",
    borderRadius: "60px",
    border: "2px solid",
    borderColor: theme.palette.primary.main,
    fontSize: "26px",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ebdfe6",
    marginTop: "-210px",
    marginRight: "85px",
    display: "flex",
    flexDirection: "column",
    height: "100px",
    width: "250px",
    fontWeight: "600"
};

const paperAsignaturasStyle = {
    float: "right",
    borderRadius: "60px",
    border: "2px solid",
    borderColor: theme.palette.primary.main,
    fontSize: "26px",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ebdfe6",
    marginRight: "85px",
    marginTop: "-80px",
    display: "flex",
    flexDirection: "column",
    height: "100px",
    width: "250px",
    fontWeight: "600"
};

const paperFontStyle = {
    fontSize: "20px",
    fontWeight: "100",
    fontStyle: "italic"
};

const apiURL = process.env.NEXT_PUBLIC_API_HOST + ":" + process.env.NEXT_PUBLIC_API_PORT;

export default function Perfil() {
    // const [nombre, setNombre] = useState("");
    // const [id, setId] = useState("");
    // const [carrera, setCarrera] = useState("");
    // const [indice, setIndice] = useState(0);
    // const [periodosCursados, setPeriodosCursados] = useState(0);
    const [estudiante, setEstudiante] = useState({});
    const [carrera, setCarrera] = useState({});//[{}]
    const [asignaturasAprobadas, setAsignaturasAprobadas] = useState(0);
    // const [periodosTotales, setPeriodosTotales] = useState(0);
    const [asignaturasTotales, setAsignaturasTotales] = useState(0);
    const apiURL = process.env.NEXT_PUBLIC_API_HOST + ":" + process.env.NEXT_PUBLIC_API_PORT;

    useEffect(() => {
        // const storedEstudiante = JSON.parse(localStorage.getItem('user'));
        // if (storedEstudiante) {
        //     setEstudiante(storedEstudiante);
        // }
        // console.log(estudiante);
        axios.post(`http://${apiURL}/api/token/validate`, { token: localStorage.getItem(`${process.env.NEXT_PUBLIC_JWT_NAME}`) }).then((response) => {
            // console.log(response.data); 
            const user = JSON.parse(localStorage.getItem('user'));
            // console.log(data);
            if (user) {
                // console.log(estudiante);
                setEstudiante(user);
                setCarrera(user.carrera);
                console.log(user);
                // setId(estudiante.id);
                // setNombre(estudiante.nombre);
                // setIndice(estudiante.indice_general);
                // axios.get(`http://${apiURL}/api/Carreras/${estudiante.id_carrera}`).then((response) => {
                //     // console.log(response.data);
                //     setCarrera(response.data.carrera);
                //     setPeriodosTotales(response.data.periodos_totales);
                //     setAsignaturasTotales(response.data.asignaturas_totales);

                // });
                // setPeriodosCursados(estudiante.periodos_cursados);
                // setAsignaturasAprobadas(estudiante.asignaturas_aprobadas);

            };

        }).catch((error) => {
            console.log(error);
            localStorage.removeItem(`${process.env.NEXT_PUBLIC_JWT_NAME}`);
            window.location.href = '/login';
        });

        // console.log(token);
        // Send a request to your server to validate the token
        // async function validateToken() {
        //     const valid = await checkTokenValidity(token);
        //     console.log("Este es el resultado de la validacion " + valid);
        //     if (!valid) {
        //         localStorage.removeItem('jwtToken');
        //         window.location.href = '/login';
        //     }
        // }
        // validateToken();
    }, []);
    return (
        < div style={wallpaperStyle} >
            <SidebarClose />
            <Paper elevation={3} style={useStyles.paperBig}>
                <div className={kanit.className} style={labelStyle}>
                    Bienvenido!
                    <IconButton style={notificationsButtonStyle}>
                        <NotificationsIcon style={notificationsIconStyle} />
                    </IconButton>
                </div>
                <ThemeProvider theme={theme}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Paper elevation={0} style={paperStyle}>
                            <div style={divUserStyle}>
                                <Image src="https://github.com/JuanDanielU/DisBG/blob/main/Empty-profile-picture.png?raw=true" alt="Profile picture" height={150} width={150}
                                />
                                <div style={divUserInfoStyle}>
                                    {/* Nombres y Apellidos
                                    <div>
                                        Id
                                        <div>
                                            Carrera
                                        </div>
                                    </div> */
                                    }
                                    <div>Nombre: {" " + estudiante.nombre}</div>
                                    <div>Id: {" " + estudiante.id}</div>
                                    <div>Carrera: {" " + estudiante.carrera ? estudiante.carrera.carrera : " "}</div>
                                    {/* <div>{data.id}</div>
                                    <div>{data.id_carrera}</div> */}
                                </div>
                            </div>
                        </Paper>
                        <div style={divIndiceGraphContainerStyle}>
                            <div style={divIndiceGraphStyle}>
                                <div style={divIndiceStyle}>
                                    {estudiante.indice_general ? estudiante.indice_general.toFixed(2) : " "}
                                </div>
                                <CircularProgress style={{ color: "#ebdfe6", marginLeft: "5px" }} size={180} variant="determinate" value={100} />
                                <CircularProgress style={{ marginTop: "-186px", marginLeft: "5px", display: "flex" }} size={180} variant="determinate" value={(estudiante.indice_general * 100) / 4} />
                            </div>
                            <div style={divIndiceTextStyle}>Índice General</div>
                        </div>
                    </div>
                    <div style={useStyles.divlinearProgressHead}>
                        3.88/4.0
                        <LinearProgress style={useStyles.linearProgress} variant="determinate" value={95} />
                        Mayo-Julio 2023
                    </div>
                    <div style={useStyles.divlinearProgress}>
                        3.88/4.0
                        <LinearProgress style={useStyles.linearProgress} variant="determinate" value={95} />
                        Febrero-Abril 2023
                    </div>
                    <div style={useStyles.divlinearProgress}>
                        3.88/4.0
                        <LinearProgress style={useStyles.linearProgress} variant="determinate" value={95} />
                        Noviembre-Febrero 2023
                    </div>
                    <Paper elevation={3} style={paperPeriodosStyle}>
                        {estudiante.periodos_cursados}/{carrera.periodos_totales}
                        <div style={paperFontStyle}>Periodos cursados</div>
                    </Paper>
                    <Paper elevation={3} style={paperAsignaturasStyle}>
                        {estudiante.asignaturas_aprobadas}/{carrera.asignaturas_totales}
                        <div style={paperFontStyle}>Asignaturas aprobadas</div>
                    </Paper>
                </ThemeProvider>
            </Paper>
        </div >
    );
}
