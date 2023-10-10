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
import { RadioButtonChecked, UploadOutlined } from "@mui/icons-material";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useState } from 'react';
import { Kanit } from "next/font/google";
import IconButton from '@mui/material/IconButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormGroup from '@mui/material/FormGroup';
import Grid from "@mui/material/Grid";

const kanit = Kanit({ subsets: ['latin'], weight: ["400", "700"] })

export default function SeleccionarAsignaturasPage() {

    const [expanded, setExpanded] = React.useState(false);
    const [expandedRow, setExpandedRow] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const options = ['Opción 1', 'Opción 2', 'Opción 3'];
    const [selectedId, setSelectedId] = useState();

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
        marginTop: "3rem",
    };

    const AsignaturasStyle = {
        width: '100%',
        height: '100%',
        marginLeft: "10px",
        marginTop: "10px",
        fontWeight: "bold",
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

    const tableCellStyle = {
        fontWeight: "bold",
        fontSize: "18px",
    };

    const data = [
        { id: 1, tipo: 'T', cupos: 30, seccion: 'A', profesor: "Juan Perez" },
        { id: 2, tipo: 'T', cupos: 25, seccion: 'B' },
        { id: 3, tipo: 'T', cupos: 20, seccion: 'C' },
        // puedes agregar más datos aquí
    ];

    const data2 = [
        { id: 1, asignatura: 'Mate', cupos: 30, seccion: 'A', profesor: "Juan Perez" },
        { id: 2, asignatura: 'Ecuaciones', cupos: 25, seccion: 'B', profesor: "Juan Perez" },
        { id: 3, asignatura: 'Desarrollo Web', cupos: 20, seccion: 'C', profesor: "Juan Perez" },
        // puedes agregar más datos aquí
    ];

    const renderOptionTable = (option, index) => {
        return (
            <Table>
                <TableBody>
                    <TableRow>
                            <RadioGroup
                                value={selectedOption}
                                onChange={(event) => setSelectedOption(parseInt(event.target.value))}
                            >
                                <FormControlLabel
                                    value={index.toString()}
                                    control={<Radio />}
                                    label=""
                                />
                            </RadioGroup>
                            {data2.map((row) => (
                                    <>
                                        <TableRow key={row.id} onClick={() => setExpandedRow(row.id === expandedRow ? null : row.id)}>
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
                    </TableRow>
                </TableBody>
            </Table>
        );
    };


    return (
        <div className={kanit.className} style={wallpaperStyle}>
            <SidebarEstudiante />
            <Paper elevation={3} style={useStyles.paperBig}>
                <AgreeCancelButtons />

                <div style={{ display: "flex", justifyContent: 'center', marginTop: "1%" }}>
                    <TableContainer style={{ width: "90%", backgroundColor: "transparent", borderRadius: "20px", border: "1px solid", borderColor: Theme.palette.primary.main }}>
                        <Table>
                            <TableHead style={{ backgroundColor: Theme.palette.secondary.table }}>
                                <TableRow >
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
                                {data2.map((row) => (
                                    <>
                                        <TableRow key={row.id} onClick={() => setExpandedRow(row.id === expandedRow ? null : row.id)}>
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
                                        {row.id === expandedRow && (
                                            <TableRow>
                                                <TableCell colSpan={10}>
                                                    <Grid container spacing={0} alignItems="center">
                                                        <Grid item>
                                                            {options.map((option, index) => (
                                                                <div key={index}>
                                                                    {renderOptionTable(option, index)}
                                                                </div>
                                                            ))}
                                                        </Grid>
                                                    </Grid>
                                                </TableCell>
                                            </TableRow>
                                        )}
                                    </>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>

                <div style={SearchBarContainer}>
                    <SearchBar placeholder={"Buscar asignaturas"} />
                </div>
                <div style={{ display: "flex", justifyContent: 'center', marginTop: "2%" }}>
                    <Accordion className={kanit.className} style={{ border: '2px solid', width: "60%", borderColor: Theme.palette.primary.main, borderRadius: "20px" }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: Theme.palette.primary.main, height: "35px", width: "35px" }} />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header">
                            <ListItemText className={kanit.className} style={AsignaturasStyle} primary=<span style={{ fontSize: "20px", fontWeight: "bold" }}>Aseguramiento de la Calidad</span> />
                            <IconButton aria-label="add" style={{ marginLeft: "auto", marginRight: "10px" }}>
                                <UploadOutlined style={{ color: Theme.palette.primary.main, height: "35px", width: "35px" }} />
                            </IconButton>
                        </AccordionSummary>
                        <AccordionDetails>
                            <paper >
                                <TableContainer style={{ backgroundColor: "transparent" }}>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell></TableCell>
                                                <TableCell>Tipo</TableCell>
                                                <TableCell>cupos</TableCell>
                                                <TableCell>Seccion</TableCell>
                                                <TableCell>Profesor</TableCell>
                                                <TableCell>Lun</TableCell>
                                                <TableCell>Mar</TableCell>
                                                <TableCell>Mier</TableCell>
                                                <TableCell>Jue</TableCell>
                                                <TableCell>Vie</TableCell>
                                                <TableCell>Sab</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {data.map((row) => (
                                                <TableRow key={row.id}>
                                                    <TableCell>
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
                </div>
            </Paper>
        </div >
    );
}