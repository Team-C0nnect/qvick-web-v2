import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";
import axios from 'axios';
import Head from "src/Components/Head/Head/Head";
import SideBar from "src/Components/SideBar/Sidebar";
import Back from "src/Components/Back/Back";
import * as S from "src/Components/Main/Main.Style";
import MainList from "src/Components/Main/MainList/MainList";
import ListBack from "src/Components/ListBack/ListBack";

export default function Main() {
    return (
        <S.MainWrap>
            <Head />
            <SideBar />
            <Back />
            <MainList />
            <ListBack />
            <S.Title>구성원 관리</S.Title>
            <S.Footer>2024 DGSW.School C0nnect</S.Footer>
        </S.MainWrap>
    );
}