"use client"
import React, { useState } from "react";
import SidebarDocente from "@/components/Sidebar/sidebarDocente/SidebarDocente";
import { Button, IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";
import 'bootstrap/dist/css/bootstrap.css';
import Paper from "@mui/material/Paper";
import Image from "next/image";
import { useStyles } from "../layout";
import { styled } from '@mui/system';
import { Tabs } from '@mui/base/Tabs';
import { TabsList } from '@mui/base/TabsList';
import { TabPanel } from '@mui/base/TabPanel';
import { buttonClasses } from '@mui/base/Button';
import { Tab, tabClasses } from '@mui/base/Tab';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Kanit } from "next/font/google";
import EditIcon from "@mui/icons-material/EditOutlined";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Theme from "../theme";
import Badge from '@mui/material/Badge';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField, DialogContent, DialogActions } from '@mui/material';


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
};

const notificationsIconStyle = {
    height: "35px",
    width: "35px",
};

const paperStyle = {
    width: "472px",
    marginTop: "30px",
    marginLeft: "60px",
};

const UserStyle = {
    display: "flex",
    flexDirection: "row",
    marginLeft: "-30px",
};

const userInfoStyle = {
    fontSize: "18px",
    color: "grey",
    display: "flex",
    flexDirection: "column",
    marginLeft: "40px",
    marginTop: "10px"
};

