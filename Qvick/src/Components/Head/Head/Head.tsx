import * as S from "src/Components/Head/Head/Head.Style"
import React, { useEffect, useState } from "react";
import AppLogo from "src/Assets/img/appLogo.png";
import Ch from "src/Assets/img/CH.png";
import HeadLogo from "src/Components/Head/Logo/Logo"
import HeadName from "src/Components/Head/Name/Name";
import HeadSearch from "src/Components/Head/Search/Search";

export default function Head() {
    return (
        <S.Head>
            <S.HeadTitleWrap>
                <HeadLogo />
                <HeadSearch />
                <HeadName />
            </S.HeadTitleWrap>
        </S.Head>
    )
}