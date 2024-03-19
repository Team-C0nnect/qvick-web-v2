import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";
import axios from 'axios';
import Head from "src/Components/Head/Head/Head";
import SideBar from "src/Components/SideBar/Sidebar";
import Back from "src/Components/Back/Back";
import * as S from "src/Components/Main/Main.Style";



export default function Main() {
    return (
        <S.MainWrap>
            <Head />
            <SideBar />
            <Back />
        </S.MainWrap>
    );
}
