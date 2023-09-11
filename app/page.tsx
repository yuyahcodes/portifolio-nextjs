import Image from 'next/image'
import {Header} from "@/app/container";
import Navbar from "@/app/components/Navbar/Navbar";
import {navLinks} from "@/app/constants";
import React from "react";
import './App.scss'


export default function Home() {
  return (
      <div className="app">
          <Navbar navLinks={navLinks} />
          <Header/>
      </div>
  );
}
