import React from "react";
import Button from "@mui/material/Button";
import theme from "@/app/theme";
import { Kanit } from "next/font/google";
import Link from "next/link";

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
    color: "white",
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

export default function AgreeCancelButtons({ onClick }) {
    return (
        <div style={divContainerStyle}>
            <Button onClick={onClick} className={kanit.className} style={GuardarStyle} variant="contained">
                Guardar
            </Button>
            <Link href="/inicio_estudiante">
                <Button className={kanit.className} style={CancelarStyle} variant="contained">
                    Cancelar
                </Button>
            </Link>
        </div>
    );
}