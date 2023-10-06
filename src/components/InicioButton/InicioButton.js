import React from "react";
import Button from "@mui/material/Button";
import theme from "@/app/theme";
import HomeOutlined from "@mui/icons-material/HomeOutlined";
import { ThemeProvider } from "@mui/material";
import { Kanit } from "next/font/google";

const kanit = Kanit({ subsets: ['latin'], weight: ["400", "700"] })

const buttonStyle = {
    justifyContent: "left",
    backgroundColor: "white",
    color: "black",
    borderRadius: "20px",
    textTransform: "none",
    width: "180px",
    border: "1px solid",
    borderColor: theme.palette.primary.main,
};

const iconStyle = {
    display: "flex",
    color: "black",
    height: "35px",
    width: "35px",
    marginLeft: "-5px",
};

const spanStyle = {
    display: "flex",
    color: "black",
    fontSize: "18px",
    marginLeft: "5px",
    marginTop: "3px"
};

export default function InicioButton() {
    return (
        <ThemeProvider theme={theme}>
            <Button style={buttonStyle} variant="contained">
                <HomeOutlined style={iconStyle} />
                <span className={kanit.className} style={spanStyle}>Inicio</span>
            </Button>
        </ThemeProvider>
    )
}