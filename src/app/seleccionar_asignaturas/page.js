"use client";
import React from "react";
import SidebarCloseEstudiante from "@/components/Sidebar/sidebarClose/SidebarClose";
import Paper from "@mui/material/Paper";
import { useStyles } from "../layout";
import SearchBar from "@/components/SearchBar/SearchBar";
import AgreeCancelButtons from "@/components/AgreeCancelButtons/AgreeCancelButtons";

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

    return (
        <div style={wallpaperStyle}>
            <SidebarCloseEstudiante />
            <Paper elevation={3} style={useStyles.paperBig}>
                <AgreeCancelButtons />
                <SearchBar placeholder={"Buscar asignaturas"} />
            </Paper>
        </div >
    );
}