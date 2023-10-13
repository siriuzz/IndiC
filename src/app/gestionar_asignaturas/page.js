"use client"
import React, { useState } from "react";
import { Button, IconButton, Paper, Avatar, Badge, Modal, List, ListItem, ListItemAvatar, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@mui/material";
import 'bootstrap/dist/css/bootstrap.css';
import { Kanit } from "next/font/google";
import SidebarAdministrador from "@/components/Sidebar/sidebarAdministrador/SidebarAdministrador";
import SearchBar from "@/components/SearchBar/SearchBar";
import ListItemText from '@mui/material/ListItemText';
import EditIcon from "@mui/icons-material/EditOutlined";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import { useStyles } from "../layout";

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

const paperStyle = {
    width: "472px",
    marginTop: "30px",
    marginLeft: "60px",
};

const SearchBarStyle = {
    display: "flex",
    marginTop: "10px",
    justifyContent: "center",
};

const EachAsignaturaStyle = {
    backgroundColor: "#ffffff",
    borderTop: "3px solid #F5F5F5",
    borderRight: "3px solid #F5F5F5",
    borderLeft: "3px solid #F5F5F5",
    borderBottom: "3px solid #F5F5F5",
    borderRadius: "40px",
    width: "750px",
    justifySelf: "center",
    marginLeft: "-100px",
    marginTop: "30px",
    marginBottom: "8px"
};


const editButtonStyle = {
    borderRadius: "20px",
    marginLeft: "-55px",
    marginTop: "0px",
    height: "35px",
    width: " 35px",
    backgroundColor: "#EADDFF",
};

import axios from "axios";
const apiURL = process.env.NEXT_PUBLIC_API_HOST + ":" + process.env.NEXT_PUBLIC_API_PORT;

export default function GestionarAsignatura() {
    const [isSwitchOn, setIsSwitchOn] = useState(true); // Establece el interruptor en estado inicial encendido
    const [isConfirmationDialogOpen, setConfirmationDialogOpen] = useState(false);
    const [isCreateDialogOpen, setCreateDialogOpen] = useState(false);
    const [isCreateDialogOpen2, setCreateDialogOpen2] = useState(false);
    const [isSaveConfirmationOpen, setSaveConfirmationOpen] = useState(false);
    const [isEditConfirmationOpen, setEditConfirmationOpen] = useState(false);
    const [asignaturas, setAsignaturas] = useState([]);
    const [asignaturaSeleccionada, setAsignaturaSeleccionada] = useState({});// Aquí puedes agregar la lógica para guardar la asignatura

    React.useEffect(() => {
        if (asignaturas.length == 0) {
            axios.get(`http://${apiURL}/api/Asignaturas`).then((res) => {
                setAsignaturas(res.data);
            });

        }
    });

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
        console.log(asignaturaSeleccionada);
        setConfirmationDialogOpen(false);
    };


    const handleOpenCreateDialog = () => {
        setCreateDialogOpen(true);
    };

    const handleCloseCreateDialog = () => {
        setCreateDialogOpen(false);
    };


    const handleOpenCreateDialog2 = () => {
        setCreateDialogOpen2(true);
    };

    const handleCloseCreateDialog2 = () => {
        setCreateDialogOpen2(false);
    };

    const handleOpenSaveConfirmation = () => {
        setSaveConfirmationOpen(true);
    };

    const handleCloseSaveConfirmation = () => {
        setSaveConfirmationOpen(false);
    };

    const handleSaveAsignatura = () => {
        // Aquí puedes agregar la lógica para guardar la asignatura
        // Y luego cerrar el diálogo de confirmación de guardado
        setSaveConfirmationOpen(false);
    };

    const handleCloseEditConfirmation = () => {
        setEditConfirmationOpen(false);
    };

    const handleEditAsignatura = () => {
        // Aquí puedes agregar la lógica para editar la asignatura

        // Cierra el diálogo de confirmación
        handleCloseEditConfirmation();

    };

    return (
        <div style={wallpaperStyle}>
            <SidebarAdministrador />
            <Paper elevation={3} style={useStyles.paperBig}>
                <div style={{ display: 'flex', justifyContent: "center" }}>
                    <div style={EachAsignaturaStyle}>
                        <div style={SearchBarStyle}>
                            <SearchBar style={{ marginLeft: '40px' }} placeholder="Buscar asignaturas" />
                        </div>
                        {asignaturas.map((asignatura) => (
                            <ListItem key={asignatura.id}>
                                <ListItemAvatar>
                                    <Avatar style={{ backgroundColor: '#A6B1E1' }}>
                                        <BookmarkIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText style={{ fontWeight: "600" }} primary={asignatura.nombre} secondary={asignatura.profesor} />
                                <IconButton style={editButtonStyle} variant="contained" onClick={handleOpenCreateDialog}>
                                    <EditIcon style={{ height: "20", width: "20", color: "#6750a4" }} />
                                </IconButton>
                                <FormGroup style={{ marginLeft: "10px" }}>
                                    <Stack direction="row" spacing={1} alignItems="center">
                                        <AntSwitch
                                            checked={isSwitchOn}
                                            onChange={handleSwitchToggle}
                                            onClick={() => setAsignaturaSeleccionada(asignatura)}
                                            inputProps={{ 'aria-label': 'ant design' }}
                                        />
                                    </Stack>
                                </FormGroup>
                            </ListItem>
                        ))}
                    </div>
                    <Dialog open={isConfirmationDialogOpen} onClose={handleCancelSwitch}>
                        <DialogContent style={{ borderRadius: "200px", height: "100px", justifyContent: "center" }}>
                            ¿Está seguro que quiere desactivar esta asignatura?
                        </DialogContent>
                        <DialogActions style={{ justifyContent: "center" }}>
                            <Button onClick={handleCancelSwitch} style={{ background: "#ffffff", color: "#6750A4", border: "1px solid #6750A4", borderRadius: "20px", width: "125px" }}>
                                Cancelar
                            </Button>
                            <Button onClick={handleConfirmSwitch} style={{ background: "#6750A4", color: "#ffffff", borderRadius: "20px", width: "125px" }} >
                                Desactivar
                            </Button>
                        </DialogActions>
                    </Dialog>

                    <Button style={CrearStyle} onClick={handleOpenCreateDialog2}>
                        <div className={kanit.className} style={{ fontSize: "16px", textTransform: "none", fontWeight: "500", width: "270px", color: "#3E44CC" }}>
                            Crear
                        </div>
                        <AddIcon style={{ color: "#333E8E", marginLeft: "10px" }} />
                    </Button>
                    <Dialog open={isCreateDialogOpen} onClose={handleCloseCreateDialog}>
                        <DialogTitle style={{ fontSize: "16px", color: "#7E57C6", width: "300px", textAlign: "center" }}>Editar Asignatura</DialogTitle>
                        <DialogContent style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <TextField style={{ width: "210px", height: "56px", borderColor: "#7E57C266", marginBottom: "20px" }} label="Nombre" />
                            <TextField style={{ width: "210px", height: "56px", borderColor: "#7E57C266", marginBottom: "20px" }} label="Código" />
                            <TextField style={{ width: "210px", height: "56px", borderColor: "#7E57C266", marginBottom: "20px" }} label="Creditos" />
                            <TextField style={{ width: "210px", height: "56px", borderColor: "#7E57C266" }} label="Profesor" />
                        </DialogContent>
                        <DialogActions style={{ justifyContent: "center" }}>
                            <Button onClick={handleCloseCreateDialog} style={{ background: "#ffffff", color: "#6750A4", border: "1px solid #6750A4", borderRadius: "20px", width: "125px" }}>
                                Cancelar
                            </Button>
                            <Button onClick={() => setEditConfirmationOpen(true)} style={{ background: "#6750A4", color: "#ffffff", borderRadius: "20px", width: "125px" }}>
                                Guardar
                            </Button>
                            <Dialog open={isEditConfirmationOpen} onClose={handleCloseEditConfirmation}>
                                <DialogTitle style={{ fontSize: "16px", color: "#7E57C6", width: "300px", textAlign: "center" }}>Confirmación de Edición</DialogTitle>
                                <DialogContent style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <p>¿Desea editar esta asignatura?</p>
                                </DialogContent>
                                <DialogActions style={{ justifyContent: "center" }}>
                                    <Button onClick={handleCloseEditConfirmation} style={{ background: "#ffffff", color: "#6750A4", border: "1px solid #6750A4", borderRadius: "20px", width: "125px" }}>
                                        Cancelar
                                    </Button>
                                    <Button onClick={handleEditAsignatura} style={{ background: "#6750A4", color: "#ffffff", borderRadius: "20px", width: "125px" }}>
                                        Confirmar
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </DialogActions>
                    </Dialog>

                    <Dialog open={isCreateDialogOpen2} onClose={handleCloseCreateDialog2}>
                        <DialogTitle style={{ fontSize: "16px", color: "#7E57C6", width: "300px", textAlign: "center" }}>Crear Asignatura</DialogTitle>
                        <DialogContent style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <TextField style={{ width: "210px", height: "56px", borderRadius: "90px", borderColor: "#7E57C266", marginTop: "20px" }} label="Nombre" />
                            <TextField style={{ width: "210px", height: "56px", borderRadius: "90px", borderColor: "#7E57C266", marginTop: "20px" }} label="Código" />
                            <TextField style={{ width: "210px", height: "56px", borderRadius: "90px", borderColor: "#7E57C266", marginTop: "20px" }} label="Creditos" />
                            <TextField style={{ width: "210px", height: "56px", borderRadius: "90px", borderColor: "#7E57C266", marginTop: "20px" }} label="Profesor" />
                        </DialogContent>
                        <DialogActions style={{ justifyContent: "center" }}>
                            <Button onClick={handleCloseCreateDialog2} style={{ background: "#ffffff", color: "#6750A4", border: "1px solid #6750A4", borderRadius: "20px", width: "125px" }}>
                                Cancelar
                            </Button>
                            <Button onClick={handleOpenSaveConfirmation} style={{ background: "#6750A4", color: "#ffffff", borderRadius: "20px", width: "125px" }} >
                                Guardar
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <Dialog open={isSaveConfirmationOpen} onClose={handleCloseSaveConfirmation}>
                        <DialogTitle style={{ fontSize: "16px", color: "#7E57C6", width: "300px", textAlign: "center" }}>Confirmación de Guardado</DialogTitle>
                        <DialogContent style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <p>¿Desea crear esta asignatura?</p>
                        </DialogContent>
                        <DialogActions style={{ justifyContent: "center" }}>
                            <Button onClick={handleCloseSaveConfirmation} style={{ background: "#ffffff", color: "#6750A4", border: "1px solid #6750A4", borderRadius: "20px", width: "125px" }}>
                                Cancelar
                            </Button>
                            <Button onClick={handleSaveAsignatura} style={{ background: "#6750A4", color: "#ffffff", borderRadius: "20px", width: "125px" }} >
                                Confirmar
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
                <Paper elevation={0} style={paperStyle}>
                </Paper>
            </Paper>
        </div>
    );
}

