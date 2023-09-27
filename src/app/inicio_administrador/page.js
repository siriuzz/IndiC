"use client"
import React from "react";
import SidebarCloseAdministrador from "@/components/Sidebar/sidebarCloseAdministrador/sidebarCloseAdministrador";
import { IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";
import 'bootstrap/dist/css/bootstrap.css'
import Paper from "@mui/material/Paper";
import Image from "next/image";
import { useStyles } from "../layout";
import { Kanit } from "next/font/google";
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
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

const BotonEstudiantesStyle = {
    height: "100px",
    width: "100px",
    marginRight: "5px",
    marginLeft: "-530px",
    marginTop: "-90px",
}

const divIndiceGraphContainerStyle = {
    display: "flex",
    flexDirection: "column",
    marginRight: "520px",
    marginLeft: "85px",
    borderRadius: "50px",
    border: "solid 3px #a681e1",
    height: "130px",
    width: "300px",
    justifyContent: "center",
    marginTop: "20px",
};

const divIndiceGraphStyle = {
    alignSelf: "center",
    width: "180px",
    height: "180px"
};

const divIndiceStyle = {
    display: "flex",
    position: "absolute",
    marginTop: "-30px",
    marginLeft: "165px",
    fontSize: "22px"
};

const divIndiceTextStyle = {
    fontSize: "20px",
    width: "155px",
    marginLeft: "-85px",
    alignSelf: "center",
    marginTop: "-240px"
};


const div2IndiceGraphContainerStyle = {
    display: "flex",
    flexDirection: "column",
    marginRight: "200px",
    marginLeft: "-500px",
    borderRadius: "50px",
    border: "solid 3px #a681e1",
    height: "130px",
    width: "300px",
    justifyContent: "center",
    marginTop: "20px",
};

const div2IndiceGraphStyle = {
    alignSelf: "center",
    width: "180px",
    height: "180px",
    marginLeft: "300px"
    
};

const div2IndiceStyle = {
    display: "flex",
    position: "absolute",
    marginTop: "-30px",
    marginLeft: "20px",
    fontSize: "22px"
};

const div2IndiceTextStyle = {
    fontSize: "20px",
    width: "155px",
    marginLeft: "-85px",
    alignSelf: "center",
    marginTop: "-240px"
};

const BotonDocenteStyle = {
    height: "100px",
    width: "100px",
    marginRight: "5px",
    marginLeft: "215px",
    marginTop: "-90px",
}


export default function InicioAdministrador() {

    return (
        <div style={wallpaperStyle}>
            <SidebarCloseAdministrador />
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
                                    Nombres y Apellidos<div>Administrador</div>
                                </div>
                            </div>
                        </Paper>
                        <div style={divIndiceGraphContainerStyle}>
                            <div style={divIndiceGraphStyle}>
                                <div style={divIndiceStyle}>
                                    70k
                                    <CircularProgress style={{ marginTop: "-20px", marginLeft: "-52.5px", display: "flex" }} size={70} variant="determinate" value={78} />
                                </div>
                                <CircularProgress style={{ color: "#ebdfe6", marginLeft: "150px", marginTop: "-20px"}} size={70} variant="determinate" value={100} />

                            </div>
                            <div style={divIndiceTextStyle}>
                                Estudiantes
                            </div>
                        </div>
                        <div style={div2IndiceGraphContainerStyle}>
                            <div style={div2IndiceGraphStyle}>
                                <div style={div2IndiceStyle}>   
                                    30k
                                    <div style={BotonEstudiantesStyle}>
                                        <SchoolOutlinedIcon/>
                                    </div>
                                    <div style={BotonDocenteStyle}>
                                        <WorkOutlineOutlinedIcon/>
                                    </div>
                                    
                                <CircularProgress style={{ color: "#ebdfe6", marginLeft: "53px", marginTop: "-20px"  }} size={70} variant="determinate" value={100} />

                                </div>
                                <CircularProgress style={{ marginTop: "-50px", marginLeft: "5px", display: "flex" }} size={70} variant="determinate" value={78} />
                            </div>
                            <div style={div2IndiceTextStyle}>Docentes</div>
                        </div>
                    </div>

                </ThemeProvider>
            </Paper>
        </div>
    );
}
