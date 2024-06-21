import * as S from "src/components/head/Head.Style"
import HeadLogo from "src/components/head/logo/index";
import HeadName from "src/components/head/name/index";
import HeadSearch from "src/components/head/search/index";

export default function Head() {
    return (
        <S.Head>
            <HeadLogo />
            <HeadSearch />
            <HeadName />
        </S.Head>
    )
}