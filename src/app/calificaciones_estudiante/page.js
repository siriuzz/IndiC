"use client"
import React, { useEffect } from "react";
import SidebarCloseEstudiante from "@/components/Sidebar/sidebarClose/SidebarClose";
import { IconButton } from "@mui/material";
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
    font-family: 'IBM Plex Sans', sans-serif;
    color: #fff;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 600;
    background-color: transparent;
    width: 100%;
    padding: 10px 12px;
    margin: 6px;
    border: 2px;
    border-radius: 20px;
    display: flex;
    justify-content: center;

  
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
    border: 3px solid ${theme.palette.mode === 'dark' ? purple[50] : purple[50]};
    border-radius: 20px;
    opacity: 0.6;
    margin-left: 100px;
    margin-top: 70px;
    `,
  );
  
  const StyledTabsList = styled(TabsList)(
    ({ theme }) => `
    min-width: 1000px;
    background-color: ${purple[50]};
    border-radius: 40px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-between;
    box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
    margin-left: 80px;
    `,
  );

export default function Inicio_docente() {

    return (
        <div style={wallpaperStyle}>
            <SidebarCloseEstudiante />
            <Paper elevation={3} style={useStyles.paperBig}>
                <Paper elevation={0} style={paperStyle}>
                    <div style={{ display: "flex" }}>
                        <div style={divUserStyle}>
                            <Image src="https://github.com/JuanDanielU/DisBG/blob/main/Empty-profile-picture.png?raw=true" alt="Profile picture" height={100} width={100} />
                            <div style={userInfoStyle}>
                                Nombre y Apellido<div>ID</div>
                                <IconButton style={notificationsButtonStyle}>
                                    <NotificationsIcon style={notificationsIconStyle} />
                                </IconButton>
                                <Tabs defaultValue={0}>
                                <StyledTabsList>
                                    <StyledTab value={0}>Finales</StyledTab>
                                    <StyledTab value={1}>Medio Termino</StyledTab>
                                </StyledTabsList>
                                <StyledTabPanel value={0}>Finales</StyledTabPanel>
                                <StyledTabPanel value={1}>Medio Termino</StyledTabPanel>
                            </Tabs>
                            </div>
                        </div>
                    </div>
                </Paper>
                <div style={divBuscarStyle}>
                <SearchBar placeholder={"Buscar asignaturas"} />
                </div>
            </Paper>
        </div>
    );
}
