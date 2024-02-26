import * as S from "src/Components/Head/Logo/Logo.Style"
import React from "react";
import AppLogo from "src/Assets/img/appLogo.png";
import Ch from "src/Assets/img/CH.png";

export default function Logo() {
    return (
        <S.LogoWrap>
            <S.Logo src={AppLogo} alt="이미지"></S.Logo>
            <S.Ch src={Ch} alt="이미지"></S.Ch>
        </S.LogoWrap>
    )
}