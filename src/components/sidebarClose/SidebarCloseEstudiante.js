import Image from 'next/image';
import styles from "./style.module.css";
import MenuButton from '../menuButton/MenuButton';

function SidebarCloseEstudiante() {
    return (
        <div className={styles.container}>
            <button className={styles.menuButton}>
                <Image
                    src={"https://github.com/JuanDanielU/DisBG/blob/main/menuIcon.png?raw=true"} 
                    height={40}
                    width={45}
                    alt="Menu icon"
                />
            </button>

            <Image className={styles.logo} 
                src={"https://github.com/JuanDanielU/DisBG/blob/main/Logo.png?raw=true"}
                width={50}
                height={118}
                alt="Logo app"
            />

            <button className={styles.inicioButton}>
                <Image src="https://github.com/JuanDanielU/DisBG/blob/main/icono-casa.png?raw=true" alt='Icono inicio' width={25} height={25} />
            </button>

            <button className={styles.calificacionesIcon}>
                <Image src="https://github.com/JuanDanielU/DisBG/blob/main/Calificaciones-icono.png?raw=true" alt='Icono calificaciones' width={28} height={28} />
            </button>

            <button className={styles.calculadoraIndiceIcon}>
                <Image src="https://github.com/JuanDanielU/DisBG/blob/main/calculadora-indice-icon.png?raw=true" alt='Icono calculadora indice' width={20} height={20}/>
            </button>

            <button className={styles.perfilIcon}>
                <Image src="https://github.com/JuanDanielU/DisBG/blob/main/Icono-perfil.png?raw=true" alt="Icono perfil" width={24} height={22}/>
            </button>

            <button className={styles.configuracionIcon}>
                <Image src="https://github.com/JuanDanielU/DisBG/blob/main/Icono-settings.png?raw=true" alt="Icono configuracion" width={24} height={24}/>
            </button>
            
            <button className={styles.logOutIcon}>
                <Image src="https://github.com/JuanDanielU/DisBG/blob/main/Icono-cerrar_sesion.png?raw=true" alt="Icono cerrar sesion" width={24} height={24}/>
            </button>
        </div>
    )
}

export default SidebarCloseEstudiante