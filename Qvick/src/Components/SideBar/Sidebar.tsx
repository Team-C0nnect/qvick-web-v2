import * as S from "src/Components/SideBar/Sidebar.Style"
import { useNavigate } from "react-router-dom";
import React from 'react';
import home from "src/Assets/images/SideBar/home.png";
import out from "src/Assets/images/SideBar/out.png";
import check from "src/Assets/images/SideBar/check.png";
import go from "src/Assets/images/SideBar/go.png";

export default function SideBar() {
    const navigate = useNavigate();
    return (
        <S.SideWrap>
            <S.SideM>
                 <S.moveWrap
                    onClick={() => {
                        navigate("/Main")
                    }}>
                    <img src={home} alt="이미지"></img>
                      <span>구성원</span>
                </S.moveWrap>
                <S.moveWrap
                    onClick={() => {
                        navigate("/Check")
                    }}>
                    <img src={check} alt="이미지"></img>
                    <span>출석</span>
                </S.moveWrap>
                <S.moveWrap  
                    onClick={() => {
                        navigate("/NotCheck")
                    }}>
                    <img src={check} alt="이미지"></img>
                    <span>미출석</span>
                </S.moveWrap>
                <S.moveWrap
                    onClick={() => {
                        navigate("/OutMember")
                    }}>
                    <img src={go} alt="이미지"></img>
                    <span>외출</span>
                </S.moveWrap>
                <S.moveWrap
                    onClick={() => {
                        navigate("/HomeMember")
                    }}>
                    <img src={out} alt="이미지"></img>
                    <span>외박</span>
                </S.moveWrap>
                <S.moveWrap
                    onClick={() => {
                         navigate("/Approve")
                    }}>
                    <img src={check} alt="이미지"></img>
                    <span>승인</span>
                </S.moveWrap>
             </S.SideM>
        </S.SideWrap>
    )
}