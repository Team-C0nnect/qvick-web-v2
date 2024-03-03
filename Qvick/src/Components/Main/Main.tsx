import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";
import axios from 'axios';
import Head from "src/Components/Head/Head/Head";
import SideBar from "src/Components/SideBar/Sidebar";
import * as s from "src/Components/Main/Main.Style";



export default function Main() {
    return (
        <div className="Main">
            <Head />
            <SideBar />
        </div>
    );
}
