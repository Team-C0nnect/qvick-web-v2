import { useNavigate } from "react-router-dom";
import React from "react";
import * as S from "src/Components/Head/Name/Name.Style"

export default function Name() {
    const navigate = useNavigate();
    return(
        <S.NameWrap>
            <S.Name>관리자님</S.Name>
            <S.logoOut>로그아웃</S.logoOut>
        </S.NameWrap>
    )
}