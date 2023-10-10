"use client"
import { useEffect, useState } from "react";
import SidebarCloseEstudiante from "@/components/Sidebar/sidebarEstudiante/SidebarEstudiante";
import { Container, IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";
import 'bootstrap/dist/css/bootstrap.css';
import Paper from "@mui/material/Paper";
import Image from "next/image";
import { useStyles } from "../layout";
import { styled } from '@mui/system';
import { Tabs } from '@mui/base/Tabs';
import { TabsList } from '@mui/base/TabsList';
import { TabPanel } from '@mui/base/TabPanel';
import { buttonClasses } from '@mui/base/Button';
import { Tab, tabClasses } from '@mui/base/Tab';
import SearchBar from "@/components/SearchBar/SearchBarPequena";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Theme from "../theme";
import ListItemAvatar from '@mui/material/ListItemAvatar';
import axios from "axios";
import Badge from '@mui/material/Badge';


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
    width: "35px",
    height: "35px",
    marginTop: "20px",
    marginRight: "20px",
};

const notificationsIconStyle = {
    height: "35px",
    width: "35px",
};

const paperUserStyle = {
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    width: "100%",
};

const userInfoStyle = {
    fontSize: "26px",
    marginTop: "40px",
    marginLeft: "70px",
    float: "left",
};

const paperBuscarStyle = {
    width: "50%",
    marginLeft: "60px",
};


const purple = {

    50: '#9370DB',
};

const blue = {
    50: '#F0F7FF',
    100: '#C2E0FF',
    200: '#80BFFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
    800: '#004C99',
    900: '#003A75',
};

const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
};

