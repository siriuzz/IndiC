"use client"
import './globals.css'
import { Kanit } from 'next/font/google'

const kanit = Kanit({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'IndiC',
  description: 'Created by Group #5',
}

export const useStyles = {
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
  },
  divlinearProgressHead: {
    width: "280px",
    marginLeft: "50px",
    // paddingBottom: "100px",

    fontSize: "20px",
  },
  divlinearProgress: {
    width: "280px",
    marginLeft: "50px",
    marginTop: "50px",
    fontSize: "20px",
  },
  linearProgress: {
    marginTop: "5px",
    marginBottom: "5px",
  },
  circularProgress: {
    borderRadius: "50px",
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kanit.className}>{children}</body>
    </html>
  )
}
