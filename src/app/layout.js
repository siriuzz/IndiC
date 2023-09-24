"use client"
import './globals.css'
import { Kanit } from 'next/font/google'
import { makeStyles } from "@mui/styles";

const kanit = Kanit({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'IndiC',
  description: 'Created by Group #5',
}

export const useStyles = makeStyles({
  paperSmall: {
    marginTop: "30px",
    marginLeft: "40px",
    borderRadius: "25px",
    width: "608px",
    height: "650px",
    alignItems: "center",
    display: "flex",
    flexDirection: "column"
  },
  paperBig: {
    backgroundColor: "white",
    borderRadius: "40px",
    marginTop: "20px",
    marginBottom: "20px",
    marginRight: "20px",
    height: "94.3vh",
    width: "100%",
  }
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kanit.className}>{children}</body>
    </html>
  )
}