const StyledTab = styled(Tab)`
    color: ${Theme.palette.primary.main};
    cursor: pointer;
    font-weight: 400;
    background-color: white;
    width: 25%;
    height: 40px;
    padding: 10px 12px;
    margin: 8%;
    border: 2px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 30px;
    align-items: center;
    fontfamily: Kanit, sans-serif;
  
    &:focus {
      outline: 3px solid ${Theme.palette.primary.main};
    }
  
    &.${tabClasses.selected} {
      background-color: ${Theme.palette.primary.main};
      color: white;
    }
  
    &.${buttonClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;

const StyledTabPanel = styled(TabPanel)(
    ({ theme }) => `
    width: 90%;
    font-family: Kanit, sans-serif;
    font-size: 0.875rem;
    padding: 20px 12px;
    background: white;
    border: 3.5px solid ${Theme.palette.primary.main};
    border-radius: 20px;
    opacity: 0.6;
    margin-left: 100px;

    margin-top: 30px;

    `,
);

const StyledTabsList = styled(TabsList)(
    ({ theme }) => `
    min-width: 1000px;
    height: 70px;
    background-color: white;
    border-radius: 40px;
    border: 2px solid ${Theme.palette.primary.main};
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-between;
    margin-left: 80px;
    margin-top: 30px;
    `,
);


const listStyle = {
    width: '100%',
    bgcolor: 'background.paper',
    marginLeft: "-30px",
    marginTop: "-20px",
}


const AsignaturasStyle = {
    width: '100%',
    height: '40px',
    bgcolor: 'background.paper',
    marginLeft: "30px",
    marginTop: "3px",
    fontWeight: "bold",
}


const CreditosSytle = {
    width: '100%',
    bgcolor: 'background.paper',
    marginLeft: "0px",
    marginTop: "10px",
    textAlign: "center",
}


const textCreditosStyle = {
    fontFamily: "kanit",
    fontSize: "16px",
    fontWeight: "bold",
}

const apiURL = process.env.NEXT_PUBLIC_API_HOST + ":" + process.env.NEXT_PUBLIC_API_PORT;

export default function Calificaciones_Estudiante() {
    //nombre carrera, nombre docente, correo docente, calificacion medio termino, calificacion final
    //principalmente, poder conseguir las asignaturas que esta cursando el estudiante en el periodo actual
    const [user, setUser] = useState({});
    const [asignaturas, setAsignaturas] = useState([]);
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        setUser(user);

        axios.get(`http://${apiURL}/api/Estudiante_Seccion/${user.id}?periodo=${user.periodos_cursados}`).then((res) => {
            const asignaturas = res.data;
            setAsignaturas(asignaturas);

            // console.log(asignaturas);
        });
    }, []);
    return (
        <paper style={wallpaperStyle}>
            <SidebarCloseEstudiante />
            <Paper elevation={3} style={useStyles.paperBig}>
                <paper style={paperUserStyle}>
                    <paper style={userInfoStyle}>
                        <paper style={{ display: "inline-flex" }}>
                            <Image src="https://github.com/JuanDanielU/DisBG/blob/main/Empty-profile-picture.png?raw=true" alt="Profile picture" height={100} width={100} />
                            <paper style={{ display: "flex", flexDirection: "column", marginLeft: "20px", fontSize: "18px", color: "grey" }}>Nombre: <div style={{ fontSize: "26px", color: "black" }}>{user.nombre}</div><paper>ID: <div style={{ fontSize: "26px", color: "black" }}>{user.id}</div></paper></paper>
                        </paper>
                    </paper>
                    <IconButton style={notificationsButtonStyle}>
                        <Badge badgeContent={1} color="secondary">
                            <NotificationsIcon style={notificationsIconStyle} />
                        </Badge>
                    </IconButton>

                </paper>
                <Tabs defaultValue={0} style={{ width: "90%" }}>

                    <StyledTabsList>
                        <StyledTab value={0}>Finales</StyledTab>
                        <StyledTab value={1}>Medio Termino</StyledTab>
                    </StyledTabsList>

                    <Container style={{ height: "20rem", overflowY: "scroll" }}>

                        {asignaturas && asignaturas.map((asignatura) => {
                            return (
                                <StyledTabPanel style={{ width: "90%" }} value={0} key={asignatura.id_seccion}>
                                    <ListItem style={listStyle}>
                                        <ListItemText style={AsignaturasStyle} primary=<span style={{ fontWeight: "bold", font: "kanit" }}>{asignatura.Secciones.Asignatura.nombre}</span>
                                            secondary={
                                                <div>
                                                    <span>Profesor/a: {asignatura.Secciones.Docente.nombre}</span>
                                                    <br style={{ marginTop: "20px" }} />
                                                    <span>Correo: {asignatura.Secciones.Docente.correo}</span>
                                                </div>
                                            } />
                                        <ListItemText style={CreditosSytle} primary=<span style={{ textCreditosStyle }}>Creditos</span> secondary={asignatura.Secciones.Asignatura.creditos} />
                                        <ListItemText style={CreditosSytle} primary=<span style={{ textCreditosStyle }}>Calificación Base</span> secondary="100" />
                                        <ListItemText style={CreditosSytle} primary=<span style={{ textCreditosStyle }}>Calificación</span> secondary={asignatura.calificacion_final} />
                                    </ListItem>
                                </StyledTabPanel>
                            )
                        })
                        }
                        {asignaturas && asignaturas.map((asignatura) => {
                            return (
                                <StyledTabPanel style={{ width: "90%" }} value={1} key={asignatura.id_seccion}>
                                    <ListItem style={listStyle}>
                                        <ListItemText style={AsignaturasStyle} primary=<span style={{ fontWeight: "bold", font: "kanit" }}>{asignatura.Secciones.Asignatura.nombre}</span>
                                            secondary={
                                                <div>
                                                    <span>Profesor/a: {asignatura.Secciones.Docente.nombre}</span>
                                                    <br style={{ marginTop: "20px" }} />
                                                    <span>Correo: {asignatura.Secciones.Docente.correo}</span>
                                                </div>
                                            } />
                                        <ListItemText style={CreditosSytle} primary=<span style={{ textCreditosStyle }}>Creditos</span> secondary={asignatura.Secciones.Asignatura.creditos} />
                                        <ListItemText style={CreditosSytle} primary=<span style={{ textCreditosStyle }}>Calificación Base</span> secondary={asignatura.Secciones.calificacion_base_mt} />
                                        <ListItemText style={CreditosSytle} primary=<span style={{ textCreditosStyle }}>Calificación</span> secondary={asignatura.calificacion_mt} />
                                    </ListItem>
                                </StyledTabPanel>
                            )
                        })
                        }
                        {/* <StyledTabPanel style={{ width: "90%" }} value={0}>

                    <StyledTabPanel style={{ width: "90%" }} value={0}>

                        <ListItem style={listStyle}>
                            <ListItemText style={AsignaturasStyle} primary=<span style={{ fontWeight: "bold", font: "kanit" }}>Aseguramiento de la Calidad</span>
                                secondary={
                                    <paper>
                                        <span>Profesor/a: </span>
                                        <br style={{ marginTop: "20px" }} />
                                        <span>Correo:</span>
                                    </paper>
                                } />
                            <ListItemText style={CreditosSytle} primary=<span style={{ textCreditosStyle }}>Creditos</span> secondary="2" />
                            <ListItemText style={CreditosSytle} primary=<span style={{ textCreditosStyle }}>Calificación Base</span> secondary="50" />
                            <ListItemText style={CreditosSytle} primary=<span style={{ textCreditosStyle }}>Calificación</span> secondary="49" />
                        </ListItem>

                    </StyledTabPanel> */}
                    </Container>
                    {/* <StyledTabPanel value={1}>

                        <ListItem style={listStyle}>
                            <ListItemText style={AsignaturasStyle} primary=<span style={{ fontWeight: "bold", font: "kanit" }}>Aseguramiento de la Calidad</span>
                                secondary={
                                    <paper>
                                        <span>Profesor/a:</span>
                                        <br style={{ marginTop: "20px" }} />
                                        <span>Correo:</span>
                                    </paper>
                                } />
                            <ListItemText style={CreditosSytle} primary=<span style={{ textCreditosStyle }}>Creditos</span> secondary="2" />
                            <ListItemText style={CreditosSytle} primary=<span style={{ textCreditosStyle }}>Calificación Base</span> secondary="50" />
                            <ListItemText style={CreditosSytle} primary=<span style={{ textCreditosStyle }}>Calificación</span> secondary="49" />
                        </ListItem>
                    </StyledTabPanel>*/
                    }
                </Tabs>
                <div style={paperBuscarStyle}>
                    <SearchBar placeholder={"Buscar asignaturas"} />
                </div>
            </Paper>
        </paper>
    );
}
