"use client"
import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Input from '@mui/material/Input';
import { Button, FormControlLabel, FormGroup, InputAdornment } from "@mui/material";
import { Title, Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import { Checkbox } from "@mui/material";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { theme } from "../theme";
import { Paper } from "@mui/material";
import Link from "next/link";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const [checked, setChecked] = useState(false);

    return (
        <div className={styles.wallpaper}>
            <Paper className={styles.container} elevation={3}>
                <Image className={styles.logo}
                    src={"/assets/Logo.png"}
                    width={70}
                    height={160}
                    alt="Logo app"
                />
                <FormGroup>
                    <Input className={styles.input} color="secondary" placeholder="Correo Institucional">
                    </Input>
                    <Input
                        className={styles.password}
                        placeholder="Contraseña"
                        color="secondary"
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
                    <div style={{ display: "inline-flex" }} >
                        <FormControlLabel control={
                        <Checkbox
                            style={{ color: "#9879ce" }}
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
                        />
                    } label={
                            <span style={{ marginRight: "104px",color: "#939191" }}>Recuérdame</span>
                        } />
                        <Link href="/recuperar" style={{ display: "flex",color: "#939191" }}>
                            <span style={{ alignSelf: "center",color: "#939191" }}>¿Olvidó su contraseña?</span>
                        </Link>
                    </div>
                    <Button variant="outlined" 
                    style={{
                        color: "#9879ce",
                        marginTop: "50px",
                        borderRadius: "10px",
                        borderColor: "#9879ce",
                        width: "146px",
                        alignSelf: "center",
                        fontSize: "16px",
                        fontWeight: "bold",
                        textTransform: "capitalize",
                    }}
                    >Iniciar Sesión</Button>
                </FormGroup>
            </Paper>
        </div>
    );
}