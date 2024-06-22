import * as S from "src/components/head/Head.Style"
import HeadLogo from "src/components/head/logo/index";
import Situation from "src/components/head/situation/index";
import HeadName from "src/components/head/name/index";

export default function Head() {
    return (
        <S.Head>
            <HeadLogo />
            <Situation />
            <HeadName />
        </S.Head>
    )
}