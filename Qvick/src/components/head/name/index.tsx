import { useNavigate } from "react-router-dom";
import React from "react";
import * as S from "src/components/head/name/Name.Style"
import UseLogout from "src/hooks/auth/useLogout";

export default function Name() {
    const navigate = useNavigate();
    const { logOut } = UseLogout();
    return(
        <S.NameWrap>
            <S.Name>관리자님</S.Name>
            <S.logOut
                onClick={logOut}>
                로그아웃
            </S.logOut>
        </S.NameWrap>
    )
}