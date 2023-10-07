"use client"
import Link from "next/link";
import { Button } from "@mui/material";
import React from "react";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.css';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Kanit } from '@next/font/google';

const kanit = Kanit({ subsets: ['latin'], weight: ["400", "700"] })

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh", // Centrar verticalmente en la pantalla
  position: "relative", // Permite superponer elementos
};

const buttonStyle = {
  position: "absolute",
  top: "50%", // Centra verticalmente el botón en relación con el contenedor
  transform: "translateY(-50%)", // Alinea verticalmente el botón correctamente
  backgroundColor: "#FFFFFF",
  color: "black",
  marginTop: "250px",
  borderRadius: "50px",
  padding: "10px 20px",
  zIndex: 1, // Coloca el botón por encima de la imagen
  marginRight: "200px",
  marginLeft: "190px",
  height: "30x"
};

export default function NotFound() {

  const goBack = () => {
    window.history.back(); // Volver a la página anterior en la historia de navegación
  };

  return (
    <div style={containerStyle}>
      <Image
        src={"/assets/404.svg"}
        style={{ height: "100vh", width: "100vw" }}
        height={100}
        width={100}
        alt="Error image"
      />

      <Button onClick={goBack} variant="contained" style={buttonStyle}>
        <KeyboardBackspaceIcon style={{ height: "25px", width: "25px" }} />
        <div className={kanit.className} style={{ fontSize: "12px", textTransform: "none", marginLeft: "5px" }}>
          Volver a la página anterior
        </div>
      </Button>
    </div>
  );
}
