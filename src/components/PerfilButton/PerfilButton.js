import React from "react";
import Image from "next/image";
import styles from "./style.module.css";

function PerfilButton () {
    return (
        <button className={styles.button}>
                <Image className={styles.icon} src="https://github.com/JuanDanielU/DisBG/blob/main/Icono-perfil.png?raw=true" alt='Icono inicio' width={22} height={20}/>
                <div className={styles.text}>Perfil</div>
        </button>
    )
}

export default PerfilButton