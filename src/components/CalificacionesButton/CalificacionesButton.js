import React from "react";
import Image from "next/image";
import styles from "./style.module.css";

export default function CalificacionesButton() {
    return (
        <button className={styles.button}>
            <Image className={styles.icon} src="https://github.com/JuanDanielU/DisBG/blob/main/Calificaciones-icono.png?raw=true" alt='Icono inicio' width={25} height={25} />
            <div className={styles.text}>Calificaciones</div>
        </button>
    )
}