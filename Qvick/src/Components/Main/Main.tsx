import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";
import axios from 'axios';
import Head from "src/Components/Head/Head";
import SideBar from "src/Components/SideBar/Sidebar";
import Search from "src/Components/Search/Search";
import * as s from "src/Components/Main/Style/Main.Style";



export default function Main() {
    

    return (
        <div className="Main">
            <Head />
            <SideBar />
            <Search />
        </div>
    );
}
