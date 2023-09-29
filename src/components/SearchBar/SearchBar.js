import React from "react";
import theme from "@/app/theme";
import { Kanit } from "next/font/google";
import Input from '@mui/material/Input';
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";


const style = {
    backgroundColor: theme.palette.background.light,
    borderRadius: "40px",
    border: 0,
    fontSize: "16px",
    height: "50px",
    paddingLeft: "15px",
    width: "35rem",
    marginLeft: "1rem",
    marginTop: "2px",
};

const kanit = Kanit({ subsets: ['latin'], weight: ["400", "700"] }) // Se usa para usar la fuente Kanit en los elementos que no se le aplica por defecto

export default function SearchBar({ placeholder }) {
    return (
        <Input disableUnderline={true} className={kanit.className} style={style} placeholder={placeholder}
            endAdornment={
                <InputAdornment position="start">
                    <IconButton style={{ marginRight: "5px" }}>
                        <SearchIcon />
                    </IconButton>
                </InputAdornment>
            }
        />
    );
}