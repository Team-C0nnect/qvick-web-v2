import * as S from "src/Components/Head/Logo/Logo.Style"
import AppLogo from "src/Assets/images/Head/appLogo.png"

export default function Logo() {
    return (
        <S.LogoWrap>
            <S.Logo src={AppLogo} alt="이미지"></S.Logo>
        </S.LogoWrap>
    )
}