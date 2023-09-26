"use client"
import React, { useEffect, useState } from "react";
import SidebarCloseDocente from "@/components/Sidebar/sidebarCloseDocente/sidebarCloseDocente";
import { IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";
import 'bootstrap/dist/css/bootstrap.css';
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Paper from "@mui/material/Paper";
import Image from "next/image";
import { useStyles } from "../layout";
import { Kanit } from "next/font/google";
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';
import { lightBlue } from "@mui/material/colors";

ChartJS.register(
    Title, Tooltip, LineElement, Legend,
    CategoryScale, LinearScale, PointElement, Filler
  )

const kanit = Kanit({ subsets: ['latin'], weight: ["400", "700"] })

const wallpaperStyle = {
    backgroundColor: "#dcd6f7",
    minHeight: "100vh",
    minWidth: "100vw",
    display: "flex",
    justifyContent: "left",
};

const notificationsButtonStyle = {
    color: "black",
    marginTop: "5px",
    width: "35px",
    height: "35px",
    display: "flex",
    marginRight: "24px",
};

const notificationsIconStyle = {
    height: "35px",
    width: "35px"
};

const labelStyle = {
    fontWeight: "bold",
    fontSize: "48px",
    display: "flex",
    marginLeft: "40px",
    marginTop: "10px",
    justifyContent: "space-between",
};

const paperStyle = {
    width: "472px",
    marginTop: "30px",
    marginLeft: "60px",
};

const divUserStyle = {
    display: "flex",
    flexDirection: "row",
    width: "600px"
};

const userInfoStyle = {
    fontSize: "26px",
    marginLeft: "40px",
    marginTop: "10px",
    width: "280px"
};

const CalendarStyle = {
    width: "320px",
    height: "auto",
    fontSize: "24px",
    marginLeft: "450px", 
    marginTop: "-10px",
    fontFamily: kanit, 
};

const LinearStyle = {
    width: "470px",
    height: "auto",
    marginLeft: "75px", 
    marginTop: "-50px",
}

export default function Inicio_docente() {
    const [value, setValue] = React.useState(dayjs());

    useEffect(() => {
        setValue(dayjs());
    }, []);

    const [data, setData] = useState({
        labels: ["IDS323", "IDS311", "IDS326", "IDS325","IDS323L"],
        datasets: [
            {
                height: "40px",
                label: "Promedio de calificaciones",
                data: [80, 70, 85, 63, 75],
                backgroundColor: [
                    'rgba(166, 177, 225, 0.8)', 
                  ],
                borderColor:'#0052B4',
                tension:0.4,
                fill:true,
                pointStyle:'circ',
                pointBorderColor:'blue',
                pointBackgroundColor:'#E4D1D1',
                showLine:true
            }
        ]
    });

    const options = {
        plugins: {
            legend: {
                display: false, 
            },
        },
    };

    return (
        <div style={wallpaperStyle}>
            <SidebarCloseDocente />
            <Paper elevation={3} style={useStyles.paperBig}>
                <div className={kanit.className} style={labelStyle}>
                    Bienvenido!
                    <IconButton style={notificationsButtonStyle}>
                        <NotificationsIcon style={notificationsIconStyle} />
                    </IconButton>
                </div>
                <Paper elevation={0} style={paperStyle}>
                    <div style={{ display: "flex" }}>
                        <div style={divUserStyle}>
                            <Image src="https://github.com/JuanDanielU/DisBG/blob/main/Empty-profile-picture.png?raw=true" alt="Profile picture" height={150} width={150} />
                            <div style={userInfoStyle}>
                                Nombres y Apellidos<div>Area Academica</div>
                            </div>
                        </div>
                        <div style={CalendarStyle}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DateCalendar', 'DateCalendar']}>
                                    <DemoItem>
                                        <DateCalendar
                                            value={value}
                                            onChange={(newValue) => setValue(newValue)}
                                        />
                                    </DemoItem>
                                </DemoContainer>
                            </LocalizationProvider>
                        </div>
                    </div>
                </Paper>
                <div style={LinearStyle}><Line data={data} /> 
                </div>
            </Paper>
        </div>
    );
}
