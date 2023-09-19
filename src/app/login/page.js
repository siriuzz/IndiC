import Image from "next/image";
import styles from "./page.module.css";
import SidebarClose from "@/components/sidebar/sidebarClose/SidebarClose";

function login() {
    return (
        <div className={styles.wallpaper}>
            <SidebarClose />
        </div>

    );
}

export default login;