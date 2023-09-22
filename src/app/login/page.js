"use client"
import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Input from '@mui/material/Input';
import { FormControlLabel, FormGroup, InputAdornment } from "@mui/material";
import { Title, Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import { Checkbox } from "@mui/material";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { theme } from "../theme";
import { Paper } from "@mui/material";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const [checked, setChecked] = useState(false);

    return (
        <div className={styles.wallpaper}>
            <Paper className={styles.container}>
                <Image className={styles.logo}
                    src={"https://github.com/JuanDanielU/DisBG/blob/main/Logo.png?raw=true"}
                    width={70}
                    height={160}
                    alt="Logo app"
                />

                <FormGroup>
                    <Title>Iniciar Sesión</Title>
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
                    {/* <ThemeProvider theme={theme}> */}
                    <FormControlLabel control={<Checkbox
                        value="check"
                        checked={checked}
                        onChange={() => {
                            setChecked(!checked);
                        }}
                        sx={{
                            color: "#9879ce",
                            '&.Mui-checked': {
                                color: "#9879ce"
                            },
                        }}
                    />} label={
                        <span style={{ color: "#939191" }}>Recuérdame</span>
                    } />
                </FormGroup>
            </Paper>
        </div>
    );
}