import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "./components/Navbar/Navbar";
import {navLinks} from "@/app/constants";
import './App.scss'
import React from "react";
import ClientOnly from "@/app/components/ClientOnly";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Yusuph - Portifolio',
  description: 'Yusuph Portifolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    {/*<ClientOnly>*/}
    {/*</ClientOnly>*/}
    <body className={inter.className}>{children}</body>
    </html>
  )
}
