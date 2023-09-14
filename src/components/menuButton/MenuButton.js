import React from 'react'
import Image from 'next/image'
import styles from "./style.module.css"


function MenuButton() {
  return (
    <button className={styles.inicio}>
      <div className={styles.textWrapper}>Inicio</div>
      <Image className={styles.iconoCasa} alt="Icono casa" src="https://github.com/JuanDanielU/DisBG/blob/main/icono-casa.png?raw=true" width={400} height={200} />
    </button>
    
  )
}

export default MenuButton