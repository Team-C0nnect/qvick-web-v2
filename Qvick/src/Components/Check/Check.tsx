import "./Main.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Head from '../Head/Head'
import SideBar from "../SideBar/Sidebar";
export default function Check() {
    return (
        <div className="Check">
            <Head />
            <SideBar />
            <div className="CheckList"></div>
        </div>
    )
}