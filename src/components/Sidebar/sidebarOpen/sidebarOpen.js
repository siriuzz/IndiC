import React from 'react';
import Image from 'next/image';
import styles from "./style.module.css";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import HouseIcon from '@mui/icons-material/House';
import MenuIcon from '@mui/icons-material/Menu';
import MenuButtons from '@/components/menuButtons/MenuButtons';
import { ThemeProvider } from '@emotion/react';

function SidebarOpen() {
    return (
        <div className={styles.container}>
            <Button className={styles.menuButton} variant="contained" startIcon={<MenuIcon />} >

            </Button>
            <MenuButtons className={styles.menuButton} />

            <Image className={styles.logo}
                src={"https://github.com/JuanDanielU/DisBG/blob/main/Logo.png?raw=true"}
                width={50}
                height={118}
                alt="Logo app"
            />

            <Button variant="outlined" startIcon={<HouseIcon />}>
                Inicio
            </Button>
            <Button variant="outlined" startIcon={<DeleteIcon />}>
                Calificaciones
            </Button>

            <button className={styles.calificacionesIcon}>
                <Image src="https://github.com/JuanDanielU/DisBG/blob/main/Calificaciones-icono.png?raw=true" alt='Icono calificaciones' width={28} height={28} />
            </button>

            <button className={styles.calculadoraIndiceIcon}>
                <Image src="https://github.com/JuanDanielU/DisBG/blob/main/calculadora-indice-icon.png?raw=true" alt='Icono calculadora indice' width={20} height={20} />
            </button>

            <button className={styles.perfilIcon}>
                <Image src="https://github.com/JuanDanielU/DisBG/blob/main/Icono-perfil.png?raw=true" alt="Icono perfil" width={24} height={22} />
            </button>

            <button className={styles.configuracionIcon}>
                <Image src="https://github.com/JuanDanielU/DisBG/blob/main/Icono-settings.png?raw=true" alt="Icono configuracion" width={24} height={24} />
            </button>

            <button className={styles.logOutIcon}>
                <Image src="https://github.com/JuanDanielU/DisBG/blob/main/Icono-cerrar_sesion.png?raw=true" alt="Icono cerrar sesion" width={24} height={24} />
            </button>
        </div >
    )
}

export default SidebarOpen
export default SidebarOpen
