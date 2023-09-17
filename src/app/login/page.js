import Image from "next/image";
import styles from "./page.module.css";
import SidebarOpenEstudiante from "@/components/SidebarsEstudiante/sidebarOpen/sidebarOpen";

function login() {
    return (    
        <div className={styles.wallpaper}>
            <SidebarOpenEstudiante/>
        </div>
        
    );
}

export default login;