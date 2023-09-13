import Image from "next/image";
import styles from "../page.module.css";
import MenuButton from "../../components/menuButton/menuButton";

function login() {
    return (    
        <div className={styles.wallpaper}>
            <h1>hola a todos </h1>
            <MenuButton />
        </div>
    );
}

export default login;