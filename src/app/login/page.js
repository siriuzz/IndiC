import Image from "next/image";
import styles from "./page.module.css";
import SidebarOpenEstudiante from "@/components/SidebarsEstudiante/sidebarOpenEstudiante/sidebarOpenEstudiante";

function login() {
    return (    
        <div className={styles.wallpaper}>
            <SidebarOpenEstudiante/>
        </div>
        
    );
}

export default login;