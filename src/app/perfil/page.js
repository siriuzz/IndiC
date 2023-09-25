"use client"
import React from "react";
import styles from "./page.module.css";
import SidebarClose from "@/components/sidebar/sidebarClose/SidebarClose";
import { Button, IconButton, colors } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";
import EditIcon from "@mui/icons-material/EditOutlined";
import 'bootstrap/dist/css/bootstrap.css'
import Paper from "@mui/material/Paper";
import Image from "next/image";
import { styled } from '@mui/material/styles';
import LockOpenIcon from '@mui/icons-material/LockOpen';

export default function Perfil() {
    
    const EditButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText("#e4d1d1"),
        backgroundColor: "#e4d1d1",
        '&:hover': {
            backgroundColor: "#a99b9b",
        },
        borderRadius: "10px",
        marginLeft: "-50px",
        marginTop: "100px",
    }));
    
    return (
        <div className={styles.wallpaper}>
            <SidebarClose />
            <Paper elevation={3}
                style={{
                    backgroundColor: "white",
                    borderRadius: "40px",
                    marginTop: "20px",
                    marginBottom: "20px",
                    marginRight: "20px",
                    height: "94.3vh",
                    width: "100%",
                }}>
                    
                <div className={styles.label}>
                    Bienvenido!
                    <IconButton className={styles.notificationsButton}>
                        <NotificationsIcon style={{height: "35px", width: "35px"}} />
                    </IconButton>
                </div>
                <Paper elevation={0} style={{}}>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <Image src="https://github.com/JuanDanielU/DisBG/blob/main/Empty-profile-picture.png?raw=true" alt="Profile picture" height={130} width={130} style={{ marginLeft: "60px" }}
                        />
                        <EditButton variant="contained">
                            <EditIcon style={{ height: "35", width: "35", color: "#6750a4" }} />
                        </EditButton>
                        <div style={{ fontSize: "26px", marginLeft:"20px", marginTop: "10px" }}>
                            Nombres y Apellidos<div>Id<div>Carrera</div></div>
                        </div>
                    </div>
                </Paper>
            </Paper>
        </div>
    );
}
