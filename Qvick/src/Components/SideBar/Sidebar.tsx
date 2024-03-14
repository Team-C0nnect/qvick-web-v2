import * as S from "src/Components/SideBar/Sidebar.Style"
import { useNavigate } from "react-router-dom";
import React from 'react';
import home from "src/Assets/img/home.png";
import out from "src/Assets/img/out.png";
import check from "src/Assets/img/check.png";
import go from "src/Assets/img/go.png";

export default function SideBar() {
    const navigate = useNavigate();
    return (
        <S.SideWrap>
            <S.SideBar>
                <S.SideM>
                    <S.MemberWrap
                        onClick={() => {
                            navigate("/Member")
                        }}>
                        <S.HomeIcon src={home} alt="이미지"></S.HomeIcon>
                        구성원
                    </S.MemberWrap>
                    <S.CheckWrap
                        onClick={() => {
                            navigate("/Check")
                        }}>
                        <S.CheckIcon src={check} alt="이미지"></S.CheckIcon>
                        출석
                    </S.CheckWrap>
                    <S.NotCheckWrap
                        onClick={() => {
                            navigate("/NotCheck")
                        }}>
                        <S.CheckIcon src={check} alt="이미지"></S.CheckIcon>
                        미출석
                    </S.NotCheckWrap>
                    <S.OutWrap
                        onClick={() => {
                            navigate("/OutMember")
                        }}>
                        <S.GoIcon src={go} alt="이미지"></S.GoIcon>
                        외출
                    </S.OutWrap>
                    <S.HomeWrap
                        onClick={() => {
                            navigate("/HomeMember")
                        }}>
                        <S.outIcon src={out} alt="이미지"></S.outIcon>
                        외박
                    </S.HomeWrap>
                </S.SideM>
            </S.SideBar>
        </S.SideWrap>
    )
}