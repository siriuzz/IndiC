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

const divIndiceGraphStyle = {
    display: "flex",
    flexDirection: "column",
    marginRight: "50px",
    borderRadius: "50px",
    borderColor: "black",
    height: "319px",
    width: "316px",
    backgroundColor: "aliceblue",
    justifyContent: "center",
    marginTop: "-30px"
};

export default function Perfil() {

    const classes = useStyles();

    return (
        <div style={wallpaperStyle}>
            <SidebarClose />
            <Paper elevation={3} className={classes.paperBig}>
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
                        <div style={divIndiceGraphStyle}>
                            <div style={{ alignSelf: "center", width: "180px", height: "180px" }}>
                                <CircularProgress size={180} variant="determinate" value={78} />
                            </div>
                            <div style={{ fontSize: "24px", width: "155px", alignSelf: "center", marginTop: "20px" }}>Indice General</div>
                        </div>
                    </div>
                    <div className={classes.divlinearProgressHead}>
                        3.88/4
                        <LinearProgress className={classes.linearProgress} variant="determinate" value={95} />
                        Mayo-Julio 2023
                    </div>
                    <div className={classes.divlinearProgress}>
                        3.88/4
                        <LinearProgress className={classes.linearProgress} variant="determinate" value={95} />
                        Mayo-Julio 2023
                    </div>
                    <div className={classes.divlinearProgress}>
                        3.88/4
                        <LinearProgress className={classes.linearProgress} variant="determinate" value={95} />
                        Mayo-Julio 2023
                    </div>
                </ThemeProvider>
            </Paper>
        </div>
    );
}
