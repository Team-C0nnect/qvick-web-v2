import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";
import axios from 'axios';
import Head from "src/Components/Head/Head/Head";
import SideBar from "src/Components/SideBar/Sidebar";
import * as S from "src/Components/HomeMember/HomeMember.Style";

export default function HomeMember() {
    return (
        <S.HomeMemberWrap>
            <Head />
            <SideBar />
            <S.Title>외박 관리</S.Title>
            <S.Footer>2024 DGSW.School C0nnect</S.Footer>
        </S.HomeMemberWrap>
    );
}
