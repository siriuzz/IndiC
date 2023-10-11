"use client";
import React from "react";
import SidebarEstudiante from "@/components/Sidebar/sidebarEstudiante/SidebarEstudiante"
import Paper from "@mui/material/Paper";
import { useStyles } from "../layout";
import SearchBar from "@/components/SearchBar/SearchBar";
import AgreeCancelButtons from "@/components/AgreeCancelButtons/AgreeCancelButtons";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { Accordion } from "@mui/material";
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Theme from "../theme";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useState } from 'react';
import { Kanit } from "next/font/google";
import IconButton from '@mui/material/IconButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormGroup from '@mui/material/FormGroup';
import Grid from "@mui/material/Grid";
import AddIcon from '@mui/icons-material/Add';
import { ThemeProvider } from "@mui/material/";

const kanit = Kanit({ subsets: ['latin'], weight: ["400", "700"] })

export default function SeleccionarAsignaturasPage() {

    const [expanded, setExpanded] = React.useState(false);
    const [expandedRow, setExpandedRow] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const options = ['Opción 1', 'Opción 2', 'Opción 3'];
    const [selectedId, setSelectedId] = useState();
    const [searchValue, setSearchValue] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const [data, setData] = useState([
        { id: 1, tipo: 'T', asignatura: 'Tendencias', cupos: 30, seccion: 'A', profesor: "Juan Perez", lun: "13/15", jue: "13/15", sab: "13/15" },
        { id: 2, tipo: 'T', asignatura: 'Ecuaciones Diferenciales', cupos: 25, seccion: 'B', profesor: "Juan Perez", lun: "13/15", jue: "13/15", sab: "13/15" },
        { id: 3, tipo: 'T', asignatura: 'Desarrollo Web', cupos: 20, seccion: 'C', profesor: "Juan Perez", lun: "13/15", jue: "13/15", sab: "13/15" },
    ]);

    const [data2, setData2] = useState([
        { id: 4, tipo: 'T', asignatura: 'Aseguramiento de la Calidad', cupos: 30, seccion: 'A', profesor: "Francia Mejia", lun: "13/15", jue: "13/15", sab: "12/14" },
        { id: 5, tipo: 'T', asignatura: 'Aseguramiento de la Calidad', cupos: 25, seccion: 'B', profesor: "Francia Mejia", lun: "18/20", jue: "16/18", sab: "14/16" },
        { id: 6, tipo: 'T', asignatura: 'Aseguramiento de la Calidad', cupos: 20, seccion: 'C', profesor: "Francia Mejia", lun: "20/22", jue: "20/22", sab: "16/18" },
    ]);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const wallpaperStyle = {
        backgroundColor: "#dcd6f7",
        backgroundSize: "contain",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        justifyContent: "left"
    };

    const SearchBarContainer = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "1%",
    };

    const AsignaturasStyle = {
        width: '100%',
        height: '100%',
        marginLeft: "10px",
        marginTop: "10px",
        fontWeight: "bold",
    };

    const tableCellStyle = {
        fontWeight: "bold",
        fontSize: "18px",
    };

    const tableCellStyle2 = {
        fontWeight: "bold",
    };

    const handleAddClick = () => {
        // Comprueba si se ha seleccionado una opción
        if (selectedOption === null) {
            alert("Seleccione una seccion")
        }
        else if (data.some(item => item.asignatura === data2[selectedOption].asignatura)) {
            alert("Ya se ha seleccionado esta asignatura")
        }
        else {
            setData(prevData => [...prevData, data2[selectedOption]]);
        }
    };

    const handleSearchClick = () => {
        if (searchValue === '') {
            setFilteredData('');
        }
        else {
            const filtered = data.filter(item => item.asignatura.toLowerCase().includes(searchValue.toLowerCase()));
        setFilteredData(filtered);
        }
    }

    return (
        <div className={kanit.className} style={wallpaperStyle}>
            <SidebarEstudiante />
            <Paper elevation={3} style={useStyles.paperBig}>
                <AgreeCancelButtons />

                <div style={SearchBarContainer}>
                    <SearchBar placeholder={"Buscar asignaturas"} value={searchValue} onChange={(event) => setSearchValue(event.target.value)} onClick={handleSearchClick}/>
                </div>

                <ThemeProvider theme={Theme}>
                    <div style={{ display: "flex", height: "255px", flexDirection: "column", marginTop: "1%", overflow: "auto" }}>
                        {filteredData.map(() => (
                            <Accordion  className={kanit.className} style={{ marginBottom: "0.5rem", border: '2px solid', width: "860px", borderColor: Theme.palette.primary.main, borderRadius: "20px", height: "4.8rem" }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon style={{ color: Theme.palette.primary.main, height: "35px", width: "35px" }} />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header">
                                    <ListItemText className={kanit.className} style={AsignaturasStyle} primary=<span style={{ fontSize: "20px", fontWeight: "bold" }}>Aseguramiento de la Calidad</span> />
                                    <IconButton aria-label="add" style={{ marginLeft: "auto", marginRight: "10px" }} onClick={handleAddClick}>
                                        <AddIcon style={{ color: Theme.palette.primary.main, height: "35px", width: "35px" }} />
                                    </IconButton>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <paper >
                                        <TableContainer style={{ backgroundColor: "transparent", borderRadius: "20px" }}>
                                            <Table>
                                                <TableHead style={{ backgroundColor: Theme.palette.secondary.table, }}>
                                                    <TableRow>
                                                        <TableCell></TableCell>
                                                        <TableCell style={tableCellStyle2}>Tipo</TableCell>
                                                        <TableCell style={tableCellStyle2}>cupos</TableCell>
                                                        <TableCell style={tableCellStyle2}>Seccion</TableCell>
                                                        <TableCell style={tableCellStyle2}>Profesor</TableCell>
                                                        <TableCell style={tableCellStyle2}>Lun</TableCell>
                                                        <TableCell style={tableCellStyle2}>Mar</TableCell>
                                                        <TableCell style={tableCellStyle2}>Mier</TableCell>
                                                        <TableCell style={tableCellStyle2}>Jue</TableCell>
                                                        <TableCell style={tableCellStyle2}>Vie</TableCell>
                                                        <TableCell style={tableCellStyle2}>Sab</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {filteredData.map((row, index) => (
                                                        <TableRow key={row.id}>
                                                            <TableCell>
                                                                <RadioGroup
                                                                    value={selectedOption}
                                                                    onChange={(event) => setSelectedOption(event.target.value)}
                                                                >
                                                                    <FormControlLabel
                                                                        value={index.toString()}
                                                                        control={<Radio style={{ marginLeft: "50%" }} />}
                                                                        label=""
                                                                    />
                                                                </RadioGroup>
                                                            </TableCell>
                                                            <TableCell>{row.tipo}</TableCell>
                                                            <TableCell>{row.cupos}</TableCell>
                                                            <TableCell>{row.seccion}</TableCell>
                                                            <TableCell>{row.profesor}</TableCell>
                                                            <TableCell>{row.lun}</TableCell>
                                                            <TableCell>{row.mar}</TableCell>
                                                            <TableCell>{row.mier}</TableCell>
                                                            <TableCell>{row.jue}</TableCell>
                                                            <TableCell>{row.vier}</TableCell>
                                                            <TableCell>{row.sab}</TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </paper>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </div>
                </ThemeProvider>

                <div style={{ display: "flex", justifyContent: 'center', marginTop: "1%" }}>
                    <TableContainer component={Paper} style={{ width: "90%", backgroundColor: "transparent", borderRadius: "20px", border: "2px solid", borderColor: Theme.palette.primary.main }}>
                        <Table>
                            <TableHead style={{ backgroundColor: Theme.palette.secondary.table }}>
                                <TableRow>
                                    <TableCell style={tableCellStyle}>Asignatura</TableCell>
                                    <TableCell style={tableCellStyle}>cupos</TableCell>
                                    <TableCell style={tableCellStyle}>Seccion</TableCell>
                                    <TableCell style={tableCellStyle}>Profesor</TableCell>
                                    <TableCell style={tableCellStyle}>Lun</TableCell>
                                    <TableCell style={tableCellStyle}>Mar</TableCell>
                                    <TableCell style={tableCellStyle}>Mier</TableCell>
                                    <TableCell style={tableCellStyle}>Jue</TableCell>
                                    <TableCell style={tableCellStyle}>Vie</TableCell>
                                    <TableCell style={tableCellStyle}>Sab</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((row) => (
                                    <>
                                        <TableRow key={row.id}>
                                            <TableCell>{row.asignatura}</TableCell>
                                            <TableCell>{row.cupos}</TableCell>
                                            <TableCell>{row.seccion}</TableCell>
                                            <TableCell>{row.profesor}</TableCell>
                                            <TableCell>{row.lun}</TableCell>
                                            <TableCell>{row.mar}</TableCell>
                                            <TableCell>{row.mier}</TableCell>
                                            <TableCell>{row.jue}</TableCell>
                                            <TableCell>{row.vier}</TableCell>
                                            <TableCell>{row.sab}</TableCell>
                                        </TableRow>
                                    </>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </Paper>
        </div >
    );
}