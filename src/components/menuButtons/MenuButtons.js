'use client'
import React from 'react'
import Image from 'next/image'
import styles from "./style.module.css"
import Button from '@mui/material/Button';
import GradeIcon from '@mui/icons-material/Grade';
import { ThemeProvider } from '@emotion/react';
import theme from '@/app/theme';


function MenuButtons() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant='contained' startIcon={<GradeIcon />}>
        MenuButton
      </Button>
    </ThemeProvider>

  )
}

export default MenuButtons