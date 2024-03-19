import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";
import axios from 'axios';
import Head from "src/Components/Head/Head/Head";
import SideBar from "src/Components/SideBar/Sidebar";
import Back from "src/Components/Back/Back";
import * as S from "src/Components/OutMember/OutMember.Style";

export default function OutMember() {
    return (
        <S.OutMemberWrap>
            <Head />
            <SideBar />
            <Back />
            <S.Title>외출 관리</S.Title>
            <S.Footer>2024 DGSW.School C0nnect</S.Footer>
        </S.OutMemberWrap>
    );
}
