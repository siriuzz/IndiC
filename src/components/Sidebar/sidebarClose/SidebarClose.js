import Image from 'next/image';
import styles from "./style.module.css";
import { IconButton } from '@mui/material';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css'

//icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GradeOutlined from '@mui/icons-material/GradeOutlined';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import EditOutlined from '@mui/icons-material/EditOutlined';

export default function SidebarCloseEstudiante() {
    return (
        <div class="container-fluid col d-flex flex-column">
            <div >
                <IconButton className={styles.button}>
                    <MenuOutlinedIcon className={styles.icon} />
                </IconButton>

                <Image className={styles.logo}
                    src={"https://github.com/JuanDanielU/DisBG/blob/main/Logo.png?raw=true"}
                    width={50}
                    height={118}
                    alt="Logo app"
                />
            </div>

            <div>
                <Link href="/inicio_estudiante">
                    <IconButton className={styles.button}>
                        <HomeOutlinedIcon className={styles.icon} />
                    </IconButton>
                </Link>

                <Link href="/seleccionar_asignaturas">
                    <IconButton className={styles.button}>
                        <EditOutlined className={styles.icon} />
                    </IconButton>
                </Link>

                <Link href="/calificaciones_estudiante">
                <IconButton className={styles.button}>
                    <GradeOutlined className={styles.icon} />
                </IconButton>
                </Link>


                <IconButton className={styles.button}>
                    <SignalCellularAltIcon className={styles.icon} />
                </IconButton>


                <Link href="/cuenta_estudiante">
                    <IconButton className={styles.button}>
                        <PeopleAltOutlinedIcon className={styles.icon} />
                    </IconButton>
                </Link>

            </div>
            <div class="mt-auto align-bottom" style={{ marginBottom: "15px" }}>
                <IconButton className={styles.button}>
                    <SettingsOutlinedIcon className={styles.icon} />
                </IconButton>

                <Link href="/login">
                    <IconButton className={styles.button}>
                        <ExitToAppOutlinedIcon className={styles.icon} />
                    </IconButton>
                </Link>
            </div>
        </div>
    )
}