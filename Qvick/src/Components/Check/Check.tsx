import Head from "src/Components/Head/Head/Head";
import SideBar from "src/Components/SideBar/Sidebar";
import * as S from "src/Components/Check/Check.Style";
import CheckList from "src/Components/Check/CheckList/index";

export default function Check() {
    return (
        <S.CheckWrap>
            <Head />
            <SideBar />
            <CheckList />
        </S.CheckWrap>
    );
};