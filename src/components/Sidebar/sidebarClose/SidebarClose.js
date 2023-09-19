import Image from 'next/image';
import styles from "./style.module.css";
import { IconButton } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.css'

//icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GradeOutlined from '@mui/icons-material/GradeOutlined';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';



function SidebarCloseEstudiante() {
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
                <IconButton className={styles.button}>
                    <HomeOutlinedIcon className={styles.icon} />
                </IconButton>

                <IconButton className={styles.button}>
                    <GradeOutlined className={styles.icon} />
                </IconButton>

                <IconButton className={styles.button}>
                    <SignalCellularAltIcon className={styles.icon} />
                </IconButton>

                <IconButton className={styles.button}>
                    <PeopleAltOutlinedIcon className={styles.icon} />
                </IconButton>


            </div>
            <div class="mt-auto align-bottom">
                <IconButton className={styles.button}>
                    <SettingsOutlinedIcon className={styles.icon} />
                </IconButton>

                <IconButton className={styles.button}>
                    <ExitToAppOutlinedIcon className={styles.icon} />
                </IconButton>
            </div>

        </div>
    )
}

export default SidebarCloseEstudiante