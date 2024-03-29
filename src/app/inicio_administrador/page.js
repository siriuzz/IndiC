"use client"
import React, { useEffect } from "react";
import SidebarAdministrador from "@/components/Sidebar/sidebarAdministrador/SidebarAdministrador";
import SearchBar from "@/components/SearchBar/SearchBar";
import { IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";
import 'bootstrap/dist/css/bootstrap.css'
import Paper from "@mui/material/Paper";
import { useStyles } from "../layout";
import { Kanit } from "next/font/google";
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import theme from "../theme";
import CircularProgress from "@mui/material/CircularProgress";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import axios from "axios";
import Badge from '@mui/material/Badge';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";
import FormGroup from '@mui/material/FormGroup';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

// require('dotenv').config()

const kanit = Kanit({ subsets: ['latin'], weight: ["400", "700"] })

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

const wallpaperStyle = {
    backgroundColor: "#dcd6f7",
    minHeight: "100vh",
    minWidth: "100vw",
    display: "flex",
    justifyContent: "left",
};

const UsuariosStyle = {
    fontSize: "24px",
    fontFamily: kanit,
    fontStyle: "bold",
    width: "600px",
    display: "flex",
    // marginTop: "2.5%",
    borderRadius: "10px",
    height: "25rem",
    overflowY: "auto",
};

const estudianteContainerStyle = {
    height: "160px",
    borderColor: theme.palette.primary.main,
    marginLeft: "10%",
    borderStyle: "solid",
    borderRadius: "40px",
    marginTop: "3%",
    display: "inline-flex",
};

const estudianteInfoStyle = {
    width: "30%",
    JustifyItems: "center",
    marginLeft: "5%",
    marginTop: "5%",
};

const estudianteTextStyle = {
    width: "100%",
    justifyContent: "center",
    fontSize: "20px",
};

const estudianteIndiceTextStyle = {
    marginTop: "15.5%",
    marginLeft: "-23%",
    fontSize: "32px",
};

const estudianteIconStyle = {
    height: "60px",
    width: "60px",
    marginLeft: "5%",
};

const docenteContainerStyle = {
    height: "160px",
    borderColor: theme.palette.primary.main,
    borderStyle: "solid",
    borderRadius: "40px",
    marginTop: "3%",
    marginLeft: "25%",
    display: "inline-flex",
};

const docenteInfoStyle = {
    width: "30%",
    JustifyItems: "center",
    marginLeft: "5%",
    marginTop: "4%",
};

const EachAsignaturaStyle = {
    backgroundColor: "#ffffff",
    borderTop: "3px solid #F5F5F5",
    borderRadius: "0px",
    width: "550px",
    justifySelf: "center",
    marginLeft: "17px",
    marginTop: "8px",
    marginBottom: "8px"
};

const ProfileIconStyle = {
    width: "30px",
    height: "30px",
    color: "black"
};


const EstadoStyle = {
    fontSize: "18px",
    fontFamily: kanit,
    fontStyle: "bold",
    display: "inline-flex",
    alignItems: "center",
};


const RightIconStyle = {
    width: "25px",
    height: "25px",
};

const notificationsButtonStyle = {
    color: "black",
    marginTop: "1%",
    width: "35px",
    height: "35px",
    display: "flex",
    marginRight: "24px",
};

const notificationsIconStyle = {
    height: "35px",
    width: "35px"
};

const handleOpenCreateDialog = () => {
    setCreateDialogOpen(true);
};

const handleCloseCreateDialog = () => {
    setCreateDialogOpen(false);
};

const handleCloseEditConfirmation = () => {
    setEditConfirmationOpen(false);
};

const handleEditUsuario = () => {
    // Aquí puedes agregar la lógica para editar la asignatura

    // Cierra el diálogo de confirmación
    handleCloseEditConfirmation();

};


const apiURL = process.env.NEXT_PUBLIC_API_HOST + ":" + process.env.NEXT_PUBLIC_API_PORT;

export default function InicioAdministrador() {

    const [isSwitchOn, setIsSwitchOn] = useState(true);
    const [isConfirmationDialogOpen, setConfirmationDialogOpen] = useState(false);
    const [isCreateDialogOpen, setCreateDialogOpen] = useState(false);
    const [isEditConfirmationOpen, setEditConfirmationOpen] = useState(false);
    const [analytics, setAnalytics] = useState({ estudiantesActivos: 0, estudiantes: 0, docentes: 0, docentesActivos: 0 }); // { estudiantesActivos: 0, estudiantes: 0, docentes: 0, docentesActivos: 0 }
    const [estado, setEstado] = React.useState();
    const [currentUserId, setCurrentUserId] = React.useState();
    const [count, setCount] = useState(0); //initial value of this 

    const [usuarios, setUsuarios] = useState([]);

    const handleSwitchToggle = (id) => {
        setCurrentUserId(id);
        // setCount((count) => count + 1);
        if (isSwitchOn) {
            setConfirmationDialogOpen(true); // Mostrar el mensaje de confirmación solo al apagar
        } else {
            // Cambiar el estado del interruptor directamente si está apagado
            setIsSwitchOn(true);
            // setUsuarios.id_estado = 1;
        }
    };

    const handleConfirmSwitch = () => {
        usuarios.find((usuario) => usuario.id == currentUserId).id_estado = 0;
        // Apagar el interruptor
        setIsSwitchOn(false);
        // setEstudiantes.id_estado = 0;
        setConfirmationDialogOpen(false);
    };

    const handleCancelSwitch = () => {
        setConfirmationDialogOpen(false);
    };

    const handleOpenCreateDialog = () => {
        setCreateDialogOpen(true);
    };

    const handleCloseCreateDialog = () => {
        setCreateDialogOpen(false);
    };

    const handleCloseEditConfirmation = () => {
        setEditConfirmationOpen(false);
    };

    const handleEditUsuario = () => {

        // Cierra el diálogo de confirmación
        handleCloseEditConfirmation();

    };

    useEffect(() => {
        if (analytics.estudiantesActivos == 0) {
            axios.get(`http://${apiURL}/api/Admins/analytics/get`).then((response) => {
                setAnalytics(response.data);
            });
        };

        // console.log(process.env.NEXT_PUBLIC_API_HOST);
        axios.post(`http://${apiURL}/api/token/validate`, { token: localStorage.getItem("jwtToken") }).then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
            localStorage.removeItem(`${process.env.NEXT_PUBLIC_JWT_NAME}`);
            window.location.href = '/login';
        });
        // const usuariosAxios = [];
        // async function getUsuarios() {
        //     usuariosAxios.push(estudiantes.data);
        //     // const docentes = await axios.get(`http://${apiURL}/api/Docentes`);
        //     // console.log(estudiantes.data, docentes.data)
        //     // usuarios.push(...docentes.data);
        //     // setUsuarios(usuarios);
        // }
        if (usuarios.length == 0) {

            axios.get(`http://${apiURL}/api/Estudiantes`).then((response) => {
                setUsuarios(response.data);
            });
        }

        // getUsuarios();
    }, []);

    return (
        <div style={wallpaperStyle}>
            <SidebarAdministrador />
            <Paper elevation={3} style={useStyles.paperBig}>
                <ThemeProvider theme={theme}>
                    <Paper elevation={0} style={{ display: "inline-flex", justifyContent: "space-between", width: "100%" }}>
                        <div style={estudianteContainerStyle}>
                            <div style={estudianteInfoStyle}>
                                <div style={estudianteTextStyle}>Estudiantes</div>
                                <SchoolOutlinedIcon style={estudianteIconStyle} />
                                <div style={estudianteTextStyle}>Inscritos</div>
                            </div>
                            <CircularProgress style={{ color: "#ebdfe6", marginLeft: "80px", marginTop: "5%" }} size={120} variant="determinate" value={100} />
                            <CircularProgress style={{ marginLeft: "-120px", display: "flex", marginTop: "5%" }} size={120} variant="determinate" value={78} />
                            <div style={estudianteIndiceTextStyle}>{analytics.estudiantesActivos}</div>
                        </div>
                        <div style={docenteContainerStyle}>
                            <div style={docenteInfoStyle}>
                                <div style={estudianteTextStyle}>Docentes</div>
                                <WorkOutlineOutlinedIcon style={estudianteIconStyle} />
                                <div style={estudianteTextStyle}>Trabajando</div>
                            </div>
                            <CircularProgress style={{ color: "#ebdfe6", marginLeft: "80px", marginTop: "5%" }} size={120} variant="determinate" value={100} />
                            <CircularProgress style={{ marginLeft: "-120px", display: "flex", marginTop: "5%" }} size={120} variant="determinate" value={78} />
                            <div style={estudianteIndiceTextStyle}>{analytics.docentesActivos}</div>
                        </div>
                        <IconButton style={notificationsButtonStyle}>
                            <NotificationsIcon style={notificationsIconStyle} />
                        </IconButton>
                    </Paper>
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
                        <Paper elevation={4} style={UsuariosStyle}>
                            <List >
                                <div style={{ marginLeft: "16px", marginTop: "10px" }}>
                                    <SearchBar placeholder="Buscar Usuarios" />
                                </div>
                                {
                                    usuarios.map((usuario) => {
                                        return (
                                            <div style={EachAsignaturaStyle} key={usuario.id}>
                                                <ListItem>
                                                    <ListItemAvatar>
                                                        <Avatar style={{ backgroundColor: '#FFFFFF' }}>
                                                            <AccountCircleOutlinedIcon style={ProfileIconStyle} />
                                                        </Avatar>
                                                    </ListItemAvatar>
                                                    <ListItemText primary={usuario.nombre} secondary={usuario.correo} />
                                                    <div style={EstadoStyle}>
                                                        {usuario.id_estado == 1 ? "Activo" : "Inactivo"}
                                                        <FormGroup style={{ marginLeft: "10px" }}>
                                                            <Stack direction="row" spacing={1} alignItems="center">
                                                                <AntSwitch
                                                                    checked={usuario.id_estado == 1 ? true : false}
                                                                    onChange={handleSwitchToggle(usuario.id)}
                                                                    inputProps={{ 'aria-label': 'ant design' }}
                                                                />
                                                            </Stack>
                                                        </FormGroup>
                                                        <IconButton style={{ marginLeft: "10px" }} onClick={handleOpenCreateDialog}>
                                                            <EditOutlinedIcon style={RightIconStyle} />
                                                        </IconButton>
                                                    </div>
                                                </ListItem>

                                            </div>

                                        );
                                    })
                                }
                                <Dialog open={isCreateDialogOpen} onClose={handleCloseCreateDialog}>
                                    <DialogTitle style={{ fontSize: "16px", color: "#7E57C6", width: "300px", textAlign: "center", fontSize: "24px", }}>Editar Usuario</DialogTitle>
                                    <DialogContent style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                        <TextField style={{ width: "210px", height: "56px", borderRadius: "90px", borderColor: "#7E57C266", marginBottom: "20px" }} label="Nombre" />
                                        <TextField style={{ width: "210px", height: "56px", borderRadius: "90px", borderColor: "#7E57C266", marginBottom: "20px" }} label="Correo" />
                                        <TextField style={{ width: "210px", height: "56px", borderRadius: "90px", borderColor: "#7E57C266", marginBottom: "20px" }} label="Telefono" />
                                        <TextField style={{ width: "210px", height: "56px", borderRadius: "90px", borderColor: "#7E57C266" }} label="Cedula" />
                                    </DialogContent>
                                    <DialogActions style={{ justifyContent: "center", marginBottom: "10px" }}>
                                        <Button onClick={handleCloseCreateDialog} style={{ background: "#ffffff", color: "#6750A4", border: "1px solid #6750A4", borderRadius: "20px", width: "125px" }}>
                                            Cancelar
                                        </Button>
                                        <Button onClick={() => setEditConfirmationOpen(true)} style={{ background: "#6750A4", color: "#ffffff", borderRadius: "20px", width: "125px" }}>
                                            Guardar
                                        </Button>
                                        <Dialog open={isEditConfirmationOpen} onClose={handleCloseEditConfirmation}>
                                            <DialogTitle style={{ fontSize: "16px", color: "#7E57C6", width: "300px", textAlign: "center" }}>Confirmación de Edición</DialogTitle>
                                            <DialogContent style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                                <p>¿Desea editar este usuario?</p>
                                            </DialogContent>
                                            <DialogActions style={{ justifyContent: "center" }}>
                                                <Button onClick={handleCloseEditConfirmation} style={{ background: "#ffffff", color: "#6750A4", border: "1px solid #6750A4", borderRadius: "20px", width: "125px" }}>
                                                    Cancelar
                                                </Button>
                                                <Button onClick={handleEditUsuario} style={{ background: "#6750A4", color: "#ffffff", borderRadius: "20px", width: "125px" }}>
                                                    Confirmar
                                                </Button>
                                            </DialogActions>
                                        </Dialog>
                                    </DialogActions>
                                </Dialog>
                                <Dialog open={isConfirmationDialogOpen} onClose={handleCancelSwitch}>
                                    <DialogContent style={{ borderRadius: "200px", height: "100px", justifyContent: "center" }}>
                                        ¿Está seguro que quiere desactivar este usuario?
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
                            </List>
                        </Paper>
                    </div>
                </ThemeProvider>
            </Paper>
        </div>
    );
}
