"use client"
import React from "react";
import SidebarClose from "@/components/sidebar/sidebarClose/SidebarClose";
import { IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";
import 'bootstrap/dist/css/bootstrap.css'
import Paper from "@mui/material/Paper";
import Image from "next/image";
import { useStyles } from "../layout";
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

const labelStyle = {
    fontWeight: "bold",
    fontSize: "48px",
    display: "flex",
    marginLeft: "40px",
    marginTop: "10px",
    justifyContent: "space-between",
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
                        <NotificationsIcon style={{ height: "35px", width: "35px" }} />
                    </IconButton>
                </div>
                <Paper elevation={0} style={{}}>
                    <div style={{ display: "flex", marginTop: "10px", flexDirection: "row" }}>
                        <Image src="https://github.com/JuanDanielU/DisBG/blob/main/Empty-profile-picture.png?raw=true" alt="Profile picture" height={130} width={130} style={{ marginLeft: "60px" }}
                        />
                        <div style={{ fontSize: "26px", marginLeft: "40px", marginTop: "5px" }}>
                            Nombres y Apellidos<div>Id<div>Carrera</div></div>
                        </div>
                    </div>
                </Paper>
            </Paper>
        </div>
    );
}
