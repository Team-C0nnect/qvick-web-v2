import * as S from "src/Components/Head/Head/Head.Style"
import HeadLogo from "src/Components/Head/Logo/Logo"
import HeadName from "src/Components/Head/Name/Name";
import HeadSearch from "src/Components/Head/Search/Search";

export default function Head() {
    return (
        <S.Head>
            <HeadLogo />
            <HeadSearch />
            <HeadName />
        </S.Head>
    )
}