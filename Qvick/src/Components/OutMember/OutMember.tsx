import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";
import axios from 'axios';
import Head from "src/Components/Head/Head/Head";
import SideBar from "src/Components/SideBar/Sidebar";

export default function OutMember() {
    return (
        <div className="OutMemberWrap">
            <Head />
            <SideBar />
        </div>
    );
}
