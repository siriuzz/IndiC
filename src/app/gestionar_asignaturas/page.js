"use client"
import React, { useState } from "react";
import { Button, IconButton, Paper, Avatar, Badge, Modal, List, ListItem, ListItemAvatar, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";
import 'bootstrap/dist/css/bootstrap.css';
import Image from "next/image";
import { Kanit } from "next/font/google";
import SidebarAdministrador from "@/components/Sidebar/sidebarAdministrador/sidebarAdministrador";
import SearchBar from "@/components/SearchBar/SearchBar";
import ListItemText from '@mui/material/ListItemText';
import EditIcon from "@mui/icons-material/EditOutlined";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';

const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 40,
    height: 22,
    padding: 0,
    display: 'flex',
    '&:active': {
        '& .MuiSwitch-thumb': {
            width: 20,
        },
        '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(9px)',
        },
    },
    '& .MuiSwitch-switchBase': {
        padding: 2,
        '&.Mui-checked': {
            transform: 'translateX(12px)',
            marginLeft: 6,
            color: '#dcd6f7',
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#6570A4' : '#7f62b6',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
        width: 18,
        height: 18,
        borderRadius: 70,
        transition: theme.transitions.create(['width'], {
            duration: 200,
        }),
    },
    '& .MuiSwitch-track': {
        borderRadius: 40 / 2,
        opacity: 1,
        backgroundColor:
            theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
        boxSizing: 'border-box',
    },
}));

const CrearStyle = {
    position: "absolute",
    top: "50%", // Centra verticalmente el botón en relación con el contenedor
    transform: "translateY(-50%)", // Alinea verticalmente el botón correctamente
    backgroundColor: "#ffffff",
    color: "black",
    border: " 3px solid #4F69DD",
    marginTop: "250px",
    borderRadius: "50px",
    padding: "10px 20px",
    zIndex: 1, // Coloca el botón por encima de la imagen
    marginLeft: "550px",
    height: "35px",
    width: "100px",
};

const kanit = Kanit({ subsets: ['latin'], weight: ["400", "700"] });

const wallpaperStyle = {
    backgroundColor: "#dcd6f7",
    minHeight: "100vh",
    minWidth: "100vw",
    display: "flex",
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
    width: "35px",
    marginLeft: "0px",
    marginTop: "0px",
};

const paperStyle = {
    width: "472px",
    marginTop: "30px",
    marginLeft: "60px",
};

const paperBigConfig = {
    backgroundColor: "#ffffff",
    borderRadius: "40px",
    marginTop: "70px",
    marginRight: "10px",
    marginLeft: "-1050px",
    height: "600px",
    width: "1300px",
};

const SearchBarStyle = {
    marginLeft: "350px",
    marginTop: "20px",
};

const EachAsignaturaStyle = {
    backgroundColor: "#ffffff",
    borderTop: "3px solid #F5F5F5",
    borderRight: "3px solid #F5F5F5",
    borderLeft: "3px solid #F5F5F5",
    borderBottom: "3px solid #F5F5F5",
    borderRadius: "10px",
    width: "750px",
    justifySelf: "center",
    marginLeft: "-100px",
    marginTop: "30px",
    marginBottom: "8px"
};


const label = { inputProps: { 'aria-label': 'Size switch demo' } };



const editButtonStyle = {
    borderRadius: "20px",
    marginLeft: "-55px",
    marginTop: "0px",
    height: "35px",
    width: " 35px",
    backgroundColor: "#EADDFF",
};




export default function GestionarAsignatura() {
    const [isSwitchOn, setIsSwitchOn] = useState(true); // Establece el interruptor en estado inicial encendido
    const [isConfirmationDialogOpen, setConfirmationDialogOpen] = useState(false);

    const handleSwitchToggle = () => {
        if (isSwitchOn) {
            setConfirmationDialogOpen(true); // Mostrar el mensaje de confirmación solo al apagar
        } else {
            // Cambiar el estado del interruptor directamente si está apagado
            setIsSwitchOn(true);
        }
    };

    const handleConfirmSwitch = () => {
        // Apagar el interruptor
        setIsSwitchOn(false);
        setConfirmationDialogOpen(false);
    };

    const handleCancelSwitch = () => {
        setConfirmationDialogOpen(false);
    };


    return (
        <div style={wallpaperStyle}>
            <SidebarAdministrador />
            <div style={{ display: "flex" }}>
                <div style={{ marginLeft: "1120px", marginTop: "-80px" }}>
                    <IconButton style={notificationsButtonStyle}>
                        <Badge badgeContent={1} color="secondary">
                            <NotificationsIcon style={notificationsIconStyle} />
                        </Badge>
                    </IconButton>
                </div>
                <Paper elevation={3} style={paperBigConfig}>
                    <div style={SearchBarStyle}>
                        <SearchBar placeholder="Buscar Asignaturas" />
                        <div style={EachAsignaturaStyle}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar style={{ backgroundColor: '#A6B1E1' }}>
                                        <BookmarkIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText style={{ fontWeight: "600" }} primary="IDS335 - Diseño de Software" secondary="BERNARDO ANTONIO BATISTA DIAZ" />
                                <IconButton style={editButtonStyle} variant="contained">
                                    <EditIcon style={{ height: "20", width: "20", color: "#6750a4" }} />
                                </IconButton>
                                <FormGroup style={{ marginLeft: "10px" }}>
                                    <Stack direction="row" spacing={1} alignItems="center">
                                        <AntSwitch
                                            checked={isSwitchOn}
                                            onChange={handleSwitchToggle}
                                            inputProps={{ 'aria-label': 'ant design' }}
                                        />
                                    </Stack>
                                </FormGroup>
                                <Dialog open={isConfirmationDialogOpen} onClose={handleCancelSwitch}>
                                    <DialogContent style={{borderRadius:"200px", height:"100px", justifyContent:"center"}}>
                                        ¿Está seguro que quiere desactivar esta asignatura?
                                    </DialogContent>
                                    <DialogActions  style={{ justifyContent: "center" }}>
                                        <Button onClick={handleCancelSwitch} style={{background:"#ffffff", color:"#6750A4", border:"1px solid #6750A4", borderRadius:"20px", width:"125px"}}>
                                            Cancelar
                                        </Button>
                                        <Button onClick={handleConfirmSwitch} style={{background:"#6750A4", color:"#ffffff", borderRadius:"20px", width:"125px"}} >
                                            Desactivar
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </ListItem>
                        </div>

                        <Button style={CrearStyle}>
                            <div className={kanit.className} style={{ fontSize: "16px", textTransform: "none", fontWeight: "500", width: "270px", color: "#3E44CC" }}>
                                Crear
                            </div>
                            <AddIcon style={{ color: "#333E8E", marginLeft: "10px" }} />
                        </Button>
                    </div>
                    <Paper elevation={0} style={paperStyle}>
                    </Paper>
                </Paper>
            </div>
        </div>
    );
}

