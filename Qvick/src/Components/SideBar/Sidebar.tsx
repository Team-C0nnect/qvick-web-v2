import * as S from "src/Components/SideBar/Sidebar.Style"
import React from 'react';

export default function SideBar() {
    return (
        <S.SideWrap>
            <S.SideBar>
                <S.SideM>
                    <S.MemberWrap>구성원</S.MemberWrap>
                    <S.CheckWrap>출석</S.CheckWrap>
                    <S.HomeWrap>외출/외박</S.HomeWrap>
                </S.SideM>
            </S.SideBar>
        </S.SideWrap>
    )
}