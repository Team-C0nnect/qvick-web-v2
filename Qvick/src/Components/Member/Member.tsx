import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";
import * as S from "src/Components/Member/Member.Style"
import axios from 'axios';
import Head from "src/Components/Head/Head/Head";
import SideBar from "src/Components/SideBar/Sidebar";
import Back from "src/Components/Back/Back";
import ListBack from "src/Components/ListBack/ListBack";


export default function Member() {
    return (
        <S.MemberWrap>
            <Head />
            <SideBar />
            <Back />
            <ListBack />
            <S.Title>구성원 관리</S.Title>
            <S.Footer>2024 DGSW.School C0nnect</S.Footer>
        </S.MemberWrap>
    );
}
