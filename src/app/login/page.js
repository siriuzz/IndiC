"use client"
import * as React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Input from '@mui/material/Input';
import ToggleButton from "@mui/material/ToggleButton";
import Circle from '@mui/icons-material/CircleOutlined';
import CheckedCircle from '@mui/icons-material/CheckCircle';
import { InputAdornment } from "@mui/material";
import { Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

function login() {
    const [selected, setSelected] = React.useState(false);
    const toggleIcon = selected ? <CheckedCircle /> : <Circle />;
    const [showPassword, setShowPassword] = React.useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className={styles.wallpaper}>
            <div className={styles.container}>
                <Image className={styles.logo}
                    src={"https://github.com/JuanDanielU/DisBG/blob/main/Logo.png?raw=true"}
                    width={70}
                    height={160}
                    alt="Logo app"
                />
                <Input className={styles.input} placeholder="Correo Institucional">
                </Input>
                <Input
                    className={styles.password}
                    placeholder="Contraseña"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment>
                            <IconButton className={styles.iconButton}
                                onClick={togglePasswordVisibility}
                                onMouseDown={(e) => e.preventDefault()}
                            >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
                <ToggleButton className={styles.toggleButton}
                    value="check"
                    selected={selected}
                    onChange={() => {
                        setSelected(!selected);
                    }}>
                    {toggleIcon}
                </ToggleButton>
                <div className={styles.recuerdame}>Recuerdame</div>
            </div>
        </div>
    );
}

export default login;