import Image from "next/image";
import styles from "./page.module.css";
import SidebarOpen from "@/components/sidebar/sidebarOpen/sidebarOpen";

function login() {
    return (    
        <div className={styles.wallpaper}>
            <SidebarOpen/>
        </div>
        
    );
}

export default login;