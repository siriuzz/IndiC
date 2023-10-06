"use client"
import React, { useState } from "react";
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
import { Kanit } from "next/font/google";



const kanit = Kanit({ subsets: ['latin'], weight: ["400", "700"] })

const wallpaperStyle = {
    backgroundColor: "#FFFFFFFF",
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



export default function Configuración() {


    return (
        <div style={wallpaperStyle}>
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
                        </div>  
                        </div>
                    </div>
                </Paper>
            </Paper>
        </div>
    );
}
