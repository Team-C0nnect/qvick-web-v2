import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";
import axios from 'axios';
import Head from "src/components/head/index";
import SideBar from "src/components/sideBar/index";
import * as S from "src/components/HomeMember/HomeMember.Style";

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
