"use client"
import React, { useState } from "react";
import SidebarCloseDocente from "@/components/Sidebar/sidebarDocente/sidebarDocente";
import { Button, IconButton } from "@mui/material";
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
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Kanit } from "next/font/google";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import EditIcon from "@mui/icons-material/EditOutlined";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


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
    marginLeft: "2400px",
    marginTop: "-180px",
};


const paperStyle = {
    width: "472px",
    marginTop: "30px",
    marginLeft: "60px",
};

const divUserStyle = {
    display: "flex",
    flexDirection: "row",
    marginLeft: "-30px",
};

const userInfoStyle = {
    fontSize: "26px",
    marginLeft: "40px",
    marginTop: "10px"
};

const divBuscarStyle = {
    marginLeft: "60px",
    marginTop: "190px",
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
    color: #fff;
    cursor: pointer;
    font-weight: 400;
    background-color: transparent;
    width: 300px;
    height: 40px;
    padding: 10px 12px;
    margin: 6px;
    border: 2px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 30px;
    align-items: center;
    fontfamily: Kanit, sans-serif;

  
    &:hover {
      background-color: ${purple[50]};
    }
  
    &:focus {
      color: #fff;
      outline: 3px solid ${purple[50]};
    }
  
    &.${tabClasses.selected} {
      background-color: #fff;
      color: ${purple[50]};
    }
  
    &.${buttonClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;

const StyledTabPanel = styled(TabPanel)(
    ({ theme }) => `
    width: 950px;
    font-family: Kanit, sans-serif;
    font-size: 0.875rem;
    padding: 20px 12px;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 3.5px solid ${theme.palette.mode === 'dark' ? purple[50] : purple[50]};
    border-radius: 20px;
    opacity: 0.6;
    margin-left: 100px;
    margin-top: 50px;
    `,
);

const StyledTabsList = styled(TabsList)(
    ({ theme }) => `
    min-width: 1000px;
    height: 70px;
    background-color: ${purple[50]};
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-between;
    box-shadow: 0px 8px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
    margin-left: 80px;
    margin-top: 40px;
    `,
);


const listStyle = {
    width: '1000px',
    bgcolor: 'background.paper',
    marginLeft: "-30px",
    marginTop: "-20px",
}


const AsignaturasStyle = {
    width: '800px',
    height: '40px',
    bgcolor: 'background.paper',
    marginLeft: "30px",
    marginTop: "3px",
    fontWeight: "bold",
}

const EditButton = styled(Button)(({ theme }) => ({
    color: "#e4d1d1",
    backgroundColor: "#e4d1d1",
    '&:hover': {
        backgroundColor: "#a99b9b",
    },
    borderRadius: "20px",
    marginLeft: "0px",
    marginTop: "70px",
    height: "40px",
    width: " 40px",
}));

export default function Calificaciones_Estudiante() {

    const [displayEST, setDisplayEST] = useState("flex");

    const handleEstudiante = (event) => {
        if (displayEST == "none") {
            setDisplayEST("flex");
        } else {
            setDisplayEST("none");
        }
    };

    const EachStudentStyle = {
        display: displayEST,
        backgroundColor: "#f4eeff",
        borderRadius: "20px",
        width: "700px",
        height: "70px",
        justifySelf: "center",
        marginLeft: "230px",
        marginTop: "0px",
        marginBottom: "10px",
    };

    return (
        <div style={wallpaperStyle}>
            <SidebarCloseDocente />
            <Paper elevation={3} style={useStyles.paperBig}>
                <Paper elevation={0} style={paperStyle}>
                    <div style={{ display: "flex" }}>
                        <div style={divUserStyle}>
                            <Image src="https://github.com/JuanDanielU/DisBG/blob/main/Empty-profile-picture.png?raw=true" alt="Profile picture" height={100} width={100} />
                            <div style={userInfoStyle}>
                                Nombre: Nombre y Apellido<div>Id: ID</div>
                                <IconButton style={notificationsButtonStyle}>
                                    <NotificationsIcon style={notificationsIconStyle} />
                                </IconButton>
                                <Tabs defaultValue={0}>
                                    <StyledTabsList>
                                        <StyledTab value={0}>Finales</StyledTab>
                                        <StyledTab value={1}>Medio Termino</StyledTab>
                                    </StyledTabsList>
                                    <StyledTabPanel value={0}>
                                        <ListItem style={listStyle}>

                                            <ListItemText style={AsignaturasStyle} primary=<span style={{ fontWeight: "bold", font: "kanit" }}>Aseguramiento de la Calidad</span>
                                                secondary={
                                                    <div>
                                                        <span>Profesor/a:</span>
                                                        <br style={{ marginTop: "20px" }} />
                                                        <span>Correo:</span>
                                                    </div>

                                                }
                                            />

                                        </ListItem>
                                        <IconButton onClick={handleEstudiante} style={{ marginLeft: "850px", marginTop: "-60px" }}>
                                            <AddCircleOutlineOutlinedIcon style={{ height: "45", width: "45", color: "#6750a4", }} />
                                        </IconButton>
                                        <EditButton variant="contained" style={{ marginTop: "-60px", marginLeft: "-125px" }}>
                                            <EditIcon style={{ height: "28", width: "28", color: "#6750a4" }} />
                                        </EditButton>
                                    </StyledTabPanel>
                                    <StyledTabPanel value={1}>
                                        <ListItem style={listStyle}>
                                            <ListItemText style={AsignaturasStyle} primary=<span style={{ fontWeight: "bold", font: "kanit" }}>Aseguramiento de la Calidad</span>
                                                secondary={
                                                    <div>
                                                        <span>Profesor/a:</span>
                                                        <br style={{ marginTop: "20px" }} />
                                                        <span>Correo:</span>
                                                    </div>
                                                } />
                                        </ListItem>
                                        <IconButton onClick={handleEstudiante} style={{ marginLeft: "850px", marginTop: "-60px" }}>
                                            <AddCircleOutlineOutlinedIcon style={{ height: "45", width: "45", color: "#6750a4", }} />
                                        </IconButton>
                                        <EditButton style={{ marginTop: "-60px", marginLeft: "-125px" }}>
                                            <EditIcon style={{ height: "28", width: "28", color: "#6750a4" }} />
                                        </EditButton>
                                    </StyledTabPanel>
                                </Tabs>
                                <div style={EachStudentStyle}>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar style={{ color: "black", background: "transparent" }}>
                                                <AccountCircleOutlinedIcon style={{ width: "38px", height: "38px" }} />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary=<span style={{ fontWeight: "bold", font: "kanit" }}>Juan Daniel Ubiera</span>
                                            secondary={
                                                <div>
                                                    <span>juandanielu@est.example.edu</span>
                                                </div>
                                            } />
                                    </ListItem>
                                    <Button style={{ marginTop: "-120px", marginLeft: "625px" }}>
                                        <EditIcon style={{ height: "24", width: "24", color: "#6750a4" }} />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Paper>
            </Paper>
        </div>
    );
}
