"use client";
import React, { useEffect } from "react";
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
import axios from "axios";
import { set, sub } from "date-fns";
import { ConstructionOutlined, RawOff } from "@mui/icons-material";
import Delete from "@mui/icons-material/Delete";

const kanit = Kanit({ subsets: ['latin'], weight: ["400", "700"] })
const apiURL = process.env.NEXT_PUBLIC_API_HOST + ":" + process.env.NEXT_PUBLIC_API_PORT;

export default function SeleccionarAsignaturasPage() {

    const [expanded, setExpanded] = React.useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const [searchValue, setSearchValue] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([
        // { id: 1, tipo: 'T', asignatura: 'Tendencias', cupos: 30, seccion: 'A', profesor: "Juan Perez", lun: "13/15", jue: "13/15", sab: "13/15" },
        // { id: 2, tipo: 'T', asignatura: 'Ecuaciones Diferenciales', cupos: 25, seccion: 'B', profesor: "Juan Perez", lun: "13/15", jue: "13/15", sab: "13/15" },
        // { id: 3, tipo: 'T', asignatura: 'Desarrollo Web', cupos: 20, seccion: 'C', profesor: "Juan Perez", lun: "13/15", jue: "13/15", sab: "13/15" },
        // { id: 7, tipo: 'T', asignatura: 'Aseguramiento de la Calidad', cupos: 20, seccion: 'C', profesor: "Francia Mejia", lun: "20/22", jue: "20/22", sab: "16/18" },
    ]);
    const [selectedData, setSelectedData] = useState([]);


    useEffect(() => {
        setLoading(true);
        if (localStorage.getItem('secciones') !== null) {
            setSelectedData(JSON.parse(localStorage.getItem('secciones')));
        }
        const user = JSON.parse(localStorage.getItem('user'));
        const fetchData = async () => {
            await axios.get(`http://${apiURL}/api/Secciones/Seleccion/${user.id}`).then((response) => {
                console.log(response.data);
                setData(response.data);
                setLoading(false);
            })
        };
        fetchData();

    }, []);


    // const [data2, setData2] = useState([
    //     { id: 4, tipo: 'T', asignatura: 'Aseguramiento de la Calidad', cupos: 30, seccion: 'A', profesor: "Francia Mejia", lun: "13/15", jue: "13/15", sab: "12/14" },
    //     { id: 5, tipo: 'T', asignatura: 'Aseguramiento de la Calidad', cupos: 25, seccion: 'B', profesor: "Francia Mejia", lun: "18/20", jue: "16/18", sab: "14/16" },
    //     { id: 6, tipo: 'T', asignatura: 'Aseguramiento de la Calidad', cupos: 20, seccion: 'C', profesor: "Francia Mejia", lun: "20/22", jue: "20/22", sab: "16/18" },
    // ]);

    const setSearchValueData = (value) => {
        setSearchValue(value);
    }

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
        setSelectedOption(null);
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
        else if (selectedData.some(item => item.Asignatura.nombre === filteredData[selectedOption].Asignatura.nombre)) {
            alert("Ya se ha seleccionado esta asignatura")
        }
        else {
            setSelectedData(prevData => [...prevData, filteredData[selectedOption]]);
        }

        setSelectedOption(null);
    };

    const horariosInOrder = [];
    const secciones = [];
    const handleSearchClick = () => {
        if (searchValue === '') {
            setFilteredData([]);
        }
        if (data.length > 0) {
            data.filter(item => {
                // console.log(item);
                const nombreAsignatura = item.Asignatura.nombre.toLowerCase().replaceAll(' ', '').replaceAll('á', 'a').replaceAll('é', 'e').replaceAll('í', 'i').replaceAll('ó', 'o').replaceAll('ú', 'u');
                if (nombreAsignatura.includes(searchValue.toLowerCase().replaceAll(' ', ''))) {

                    secciones.push(item);
                }
                //     const subHorarios = [];
                //     data.filter(item2 => {
                //         const horarioSeccion = [];
                //         if (item2.Asignatura.nombre.toLowerCase().replaceAll(' ', '') == nombreAsignatura) {
                //             item2.Horarios.forEach(horario => {
                //                 // console.log(horario)
                //                 horarioSeccion.push(horario);
                //             });
                //             // console.log(horarioSeccion);
                //             if (horarioSeccion.length > 0) {
                //                 subHorarios.push(horarioSeccion);
                //             }
                //             // console.log(subHorarios);

                //         }
                //     })
                //     if (subHorarios.length > 0) horariosInOrder.push(subHorarios);
                //     // console.log(item, secciones[item])

                // }

            });
            console.log(horariosInOrder)



            setFilteredData(secciones);
            // console.log(horariosInOrder)
            // console.log(filteredData);
            setExpanded(null);
        }
    };
    const apiURL = process.env.NEXT_PUBLIC_API_HOST + ":" + process.env.NEXT_PUBLIC_API_PORT;
    const handleGuardarSeleccion = () => {
        console.log(selectedData);
        const user = JSON.parse(localStorage.getItem('user'));
        const userId = user.id;
        localStorage.setItem('secciones', JSON.stringify(selectedData));
        selectedData.forEach(async (element) => {
            await axios.post(`http://${apiURL}/api/Estudiante_Seccion/seleccion/${userId}/Seccion/${element.id}`, {
                id_estudiante: userId,
                id_seccion: element.id,
                calificacion_mt: 0,
                calificacion_final: 0,
                periodo_year: Date.now() > new Date(new Date().getFullYear(), 3, 1) ? 2 : Date.now() > new Date(new Date().getFullYear(), 6, 1) ? 3 : Date.now() > new Date(new Date().getFullYear(), 9, 1) ? 4 : 1,
                year: new Date().getFullYear(),
                periodo_estudiante: user.periodos_cursados + 1
            }).then((response) => {
                console.log(response.data);
            });
        });
    };
    return (
        <div className={kanit.className} style={wallpaperStyle}>
            <SidebarEstudiante />
            <Paper elevation={3} style={useStyles.paperBig}>
                <AgreeCancelButtons onClick={handleGuardarSeleccion} />

                <div style={SearchBarContainer}>
                    <SearchBar placeholder={"Buscar asignaturas"} value={searchValue} setSearchValueData={setSearchValueData} onChange={(event) => { setSearchValue(event.target.value) }} onClick={handleSearchClick} />
                </div>

                <ThemeProvider theme={Theme}>
                    <div style={{ maxHeight: "255px", flexDirection: "column", marginTop: "1%", overflow: "auto" }}>
                        {filteredData.map((row, index) => (
                            <Accordion key={row.id} className={kanit.className} style={{ marginBottom: "0.5rem", marginLeft: "17rem", border: '2px solid', width: "860px", borderColor: Theme.palette.primary.main, borderRadius: "20px" }} expanded={expanded == row.id} // Cambia 'panel1' por 'row.id'
                                onChange={handleChange(row.id)}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon style={{ color: Theme.palette.primary.main, height: "35px", width: "35px" }} />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header">
                                    <ListItemText className={kanit.className} style={AsignaturasStyle} primary=<span style={{ fontSize: "20px", fontWeight: "bold" }}>{row.Asignatura.nombre} </span> secondary=<span style={{ fontSize: "16px", fontWeight: "light", flexDirection: "column" }}>Docente: {row.Docente.nombre} | Sección: {row.numero} </span> />
                                    <IconButton aria-label="add" style={{ marginLeft: "auto", marginRight: "10px" }} onClick={handleAddClick}>
                                        <AddIcon style={{ color: Theme.palette.primary.main, height: "35px", width: "35px" }} />
                                    </IconButton>
                                </AccordionSummary>
                                <TableContainer style={{ backgroundColor: "transparent", borderRadius: "20px" }}>
                                    <Table>
                                        <TableHead style={{ backgroundColor: Theme.palette.secondary.table, }}>
                                            <TableRow>
                                                <TableCell></TableCell>
                                                <TableCell style={tableCellStyle2}>Tipo</TableCell>
                                                <TableCell style={tableCellStyle2}>Cupos</TableCell>
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
                                            {horariosInOrder[index] && horariosInOrder[index].map((horario) => {
                                                const dias = [1, 2, 3, 4, 5, 6];
                                                if (horario) {
                                                    row.Horarios = dias.map((dia) => {
                                                        return row.Horarios.find((horario) => horario.dia == dia) || { dia: 0, hora_inicio: "", hora_fin: "" }
                                                    })
                                                }
                                            })}
                                            <TableRow key={index}>
                                                <TableCell>
                                                    <Radio style={{ marginLeft: "50%" }} checked={selectedOption !== null ? true : false}
                                                        onChange={() => { setSelectedOption(index) }} />
                                                </TableCell>
                                                <TableCell>T</TableCell>
                                                <TableCell>{row.cupo}</TableCell>
                                                <TableCell>{row.numero}</TableCell>
                                                <TableCell>{row.Docente && row.Docente.nombre}</TableCell>
                                                {row.Horarios && row.Horarios.map((horario) => {
                                                    return <TableCell key={horario.dia + horario.hora_inicio + horario.hora_fin}>{horario.dia != 0 ? horario.hora_inicio + "/" + horario.hora_fin : ""}</TableCell>
                                                })}
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
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
                                    <TableCell style={tableCellStyle}>Cupos</TableCell>
                                    <TableCell style={tableCellStyle}>Seccion</TableCell>
                                    <TableCell style={tableCellStyle}>Profesor</TableCell>
                                    <TableCell style={tableCellStyle}>Lun</TableCell>
                                    <TableCell style={tableCellStyle}>Mar</TableCell>
                                    <TableCell style={tableCellStyle}>Mier</TableCell>
                                    <TableCell style={tableCellStyle}>Jue</TableCell>
                                    <TableCell style={tableCellStyle}>Vie</TableCell>
                                    <TableCell style={tableCellStyle}>Sab</TableCell>
                                    <TableCell style={tableCellStyle}></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {loading ? (<TableRow>
                                    <TableCell colSpan={10}>Loading...</TableCell>
                                </TableRow>) : (selectedData.map((row, index) => {
                                    console.log("row ", row)
                                    const dias = [1, 2, 3, 4, 5, 6]
                                    row.Horarios = dias.map((dia) => {
                                        return row.Horarios.find((horario) => horario.dia == dia) || { dia: 0, hora_inicio: "", hora_fin: "" }
                                    })
                                    return (
                                        <>
                                            {/* {console.log(row.Horarios)} */}
                                            <TableRow key={index}>
                                                <TableCell>{row.Asignatura.nombre}</TableCell>
                                                <TableCell>{row.cupo}</TableCell>
                                                <TableCell>{row.numero}</TableCell>
                                                <TableCell>{row.Docente.nombre}</TableCell>
                                                {
                                                    row.Horarios.map((horario) => {
                                                        return <TableCell key={horario.hora_fin + horario.hora_inicio + horario.dia}>{horario.dia != 0 ? horario.hora_inicio + "/" + horario.hora_fin : ""}</TableCell>
                                                    })}
                                                {
                                                    <TableCell>
                                                        <IconButton onClick={() => { selectedData.splice(index, 1); setExpanded(0) }}>
                                                            <Delete />
                                                        </IconButton>
                                                    </TableCell>
                                                /* <TableCell>{row.Horarios.forEach((horario) => { return horario.hora_inicio; if (horario.dia == 1) { return horario.hora_inicio + "/" + horario.hora_fin; } })}</TableCell>
                                            <TableCell>{row.Horarios.dia == 2 ? row.Horarios.hora_inicio + "/" + row.Horarios.hora_inicio : ""}</TableCell>
                                            <TableCell>{row.mier}</TableCell>
                                            <TableCell>{row.jue}</TableCell>
                                            <TableCell>{row.vier}</TableCell>
                                            <TableCell>{row.sab}</TableCell> */}
                                            </TableRow>
                                        </>
                                    )
                                }))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </Paper>
        </div >
    );
}