"use client"
import * as React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Input from '@mui/material/Input';
import { ToggleButton } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

function login() {
    const [selected, setSelected] = React.useState(false);
    return (    
        <div className={styles.wallpaper}>
            {/* <SidebarOpen /> */}
            <div className={styles.container}>
                <Image className={styles.logo} 
                src={"https://github.com/JuanDanielU/DisBG/blob/main/Logo.png?  raw=true"}
                width={70}
                height={160}
                alt="Logo app"
                />
                <Input className={styles.input} placeholder="Correo Institucional">
                </Input>
                <Input className={styles.password} placeholder="Contraseña">
                </Input>
                <ToggleButton
                    value="check"
                    selected={selected}
                    onChange={() => {
                        setSelected(!selected);
                    }}>
                    <CheckIcon />
                </ToggleButton>
            </div>
        </div>
    );
}

export default login;