const StyledTab = styled(Tab)`
    color: ${Theme.palette.primary.main};
    cursor: pointer;
    font-weight: 400;
    background-color: white;
    width: 25%;
    height: 40px;
    padding: 10px 12px;
    margin: 8%;
    border: 2px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 30px;
    align-items: center;
    fontfamily: Kanit, sans-serif;
  
    &:focus {
      outline: 3px solid ${Theme.palette.primary.main};
    }
  
    &.${tabClasses.selected} {
      background-color: ${Theme.palette.primary.main};
      color: white;
    }
  
    &.${buttonClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;

const StyledTabPanel = styled(TabPanel)(
    ({ theme }) => `
    width: 89%;
    font-family: Kanit;
    font-size: 0.875rem;
    padding: 20px 12px
    opacity: 0.6;
    margin-left: 100px;
    margin-top: 20px;
    `,
);

const StyledTabsList = styled(TabsList)(
    ({ theme }) => `
    min-width: 1000px;
    height: 70px;
    background-color: white;
    border-radius: 40px;
    border: 2px solid ${Theme.palette.primary.main};
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-between;
    margin-left: 80px;
    `,
);

const AsignaturasStyle = {
    width: '100%',
    height: '100%',
    marginLeft: "10px",
    fontWeight: "bold",
}

const EditButton = styled(Button)(({ theme }) => ({
    color: "#e4d1d1",
    backgroundColor: "#e4d1d1",
    '&:hover': {
        backgroundColor: "#a99b9b",
    },
    borderRadius: "20px",
    marginRight: "10px",
    height: "40px",
    width: " 40px",
    alignSelf: "center",
}));

export default function Calificaciones_Estudiante() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const [isGradeDialogOpen, setGradeDialogOpen] = useState(false);
    const [isSecondGradeDialogOpen, setSecondGradeDialogOpen] = useState(false);
    const [baseGrade, setBaseGrade] = useState(''); // Estado para la calificación base
    const [obtainedGrade, setObtainedGrade] = useState(''); // Estado para la calificación obtenida
    const [secondBaseGrade, setSecondBaseGrade] = useState(''); // Estado para la segunda calificación base
    const [secondObtainedGrade, setSecondObtainedGrade] = useState(''); // Estado para la segunda calificación obtenida


    const handleCloseGradeDialog = () => {
        setGradeDialogOpen(false);
    };

    const handleSaveGrades = () => {
        // Aquí puedes agregar la lógica para guardar las calificaciones
        console.log('Calificación base:', baseGrade);
        console.log('Calificación obtenida:', obtainedGrade);

        // Limpia los campos y cierra el diálogo
        setBaseGrade('');
        setObtainedGrade('');
        handleCloseGradeDialog();
    };

    const handleCloseSecondGradeDialog = () => {
        setSecondGradeDialogOpen(false);
    };

    const handleSaveSecondGrades = () => {
        // Aquí puedes agregar la lógica para guardar las segundas calificaciones
        console.log('Segunda calificación base:', secondBaseGrade);
        console.log('Segunda calificación obtenida:', secondObtainedGrade);

        // Limpia los campos y cierra el diálogo
        setSecondBaseGrade('');
        setSecondObtainedGrade('');
        handleCloseSecondGradeDialog();
    };

    const EachStudentStyle = {
        display: "flex",
        backgroundColor: "#f4eeff",
        borderRadius: "20px",
        width: "100%",
        height: "80px",
        justifySelf: "center",
        marginTop: "0px",
        marginBottom: "10px",
    };

    return (
        <paper style={wallpaperStyle}>
            <SidebarDocente />
            <Paper elevation={3} style={useStyles.paperBig}>
                <Paper elevation={0} style={paperStyle}>
                    <paper style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
                        <paper style={UserStyle}>
                            <Image src="https://github.com/JuanDanielU/DisBG/blob/main/Empty-profile-picture.png?raw=true" alt="Profile picture" height={100} width={100} />
                            <paper style={userInfoStyle}>
                                Nombre: <div style={{ fontSize: "26px", color: "black" }}>Nombre y Apellido</div><paper>ID: <div style={{ fontSize: "26px", color: "black" }}>ID</div></paper>
                                <Tabs className={kanit.className} defaultValue={0}>
                                    <StyledTabsList>
                                        <StyledTab value={0}>Finales</StyledTab>
                                        <StyledTab value={1}>Medio Termino</StyledTab>
                                    </StyledTabsList>
                                    <StyledTabPanel style={{ height: "20" }} value={0}>
                                        <Accordion style={{ border: '2px solid', borderColor: Theme.palette.primary.main, borderRadius: "20px" }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon style={{ color: Theme.palette.primary.main, height: "35px", width: "35px" }} />}
                                                aria-controls="panel1bh-content"
                                                id="panel1bh-header">
                                                <ListItemText style={AsignaturasStyle} primary=<span style={{ fontWeight: "bold", font: "kanit" }}>Aseguramiento de la Calidad</span>
                                                    secondary={
                                                        <paper>
                                                            <span>Profesor/a:</span>
                                                            <br style={{ marginTop: "20px" }} />
                                                            <span>Correo:</span>
                                                        </paper>
                                                    } />
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <paper style={EachStudentStyle}>
                                                    <ListItem>
                                                        <ListItemAvatar>
                                                            <Avatar style={{ color: "black", background: "transparent" }}>
                                                                <AccountCircleOutlinedIcon style={{ width: "38px", height: "38px" }} />
                                                            </Avatar>
                                                        </ListItemAvatar>
                                                        <ListItemText primary=<span style={{ fontWeight: "bold", font: "kanit" }}>Juan Daniel Ubiera</span>
                                                            secondary={
                                                                <paper>
                                                                    <span>juandanielu@est.example.edu</span>
                                                                </paper>

                                                            } />
                                                        <EditButton variant="contained" onClick={() => setGradeDialogOpen(true)}>
                                                            <EditIcon style={{ height: "28", width: "28", color: Theme.palette.primary.main }} />
                                                        </EditButton>
                                                        <Dialog open={isGradeDialogOpen} onClose={handleCloseGradeDialog}>
                                                            <DialogTitle style={{ fontSize: "16px", color: "#7E57C6", width: "300px", textAlign: "center" }}>Calificar Final</DialogTitle>
                                                            <DialogContent style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                                                <TextField
                                                                    style={{ width: "300px", height: "56px", borderRadius: "20px", borderColor: "#7E57C266", marginTop: "20px" }}
                                                                    label="Calificación Base Final"
                                                                    value={baseGrade}
                                                                    onChange={(e) => setBaseGrade(e.target.value)}
                                                                />
                                                                <TextField
                                                                    style={{ width: "300px", height: "56px", borderRadius: "20px", borderColor: "#7E57C266", marginTop: "20px" }}
                                                                    label="Calificación Obtenida Final"
                                                                    value={obtainedGrade}
                                                                    onChange={(e) => setObtainedGrade(e.target.value)}
                                                                />
                                                            </DialogContent>
                                                            <DialogActions style={{ justifyContent: "center" }}>
                                                                <Button
                                                                    onClick={handleCloseGradeDialog}
                                                                    style={{ background: "#ffffff", color: "#6750A4", border: "1px solid #6750A4", borderRadius: "20px", width: "125px" }}
                                                                >
                                                                    Cancelar
                                                                </Button>
                                                                <Button
                                                                    onClick={handleSaveGrades}
                                                                    style={{ background: "#6750A4", color: "#ffffff", borderRadius: "20px", width: "125px" }}
                                                                >
                                                                    Guardar
                                                                </Button>
                                                            </DialogActions>
                                                        </Dialog>
                                                    </ListItem>
                                                </paper>
                                            </AccordionDetails>
                                        </Accordion>
                                    </StyledTabPanel>
                                    <StyledTabPanel value={1}>
                                        <Accordion style={{ border: '2px solid', borderColor: Theme.palette.primary.main, borderRadius: "20px" }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon style={{ color: Theme.palette.primary.main, height: "35px", width: "35px" }} />}
                                                aria-controls="panel1bh-content"
                                                id="panel1bh-header"
                                            >
                                                <ListItemText style={AsignaturasStyle} primary=<span style={{ fontWeight: "bold", font: "kanit" }}>Aseguramiento de la Calidad</span>
                                                    secondary={
                                                        <paper>
                                                            <span>Profesor/a:</span>
                                                            <br style={{ marginTop: "20px" }} />
                                                            <span>Correo:</span>
                                                        </paper>
                                                    } />
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <paper style={EachStudentStyle}>
                                                    <ListItem>
                                                        <ListItemAvatar>
                                                            <Avatar style={{ color: "black", background: "transparent" }}>
                                                                <AccountCircleOutlinedIcon style={{ width: "38px", height: "38px" }} />
                                                            </Avatar>
                                                        </ListItemAvatar>
                                                        <ListItemText primary=<span style={{ fontWeight: "bold" }}>Juan Daniel Ubiera</span>
                                                            secondary={
                                                                <paper>
                                                                    <span>juandanielu@est.example.edu</span>
                                                                </paper>
                                                            } />
                                                        <EditButton variant="contained" onClick={() => setSecondGradeDialogOpen(true)}>
                                                            <EditIcon style={{ height: "28", width: "28", color: Theme.palette.primary.main }} />
                                                        </EditButton>
                                                        <Dialog open={isGradeDialogOpen} onClose={handleCloseGradeDialog}>
                                                            {/* ... Ventana emergente similar para el primer botón de "Editar" */}
                                                        </Dialog>
                                                        <Dialog open={isSecondGradeDialogOpen} onClose={handleCloseSecondGradeDialog}>
                                                            <DialogTitle style={{ fontSize: "16px", color: "#7E57C6", width: "300px", textAlign: "center" }}>Calificar Medio Término</DialogTitle>
                                                            <DialogContent style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                                                <TextField
                                                                    style={{ width: "300px", height: "56px", borderRadius: "20px", borderColor: "#7E57C266", marginTop: "20px" }}
                                                                    label="Calificación Base MT"
                                                                    value={secondBaseGrade}
                                                                    onChange={(e) => setSecondBaseGrade(e.target.value)}
                                                                />
                                                                <TextField
                                                                    style={{ width: "300px", height: "56px", borderRadius: "20px", borderColor: "#7E57C266", marginTop: "20px" }}
                                                                    label="Calificación Obtenida MT"
                                                                    value={secondObtainedGrade}
                                                                    onChange={(e) => setSecondObtainedGrade(e.target.value)}
                                                                />
                                                            </DialogContent>
                                                            <DialogActions style={{ justifyContent: "center" }}>
                                                                <Button
                                                                    onClick={handleCloseSecondGradeDialog}
                                                                    style={{ background: "#ffffff", color: "#6750A4", border: "1px solid #6750A4", borderRadius: "20px", width: "125px" }}
                                                                >
                                                                    Cancelar
                                                                </Button>
                                                                <Button
                                                                    onClick={handleSaveSecondGrades}
                                                                    style={{ background: "#6750A4", color: "#ffffff", borderRadius: "20px", width: "125px" }}
                                                                >
                                                                    Guardar
                                                                </Button>
                                                            </DialogActions>
                                                        </Dialog>
                                                    </ListItem>
                                                </paper>
                                            </AccordionDetails>
                                        </Accordion>
                                    </StyledTabPanel>
                                </Tabs>
                            </paper>
                            <div style={{
                                float: "right", display: "flex",
                                position: "absolute",
                                float: "right",
                                marginLeft: "83.5rem",
                                marginTop: "-0.5rem",
                            }}>
                                <IconButton style={notificationsButtonStyle}>
                                        <NotificationsIcon style={notificationsIconStyle} />
                                </IconButton>
                            </div>
                        </paper>
                    </paper>
                </Paper>
            </Paper>
        </paper>
    );
}
