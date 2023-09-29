import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#a681e1',
        },
        secondary: {
            main: '#424874',
            label: '#939191',
        },
        background: {
            default: '#f4eeff',
            input: '#f6f6f6',
            light: '#e8e4ef',
        },
    },
    spacing: 8,
    shape: {
        borderRadius: 40,
    },
});
export default theme;