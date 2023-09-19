import React from "react";
import Image from "next/image";
import styles from "./style.module.css";

function CerrarSesionButton () {
    return (
        <button className={styles.button}>
                <Image className={styles.icon} src="https://github.com/JuanDanielU/DisBG/blob/main/Icono-cerrar_sesion.png?raw=true" alt='Icono inicio' width={20} height={20}/>
                <div className={styles.text}>Cerrar sesion</div>
        </button>
    )
}

export default CerrarSesionButton