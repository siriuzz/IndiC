"use client"
import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import Input from '@mui/material/Input';
import { Button, 
        FormControlLabel,
        FormGroup, 
        InputAdornment} from "@mui/material";
import { Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import { Checkbox } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Paper } from "@mui/material";
import Link from "next/link";
import { Kanit } from "next/font/google";
import theme from "../theme";
import { useStyles } from "../layout";

const kanit = Kanit({ subsets: ['latin'], weight: ["400", "700"] })

const wallpaperStyle = {
    backgroundImage: "url('/assets/LoginWallpaper.svg')",
    backgroundColor: "white",
    backgroundSize: "contain",
    backgroundPosition: "right center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    minWidth: "100vw",
    display: "flex",
    flexDirection: "column",
};

export default function Login() {

    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {setShowPassword(!showPassword);};
    const [checked, setChecked] = useState(false);
    
    return (
        <div style={wallpaperStyle}>
            <Paper className={classes.paperSmall} elevation={3}>
                <Image style={{marginTop: "54px"}}
                    src={"/assets/Logo.png"}
                    width={70}
                    height={160}
                    alt="Logo app"
                />
                <ThemeProvider theme={theme}>
                    <FormGroup className={kanit.className}>
                        <Input className={kanit.className} style={{
                        backgroundColor: theme.palette.background.input, 
                        marginTop: "70px",
                        borderRadius: "40px",
                        width: "420px",
                        height: "50px",
                        paddingLeft: "15px",
                        }} placeholder="Correo Institucional">
                        </Input>
                        <Input
                            className={kanit.className}
                            style={{
                                backgroundColor: theme.palette.background.input,
                                marginTop: "40px",
                                borderRadius: "40px",
                                width: "420px",
                                height: "50px",
                                paddingLeft: "15px",
                            }}
                            placeholder="Contraseña"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment>
                                    <IconButton style={{marginRight: "5px"}}
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
                                    style={{ color: theme.palette.primary.main }}
                                    value="check"
                                    checked={checked}
                                    onChange={() => {
                                        setChecked(!checked);
                                    }}
                                />
                            } label={
                                <span className={kanit.className} style={{ marginRight: "104px", color: theme.palette.secondary.label }}>Recuérdame</span>
                            }/>
                            <Link href="/recuperar" style={{ display: "flex" }}>
                                <span style={{ alignSelf: "center", color: theme.palette.secondary.label }}>¿Olvidó su contraseña?</span>
                            </Link>
                        </div>
                        <Button variant="outlined" href="./inicio" className={kanit.className}
                            style={{
                                marginTop: "50px",
                                borderRadius: "10px",
                                borderColor: theme.palette.primary.main,
                                width: "147px",
                                alignSelf: "center",
                                fontSize: "18px",
                                textTransform: "capitalize",
                            }}
                        >Iniciar Sesión</Button>
                    </FormGroup>
                </ThemeProvider>
            </Paper>
        </div>
    );
}
