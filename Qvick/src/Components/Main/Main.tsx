import "./Main.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Head from '../Head/Head'
import SideBar from "../SideBar/Sidebar";
export default function Main() {
    return (
        <div className="Main">
            <Head />
            <SideBar />
            <div className="MainList"></div>
        </div>
    )
}