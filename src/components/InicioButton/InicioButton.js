import React from "react";
import Image from "next/image";
import styles from "./style.module.css";
import Button from "@mui/material/Button";

export default function InicioButton() {
    return (
        <Button className={styles.button}>
            <Image className={styles.icon} src="https://github.com/JuanDanielU/DisBG/blob/main/icono-casa.png?raw=true" alt='Icono inicio' width={25} height={25} />
            <div className={styles.text}>Inicio</div>
        </Button>
    )
}