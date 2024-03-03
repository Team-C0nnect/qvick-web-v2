import * as S from "src/Components/SideBar/Sidebar.Style"
import { useNavigate } from "react-router-dom";
import React from 'react';

export default function SideBar() {
    const navigate = useNavigate();
    return (
        <S.SideWrap>
            <S.SideBar>
                <S.SideM>
                    <S.MemberWrap
                        onClick={() => {
                            navigate("/Member")
                        }}
                    >구성원</S.MemberWrap>
                    <S.CheckWrap
                        onClick={() => {
                            navigate("/Check")
                        }}
                    >
                    출석</S.CheckWrap>
                    <S.NotCheckWrap
                        onClick={() => {
                            navigate("/NotCheck")
                        }}
                    >
                    미출석</S.NotCheckWrap>
                    <S.OutWrap
                        onClick={() => {
                            navigate("/OutMember")
                        }}
                    >
                    외출</S.OutWrap>
                    <S.HomeWrap
                        onClick={() => {
                            navigate("/HomeMember")
                        }}
                    >
                    외박</S.HomeWrap>
                </S.SideM>
            </S.SideBar>
        </S.SideWrap>
    )
}