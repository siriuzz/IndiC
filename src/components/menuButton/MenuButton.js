import React from 'react'
import styles from "./style.module.css"

function MenuButton() {
  return (
    <div className={styles.inicio}>
      <div className={styles.textWrapper}>Inicio</div>
      <img className={styles.iconoCasa} alt="Icono casa" src="../../assets/icono-casa.png" />
    </div>
  )
}

export default MenuButton