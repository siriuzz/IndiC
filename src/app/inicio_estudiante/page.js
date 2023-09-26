"use client"
import React from "react";
import SidebarClose from "@/components/Sidebar/sidebarClose/SidebarClose";
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

export default function Perfil() {

    return (
        <div style={wallpaperStyle}>
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
                                    Nombres y Apellidos<div>Id<div>Carrera</div></div>
                                </div>
                            </div>
                        </Paper>
                        <div style={divIndiceGraphContainerStyle}>
                            <div style={divIndiceGraphStyle}>
                                <div style={divIndiceStyle}>
                                    3.58
                                </div>
                                <CircularProgress style={{marginLeft: "5px"}}size={180} variant="determinate" value={78} />
                            </div>
                            <div style={divIndiceTextStyle}>Indice General</div>
                        </div>
                    </div>
                    <div style={useStyles.divlinearProgressHead}>
                        3.88/4
                        <LinearProgress style={useStyles.linearProgress} variant="determinate" value={95} />
                        Mayo-Julio 2023
                    </div>
                    <div style={useStyles.divlinearProgress}>
                        3.88/4
                        <LinearProgress style={useStyles.linearProgress} variant="determinate" value={95} />
                        Febrero-Abril 2023
                    </div>
                    <div style={useStyles.divlinearProgress}>
                        3.88/4
                        <LinearProgress style={useStyles.linearProgress} variant="determinate" value={95} />
                        Noviembre-Febrero 2023
                    </div>
                    <Paper elevation={3} style={paperPeriodosStyle}>
                        8/14
                        <div style={paperFontStyle}>Periodos cursados</div>
                    </Paper>
                    <Paper elevation={3} style={paperAsignaturasStyle}>
                        60/120
                        <div style={paperFontStyle}>Asignaturas aprobadas</div>
                    </Paper>
                </ThemeProvider>
            </Paper>
        </div>
    );
}
