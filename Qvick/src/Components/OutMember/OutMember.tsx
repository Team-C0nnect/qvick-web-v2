import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";
import axios from 'axios';
import Head from "src/components/head/index";
import SideBar from "src/components/sideBar/index";
import * as S from "src/components/OutMember/OutMember.Style";

export default function OutMember() {
    return (
        <S.OutMemberWrap>
            <Head />
            <SideBar />
            <S.Title>외출 관리</S.Title>
            <S.Footer>2024 DGSW.School C0nnect</S.Footer>
        </S.OutMemberWrap>
    );
}
