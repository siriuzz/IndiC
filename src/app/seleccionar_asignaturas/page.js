"use client";
import React from "react";
import SidebarCloseEstudiante from "@/components/Sidebar/sidebarClose/SidebarClose";
import Paper from "@mui/material/Paper";
import { useStyles } from "../layout";
import SearchBar from "@/components/SearchBar/SearchBar";
import AgreeCancelButtons from "@/components/AgreeCancelButtons/AgreeCancelButtons";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

export default function SeleccionarAsignaturasPage() {

    const wallpaperStyle = {
        backgroundColor: "#dcd6f7",
        backgroundSize: "contain",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        justifyContent: "left"
    };

    const SearchBarContainer = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "3rem",
    };

    const EachAsignaturaStyle = {
        display: "flex",
        backgroundColor: "#ffffff",
        borderTop: "3px solid #F5F5F5",
        borderRadius: "0px",
        width: "550px",
        marginTop: "8px",
        marginBottom: "8px",
        marginLeft: "auto",
        marginRight: "auto",
    };

    return (
        <div style={wallpaperStyle}>
            <SidebarCloseEstudiante />
            <Paper elevation={3} style={useStyles.paperBig}>
                <AgreeCancelButtons />
                <div style={SearchBarContainer}>
                    <SearchBar placeholder={"Buscar asignaturas"} />
                </div>
                <div style={EachAsignaturaStyle}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar style={{ backgroundColor: '#A6B1E1' }}>
                                <BookmarkBorderOutlinedIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="IDS325 - Aseguramiento de la Calidad" secondary="Sección 01 GC302" />
                    </ListItem>
                </div>
            </Paper>
        </div >
    );
}