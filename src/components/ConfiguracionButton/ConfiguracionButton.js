import React from "react";
import Image from "next/image";
import styles from "./style.module.css";

export default function ConfiguracionButton() {
    return (
        <button className={styles.button}>
            <Image className={styles.icon} src="https://github.com/JuanDanielU/DisBG/blob/main/Icono-settings.png?raw=true" alt='Icono inicio' width={20} height={20} />
            <div className={styles.text}>Configuracion</div>
        </button>
    )
}
