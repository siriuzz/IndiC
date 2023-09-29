"use client"
import React, { useEffect } from "react";
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
import axios from "axios";

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
    marginTop: "2.5%",
    borderRadius: "10px",
    marginRight: "26rem",
    marginLeft: "26rem",
    height: "25rem",
    overflowY: "auto",
};

const estudianteContainerStyle = {
    height: "160px",
    borderColor: theme.palette.primary.main,
    marginLeft: "10%",
    borderStyle: "solid",
    borderRadius: "40px",
    marginTop: "3%",
    display: "inline-flex",
};

const estudianteInfoStyle = {
    width: "30%",
    JustifyItems: "center",
    marginLeft: "5%",
    marginTop: "5%",
};

const estudianteTextStyle = {
    width: "100%",
    justifyContent: "center",
    fontSize: "20px",
};

const estudianteIndiceTextStyle = {
    marginTop: "17%",
    marginLeft: "-23%",
    fontSize: "24px",
};

const estudianteIconStyle = {
    height: "60px",
    width: "60px",
    marginLeft: "5%",
};

const docenteContainerStyle = {
    height: "160px",
    borderColor: theme.palette.primary.main,
    borderStyle: "solid",
    borderRadius: "40px",
    marginTop: "3%",
    marginLeft: "25%",
    display: "inline-flex",
};

const docenteInfoStyle = {
    width: "30%",
    JustifyItems: "center",
    marginLeft: "5%",
    marginTop: "4%",
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

const notificationsButtonStyle = {
    color: "black",
    marginTop: "1%",
    width: "35px",
    height: "35px",
    display: "flex",
    marginRight: "24px",
};

const notificationsIconStyle = {
    height: "35px",
    width: "35px"
};

export default function InicioAdministrador() {
    const [estudiantes, setEstudiantes] = React.useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/api/Estudiantes").then((response) => {
            setEstudiantes(response.data);
        });
    }, []);
    return (
        <div style={wallpaperStyle}>
            <SidebarCloseAdministrador />
            <Paper elevation={3} style={useStyles.paperBig}>
                <ThemeProvider theme={theme}>
                    <Paper elevation={0} style={{ display: "inline-flex", justifyContent: "space-between", width: "100%" }}>
                        <div style={estudianteContainerStyle}>
                            <div style={estudianteInfoStyle}>
                                <div style={estudianteTextStyle}>Estudiantes</div>
                                <SchoolOutlinedIcon style={estudianteIconStyle} />
                                <div style={estudianteTextStyle}>Inscritos</div>
                            </div>
                            <CircularProgress style={{ color: "#ebdfe6", marginLeft: "80px", marginTop: "5%" }} size={120} variant="determinate" value={100} />
                            <CircularProgress style={{ marginLeft: "-120px", display: "flex", marginTop: "5%" }} size={120} variant="determinate" value={78} />
                            <div style={estudianteIndiceTextStyle}>70K</div>
                        </div>
                        <div style={docenteContainerStyle}>
                            <div style={docenteInfoStyle}>
                                <div style={estudianteTextStyle}>Docentes</div>
                                <WorkOutlineOutlinedIcon style={estudianteIconStyle} />
                                <div style={estudianteTextStyle}>Trabajando</div>
                            </div>
                            <CircularProgress style={{ color: "#ebdfe6", marginLeft: "80px", marginTop: "5%" }} size={120} variant="determinate" value={100} />
                            <CircularProgress style={{ marginLeft: "-120px", display: "flex", marginTop: "5%" }} size={120} variant="determinate" value={78} />
                            <div style={estudianteIndiceTextStyle}>03K</div>
                        </div>
                        <IconButton style={notificationsButtonStyle}>
                            <NotificationsIcon style={notificationsIconStyle} />
                        </IconButton>
                    </Paper>
                    <Paper elevation={4} style={UsuariosStyle}>
                        <List sx={{ width: "190px" }}>
                            <SearchBar placeholder="Buscar Usuarios" />
                            {
                                estudiantes.map((estudiante) => {
                                    return (
                                        <div style={EachAsignaturaStyle}>
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar style={{ backgroundColor: '#FFFFFF' }}>
                                                        <AccountCircleOutlinedIcon style={ProfileIconStyle} />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText primary={estudiante.nombre} secondary={estudiante.correo} />
                                                <div style={EstadoStyle}>{estudiante.id_estado == 1 ? "Activo" : "Inactivo"} <ChevronRightIcon style={RightIconStyle} /></div>
                                            </ListItem>
                                        </div>
                                    );
                                })
                            }
                            {/* <div style={EachAsignaturaStyle}>
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
                            <div style={EachAsignaturaStyle}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar style={{ backgroundColor: '#FFFFFF' }}>
                                            <AccountCircleOutlinedIcon style={ProfileIconStyle} />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Elian Matos" secondary="ElianMatos@example.com" />
                                    <div style={EstadoStyle}>Administrador <ChevronRightIcon style={RightIconStyle} /></div>
                                </ListItem>
                            </div> */}
                        </List>
                    </Paper>
                </ThemeProvider>
            </Paper>
        </div>
    );
}
