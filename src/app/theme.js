import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#dcd6f7',
            dark: '#a6b1e1',
        },
        secondary: {
            main: '#424874',
        },
        background: {
            default: '#f4eeff',
        },
    },
    spacing: 8,
    shape: {
        borderRadius: 40,
    },
});
export default theme;