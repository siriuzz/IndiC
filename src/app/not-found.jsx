import Link from "next/link";
import { Button } from "@mui/material";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { styled } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.css';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

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
  marginTop: "205px",
  borderRadius: "50px",
  padding: "10px 20px",
  zIndex: 1, // Coloca el botón por encima de la imagen
  marginRight: "200px",
  marginLeft: "-125px",
  height: "30x"
};

export default function NotFound() {
  return (
    <div style={containerStyle}>
      <Image
        className={styles.Image}
        src={"/assets/404.png"}
        width={800}
        height={700}
        alt="Error image"
      />

      <Link href="/">
        <Button variant="contained" style={buttonStyle}>
          <KeyboardBackspaceIcon style={{ height: "25px", width: "25px" }} />
          <div style={{ fontSize: "12px", fontFamily: "Kanit", marginLeft: "5px" }}>
            Volver a la página anterior
          </div>
        </Button>
      </Link>
    </div>
  );
}
