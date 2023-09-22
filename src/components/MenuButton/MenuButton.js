import Image from 'next/image'
import styles from "./style.module.css"
import Button from "@mui/material/Button"


export default function MenuButton() {
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
