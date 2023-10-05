import React from "react";
import Button from "@mui/material/Button";
import theme from "@/app/theme";
import { Kanit } from "next/font/google";

const kanit = Kanit({ subsets: ['latin'], weight: ["400", "700"] })

const divContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "right",
    marginRight: "23px",
    marginTop: "20px",
};

const GuardarStyle = {
    backgroundColor: theme.palette.primary.main,
    color: "black",
    marginLeft: "10px",
    borderRadius: "25px",
    textTransform: "none",
};

const CancelarStyle = {
    backgroundColor: "red",
    color: "white",
    marginLeft: "10px",
    borderRadius: "25px",
    textTransform: "none",
};

export default function AgreeCancelButtons() {
    return (
        <div style={divContainerStyle}>
            <Button className={kanit.className} style={GuardarStyle} variant="contained">
                Guardar
            </Button>
            <Button className={kanit.className} style={CancelarStyle} variant="contained">
                Cancelar
            </Button>
        </div>
    );
}