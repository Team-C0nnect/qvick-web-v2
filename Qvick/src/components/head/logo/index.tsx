import * as S from "src/components/head/logo/Logo.Style"
import appLogo from "src/assets/images/head/logo.svg";

export default function Logo() {
    return (
        <S.LogoWrap>
            <S.Logo src={appLogo} alt="이미지"></S.Logo>
        </S.LogoWrap>
    )
}