import Image from 'next/image'
import styles from "./style.module.css"
import SidebarOpen from '../sidebar/sidebarOpen/SidebarOpen'
import Button from "@mui/material/Button"


function MenuButton() {
  return (
    <Button className={styles.menuButton}>
      <Image
        src={"https://github.com/JuanDanielU/DisBG/blob/main/menuIcon.png?raw=true"} 
        height={40}
        width={45}
        alt="Menu icon"
      />
    </Button>
  )
}

export default MenuButton