import * as S from "src/components/head/logo/Logo.Style"
import AppLogo from "src/assets/images/head/appLogo.png"

export default function Logo() {
    return (
        <S.LogoWrap>
            <S.Logo src={AppLogo} alt="이미지"></S.Logo>
        </S.LogoWrap>
    )
}