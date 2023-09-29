"use client"
import React from "react";
import SidebarCloseAdministrador from "@/components/Sidebar/sidebarCloseAdministrador/sidebarCloseAdministrador";
import SearchBar from "@/components/SearchBar/SearchBar";
import { IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";
import 'bootstrap/dist/css/bootstrap.css'
import Paper from "@mui/material/Paper";
import { useStyles } from "../layout";
import { Kanit } from "next/font/google";
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import theme from "../theme";
import CircularProgress from "@mui/material/CircularProgress";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const kanit = Kanit({ subsets: ['latin'], weight: ["400", "700"] })

const wallpaperStyle = {
    backgroundColor: "#dcd6f7",
    minHeight: "100vh",
    minWidth: "100vw",
    display: "flex",
    justifyContent: "left",
};

const UsuariosStyle = {
    fontSize: "24px",
    fontFamily: kanit,
    fontStyle: "bold",
    width: "590px",
    float: "right",
    justifySelf: "center",
    marginTop: "5rem",
    borderRadius: "10px",
};

const estudianteContainerStyle = {
    height: "160px",
    width: "380px",
    borderColor: theme.palette.primary.main,
    borderStyle: "solid",
    borderRadius: "40px",
};

const estudianteInfoStyle = {
    width: "25%",
    JustifyItems: "center",
    marginLeft: "5%",
    marginTop: "5%",
};

const estudianteTextStyle = {
    width: "100%",
    justifyContent: "center",
    fontSize: "20px",
};

const estudianteIconStyle = {
    height: "60px",
    width: "60px",
    marginLeft: "5%",
};

const docenteStyle = {
    height: "160px",
    width: "380px",
    borderColor: theme.palette.primary.main,
    borderStyle: "solid",
    borderRadius: "40px",
};

const EachAsignaturaStyle = {
    backgroundColor: "#ffffff",
    borderTop: "3px solid #F5F5F5",
    borderRadius: "0px",
    width: "550px",
    justifySelf: "center",
    marginLeft: "17px",
    marginTop: "8px",
    marginBottom: "8px"
};

const ProfileIconStyle = {
    width: "30px",
    height: "30px",
    color: "black"
};


const EstadoStyle = {
    fontSize: "18px",
    fontFamily: kanit,
    fontStyle: "bold",
};


const RightIconStyle = {
    width: "30px",
    height: "30px",
    marginLeft: "-8px",
    marginTop: "-2px"
};


export default function InicioAdministrador() {

    return (
        <div style={wallpaperStyle}>
            <SidebarCloseAdministrador />
            <Paper elevation={3} style={useStyles.paperBig}>
                <ThemeProvider theme={theme}>
                    <Paper style={{display: "inline-flex", justifyContent: "space-between", width: "100%"}}>
                        <div style={estudianteContainerStyle}>
                            <div style={estudianteInfoStyle}>
                                <div style={estudianteTextStyle}>Estudiantes</div>
                                <SchoolOutlinedIcon style={estudianteIconStyle} />
                                <div style={estudianteTextStyle}>Inscritos</div>
                            </div>
                        </div>
                        <div style={docenteStyle} >
                            <WorkOutlineOutlinedIcon/>
                        </div>  
                    </Paper>
                    <Paper elevation={4} style={UsuariosStyle}>
                        <List sx={{ width: "190px" }}>
                            <SearchBar placeholder="Buscar Usuarios" />
                            <div style={EachAsignaturaStyle}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar style={{ backgroundColor: '#FFFFFF' }}>
                                            <AccountCircleOutlinedIcon style={ProfileIconStyle} />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Juan Ubiera" secondary="juanduuuu@gmail.com" />
                                    <div style={EstadoStyle}>Egresado <ChevronRightIcon style={RightIconStyle} /></div>
                                </ListItem>
                            </div>
                            <div style={EachAsignaturaStyle}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar style={{ backgroundColor: '#FFFFFF' }}>
                                            <AccountCircleOutlinedIcon style={ProfileIconStyle} />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Kelvin Garcia" secondary="kelvin.garcia@gmail.com" />
                                    <div style={EstadoStyle}>Activo <ChevronRightIcon style={RightIconStyle} /></div>
                                </ListItem>
                            </div>
                            <div style={EachAsignaturaStyle}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar style={{ backgroundColor: '#FFFFFF' }}>
                                            <AccountCircleOutlinedIcon style={ProfileIconStyle} />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Francia Mejia" secondary="franciamejia@example.com" />
                                    <div style={EstadoStyle}>Docente <ChevronRightIcon style={RightIconStyle} /></div>
                                </ListItem>
                            </div>
                        </List>
                    </Paper>
                </ThemeProvider>
            </Paper>
        </div>
    );
}
