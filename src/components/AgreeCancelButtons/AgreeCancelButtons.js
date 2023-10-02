import React from "react";
import Button from "@mui/material/Button";
import theme from "@/app/theme";
import { Kanit } from "next/font/google";

const kanit = Kanit({ subsets: ['latin'], weight: ["400", "700"] })

const divContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px",
    marginTop: "20px",
    width: "20%"
};

const GuardarStyle = {
    backgroundColor: theme.palette.primary.main,
    color: "black",
    marginLeft: "10px",
    borderRadius: "25px"
};

const CancelarStyle = {
    backgroundColor: "white",
    color: "red",
    marginLeft: "2px",
    borderRadius: "25px",
};

export default function AgreeCancelButtons() {
    return (
        <div style={divContainerStyle}>
            <Button className={kanit.className} style={GuardarStyle}variant="contained">
                Guardar
            </Button>
            <Button className={kanit.className} style={CancelarStyle} variant="contained">
                Cancelar
            </Button>
        </div>
    );
}