import { useNavigate } from "react-router-dom";
import React from "react";
import * as S from "src/components/head/name/Name.Style"

export default function Name() {
    const navigate = useNavigate();
    return(
        <S.NameWrap>
            <S.Name>안영세님</S.Name>
            <S.logOut
                onClick={() => {
                    navigate("/")
                }}>
                로그아웃
            </S.logOut>
        </S.NameWrap>
    )
}